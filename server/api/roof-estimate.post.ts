// server/api/roof-estimate.post.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody(event)

  const { lat, lng, address, heading, pitch } = body || {}

  console.log('\n' + '━'.repeat(60))
  console.log('🚀 [ROOF-ESTIMATOR] INCOMING RECALCULATION REQUEST')
  console.log(`📍 Coordinates: ${lat}, ${lng}`)
  console.log(`🧭 Heading:     ${heading !== undefined && heading !== null ? heading + '°' : 'AUTO-AIM (Toward Target)'}`)
  console.log(`🏠 Target:      ${address || 'Coordinate Pin'}`)
  console.log('━'.repeat(60))

  if (!lat || !lng) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required coordinates (lat, lng).'
    })
  }

  const solarApiKey = config.googleSolarApiKey || config.public?.googleMapsApiKey
  const geminiKey = config.geminiApiKey
  const publicMapsKey = config.public?.googleMapsApiKey

  // 1. Google Solar API (LiDAR Analysis)
  let solarData: any = null
  if (solarApiKey) {
    try {
      console.log('🛰️ Querying Google Solar API buildingInsights...')
      const solarUrl = `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&requiredQuality=BASE&key=${solarApiKey}`
      solarData = await $fetch(solarUrl)
      console.log('✅ Solar API responded successfully!')
    } catch (err: any) {
      console.warn(`⚠️ Solar API notice: ${err?.data?.error?.message || err?.message || 'Out of coverage'}`)
    }
  }

  // 2. Geometric Takeoff Calculation
  let groundFootprintSqFt = 1800
  let pitchDegrees = 24
  let facetsCount = 2
  let flatAreaMeters = 0
  let buildingHeightFt = 24
  let estimatedStories = 2

  if (solarData?.solarPotential) {
    const sp = solarData.solarPotential
    flatAreaMeters = sp.wholeRoofStats?.groundAreaMeters2 || 0
    groundFootprintSqFt = Math.round(flatAreaMeters * 10.7639) || 1850

    const segments = sp.roofSegmentStats || []
    if (segments.length > 0) {
      facetsCount = segments.length
      const avgPitch = segments.reduce((acc: number, s: any) => acc + (s.pitchDegrees || 0), 0) / segments.length
      pitchDegrees = Math.round(avgPitch)
    }

    if (facetsCount > 15 || flatAreaMeters > 2000) {
      estimatedStories = Math.min(35, Math.max(4, Math.round(flatAreaMeters / 250)))
      buildingHeightFt = estimatedStories * 12
    }
  } else {
    const seed = Math.abs(Math.round(Number(lat) * 1000 + Number(lng) * 1000))
    groundFootprintSqFt = 1500 + (seed % 900)
    pitchDegrees = 20 + (seed % 14)
    facetsCount = 2 + (seed % 4)
  }

  const riseOver12 = Math.max(1, Math.round(Math.tan((pitchDegrees * Math.PI) / 180) * 12))
  const pitchRatio = `${riseOver12}:12`
  const pitchMultiplier = Math.sqrt(1 + Math.pow(riseOver12 / 12, 2))
  const trueRoofSqFt = Math.round(groundFootprintSqFt * pitchMultiplier)

  // 3. Dual-Angle Gemini Multimodal Inspection
  let detectedMaterial = 'Architectural Shingle'
  let detectedObstacles: string[] = ['Plumbing Vents']

  if (geminiKey && publicMapsKey) {
    try {
      const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=20&size=512x512&maptype=satellite&key=${publicMapsKey}`
      
      let streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=640x480&location=${lat},${lng}&fov=85&pitch=${pitch || 10}&key=${publicMapsKey}`
      if (heading !== undefined && heading !== null && !isNaN(Number(heading))) {
        streetViewUrl += `&heading=${Number(heading)}`
      }

      console.log('🤖 Capturing Dual-Angle views for Gemini Multimodal inspection...')
      const [satRes, streetRes] = await Promise.all([
        $fetch.raw(staticMapUrl, { responseType: 'arrayBuffer' }),
        $fetch.raw(streetViewUrl, { responseType: 'arrayBuffer' })
      ])

      const satBase64 = Buffer.from(satRes._data as ArrayBuffer).toString('base64')
      const streetBase64 = Buffer.from(streetRes._data as ArrayBuffer).toString('base64')

      const prompt = `You are a licensed structural engineer inspecting two images of a building:
Image 1: Top-down aerial satellite view (roof details).
Image 2: Street-level view focused directly on this building.

INSPECTION TASK:
1. Examine the PRIMARY building at coordinates ${lat}, ${lng} (ignore small detached sheds or buildings across the street).
2. Look at Image 2 from the ground up:
   - Count every functional vertical level from the driveway/ground grade up to the roof eave.
   - NOTE: If the building has an exposed lower walkout level, drive-in ground floor, or raised deck with full-height living space or garage doors underneath, count this as an active story (e.g. 1 ground/walkout level + 2 upper levels = 3 stories).
3. "buildingHeightFt": Total vertical distance in feet from lowest ground grade to the eave line (~9 to 10.5 ft per story. A 3-story walkout home is ~27 to 30 ft; a 2-story home is ~19 to 22 ft). Do NOT return single-floor ceiling height (like 9, 10, or 11 ft).
4. "detectedMaterial": Roofing material (e.g. Architectural Shingle, 3-Tab Shingle, Standing-Seam Metal, Flat Membrane, TPO).
5. "obstacles": Visible roof penetrations (e.g. Plumbing Vents, Chimneys, Skylights, HVAC Units).

Respond ONLY with valid JSON:
{
  "detectedMaterial": "string",
  "obstacles": ["string"],
  "estimatedStories": number,
  "buildingHeightFt": number
}`

      const payload = {
        contents: [
          {
            parts: [
              { text: prompt },
              { inlineData: { mimeType: 'image/jpeg', data: satBase64 } },
              { inlineData: { mimeType: 'image/jpeg', data: streetBase64 } }
            ]
          }
        ],
        generationConfig: { responseMimeType: 'application/json' }
      }

      const candidateModels = [
        'gemini-2.0-flash',
        'gemini-2.0-flash-001',
        'gemini-3-flash-preview',
        'gemini-2.5-flash',
        'gemini-3.6-flash'
      ]

      let geminiResponse: any = null
      let successfulModel = ''

      for (const model of candidateModels) {
        try {
          geminiResponse = await $fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: payload
            }
          )
          successfulModel = model
          break
        } catch (err: any) {
          console.warn(`Model ${model} returned ${err?.status || err?.statusCode || 'error'}, trying next candidate...`)
        }
      }

      if (geminiResponse) {
        console.log(`✅ Gemini response received via model: ${successfulModel}`)
      }

      const rawJson = geminiResponse?.candidates?.[0]?.content?.parts?.[0]?.text
      console.log('🤖 RAW GEMINI MULTIMODAL RESPONSE:\n', rawJson)

      if (rawJson) {
        const parsed = JSON.parse(rawJson)
        
        // --- DIAGNOSTIC TEST LOGS ---
        console.log('🧪 [TEST LOG] Parsed Obstacles Array from JSON:', parsed.obstacles)
        console.log('🧪 [TEST LOG] Is Array?', Array.isArray(parsed.obstacles))
        // ----------------------------

        if (parsed.detectedMaterial) detectedMaterial = parsed.detectedMaterial
        if (Array.isArray(parsed.obstacles)) detectedObstacles = parsed.obstacles
        
        let stories = parseInt(parsed.estimatedStories, 10) || 2
        let height = parseFloat(parsed.buildingHeightFt) || (stories * 10)

        if (stories >= 2 && height < 18) {
          height = stories * 9.5
        }

        estimatedStories = stories
        buildingHeightFt = Math.round(height)
      }
    } catch (visionErr: any) {
      console.error('❌ Dual-Angle Gemini Vision Error:', visionErr?.message || visionErr)
    }
  }

  console.log('📊 FINAL PAYLOAD SUMMARY:')
  console.log(`   - Detected Material:  ${detectedMaterial}`)
  console.log(`   - Building Height:    ${buildingHeightFt} ft (~${estimatedStories} stories)`)
  console.log(`   - Obstacles:          ${detectedObstacles.join(', ')}`)
  console.log(`   - True Roof Area:     ${trueRoofSqFt} sq ft`)
  console.log(`   - Pitch Ratio:        ${pitchRatio}`)
  console.log('━'.repeat(60) + '\n')

  return {
    address: address || `${Number(lat).toFixed(4)}, ${Number(lng).toFixed(4)}`,
    lat: Number(lat),
    lng: Number(lng),
    groundFootprintSqFt,
    trueRoofSqFt,
    pitchRatio,
    pitchDegrees,
    facetsCount,
    ridges: Math.max(1, Math.floor(facetsCount / 3)),
    valleys: Math.max(0, Math.floor(facetsCount / 2) - 1),
    detectedMaterial,
    detectedObstacles,
    buildingHeightFt,
    estimatedStories,
    satelliteUrl: publicMapsKey ? `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=20&size=600x400&maptype=satellite&key=${publicMapsKey}` : '',
    streetViewUrl: publicMapsKey ? `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${lat},${lng}&fov=80&heading=${heading !== undefined && heading !== null ? heading : 0}&pitch=15&key=${publicMapsKey}` : ''
  }
})