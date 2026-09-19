<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const containerRef = ref(null)
let masterTl = null

const binaryBits = ref([])
const backgroundClouds = ref([])
const midgroundClouds = ref([])
const foregroundClouds = ref([])

onMounted(() => {
  const isMobile = window.innerWidth < 768

  binaryBits.value = Array.from({ length: isMobile ? 30 : 200 }, () => ({
    char: Math.round(Math.random()),
    top: Math.random() * 150 - 25,
    left: Math.random() * 100,
    size: Math.random() * 12 + (isMobile ? 20 : 50),
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2
  }))

  backgroundClouds.value = Array.from({ length: isMobile ? 8 : 30 }, () => ({
    top: Math.random() * 140 - 20,
    left: Math.random() * 100,
    scale: Math.random() * 0.2 + 0.4,
    opacity: Math.random() * 0.2 + 0.3
  }))

  midgroundClouds.value = Array.from({ length: isMobile ? 15 : 25 }, () => ({
    top: Math.random() * 140 - 20,
    left: Math.random() * 100,
    scale: Math.random() * 0.3 + 0.9,
    opacity: Math.random() * 0.3 + 0.5
  }))

  foregroundClouds.value = Array.from({ length: isMobile ? 12 : 20}, () => ({
    top: Math.random() * 140 - 20,
    left: Math.random() * 100,
    scale: Math.random() * 0.5 + (isMobile ? 1.5 : 2),
    opacity: Math.random() * 0.2 + 0.9
  }))

  masterTl = gsap.timeline({
    repeat: -1,
    repeatDelay: 2.0
  })

  const baseTravelHeight = window.innerHeight < 800 ? 900 : 2600;

  // --- CONTINUOUS BACKGROUND MOTION (Staggered Parallax Depths) ---
  masterTl
    .fromTo(['.bg-parallax-layer', '.midground-clouds-layer', '.foreground-clouds-layer', '.cloud-transparency-layer'], 
      { x: 0, y: 0 }, 
      { 
        x: () => window.innerWidth < 768 ? -750 : -2200, 
        duration: 3.2, 
        ease: 'none' 
      }, 0
    )
    .to('.bg-parallax-layer', { y: baseTravelHeight * 0.4, duration: 7.8, ease: 'none' }, 3.2)
    .to(['.midground-clouds-layer', '.cloud-transparency-layer'], { y: baseTravelHeight * 0.8, duration: 7.8, ease: 'none' }, 3.2)
    .to('.foreground-clouds-layer', { y: baseTravelHeight * 1.4, duration: 7.8, ease: 'none' }, 3.2)

  // --- FOREGROUND CONTENT TIMELINE ---
  masterTl
    // Act 1: Workflow & First Arrow (With fluid stretch scale)
    .fromTo('.main-arrow-act1', 
      { x: () => window.innerWidth < 768 ? -420 : -1050, opacity: 0, rotation: 90, scaleX: 1.3, scaleY: 0.8 }, 
      { x: () => window.innerWidth < 768 ? -240 : -650, opacity: 1, rotation: 90, scaleX: 1.1, scaleY: 1.1, duration: 0.8, ease: 'power3.out' }, 0.1
    )
    .fromTo('.letter-w', 
      { x: -480, opacity: 0, scale: 0.3, rotation: -15 }, 
      { x: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.4)' }, 0.1
    )
    .to('.main-arrow-act1', { x: () => window.innerWidth < 768 ? -260 : -680, scaleX: 1.2, scaleY: 1.0, duration: 1.0, ease: 'sine.inOut' }, 0.9)
    .fromTo('.workflow-char', 
      { opacity: 0, y: 40, scale: 0.2, rotation: 10 }, 
      { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.6, stagger: 0.05, ease: 'back.out(1.7)' }, 1.9
    )
    .to('.main-arrow-act1', { x: 900, opacity: 0, rotation: 90, scaleX: 1.5, scaleY: 0.7, duration: 0.5, ease: 'power2.in' }, 2.7)
    .to('.workflow-container', { opacity: 0, scale: 0.95, duration: 0.4 }, 2.9)

    // Act 2 & 3: Sweeping Fluid Arrows, Connect, and Growth
    .fromTo('.sweep-arrow-left', 
      { x: -650, y: 280, opacity: 0, rotation: 55, scaleX: 2.5, scaleY: 1.2 }, 
      { 
        keyframes: [
          { x: -350, y: 100, rotation: 25, opacity: 0.7, scaleX: 1.8, scaleY: 1.4, duration: 0.6, ease: 'power1.out' },
          { x: -160, y: 350, rotation: 0, opacity: 1, scaleX: 1.1, scaleY: 1.2, duration: 0.6, ease: 'power2.inOut' }
        ]
      }, 
      3.3
    )
    .fromTo('.sweep-arrow-center', 
      { x: 0, y: 320, opacity: 0, scaleX: 2.8, scaleY: 1.1 }, 
      { 
        keyframes: [
          { x: 0, y: 160, rotation: 0, opacity: 0.7, scaleX: 1.9, scaleY: 1.3, duration: 0.6, ease: 'power1.out' },
          { x: 0, y: 360, rotation: 0, opacity: 1, scaleX: 1.1, scaleY: 1.2, duration: 0.6, ease: 'power2.inOut' }
        ]
      }, 
      3.3
    )
    .fromTo('.sweep-arrow-right', 
      { x: 650, y: 280, opacity: 0, rotation: -55, scaleX: 2.5, scaleY: 1.2 }, 
      { 
        keyframes: [
          { x: 350, y: 150, rotation: -25, opacity: 0.7, scaleX: 1.8, scaleY: 1.4, duration: 0.6, ease: 'power1.out' },
          { x: 160, y: 350, rotation: 0, opacity: 1, scaleX: 1.1, scaleY: 1.2, duration: 0.6, ease: 'power2.inOut' }
        ]
      }, 
      3.3
    )
    .fromTo('.connect-char', 
      { opacity: 0, y: 30, scale: 0.5 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.04, ease: 'back.out(1.7)' }, 3.5
    )
    .to('.convergence-group', { y: isMobile ? -95 : -45, duration: 0.5, ease: 'power2.out' }, 3.5)
    
    .to('.text-connect', { opacity: 0, y: -60, duration: 0.4 }, 5.6)
    .to('.convergence-group', { y: -350, duration: 0.7, ease: 'power2.out' }, 5.9)
    
    // Growth fades in
    .fromTo('.growth-char', 
      { opacity: 0, y: 30, scale: 0.5 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.04, ease: 'back.out(1.7)' }, 6.6
    )
    .to('.convergence-group', { y: '-=8', duration: 0.7, yoyo: true, repeat: 4, ease: 'sine.inOut' }, 6.6)
    .to('.text-growth', { duration: 2.2 }, 7.2)
    .to('.text-growth', { opacity: 0, y: 120, duration: 0.6, ease: 'power1.in' }, 9.4)
    .to('.convergence-group', { y: -900, opacity: 0, duration: 0.35, ease: 'power3.in' }, 10.0)

    // --- ACT 4: THE FLASH & LOGO REVEAL ---
    .set(['.convergence-group', '.text-growth', '.text-connect'], { opacity: 0 }, 10.5)
    .set(['.bg-parallax-layer', '.midground-clouds-layer', '.foreground-clouds-layer', '.cloud-transparency-layer'], { x: 0, y: 0 }, 10.5)
    .to('.flash-overlay', { opacity: 1, duration: 0.15 }, 10.5)
    .to('.flash-overlay', { opacity: 1, duration: 0.5 }, 10.65)
    .set('.complete-logo-container', { display: 'flex', opacity: 1 }, 10.9)
    .to('.flash-overlay', { opacity: 0, duration: 1.0, ease: 'power2.out' }, 10.9)
    .to({}, { duration: 3.0 }, 11.9)
})

