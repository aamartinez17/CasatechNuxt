<!-- components/services/qa/GrowthSearchAdvisory.vue -->
<template>
  <div class="space-y-12 lg:space-y-16 w-full">
    
    <!-- Question 01: The Search Trifecta (SEO vs AEO vs GEO) -->
    <article 
      id="search-trifecta" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        01 // Modern Search Visibility
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        What is the difference between SEO, AEO, and GEO, and how do you get cited by AI engines?
      </h2>

      <!-- Widescreen 2-Column Split: Direct Answer + Strategic Breakdown -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 mb-8 items-stretch">
        <div class="lg:col-span-7 p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm flex flex-col justify-center">
          <span class="text-xs font-mono uppercase text-secondary font-bold tracking-wider mb-2">Direct Answer</span>
          <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
            <strong>Direct Answer:</strong> SEO (Search Engine Optimization) ranks pages as clickable blue links. AEO (Answer Engine Optimization) structures concise 40–60 word facts to win direct answer boxes. GEO (Generative Engine Optimization) embeds semantic JSON-LD entity data so LLMs (like ChatGPT, Perplexity, and Google AI Overviews) synthesize and cite your brand as an authoritative recommendation during zero-click searches.
          </p>
        </div>

        <div class="lg:col-span-5 p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-center space-y-3">
          <h3 class="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">Winning Zero-Click Searches</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Over 60% of search queries now end without a traditional link click. When users query AI models for vendor recommendations, generative engines only cite websites with verified entity schemas, authoritative question formatting, and sub-second crawler accessibility.
          </p>
        </div>
      </div>

      <!-- Comparison Matrix: SEO vs AEO vs GEO -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/40">
        <table class="min-w-full text-left text-xs sm:text-sm">
          <thead class="bg-slate-900 text-white font-mono uppercase text-[11px] sm:text-xs">
            <tr>
              <th class="p-4 sm:p-5">Strategy Dimension</th>
              <th class="p-4 sm:p-5">Traditional SEO</th>
              <th class="p-4 sm:p-5">Answer Engine Optimization (AEO)</th>
              <th class="p-4 sm:p-5 text-secondary">Generative Engine Optimization (GEO)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200/80 font-sans">
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Primary Objective</td>
              <td class="p-4 sm:p-5 text-slate-600">Rank on Page 1 as a traditional clickable link</td>
              <td class="p-4 sm:p-5 text-slate-600">Win Featured Snippets and voice search answers</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Earn cited recommendations in AI-synthesized responses</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Content Formatting</td>
              <td class="p-4 sm:p-5 text-slate-600">Keyword-dense longform articles and backlink counts</td>
              <td class="p-4 sm:p-5 text-slate-600">Strict Q&amp;A headers with 40–60 word declarative summaries</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Machine-readable JSON-LD entities, tables, and comparison matrices</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Target Platforms</td>
              <td class="p-4 sm:p-5 text-slate-600">Google Desktop/Mobile Link Indexes, Bing</td>
              <td class="p-4 sm:p-5 text-slate-600">Google AI Overviews, Apple Siri, Google Assistant</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">ChatGPT Search, Perplexity Pro, Claude, Google Gemini</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Core Conversion Value</td>
              <td class="p-4 sm:p-5 text-slate-600">High-volume, mixed-intent top-of-funnel traffic</td>
              <td class="p-4 sm:p-5 text-slate-600">Instant brand authority for direct question queries</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">High-intent buyer trust; clients receive your brand as the answer</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>

    <!-- Question 02: Architectural Tech Audits & Code Refactoring -->
    <article 
      id="tech-audits" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-slate-50/80 text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        02 // Code-Level Discovery
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How does a deep-code architectural audit uncover hidden revenue loss compared to a marketing audit?
      </h2>

      <div class="p-6 rounded-2xl bg-white border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> While surface marketing audits only check metadata tags and keyword counts, our architectural tech audits inspect actual runtime performance: JavaScript execution bottlenecks, unoptimized database queries, render-blocking CSS, and Cumulative Layout Shift (CLS). Fixing technical debt directly improves conversion rates—often boosting checkout completions by 15% to 30% simply by eliminating sluggish user input delays (INP).
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold text-xs font-mono mb-3">01</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Main-Thread Optimization</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We audit third-party tracker bloat and legacy polyfills, freeing browser CPU threads so taps and form inputs respond in under 50 milliseconds.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs font-mono mb-3">02</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Decoupled Modernization</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Replace slow monolithic frontends with a modern Nuxt/Vue interface connecting to your existing backend database via clean APIs without total rewrites.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs font-mono mb-3">03</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Crawler Budget Recovery</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Fast server response times and pre-rendered HTML ensure Google and AI scrapers index your deepest product pages instead of timing out.
            </p>
          </div>
        </div>
      </div>
    </article>

    <!-- Question 03: Bilingual Localization (English & Spanish) -->
    <article 
      id="bilingual-routing" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        03 // Market Expansion
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        Why do native subpaths and hreflang tags outperform automated translation widgets?
      </h2>

      <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> Automated browser translation plugins (like Google Translate widgets) render dynamic JavaScript that search engines cannot index, while introducing confusing literal phrasing that destroys buyer trust. Native bilingual architectures utilize dedicated URL subpaths (e.g., <code>/es/</code>) with reciprocal <code>hreflang</code> tags. This indexes both language variations cleanly without duplicate-content penalties, capturing rapidly growing Hispanic and international commercial search demand.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm mb-3">✓</div>
          <h3 class="font-bold text-slate-900 text-base mb-2">Contextual Localization vs Machine Words</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Technical terminology, legal contracts, and industry jargon vary significantly across regions. We engineer localized CMS models and database fields that respect nuance, idioms, and local currencies.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm mb-3">✓</div>
          <h3 class="font-bold text-slate-900 text-base mb-2">Localized Metadata & OpenGraph Hydration</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every translated route renders native language page titles, descriptions, and OpenGraph social preview images, maximizing click-through rates across multicultural advertising and social shares.
          </p>
        </div>
      </div>
    </article>

    <!-- Question 04: Core Web Vitals & JSON-LD Structured Data -->
    <article 
      id="schema-and-vitals" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-slate-50/80 text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        04 // Structured Verification
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        Which Schema.org entity types are most critical for proving authority to AI answer engines?
      </h2>

      <div class="p-6 rounded-2xl bg-white border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> Generative AI engines do not rely on guesses; they seek verified relational entities. Implementing nested JSON-LD structured data for <code>Organization</code>, <code>Service</code>, <code>FAQPage</code>, and <code>BreadcrumbList</code> provides unambiguous entity connections. When combined with green Core Web Vitals (sub-second LCP, 0.00 CLS, and &lt;200ms INP), search algorithms award your brand priority ranking and citation authority.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-900 text-base mb-2">Nested Entity Mapping</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We map services directly to physical operational regions, certifications, verified founders, and review catalogs, giving LLMs verified grounding to cite your company in conversational recommendations.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-900 text-base mb-2">Ranking Tie-Breaker Telemetry</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Google explicitly treats Core Web Vitals as a search ranking tie-breaker between competing services. Passing audits provides a durable moat against slower, template-based local rivals.
          </p>
        </div>
      </div>
    </article>

    <!-- Question 05: Practical Advisory & Long-Term Roadmap -->
    <article 
      id="growth-advisory" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        05 // Strategic Roadmap
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How Casatech LLC provides fractional CTO advisory and search optimization for growing brands
      </h2>

      <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> We don't just write code; we provide technical advisory that aligns software architecture with customer acquisition goals. Our advisory guides companies through build-versus-buy software choices, technical vendor audits, multi-region search optimization, and engineering roadmaps designed to eliminate technical debt while compounding organic customer acquisition.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-xs">
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-secondary font-bold uppercase block mb-1">Modern Search</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">GEO & AEO Strategy</h4>
          <p class="text-slate-600 leading-relaxed">Continuous tuning of content architecture to maintain high citation frequency in Perplexity and ChatGPT.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-sky-600 font-bold uppercase block mb-1">Auditing</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Performance Profiling</h4>
          <p class="text-slate-600 leading-relaxed">Regular code-level audits that ensure third-party additions never degrade Core Web Vitals thresholds.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-emerald-600 font-bold uppercase block mb-1">Localization</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Dual-Language Scale</h4>
          <p class="text-slate-600 leading-relaxed">Bilingual expansion strategies that unlock qualified Spanish-speaking market demand cleanly.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-amber-600 font-bold uppercase block mb-1">Architecture</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Fractional Leadership</h4>
          <p class="text-slate-600 leading-relaxed">Executive-level technical direction for businesses transitioning from early tools to scalable web platforms.</p>
        </div>
      </div>
    </article>

  </div>
