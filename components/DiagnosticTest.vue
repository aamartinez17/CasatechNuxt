<template>
  <div class="p-10 bg-gray-100 min-h-[400px] flex flex-col items-center justify-center space-y-8 border-4 border-dashed border-gray-300">
    
    <div class="text-center">
      <h2 class="text-2xl font-bold text-primary mb-2">System Diagnostic</h2>
      <p class="text-sm text-body">If you see a blue/orange layout, <span class="font-bold text-green-600">Tailwind is Working</span>.</p>
    </div>

    <button 
      @click="runTest"
      class="bg-cta hover:bg-cta-hover text-white font-bold py-3 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all duration-200"
    >
      Click to Test Console & Reset Animation
    </button>

    <div 
      v-if="showBox"
      v-motion
      :initial="{ opacity: 0, y: 50, scale: 0.8 }"
      :enter="{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } }"
      :hovered="{ scale: 1.1, rotate: 5 }"
      class="w-32 h-32 bg-secondary rounded-xl flex items-center justify-center text-white font-bold shadow-2xl cursor-pointer"
    >
      MOTION OK
    </div>

    <div v-else class="text-muted italic">
      Box hidden. Click button to re-trigger animation.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showBox = ref(true)

const runTest = () => {
  // 1. Check Console
  console.log('--- Casatech Diagnostic ---')
  console.log('✅ Button Clicked: JavaScript Interaction Working')
  console.log('✅ Tailwind Classes Applied: Check button color/shadow')
  
  // 2. Trigger Re-hydration/Re-animation
  showBox.value = false
  setTimeout(() => {
    showBox.value = true
    console.log('✅ Motion Component Re-mounted')
  }, 100)
}

onMounted(() => {
  console.log('🚀 Diagnostic Component Mounted')
  console.log('Checking for Motion Directive:', !!document.querySelector('[v-motion]'))
})
</script>