onUnmounted(() => {
  if (masterTl) masterTl.kill()
})
</script>

<template>
  <div 
    ref="containerRef" 
    class="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-sky-400 via-sky-200 to-white text-slate-900 font-sans select-none"
  >
    <!-- Background Layer (Slowest) -->
    <div class="bg-parallax-layer absolute inset-y-[-250%] inset-x-[-250%] pointer-events-none overflow-hidden z-0">
      <span 
        v-for="(bit, i) in binaryBits" 
        :key="'bit-' + i"
        class="absolute text-blue-600/30 font-mono font-bold"
        :style="{ top: `${bit.top}%`, left: `${bit.left}%`, fontSize: `${bit.size}px` }"
      >{{ bit.char }}</span>

      <div 
        v-for="(cloud, i) in backgroundClouds" 
        :key="'bg-cloud-' + i"
        class="absolute"
        :style="{ top: `${cloud.top}%`, left: `${cloud.left}%`, transform: `scale(${cloud.scale})`, opacity: cloud.opacity }"
      >
        <img src="/animation/cloud.png" alt="Cloud" class="w-48 h-auto object-contain brightness-0 invert drop-shadow-[0_4px_12px_rgba(255,255,255,0.6)]" />
      </div>
    </div>

    <!-- Midground Layer (Medium Speed) -->
    <div class="midground-clouds-layer absolute inset-y-[-250%] inset-x-[-250%] pointer-events-none overflow-hidden z-1">
      <div 
        v-for="(cloud, i) in midgroundClouds" 
        :key="'mg-cloud-' + i"
        class="absolute"
        :style="{ top: `${cloud.top}%`, left: `${cloud.left}%`, transform: `scale(${cloud.scale})`, opacity: cloud.opacity }"
      >
        <img src="/animation/cloud.png" alt="Cloud" class="w-64 h-auto object-contain brightness-0 invert drop-shadow-[0_6px_16px_rgba(255,255,255,0.7)]" />
      </div>
    </div>

    <!-- Transparency Layer -->
    <div class="cloud-transparency-layer absolute inset-y-[-250%] inset-x-[-250%] pointer-events-none overflow-hidden z-5 opacity-40 mix-blend-overlay">
      <div 
        v-for="(cloud, i) in midgroundClouds" 
        :key="'trans-cloud-' + i"
        class="absolute"
        :style="{ top: `${(cloud.top + 10) % 150}%`, left: `${(cloud.left + 15) % 100}%`, transform: `scale(${cloud.scale * 1.2})` }"
      >
        <img src="/animation/cloud.png" alt="Transparent Cloud Layer" class="w-72 h-auto object-contain brightness-0 invert filter blur-[1px]" />
      </div>
    </div>

    <!-- Foreground Content (Acts 1, 2, 3) -->
    <div class="entire-sequence-stage relative w-full max-w-6xl h-[500px] flex items-center justify-center overflow-visible z-10">
      
      <!-- ACT 1: WORKFLOW (Font: Tech Mono) -->
      <div class="act-1-container absolute inset-0 flex items-center justify-center overflow-visible z-10">
        <div class="main-arrow-act1 absolute transform -translate-x-1/2 rotate-90 z-10 origin-bottom">
          <img src="/animation/straight-arrow.png" alt="Arrow" class="w-10 sm:w-20 h-48 sm:h-[14rem] scale-x-110 sm:scale-x-150 scale-y-[1.8] sm:scale-y-[3] drop-shadow-[6px_-6px_0px_rgba(0,0,0,0.85)] object-contain" />
        </div>
        <div class="workflow-container opacity-100 flex items-center text-6xl sm:text-9xl font-mono font-bold tracking-tighter drop-shadow-[6px_6px_0px_rgba(0,0,0,0.85)] z-20">
          <span class="letter-w opacity-0 bg-gradient-to-b from-blue-700 to-sky-400 bg-clip-text text-transparent inline-block">W</span>
          <span class="word-remainder flex">
            <span v-for="(char, idx) in 'orkflow'" :key="idx" class="workflow-char opacity-0 bg-gradient-to-b from-blue-700 to-sky-400 bg-clip-text text-transparent inline-block">{{ char }}</span>
          </span>
        </div>
      </div>

      <!-- ACT 2 & 3: CONNECT & GROWTH -->
      <div class="act-2-3-container absolute inset-0 flex flex-col items-center justify-center overflow-visible z-10">
        <div class="convergence-group relative w-56 sm:w-[42rem] h-36 sm:h-64 flex items-center justify-center overflow-visible z-10">
          <div class="sweep-arrow-left absolute transform origin-bottom-left">
            <img src="/animation/straight-arrow.png" alt="Arrow" class="w-12 sm:w-24 h-36 sm:h-60 drop-shadow-[6px_-6px_0px_rgba(0,0,0,0.85)] object-contain" />
          </div>
          <div class="sweep-arrow-center absolute transform origin-bottom">
            <img src="/animation/straight-arrow.png" alt="Arrow" class="w-14 sm:w-28 h-44 sm:h-64 drop-shadow-[6px_-6px_0px_rgba(0,0,0,0.85)] object-contain" />
          </div>
          <div class="sweep-arrow-right absolute transform origin-bottom-right">
            <img src="/animation/straight-arrow.png" alt="Arrow" class="w-12 sm:w-24 h-36 sm:h-60 drop-shadow-[6px_-6px_0px_rgba(0,0,0,0.85)] object-contain" />
          </div>
        </div>

        <!-- Connect Text (Font: Elegant Serif Italic) -->
        <h2 class="text-connect absolute text-6xl sm:text-9xl font-serif italic tracking-normal transform -translate-y-32 sm:-translate-y-44 flex drop-shadow-[6px_6px_0px_rgba(0,0,0,0.85)] z-20">
          <span v-for="(char, idx) in 'Connect'" :key="idx" class="connect-char opacity-0 bg-gradient-to-b from-indigo-700 to-purple-400 bg-clip-text text-transparent inline-block">{{ char === ' ' ? '&nbsp;' : char }}</span>
        </h2>

        <!-- Growth Text (Font: Ultra-bold Sans Extracted Wide) -->
        <h3 class="text-growth absolute text-6xl sm:text-9xl font-black tracking-widest uppercase transform translate-y-20 sm:translate-y-28 flex drop-shadow-[6px_6px_0px_rgba(0,0,0,0.85)] z-20">
          <span v-for="(char, idx) in 'Growth'" :key="idx" class="growth-char opacity-0 bg-gradient-to-b from-emerald-700 to-teal-300 bg-clip-text text-transparent inline-block">{{ char }}</span>
        </h3>
      </div>
    </div>

    <!-- Foreground Layer (Fastest Speed) -->
    <div class="foreground-clouds-layer absolute inset-y-[-250%] inset-x-[-250%] pointer-events-none overflow-hidden z-30">
      <div 
        v-for="(cloud, i) in foregroundClouds" 
        :key="'fg-cloud-' + i"
        class="absolute"
        :style="{ top: `${cloud.top}%`, left: `${cloud.left}%`, transform: `scale(${cloud.scale})`, opacity: cloud.opacity }"
      >
        <img src="/animation/cloud.png" alt="Foreground Cloud" class="w-80 h-auto object-contain brightness-0 invert drop-shadow-[0_8px_20px_rgba(255,255,255,0.8)]" />
      </div>
    </div>

    <!-- ACT 4: FINAL LOGO REVEAL -->
    <div class="complete-logo-container absolute inset-0 hidden flex-col items-center justify-center opacity-0 transition-opacity z-50 pointer-events-none">
      <img 
        src="/logos/casatech-transparent-bg.png" 
        alt="Casatech LLC Logo" 
        class="w-64 sm:w-96 h-auto drop-shadow-2xl object-contain pointer-events-auto"
      />
    </div>

    <!-- Flash Overlay -->
    <div class="flash-overlay absolute inset-0 bg-white opacity-0 pointer-events-none z-60 transition-opacity"></div>
  </div>
</template>