<template>
  <!-- 
    TRUST BAR (REUSABLE CAROUSEL)
    Drop <LogoCarousel /> anywhere on the site to instantly build B2B authority.
  -->
  <div 
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1, transition: { duration: 800 } }"
    class="border-b border-gray-200 bg-bg-light py-10"
  >
    <!-- Eyebrow Title -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
      <p class="text-sm text-muted uppercase tracking-widest font-bold">
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
          class="logo-slide px-8 sm:px-12 flex-shrink-0"
        >
          <img 
            :src="logo.logoUrl" 
            :alt="logo.name" 
            class="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-fast cursor-grab active:cursor-grabbing" 
            loading="lazy" 
            :title="logo.name"
          />
        </div>

        <!-- Cloned Logos (For the seamless infinite loop) -->
        <div 
          v-for="logo in logos" 
          :key="`${logo.id}-clone`" 
          class="logo-slide px-8 sm:px-12 flex-shrink-0"
          aria-hidden="true"
        >
          <img 
            :src="logo.logoUrl" 
            :alt="logo.name" 
            class="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-fast cursor-grab active:cursor-grabbing" 
            loading="lazy" 
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// We import the data file directly so this component manages its own state
// no matter what page you drop it onto.
defineProps({
  logos: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
/* 
 * MARQUEE ANIMATION STYLES 
 * Safely scoped to this component so it never bleeds into other areas of your site.
 */

.logo-scroller {
  /* Creates the smooth fade-out effect on the left and right edges */
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.logo-track {
  /* Animates the track from 0 to exactly 50% (one full set of logos) */
  animation: scrollMarquee 40s linear infinite;
}

/* Pause the animation on hover for readability */
.logo-scroller:hover .logo-track,
.logo-scroller:active .logo-track {
  animation-play-state: paused;
}

@keyframes scrollMarquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* WCAG Compliance: Respects OS-level reduced motion settings */
@media (prefers-reduced-motion: reduce) {
  .logo-track {
    animation-play-state: paused;
  }
}
</style>