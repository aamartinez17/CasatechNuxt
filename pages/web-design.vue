<template>
  <article class="pt-12 bg-light overflow-hidden">
    
    <!-- SECTION 1: HERO (Bespoke Interactive Playbook) -->
    <section>
      <ServiceHero />
    </section>

    <!-- SECTION 2: CORE DESIGN CAPABILITIES -->
    <section class="py-24 border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          
          <!-- Front-End & Creative Artistry -->
          <div class="space-y-6" v-motion-slide-visible-left>
            <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-4">
              <font-awesome-icon icon="fa-solid fa-palette" class="text-xl" />
            </div>
            <h2 class="text-3xl font-heading font-bold text-secondary">Bespoke Design & UI/UX Artistry</h2>
            <p class="text-body leading-relaxed">
              We never use slow, generic templates. Our <strong>Custom Web Design New Haven</strong> solutions utilize 
              custom Nuxt 3 architectures to deliver jaw-dropping visuals with mobile loading speeds under 1.5 seconds. 
              Every layout is meticulously designed to command immediate focus, capture high-intent visual search traffic, 
              and reflect the authentic identity of your business.
            </p>
            <ul class="space-y-3 text-sm font-bold text-accent uppercase tracking-wider">
              <li>✓ Handcrafted Visual Systems & Custom UI Kits</li>
              <li>✓ Blazing Fast Core Web Vitals (99+ PageSpeed Scores)</li>
              <li>✓ Advanced Mobile-First Interaction Design</li>
            </ul>
          </div>

          <!-- Creative Front-End Engineering & Custom API Integrations -->
          <div class="space-y-6" v-motion-slide-visible-right>
            <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
              <font-awesome-icon icon="fa-solid fa-laptop-code" class="text-xl" />
            </div>
            <h2 class="text-3xl font-heading font-bold text-accent">Smart Integrations & E-Commerce</h2>
            <p class="text-body leading-relaxed">
              Your website should be an automated engine, not just a digital flyer. We specialize in building complex, 
              custom <strong>API configurations</strong> that connect your digital storefront directly to your operations. 
              Whether linking <strong>Square and Stripe payment gateways</strong>, automating <strong>calendar scheduling APIs</strong>, 
              or structuring secure custom databases, we make running your business frictionless.
            </p>
            <ul class="space-y-3 text-sm font-bold text-secondary uppercase tracking-wider">
              <li>✓ Custom Stripe, Clover, & Square Integration</li>
              <li>✓ Direct Booking Calendars with Automated Reminders</li>
              <li>✓ Headless CMS & Custom Database Architectures</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: WEBSITE STYLES FOR EVERY MODEL -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center mb-16">
        <!-- Kept the eyebrow accent border styling -->
        <span class="text-accent uppercase tracking-widest font-bold text-xs sm:text-sm bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
          Tailored Design Solutions
        </span>
        <h2 class="text-3xl md:text-5xl font-heading font-bold text-secondary mt-4 mb-4">Crafted for Your Business Goal</h2>
        <p class="text-slate-500 max-w-2xl mx-auto">We engineer specialized digital frameworks optimized to make your specific industry succeed online.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Service Businesses Card -->
        <div class="p-8 bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100" v-motion-slide-visible-bottom>
          <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
            <font-awesome-icon icon="fa-solid fa-calendar-check" />
          </div>
          <h3 class="text-xl font-bold text-primary mb-4">Appointment-Based Sites</h3>
          <p class="text-body text-sm leading-relaxed mb-6">Designed for salons, medspas, and private practices. Includes calendar booking interfaces that reduce scheduling steps and show off employee portfolios.</p>
          <span class="text-xs font-extrabold uppercase text-accent tracking-widest">Seamless Funnel</span>
        </div>

        <!-- E-Commerce Storefronts Card -->
        <div class="p-8 bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100" v-motion-slide-visible-bottom>
          <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
          </div>
          <h3 class="text-xl font-bold text-primary mb-4">E-Commerce Platforms</h3>
          <p class="text-body text-sm leading-relaxed mb-6">Fast and secure checkouts designed to make online shopping effortless. Features dynamic filters, simple carts, and smooth item displays to boost sales.</p>
          <span class="text-xs font-extrabold uppercase text-secondary tracking-widest">Transaction Ready</span>
        </div>

        <!-- High-Impact Portfolios Card -->
        <div class="p-8 bg-white rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100" v-motion-slide-visible-bottom>
          <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
            <font-awesome-icon icon="fa-solid fa-user-tie" />
          </div>
          <h3 class="text-xl font-bold text-primary mb-4">Professional Portfolios</h3>
          <p class="text-body text-sm leading-relaxed mb-6">Created for lawyers, realtors, and artists looking to show expertise. Focused on bio profiles, client reviews, video, and direct contact setups.</p>
          <span class="text-xs font-extrabold uppercase text-accent tracking-widest">Authority Builders</span>
        </div>
      </div>
    </section>

    <!-- SECTION 4: THE LAUNCH & TRAINING ADVANTAGE -->
