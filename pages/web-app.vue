<template>
  <article class="pt-12 bg-bg-light overflow-hidden">
    <!-- SECTION 1: HERO (High-Intent B2B Hook) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
      <div v-motion-fade class="space-y-6">
        <span class="text-cta font-heading font-bold tracking-widest uppercase text-sm px-4 py-2 bg-cta/5 rounded-full border border-cta/10 inline-block">
          Enterprise Vue.js Developer & AI Specialist
        </span>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-text-heading leading-tight tracking-tight">
          Custom Web Apps & AI <br class="hidden md:block" />
          <span class="text-secondary italic">Automation That Scale.</span>
        </h1>
        <p class="max-w-3xl mx-auto text-lg md:text-xl text-text-secondary leading-relaxed">
          Stop settling for bloated, off-the-shelf templates. We build high-performance Nuxt 3 applications, 
          automate manual workflows with AI, and dominate search results with <strong>B2B SEO Expert CT</strong> strategies.
        </p>
        <div class="pt-8">
          <NuxtLink to="/contact" class="bg-cta hover:bg-cta-hover text-white font-heading font-bold py-5 px-10 rounded-xl shadow-soft transform transition hover:-translate-y-1 active:scale-95 inline-block text-lg">
            Book a Technical Strategy Call
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- SECTION 2: THE PROBLEM (Attacking Bloated Builders) -->
    <section class="bg-white py-20 border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl md:text-3xl font-heading font-bold text-text-heading mb-8">
          Why "Standard" Websites Fail Growing Businesses
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div class="space-y-4">
            <div class="text-error font-bold text-xl flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="3"/></svg>
              Slow & Bloated
            </div>
            <p class="text-text-body text-sm leading-relaxed">Most local agencies use WordPress or Wix templates that load hundreds of unnecessary scripts, killing your SEO and user experience.</p>
          </div>
          <div class="space-y-4 border-x border-gray-100 px-0 md:px-8">
            <div class="text-error font-bold text-xl flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="3"/></svg>
              Manual Bottlenecks
            </div>
            <p class="text-text-body text-sm leading-relaxed">If your team is still copy-pasting data across spreadsheets, your website isn't working for you. You're working for your website.</p>
          </div>
          <div class="space-y-4">
            <div class="text-error font-bold text-xl flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="3"/></svg>
              Zero Lead Intelligence
            </div>
            <p class="text-text-body text-sm leading-relaxed">A brochure site is a static expense. A Casatech App is a lead-generation engine powered by Technical SEO and high-intent CRO.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: SERVICE PILLARS (The 3-Column Grid) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1: Apps -->
        <div class="p-10 bg-white rounded-2xl shadow-soft border-t-4 border-secondary flex flex-col justify-between h-full" v-motion-slide-visible-bottom>
          <div>
            <div class="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-8 text-secondary">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-text-heading mb-4">High-Performance Web & Mobile Apps</h3>
            <p class="text-text-body text-sm leading-relaxed mb-6">
              Using <strong>Vue.js and Nuxt 3</strong>, we build ultra-fast client portals, internal dashboards, 
              and custom SaaS products. Expect zero latency, offline support, and seamless mobile responsiveness.
            </p>
          </div>
          <ul class="space-y-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
            <li>✓ Custom Client Portals</li>
            <li>✓ Enterprise Dashboards</li>
            <li>✓ Real-time Data Sync</li>
          </ul>
        </div>

        <!-- Card 2: AI Automation -->
        <div class="p-10 bg-white rounded-2xl shadow-soft border-t-4 border-cta flex flex-col justify-between h-full" v-motion-slide-visible-bottom>
          <div>
            <div class="w-14 h-14 bg-cta/10 rounded-xl flex items-center justify-center mb-8 text-cta">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-text-heading mb-4">AI & Workflow Automation Services</h3>
            <p class="text-text-body text-sm leading-relaxed mb-6">
              Eliminate manual data entry with <strong>AI Workflow Automation</strong>. We build custom Python scripts 
              and LLM-powered chatbots that handle customer inquiries and backend processing 24/7.
            </p>
          </div>
          <ul class="space-y-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
            <li>✓ LLM & Chatbot Integration</li>
            <li>✓ Python Data Scraping</li>
            <li>✓ Manual Task Elimination</li>
          </ul>
        </div>

        <!-- Card 3: SEO -->
        <div class="p-10 bg-white rounded-2xl shadow-soft border-t-4 border-primary flex flex-col justify-between h-full" v-motion-slide-visible-bottom>
          <div>
            <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 text-primary">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
            <h3 class="text-2xl font-heading font-bold text-text-heading mb-4">Search Visibility & Demand Gen</h3>
            <p class="text-text-body text-sm leading-relaxed mb-6">
              Being a <strong>B2B SEO Expert in CT</strong> means more than keywords. We optimize your technical 
              architecture for Google, manage high-ROI Ads, and implement conversion science (CRO) to turn visitors into leads.
            </p>
          </div>
          <ul class="space-y-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
            <li>✓ Technical SEO Audits</li>
            <li>✓ High-Intent Google Ads</li>
            <li>✓ Landing Page Optimization</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 4: TECH STACK & METHODOLOGY (The Portfolio Replacement) -->
    <section class="bg-gray-50 py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div v-motion-slide-visible-left>
            <h2 class="text-4xl font-heading font-bold text-text-heading mb-6">Enterprise-Grade Architecture <br /> for Local Businesses.</h2>
            <p class="text-text-body mb-6 leading-relaxed">
              We don't rely on fragile plugins or third-party builders. We custom-engineer your solution using the same 
              tech stack favored by global leaders like <strong>TikTok, OpenAI, and Google.</strong>
            </p>
            <p class="text-text-body leading-relaxed mb-8">
              By utilizing a server-side rendered (SSR) framework like Nuxt 3, we guarantee the fastest possible load times—which 
              is a primary ranking factor for local B2B SEO.
            </p>
            <!-- TECH STACK LABELS -->
            <div class="flex flex-wrap gap-3">
              <span v-for="tech in ['Vue.js', 'Nuxt 3', 'Node.js', 'Python', 'AWS', 'Tailwind CSS']" :key="tech" class="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-text-secondary shadow-sm">
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="relative" v-motion-slide-visible-right>
            <div class="bg-bg-dark rounded-2xl p-8 text-white shadow-2xl font-mono text-sm">
              <div class="flex space-x-2 mb-4">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <p class="text-secondary">// Deploying Custom Web App New Haven</p>
              <p class="text-green-400">const casatech = await initProject({</p>
              <p class="pl-4">framework: "Nuxt 3 / Vue.js",</p>
              <p class="pl-4">optimization: "Technical SEO",</p>
              <p class="pl-4">security: "Enterprise-Grade",</p>
              <p class="pl-4">scaling: "Infinite (AWS Lambda)"</p>
              <p class="">});</p>
              <p class="text-green-400 mt-4">casatech.status(); // "Growth Accelerated"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: BILINGUAL ADVANTAGE -->
    <section class="bg-bg-dark py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white gap-8">
        <div class="max-w-xl">
          <h2 class="text-3xl font-heading font-bold mb-4 italic">The Bilingual Advantage</h2>
          <p class="text-slate-300">All software training, UI translation, and ongoing support are fully bilingual (English/Español), led by a senior consultant with 8+ years of enterprise experience.</p>
        </div>
        <NuxtLink to="/contact" class="px-8 py-4 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary hover:text-white transition-all">
          Schedule Your Bilingual Audit
        </NuxtLink>
      </div>
    </section>

    <!-- SECTION 6: FAQ SECTION -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h2 class="text-3xl font-heading font-bold text-text-heading text-center mb-12">Common Technical Questions</h2>
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-200 rounded-xl overflow-hidden">
          <button @click="faq.open = !faq.open" class="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors">
            <span class="font-bold text-text-heading">{{ faq.question }}</span>
            <svg class="w-5 h-5 transition-transform" :class="faq.open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div v-show="faq.open" class="p-6 bg-bg-light text-text-body text-sm leading-relaxed border-t border-gray-100">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7: FINAL CLOSE -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
      <div class="bg-primary rounded-3xl p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
        
        <div class="absolute inset-0 opacity-10 pointer-events-none" 
             style="background-image: radial-gradient(var(--color-secondary) 1px, transparent 1px); background-size: 30px 30px;">
        </div>

        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
            Ready to Automate Your Success?
          </h2>
          <p class="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Get a professional <strong>Technical Audit</strong> to see how AI and custom web applications can 
            cut your overhead and increase your B2B demand gen.
          </p>
          <NuxtLink to="/contact" class="bg-cta hover:bg-cta-hover text-white font-heading font-bold py-5 px-12 rounded-xl text-xl inline-block shadow-lg transition-transform hover:-translate-y-1 active:scale-95">
            Book a Free Strategy Session
          </NuxtLink>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// FAQ State
