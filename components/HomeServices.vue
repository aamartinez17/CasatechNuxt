<template>
  <section class="">
    <!-- 
      PART 2: THE CORE SERVICES MATRIX 
      Psychological Goal: Reduce cognitive load by bucketing web solutions into two clear pillars: Marketing Websites and Full-Stack Web Applications.
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
          Tailored Web Architecture
        </h3>
        
        <!-- Subtle Local SEO Keywords integrated into the H2 -->
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 100 } }"
          class="text-primary font-heading font-bold text-3xl md:text-4xl leading-tight"
          title="Custom Web Design and Web App Development"
        >
          Strategic Web Design Meets Full-Stack Engineering.
        </h2>
      </div>

      <!-- 2-Column CSS Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        <!-- CARD 1: Custom Website Design & Brand Platforms -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 200 } }"
          class="bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-hover transition-fast p-8 lg:p-10 flex flex-col h-full group"
        >
          <!-- Layout/Design Icon (SVG) -->
          <div class="w-14 h-14 bg-bg-light rounded-md flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-fast">
            <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          
          <h3 class="text-2xl font-heading font-bold text-primary mb-4" title="Custom Website Design">
            Custom Website Design
          </h3>
          <p class="text-body mb-6 leading-relaxed">
            Pixel-perfect, high-converting marketing platforms crafted to elevate your brand presence, rank on search engines, and turn everyday visitors into paying customers.
          </p>
          
          <!-- Value Bullets -->
          <ul class="space-y-3 mb-8 flex-grow">
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">Conversion-First Layout & UI/UX Design</span>
            </li>
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">Lightning-Fast Nuxt & Tailwind Architecture</span>
            </li>
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">Technical SEO & Mobile Responsiveness</span>
            </li>
          </ul>

          <!-- Pointed to /portfolio -->
          <NuxtLink to="/portfolio" class="text-interactive hover:text-interactive-hover font-bold inline-flex items-center transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded w-max mt-auto">
            View Website Portfolio
            <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>

        <!-- CARD 2: Full-Stack Web Applications & Software -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 350 } }"
          class="bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-hover transition-fast p-8 lg:p-10 flex flex-col h-full group"
        >
          <!-- Code/App Icon (SVG) -->
          <div class="w-14 h-14 bg-bg-light rounded-md flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-fast">
            <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          
          <h3 class="text-2xl font-heading font-bold text-primary mb-4" title="Full-Stack Web Application Development">
            Full-Stack Web Applications
          </h3>
          <p class="text-body mb-6 leading-relaxed">
            Scalable, feature-rich custom web applications, client portals, and SaaS dashboards engineered to streamline your operations and process business data.
          </p>
          
          <!-- Value Bullets -->
          <ul class="space-y-3 mb-8 flex-grow">
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">Interactive Vue.js / Nuxt 3 Frontend Systems</span>
            </li>
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">Database Integrations & API Architectures</span>
            </li>
            <li class="flex items-start">
              <span class="text-success mr-3 mt-1">✔</span>
              <span class="text-main font-medium">Custom Client Dashboards & Workflow Tools</span>
            </li>
          </ul>

          <NuxtLink to="/web-design" class="text-interactive hover:text-interactive-hover font-bold inline-flex items-center transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded w-max mt-auto">
            Explore Web Applications
            <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Relying purely on Tailwind Utility classes */
</style>