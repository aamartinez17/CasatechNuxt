<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const containerRef = ref(null)
let ctx = null

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.hero-anim', {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.3
    })
  }, containerRef.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})

useHead({
  title: 'Vibrant 3D Digital Ecosystem & Scalable Web Architecture | Casatech LLC',
  meta: [
    {
      name: 'description',
      content: 'Experience immersive 3D particle constellations, intelligent web design, and high-performance scalability engineered by Casatech LLC.'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen selection:bg-secondary/25 selection:text-white font-sans antialiased bg-transparent">
    
    <section 
      ref="containerRef"
      class="relative w-full min-h-screen overflow-hidden bg-transparent text-white flex items-center justify-center select-none pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div class="relative z-20 max-w-4xl mx-auto text-center space-y-6">
        
        <!-- Eyebrow Badge -->
        <div class="hero-anim inline-block pointer-events-none">
          <span class="text-secondary uppercase tracking-widest font-mono text-xs sm:text-sm bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/25 shadow-xl backdrop-blur-md">
            Interactive 3D Digital Ecosystem & Scalability
          </span>
        </div>

        <!-- Main Headline -->
        <h1 class="hero-anim font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight drop-shadow-md pointer-events-none">
          Intelligent Architecture, <br />
          <span class="bg-gradient-to-r from-secondary via-sky-300 to-white bg-clip-text text-transparent">
            Infinite Scalability.
          </span>
        </h1>

        <!-- Plain-Language Summary Box -->
        <div class="hero-anim p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md max-w-3xl mx-auto text-left pointer-events-auto shadow-2xl">
          <p class="text-base sm:text-lg text-slate-200 leading-relaxed">
            We engineer high-performance web ecosystems where design meets fluid data flow. Every node, connection, and interface is built from the ground up for instantaneous response speeds and seamless business growth.
          </p>
        </div>

        <!-- CTA Action Buttons -->
        <div class="hero-anim flex flex-wrap items-center justify-center gap-4 pt-4 pointer-events-auto">
          <NuxtLink 
            to="/contact" 
            class="bg-cta hover:bg-cta-hover text-white font-heading font-bold py-3.5 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
          >
            <span>Architect Your Platform</span>
            <font-awesome-icon icon="arrow-right" class="text-xs" />
          </NuxtLink>

          <NuxtLink 
            to="/portfolio" 
            class="bg-slate-900/90 hover:bg-slate-800 text-white font-heading font-semibold py-3.5 px-8 rounded-xl border border-slate-700/80 backdrop-blur-md transition-all duration-200 shadow-lg"
          >
            Explore Ecosystems
          </NuxtLink>
        </div>

        <!-- Interactive Hint Subtext -->
        <p class="hero-anim font-mono text-[11px] text-sky-400/80 pt-4 uppercase tracking-wider pointer-events-none">
          // Click and hold left-click to cluster, release to fill the screen
        </p>

      </div>
    </section>

  </div>
</template>

<style scoped>
/* Clean transparent layout */
</style>