<template>
  <!-- 
    ENGAGEMENT PROCESS SECTION
    Psychological Goal: Reduce perceived risk through a structured, 3-step mental model for web development.
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
        
        <!-- Headline -->
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 100 } }"
          class="text-primary font-heading font-bold text-3xl md:text-4xl leading-tight"
          title="Custom Web Development Process"
        >
          A Frictionless Path from Concept to Launch.
        </h2>
      </div>

      <!-- 
        THE 3-STEP GRID 
        Responsive layout transitioning from a stacked column on mobile to 3 columns on desktop.
      -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
        
        <!-- STEP 1: Discovery & Architecture -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 200 } }"
          class="relative bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-hover transition-fast p-8 lg:p-10 overflow-hidden flex flex-col h-full group z-10"
        >
          <!-- Giant Background Number -->
          <span class="absolute -top-6 -right-4 text-[150px] leading-none font-heading font-bold text-muted opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
            01
          </span>
          
          <div class="relative z-20 flex-grow">
            <h3 class="text-xl font-heading font-bold text-primary mb-4 pr-8">
              Strategic Discovery & Wireframing
            </h3>
            <p class="text-body leading-relaxed">
              We audit your business goals, target audience, and user flows to design intuitive wireframes and outline a high-converting web architecture.
            </p>
          </div>
        </div>

        <!-- STEP 2: Full-Stack Engineering -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 350 } }"
          class="relative bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-hover transition-fast p-8 lg:p-10 overflow-hidden flex flex-col h-full group z-10"
          title="Custom Nuxt & Vue Web Development"
        >
          <span class="absolute -top-6 -right-4 text-[150px] leading-none font-heading font-bold text-muted opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
            02
          </span>
          
          <div class="relative z-20 flex-grow">
            <h3 class="text-xl font-heading font-bold text-primary mb-4 pr-8">
              Custom Development & Design
            </h3>
            <p class="text-body leading-relaxed">
              We build your platform using cutting-edge Vue.js, Nuxt, and Tailwind CSS frameworks, ensuring pixel-perfect responsiveness, speed, and database connectivity.
            </p>
          </div>
        </div>

        <!-- STEP 3: Launch & Handoff -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 500 } }"
          class="relative bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-hover transition-fast p-8 lg:p-10 overflow-hidden flex flex-col h-full group z-10"
          title="Seamless Web App Launch and Training"
        >
          <span class="absolute -top-6 -right-4 text-[150px] leading-none font-heading font-bold text-muted opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
            03
          </span>
          
          <div class="relative z-20 flex-grow">
            <h3 class="text-xl font-heading font-bold text-primary mb-4 pr-8">
              Deployment & Video Handoff
            </h3>
            <p class="text-body leading-relaxed">
              We execute a zero-downtime launch, configure Technical SEO, and deliver custom video walkthroughs so your team can easily manage content and sales.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Pure presentation component powered by Vue & Nuxt Motion directives!
</script>

<style scoped>
/* Relying 100% on the Tailwind utility engine */
</style>