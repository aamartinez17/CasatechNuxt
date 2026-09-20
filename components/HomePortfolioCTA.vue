<!-- components/ProfileCtaSection.vue -->
<template>
  <section 
    ref="sectionRef"
    class="relative bg-transparent text-slate-900 py-24 sm:py-32 lg:py-48 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
        
        <!-- ========================================================================= -->
        <!-- 1. TEXT CONTENT & CTA (Stacked first on mobile, right column on desktop)   -->
        <!-- ========================================================================= -->
        <div class="lg:col-span-6 lg:col-start-7 space-y-6 text-center lg:text-left cta-content-anim z-20 my-auto order-1 lg:order-2">
          
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-xs font-mono uppercase tracking-widest font-semibold mx-auto lg:mx-0">
            <span class="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            Senior Engineering Stack
          </div>

          <h2 class="text-4xl sm:text-5xl xl:text-7xl font-heading font-extrabold tracking-tight text-slate-300 leading-[1.1]">
            Engineered with <br />
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Modern Tech Standards.
            </span>
          </h2>

          <p class="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            We build high-performance web applications using robust, industry-leading frameworks. Explore our proven portfolio of tailored solutions built to scale seamlessly.
          </p>

          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <NuxtLink
              to="/portfolio"
              ref="ctaButtonRef"
              @mouseenter="isHovered = true"
              @mouseleave="isHovered = false"
              class="relative inline-flex items-center gap-3 bg-cta hover:bg-cta/90 text-white font-heading font-bold text-base py-4 px-10 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore Our Portfolio</span>
              <font-awesome-icon icon="arrow-right" class="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </NuxtLink>
          </div>
        </div>

        <!-- ========================================================================= -->
        <!-- 2. 3D ORBIT STAGE (Stacked underneath on mobile, left column on desktop)   -->
        <!-- ========================================================================= -->
        <div class="lg:col-span-6 lg:col-start-1 flex items-center justify-center min-h-[460px] sm:min-h-[580px] z-10 order-2 lg:order-1">
          <ClientOnly>
            <!-- Stage Container with 3D perspective -->
            <div 
              ref="matrixContainerRef" 
              class="relative w-full max-w-xl h-[460px] sm:h-[580px] flex items-center justify-center scale-85 sm:scale-100"
              style="perspective: 1400px;"
            >
              
              <!-- ANCHORED FLOOR SHADOW MARK -->
              <div class="absolute bottom-12 w-[28rem] h-20 bg-slate-500/20 rounded-[100%] blur-3xl pointer-events-none z-0 transform translate-y-16 scale-95"></div>
              <div class="absolute bottom-16 w-80 h-10 bg-slate-900/10 rounded-[100%] blur-xl pointer-events-none z-0 transform translate-y-16"></div>

              <!-- CENTER CORE HUB -->
              <div class="absolute z-30 w-44 sm:w-52 h-44 sm:h-52 rounded-full bg-white border border-slate-200/80 shadow-[0_30px_70px_rgba(0,0,0,0.12),0_8px_20px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center text-center p-4 pointer-events-auto">
                <img src="/logos/casatech-crop-transparent-bg.png" alt="Casatech Logo" class="w-24 sm:w-32 h-auto object-contain pointer-events-none" />
              </div>

              <!-- 3D ORBITING TECH BADGES -->
              <div 
                v-for="(tech, index) in techNodes" 
                :key="index"
                :ref="el => nodeRefs[index] = el"
                class="tech-node absolute px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white/95 border border-slate-200 text-slate-800 font-mono text-xs sm:text-sm backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex items-center gap-2.5 cursor-pointer transition-colors hover:border-secondary hover:text-secondary will-change-transform pointer-events-auto"
              >
                <span class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full" :style="{ backgroundColor: tech.color }"></span>
                <span>{{ tech.name }}</span>
              </div>

            </div>
          </ClientOnly>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const ctaButtonRef = ref(null)
const matrixContainerRef = ref(null)
const nodeRefs = ref([])
const isHovered = ref(false)

const techNodes = [
  { name: 'Vue.js 3', color: '#41b883', angleOffset: 0, radiusX: 220, radiusY: 120, speed: 0.6 },
  { name: 'Nuxt 3', color: '#00dc82', angleOffset: 1.05, radiusX: 240, radiusY: 110, speed: -0.5 },
  { name: 'Node.js', color: '#68a063', angleOffset: 2.1, radiusX: 210, radiusY: 130, speed: 0.7 },
  { name: 'Supabase', color: '#3ecf8e', angleOffset: 3.14, radiusX: 235, radiusY: 115, speed: -0.6 },
  { name: 'Tailwind CSS', color: '#38bdf8', angleOffset: 4.2, radiusX: 215, radiusY: 125, speed: 0.5 },
  { name: 'AI / RAG', color: '#a855f7', angleOffset: 5.25, radiusX: 225, radiusY: 120, speed: -0.7 },
]

let animationFrameId = null
let currentAngles = techNodes.map(n => n.angleOffset)

const run3DOrbit = () => {
  const speedMultiplier = isHovered.value ? 0.3 : 1

  techNodes.forEach((node, idx) => {
    const el = nodeRefs.value[idx]
    if (!el) return

    currentAngles[idx] += 0.005 * node.speed * speedMultiplier
    const angle = currentAngles[idx]

    const x = Math.cos(angle) * node.radiusX
    const y = Math.sin(angle) * node.radiusY * 0.6 + Math.sin(angle * 2) * 18
    const z = Math.sin(angle) * node.radiusY * 1.3 

    const scale = gsap.utils.mapRange(-140, 140, 0.75, 1.18, z)
    const opacity = gsap.utils.mapRange(-140, -30, 0.2, 1, z)
    const zIndex = z > 0 ? 40 : 10

    el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`
    el.style.opacity = opacity
    el.style.zIndex = zIndex
  })

  animationFrameId = requestAnimationFrame(run3DOrbit)
}

onMounted(() => {
  nextTick(() => {
    if (!import.meta.client) return

    gsap.from('.cta-content-anim > *', {
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1.1,
      stagger: 0.15,
      ease: 'power3.out'
    })

    animationFrameId = requestAnimationFrame(run3DOrbit)
  })
})

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>