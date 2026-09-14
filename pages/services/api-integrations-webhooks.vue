<!-- pages/services/api-integrations-webhooks.vue -->
<template>
  <div class="min-h-screen selection:bg-secondary/20 selection:text-slate-900 font-sans antialiased bg-[#fafaf9]">
    
    <!-- Hero Header (Dark, Centered Container) -->
    <header class="relative bg-[#09111e] text-slate-100 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-800">
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div class="max-w-4xl mx-auto lg:mx-0">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Integrations, APIs & <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-sky-300 to-slate-200">
              Resilient Cloud Automations.
            </span>
          </h1>

          <div class="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <p class="text-base sm:text-lg text-slate-200 leading-relaxed">
              Casatech LLC connects your core software with Stripe payment flows, external feeds, multimodal AI models, and CRM systems. We engineer resilient webhook queues, server-side credential proxies, and automated failure recovery to ensure zero transaction loss and uninterrupted business continuity.
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
            <div>
              <span class="block text-slate-400 uppercase font-mono mb-1">Payments</span>
              <span class="text-white font-semibold text-sm">PCI-DSS Compliant</span>
            </div>
            <div>
              <span class="block text-slate-400 uppercase font-mono mb-1">Webhooks</span>
              <span class="text-secondary font-semibold text-sm">Retry & DLQ Queues</span>
            </div>
            <div>
              <span class="block text-slate-400 uppercase font-mono mb-1">Security</span>
              <span class="text-emerald-400 font-semibold text-sm">Server-Side Proxies</span>
            </div>
            <div>
              <span class="block text-slate-400 uppercase font-mono mb-1">Uptime</span>
              <span class="text-white font-semibold text-sm">Circuit Breaker Active</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- NEW: Types of APIs Ecosystem Section (Light Theme) -->
    <section id="supported-apis" class="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div class="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <div class="max-w-3xl mb-12">
          <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
            Integration Capabilities
          </span>
          <h2 class="text-3xl sm:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-4">
            Types of APIs & External Services We Connect
          </h2>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether connecting mission-critical payment processors, real-time logistics feeds, or proprietary enterprise databases, we engineer resilient pipelines with automated rate-limiting, error retries, and credential encryption.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          
          <!-- Category 1: Payment & Billing -->
          <div class="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold mb-4 font-mono text-sm">
                <font-awesome-icon icon="credit-card" />
              </div>
              <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">Payment & Billing Gateways</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Secure tokenized checkout sessions, automated subscription renewals, proration handlers, and instant PDF invoice generation.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-200">
              <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">Common Providers</span>
              <div class="flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Stripe</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">PayPal</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Authorize.net</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Square</span>
              </div>
            </div>
          </div>

          <!-- Category 2: Multimodal AI & Machine Learning -->
          <div class="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold mb-4 font-mono text-sm">
                <font-awesome-icon icon="wand-magic-sparkles" />
              </div>
              <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">AI Models & Vision Engines</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Direct integration of multimodal vision, speech recognition, and generative text models with streaming real-time responses.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-200">
              <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">Common Providers</span>
              <div class="flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Google Gemini</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">OpenAI</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Anthropic Claude</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">HuggingFace</span>
              </div>
            </div>
          </div>

          <!-- Category 3: Maps, Geolocation & Solar Data -->
          <div class="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold mb-4 font-mono text-sm">
                <font-awesome-icon icon="globe" />
              </div>
              <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">Mapping, Transit & Geospatial</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Address autocomplete, radius calculations, carrier tracking feeds, and solar roof contour analysis with aggressive edge caching.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-200">
              <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">Common Providers</span>
              <div class="flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Google Maps Platform</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Mapbox</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">FedEx / UPS</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">EasyPost</span>
              </div>
            </div>
          </div>

          <!-- Category 4: Enterprise CRMs, ERPs & Accounting -->
          <div class="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold mb-4 font-mono text-sm">
                <font-awesome-icon icon="server" />
              </div>
              <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">CRMs, ERPs & Accounting</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Two-way data synchronizations that eliminate duplicate data entry between internal web portals and your financial software.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-200">
              <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">Common Providers</span>
              <div class="flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">QuickBooks Online</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">HubSpot</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Salesforce</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Zoho</span>
              </div>
            </div>
          </div>

          <!-- Category 5: Communications, SMS & Transactional Email -->
          <div class="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold mb-4 font-mono text-sm">
                <font-awesome-icon icon="phone" />
              </div>
              <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">SMS, Email & Alerting</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Automated customer order alerts, two-factor authentication codes (MFA), dispatch notifications, and transactional receipts.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-200">
              <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">Common Providers</span>
              <div class="flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Twilio</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">SendGrid</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Postmark</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">Resend</span>
              </div>
            </div>
          </div>

          <!-- Category 6: Event Webhooks & Custom Internal Systems -->
          <div class="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all flex flex-col justify-between">
            <div>
              <div class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-bold mb-4 font-mono text-sm">
                <font-awesome-icon icon="network-wired" />
              </div>
              <h3 class="text-lg font-heading font-bold text-slate-900 mb-2">Custom Webhooks & REST/GraphQL</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Bespoke event consumers with dead-letter queue (DLQ) protections that connect legacy SQL servers and private on-premise systems.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-200">
              <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">Supported Protocols</span>
              <div class="flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">RESTful JSON</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">GraphQL</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">WebSockets</span>
                <span class="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700">HMAC Webhooks</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Table of Contents (Dark, Centered) -->
    <section class="bg-slate-900 border-b border-slate-800 py-10 lg:py-12 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto lg:mx-0">
          <span class="text-xs font-mono uppercase tracking-widest text-secondary block mb-2">
            Table of Contents
          </span>
          <h2 class="text-xl sm:text-2xl font-heading font-bold text-white mb-6">
            On This Page: Questions & Answers
          </h2>

          <div class="space-y-3">
            <button
              v-for="(item, idx) in pageQuestions"
              :key="item.target"
              type="button"
              @click="smoothScrollTo(item.target)"
              class="w-full text-left flex items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-secondary/50 hover:bg-slate-800/60 transition-all duration-200 group text-slate-300 hover:text-white cursor-pointer"
            >
              <div class="flex items-start sm:items-center gap-3">
                <span class="w-6 h-6 rounded-md bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 font-bold">
                  0{{ idx + 1 }}
                </span>
                <span class="text-sm font-medium leading-snug">
                  {{ item.fullQuestion }}
                </span>
              </div>
              <font-awesome-icon 
                icon="arrow-down" 
                class="text-xs text-slate-500 group-hover:text-secondary group-hover:translate-y-0.5 transition-all shrink-0 mt-1 sm:mt-0" 
              />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Q&A Section with Working Sticky Nav -->
    <div class="relative bg-[#fafaf9] py-16 lg:py-24 border-b border-slate-200">
      <div class="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          <!-- Primary Q&A Column: 8 cols on XL, 9 cols on 2XL -->
          <main class="xl:col-span-8 2xl:col-span-9 w-full">
            <ServicesQaApiIntegrations />

            <!-- Static Bottom Explorer for Mobile/Tablet (< xl) -->
            <div class="xl:hidden mt-12 pt-8 border-t border-slate-200">
              <span class="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-3 text-center">
                Explore Additional Services
              </span>
              <ServicesStickyNav />
            </div>
          </main>

          <!-- Sticky Sidebar for Desktop (>= xl) -->
          <aside class="hidden xl:block xl:col-span-4 2xl:col-span-3 sticky top-32 self-start z-30">
            <ServicesStickyNav />
          </aside>

        </div>
      </div>
    </div>

    <!-- Bottom Consultation CTA -->
    <section class="py-20 bg-[#09111e] text-slate-100 text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-8 sm:p-14 rounded-3xl bg-slate-900/90 border border-white/15 shadow-2xl space-y-6">
          <span class="text-xs font-mono uppercase tracking-widest text-secondary block">Automate Your Data Pipelines</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Ready to Build Rock-Solid API Integrations?
          </h2>
          <p class="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate dropped webhook events, secure your payment infrastructure, and stop API outages from disrupting customer workflows. Speak with our lead integration architects today.
          </p>

          <div class="pt-4">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 bg-cta hover:bg-cta/90 active:scale-95 text-white font-heading font-bold text-sm py-4 px-8 rounded-xl shadow-lg transition-all"
            >
              <span>Schedule an Integration Consultation</span>
              <font-awesome-icon icon="arrow-right" class="text-xs" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const pageQuestions = [
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

const smoothScrollTo = (targetId) => {
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

useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  },
  title: 'API Integrations, Webhooks & Cloud Automations | Casatech LLC',
  meta: [
    {
      name: 'description',
      content: 'Enterprise API integration architecture, PCI-compliant Stripe billing systems, webhook failure recovery queues, and secure serverless automations by Casatech LLC.'
    },
    {
      name: 'keywords',
      content: 'API Integrations, Stripe Webhooks, Dead Letter Queue, Serverless APIs, OAuth Token Rotation, PCI Compliance, Real Time Automations'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': 'https://casatechllc.com/services/api-integrations-webhooks#service',
        'name': 'API Integrations, Webhooks & Cloud Automations',
        'provider': {
          '@type': 'Organization',
          'name': 'Casatech LLC',
          'url': 'https://casatechllc.com'
        },
        'description': 'Resilient third-party API architecture, PCI-compliant Stripe billing, and asynchronous webhook queues engineered for zero transaction loss.',
        'serviceType': 'API & Systems Integration',
        'areaServed': 'United States'
      })
    }
  ]
})
</script>

<style>
html {
  scroll-behavior: smooth !important;
}
</style>