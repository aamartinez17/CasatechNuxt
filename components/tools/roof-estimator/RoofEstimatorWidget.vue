<template>
  <section class="py-16 sm:py-24 bg-slate-50 text-slate-900 relative antialiased" id="live-estimator">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-10 sm:mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 shadow-sm text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          Live Estimator Workspace
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-3">
          Instant Roof Pitch & Surface Takeoff
        </h2>
        <p class="text-slate-600 text-base leading-relaxed">
          Evaluate true 3D surface area, slope multipliers, and shingle requirements in real time. Choose a sample profile or type an address below.
        </p>
      </div>

      <!-- Main Widget Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Controls Column (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Address & Search Card -->
          <div class="bg-primary/20 border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <AddressInput 
              v-model="searchQuery"
              :is-loading="isLoading"
              @place-selected="onPlaceSelected"
              @submit="runAnalysis"
            />

            <!-- Archetype Quick Presets -->
            <div class="mt-6 pt-5 border-t border-slate-100">
              <span class="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
                Sample Property Benchmarks
              </span>
              <div class="flex flex-wrap gap-2">
                <button 
                  v-for="preset in presets" 
                  :key="preset.id"
                  type="button"
                  @click="loadPreset(preset)"
                  class="text-xs font-medium px-3.5 py-2 rounded-xl border transition-all"
                  :class="activePresetId === preset.id 
                    ? 'bg-secondary text-white border-primary shadow-sm' 
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'"
                >
                  {{ preset.label }}
                </button>
              </div>
            </div>
          </div>

          <!-- Waste Factor Selector Card -->
          <div class="bg-secondary/20 border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-5">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-bold text-slate-900">
                Contractor Waste Contingency
              </h3>
              <span class="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                +{{ wastePercentage }}% Margin
              </span>
            </div>

            <!-- Waste Buttons -->
            <div class="grid grid-cols-3 gap-2.5">
              <button 
                v-for="pct in [10, 15, 20]" 
                :key="pct"
                type="button"
                @click="wastePercentage = pct"
                class="py-2.5 px-2 text-xs font-semibold rounded-xl border transition-all text-center"
                :class="wastePercentage === pct 
                  ? 'bg-primary text-white border-slate-900 shadow-sm' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'"
              >
                +{{ pct }}%
                <span class="block text-[10px] font-normal opacity-80 mt-0.5">
                  {{ pct === 10 ? 'Gable' : pct === 15 ? 'Hip/Valley' : 'Complex' }}
                </span>
              </button>
            </div>

            <!-- Measured Geometry Summary -->
            <div class="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <div class="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100">
                <span class="text-slate-500 block text-[11px] font-medium">Detected Pitch</span>
                <span class="text-slate-900 font-bold text-base mt-0.5 block">
                  {{ currentData.pitchRatio || '7:12' }}
                </span>
                <span class="text-slate-500 text-[11px] block mt-0.5">
                  {{ currentData.pitchDegrees || 30.3 }}° Slope
                </span>
              </div>
              <div class="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100">
                <span class="text-slate-500 block text-[11px] font-medium">Planes & Valleys</span>
                <span class="text-slate-900 font-bold text-base mt-0.5 block">
                  {{ currentData.facetsCount || 2 }} Facets
                </span>
                <span class="text-slate-500 text-[11px] block mt-0.5">
                  {{ currentData.valleys ?? 0 }} Valleys / {{ currentData.ridges ?? 1 }} Ridges
                </span>
              </div>
            </div>
          </div>

          <!-- AI Vision Inspection Card -->
          <div class="bg-cta/20 border border-slate-200/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <h3 class="text-sm font-bold text-slate-900">
                  AI Aerial Surface Inspection
                </h3>
              </div>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                Vision Model
              </span>
            </div>

            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
              <div>
                <span class="text-[11px] text-slate-500 block">Identified Shingle Type</span>
                <span class="text-sm font-bold text-slate-900">
                  {{ currentData.detectedMaterial || 'Architectural Shingle' }}
                </span>
              </div>
              <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-1 rounded-lg">
                Verified
              </span>
            </div>

            <div>
              <span class="text-xs font-medium text-slate-600 block mb-2">
                Identified Obstacles & Penetrations:
              </span>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(obstacle, idx) in (currentData.detectedObstacles || ['1 Chimney', '2 Plumbing Vents'])" 
                  :key="idx"
                  class="text-xs bg-slate-100/90 text-secondary font-medium px-2.5 py-1 rounded-lg border border-slate-200/70 inline-flex items-center gap-1.5"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-cta"></span>
                  {{ obstacle }}
                </span>
              </div>
            </div>
          </div>

          <!-- Pricing Estimates Card -->
          <div class="bg-cta border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold text-slate-900">
                Material & Installation Benchmark Ranges
              </h3>
              <span class="text-xs text-slate-500 font-medium">CT Regional Baseline</span>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div class="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
                <span class="text-xs font-semibold text-slate-700 block">Architectural Asphalt</span>
                <span class="text-xs text-slate-500 block">$450 – $600 / Square</span>
                <span class="text-md font-bold text-slate-900 block pt-1">
                  ${{ Math.round(Number(totalOrderSquares || 0) * 450).toLocaleString() }} – ${{ Math.round(Number(totalOrderSquares || 0) * 600).toLocaleString() }}
                </span>
              </div>

              <div class="p-4 bg-blue-50/50 border border-blue-100 rounded-xl space-y-1">
                <span class="text-xs font-semibold text-blue-900 block">Standing-Seam Metal</span>
                <span class="text-xs text-blue-700 block">$950 – $1,300 / Square</span>
                <span class="text-md font-bold text-blue-950 block pt-1">
                  ${{ Math.round(Number(totalOrderSquares || 0) * 950).toLocaleString() }} – ${{ Math.round(Number(totalOrderSquares || 0) * 1300).toLocaleString() }}
                </span>
              </div>
            </div>
          </div>

        </div>

        <!-- Right Visual & Calculations Column (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          
          <!-- Multi-Angle Visual Preview -->
          <div class="rounded-2xl overflow-hidden shadow-sm">
            <VisualPreview 
              :lat="currentData.lat"
              :lng="currentData.lng"
              :pitch-ratio="currentData.pitchRatio"
              :pitch-degrees="currentData.pitchDegrees"
              :facets-count="currentData.facetsCount"
              :detected-material="currentData.detectedMaterial"
              :building-height="currentData.buildingHeightFt"
              :stories="currentData.estimatedStories"
              :satellite-url="currentData.satelliteUrl || ''"
              :street-view-url="currentData.streetViewUrl || ''"
              @recalculate-coords="onRecalculateCoords"
              @recalculate-heading="onRecalculateHeading"
            />
          </div>

          <!-- Mathematical Takeoff Table Card -->
          <div class="rounded-2xl overflow-hidden shadow-sm">
            <DimensionBreakdown 
              :ground-footprint-sq-ft="currentData.groundFootprintSqFt"
              :true-roof-area="trueRoofArea"
              :pitch-ratio="currentData.pitchRatio"
              :pitch-degrees="currentData.pitchDegrees"
              :facets-count="currentData.facetsCount"
              :ridges="currentData.ridges"
              :valleys="currentData.valleys"
              :waste-percentage="wastePercentage"
            />
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import AddressInput from '~/components/tools/roof-estimator/AddressInput.vue'
import VisualPreview from '~/components/tools/roof-estimator/VisualPreview.vue'
import DimensionBreakdown from '~/components/tools/roof-estimator/DimensionBreakdown.vue'

const searchQuery = ref('16 Copper Beech Rd, Greenwich, CT 06830')
const isLoading = ref(false)
const wastePercentage = ref(15)
const activePresetId = ref('colonial')

const presets = [
  {
    id: 'colonial',
    label: 'Colonial 2-Story (Complex Hip)',
    address: '16 Copper Beech Rd, Greenwich, CT 06830',
    groundFootprintSqFt: 4850,
    trueRoofSqFt: 5254,
    pitchRatio: '5:12',
    pitchDegrees: 21,
    facetsCount: 16,
    ridges: 7,
    valleys: 4,
    detectedMaterial: 'Architectural Shingle',
    detectedObstacles: ['1 Chimney', '2 AC Units', '1 plumping vent'],
    buildingHeightFt: 24,
    estimatedStories: 2,
    lat: 41.0693,
    lng: -73.6189
  },
  {
    id: 'ranch',
    label: 'Ranch (Simple Gable)',
    address: '27 Beechwood Rd, Plainville, CT',
    groundFootprintSqFt: 2218,
    trueRoofSqFt: 2403,
    pitchRatio: '5:12',
    pitchDegrees: 24,
    facetsCount: 4,
    ridges: 1,
    valleys: 0,
    detectedMaterial: '3-Tab Shingle',
    detectedObstacles: ['2 Plumbing Vents'],
    buildingHeightFt: 10,
    estimatedStories: 1,
    lat: 41.6914,
    lng: -72.8858
  },
  {
    id: 'commercial',
    label: 'Commercial Low-Slope',
    address: '161163 Forbes Ave, New Haven, CT 06512',
    groundFootprintSqFt: 7667,
    trueRoofSqFt: 7694,
    pitchRatio: '1:12',
    pitchDegrees: 6,
    facetsCount: 3,
    ridges: 1,
    valleys: 0,
    detectedMaterial: 'TPO Membrane',
    detectedObstacles: ['HVAC Units', 'Plumbing Vents', 'Roof Hatch'],
    buildingHeightFt: 18,
    estimatedStories: 1,
    lat: 41.2947,
    lng: -72.9007
  }
]

const currentData = ref({ ...presets[0] })
const userModifiedHeading = ref(null)
const userModifiedPitch = ref(10)

const pitchMultipliers = {
  '1:12': 1.003,
  '2:12': 1.014,
  '3:12': 1.031,
  '4:12': 1.054,
  '5:12': 1.083,
  '6:12': 1.118,
  '7:12': 1.158,
  '8:12': 1.202,
  '9:12': 1.250,
  '10:12': 1.302,
  '11:12': 1.357,
  '12:12': 1.414
}

const trueRoofArea = computed(() => {
  if (currentData.value.trueRoofSqFt) return currentData.value.trueRoofSqFt
  const multiplier = pitchMultipliers[currentData.value.pitchRatio] || 1.158
  return Math.round((currentData.value.groundFootprintSqFt || 1800) * multiplier)
})

const baseSquares = computed(() => {
  return ((trueRoofArea.value || 0) / 100).toFixed(2)
})

const totalOrderSquares = computed(() => {
  const base = parseFloat(baseSquares.value) || 0
  const factor = 1 + ((wastePercentage.value || 15) / 100)
  return (base * factor).toFixed(2)
})

const loadPreset = (preset) => {
  activePresetId.value = preset.id
  searchQuery.value = preset.address
  userModifiedHeading.value = null
  currentData.value = { ...preset }
}

const onPlaceSelected = async (placeData) => {
  searchQuery.value = placeData.formattedAddress
  currentData.value.lat = Number(placeData.lat)
  currentData.value.lng = Number(placeData.lng)
  userModifiedHeading.value = null // reset so the backend uses auto-aiming toward this parcel
  await runLiveAnalysis(placeData.lat, placeData.lng, placeData.formattedAddress, null, 10)
}

const onRecalculateCoords = async (coords) => {
  currentData.value.lat = Number(coords.lat)
  currentData.value.lng = Number(coords.lng)
  if (coords.heading !== undefined) userModifiedHeading.value = coords.heading
  if (coords.pitch !== undefined) userModifiedPitch.value = coords.pitch

  const pinLabel = `${Number(coords.lat).toFixed(5)}, ${Number(coords.lng).toFixed(5)}`
  await runLiveAnalysis(coords.lat, coords.lng, pinLabel, userModifiedHeading.value, userModifiedPitch.value)
}

const onRecalculateHeading = ({ heading, pitch }) => {
  if (heading !== undefined) userModifiedHeading.value = Math.round(heading)
  if (pitch !== undefined) userModifiedPitch.value = Math.round(pitch)
  
  const apiKey = useRuntimeConfig().public?.googleMapsApiKey
  if (apiKey) {
    currentData.value.streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${currentData.value.lat},${currentData.value.lng}&fov=80&heading=${heading}&pitch=${pitch || 10}&key=${apiKey}`
  }
}

// Client-side Geocoder fallback if user clicks Analyze rather than picking from autocomplete dropdown
const geocodeAddress = (address) => {
  return new Promise((resolve) => {
    if (!window.google?.maps?.Geocoder) {
      resolve(null)
      return
    }
    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results?.[0]?.geometry?.location) {
        resolve({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
          formattedAddress: results[0].formatted_address
        })
      } else {
        resolve(null)
      }
    })
  })
}

const runAnalysis = async () => {
  let targetLat = currentData.value.lat
  let targetLng = currentData.value.lng
  let targetAddress = searchQuery.value

  if (searchQuery.value !== currentData.value.address) {
    isLoading.value = true
    const geocoded = await geocodeAddress(searchQuery.value)
    if (geocoded) {
      targetLat = geocoded.lat
      targetLng = geocoded.lng
      targetAddress = geocoded.formattedAddress
      searchQuery.value = geocoded.formattedAddress
      currentData.value.lat = targetLat
      currentData.value.lng = targetLng
      userModifiedHeading.value = null // reset for new location
    }
  }

  await runLiveAnalysis(targetLat, targetLng, targetAddress, userModifiedHeading.value, userModifiedPitch.value)
}

const runLiveAnalysis = async (lat, lng, address, heading = null, pitch = 10) => {
  isLoading.value = true
  activePresetId.value = null

  try {
    const payload = {
      lat: Number(lat),
      lng: Number(lng),
      address,
      pitch: Number(pitch) || 10
    }
    
    // Only pass heading if the user manually aligned/panned the panorama
    if (heading !== null && heading !== undefined) {
      payload.heading = Number(heading)
    }

    const result = await $fetch('/api/roof-estimate', {
      method: 'POST',
      body: payload
    })

    if (result) {
      currentData.value = {
        ...currentData.value,
        ...result,
        lat: Number(result.lat || lat),
        lng: Number(result.lng || lng)
      }
    }
  } catch (error) {
    console.error('API estimation error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>