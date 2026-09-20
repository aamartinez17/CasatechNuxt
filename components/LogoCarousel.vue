<template>
  <!-- 
    TRUST BAR (REUSABLE CAROUSEL)
    Adaptive glassmorphism that handles both light and dark page sections seamlessly.
  -->
  <div 
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1, transition: { duration: 800 } }"
    class="border-y border-white/20 dark:border-slate-800/60 bg-slate-900/30 dark:bg-slate-950/40 backdrop-blur-2xl py-12 relative z-10 shadow-2xl transition-colors duration-500"
  >
    <!-- Eyebrow Title -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
      <p class="text-xs uppercase tracking-widest font-mono text-slate-300 dark:text-slate-400 drop-shadow-sm">
        Trusted Technology Partners & Local Connecticut Businesses
      </p>
    </div>
      
    <!-- Marquee Container with Edge Fading -->
    <div class="logo-scroller relative overflow-hidden w-full max-w-7xl mx-auto">
      
      <!-- The Moving Track -->
      <div class="logo-track flex w-max items-center">
        
        <!-- Original Logos -->
        <div 
          v-for="logo in logos" 
          :key="logo.id" 
          class="logo-slide px-10 sm:px-14 flex-shrink-0"
        >
          <img 
            :src="logo.logoUrl" 
            :alt="logo.name" 
            class="max-h-14 w-auto object-contain opacity-9orges hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-grab active:cursor-grabbing drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] filter brightness-105" 
            loading="lazy" 
            :title="logo.name"
          />
        </div>

        <!-- Cloned Logos (For the seamless infinite loop) -->
        <div 
          v-for="logo in logos" 
          :key="`${logo.id}-clone`" 
          class="logo-slide px-10 sm:px-14 flex-shrink-0"
          aria-hidden="true"
        >
          <img 
            :src="logo.logoUrl" 
            :alt="logo.name" 
            class="max-h-14 w-auto object-contain opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-grab active:cursor-grabbing drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] filter brightness-105" 
            loading="lazy" 
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  logos: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
.logo-scroller {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.logo-track {
  animation: scrollMarquee 40s linear infinite;
}

.logo-scroller:hover .logo-track,
.logo-scroller:active .logo-track {
  animation-play-state: paused;
}

@keyframes scrollMarquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .logo-track {
    animation-play-state: paused;
  }
}
</style>