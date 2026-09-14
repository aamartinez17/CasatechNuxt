<!-- components/services/StickyNav.vue -->
<template>
  <div class="w-full">
    <!-- Outer wrapper without overflow-hidden so the dropdown can float outside -->
    <div class="relative group p-[2px] rounded-2xl shadow-xl">
      
      <!-- Isolate overflow-hidden ONLY to the spinning gradient background -->
      <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div class="absolute inset-[-150%] bg-[conic-gradient(from_0deg,#0ea5e9,#6366f1,#f59e0b,#10b981,#0ea5e9)] animate-spin-slow"></div>
      </div>

      <!-- Inner Component Body -->
      <div class="relative z-10 bg-slate-950/95 backdrop-blur-xl rounded-[14px] p-4 sm:p-5 border border-white/10 text-white">
        
        <!-- Header / Indicator -->
        <div class="flex items-center justify-between gap-2 mb-2 px-1">
          <span class="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Explore Services
          </span>
          <span class="text-[10px] font-mono text-secondary">
            0{{ currentActiveIndex + 1 }} / 0{{ servicesList.length }}
          </span>
        </div>

        <!-- Dropdown Controls Container -->
        <div class="relative">
          <!-- Main Dropdown Trigger Button -->
          <div class="flex items-center gap-2">
            <button
              type="button"
              @click="isDropdownOpen = !isDropdownOpen"
              class="flex-1 flex items-center justify-between gap-2 bg-slate-900 hover:bg-slate-800/90 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-left transition-all text-xs sm:text-sm font-semibold text-slate-100 cursor-pointer"
            >
              <div class="flex items-center gap-2.5 truncate">
                <font-awesome-icon :icon="selectedService.icon" class="text-secondary text-xs sm:text-sm shrink-0" />
                <span class="truncate">{{ selectedService.name }}</span>
              </div>
              <font-awesome-icon 
                icon="chevron-down" 
                class="text-[11px] text-slate-400 transition-transform duration-200 shrink-0"
                :class="{ 'rotate-180 text-secondary': isDropdownOpen }"
              />
            </button>

            <!-- Quick Jump to the Page if not already on it -->
            <button
              type="button"
              @click="navigateToService(selectedService.route)"
              :title="route.path === selectedService.route ? 'Currently viewing this page' : 'Visit page'"
              class="px-3 py-2.5 rounded-xl border border-slate-700/80 transition-all font-mono text-xs sm:text-sm flex items-center justify-center shrink-0 cursor-pointer"
              :class="route.path === selectedService.route 
                ? 'bg-slate-900 text-slate-500 border-slate-800 cursor-default' 
                : 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-slate-950 border-secondary/30'"
            >
              <font-awesome-icon icon="arrow-right" class="text-xs" />
            </button>
          </div>

          <!-- Dynamic Dropdown Menu -->
          <transition name="dropdown-fade">
            <div
              v-if="isDropdownOpen"
              class="absolute top-full mt-1.5 inset-x-0 bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl p-1.5 backdrop-blur-2xl space-y-1 z-50"
            >
              <button
                v-for="service in servicesList"
                :key="service.route"
                type="button"
                @click="selectService(service)"
                class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer text-left"
                :class="service.route === selectedService.route 
                  ? 'bg-secondary/15 text-secondary font-bold' 
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'"
              >
                <div class="flex items-center gap-2 truncate">
                  <font-awesome-icon :icon="service.icon" class="text-[11px] sm:text-xs opacity-80 shrink-0" />
                  <span class="truncate">{{ service.name }}</span>
                </div>
                <span v-if="service.route === selectedService.route" class="text-[10px] font-mono text-secondary">Selected</span>
              </button>

              <div class="pt-1 mt-1 border-t border-slate-800">
                <NuxtLink
                  to="/services"
                  @click="isDropdownOpen = false"
                  class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  <span>All Services Overview</span>
                  <font-awesome-icon icon="arrow-up-right-from-square" class="text-[9px]" />
                </NuxtLink>
              </div>
            </div>
          </transition>
        </div>

        <!-- Dynamic Questions Panel for Selected Service -->
        <div v-if="selectedService.questions?.length" class="mt-4 pt-3 border-t border-slate-800/80">
          <div class="flex items-center justify-between px-1 mb-2">
            <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <span>Section Q&amp;As</span>
              <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-slate-800 text-secondary">
                {{ selectedService.questions.length }}
              </span>
            </span>

            <!-- Toggle / Minimize Button -->
            <button
              type="button"
              @click="isQuestionsMinimized = !isQuestionsMinimized"
              class="text-[10px] font-mono text-slate-400 hover:text-secondary transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>{{ isQuestionsMinimized ? 'Expand' : 'Minimize' }}</span>
              <font-awesome-icon 
                :icon="isQuestionsMinimized ? 'chevron-down' : 'chevron-up'" 
                class="text-[9px]"
              />
            </button>
          </div>

          <!-- Dynamic Questions List -->
          <transition name="expand">
            <div v-show="!isQuestionsMinimized" class="space-y-1.5 pt-1">
              <button
                v-for="(q, qIdx) in selectedService.questions"
                :key="q.target"
                type="button"
                @click="handleQuestionClick(q.target)"
                class="w-full text-left p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800/80 hover:border-secondary/40 transition-all text-xs text-slate-300 hover:text-white flex items-start gap-2 group cursor-pointer"
              >
                <span class="font-mono text-[10px] text-secondary group-hover:text-white transition-colors shrink-0 mt-0.5">
                  0{{ qIdx + 1 }}.
                </span>
                <span class="leading-snug">
                  {{ q.fullQuestion }}
                </span>
              </button>
            </div>
          </transition>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const router = useRouter()
