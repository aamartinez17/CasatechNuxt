<template>
  <!-- 
    PROOF & AUTHORITY MATRIX
    Semantic <section> highlighting live client work, team background, and engineering standards.
  -->
  <section class="py-24 border-y border-gray-200 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Asymmetrical 2-Column Grid (65% / 35% on lg screens) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        <!-- 
          LEFT COLUMN: Live Case Studies & About Studio CTA (65%)
        -->
        <div class="lg:col-span-8 flex flex-col justify-between">
          <div>
            <h2 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } }"
              class="text-primary font-heading font-bold text-3xl md:text-4xl mb-10"
            >
              Featured Web Projects
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              
              <!-- Case Study 1: Web App Showcase -->
              <article 
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 150 } }"
                class="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col"
              >
                <div class="relative h-48 overflow-hidden bg-slate-100 border-b border-gray-100">
                  <img 
                    src="/images/servicesview-web-development.png" 
                    alt="Custom Web Application Showcase" 
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="p-6 flex flex-col flex-grow">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full w-max mb-3">
                    Full-Stack App
                  </span>
                  <h3 class="text-xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    Interactive Client Portal
                  </h3>
                  <p class="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    Engineered a Nuxt 3 portal that automates user workflows, integrates real-time database tracking, and eliminates manual paperwork.
                  </p>
                  <NuxtLink to="/portfolio" class="text-secondary hover:text-primary font-bold text-sm inline-flex items-center transition-colors w-max mt-auto">
                    View Live Case Study <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </NuxtLink>
                </div>
              </article>

              <!-- Case Study 2: E-Commerce / Custom Website -->
              <article 
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 300 } }"
                class="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col"
              >
                <div class="relative h-48 overflow-hidden bg-slate-100 border-b border-gray-100">
                  <img 
                    src="/images/blogview-header.png" 
                    alt="High-Converting Business Website Showcase" 
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="p-6 flex flex-col flex-grow">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full w-max mb-3">
                    Custom Web Design
                  </span>
                  <h3 class="text-xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    High-Converting Commercial Site
                  </h3>
                  <p class="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    Designed a high-speed marketing site with custom quote builders and mobile-first layout optimizations designed to drive organic lead growth.
                  </p>
                  <NuxtLink to="/portfolio" class="text-secondary hover:text-primary font-bold text-sm inline-flex items-center transition-colors w-max mt-auto">
                    View Live Case Study <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </NuxtLink>
                </div>
              </article>

            </div>
          </div>

          <!-- 🌟 ADDED LEFT-SIDE ABOUT CTA BANNER -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 350 } }"
            class="bg-slate-50 border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div class="space-y-1 text-center sm:text-left">
              <span class="text-xs font-bold uppercase tracking-wider text-secondary">Driven by Technical Excellence</span>
              <h3 class="font-heading font-bold text-primary text-xl">Behind the Engineering Studio</h3>
              <p class="text-slate-600 text-sm max-w-md">Learn how our full-stack engineering background and client-first mindset power every platform we build.</p>
            </div>
            <NuxtLink to="/about" class="bg-primary hover:bg-primary/90 text-white font-bold text-sm py-3 px-6 rounded-lg transition-colors flex-shrink-0 shadow-soft">
              Meet the Studio →
            </NuxtLink>
          </div>

        </div>

        <!-- 
          RIGHT COLUMN: Engineering Benchmarks & Tech Standards (35%)
        -->
        <aside class="lg:col-span-4 lg:pl-8 lg:border-l border-gray-200 mt-12 lg:mt-0 flex flex-col justify-between">
          <div>
            <h2 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 100 } }"
              class="text-primary font-heading font-bold text-2xl md:text-3xl mb-6"
            >
              Engineering Standards
            </h2>

            <p class="text-slate-600 text-sm leading-relaxed mb-8">
              We replace sluggish, plugin-heavy site builders with clean, hand-crafted code architectures designed for maximum security, instantaneous page loads, and long-term scalability.
            </p>

            <!-- Technical Pillars List -->
            <div 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 200 } }"
              class="space-y-4 mb-8"
            >
              <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-gray-100">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-secondary mt-1" />
                <div>
                  <h4 class="text-primary font-bold text-sm">Sub-Second Load Times</h4>
                  <p class="text-xs text-slate-500 mt-0.5">Static site generation & server-side hydration for top Google PageSpeed scores.</p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-gray-100">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-secondary mt-1" />
                <div>
                  <h4 class="text-primary font-bold text-sm">Zero CMS Security Bloat</h4>
                  <p class="text-xs text-slate-500 mt-0.5">No vulnerable plugins or forced weekly theme updates required.</p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-gray-100">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-secondary mt-1" />
                <div>
                  <h4 class="text-primary font-bold text-sm">Custom API Integrations</h4>
                  <p class="text-xs text-slate-500 mt-0.5">Direct integration with CRMs, databases, payment gateways, and custom backend APIs.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Badge -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 300 } }"
            class="p-6 bg-primary text-white rounded-xl shadow-md text-center"
          >
            <!-- 🌟 UPDATED: Bright, light heading text -->
            <h3 class="font-heading font-bold text-lg mb-2 text-white">Have a Custom Project in Mind?</h3>
            <p class="text-xs text-slate-300 mb-4">Let's discuss your web architecture requirements and get a precise quote.</p>
            <NuxtLink to="/contact" class="inline-block bg-cta hover:bg-cta-hover text-white text-xs font-bold py-2.5 px-5 rounded shadow transition-colors">
              Request Technical Consultation
            </NuxtLink>
          </div>

        </aside>
      </div>

    </div>
  </section>
</template>

<script setup>
// Pure presentation component powered by Vue & Nuxt Motion directives!
</script>

<style scoped>
/* Relying 100% on standard Tailwind utility engine */
</style>