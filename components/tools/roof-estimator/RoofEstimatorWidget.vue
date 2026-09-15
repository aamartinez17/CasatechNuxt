<template>
  <section class="py-10 sm:py-14 bg-secondary/40 text-slate-100 relative antialiased min-h-[92vh] flex items-center" id="live-estimator">
    <!-- Ambient Background Accents -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      
      <!-- APP FRAME CONTAINER -->
      <div class="bg-primary border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-[640px] relative">
        
        <!-- TOP APP BAR -->
        <div class="bg-slate-950/80 border-b border-slate-800/80 px-6 py-4 flex items-center justify-between backdrop-blur-md">
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>
            <div class="h-4 w-px bg-slate-800 mx-1"></div>
            <span class="text-xs font-mono uppercase tracking-widest text-slate-400">
              Casatech Roof Engine // <span class="text-secondary font-bold">Step {{ currentStep }} of 3</span>
            </span>
          </div>

          <!-- Quick Action Controls -->
          <div class="flex items-center gap-3">
            <!-- Magnifying Glass Quick-Jump to Input View -->
            <button 
              v-if="currentStep !== 1"
              type="button"
              @click="currentStep = 1"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-secondary border border-slate-700 transition-all shadow-sm group"
              title="Change Address / Search"
            >
              <font-awesome-icon icon="magnifying-glass" class="group-hover:scale-110 transition-transform" />
              <span class="hidden sm:inline">Search Address</span>
            </button>

            <!-- Step Indicators -->
            <div class="flex items-center gap-1.5">
              <span 
                v-for="s in 3" 
                :key="s"
                class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                :class="currentStep === s ? 'bg-secondary w-6' : 'bg-slate-800'"
              ></span>
            </div>
          </div>
        </div>

        <!-- APP CONTENT BODY -->
        <div class="flex-1 p-6 sm:p-10 flex flex-col justify-center relative overflow-hidden">
          
          <!-- ANALYZING LOADING STATE OVERLAY -->
          <div v-if="isLoading" class="absolute inset-0 bg-slate-950/90 z-30 flex flex-col items-center justify-center text-center p-6 space-y-6 backdrop-blur-xl animate-fade-in">
            <div class="relative w-24 h-24 flex items-center justify-center">
              <div class="absolute inset-0 rounded-full border-4 border-secondary/20 animate-ping"></div>
              <div class="absolute inset-2 rounded-full border-4 border-t-secondary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
              <font-awesome-icon icon="satellite" class="text-secondary text-3xl animate-pulse" />
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-heading font-bold text-white tracking-wide">
                {{ analysisStepText }}
              </h3>
              <p class="text-xs font-mono text-slate-400 max-w-xs mx-auto">
                Synthesizing satellite elevation mesh, LIDAR point cloud, and computer vision shingle classification...
              </p>
            </div>
            <div class="w-full max-w-xs bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
              <div class="bg-gradient-to-r from-secondary to-sky-400 h-full transition-all duration-300" :style="{ width: analysisProgress + '%' }"></div>
            </div>
          </div>

          <!-- ========================================== -->
          <!-- STEP 1: ADDRESS, SAMPLES & WASTE % SETUP   -->
          <!-- ========================================== -->
          <div v-if="currentStep === 1" class="max-w-2xl mx-auto w-full space-y-8 animate-fade-in">
            <div class="text-center space-y-2">
              <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                Property Identification
              </span>
              <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                Enter an Address or Choose a Benchmark
              </h2>
              <p class="text-sm text-slate-400">
                Select a sample roof archetype below or input any custom street address to run an instant 3D takeoff.
              </p>
            </div>

            <!-- Address Input Card -->
            <div class="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
              <AddressInput 
                v-model="searchQuery"
                :is-loading="isLoading"
                @place-selected="onPlaceSelected"
                @submit="runAnalysis"
              />

              <!-- Sample Benchmarks Grid -->
              <div class="pt-5 border-t border-slate-800">
                <span class="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Sample Property Benchmarks
                </span>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button 
                    v-for="preset in presets" 
                    :key="preset.id"
                    type="button"
                    @click="loadPreset(preset)"
                    class="text-left p-3 rounded-xl border transition-all"
                    :class="activePresetId === preset.id 
                      ? 'bg-secondary/20 border-secondary text-white shadow-sm' 
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:text-white'"
                  >
                    <span class="font-heading font-semibold text-xs block mb-0.5">{{ preset.label.split(' ')[0] }} Roof</span>
                    <span class="text-[10px] text-slate-400 block truncate">{{ preset.address }}</span>
                  </button>
                </div>
              </div>

              <!-- Contractor Waste Contingency Selection -->
              <div class="pt-5 border-t border-slate-800 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Contractor Waste Contingency
                  </span>
                  <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    +{{ wastePercentage }}% Margin
                  </span>
                </div>

                <div class="grid grid-cols-3 gap-2">
                  <button 
                    v-for="pct in [10, 15, 20]" 
                    :key="pct"
                    type="button"
                    @click="wastePercentage = pct"
                    class="py-2.5 px-2 text-xs font-semibold rounded-xl border transition-all text-center"
                    :class="wastePercentage === pct 
                      ? 'bg-secondary text-white border-secondary shadow-sm' 
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'"
                  >
                    +{{ pct }}%
                    <span class="block text-[9px] font-normal opacity-75 mt-0.5">
                      {{ pct === 10 ? 'Gable' : pct === 15 ? 'Hip/Valley' : 'Complex' }}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- ========================================== -->
          <!-- STEP 2: VISUAL PREVIEW & SPATIAL RENDER    -->
          <!-- ========================================== -->
          <div v-if="currentStep === 2" class="space-y-6 animate-fade-in max-w-4xl mx-auto w-full">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-heading font-bold text-white">Aerial & Street-View Spatial Inspection</h3>
                <p class="text-xs text-slate-400 font-mono">{{ searchQuery }}</p>
              </div>
              <div class="text-right">
                <span class="text-xs font-mono bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-lg">
                  {{ currentData.pitchRatio || '5:12' }} Slope ({{ currentData.pitchDegrees || 21 }}°)
                </span>
              </div>
            </div>

            <!-- Visual Component Wrapper -->
            <div class="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl min-h-[420px] flex flex-col">
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
          </div>

          <!-- ========================================== -->
          <!-- STEP 3: MATHEMATICAL TAKEOFF & PRICING     -->
          <!-- ========================================== -->
          <div v-if="currentStep === 3" class="space-y-6 animate-fade-in max-w-4xl mx-auto w-full">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-heading font-bold text-white">Takeoff Metrics & Regional Pricing</h3>
                <p class="text-xs text-slate-400 font-mono">Waste factor applied: +{{ wastePercentage }}%</p>
              </div>
              <button 
                type="button"
                @click="currentStep = 2"
                class="text-xs font-semibold text-secondary hover:underline flex items-center gap-1"
              >
                &larr; Back to Visual Preview
              </button>
            </div>

            <!-- Dimension Breakdown Table (Includes pricing and obstacles internally) -->
            <div class="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <DimensionBreakdown 
                :ground-footprint-sq-ft="currentData.groundFootprintSqFt"
                :true-roof-area="trueRoofArea"
                :pitch-ratio="currentData.pitchRatio"
                :pitch-degrees="currentData.pitchDegrees"
                :facets-count="currentData.facetsCount"
                :ridges="currentData.ridges"
                :valleys="currentData.valleys"
                :waste-percentage="wastePercentage"
                :detected-material="currentData.detectedMaterial"
                :obstacles="currentData.obstacles || currentData.detectedObstacles"
                :detected-obstacles="currentData.obstacles || currentData.detectedObstacles"
                :building-height="currentData.buildingHeightFt"
                :stories="currentData.estimatedStories"
              />
            </div>
          </div>

        </div>

        <!-- BOTTOM APP FOOTER NAVIGATION BAR -->
        <div class="bg-slate-950/90 border-t border-slate-800 px-6 py-4 flex items-center justify-between backdrop-blur-md">
          <button 
            v-if="currentStep > 1"
            type="button"
            @click="currentStep--"
            class="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-heading font-bold text-white transition-all flex items-center gap-2 border border-slate-700 shadow-sm"
          >
            <font-awesome-icon icon="arrow-left" class="text-xs" />
            <span>Previous Step</span>
          </button>
          <div v-else></div> <!-- Spacer -->

          <button 
            v-if="currentStep < 3"
            type="button"
            @click="handleNextStep"
            class="px-6 py-2.5 rounded-xl bg-secondary hover:bg-secondary/90 text-xs font-heading font-bold text-white transition-all flex items-center gap-2 shadow-lg shadow-secondary/20"
          >
            <span>{{ currentStep === 1 ? 'Run Analysis & View Visuals' : 'View Takeoff & Pricing' }}</span>
            <font-awesome-icon icon="arrow-right" class="text-xs" />
          </button>
          
          <NuxtLink 
            v-else
            to="/contact"
            class="px-6 py-2.5 rounded-xl bg-cta hover:bg-cta-hover text-xs font-heading font-bold text-white transition-all flex items-center gap-2 shadow-lg"
          >
            <span>Request Detailed Proposal</span>
            <font-awesome-icon icon="arrow-right" class="text-xs" />
          </NuxtLink>
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