</template>

<script setup>
// Automated FAQPage schema registration for AEO & GEO discovery
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://casatechllc.com/services/growth-search-advisory#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is the difference between SEO, AEO, and GEO, and how do you get cited by AI engines?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'SEO ranks pages as clickable links. AEO structures concise 40–60 word facts to win direct answer boxes. GEO embeds semantic JSON-LD entity data so LLMs (like ChatGPT, Perplexity, and Google AI Overviews) synthesize and cite your brand as an authoritative recommendation during zero-click searches.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How does a deep-code architectural audit uncover hidden revenue loss compared to a marketing audit?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'While surface marketing audits check metadata tags and keywords, architectural tech audits inspect actual runtime performance: JavaScript execution bottlenecks, unoptimized queries, and Cumulative Layout Shift (CLS). Fixing technical debt directly improves conversion rates—often boosting checkout completions by 15% to 30% by eliminating input responsiveness delays (INP).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Why do native subpaths and hreflang tags outperform automated translation widgets?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Automated translation plugins render dynamic scripts that search engines cannot index, while introducing confusing literal phrasing. Native bilingual architectures utilize dedicated URL subpaths (/es/) with reciprocal hreflang tags to index both language variations cleanly without duplicate-content penalties, capturing growing Hispanic and international commercial search demand.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Which Schema.org entity types are most critical for proving authority to AI answer engines?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Implementing nested JSON-LD structured data for Organization, Service, FAQPage, and BreadcrumbList provides unambiguous entity connections. When combined with green Core Web Vitals (sub-second LCP, 0.00 CLS, and <200ms INP), search algorithms award your brand priority ranking and citation authority.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How Casatech LLC provides fractional CTO advisory and search optimization for growing brands',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We provide technical advisory that aligns software architecture with customer acquisition goals: build-versus-buy software choices, technical vendor audits, multi-region search optimization, and engineering roadmaps designed to eliminate technical debt while compounding organic customer acquisition.'
            }
          }
        ]
      })
    }
  ]
})
</script>