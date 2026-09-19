<!-- components/ProfileCtaSection.vue -->
<template>
  <section 
    ref="sectionRef"
    class="relative bg-transparent text-slate-900 py-32 sm:py-40 lg:py-48 overflow-hidden border-t border-b border-slate-200/60"
  >
    <!-- LIGHT MODE ILLUMINATED AMBIENT GLOWS -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute -top-40 -left-40 w-[35rem] h-[35rem] bg-secondary/10 rounded-full blur-[160px] animate-pulse"></div>
      <div class="absolute -bottom-40 -right-40 w-[35rem] h-[35rem] bg-primary/10 rounded-full blur-[190px]"></div>
    </div>

    <!-- ILLUMINATED FLOOR PLANE AT THE BOTTOM -->
    <div class="absolute inset-x-0 bottom-0 h-[30rem] bg-gradient-to-t from-slate-200/60 via-slate-100/20 to-transparent pointer-events-none z-0"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
        
        <!-- ========================================================================= -->
        <!-- 1. 3D ORBIT STAGE (Desktop: Left | Mobile: Background Layer Behind Text)   -->
        <!-- ========================================================================= -->
        <div class="absolute lg:relative inset-0 lg:inset-auto lg:col-span-6 lg:col-start-1 flex items-center justify-center min-h-[520px] sm:min-h-[580px] z-0 opacity-100 pointer-events-none lg:pointer-events-auto">
          <ClientOnly>
            <!-- Stage Container with 3D perspective -->
            <div 
              ref="matrixContainerRef" 
              class="relative w-full max-w-xl h-[520px] sm:h-[580px] flex items-center justify-center scale-90 sm:scale-100"
              style="perspective: 1400px;"
            >
              
              <!-- ANCHORED FLOOR SHADOW MARK -->
              <div class="absolute bottom-12 w-[28rem] h-20 bg-slate-500/20 rounded-[100%] blur-3xl pointer-events-none z-0 transform translate-y-16 scale-95"></div>
              <div class="absolute bottom-16 w-80 h-10 bg-slate-900/10 rounded-[100%] blur-xl pointer-events-none z-0 transform translate-y-16"></div>

              <!-- CENTER CORE HUB -->
              <div class="absolute z-30 w-48 sm:w-52 h-48 sm:h-52 rounded-full bg-white border border-slate-200/80 shadow-[0_30px_70px_rgba(0,0,0,0.12),0_8px_20px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center text-center p-4 pointer-events-auto">
                <img src="/logos/casatech-crop-transparent-bg.png" alt="Casatech Logo" class="w-28 sm:w-32 h-auto object-contain pointer-events-none" />
              </div>

              <!-- 3D ORBITING TECH BADGES -->
              <div 
                v-for="(tech, index) in techNodes" 
                :key="index"
                :ref="el => nodeRefs[index] = el"
                class="tech-node absolute px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/95 border border-slate-200 text-slate-800 font-mono text-xs sm:text-sm backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.08)] flex items-center gap-2.5 cursor-pointer transition-colors hover:border-secondary hover:text-secondary will-change-transform pointer-events-auto"
              >
                <span class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full" :style="{ backgroundColor: tech.color }"></span>
                <span>{{ tech.name }}</span>
              </div>

            </div>
          </ClientOnly>
        </div>

        <!-- ========================================================================= -->
        <!-- 2. TEXT CONTENT & CTA (Center-Justified with Translucent Mobile Backdrop)  -->
        <!-- ========================================================================= -->
        <div class="lg:col-span-6 lg:col-start-7 space-y-6 text-center cta-content-anim z-20 bg-white/50 sm:bg-white/60 lg:bg-transparent backdrop-blur-sm p-6 sm:p-10 lg:p-0 rounded-3xl border border-white/80 lg:border-none shadow-xl lg:shadow-none my-auto">
          
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-xs font-mono uppercase tracking-widest font-semibold mx-auto">
            <span class="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            Senior Engineering Stack
          </div>

          <h2 class="text-5xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Engineered with <br />
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Modern Tech Standards.
            </span>
          </h2>

          <p class="text-2xl sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto">
            We build high-performance web applications using robust, industry-leading frameworks. Explore our proven portfolio of tailored solutions built to scale seamlessly.
          </p>

          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
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