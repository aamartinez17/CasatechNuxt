<template>
  <section class="bg-white">
    <!-- 
      PART 2: THE CORE SERVICES MATRIX 
      Psychological Goal: Reduce cognitive load by bucketing complex IT into two highly scannable cards.
    -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h3 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } }"
          class="text-secondary uppercase tracking-wider font-bold text-sm sm:text-base mb-4"
        >
          Comprehensive Digital Infrastructure
        </h3>
        
        <!-- Subtle Local SEO Keywords integrated into the H2 -->
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 100 } }"
          class="text-primary font-heading font-bold text-3xl md:text-4xl leading-tight"
          title="B2B IT Consulting New Haven"
        >
          Dual-Threat Expertise. Single-Point Accountability.
        </h2>
      </div>

      <!-- 2-Column CSS Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        <!-- CARD 1: IT & Cybersecurity -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 200 } }"
          class="bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-hover transition-fast p-8 lg:p-10 flex flex-col h-full group"
        >
          <!-- Icon Placeholder (SVG) -->
          <div class="w-14 h-14 bg-bg-light rounded-md flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-fast">
            <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          <h3 class="text-2xl font-heading font-bold text-primary mb-4">
            Managed IT & Cybersecurity
          </h3>
          <p class="text-body mb-6 leading-relaxed">
            Enterprise-grade infrastructure protection and Bilingual Managed IT Services designed to keep your Connecticut operations running flawlessly.
          </p>
          
          <!-- Value Bullets -->
          <ul class="space-y-3 mb-8 flex-grow">
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">24/7 Network Monitoring</span>
            </li>
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">Bilingual Helpdesk (English/Español)</span>
            </li>
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">Cloud Migration & Compliance</span>
            </li>
          </ul>

          <NuxtLink to="/managed-it-infrastructure" class="text-interactive hover:text-interactive-hover font-bold inline-flex items-center transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded w-max mt-auto">
            Explore IT Services 
            <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>

        <!-- CARD 2: Web Solutions -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 350 } }"
          class="bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-hover transition-fast p-8 lg:p-10 flex flex-col h-full group"
        >
          <!-- Icon Placeholder (SVG) -->
          <div class="w-14 h-14 bg-bg-light rounded-md flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-fast">
            <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          
          <h3 class="text-2xl font-heading font-bold text-primary mb-4" title="Enterprise Vue.js Web Development">
            High-Performance Web Solutions
          </h3>
          <p class="text-body mb-6 leading-relaxed">
            We build lightning-fast, highly scalable custom web applications that drive lead generation and automate your internal workflows.
          </p>
          
          <!-- Value Bullets -->
          <ul class="space-y-3 mb-8 flex-grow">
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">Vue.js / Nuxt 3 App Development</span>
            </li>
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">Conversion Rate Optimization (CRO)</span>
            </li>
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">Technical B2B SEO</span>
            </li>
          </ul>

          <NuxtLink to="/web-design" class="text-interactive hover:text-interactive-hover font-bold inline-flex items-center transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded w-max mt-auto">
            Explore Web Solutions 
            <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>


<style scoped>
/* 
  Completely empty! 
  No need for complex mask gradients or @keyframes anymore.
  We are relying purely on the highly optimized Tailwind Utility engine.
*/
</style>