<template>
  <!-- 
    PROOF & AUTHORITY MATRIX
    Semantic <section> highlighting live client work, team background, and engineering standards.
  -->
  <section class="py-16 sm:py-20 border-y border-gray-200 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Asymmetrical 2-Column Grid (65% / 35% on lg screens) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
        
        <!-- 
          LEFT COLUMN: Live Case Studies & About Studio CTA (65%)
        -->
        <div class="lg:col-span-8 flex flex-col justify-between">
          <div>
            <h2 
              v-motion
              :initial="{ opacity: 0, y: 15 }"
              :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } }"
              class="text-primary font-heading font-bold text-2xl md:text-3xl mb-6"
            >
              Featured Web Projects & Insights
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              <!-- Case Study / Featured Blog 1: SEO vs AEO vs GEO Article -->
              <article 
                v-motion
                :initial="{ opacity: 0, y: 25 }"
                :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 100 } }"
                class="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col"
              >
                <div class="relative h-36 overflow-hidden bg-slate-100 border-b border-gray-100">
                  <img 
                    v-if="isMounted"
                    src="/images/insights/article-seo-aeo-geo.jpg" 
                    alt="SEO vs AEO vs GEO Modern Search Visibility Guide" 
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="p-5 flex flex-col flex-grow">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full w-max mb-2">
                    Featured Insight
                  </span>
                  <h3 class="text-base font-heading font-bold text-primary mb-1.5 group-hover:text-secondary transition-colors line-clamp-2">
                    SEO vs. AEO vs. GEO: Modern Search Visibility Guide
                  </h3>
                  <p class="text-slate-600 text-xs leading-relaxed mb-4 flex-grow line-clamp-3">
                    Discover how search optimization is evolving beyond traditional rankings into answer engines and generative AI visibility strategies.
                  </p>
                  <NuxtLink to="/insights/seo-vs-aeo-vs-geo-modern-search-visibility-guide" class="text-secondary hover:text-primary font-bold text-xs inline-flex items-center transition-colors w-max mt-auto">
                    Read Article <span class="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
                  </NuxtLink>
                </div>
              </article>

              <!-- Featured Blog 2: Commercial / Business Website Insights CTA -->
              <article 
                v-motion
                :initial="{ opacity: 0, y: 25 }"
                :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 200 } }"
                class="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col"
              >
                <div class="relative h-36 overflow-hidden bg-slate-100 border-b border-gray-100">
                  <img 
                    v-if="isMounted"
                    src="/images/blogview-header.png" 
                    alt="Commercial Website Strategies & Insights" 
                    loading="lazy"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="p-5 flex flex-col flex-grow">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full w-max mb-2">
                    Expert Insights
                  </span>
                  <h3 class="text-base font-heading font-bold text-primary mb-1.5 group-hover:text-secondary transition-colors line-clamp-2">
                    Building High-Converting Commercial Sites
                  </h3>
                  <p class="text-slate-600 text-xs leading-relaxed mb-4 flex-grow line-clamp-3">
                    Explore our articles and guides on designing high-speed marketing platforms with custom quote builders and organic lead generation frameworks.
                  </p>
                  <NuxtLink to="/insights" class="text-secondary hover:text-primary font-bold text-xs inline-flex items-center transition-colors w-max mt-auto">
                    Explore Insights <span class="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
                  </NuxtLink>
                </div>
              </article>

            </div>
          </div>

          <!-- LEFT-SIDE ABOUT CTA BANNER -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 15 }"
            :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 250 } }"
            class="bg-slate-50 border border-gray-200 rounded-xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div class="space-y-0.5 text-center sm:text-left">
              <span class="text-[11px] font-bold uppercase tracking-wider text-secondary">Driven by Technical Excellence</span>
              <h3 class="font-heading font-bold text-primary text-base md:text-lg">Behind the Engineering Studio</h3>
              <p class="text-slate-600 text-xs max-w-md">Learn how our full-stack engineering background and client-first mindset power every platform we build.</p>
            </div>
            <NuxtLink to="/about" class="bg-primary hover:bg-primary/90 text-white font-bold text-xs py-2.5 px-5 rounded-lg transition-colors flex-shrink-0 shadow-soft">
              Meet the Studio →
            </NuxtLink>
          </div>

        </div>

        <!-- 
          RIGHT COLUMN: Engineering Benchmarks & Tech Standards (35%)
        -->
        <aside class="lg:col-span-4 lg:pl-6 lg:border-l border-gray-200 mt-8 lg:mt-0 flex flex-col justify-between">
          <div>
            <h2 
              v-motion
              :initial="{ opacity: 0, y: 15 }"
              :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 80 } }"
              class="text-primary font-heading font-bold text-2xl md:text-3xl mb-4"
            >
              Engineering Standards
            </h2>

            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
              We replace sluggish, plugin-heavy site builders with clean, hand-crafted code architectures designed for maximum security, instantaneous page loads, and long-term scalability.
            </p>

            <!-- Technical Pillars List -->
            <div 
              v-motion
              :initial="{ opacity: 0, y: 15 }"
              :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 150 } }"
              class="space-y-2.5 mb-6"
            >
              <div class="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-lg border border-gray-100">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-secondary mt-0.5 text-xs" />
                <div>
                  <h4 class="text-primary font-bold text-xs">Sub-Second Load Times</h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">Static site generation & server-side hydration for top Google PageSpeed scores.</p>
                </div>
              </div>

              <div class="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-lg border border-gray-100">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-secondary mt-0.5 text-xs" />
                <div>
                  <h4 class="text-primary font-bold text-xs">Zero CMS Security Bloat</h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">No vulnerable plugins or forced weekly theme updates required.</p>
                </div>
              </div>

              <div class="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-lg border border-gray-100">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-secondary mt-0.5 text-xs" />
                <div>
                  <h4 class="text-primary font-bold text-xs">Custom API Integrations</h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">Direct integration with CRMs, databases, payment gateways, and backend APIs.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Badge / Services Feature -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 15 }"
            :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 250 } }"
            class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col text-left"
          >
            <div class="relative h-28 overflow-hidden bg-slate-100 border-b border-gray-100">
              <img 
                v-if="isMounted"
                src="/images/servicesview-business-tech.png" 
                alt="Business Tech Solutions" 
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-4 sm:p-5">
              <h3 class="font-heading font-bold text-base mb-1 text-primary">Explore Our Services</h3>
              <p class="text-xs text-slate-600 mb-3 leading-relaxed">From full-stack custom web applications to high-performance business architecture.</p>
              <NuxtLink to="/services" class="inline-block bg-primary hover:bg-primary/90 text-white text-xs font-bold py-2 px-4 rounded shadow transition-colors">
                View All Services →
              </NuxtLink>
            </div>
          </div>

        </aside>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})
</script>

<style scoped>
/* Relying 100% on standard Tailwind utility engine */
</style>