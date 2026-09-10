<template>
  <section class="relative overflow-hidden bg-primary text-slate-900 pt-20 pb-16 sm:pt-24 sm:pb-20 border-b border-slate-200/80">
    <!-- Subtle Ambient Light Grid Pattern with Fade-in Motion -->
    <div 
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 0.4, transition: { duration: 800 } }"
      class="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div class="max-w-3xl mx-auto text-center">
        
        <!-- Eyebrow Tag -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150, damping: 20, delay: 100 } }"
          class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cta/10 border border-cta/25 text-cta text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm"
        >
          <span class="w-2 h-2 rounded-full bg-cta animate-pulse"></span>
          Interactive Engineering Lab
        </div>

        <!-- Main Headline -->
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18, delay: 250 } }"
          class="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-bg-light tracking-tight leading-tight mb-6"
        >
          Autonomous Aerial Roof & Facet Estimator
        </h1>

        <!-- Subheading / Value Proposition -->
        <p 
          v-motion
          :initial="{ opacity: 0, y: 25 }"
          :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20, delay: 400 } }"
          class="text-slate-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          Bridge the gap between raw geospatial data and field operations. Enter an address to synthesize high-resolution satellite geometry, Google Solar API roof pitch data, and computer vision into an instant, multi-angle surface breakdown.
        </p>

        <!-- CTA Try It Out Button -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 110, damping: 20, delay: 480 } }"
          class="mb-12 flex justify-center"
        >
          <button
            type="button"
            @click="scrollToEstimator"
            class="inline-flex items-center gap-2.5 bg-cta hover:bg-cta/90 active:scale-95 text-white font-heading font-bold text-sm sm:text-base py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 group"
          >
            <span>Try It Out!</span>
            <font-awesome-icon 
              icon="arrow-down" 
              class="text-xs transition-transform duration-200 group-hover:translate-y-0.5" 
            />
          </button>
        </div>

        <!-- Key Engineering Metrics -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 110, damping: 20, delay: 550 } }"
          class="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200/90 max-w-2xl mx-auto"
        >
          <div class="text-center">
            <span class="block text-2xl sm:text-3xl font-bold font-heading text-slate-100">3D Pitch</span>
            <span class="text-xs uppercase font-medium tracking-wider text-slate-500 mt-1 block">Solar Vector Mapping</span>
          </div>
          <div class="text-center">
            <span class="block text-2xl sm:text-3xl font-bold font-heading text-slate-100">&lt; 3 Sec</span>
            <span class="text-xs uppercase font-medium tracking-wider text-slate-500 mt-1 block">Inference Pipeline</span>
          </div>
          <div class="col-span-2 sm:col-span-1 text-center">
            <span class="block text-2xl sm:text-3xl font-bold font-heading text-secondary">Zero-Ladder</span>
            <span class="text-xs uppercase font-medium tracking-wider text-slate-500 mt-1 block">Remote Verification</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToEstimator = () => {
  const target = document.getElementById('live-estimator')
  if (!target) return

  // 96px corresponds exactly to Tailwind's mt-24 spacing (24 * 4px)
  const offset = 96
  const targetTop = target.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({
    top: targetTop,
    behavior: 'smooth'
  })
}
</script>