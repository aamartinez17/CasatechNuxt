<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div 
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 25 } }"
      class="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 text-white p-8 sm:p-12 shadow-2xl"
    >
      <!-- Technical Grid Overlay -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_100%_0%,#000_60%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div class="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        
        <!-- Text Content -->
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Live Engineering Demo
          </div>

          <h3 class="text-2xl sm:text-3xl font-heading font-bold text-white mb-3 leading-snug">
            Looking for Custom Workflow Automation & Computer Vision?
          </h3>

          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            Beyond standard websites, we engineer full-stack automation pipelines and industry-specific tools. Test our experimental aerial roof surface and pitch calculator powered by geospatial vector mapping.
          </p>

          <!-- Micro specs tag list -->
          <div class="flex flex-wrap gap-3 mt-4 text-xs font-mono text-slate-400">
            <span>• Google Solar API</span>
            <span>• Multimodal Vision Models</span>
            <span>• Real-Time Waste Multipliers</span>
          </div>
        </div>

        <!-- Action Button -->
        <div class="flex-shrink-0 w-full sm:w-auto">
          <NuxtLink 
            to="/tools/roof-estimator"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-heading font-bold text-sm sm:text-base py-3.5 px-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Launch Interactive Tool
            <font-awesome-icon icon="arrow-right" class="text-xs" />
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Presentational CTA linking portfolio visitors directly to /tools/roof-estimator
</script>