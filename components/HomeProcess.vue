<template>
  <!-- 
    ENGAGEMENT PROCESS SECTION
    Psychological Goal: Reduce perceived risk through a structured, 3-step mental model.
    Styling: Full-width background using our core neutral (bg-bg-light) to break up the page visually.
  -->
  <section class="py-24 border-t-4 border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <!-- Eyebrow -->
        <h3 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } }"
          class="text-secondary uppercase tracking-wider font-bold text-sm sm:text-base mb-4"
        >
          Our Methodology
        </h3>
        
        <!-- Headline (Local SEO Target: IT Consulting Process New Haven) -->
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 100 } }"
          class="text-primary font-heading font-bold text-3xl md:text-4xl leading-tight"
          title="IT Consulting Process New Haven"
        >
          A Frictionless Transition to Better Technology.
        </h2>
      </div>

      <!-- 
        THE 3-STEP GRID 
        Responsive layout transitioning from a stacked column on mobile to 3 columns on desktop.
      -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
        
        <!-- STEP 1: Discovery -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 200 } }"
          class="relative bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-hover transition-fast p-8 lg:p-10 overflow-hidden flex flex-col h-full group z-10"
        >
          <!-- Giant Background Number (Oversized typography) -->
          <span class="absolute -top-6 -right-4 text-[150px] leading-none font-heading font-bold text-muted opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
            01
          </span>
          
          <div class="relative z-20 flex-grow">
            <h3 class="text-xl font-heading font-bold text-primary mb-4 pr-8">
              Bilingual Discovery Audit
            </h3>
            <p class="text-body leading-relaxed">
              We conduct a thorough, English/Spanish assessment of your current IT infrastructure or web architecture to identify vulnerabilities and growth opportunities.
            </p>
          </div>
        </div>

        <!-- STEP 2: Strategy -->
        <!-- Local SEO Target: Enterprise Web Development Strategy -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 350 } }"
          class="relative bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-hover transition-fast p-8 lg:p-10 overflow-hidden flex flex-col h-full group z-10"
          title="Enterprise Web Development Strategy"
        >
          <span class="absolute -top-6 -right-4 text-[150px] leading-none font-heading font-bold text-muted opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
            02
          </span>
          
          <div class="relative z-20 flex-grow">
            <h3 class="text-xl font-heading font-bold text-primary mb-4 pr-8">
              Custom Strategy & Architecture
            </h3>
            <p class="text-body leading-relaxed">
              Our experts engineer a scalable roadmap, whether designing high-performance Vue.js/Nuxt applications or securing your local network.
            </p>
          </div>
        </div>

        <!-- STEP 3: Deployment -->
        <!-- Local SEO Target: Connecticut Tech Onboarding -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 500 } }"
          class="relative bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-hover transition-fast p-8 lg:p-10 overflow-hidden flex flex-col h-full group z-10"
          title="Connecticut Tech Onboarding"
        >
          <span class="absolute -top-6 -right-4 text-[150px] leading-none font-heading font-bold text-muted opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
            03
          </span>
          
          <div class="relative z-20 flex-grow">
            <h3 class="text-xl font-heading font-bold text-primary mb-4 pr-8">
              Seamless Deployment & 24/7 Support
            </h3>
            <p class="text-body leading-relaxed">
              We execute the transition with zero downtime, backed by ongoing, reliable support for your entire team.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Pure presentation component. 
// No extra JavaScript required thanks to native Vue directives!
</script>

<style scoped>
/* 
  Empty! 
  Relying 100% on the Tailwind utility engine mapped to your core CSS variables.
*/
</style>