<section class="bg-slate-950 py-24 overflow-hidden relative">
  <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(var(--color-secondary) 1px, transparent 1px); background-size: 40px 40px;"></div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
    
    <div class="max-w-2xl">
      <span class="text-accent text-xs font-bold uppercase tracking-widest">End-to-End Partnership</span>
      <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mt-2 mb-6">The Seamless Handoff Advantage</h2>
      <p class="text-slate-300 text-lg leading-relaxed">
        We don't just hand over a set of keys and disappear. Once your platform goes live, We ensure your staff is fully 
        confident managing content, reviewing analytics, and processing incoming website sales without needing a 
        developer for every small update.
      </p>
    </div>

    <!-- Right Badge: Replaced personal name with studio handoff indicator -->
    <div class="card-gradient-border p-8 backdrop-blur-sm min-w-[240px] text-center md:text-left">
      <div class="flex items-center justify-center md:justify-start gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-2">
        <font-awesome-icon icon="fa-solid fa-circle-check" class="animate-pulse" />
        Zero-Friction Handoff
      </div>
      <span class="block text-white text-xs tracking-widest uppercase opacity-60">Full Post-Launch Support</span>
    </div>

  </div>
</section>

    <!-- SECTION 5: FAQs (SEO Accordion) -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h2 class="text-3xl font-heading font-bold text-secondary text-center mb-12">Design & Integration Studio FAQs</h2>
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
          <button @click="faq.open = !faq.open" class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
            <span class="font-bold text-primary">{{ faq.question }}</span>
            <svg class="w-5 h-5 transition-transform text-secondary" :class="faq.open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div v-show="faq.open" class="p-6 bg-slate-50 text-body text-sm leading-relaxed border-t border-gray-100">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: THE CALL TO ACTION -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
      <div class="bg-primary rounded-3xl p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
        <div class="absolute -top-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-heading font-bold text-white mb-8">Stop Losing Customers to Outdated Designs.</h2>
          <p class="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Let’s build a fast, high-converting digital platform that captures attention, accepts payments, 
            and automates your calendar.
          </p>
          <NuxtLink to="/contact" class="bg-cta hover:bg-cta-hover text-white font-heading font-bold py-5 px-12 rounded-xl text-xl inline-block shadow-lg transition-transform hover:-translate-y-1 active:scale-95">
            Book a Design Consultation Call
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
    question: "Can you connect our physical payment systems directly with a custom website?",
    answer: "Absolutely. We specialize in seamless POS and payment integration. We connect your custom storefront directly to Stripe, Square, or Clover APIs to keep your sales, catalog, and bookkeeping in perfect sync across your entire business.",
    open: false
  },
  {
    question: "Do you use pre-built templates or build custom designs?",
    answer: "Every single project is designed from scratch in Figma before writing a single line of code. This ensures your site is uniquely styled, lightning-fast, and tailored specifically to capture and convert your local client base.",
    open: false
  },
  {
    question: "How long does a custom web design project take?",
    answer: "A custom web design project with advanced booking or payment integrations typically takes 4 to 8 weeks from initial design layout to mobile optimization and launch.",
    open: false
  },
  {
    question: "Will my website look good and function on mobile?",
    answer: "Yes, every layout is designed mobile-first. We rigorously test your menus, booking tools, and forms across a variety of screen sizes to guarantee a smooth experience for all users.",
    open: false
  }
])

// JSON-LD for SEO FAQ Rich Snippets (Updated to map to web design focus)
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
  title: 'Custom Web Design & API Integration | Casatech LLC',
  meta: [
    { name: 'description', content: 'Transform your brand with handcrafted, custom web design. We specialize in high-converting sites, seamless Stripe/Square integrations, and bilingual onboarding.' }
  ],
  script: [
    { type: 'application/ld+json', children: JSON.stringify(faqSchema) }
  ]
})
</script>

<style scoped>
.shadow-soft {
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02);
}
.shadow-hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>