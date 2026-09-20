<!-- components/HomeProfitSection.vue -->
<template>
  <section class="relative text-slate-900 py-24 lg:py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Left Side: Professional, High-Impact Conversion Copy -->
        <div class="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-xs font-mono uppercase tracking-widest font-semibold">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Conversion Architecture & ROI
          </div>

          <h2 class="text-4xl sm:text-5xl xl:text-6xl font-heading font-extrabold tracking-tight text-slate-300 leading-[1.1]">
            Turn Every Visitor Click Into <br />
            <span class="bg-gradient-to-r from-secondary via-sky-300 to-white bg-clip-text text-transparent font-extrabold">
              Measurable Business Profit.
            </span>
          </h2>

          <p class="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Slow, template-driven sites bleed potential revenue before prospects even reach your checkout. We engineer custom, lightning-fast web architectures designed to systematically convert casual traffic into high-value clients.
          </p>

          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 bg-cta hover:bg-cta/90 text-white font-heading font-bold text-sm py-4 px-8 rounded-xl shadow-lg transition-all"
            >
              <span>Schedule a Growth Audit</span>
              <font-awesome-icon icon="arrow-right" class="text-xs" />
            </NuxtLink>
          </div>
        </div>

        <!-- Right Side: Interactive Stage Wrapped in ClientOnly -->
        <div class="lg:col-span-6 flex items-center justify-center">
          <ClientOnly>
            <!-- Master Container wrapper styled with brand colors -->
            <div 
              ref="masterCardRef"
              class="relative w-full max-w-md h-[400px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 flex flex-col justify-between overflow-hidden opacity-0"
            >
              
              <!-- Browser Header -->
              <div class="flex items-center gap-3 pb-3 border-b border-slate-100 shrink-0">
                <div class="flex items-center gap-1.5">
                  <div class="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                </div>
                <div class="flex-1 bg-slate-100 rounded-lg px-3 py-1.5 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>https://search.engine/find-the-best</span>
                  <font-awesome-icon icon="magnifying-glass" class="text-slate-400" />
                </div>
              </div>

              <!-- Stage Area -->
              <div class="relative flex-1 flex items-center justify-center overflow-hidden my-auto">
                
                <!-- Search Results Container -->
                <div 
                  ref="searchEngineRef" 
                  class="w-full space-y-2.5 absolute transition-all"
                >
                  <!-- Option 1 -->
                  <div class="p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between opacity-60">
                    <div class="flex items-center gap-2.5">
                      <div class="w-6 h-6 rounded bg-slate-300"></div>
                      <div class="space-y-1">
                        <div class="h-2 w-28 bg-slate-300 rounded-full"></div>
                        <div class="h-1.5 w-16 bg-slate-200 rounded-full"></div>
                      </div>
                    </div>
                    <span class="text-[10px] font-mono text-slate-400">Slow Template</span>
                  </div>

                  <!-- Option 2 -->
                  <div class="p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between opacity-60">
                    <div class="flex items-center gap-2.5">
                      <div class="w-6 h-6 rounded bg-slate-300"></div>
                      <div class="space-y-1">
                        <div class="h-2 w-32 bg-slate-300 rounded-full"></div>
                        <div class="h-1.5 w-20 bg-slate-200 rounded-full"></div>
                      </div>
                    </div>
                    <span class="text-[10px] font-mono text-slate-400">Bloated Plugins</span>
                  </div>

                  <!-- Target Option: Casatech with transparent logo graphic -->
                  <div 
                    ref="targetLinkRef"
                    class="p-3.5 rounded-xl bg-primary text-white border-2 border-secondary shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center justify-between relative cursor-pointer"
                  >
                    <div class="flex items-center gap-2.5">
                      <div class="w-7 h-7 rounded-lg bg-white flex items-center justify-center p-1 shadow-md">
                        <img src="/logos/casatech-crop-transparent-bg.png" alt="Casatech Logo" class="w-full h-full object-contain pointer-events-none" />
                      </div>
                      <div>
                        <h4 class="font-heading font-bold text-xs text-white">Casatech Custom Experience</h4>
                        <p class="text-[10px] text-secondary font-mono">Instant Load • Pure Quality</p>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded bg-secondary text-primary text-[10px] font-mono font-extrabold shadow">Pick Me!</span>
                  </div>

                  <!-- Option 4 -->
                  <div class="p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between opacity-60">
                    <div class="flex items-center gap-2.5">
                      <div class="w-6 h-6 rounded bg-slate-300"></div>
                      <div class="space-y-1">
                        <div class="h-2 w-24 bg-slate-300 rounded-full"></div>
                        <div class="h-1.5 w-14 bg-slate-200 rounded-full"></div>
                      </div>
                    </div>
                    <span class="text-[10px] font-mono text-slate-400">Outdated Code</span>
                  </div>
                </div>

                <!-- Animated FontAwesome Finger Pointer Icon in secondary color -->
                <div 
                  ref="cursorRef"
                  class="absolute z-40 pointer-events-none text-secondary text-2xl filter drop-shadow-md"
                  style="top: 170px; left: 220px; opacity: 0;"
                >
                  <font-awesome-icon icon="hand-pointer" />
                </div>

                <!-- Expanded Spark Dots Cluster using primary and secondary accents -->
                <div class="absolute z-30 pointer-events-none" style="top: 120px; left: 160px;">
                  <div ref="spark1" class="absolute w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_var(--color-secondary)] opacity-0"></div>
                  <div ref="spark2" class="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] opacity-0"></div>
                  <div ref="spark3" class="absolute w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_var(--color-secondary)] opacity-0"></div>
                  <div ref="spark4" class="absolute w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_8px_#38bdf8] opacity-0"></div>
                  <div ref="spark5" class="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff] opacity-0"></div>
                  <div ref="spark6" class="absolute w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] opacity-0"></div>
                  <div ref="spark7" class="absolute w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_6px_var(--color-secondary)] opacity-0"></div>
                  <div ref="spark8" class="absolute w-2 h-2 rounded-full bg-sky-200 shadow-[0_0_8px_#bae6fd] opacity-0"></div>
                </div>

                <!-- Final Expanded Profit & Conversion State with Combined Graphics & Fireworks -->
                <div 
                  ref="expandedBoxRef"
                  class="absolute inset-0 bg-primary rounded-2xl flex flex-col items-center justify-center text-center p-6 opacity-0 scale-90 pointer-events-none z-20 border-2 border-secondary/40 shadow-2xl overflow-hidden"
                >
                  <!-- Fireworks Effect Cluster -->
                  <div class="absolute inset-0 pointer-events-none z-10">
                    <div class="firework firework-1"></div>
                    <div class="firework firework-2"></div>
                    <div class="firework firework-3"></div>
                  </div>

                  <!-- Combined Stage Graphics Container (Arrow at the top, Handshake below) -->
                  <div class="relative z-20 flex flex-col items-center justify-center gap-2 mb-3">
                    <!-- Arrow Graphic positioned at the top with tail-to-head reveal & flash -->
                    <div class="w-24 h-18 -mb-3 flex items-center justify-center animate-flash">
                      <img src="/animation/arrow-graphic.png" alt="Arrow Graphic" class="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(56,189,248,0.8)] animate-reveal-arrow" />
                    </div>
                    <!-- Handshake Graphic positioned underneath with up-and-down shaking animation -->
                    <div class="w-18 h-12 flex items-center justify-center animate-handshake">
                      <img src="/animation/handshake-graphic.png" alt="Handshake Graphic" class="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
                    </div>
                  </div>

                  <h3 class="relative z-20 text-lg font-heading font-bold text-white mb-1">Turning Every Click into Profit</h3>
                  <p class="relative z-20 text-slate-200 text-xs max-w-xs leading-relaxed">Engineered for maximum conversion performance and continuous business growth.</p>
                </div>

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

