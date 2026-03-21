<template>
  <article class="pt-12 bg-light overflow-hidden">
    <!-- SECTION 1: HERO (B2B Operational Focus) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32" v-motion-fade>
      <div class="max-w-5xl">
        <span class="text-cta font-heading font-bold tracking-widest uppercase text-sm mb-4 block">
          Full-Stack Web Developer Connecticut
        </span>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-heading leading-tight mb-8">
          Websites Engineered for <br />
          <span class="text-secondary">Revenue and Operations.</span>
        </h1>
        <p class="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl text-secondary">
          From custom front-end design to complex back-end <strong>POS and calendar integrations</strong>, 
          we build digital storefronts that automate workflows for growing Connecticut businesses.
        </p>
        <NuxtLink to="/contact" class="bg-cta hover:bg-cta-hover text-white font-heading font-bold py-5 px-10 rounded-xl shadow-soft transition-transform hover:-translate-y-1 active:scale-95 inline-block text-lg">
          Schedule a Web & Integration Audit
        </NuxtLink>
      </div>
    </section>

    <!-- SECTION 2: CORE CAPABILITIES (The Problem/Solution Split) -->
    <section class="bg-white py-24 border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Front-End Focus -->
          <div class="space-y-6" v-motion-slide-visible-left>
            <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h2 class="text-3xl font-heading font-bold text-heading">Front-End & Lead Generation</h2>
            <p class="text-body leading-relaxed">
              We don't use slow, generic templates. Our <strong>Custom Web Design New Haven</strong> services utilize 
              Vue.js and Nuxt 3 to deliver lightning-fast mobile performance (sub-3-second loads). Every pixel is 
              optimized for <strong>Local SEO Lead Generation</strong>, with strategically placed capture forms 
              designed to convert local traffic into high-intent inquiries.
            </p>
            <ul class="space-y-3 text-sm font-bold text-secondary uppercase tracking-tight">
              <li>✓ Core Web Vitals Optimization</li>
              <li>✓ Conversion Rate Optimized (CRO) Layouts</li>
              <li>✓ Technical SEO Architecture</li>
            </ul>
          </div>

          <!-- Back-End Focus -->
          <div class="space-y-6" v-motion-slide-visible-right>
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h2a2 2 0 012 2v1zm-1 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8a2 2 0 012-2h5z"/></svg>
            </div>
            <h2 class="text-3xl font-heading font-bold text-heading">Back-End & Custom Integrations</h2>
            <p class="text-body leading-relaxed">
              A website should be a tool, not just an ornament. We specialize in complex <strong>API connections</strong> 
              that sync your site with your actual operations. Whether it's connecting <strong>Square or Stripe POS</strong>, 
              automating <strong>Calendly booking</strong>, or syncing inventory with a custom database, we eliminate 
              manual data entry for your team.
            </p>
            <ul class="space-y-3 text-sm font-bold text-secondary uppercase tracking-tight">
              <li>✓ Secure Square/Stripe POS Sync</li>
              <li>✓ Automated Booking & SMS Reminders</li>
              <li>✓ Custom API & Database Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: INDUSTRY USE CASES (Validation) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-heading font-bold text-heading mb-4">Engineered for Your Industry</h2>
        <p class="text-secondary max-w-2xl mx-auto">Specific solutions for Connecticut businesses that need more than just a "pretty site."</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Service Businesses -->
        <div class="p-8 bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100" v-motion-slide-visible-bottom>
          <h3 class="text-xl font-bold text-primary mb-4">Service & Trades</h3>
          <p class="text-body text-sm leading-relaxed mb-6">For cleaning companies and tradesmen, we implement automated quoting calculators and intelligent lead routing based on service area.</p>
          <span class="text-xs font-extrabold uppercase text-secondary tracking-widest">Efficiency Focused</span>
        </div>

        <!-- Appointment-Based -->
        <div class="p-8 bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100" v-motion-slide-visible-bottom>
          <h3 class="text-xl font-bold text-primary mb-4">Salons & Wellness</h3>
          <p class="text-body text-sm leading-relaxed mb-6">Seamlessly integrate your booking calendar with your website to allow 24/7 scheduling with automated SMS and email reminders.</p>
          <span class="text-xs font-extrabold uppercase text-secondary tracking-widest">Zero-Friction Booking</span>
        </div>

        <!-- Hospitality & Retail -->
        <div class="p-8 bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100" v-motion-slide-visible-bottom>
          <h3 class="text-xl font-bold text-primary mb-4">Hospitality & Retail</h3>
          <p class="text-body text-sm leading-relaxed mb-6">Secure POS connections for restaurants and shops, supporting online ordering, real-time inventory syncing, and customer loyalty tracking.</p>
          <span class="text-xs font-extrabold uppercase text-secondary tracking-widest">Transaction Ready</span>
        </div>
      </div>
    </section>

    <!-- SECTION 4: BILINGUAL ADVANTAGE (The Bridge) -->
    <section class="bg-bg-dark py-16 overflow-hidden relative">
      <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(var(--color-secondary) 1px, transparent 1px); background-size: 40px 40px;"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-heading font-bold text-white mb-6 italic">The Bilingual Onboarding Advantage</h2>
          <p class="text-slate-300 text-lg leading-relaxed">
            We don't just hand over a set of keys and disappear. Because your team might be diverse, we provide 
            fully <strong>bilingual (English/Español) training</strong> on all new back-end systems. We ensure 
            every staff member is confident managing the new POS and booking tools we build.
          </p>
        </div>
        <div class="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
          <span class="block text-secondary font-bold text-sm uppercase mb-2">Alex Martinez</span>
          <span class="block text-white text-xs tracking-widest opacity-60">Lead Technical Consultant</span>
        </div>
      </div>
    </section>

    <!-- SECTION 5: FAQs (SEO Accordion) -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h2 class="text-3xl font-heading font-bold text-heading text-center mb-12">Website & Integration FAQs</h2>
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
          <button @click="faq.open = !faq.open" class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
            <span class="font-bold text-heading">{{ faq.question }}</span>
            <svg class="w-5 h-5 transition-transform" :class="faq.open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div v-show="faq.open" class="p-6 bg-bg-light text-body text-sm leading-relaxed border-t border-gray-100">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: FINAL CLOSE -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
      <div class="bg-primary rounded-3xl p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-heading font-bold text-white mb-8">Stop Losing Leads to Outdated Tech.</h2>
          <p class="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Let’s build a unified digital platform that manages your customers, takes your payments, 
            and automates your schedule.
          </p>
          <NuxtLink to="/contact" class="bg-cta hover:bg-cta-hover text-white font-heading font-bold py-5 px-12 rounded-xl text-xl inline-block shadow-lg transition-transform hover:-translate-y-1 active:scale-95">
            Book a Technical Discovery Call
          </NuxtLink>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: "Can you integrate my existing Square or Clover POS with a new website?",
    answer: "Yes. We specialize in POS Website Integration in CT. We use official API connections to ensure your online sales, inventory, and customer data sync perfectly with your physical hardware, preventing double-bookings or out-of-stock orders.",
    open: false
  },
  {
    question: "How long does a full-stack website build take?",
    answer: "A standard operational website with integrations typically takes 4 to 8 weeks. This includes the custom Vue.js front-end build, back-end API configurations, and a rigorous mobile-performance testing phase.",
    open: false
  },
  {
    question: "Will my site be easy to find in local New Haven search results?",
    answer: "Absolutely. Every build includes foundational Technical SEO. We optimize your local schema, load speeds, and content structure to ensure you rank for terms like 'Custom Web Design New Haven' and other high-intent local queries.",
    open: false
  },
  {
    question: "Is training included for my staff?",
    answer: "Yes. We provide 1-on-1 or group training sessions in English and Spanish. We make sure you and your team know exactly how to manage orders, update the menu, or view lead reports without needing to call us for every small change.",
    open: false
  }
])

// JSON-LD for SEO FAQ Rich Snippets
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
  title: 'Custom Web Design New Haven | POS & Website Integration CT',
  meta: [
    { name: 'description', content: 'Premium Full-Stack Web Developer in Connecticut. We build revenue-focused websites with Square/Stripe POS and calendar integrations. Bilingual support included.' }
  ],
  script: [
    { type: 'application/ld+json', children: JSON.stringify(faqSchema) }
  ]
})
</script>

<style scoped>
.shadow-hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>