const currentStep = ref(1)
const searchQuery = ref('16 Copper Beech Rd, Greenwich, CT 06830')
const isLoading = ref(false)
const analysisProgress = ref(0)
const analysisStepText = ref('Initializing Satellite Mesh...')
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
    obstacles: ['Chimneys', 'Skylights', 'Plumbing Vents'],
    detectedObstacles: ['Chimneys', 'Skylights', 'Plumbing Vents'],
    buildingHeightFt: 20,
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
    obstacles: ['Plumbing Vents'],
    detectedObstacles: ['Plumbing Vents'],
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
    obstacles: ['HVAC Units', 'Roof Hatch'],
    detectedObstacles: ['HVAC Units', 'Roof Hatch'],
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
  '1:12': 1.003, '2:12': 1.014, '3:12': 1.031, '4:12': 1.054,
  '5:12': 1.083, '6:12': 1.118, '7:12': 1.158, '8:12': 1.202,
  '9:12': 1.250, '10:12': 1.302, '11:12': 1.357, '12:12': 1.414
}

const trueRoofArea = computed(() => {
  if (currentData.value.trueRoofSqFt) return currentData.value.trueRoofSqFt
  const multiplier = pitchMultipliers[currentData.value.pitchRatio] || 1.158
  return Math.round((currentData.value.groundFootprintSqFt || 1800) * multiplier)
})