const masterCardRef = ref(null)
const searchEngineRef = ref(null)
const targetLinkRef = ref(null)
const cursorRef = ref(null)
const expandedBoxRef = ref(null)

const spark1 = ref(null)
const spark2 = ref(null)
const spark3 = ref(null)
const spark4 = ref(null)
const spark5 = ref(null)
const spark6 = ref(null)
const spark7 = ref(null)
const spark8 = ref(null)

let animTimeline = null

const runAnimation = () => {
  if (!import.meta.client) return
  if (!masterCardRef.value || !cursorRef.value || !searchEngineRef.value || !targetLinkRef.value) return

  animTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })

  const allSparks = [spark1.value, spark2.value, spark3.value, spark4.value, spark5.value, spark6.value, spark7.value, spark8.value].filter(Boolean)

  // Initial Reset State
  animTimeline.set(masterCardRef.value, { opacity: 0, scale: 0.9, rotation: 0, transformOrigin: 'center center' })
  animTimeline.set(cursorRef.value, { opacity: 0, x: 140, y: 120 })
  animTimeline.set(searchEngineRef.value, { opacity: 1, y: 0, scale: 1 })
  animTimeline.set(targetLinkRef.value, { scale: 1, y: 0 })
  animTimeline.set(expandedBoxRef.value, { opacity: 0, scale: 0.9, pointerEvents: 'none' })
  if (allSparks.length > 0) animTimeline.set(allSparks, { opacity: 0, x: 0, y: 0, scale: 0 })

  // 1. Smooth Fade & Scale in
  animTimeline.to(masterCardRef.value, {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power2.out'
  })

  // 2. Pointer glides slowly toward the target link box
  animTimeline.to(cursorRef.value, {
    opacity: 1,
    x: 0,
    y: 18,
    duration: 1.2,
    ease: 'power2.out'
  }, '-=0.2')

  // 3. Click effect
  animTimeline.to(cursorRef.value, { scale: 0.8, duration: 0.25, yoyo: true, repeat: 1 })
  animTimeline.to(targetLinkRef.value, {
    scale: 0.94,
    y: -12, 
    duration: 0.25,
    yoyo: true,
    repeat: 1,
    borderColor: 'var(--color-secondary)'
  }, '<')

  // Burst bright light sparks
  if (spark1.value) animTimeline.to(spark1.value, { opacity: 1, x: -45, y: -30, scale: 1.3, duration: 0.4, ease: 'power2.out' }, '<')
  if (spark2.value) animTimeline.to(spark2.value, { opacity: 1, x: 50, y: -35, scale: 1.2, duration: 0.4, ease: 'power2.out' }, '<')
  if (spark3.value) animTimeline.to(spark3.value, { opacity: 1, x: -35, y: 30, scale: 1.2, duration: 0.4, ease: 'power2.out' }, '<')
  if (spark4.value) animTimeline.to(spark4.value, { opacity: 1, x: 45, y: 25, scale: 1.3, duration: 0.4, ease: 'power2.out' }, '<')
  if (spark5.value) animTimeline.to(spark5.value, { opacity: 1, x: 0, y: -45, scale: 1.4, duration: 0.4, ease: 'power2.out' }, '<')
  if (spark6.value) animTimeline.to(spark6.value, { opacity: 1, x: -55, y: 0, scale: 1.1, duration: 0.4, ease: 'power2.out' }, '<')
  if (spark7.value) animTimeline.to(spark7.value, { opacity: 1, x: 60, y: 0, scale: 1.2, duration: 0.4, ease: 'power2.out' }, '<')
  if (spark8.value) animTimeline.to(spark8.value, { opacity: 1, x: 0, y: 40, scale: 1.3, duration: 0.4, ease: 'power2.out' }, '<')

  if (allSparks.length > 0) {
    animTimeline.to(allSparks, { opacity: 0, scale: 0, duration: 0.2 }, '-=0.2')
  }

  animTimeline.to({}, { duration: 0.4 })

  // 4. Fade out search engine scene
  animTimeline.to(searchEngineRef.value, {
    opacity: 0,
    scale: 0.95,
    duration: 0.6,
    ease: 'power2.in'
  })

  animTimeline.to(cursorRef.value, { opacity: 0, duration: 0.3 }, '<')

  // 5. Profit & Conversion state expands with graphics and fireworks
  animTimeline.to(expandedBoxRef.value, {
    opacity: 1,
    scale: 1,
    pointerEvents: 'auto',
    duration: 0.8,
    ease: 'back.out(1.3)'
  }, '-=0.2')

  // 6. Fade out master card container
  animTimeline.to(masterCardRef.value, {
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    ease: 'power2.in'
  }, '+=2.5') 
}

