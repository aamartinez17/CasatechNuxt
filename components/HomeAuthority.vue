<template>
  <!-- 
    PROOF & AUTHORITY MATRIX
    Semantic <section> for technical SEO. 
    bg-white creates a crisp contrast against the previous gray section.
  -->
  <section class="py-24 border-4 border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Asymmetrical 2-Column Grid (65% / 35% on lg screens) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        <!-- 
          LEFT COLUMN: Case Studies (65%)
          Semantic <article> tags for the portfolio items.
        -->
        <div class="lg:col-span-8">
          <h2 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } }"
            class="text-primary font-heading font-bold text-3xl md:text-4xl mb-10"
          >
            Proven Results for Growing Businesses
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Case Study 1 -->
            <article 
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 150 } }"
              class="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-fast flex flex-col"
            >
              <div class="relative h-48 overflow-hidden bg-bg-light">
                <!-- WebP Image Optimization with absolute positioning for a clean crop -->
                <img 
                  src="/images/servicesview-web-development.png" 
                  alt="CT Web Design Case Studies - Custom Vue.js Application" 
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="p-6 flex flex-col flex-grow">
                <span class="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Web Application</span>
                <h3 class="text-xl font-heading font-bold text-primary mb-3">
                  Custom Web App Deployment
                </h3>
                <p class="text-body text-sm leading-relaxed mb-4 flex-grow">
                  Engineered a high-performance Nuxt 3 portal that reduced client onboarding time by 40% and eliminated manual data entry.
                </p>
                <NuxtLink to="/portfolio" class="text-interactive hover:text-interactive-hover font-bold text-sm inline-flex items-center transition-fast w-max">
                  Read Case Study <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </NuxtLink>
              </div>
            </article>

            <!-- Case Study 2 -->
            <!-- Local SEO Target: Local IT Solutions Connecticut -->
            <article 
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 300 } }"
              class="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-fast flex flex-col"
              title="Local IT Solutions Connecticut"
            >
              <div class="relative h-48 overflow-hidden bg-bg-light">
                <img 
                  src="/images/blogview-header.png" 
                  alt="Managed IT Services infrastructure setup" 
                  loading="lazy"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="p-6 flex flex-col flex-grow">
                <span class="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Infrastructure</span>
                <h3 class="text-xl font-heading font-bold text-primary mb-3">
                  Zero-Downtime Cloud Migration
                </h3>
                <p class="text-body text-sm leading-relaxed mb-4 flex-grow">
                  Executed a seamless server migration for a regional logistics firm, ensuring 100% uptime and implementing 24/7 bilingual monitoring.
                </p>
                <NuxtLink to="/portfolio" class="text-interactive hover:text-interactive-hover font-bold text-sm inline-flex items-center transition-fast w-max">
                  Read Case Study <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </NuxtLink>
              </div>
            </article>

          </div>
        </div>

        <!-- 
          RIGHT COLUMN: Authority & Insights (35%)
          Semantic <aside> to indicate complementary content.
        -->
        <aside class="lg:col-span-4 lg:pl-8 lg:border-l border-gray-200 mt-12 lg:mt-0">
          <h2 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 100 } }"
            class="text-primary font-heading font-bold text-3xl mb-10"
          >
            Executive Insights
          </h2>

          <!-- The Local Anchor Block (Author Bio) -->
          <!-- SEO Target: New Haven B2B SEO Expert (injected naturally into the context) -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 250 } }"
            class="bg-bg-light p-6 rounded-lg border border-gray-200 mb-10"
          >
            <div class="flex items-center mb-4">
              <div class="w-14 h-14 rounded-full overflow-hidden bg-gray-300 border-2 border-white shadow-sm mr-4 flex-shrink-0">
                <img src="/images/aboutview-story.png" alt="Alex Martinez - Casatech LLC" class="w-full h-full object-cover" />
              </div>
              <div>
                <h3 class="font-heading font-bold text-primary text-lg leading-tight">Alex Martinez</h3>
                <p class="text-xs font-bold text-secondary uppercase tracking-wider mt-1">Founder & Lead Engineer</p>
              </div>
            </div>
            <p class="text-sm text-body leading-relaxed">
              A first-generation Mexican-American combining a powerful foundation in engineering with modern computer science to deliver enterprise-grade tech strategies to Connecticut SMEs. Fully bilingual (English/Español) IT & Web support.
            </p>
          </div>

          <!-- Article Links (No Social Media bleed!) -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 400 } }"
            class="flex flex-col space-y-6"
          >
            <NuxtLink to="/article/boost-online-presence" class="group block">
              <h4 class="text-primary font-bold leading-snug group-hover:text-interactive transition-fast mb-2">
                Boost Your Online Presence: Expert insights on SEO and IT solutions.
              </h4>
              <span class="text-interactive text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform w-max">
                Read Article <span class="ml-1">→</span>
              </span>
            </NuxtLink>

            <div class="w-full h-px bg-gray-200"></div>

            <NuxtLink to="/article/seo-essentials" class="group block">
              <h4 class="text-primary font-bold leading-snug group-hover:text-interactive transition-fast mb-2">
                Featured: SEO Essentials for Local Businesses.
              </h4>
              <span class="text-interactive text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform w-max">
                Read Article <span class="ml-1">→</span>
              </span>
            </NuxtLink>
          </div>

        </aside>
      </div>

    </div>
  </section>
</template>

<script setup>
// Pure presentation component using native Vue v-motion directives.
</script>

<style scoped>
/* Relying strictly on your Tailwind CSS custom variables for extreme performance. */
</style>