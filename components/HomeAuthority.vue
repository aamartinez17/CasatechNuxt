<template>
  <!-- 
    PROOF & AUTHORITY MATRIX (Card Layout with Side Margins & Dark Glass Opaque Theme)
  -->
  <section class="py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Outer Wrapper Card with Dark Glass Opaque Styling & Side Margins -->
      <div class="relative bg-primary/60 backdrop-blur-sm rounded-3xl p-6 sm:p-10 lg:p-14 border border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
        
        <!-- Subtle Ambient Glows Inside Card -->
        <div class="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="relative z-10 space-y-12">
          
          <!-- TOP TIER: Engineering Standards & Pillars (Full Width) -->
          <div class="w-full">
            <div class="max-w-3xl mb-8">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-xs font-mono uppercase tracking-widest font-semibold mb-4">
                <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                Code Architecture & Performance
              </div>

              <h2 
                v-motion
                :initial="{ opacity: 0, y: 15 }"
                :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } }"
                class="text-white font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight"
              >
                Engineering Standards
              </h2>

              <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
                We replace sluggish, plugin-heavy site builders with clean, hand-crafted code architectures designed for maximum security, instantaneous page loads, and long-term scalability.
              </p>
            </div>

            <!-- Technical Pillars Grid (Full Width 3-Column Layout) -->
            <div 
              v-motion
              :initial="{ opacity: 0, y: 15 }"
              :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 150 } }"
              class="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div class="flex flex-col items-start gap-3 p-6 bg-slate-950/85 backdrop-blur-xl rounded-2xl gradient-border shadow-xl">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-secondary text-base" />
                <div>
                  <h4 class="text-white font-bold text-base mb-1.5">Sub-Second Load Times</h4>
                  <p class="text-sm text-slate-300 leading-relaxed">Static site generation & server-side hydration for top Google PageSpeed scores.</p>
                </div>
              </div>

              <div class="flex flex-col items-start gap-3 p-6 bg-slate-950/85 backdrop-blur-xl rounded-2xl gradient-border shadow-xl">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-secondary text-base" />
                <div>
                  <h4 class="text-white font-bold text-base mb-1.5">Zero CMS Security Bloat</h4>
                  <p class="text-sm text-slate-300 leading-relaxed">No vulnerable plugins or forced weekly theme updates required.</p>
                </div>
              </div>

              <div class="flex flex-col items-start gap-3 p-6 bg-slate-950/85 backdrop-blur-xl rounded-2xl gradient-border shadow-xl">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-secondary text-base" />
                <div>
                  <h4 class="text-white font-bold text-base mb-1.5">Custom API Integrations</h4>
                  <p class="text-sm text-slate-300 leading-relaxed">Direct integration with CRMs, databases, payment gateways, and backend APIs.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- BOTTOM TIER: 2-Column Grid for Feature Cards & Staggered Insights -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-6 border-t border-slate-800/80">
            
            <!-- LEFT COLUMN: Studio & Service Cards (7 Cols) -->
            <div class="lg:col-span-7 flex flex-col space-y-6">
              
              <h3 
                v-motion
                :initial="{ opacity: 0, y: 15 }"
                :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 80 } }"
                class="text-white font-heading font-bold text-xl md:text-2xl mt-8"
              >
                Explore our Site
              </h3>

              <!-- Feature Card 1: Full-Stack Solutions -->
              <div 
                v-motion
                :initial="{ opacity: 0, y: 15 }"
                :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 200 } }"
                class="bg-slate-950/85 backdrop-blur-xl gradient-border rounded-2xl overflow-hidden shadow-2xl hover:shadow-hover transition-all duration-300 flex flex-col sm:flex-row items-center text-left"
              >
                <div class="relative w-full sm:w-52 h-40 sm:h-full overflow-hidden border-b sm:border-b-0 sm:border-r gradient-border-right flex-shrink-0">
                  <img 
                    v-if="isMounted"
                    src="/images/servicesview-business-tech.png" 
                    alt="Business Tech Solutions" 
                    loading="lazy"
                    class="w-full h-full object-cover p-5"
                  />
                </div>
                <div class="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-secondary">Full-Stack Solutions</span>
                    <h3 class="font-heading font-bold text-lg md:text-xl mb-2 text-white">Explore Our Services</h3>
                    <p class="text-sm text-slate-300 mb-6 leading-relaxed">From full-stack custom web applications to high-performance business architecture designed to convert.</p>
                  </div>
                  <NuxtLink to="/services" class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow transition-colors w-max border border-sky-500/30">
                    View All Services →
                  </NuxtLink>
                </div>
              </div>

              <!-- Feature Card 2: Technical Excellence / Engineering Studio -->
              <div 
                v-motion
                :initial="{ opacity: 0, y: 15 }"
                :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 250 } }"
                class="bg-slate-950/85 backdrop-blur-xl gradient-border rounded-2xl overflow-hidden shadow-2xl hover:shadow-hover transition-all duration-300 flex flex-col sm:flex-row items-center text-left"
              >
                <div class="relative w-full sm:w-52 h-40 sm:h-full overflow-hidden border-b sm:border-b-0 sm:border-r gradient-border-right flex-shrink-0">
                  <img 
                    v-if="isMounted"
                    src="/images/homeview-header.png" 
                    alt="Engineering Studio Workspace" 
                    loading="lazy"
                    class="w-full h-full object-cover p-5"
                  />
                </div>
                <div class="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-secondary">Technical Excellence</span>
                    <h3 class="font-heading font-bold text-lg md:text-xl mb-2 text-white">Behind the Engineering Studio</h3>
                    <p class="text-sm text-slate-300 mb-6 leading-relaxed">Learn how our full-stack engineering background and client-first mindset power every platform we build.</p>
                  </div>
                  <NuxtLink to="/about" class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow transition-colors w-max border border-sky-500/30">
                    Meet the Studio →
                  </NuxtLink>
                </div>
              </div>

              <!-- Feature Card 3: Portfolio & Work Showcase CTA -->
              <div 
                v-motion
                :initial="{ opacity: 0, y: 15 }"
                :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 300 } }"
                class="bg-slate-950/85 backdrop-blur-xl gradient-border rounded-2xl overflow-hidden shadow-2xl hover:shadow-hover transition-all duration-300 flex flex-col sm:flex-row items-center text-left"
              >
                <div class="relative w-full sm:w-52 h-40 sm:h-full overflow-hidden border-b sm:border-b-0 sm:border-r gradient-border-right flex-shrink-0 ">
                  <img 
                    v-if="isMounted"
                    src="/images/portfolioview-header.png" 
                    alt="Portfolio Showcase" 
                    loading="lazy"
                    class="w-full h-full object-cover p-5"
                  />
                </div>
                <div class="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-secondary">Proven Track Record</span>
                    <h3 class="font-heading font-bold text-lg md:text-xl mb-2 text-white">Explore Our Portfolio</h3>
                    <p class="text-sm text-slate-300 mb-6 leading-relaxed">Browse our recent custom web developments, high-speed interfaces, and business applications.</p>
                  </div>
                  <NuxtLink to="/portfolio" class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow transition-colors w-max border border-sky-500/30">
                    View Portfolio →
                  </NuxtLink>
                </div>
              </div>

            </div>

            <!-- RIGHT COLUMN: Featured Insights (5 Cols, Staggered to fill vertical space) -->
            <aside class="lg:col-span-5 flex flex-col space-y-6 pt-0 lg:pt-8">
              <div>
                <h3 
                  v-motion
                  :initial="{ opacity: 0, y: 15 }"
                  :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25, delay: 80 } }"
                  class="text-white font-heading font-bold text-xl md:text-2xl mb-6"
                >
                  Featured Insights
                </h3>

                <div class="space-y-6">
                  
                  <!-- Case Study / Featured Blog 1 -->
                  <article 
                    v-motion
                    :initial="{ opacity: 0, y: 25 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 100 } }"
                    class="group bg-slate-950/85 backdrop-blur-xl gradient-border rounded-2xl overflow-hidden shadow-2xl hover:shadow-hover transition-all duration-300 flex flex-col"
                  >
                    <div class="relative h-40 overflow-hidden bg-slate-900 border-b gradient-border-bottom">
                      <img 
                        v-if="isMounted"
                        src="/images/insights/article-seo-aeo-geo.jpg" 
                        alt="SEO vs AEO vs GEO Modern Search Visibility Guide" 
                        loading="lazy"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                      <span class="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full w-max mb-3">
                        Featured Insight
                      </span>
                      <h4 class="text-base font-heading font-bold text-white mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                        SEO vs. AEO vs. GEO: Modern Search Visibility Guide
                      </h4>
                      <p class="text-slate-300 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                        Discover how search optimization is evolving beyond traditional rankings into answer engines.
                      </p>
                      <NuxtLink to="/insights/seo-vs-aeo-vs-geo-modern-search-visibility-guide" class="text-secondary hover:text-white font-bold text-sm inline-flex items-center transition-colors w-max mt-auto">
                        Read Article <span class="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
                      </NuxtLink>
                    </div>
                  </article>

                  <!-- Featured Blog 2 -->
                  <article 
                    v-motion
                    :initial="{ opacity: 0, y: 25 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25, delay: 200 } }"
                    class="group bg-slate-950/85 backdrop-blur-xl gradient-border rounded-2xl overflow-hidden shadow-2xl hover:shadow-hover transition-all duration-300 flex flex-col"
                  >
                    <div class="relative h-40 overflow-hidden bg-slate-900 border-b gradient-border-bottom">
                      <img 
                        v-if="isMounted"
                        src="/images/blogview-header.png" 
                        alt="Commercial Website Strategies & Insights" 
                        loading="lazy"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                      <span class="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full w-max mb-3">
                        Expert Insights
                      </span>
                      <h4 class="text-base font-heading font-bold text-white mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                        Building High-Converting Commercial Sites
                      </h4>
                      <p class="text-slate-300 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                        Explore guides on designing high-speed marketing platforms with custom quote builders.
                      </p>
                      <NuxtLink to="/insights" class="text-secondary hover:text-white font-bold text-sm inline-flex items-center transition-colors w-max mt-auto">
                        Explore Insights <span class="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
                      </NuxtLink>
                    </div>
                  </article>

                </div>
              </div>
            </aside>

          </div>

        </div>
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
/* Gradient border utility classes mimicking custom gradient strokes */
.gradient-border {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to bottom right, rgba(56, 189, 248, 0.4), rgba(168, 85, 247, 0.2), rgba(255, 255, 255, 0.05)) 1;
}

.gradient-border-right {
  border-image: linear-gradient(to bottom, rgba(56, 189, 248, 0.4), rgba(168, 85, 247, 0.2), transparent) 1;
}

.gradient-border-bottom {
  border-image: linear-gradient(to right, rgba(56, 189, 248, 0.4), rgba(168, 85, 247, 0.2), transparent) 1;
}
</style>