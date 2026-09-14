<!-- pages/services/growth-search-advisory.vue -->
<template>
  <div class="min-h-screen selection:bg-secondary/20 selection:text-slate-900 font-sans antialiased bg-[#fafaf9]">
    
    <!-- Hero Header (Dark, Centered Container) -->
    <header class="relative bg-[#09111e] text-slate-100 pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden border-b border-slate-800">
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div class="max-w-4xl mx-auto lg:mx-0">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Growth, Search Visibility & <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-sky-300 to-slate-200">
              Technical Advisory.
            </span>
          </h1>

          <div class="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <p class="text-base sm:text-lg text-slate-200 leading-relaxed">
              Casatech LLC prepares your business for modern search discovery across Google, Perplexity, and ChatGPT. We engineer full-spectrum SEO, AEO, and GEO architectures, perform code-level architectural tech audits, and build bilingual (English & Spanish) web platforms that unlock untapped commercial search demand.
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
            <div>
              <span class="block text-slate-400 uppercase font-mono mb-1">Search Strategy</span>
              <span class="text-white font-semibold text-sm">SEO + AEO + GEO</span>
            </div>
            <div>
              <span class="block text-slate-400 uppercase font-mono mb-1">Localization</span>
              <span class="text-secondary font-semibold text-sm">English & Spanish Native</span>
            </div>
            <div>
              <span class="block text-slate-400 uppercase font-mono mb-1">Code Audits</span>
              <span class="text-emerald-400 font-semibold text-sm">Runtime Tech Debt</span>
            </div>
            <div>
              <span class="block text-slate-400 uppercase font-mono mb-1">Data Schemas</span>
              <span class="text-white font-semibold text-sm">Schema.org JSON-LD</span>
            </div>
          </div>
        </div>
      </div>
    </header>

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
            <ServicesQaGrowthSearchAdvisory />

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
          <span class="text-xs font-mono uppercase tracking-widest text-secondary block">Capture Modern Discovery</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Ready to Outrank Competitors in Google & AI Search?
          </h2>
          <p class="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop losing qualified buyers to AI summaries. Schedule an architectural tech audit and organic discovery discovery session with Casatech LLC today.
          </p>

          <div class="pt-4">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 bg-cta hover:bg-cta/90 active:scale-95 text-white font-heading font-bold text-sm py-4 px-8 rounded-xl shadow-lg transition-all"
            >
              <span>Schedule a Search Strategy Consultation</span>
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

const smoothScrollTo = (targetId) => {
  if (!import.meta.client) return
  const element = document.getElementById(targetId)
  if (!element) return

  const headerOffset = 140
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
  title: 'Search Optimization, AEO/GEO & Technical Advisory | Casatech LLC',
  meta: [
    {
      name: 'description',
      content: 'Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), deep-code architectural tech audits, and native bilingual web development by Casatech LLC.'
    },
    {
      name: 'keywords',
      content: 'Generative Engine Optimization, GEO, AEO, Answer Engine Optimization, AI Search Visibility, Architectural Tech Audit, Bilingual Web Development, Hreflang SEO, Core Web Vitals'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': 'https://casatechllc.com/services/growth-search-advisory#service',
        'name': 'Growth, Search Visibility & Technical Advisory',
        'provider': {
          '@type': 'Organization',
          'name': 'Casatech LLC',
          'url': 'https://casatechllc.com'
        },
        'description': 'Full-spectrum SEO, AEO, and GEO search architectures, architectural code audits, and native bilingual web localization.',
        'serviceType': 'Search Engine & Technical Advisory',
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