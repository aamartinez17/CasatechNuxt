<template>
  <div class="space-y-4">
    <!-- State 1: Disabled / Maintenance Mode (Visitors) -->
    <div 
      v-if="!isEnabled" 
      class="bg-slate-50/80 border border-slate-200/90 rounded-xl p-5 text-center space-y-3"
    >
      <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary mb-1">
        <font-awesome-icon icon="globe" class="text-base" />
      </div>
      
      <div class="space-y-1">
        <h4 class="text-sm font-bold text-slate-900">
          Live Address Analysis in Private Preview
        </h4>
        <p class="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
          Custom address LiDAR analysis is currently available by appointment. Contact our team to request a full property takeoff.
        </p>
      </div>

      <div class="pt-1">
        <NuxtLink 
          to="/contact" 
          class="inline-flex items-center gap-2 bg-cta hover:bg-cta/90 active:scale-95 text-white text-xs font-semibold py-2.5 px-5 rounded-lg shadow-sm transition-all"
        >
          <span>Contact Us for an Estimate</span>
          <font-awesome-icon icon="arrow-right" class="text-[11px]" />
        </NuxtLink>
      </div>
    </div>

    <!-- State 2: Active Address Bar (Unlocked via Secret URL) -->
    <template v-else>
      <div class="flex items-center justify-between">
        <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700">
          Target Property Address
        </label>
        <span 
          class="text-[11px] font-medium px-2.5 py-0.5 rounded-full border shadow-sm"
          :class="apiReady 
            ? 'text-secondary bg-secondary/10 border-secondary/30' 
            : 'text-amber-700 bg-amber-50 border-amber-200'"
        >
          {{ apiReady ? '● Places Autocomplete Active' : '○ Standalone / Ready' }}
        </span>
      </div>

      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <font-awesome-icon icon="globe" class="text-sm" />
        </div>

        <input 
          ref="inputRef"
          v-model="internalAddress" 
          type="text" 
          placeholder="Enter address (e.g., 240 Whitney Ave, New Haven, CT)"
          autocomplete="off"
          class="w-full bg-bg-light border border-slate-300/80 focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl py-3 pl-10 pr-28 text-slate-900 text-sm placeholder-slate-400 shadow-sm transition-all"
          @keydown.enter.prevent="handleManualSubmit"
        />

        <button 
          type="button"
          @click="handleManualSubmit"
          :disabled="isLoading || !internalAddress.trim()"
          class="absolute right-1.5 top-1/2 -translate-y-1/2 bg-cta hover:bg-cta/90 active:scale-95 disabled:opacity-50 disabled:hover:bg-cta disabled:active:scale-100 text-white text-xs font-semibold py-2 px-3.5 rounded-lg transition-all flex items-center gap-1.5 shadow-sm"
        >
          <font-awesome-icon 
            :icon="isLoading ? 'spinner' : 'arrow-right'" 
            :class="{ 'fa-spin': isLoading }" 
            class="text-[11px]"
          />
          <span>Analyze</span>
        </button>
      </div>

      <p class="text-xs text-slate-500 leading-normal">
        Resolves parcel boundaries, rooftop coordinates, and Google Solar API LiDAR vectors.
      </p>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'place-selected', 'submit'])

const route = useRoute()
const isEnabled = ref(false)
const inputRef = ref(null)
const internalAddress = ref(props.modelValue)
const apiReady = ref(false)
let autocompleteInstance = null

// Differentiate between Persistent (Storage) vs Temporary (Session memory only)
const checkUnlockState = () => {
  if (!import.meta.client) return

  const queryVal = String(route.query.enabled ?? route.query.enable ?? '').toLowerCase()
  const isHashTemp = window.location.hash.toLowerCase().includes('enable')
  const isHashDisable = window.location.hash.toLowerCase().includes('disable')

  // Explicit lockout command: ?enabled=false or #disable
  if (queryVal === 'false' || isHashDisable) {
    localStorage.removeItem('estimator_enabled')
    isEnabled.value = false
    return
  }

  // 1. EXTENDED ACCESS: Query param (?enabled=true) persists across sessions
  if (queryVal === 'true' || queryVal === '1') {
    localStorage.setItem('estimator_enabled', 'true')
    isEnabled.value = true
    return
  }

  // Check if previously unlocked for extended access
  if (localStorage.getItem('estimator_enabled') === 'true') {
    isEnabled.value = true
    return
  }

  // 2. TEMPORARY USE: Hash (#enable) enables for this view only (NOT saved to localStorage)
  if (isHashTemp) {
    isEnabled.value = true
    return
  }

  // Default: Disabled for visitors
  isEnabled.value = false
}

