<script setup>
import { ref } from 'vue'

/**
 * SEO STRATEGY: FAQ Schema Markup (JSON-LD)
 */
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why should my business choose a custom website over a pre-made template?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pre-made templates are packed with hidden code and plugins your business never uses, which slows down your site and opens security gaps. A custom-built website is tailored precisely to what your business needs, loading instantly and staying secure without breaking during updates."
            }
          },
          {
            "@type": "Question",
            "name": "How does a faster website help me get more customers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If a website takes more than 3 seconds to load on a smartphone, over half of visitors will leave immediately to visit a competitor. Fast-loading, responsive websites keep potential clients engaged and make it effortless for them to contact you or buy your products."
            }
          },
          {
            "@type": "Question",
            "name": "Will my website look great and work smoothly on mobile phones?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every website we design is built mobile-first, ensuring it looks polished and functions seamlessly whether your customers open it on a smartphone, tablet, laptop, or large desktop monitor."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to design and launch a new custom website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most small-to-midsize business websites are designed, built, and launched within a few weeks, depending on the project's features and custom quote tools needed."
            }
          }
        ]
      })
    }
  ]
})

const activeFaq = ref(null)
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const faqs = [
  { 
    q: "Why should my business choose a custom website over a pre-made template?", 
    a: "Pre-made templates are packed with hidden code and plugins your business never uses, which slows down your site and opens security gaps. A custom-built website is tailored precisely to what your business needs, loading instantly and staying secure without breaking during updates." 
  },
  { 
    q: "How does a faster website help me get more customers?", 
    a: "If a website takes more than 3 seconds to load on a smartphone, over half of visitors will leave immediately to visit a competitor. Fast-loading, responsive websites keep potential clients engaged and make it effortless for them to contact you or buy your products." 
  },
  { 
    q: "Will my website look great and work smoothly on mobile phones?", 
    a: "Yes. Every website we design is built mobile-first, ensuring it looks polished and functions seamlessly whether your customers open it on a smartphone, tablet, laptop, or large desktop monitor." 
  },
  { 
    q: "How long does it take to design and launch a new custom website?", 
    a: "Most small-to-midsize business websites are designed, built, and launched within a few weeks, depending on the project's features and custom quote tools needed." 
  }
]
</script>

<template>
  <div>
    <!-- FAQ SECTION (Light Theme Consistent with Other Sections) -->
    <section class="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } }"
          class="text-center mb-14"
        >
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-xs font-mono uppercase tracking-widest font-semibold mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
            Web Design Questions & Answers
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions About <br />
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Custom Web Design
            </span>
          </h2>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 15 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 transition-all duration-200"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-6 text-left bg-transparent hover:bg-slate-100/60 transition-colors group cursor-pointer"
              :aria-expanded="activeFaq === index"
            >
              <span class="font-heading font-bold text-slate-900 text-base sm:text-lg pr-8">{{ faq.q }}</span>
              <span class="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0" :class="{ 'rotate-180 bg-secondary text-white': activeFaq === index }">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
              </span>
            </button>
            
            <div 
              v-show="activeFaq === index" 
              class="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed animate-fade-in border-t border-slate-100 pt-4"
            >
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CALL TO ACTION SECTION (Dark Theme Matching Hero & Profit Sections) -->
    <section 
      v-motion
      :initial="{ opacity: 0 }"
      :visible-once="{ opacity: 1, transition: { duration: 800 } }"
      class="bg-slate-950 text-white py-24 lg:py-32 relative overflow-hidden border-b border-slate-800"
    >
      <!-- BASE BACKDROP & AMBIENT GLOWS -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pointer-events-none z-0"></div>
      <div class="absolute inset-0 opacity-10 pointer-events-none z-0" style="background-image: radial-gradient(rgba(56, 189, 248, 0.4) 1.5px, transparent 1.5px); background-size: 40px 40px;"></div>
      
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-xs font-mono uppercase tracking-widest font-semibold mx-auto">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Ready to Scale
        </div>

        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]"
        >
          Ready for a Website That <br />
          <span class="bg-gradient-to-r from-secondary via-sky-300 to-white bg-clip-text text-transparent">
            Actually Drives Growth?
          </span>
        </h2>
        
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 300 } }"
          class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Let's discuss how a clean, high-speed web presence can help you win better clients and leave slow template headaches behind.
        </p>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <NuxtLink 
            to="/contact" 
            class="bg-cta hover:bg-cta-hover text-white font-heading font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 text-sm sm:text-base w-full sm:w-auto hover:-translate-y-0.5"
          >
            Schedule a Free Website Consultation
          </NuxtLink>
          
          <NuxtLink 
            to="/insights" 
            class="text-white hover:text-secondary font-heading font-semibold text-sm sm:text-base inline-flex items-center transition-colors group py-3 px-6"
          >
            Or view our latest Insights 
            <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </NuxtLink>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>