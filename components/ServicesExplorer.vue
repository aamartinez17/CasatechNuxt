<template>
  <section class="py-20 lg:py-28 bg-[#09111e] text-slate-100 relative overflow-hidden">
    <!-- Ambient Backdrop Lighting -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 text-left">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-cta animate-pulse"></span>
          Engineering & Strategy Capabilities
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
          Comprehensive Web App <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-sky-400 to-slate-200">
            Architecture & Execution.
          </span>
        </h2>
        <p class="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          Explore our end-to-end technical disciplines. Select a domain below to inspect architectural capabilities, frameworks, and deployment roadmaps.
        </p>
      </div>

      <!-- Main Interactive Display Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- LEFT COLUMN: Interactive Service Domain Selectors -->
        <div class="lg:col-span-5 space-y-3">
          <button
            v-for="(service, idx) in serviceCategories"
            :key="service.slug"
            type="button"
            @click="activeCategoryIndex = idx"
            class="w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
            :class="activeCategoryIndex === idx
              ? 'bg-slate-900/95 border-secondary/60 shadow-xl shadow-secondary/5 translate-x-1'
              : 'bg-slate-950/40 border-white/10 hover:border-white/20 hover:bg-slate-900/50'"
          >
            <!-- Active Indicator Pill -->
            <div 
              v-if="activeCategoryIndex === idx" 
              class="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-secondary to-sky-400"
            ></div>

            <div class="flex items-center gap-4 pl-1">
              <div 
                class="w-10 h-10 rounded-xl flex items-center justify-center text-sm transition-colors shrink-0"
                :class="activeCategoryIndex === idx 
                  ? 'bg-secondary text-slate-950 font-bold' 
                  : 'bg-white/[0.04] text-slate-400 border border-white/10 group-hover:text-white'"
              >
                <font-awesome-icon :icon="service.icon" />
              </div>
              
              <div>
                <span class="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-0.5">
                  0{{ idx + 1 }} // {{ service.tag }}
                </span>
                <h3 
                  class="font-heading font-semibold text-sm sm:text-base transition-colors"
                  :class="activeCategoryIndex === idx ? 'text-white' : 'text-slate-300 group-hover:text-white'"
                >
                  {{ service.title }}
                </h3>
              </div>
            </div>

            <font-awesome-icon 
              icon="chevron-right" 
              class="text-xs transition-transform duration-200"
              :class="activeCategoryIndex === idx ? 'text-secondary translate-x-1' : 'text-slate-600 group-hover:text-slate-400'"
            />
          </button>
        </div>

        <!-- RIGHT COLUMN: Dynamic Capabilities Reveal & Page Link -->
        <div class="lg:col-span-7">
          <div class="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
            
            <!-- Top Gradient Accent line -->
            <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-secondary via-sky-400 to-transparent"></div>

            <!-- Transition Wrapper for smooth content switching -->
            <transition name="fade-slide" mode="out-in">
              <div :key="currentCategory.slug" class="space-y-6">
                
                <!-- Card Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <span class="text-xs font-mono text-secondary tracking-widest uppercase block mb-1">
                      Domain Focus // 0{{ activeCategoryIndex + 1 }}
                    </span>
                    <h3 class="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                      {{ currentCategory.title }}
                    </h3>
                  </div>

                  <!-- Direct Route CTA -->
                  <NuxtLink
                    :to="`/services/${currentCategory.slug}`"
                    class="inline-flex items-center gap-2 bg-cta hover:bg-cta/90 active:scale-95 text-white font-heading font-semibold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all self-start sm:self-auto shrink-0 group"
                  >
                    <span>View Full Page</span>
                    <font-awesome-icon icon="arrow-right" class="text-[11px] group-hover:translate-x-0.5 transition-transform" />
                  </NuxtLink>
                </div>

                <!-- Strategic Summary -->
                <p class="text-sm text-slate-300 leading-relaxed">
                  {{ currentCategory.description }}
                </p>

                <!-- Itemized Points -->
                <div class="space-y-3 pt-2">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Architectural & Engineering Capabilities
                  </h4>

                  <div 
                    v-for="(point, pIdx) in currentCategory.points" 
                    :key="pIdx"
                    class="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors flex items-start gap-3.5 group"
                  >
                    <div class="w-6 h-6 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div class="space-y-0.5">
                      <h5 class="text-sm font-semibold text-white group-hover:text-secondary transition-colors">
                        {{ point.title }}
                      </h5>
                      <p class="text-xs text-slate-400 leading-relaxed">
                        {{ point.details }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Bottom Meta Footnote -->
                <div class="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Stack: {{ currentCategory.stack }}</span>
                  <NuxtLink :to="`/services/${currentCategory.slug}`" class="text-slate-300 hover:text-white underline">
                    Read documentation →
                  </NuxtLink>
                </div>

              </div>
            </transition>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategoryIndex = ref(0)

const serviceCategories = [
  {
    slug: 'custom-web-architecture',
    title: 'Custom Web Architecture & Interfaces',
    tag: 'Frontend Engineering',
    icon: 'code',
    description: 'We construct high-speed, bespoke frontend web applications engineered without heavy third-party templates. Every line of markup and CSS is tuned for sub-second Core Web Vitals and brand elevation.',
    stack: 'Vue 3, Nuxt, Tailwind CSS, Vite',
    points: [
      {
        title: 'Custom UI/UX & Brand Design',
        details: 'Modern design systems, high-fidelity Figma typography, and WCAG-compliant accessibility frameworks tailored to your market tier.'
      },
      {
        title: 'Handcrafted CSS & Micro-Interactions',
        details: 'Lightweight utility styling without framework bloat, minimizing layout shifts and maximizing browser paint performance.'
      },
      {
        title: 'Fluid UI Motion & GPU Animations',
        details: 'Hardware-accelerated viewport transitions and interactive hover micro-states that remain silky smooth across mobile and desktop devices.'
      },
      {
        title: 'Responsive Multi-Device Engineering',
        details: 'Adaptive multi-column grids rigorously tested from small mobile viewports to 4K ultra-wide workstations.'
      }
    ]
  },
  {
    slug: 'core-application-systems',
    title: 'Core Application Systems & Internal Tools',
    tag: 'Platform & Operations',
    icon: 'cubes',
    description: 'Turn spreadsheet bottlenecks into automated, cloud-based tools. We architect secure corporate portals, interactive client-facing estimators, and management suites.',
    stack: 'TypeScript, Pinia, Nitro, Node.js',
    points: [
      {
        title: 'Authentication & Role-Based Identity (RBAC)',
        details: 'Enterprise identity management, OAuth social logins, multi-tenant permission layers, and encrypted session handling.'
      },
      {
        title: 'Custom Executive Dashboards & Admin Portals',
        details: 'Operational control centers, team activity audits, and customized data visualization consoles tailored to your workflows.'
      },
      {
        title: 'Interactive Web Tools & Calculators',
        details: 'High-conversion lead generators, real-time parametric calculators, and spatial takeoffs (like our rooftop estimator).'
      },
      {
        title: 'Client Portals & Self-Service Workspaces',
        details: 'Secure customer repositories for contract distribution, automated project updates, and direct self-service inquiries.'
      }
    ]
  },
  {
    slug: 'api-integrations-webhooks',
    title: 'Integrations, APIs & Automations',
    tag: 'Data Connectivity',
    icon: 'plug',
    description: 'Connect your web application to mission-critical global services. We design resilient REST and GraphQL connectors with asynchronous background pipelines.',
    stack: 'REST, Webhooks, Google APIs, Stripe',
    points: [
      {
        title: 'Third-Party API Integrations',
        details: 'Connecting specialized external feeds including Google Maps/Solar, Gemini Vision models, shipping carriers, and CRM endpoints.'
      },
      {
        title: 'Real-Time Event Streams & Webhooks',
        details: 'Bidirectional webhook handlers with automatic payload validation, retry queues, and asynchronous event notifications.'
      },
      {
        title: 'Payment Gateways & Subscriptions',
        details: 'Stripe and PayPal implementations featuring PCI-compliant checkout sessions, multi-tier billing, and automated invoice delivery.'
      },
      {
        title: 'Social Feeds & Marketing Synchronization',
        details: 'Safe Meta Graph and LinkedIn business API connections that showcase dynamic content without exposing master account credentials.'
      }
    ]
  },
  {
    slug: 'data-engineering-backend',
    title: 'Data Engineering & Backend Systems',
    tag: 'Database Architecture',
    icon: 'database',
    description: 'Reliable backend foundations designed for strict data integrity, fast query response times, and zero-downtime scaling.',
    stack: 'PostgreSQL, Supabase, Firestore, Redis',
    points: [
      {
        title: 'Relational & Document Database Architecture',
        details: 'Clean relational schemas, indexing strategies, and multi-tenant structures built on PostgreSQL, Supabase, or Firestore.'
      },
      {
        title: 'Client/Server State Hydration & Caching',
        details: 'Eliminating duplicate requests with server-side caching headers, edge caching, and predictable client stores.'
      },
      {
        title: 'Automated Ingestion & Backup Routines',
        details: 'Scheduled Cron jobs, automated nightly database snapshots, and ingestion pipelines for legacy CSV and Excel data.'
      }
    ]
  },
  {
    slug: 'cloud-hosting-security',
    title: 'Hosting, Edge Reliability & Web Security',
    tag: 'DevOps & Hardening',
    icon: 'shield-halved',
    description: 'Zero-trust infrastructure configurations that protect intellectual property, prevent key leakage, and maintain 99.9% uptime.',
    stack: 'Netlify, Vercel, Node, Cloudflare',
    points: [
      {
        title: 'Serverless Edge Hosting & Multi-Stage CI/CD',
        details: 'Instant global CDN propagation with isolated preview environments and automated continuous deployment git hooks.'
      },
      {
        title: 'Two-Key Security & Zero-Trust Architecture',
        details: 'Strict isolation of public browser keys from private backend server secrets, CORS policy lockdowns, and rate limiting.'
      },
      {
        title: 'Continuous Telemetry & Error Monitoring',
        details: 'Active exception capture and diagnostic logs to patch edge anomalies before end users notice.'
      }
    ]
  },
  {
    slug: 'growth-search-advisory',
    title: 'Growth, Search Visibility & Advisory',
    tag: 'Strategic Consulting',
    icon: 'chart-line',
    description: 'Ensure your web investment generates tangible market returns. We optimize across traditional search engines, answer boxes, and generative LLMs.',
    stack: 'JSON-LD, Schema.org, Core Web Vitals',
    points: [
      {
        title: 'The Search Trifecta (SEO, AEO & GEO)',
        details: 'Comprehensive indexing optimization, Schema.org structured data for Featured Snippets, and entity positioning for AI models.'
      },
      {
        title: 'Architectural Tech Audits & Code Refactoring',
        details: 'Thorough inspection of legacy web applications to resolve performance bottlenecks, security flaws, and technical debt.'
      },
      {
        title: 'Bilingual Localization (English & Spanish)',
        details: 'Native dual-language routing and contextual translations designed to capture regional and international demographics.'
      }
    ]
  }
]

const currentCategory = computed(() => serviceCategories[activeCategoryIndex.value])
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>