const faqs = ref([
  {
    question: "How long does a custom web application take to build?",
    answer: "Most custom B2B applications and AI integrations take between 6 to 12 weeks for the initial launch. We utilize an agile Nuxt 3 methodology to deploy a Minimum Viable Product (MVP) early, allowing you to start seeing ROI while we refine advanced features.",
    open: false
  },
  {
    question: "Is AI integration safe for my company's sensitive data?",
    answer: "Absolutely. Security is our priority. We use secure API layers and private LLM instances (where necessary) to ensure your proprietary business data is never used to train public models. All AI workflow automation services are built on encrypted, enterprise-grade architecture.",
    open: false
  },
  {
    question: "Do you provide training for my team in Spanish?",
    answer: "Yes. Being a first-generation Mexican-American and an Enterprise Vue.js Developer, Alex Martinez provides all documentation, user interface translations, and live team training in both English and Español.",
    open: false
  },
  {
    question: "Will a custom web app improve my local SEO in Connecticut?",
    answer: "Yes. Unlike template builders, our Nuxt 3 applications are server-side rendered (SSR), providing Google with crystal-clear HTML to index. Combined with our technical SEO expertise, this significantly boosts your rankings for high-intent keywords in the New Haven and CT market.",
    open: false
  }
])

// JSON-LD FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.value.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

useHead({
  title: 'Custom Web App Development New Haven | AI Workflow Automation',
  meta: [
    { name: 'description', content: 'Enterprise Vue.js Developer in CT. Build high-performance custom web applications, AI chatbots, and B2B lead engines. Fully bilingual (English/Español) support.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(faqSchema)
    }
  ]
})
</script>

<style scoped>
/* Fluid typography and custom shadowing as per brand variables */
.shadow-soft {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}
.text-text-heading { color: var(--color-text-heading); }
.text-text-body { color: var(--color-text-body); }
</style>