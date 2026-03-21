<template>
  <!-- 
    HERO SECTION 
    CRO Choice: min-h-[80vh] prevents layout shifts and provides a massive, breathable B2B canvas.
    Performance: bg-bg-light ensures the first paint is our core brand neutral, reducing eye strain immediately.
  -->
  <section class="relative bg-bg-light overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 lg:mt-12 min-h-[80vh] flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
      
      <!-- 2-Column B2B Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        <!-- LEFT COLUMN: Copy & Conversion -->
        <div class="max-w-2xl">
          
          <!-- Eyebrow: Establishes instant categorization -->
          <h3 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 100 } }"
            class="text-secondary uppercase tracking-wider font-bold text-sm sm:text-base mb-4 motion-reduce:transition-none motion-reduce:transform-none"
          >
            Enterprise IT & Vue.js Web Solutions
          </h3>

          <!-- Headline (H1): Fluid typography & Local SEO Keyword Integration -->
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 200 } }"
            class="text-primary font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 motion-reduce:transition-none motion-reduce:transform-none"
          >
            Eliminate Downtime with Bilingual Tech Support & Custom Web Apps.
          </h1>

          <!-- Subhead: text-body for cognitive ease, max-w for optimal reading length -->
          <p 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 300 } }"
            class="text-body text-lg sm:text-xl max-w-xl mb-8 leading-relaxed motion-reduce:transition-none motion-reduce:transform-none"
          >
            Casatech LLC provides proactive Managed IT Services and Enterprise Web Development in CT. We handle the technical infrastructure so your operations team can focus on scaling.
          </p>

          <!-- CTA Group & Micro-Proof -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 400 } }"
            class="flex flex-col sm:flex-row items-start sm:items-center gap-5 motion-reduce:transition-none motion-reduce:transform-none"
          >
            <!-- Primary Action -->
            <NuxtLink 
              to="/contact" 
              class="bg-cta hover:bg-cta-hover text-on-cta font-heading font-bold py-3.5 px-8 rounded shadow-soft hover:shadow-hover transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-bg-light"
            >
              Book an IT Audit
            </NuxtLink>
            
            <!-- Micro-Proof: Reduces conversion friction for risk-averse B2B buyers -->
            <div class="flex items-center mt-2 sm:mt-0 text-sm text-secondary font-medium">
              <!-- Success checkmark icon -->
              <svg class="w-5 h-5 mr-2 text-success" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Trusted by 50+ New Haven Businesses
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Visual -->
        <!-- LCP Optimization: fetchpriority="high" and loading="eager" on the above-the-fold image -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 30, delay: 500 } }"
          class="relative lg:ml-auto w-full max-w-lg lg:max-w-none mt-12 lg:mt-0 motion-reduce:transition-none motion-reduce:transform-none"
        >
          <!-- Decorative blob behind image (Modern B2B framing) -->
          <div class="absolute -inset-1 bg-gradient-to-tr from-secondary to-primary rounded-2xl blur-lg opacity-20"></div>
          
          <!-- Update the src to point to an actual image in your public/ folder -->
          <img 
            src="/images/homeview-header.png" 
            alt="Casatech LLC Managed IT Services New Haven CT" 
            width="800"
            height="600"
            loading="eager"
            fetchpriority="high"
            format="webp"
            class="relative w-full rounded-2xl shadow-hover object-cover border border-gray-200"
          >
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// No heavy JS logic needed here. 
// @vueuse/motion handles the IntersectionObserver natively in the template via v-motion.
</script>

<style scoped>
/* 
  All styling relies on our global Tailwind CSS variables. 
  No scoped CSS bloat required.
*/
</style>