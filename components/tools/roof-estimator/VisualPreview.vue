<template>
  <!-- Outer Card with Animated Spinning Gradient Border -->
  <div class="card-gradient-border backdrop-blur-md p-6 relative overflow-hidden shadow-2xl space-y-4 text-white">
    
    <!-- Top HUD Header Strip -->
    <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/15 relative z-10">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-cta animate-pulse"></span>
        <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-100">
          Multi-Angle Structural Inspection
        </h4>
      </div>

      <!-- View Selector Buttons -->
      <div class="flex flex-wrap items-center gap-1.5 bg-primary/70 border border-white/10 p-1 rounded-lg backdrop-blur-md">
        <button
          type="button"
          @click="activeView = 'all'"
          class="px-2.5 py-1 text-[11px] font-mono rounded transition-colors"
          :class="activeView === 'all' ? 'bg-secondary text-white font-bold shadow-sm' : 'text-slate-300 hover:text-white'"
        >
          View All
        </button>
        <button
          type="button"
          @click="activeView = 'photo'"
          class="px-2.5 py-1 text-[11px] font-mono rounded transition-colors"
          :class="activeView === 'photo' ? 'bg-secondary text-white font-bold shadow-sm' : 'text-slate-300 hover:text-white'"
        >
          Satellite Photo
        </button>
        <button
          type="button"
          @click="activeView = 'interactive'"
          class="px-2.5 py-1 text-[11px] font-mono rounded transition-colors"
          :class="activeView === 'interactive' ? 'bg-secondary text-white font-bold shadow-sm' : 'text-slate-300 hover:text-white'"
        >
          Interactive Aerial
        </button>
        <button
          type="button"
          @click="activeView = 'street'"
          class="px-2.5 py-1 text-[11px] font-mono rounded transition-colors"
          :class="activeView === 'street' ? 'bg-secondary text-white font-bold shadow-sm' : 'text-slate-300 hover:text-white'"
        >
          Street Panorama
        </button>
        <button
          type="button"
          @click="activeView = 'elevation'"
          class="px-2.5 py-1 text-[11px] font-mono rounded transition-colors"
          :class="activeView === 'elevation' ? 'bg-secondary text-white font-bold shadow-sm' : 'text-slate-300 hover:text-white'"
        >
          Elevated Perspective
        </button>
      </div>
    </div>

    <!-- Permanent Recalculation Action Floating HUD (Greyed out when idle, Spinner when loading) -->
    <div 
      class="border px-4 py-2.5 rounded-xl shadow-xl flex items-center justify-between gap-4 backdrop-blur-md relative z-20 transition-all duration-300"
      :class="isActionable && !isLoading
        ? 'bg-primary/95 border-cta/60' 
        : 'bg-primary/60 border-white/10 opacity-75'"
    >
      <div class="flex items-center gap-2 text-xs font-mono">
        <span 
          class="w-2 h-2 rounded-full transition-colors"
          :class="isLoading 
            ? 'bg-amber-400 animate-spin' 
            : (isActionable ? 'bg-cta animate-ping' : 'bg-slate-500')"
        ></span>
        
        <span v-if="isLoading" class="text-amber-200">
          Synthesizing LiDAR & Dual-Angle Computer Vision...
        </span>
        <span v-else-if="hasPinMoved" class="text-slate-100">
          Pin repositioned: {{ pendingCoords.lat?.toFixed(5) }}°, {{ pendingCoords.lng?.toFixed(5) }}°
        </span>
        <span v-else-if="hasHeadingChanged" class="text-slate-100">
          Elevation heading adjusted: {{ streetHeading }}°
        </span>
        <span v-else class="text-slate-400">
          Drag pin or rotate panorama to recalibrate inspection
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="cancelAdjustment"
          :disabled="!isActionable || isLoading"
          class="px-2.5 py-1 rounded text-[11px] font-mono transition-colors"
          :class="isActionable && !isLoading 
            ? 'text-slate-300 hover:text-white hover:bg-white/10' 
            : 'text-slate-600 opacity-40 cursor-not-allowed'"
        >
          Reset
        </button>
        
        <button
          type="button"
          @click="applyAdjustment"
          :disabled="!isActionable || isLoading"
          class="px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold transition-all shadow-md flex items-center gap-1.5"
          :class="isActionable && !isLoading 
            ? 'bg-cta hover:bg-cta/90 text-white shadow-cta/20 active:scale-95' 
            : 'bg-slate-800 text-slate-500 border border-slate-700 opacity-50 cursor-not-allowed'"
        >
          <font-awesome-icon 
            v-if="isLoading" 
            icon="spinner" 
            class="fa-spin text-xs" 
          />
          <span>{{ isLoading ? 'Recalculating...' : 'Recalculate AI & LiDAR' }}</span>
        </button>
      </div>
    </div>

    <!-- Viewport Container -->
    <div 
      class="grid gap-4 transition-all duration-300 relative z-10"
      :class="{
        'grid-cols-1 md:grid-cols-2': activeView === 'all',
        'grid-cols-1': activeView !== 'all'
      }"
    >
      
      <!-- VIEW 1: High-Res Satellite Aerial Photo -->
      <div 
        v-show="activeView === 'all' || activeView === 'photo'"
        class="relative h-64 rounded-xl bg-primary/80 border border-white/10 overflow-hidden flex flex-col justify-between p-3 group shadow-inner"
      >
        <img 
          :src="computedSatelliteUrl" 
          alt="Satellite Top-Down Roof Photo" 
          class="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />

        <div class="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
          <div class="w-8 h-8 border border-white rounded-full flex items-center justify-center">
            <div class="w-1.5 h-1.5 bg-cta rounded-full"></div>
          </div>
        </div>

        <div class="relative z-10 flex items-center justify-between text-[10px] font-mono">
          <span class="bg-primary/90 text-white px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
            SATELLITE PHOTO
          </span>
          <span class="bg-primary/90 text-slate-300 px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
            Top-Down Planar
          </span>
        </div>

        <div class="relative z-10 flex flex-wrap gap-2 text-[10px] font-mono">
          <span class="bg-primary/90 text-slate-200 px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
            Lat: {{ Number(lat).toFixed(4) }}° Lng: {{ Number(lng).toFixed(4) }}°
          </span>
          <span class="bg-primary/90 text-cta px-2 py-0.5 rounded border border-cta/40 backdrop-blur-sm font-semibold">
            {{ facetsCount || 8 }} Planes Mapped
          </span>
        </div>
      </div>

      <!-- VIEW 2: Interactive Oblique Map Canvas with Draggable Pin -->
      <div 
        v-show="activeView === 'all' || activeView === 'interactive'"
        class="relative h-64 rounded-xl bg-primary/80 border border-white/10 overflow-hidden flex flex-col justify-between p-3 group shadow-inner"
      >
        <div ref="mapContainer" class="absolute inset-0 w-full h-full z-0 bg-primary/80"></div>

        <div v-if="!isMapLoaded" class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none z-10 bg-primary/90">
          <svg class="w-full h-full max-h-48 text-secondary/80" viewBox="0 0 400 200" fill="none">
            <polygon points="50,160 120,45 280,45 350,160" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.12" />
            <line x1="120" y1="45" x2="280" y2="45" stroke="#38bdf8" stroke-width="3" />
            <line x1="50" y1="160" x2="120" y2="45" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3" />
            <line x1="350" y1="160" x2="280" y2="45" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3" />
          </svg>
        </div>

        <div class="relative z-20 flex items-center justify-between text-[10px] font-mono pointer-events-auto">
          <span class="bg-primary/90 text-white px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
            {{ isMapLoaded ? 'DRAG PIN TO ADJUST ROOF' : 'SIMULATED 3D VECTOR' }}
          </span>

          <div v-if="isMapLoaded" class="flex items-center gap-1 bg-primary/90 border border-white/20 rounded p-1 backdrop-blur-sm">
            <span class="text-slate-300 px-1 text-[9px]">{{ currentHeading }}°</span>
            <button type="button" @click="rotateHeading(-90)" title="Rotate Left" class="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 text-white rounded transition-colors">↺</button>
            <button type="button" @click="rotateHeading(90)" title="Rotate Right" class="px-1.5 py-0.5 bg-white/10 hover:bg-white/20 text-white rounded transition-colors">↻</button>
          </div>
        </div>

        <div class="relative z-20 flex flex-wrap gap-2 text-[10px] font-mono pointer-events-none">
          <span class="bg-primary/90 text-slate-200 px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
            Azimuth: {{ currentHeading }}°
          </span>
          <span class="bg-primary/90 text-cta px-2 py-0.5 rounded border border-cta/40 backdrop-blur-sm font-semibold">
            Drag marker to adjust
          </span>
        </div>
      </div>

      <!-- VIEW 3: Interactive Street View Panorama -->
      <div 
        v-show="activeView === 'all' || activeView === 'street'"
        class="relative h-64 rounded-xl bg-primary/80 border border-white/10 overflow-hidden flex flex-col justify-between p-3 group shadow-inner"
      >
        <div 
          ref="streetViewContainer" 
          v-show="isStreetViewReady && !streetViewError" 
          class="absolute inset-0 w-full h-full z-0"
        ></div>

        <img 
          v-if="!isStreetViewReady || streetViewError" 
          :src="computedStreetViewUrl" 
          alt="Street Elevation Facade Photo" 
          class="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity z-0"
        />

        <div class="relative z-10 flex items-center justify-between text-[10px] font-mono pointer-events-auto">
          <span class="bg-primary/90 text-white px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
            {{ isStreetViewReady && !streetViewError ? 'INTERACTIVE STREET PANORAMA' : 'STREET FACADE PHOTO' }}
          </span>
          <span class="bg-slate-950/85 text-slate-300 px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
            Heading: {{ streetHeading }}°
          </span>
        </div>

        <div class="relative z-10 flex flex-wrap gap-2 text-[10px] font-mono pointer-events-none">
          <span class="bg-primary/90 text-amber-300 px-2 py-0.5 rounded border border-amber-300/40 backdrop-blur-sm">
            {{ detectedMaterial || 'Architectural Shingle' }}
          </span>
          <span class="bg-primary/90 text-slate-300 px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
            Pan & rotate to align facade
          </span>
        </div>
      </div>

      <!-- VIEW 4: Dynamic Elevated Perspective Schematic -->
      <div 
        v-show="activeView === 'all' || activeView === 'elevation'"
        class="relative h-64 rounded-xl bg-primary/80 border border-white/10 overflow-hidden flex flex-col justify-between p-3 group shadow-inner"
      >
        <div class="absolute inset-0 flex items-center justify-center p-3 pointer-events-none bg-primary/75 backdrop-blur-[2px]">
          <svg class="w-full h-full max-h-52 text-secondary" viewBox="0 0 420 200" fill="none">
            <!-- Ground Line -->
            <line x1="20" y1="175" x2="390" y2="175" stroke="#94a3b8" stroke-width="1.5" />
            <text x="25" y="190" fill="#cbd5e1" font-size="9" font-family="monospace">Grade 0'0"</text>

            <!-- Building Walls -->
            <rect 
              :x="isHighRise ? 115 : 80" 
              :y="wallTopY" 
              :width="isHighRise ? 150 : 220" 
              :height="175 - wallTopY" 
              stroke="#94a3b8" 
              stroke-width="1.5" 
              fill="#0b2d54" 
              fill-opacity="0.5" 
              class="transition-all duration-500 ease-out"
            />

            <!-- Story Dividers -->
            <template v-if="displayStories >= 3 || isHighRise">
              <line 
                v-for="lineIdx in (displayStories - 1)" 
                :key="lineIdx"
                :x1="isHighRise ? 115 : 80" 
                :y1="wallTopY + ((175 - wallTopY) / displayStories) * lineIdx" 
                :x2="isHighRise ? 265 : 300" 
                :y2="wallTopY + ((175 - wallTopY) / displayStories) * lineIdx" 
                stroke="#38bdf8" 
                stroke-width="0.75" 
                stroke-dasharray="2 2" 
                stroke-opacity="0.4"
              />
            </template>
            
            <!-- Dynamic Roof Gable / Parapet -->
            <polygon 
              :points="`${isHighRise ? 110 : 65},${wallTopY} 190,${svgPeakY} ${isHighRise ? 270 : 315},${wallTopY}`" 
              stroke="currentColor" 
              stroke-width="2.5" 
              fill="currentColor" 
              fill-opacity="0.25" 
              class="transition-all duration-500 ease-out"
            />
            
            <!-- Pitch Rise/Run Dimension Lines -->
            <line x1="190" :y1="svgPeakY" x2="190" :y2="wallTopY" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2 2" class="transition-all duration-500 ease-out" />
            <line x1="190" :y1="wallTopY" :x2="isHighRise ? 220 : 255" :y2="wallTopY" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2 2" />
            
            <text x="196" :y="Math.round((svgPeakY + wallTopY) / 2)" fill="#38bdf8" font-size="10" font-family="monospace" class="transition-all duration-500 ease-out">
              {{ pitchRise <= 1 ? 'Parapet' : `Rise: ${pitchRise}"` }}
            </text>
            <text x="200" :y="wallTopY + 12" fill="#38bdf8" font-size="9" font-family="monospace">
              Run: 12"
            </text>

            <!-- Ground-to-Eave Height (Left) -->
            <line x1="45" y1="175" x2="45" :y2="wallTopY" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2 2" class="transition-all duration-500 ease-out" />
            <line x1="40" y1="175" x2="50" y2="175" stroke="#e2e8f0" stroke-width="1" />
            <line x1="40" :y1="wallTopY" x2="50" :y2="wallTopY" stroke="#e2e8f0" stroke-width="1" class="transition-all duration-500 ease-out" />
            <text x="10" :y="Math.round((wallTopY + 175) / 2)" fill="#e2e8f0" font-size="10" font-family="monospace" font-weight="bold">
              {{ eaveHeightFt }}' Eave
            </text>

            <!-- Ground-to-Peak Height (Right) -->
            <line x1="335" y1="175" x2="335" :y2="svgPeakY" stroke="#f97316" stroke-width="1.5" stroke-dasharray="2 2" class="transition-all duration-500 ease-out" />
            <line x1="330" y1="175" x2="340" y2="175" stroke="#f97316" stroke-width="1.5" />
            <line x1="330" :y1="svgPeakY" x2="340" :y2="svgPeakY" stroke="#f97316" stroke-width="1.5" class="transition-all duration-500 ease-out" />
            <text x="345" :y="Math.round((svgPeakY + 175) / 2)" fill="#f97316" font-size="10" font-family="monospace" font-weight="bold" class="transition-all duration-500 ease-out">
              {{ totalRidgeHeightFt }}' {{ isHighRise ? 'Roof' : 'Peak' }}
            </text>
          </svg>
        </div>

        <div class="relative z-10 flex items-center justify-between text-[10px] font-mono">
          <span class="bg-primary/90 text-white px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
            {{ displayStories >= 3 ? `${displayStories}-STORY STRUCTURAL MODEL` : 'ELEVATED PERSPECTIVE SCHEMATIC' }}
          </span>
          <span class="bg-primary/90 text-slate-300 px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
            Pitch: {{ pitchRatio || '7:12' }}
          </span>
        </div>

        <div class="relative z-10 flex flex-wrap gap-2 text-[10px] font-mono">
          <span class="bg-primary/90 text-slate-200 px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm">
            Slope: {{ pitchDegrees || '30.3' }}°
          </span>
          <span class="bg-primary/90 text-cta px-2 py-0.5 rounded border border-cta/40 backdrop-blur-sm font-semibold">
            Eave: {{ eaveHeightFt }}' | Total: {{ totalRidgeHeightFt }}'
          </span>
        </div>
      </div>

    </div>

    <!-- Diagnostic Footnote -->
    <div class="flex items-center justify-between text-[11px] font-mono text-slate-300 pt-1 relative z-10">
      <span>Vector Projection Engine • Dual Multi-Angle Verification</span>
      <span class="text-slate-300">Target Coordinates: {{ Number(lat).toFixed(4) }}°, {{ Number(lng).toFixed(4) }}°</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