const route = useRoute()

const isDropdownOpen = ref(false)
const isQuestionsMinimized = ref(true)

const servicesList = [
  {
    name: 'Custom Web Design & Apps',
    route: '/services/custom-web-architecture',
    icon: 'code',
    questions: [
      { 
        fullQuestion: 'Why choose a custom-built website over pre-made templates like WordPress or Webflow?', 
        target: 'custom-vs-templates' 
      },
      { 
        fullQuestion: 'How does a faster website help your business get more leads?', 
        target: 'performance-engineering' 
      },
      { 
        fullQuestion: 'How does thoughtful design and accessibility protect and grow your brand?', 
        target: 'design-systems-wcag' 
      },
      { 
        fullQuestion: 'How do smooth animations work without draining phone battery or freezing up?', 
        target: 'mobile-experience' 
      },
      { 
        fullQuestion: 'Why our modern web stack helps your business get found and scale easily', 
        target: 'technology-benefits' 
      }
    ]
  },
  {
    name: 'Application Systems & Portals',
    route: '/services/core-application-systems',
    icon: 'cubes',
    questions: [
      { 
        fullQuestion: 'What are the hidden risks of running core operations out of spreadsheets, and when should you upgrade?', 
        target: 'spreadsheet-to-app' 
      },
      { 
        fullQuestion: 'How does Role-Based Access Control (RBAC) safeguard sensitive business data?', 
        target: 'rbac-security' 
      },
      { 
        fullQuestion: 'Why engineer a tailored operational dashboard instead of buying Power BI or Tableau licenses?', 
        target: 'custom-dashboards' 
      },
      { 
        fullQuestion: 'How do interactive web calculators and self-service portals increase qualified sales?', 
        target: 'calculators-and-portals' 
      },
      { 
        fullQuestion: 'Why end-to-end TypeScript, Pinia, and Nitro power reliable internal business tools', 
        target: 'backend-state-stack' 
      }
    ]
  },
  {
    name: 'Integration, API, Automation',
    route: '/services/api-integrations-webhooks',
    icon: 'network-wired',
    questions: [
      { 
        fullQuestion: 'How do you prevent third-party API rate limits and external provider outages from breaking your web application?', 
        target: 'resilient-apis' 
      },
      { 
        fullQuestion: 'How do asynchronous queues and dead-letter queues (DLQs) prevent lost webhook events?', 
        target: 'webhooks-reliability' 
      },
      { 
        fullQuestion: 'How do custom Stripe and PayPal integrations achieve strict PCI compliance without complex audit burdens?', 
        target: 'payment-infrastructure' 
      },
      { 
        fullQuestion: 'How do server-side proxies protect social and marketing API keys from browser exposure?', 
        target: 'credential-security' 
      },
      { 
        fullQuestion: 'Why decoupled serverless routes and environment vaults are critical for enterprise API workflows', 
        target: 'integration-stack' 
      }
    ]
  },
  {
    name: 'Data Engineering & Backends',
    route: '/services/data-engineering-backend',
    icon: 'server',
    questions: [
      { 
        fullQuestion: 'When should your business use PostgreSQL (Supabase) versus a document database like Firestore?', 
        target: 'postgres-vs-firestore' 
      },
      { 
        fullQuestion: 'How does PostgreSQL Row-Level Security (RLS) guarantee tenant data isolation?', 
        target: 'multi-tenant-rls' 
      },
      { 
        fullQuestion: 'How does in-memory Redis caching eliminate database bottlenecks and cut API latency?', 
        target: 'redis-caching' 
      },
      { 
        fullQuestion: 'How do automated migrations and Point-In-Time Recovery (PITR) guarantee zero data loss?', 
        target: 'migrations-backups' 
      },
      { 
        fullQuestion: 'How do composite indexes and query profiling prevent slow database locks under concurrent write traffic?', 
        target: 'scale-concurrency' 
      }
    ]
  },
  {
    name: 'Hosting, Edge & Web Security',
    route: '/services/cloud-hosting-security',
    icon: 'shield-halved',
    questions: [
      { 
        fullQuestion: 'Why deploy to global serverless edge networks instead of traditional single-server VPS hosting?', 
        target: 'edge-vs-vps' 
      },
      { 
        fullQuestion: 'How do automated branch previews and smoke tests prevent broken code from reaching production?', 
        target: 'cicd-previews' 
      },
      { 
        fullQuestion: 'What is a "two-key" architecture, and how does it prevent public scripts from leaking backend secrets?', 
        target: 'two-key-security' 
      },
      { 
        fullQuestion: 'How does continuous telemetry catch runtime errors and malicious bot attacks before clients notice?', 
        target: 'telemetry-monitoring' 
      },
      { 
        fullQuestion: 'How do Cloudflare WAF, Vercel, and Netlify provide enterprise DDoS resilience for serverless web applications?', 
        target: 'platform-stack' 
      }
    ]
  },
  {
    name: 'Growth, Search & Advisory',
    route: '/services/growth-search-advisory',
    icon: 'chart-pie',
    questions: [
      { 
        fullQuestion: 'What is the difference between SEO, AEO, and GEO, and how do you get cited by AI engines?', 
        target: 'search-trifecta' 
      },
      { 
        fullQuestion: 'How does a deep-code architectural audit uncover hidden revenue loss compared to a marketing audit?', 
        target: 'tech-audits' 
      },
      { 
        fullQuestion: 'Why do native subpaths and hreflang tags outperform automated translation widgets?', 
        target: 'bilingual-routing' 
      },
      { 
        fullQuestion: 'Which Schema.org entity types are most critical for proving authority to AI answer engines?', 
        target: 'schema-and-vitals' 
      },
      { 
        fullQuestion: 'How Casatech LLC provides fractional CTO advisory and search optimization for growing brands', 
        target: 'growth-advisory' 
      }
    ]
  }
]

const selectedService = ref(
  servicesList.find(s => s.route === route.path) || servicesList[0]
)

watch(() => route.path, (newPath) => {
  const match = servicesList.find(s => s.route === newPath)
  if (match) {
    selectedService.value = match
  }
})

const currentActiveIndex = computed(() => {
  const idx = servicesList.findIndex(s => s.route === selectedService.value.route)
  return idx >= 0 ? idx : 0
})

const selectService = (service) => {
  selectedService.value = service
  isDropdownOpen.value = false
  isQuestionsMinimized.value = false
}

const navigateToService = (serviceRoute) => {
  isDropdownOpen.value = false
  if (route.path !== serviceRoute) {
    router.push(serviceRoute)
  }
}

const handleQuestionClick = (targetId) => {
  if (route.path !== selectedService.value.route) {
    router.push(`${selectedService.value.route}#${targetId}`)
    return
  }

  if (!import.meta.client) return
  const element = document.getElementById(targetId)
  if (!element) return

  const headerOffset = 96
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })

  history.pushState(null, '', `#${targetId}`)
}
</script>

<style scoped>
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spinSlow 6s linear infinite;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.2s ease-out;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>