onMounted(() => {
  nextTick(() => {
    runAnimation()
  })
})

onUnmounted(() => {
  if (animTimeline) animTimeline.kill()
})
</script>

<style scoped>
/* Handshake up and down simulation */
@keyframes handshakeBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.animate-handshake {
  animation: handshakeBounce 1.2s ease-in-out infinite;
}

.animate-reveal-arrow {
  animation: revealArrow 1.5s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate;
}

/* Flashing / pulsing effect for the arrow */
@keyframes flashPulse {
  0%, 100% { filter: drop-shadow(0 0 2px rgba(56, 189, 248, 0.4)); }
  50% { filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.9)); }
}

.animate-flash {
  animation: flashPulse 1.2s ease-in-out infinite;
}

/* Fireworks Animation Effect */
.firework,
.firework::before,
.firework::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  box-shadow: 0 0 #38bdf8, 0 0 #38bdf8, 0 0 #38bdf8, 0 0 #38bdf8, 0 0 #38bdf8, 0 0 #38bdf8;
  animation: fireworkBurst 1.5s infinite ease-out;
}

.firework-1 { top: 25%; left: 30%; animation-delay: 0.2s; }
.firework-2 { top: 35%; left: 75%; animation-delay: 0.7s; }
.firework-3 { top: 65%; left: 20%; animation-delay: 1.1s; }

@keyframes fireworkBurst {
  0% {
    transform: scale(0.1);
    opacity: 1;
    box-shadow: 0 0 #38bdf8, 0 0 #38bdf8, 0 0 #38bdf8, 0 0 #38bdf8, 0 0 #38bdf8, 0 0 #38bdf8;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
    box-shadow: -20px -20px #38bdf8, 25px -30px #ffffff, -30px 20px var(--color-secondary), 30px 25px #38bdf8, -10px -40px #ffffff, 15px 35px var(--color-secondary);
  }
}
</style>