const props = defineProps({
  lat: {
    type: [String, Number],
    default: 41.0693
  },
  lng: {
    type: [String, Number],
    default: -73.6189
  },
  pitchRatio: {
    type: String,
    default: '7:12'
  },
  pitchDegrees: {
    type: [String, Number],
    default: 30.3
  },
  facetsCount: {
    type: [String, Number],
    default: 8
  },
  detectedMaterial: {
    type: String,
    default: 'Architectural Shingle'
  },
  buildingHeight: {
    type: [Number, String],
    default: 0
  },
  stories: {
    type: [Number, String],
    default: 0
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  satelliteUrl: {
    type: String,
    default: ''
  },
  streetViewUrl: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['recalculate-coords', 'recalculate-heading'])

const activeView = ref('all')
const mapContainer = ref(null)
const streetViewContainer = ref(null)

const isMapLoaded = ref(false)
const isStreetViewReady = ref(false)
const streetViewError = ref(false)

const currentHeading = ref(0)
const streetHeading = ref(0)

const hasPinMoved = ref(false)
const hasHeadingChanged = ref(false)
const pendingCoords = ref({ lat: null, lng: null })

const isActionable = computed(() => hasPinMoved.value || hasHeadingChanged.value)

let mapInstance = null
let markerInstance = null
let panoramaInstance = null
let pollTimer = null
let isComponentMounted = false

const computedSatelliteUrl = computed(() => {
  const runtimeConfig = useRuntimeConfig()
  const apiKey = runtimeConfig.public?.googleMapsApiKey || ''
  if (apiKey && props.lat && props.lng) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${props.lat},${props.lng}&zoom=20&size=600x400&maptype=satellite&key=${apiKey}`
  }
  return props.satelliteUrl || 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
})

const computedStreetViewUrl = computed(() => {
  const runtimeConfig = useRuntimeConfig()
  const apiKey = runtimeConfig.public?.googleMapsApiKey || ''
  if (apiKey && props.lat && props.lng) {
    return `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${props.lat},${props.lng}&fov=80&heading=${streetHeading.value}&pitch=15&key=${apiKey}`
  }
  return props.streetViewUrl || 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80'
})

const pitchRise = computed(() => {
  const parts = String(props.pitchRatio || '7:12').split(':')
  return Math.min(14, Math.max(1, parseFloat(parts[0]) || 7))
})

const displayStories = computed(() => {
  const s = parseInt(props.stories, 10)
  if (!isNaN(s) && s > 0) return s
  if (parseFloat(props.buildingHeight) >= 26) return 3
  return 2
})

const eaveHeightFt = computed(() => {
  const customHeight = parseFloat(props.buildingHeight)
  const stories = displayStories.value

  if (!isNaN(customHeight) && customHeight > 0) {
    if (stories >= 2 && customHeight < 18) {
      return Math.round(stories * 9.5)
    }
    return Math.round(customHeight)
  }
  
  return stories >= 3 ? 28 : (stories === 2 ? 20 : 12)
})

const totalRidgeHeightFt = computed(() => {
  if (pitchRise.value <= 1) {
    return eaveHeightFt.value + 3
  }
  const roofHeight = Math.round(14 * (pitchRise.value / 12))
  return eaveHeightFt.value + roofHeight
})

const isHighRise = computed(() => eaveHeightFt.value >= 40)

const wallTopY = computed(() => {
  if (eaveHeightFt.value >= 120) return 40
  if (eaveHeightFt.value >= 45)  return 65
  if (eaveHeightFt.value >= 26)  return 88
  return 118
})

const svgPeakY = computed(() => {
  if (pitchRise.value <= 1) return wallTopY.value - 4
  return Math.max(18, Math.round(wallTopY.value - (pitchRise.value * 5)))
})

const initMap = () => {
  if (!isComponentMounted || !window.google?.maps || !mapContainer.value) return

  const latNum = parseFloat(props.lat)
  const lngNum = parseFloat(props.lng)
  if (isNaN(latNum) || isNaN(lngNum)) return

  const position = { lat: latNum, lng: lngNum }

  try {
    if (!mapInstance) {
      mapInstance = new window.google.maps.Map(mapContainer.value, {
        center: position,
        zoom: 20,
        mapTypeId: 'satellite',
        heading: currentHeading.value,
        rotateControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: 'cooperative'
      })

      markerInstance = new window.google.maps.Marker({
        map: mapInstance,
        position,
        draggable: true,
        title: 'Drag to reposition rooftop center'
      })

      markerInstance.addListener('dragend', (event) => {
        pendingCoords.value = { lat: event.latLng.lat(), lng: event.latLng.lng() }
        hasPinMoved.value = true
      })
    } else {
      mapInstance.panTo(position)
      if (markerInstance) markerInstance.setPosition(position)
    }

    isMapLoaded.value = true
  } catch (err) {
    console.warn('Map initialization error:', err)
  }
}

const initStreetView = () => {
  if (!isComponentMounted || !window.google?.maps || !streetViewContainer.value) return

  const latNum = parseFloat(props.lat)
  const lngNum = parseFloat(props.lng)
  if (isNaN(latNum) || isNaN(lngNum)) return

  const position = { lat: latNum, lng: lngNum }

  try {
    const svService = new window.google.maps.StreetViewService()
    
    svService.getPanorama(
      { 
        location: position, 
        radius: 100,
        source: window.google.maps.StreetViewSource.OUTDOOR 
      }, 
      (data, status) => {
        if (!isComponentMounted) return

        if (status === 'OK' && data?.location?.latLng) {
          if (!panoramaInstance) {
            panoramaInstance = new window.google.maps.StreetViewPanorama(streetViewContainer.value, {
              position: data.location.latLng,
              pov: {
                heading: streetHeading.value || 0,
                pitch: 10
              },
              zoom: 1,
              addressControl: false,
              showRoadLabels: false,
              motionTracking: false,
              motionTrackingControl: false
            })

            panoramaInstance.addListener('pov_changed', () => {
              if (!panoramaInstance) return
              const pov = panoramaInstance.getPov()
              streetHeading.value = Math.round(pov.heading)
              hasHeadingChanged.value = true
            })
          } else {
            panoramaInstance.setPosition(data.location.latLng)
            panoramaInstance.setVisible(true)
          }

          isStreetViewReady.value = true
          streetViewError.value = false
        } else {
          streetViewError.value = true
          isStreetViewReady.value = false
          if (panoramaInstance) {
            panoramaInstance.setVisible(false)
          }
        }
      }
    )
  } catch (err) {
    console.warn('Street view initialization error:', err)
    streetViewError.value = true
    isStreetViewReady.value = false
  }
}

const rotateHeading = (delta) => {
  if (!mapInstance || typeof mapInstance.setHeading !== 'function') return
  currentHeading.value = (currentHeading.value + delta + 360) % 360
  mapInstance.setHeading(currentHeading.value)
}

const cancelAdjustment = () => {
  hasPinMoved.value = false
  hasHeadingChanged.value = false
  const pos = { lat: parseFloat(props.lat), lng: parseFloat(props.lng) }
  if (markerInstance) markerInstance.setPosition(pos)
  if (mapInstance) mapInstance.panTo(pos)
}

const applyAdjustment = () => {
  if (props.isLoading) return

  if (hasPinMoved.value && pendingCoords.value.lat) {
    emit('recalculate-coords', {
      lat: pendingCoords.value.lat,
      lng: pendingCoords.value.lng,
      heading: streetHeading.value
    })
  } else if (hasHeadingChanged.value) {
    emit('recalculate-heading', {
      heading: streetHeading.value
    })
  }
  hasPinMoved.value = false
  hasHeadingChanged.value = false
}

// Watch incoming props to update positions and reset pending adjustments
watch(
  () => [props.lat, props.lng],
  ([newLat, newLng]) => {
    streetViewError.value = false
    hasPinMoved.value = false
    hasHeadingChanged.value = false

    const latNum = parseFloat(newLat)
    const lngNum = parseFloat(newLng)
    if (!isNaN(latNum) && !isNaN(lngNum) && isComponentMounted) {
      if (mapInstance) {
        const pos = { lat: latNum, lng: lngNum }
        mapInstance.setCenter(pos)
        if (markerInstance) markerInstance.setPosition(pos)
      } else {
        initMap()
      }
      initStreetView()
    }
  }
)

watch(activeView, async () => {
  await nextTick()
  if (mapInstance && window.google?.maps) {
    window.google.maps.event.trigger(mapInstance, 'resize')
    const latNum = parseFloat(props.lat)
    const lngNum = parseFloat(props.lng)
    if (!isNaN(latNum) && !isNaN(lngNum)) {
      mapInstance.setCenter({ lat: latNum, lng: lngNum })
    }
  }
  if (panoramaInstance && window.google?.maps) {
    window.google.maps.event.trigger(panoramaInstance, 'resize')
  }
})

onMounted(() => {
  isComponentMounted = true
  if (window.google?.maps) {
    initMap()
    initStreetView()
  } else {
    pollTimer = setInterval(() => {
      if (window.google?.maps) {
        clearInterval(pollTimer)
        pollTimer = null
        initMap()
        initStreetView()
      }
    }, 200)
  }
})

onBeforeUnmount(() => {
  isComponentMounted = false
  if (pollTimer) {
    clearInterval(pollTimer)
    pollTimer = null
  }
  mapInstance = null
  markerInstance = null
  panoramaInstance = null
})
</script>