watch(() => props.modelValue, (newVal) => {
  if (newVal !== internalAddress.value) {
    internalAddress.value = newVal
  }
})

watch(internalAddress, (val) => {
  emit('update:modelValue', val)
})

const handleManualSubmit = () => {
  if (!internalAddress.value.trim() || props.isLoading) return
  emit('submit', internalAddress.value)
}

const ensureGoogleMapsLoaded = (apiKey) => {
  return new Promise((resolve, reject) => {
    if (window.google?.maps) {
      resolve()
      return
    }

    if (document.getElementById('google-maps-bootstrap')) {
      const check = setInterval(() => {
        if (window.google?.maps) {
          clearInterval(check)
          resolve()
        }
      }, 100)
      setTimeout(() => { clearInterval(check); reject(new Error('Maps timeout')) }, 8000)
      return
    }

    const script = document.createElement('script')
    script.id = 'google-maps-bootstrap'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&v=weekly`
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = (e) => reject(e)
    document.head.appendChild(script)
  })
}

const initAutocomplete = async () => {
  if (!inputRef.value || !window.google?.maps) return

  try {
    let AutocompleteClass = window.google.maps.places?.Autocomplete

    if (!AutocompleteClass && typeof window.google.maps.importLibrary === 'function') {
      const placesLib = await window.google.maps.importLibrary('places')
      AutocompleteClass = placesLib.Autocomplete
    }

    if (!AutocompleteClass) {
      console.warn('Google Maps Places Autocomplete not available')
      return
    }

    autocompleteInstance = new AutocompleteClass(inputRef.value, {
      types: ['address'],
      componentRestrictions: { country: 'us' },
      fields: ['formatted_address', 'geometry', 'place_id']
    })

    autocompleteInstance.addListener('place_changed', () => {
      const place = autocompleteInstance.getPlace()

      if (!place.geometry || !place.geometry.location) {
        handleManualSubmit()
        return
      }

      const payload = {
        formattedAddress: place.formatted_address || internalAddress.value,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        placeId: place.place_id
      }

      internalAddress.value = payload.formattedAddress
      emit('update:modelValue', payload.formattedAddress)
      emit('place-selected', payload)
    })

    apiReady.value = true
  } catch (err) {
    console.warn('Autocomplete init error:', err)
  }
}

onMounted(async () => {
  if (!import.meta.client) return

  checkUnlockState()

  if (isEnabled.value) {
    const runtimeConfig = useRuntimeConfig()
    const apiKey = runtimeConfig.public?.googleMapsApiKey || ''

    if (apiKey) {
      try {
        await ensureGoogleMapsLoaded(apiKey)
        await initAutocomplete()
      } catch (err) {
        console.warn('Could not initialize Google Places Autocomplete:', err)
      }
    }
  }
})
</script>

<style>
.pac-container {
  z-index: 99999 !important;
  background-color: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 0.75rem !important;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1) !important;
  margin-top: 4px !important;
  font-family: inherit !important;
}

.pac-item {
  padding: 8px 14px !important;
  font-size: 13px !important;
  color: #334155 !important;
  cursor: pointer !important;
  border-top: 1px solid #f1f5f9 !important;
}

.pac-item:first-child {
  border-top: none !important;
}

.pac-item:hover {
  background-color: #f8fafc !important;
}

.pac-item-query {
  font-size: 13px !important;
  color: #0f172a !important;
  font-weight: 600 !important;
}

.pac-icon {
  margin-top: 3px !important;
}
</style>