const baseSquares = computed(() => ((trueRoofArea.value || 0) / 100).toFixed(2))

const simulateAnalyzingSteps = () => {
  analysisProgress.value = 15
  analysisStepText.value = 'Locating parcel boundaries...'
  
  setTimeout(() => {
    if (!isLoading.value) return
    analysisProgress.value = 45
    analysisStepText.value = 'Extracting LIDAR 3D elevation slope...'
  }, 500)

  setTimeout(() => {
    if (!isLoading.value) return
    analysisProgress.value = 75
    analysisStepText.value = 'Classifying shingle material & penetrations...'
  }, 1000)

  setTimeout(() => {
    if (!isLoading.value) return
    analysisProgress.value = 95
    analysisStepText.value = 'Computing pitch multiplier & waste geometry...'
  }, 1500)
}

const loadPreset = (preset) => {
  activePresetId.value = preset.id
  searchQuery.value = preset.address
  userModifiedHeading.value = null
  currentData.value = {
    ...preset,
    obstacles: preset.obstacles || preset.detectedObstacles || [],
    detectedObstacles: preset.detectedObstacles || preset.obstacles || []
  }
}

const handleNextStep = async () => {
  if (currentStep.value === 1) {
    await runAnalysis()
  } else {
    currentStep.value++
  }
}

const onPlaceSelected = async (placeData) => {
  searchQuery.value = placeData.formattedAddress
  currentData.value.lat = Number(placeData.lat)
  currentData.value.lng = Number(placeData.lng)
  userModifiedHeading.value = null 
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
    const geocoded = await geocodeAddress(searchQuery.value)
    if (geocoded) {
      targetLat = geocoded.lat
      targetLng = geocoded.lng
      targetAddress = geocoded.formattedAddress
      searchQuery.value = geocoded.formattedAddress
      currentData.value.lat = targetLat
      currentData.value.lng = targetLng
      userModifiedHeading.value = null
    }
  }

  await runLiveAnalysis(targetLat, targetLng, targetAddress, userModifiedHeading.value, userModifiedPitch.value)
}

const runLiveAnalysis = async (lat, lng, address, heading = null, pitch = 10) => {
  isLoading.value = true
  simulateAnalyzingSteps()

  try {
    const payload = { lat: Number(lat), lng: Number(lng), address, pitch: Number(pitch) || 10 }
    if (heading !== null && heading !== undefined) payload.heading = Number(heading)

    const result = await $fetch('/api/roof-estimate', {
      method: 'POST',
      body: payload
    })

    if (result) {
      setTimeout(() => {
        // Explicitly unify obstacles from API response
        const resolvedObstacles = result.obstacles || result.detectedObstacles || ['Plumbing Vents']

        currentData.value = {
          ...currentData.value,
          ...result,
          obstacles: resolvedObstacles,
          detectedObstacles: resolvedObstacles,
          lat: Number(result.lat || lat),
          lng: Number(result.lng || lng)
        }
        isLoading.value = false
        currentStep.value = 2 
      }, 1600)
    } else {
      isLoading.value = false
    }
  } catch (error) {
    console.error('API estimation error:', error)
    isLoading.value = false
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.35s ease-out forwards;
}
</style>