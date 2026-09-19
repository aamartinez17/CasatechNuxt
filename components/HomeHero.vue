<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const containerRef = ref(null)
const mousePos = ref({ x: 0, y: 0 })
const gridRows = 5
const gridCols = 6
let ctx = null

// Layer 1: Behind the squares (slower, dimmer, smaller)
const binaryColumnsBack = ref([])
const binaryColumnsFront = ref([])

const getGlobeWrapperStyle = (n) => {
  const row = Math.floor((n - 1) / gridCols)
  const col = (n - 1) % gridCols
  
  const xNorm = (col / (gridCols - 1)) - 0.5
  const yNorm = (row / (gridRows - 1)) - 0.5
  
  const zOffset = (xNorm + yNorm) * 40

  return {
    transform: `translateZ(${zOffset}px)`,
    transformStyle: 'preserve-3d'
  }
}

const handleMouseMove = (e) => {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  mousePos.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

onMounted(() => {
  binaryColumnsBack.value = Array.from({ length: 10 }, () => ({
    id: Math.random(),
    chars: Array.from({ length: 25 }, () => Math.random() > 0.5 ? '1' : '0'),
    duration: 7 + Math.random() * 5,
    delay: -Math.random() * 8,
    left: Math.random() * 100
  }))

  binaryColumnsFront.value = Array.from({ length: 30 }, () => ({
    id: Math.random(),
    chars: Array.from({ length: 30 }, () => Math.random() > 0.5 ? '1' : '0'),
    duration: 3.5 + Math.random() * 10,
    delay: -Math.random() * 6,
    left: Math.random() * 100
  }))

  ctx = gsap.context(() => {
    gsap.fromTo('.glass-tile', 
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2.2,
        ease: 'elastic.out(1, 0.3)',
        stagger: {
          amount: 1.8,
          grid: [gridRows, gridCols],
          from: 'start'
        },
        onComplete: function() {
          gsap.set(this.targets(), { clearProps: 'transform' })
        }
      }
    )

    gsap.from('.hero-content-anim', {
      y: 35,
      opacity: 0,
      duration: 1.1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.4
    })
  }, containerRef.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})

useHead({
  title: 'Custom Web Design & High-Speed Web Applications | Casatech LLC',
  meta: [
    {
      name: 'description',
      content: 'High-speed custom web development by Casatech LLC. Built from the ground up for sub-second loading, clean security, and top ranking on Google and AI search engines.'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen selection:bg-secondary/25 selection:text-white font-sans antialiased bg-slate-950">
    
    <!-- HERO HEADER WITH 3D CURVED GLOBE GRID (Bottom fade mask removed) -->
    <section 
      ref="containerRef"
      @mousemove="handleMouseMove"
      class="relative w-full min-h-screen overflow-hidden bg-slate-950 text-white flex items-center justify-center select-none pt-28 pb-20 px-4 sm:px-6 lg:px-8"
      style="perspective: 1800px;"
    >
      <!-- BASE BACKDROP -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pointer-events-none z-0"></div>

      <!-- LAYER 1: FALLING BINARY STREAM (Behind the Squares) -->
      <ClientOnly>
        <div class="absolute inset-0 pointer-events-none overflow-hidden z-1">
          <div 
            v-for="col in binaryColumnsBack" 
            :key="col.id"
            class="absolute top-[-100%] font-mono text-[11px] sm:text-xs text-sky-600/30 flex flex-col items-center select-none animate-binary-fall"
            :style="{
              left: `${col.left}%`,
              animationDuration: `${col.duration}s`,
              animationDelay: `${col.delay}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear'
            }"
          >
            <span v-for="(char, idx) in col.chars" :key="idx" class="block leading-tight py-0.5 opacity-40">
              {{ char }}
            </span>
          </div>
        </div>
      </ClientOnly>

      <!-- TRUE 3D PERSPECTIVE CURVED GLOBE GRID CONTAINER -->
      <div class="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible z-20" style="transform-style: preserve-3d;">
        <!-- grid-cols-2 on mobile (well-proportioned squares), sm:grid-cols-6 on desktop -->
        <div 
          class="absolute w-[180vw] sm:w-[160vw] h-[180vh] sm:h-[160vh] max-w-7xl grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-12"
          style="
            transform: rotateX(50deg) rotateZ(-30deg) rotateY(10deg) scale(1.15);
            transform-style: preserve-3d;
            transform-origin: center center;
          "
        >
          <div 
            v-for="n in (gridRows * gridCols)" 
            :key="n"
            :style="getGlobeWrapperStyle(n)"
            class="relative flex items-center justify-center pointer-events-none"
          >
            <!-- Interactive Hitbox Wrapper -->
            <div class="absolute inset-[-12px] pointer-events-auto flex items-center justify-center cursor-pointer group">
              <div 
                class="glass-tile w-full h-full relative rounded-2xl sm:rounded-[2rem] bg-slate-900/85 border border-slate-700/60 backdrop-blur-xl shadow-[0_20px_45px_0_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center p-3 transform-gpu min-h-[110px] sm:min-h-[auto]"
                style="transform-style: preserve-3d;"
              >
                <!-- DYNAMIC PROJECT & BRAND IMAGE TILES -->
                <template v-if="n === 3">
                  <img src="/images/project-omars-new.png" alt="Omar's Project Preview" class="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                </template>
                <template v-else-if="n === 7">
                  <img src="/images/refined-med-spa-hero.png" alt="Refined Med Spa Project" class="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                </template>
                <template v-else-if="n === 10">
                  <img src="/images/casatechllc-og-image.png" alt="Casatech OG Blueprint" class="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                </template>
                <template v-else-if="n === 12">
                  <img src="/images/new-chapter-homes-hero.png" alt="New Chapter Homes Project" class="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                </template>
                <template v-else-if="n === 15">
                  <img src="/images/servicesview-it.png" alt="Services Infrastructure" class="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                </template>
                <template v-else-if="n === 19">
                  <img src="/images/contactview-header.png" alt="Contact Consultation Preview" class="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                </template>
                <template v-else-if="n === 22">
                  <img src="/images/homeview-header.png" alt="Home Platform Preview" class="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                </template>
                <template v-else-if="n === 26">
                  <img src="/images/project-omars-new.png" alt="Omar's Project Preview" class="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                </template>

                <!-- STANDARD GLASS TILE CONTENT -->
                <template v-else>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 font-mono text-[11px] text-sky-300 pointer-events-none flex flex-col justify-between">
                    <span class="text-secondary font-bold">NODE_0{{ n }} // ACTIVE</span>
                    <div class="space-y-1.5 opacity-80">
                      <div class="h-1 bg-secondary/60 rounded-full w-full"></div>
                      <div class="h-1 bg-sky-400/40 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LAYER 2: FALLING BINARY STREAM (Between Squares and Title) -->
      <ClientOnly>
        <div class="absolute inset-0 pointer-events-none overflow-hidden z-25">
          <div 
            v-for="col in binaryColumnsFront" 
            :key="col.id"
            class="absolute top-[-100%] font-mono text-xs sm:text-sm text-sky-400/60 flex flex-col items-center select-none animate-binary-fall"
            :style="{
              left: `${col.left}%`,
              animationDuration: `${col.duration}s`,
              animationDelay: `${col.delay}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear'
            }"
          >
            <span v-for="(char, idx) in col.chars" :key="idx" class="block leading-tight py-0.5 opacity-80 hover:opacity-100">
              {{ char }}
            </span>
          </div>
        </div>
      </ClientOnly>

      <!-- MOUSE SPOTLIGHT OVERLAY -->
      <div 
        class="absolute inset-0 pointer-events-none z-28 transition-opacity duration-75 mix-blend-screen"
        :style="{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.22), transparent 75%)`
        }"
      ></div>

      <!-- TEXT READABILITY VIGNETTE -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.25)_0%,rgba(2,6,23,0.88)_100%)] pointer-events-none z-30"></div>

      <!-- FOREGROUND CONTENT -->
      <div class="relative z-40 max-w-4xl mx-auto text-center space-y-6 pointer-events-none">
    

        <!-- Main Headline -->
        <h1 class="hero-content-anim font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight drop-shadow-md">
          Custom Web Design & <br />
          <span class="bg-gradient-to-r from-secondary via-sky-300 to-white bg-clip-text text-transparent">
            High-Speed Web Applications.
          </span>
        </h1>

        <!-- Plain-Language Summary Box -->
        <div class="hero-content-anim p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md max-w-3xl mx-auto text-left pointer-events-auto">
          <p class="text-base sm:text-lg text-slate-200 leading-relaxed">
            Casatech LLC designs clean, made-to-order websites and web tools from scratch. By avoiding heavy pre-made themes and bloated plugins, we give your business an instant-loading site that looks polished, stays secure, and turns everyday visitors into paying clients.
          </p>
        </div>

        <!-- Key Business Benefits -->
        <div class="hero-content-anim grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs max-w-3xl mx-auto">
          <div>
            <span class="block text-slate-400 uppercase font-mono mb-1">Load Time</span>
            <span class="text-white font-semibold text-sm">Under 1 Second</span>
          </div>
          <div>
            <span class="block text-slate-400 uppercase font-mono mb-1">Security</span>
            <span class="text-secondary font-semibold text-sm">Plugin-Free Protection</span>
          </div>
          <div>
            <span class="block text-slate-400 uppercase font-mono mb-1">Search Ready</span>
            <span class="text-emerald-400 font-semibold text-sm">Built for Google & AI</span>
          </div>
          <div>
            <span class="block text-slate-400 uppercase font-mono mb-1">Accessibility</span>
            <span class="text-white font-semibold text-sm">Easy for All Users</span>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
@keyframes binaryFall {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
}

.animate-binary-fall {
  animation-name: binaryFall;
}

.glass-tile {
  transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1), 
              box-shadow 1.5s cubic-bezier(0.25, 1, 0.5, 1), 
              border-color 1s ease;
}

.group:hover .glass-tile {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
              border-color 0.2s ease;
  transform: translateY(-14px) translateZ(50px) scale(1.05);
  border-color: rgba(56, 189, 248, 0.6);
  box-shadow: 0 40px 80px 0 rgba(0, 119, 182, 0.5);
  z-index: 50;
}
</style>