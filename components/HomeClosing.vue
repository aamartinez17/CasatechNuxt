<script setup>
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
            "name": "How quickly can you audit our current IT infrastructure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We typically complete a high-level Bilingual Discovery Audit within 3-5 business days, providing a clear roadmap of vulnerabilities and growth opportunities."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide helpdesk support in both English and Spanish?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our unique 'Bilingual Advantage' ensures your entire team receives expert technical support in both English and Spanish, eliminating communication barriers."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Nuxt/Vue.js better for our corporate web application?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuxt and Vue.js offer superior performance, SEO capabilities, and a modular architecture, making them the enterprise standard for scalable, high-speed B2B applications."
            }
          },
          {
            "@type": "Question",
            "name": "Do you require long-term lock-in contracts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We believe in earning your trust every month. While we offer long-term strategic partnerships, our Managed IT and Web solutions are designed for flexibility."
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
  { q: "How quickly can you audit our current IT infrastructure?", a: "We typically complete a high-level Bilingual Discovery Audit within 3-5 business days, providing a clear roadmap of vulnerabilities and growth opportunities." },
  { q: "Do you provide helpdesk support in both English and Spanish?", a: "Yes. Our unique 'Bilingual Advantage' ensures your entire team receives expert technical support in both English and Spanish, eliminating communication barriers." },
  { q: "What makes Nuxt/Vue.js better for our corporate web application?", a: "Nuxt and Vue.js offer superior performance, SEO capabilities, and a modular architecture, making them the enterprise standard for scalable, high-speed B2B applications." },
  { q: "Do you require long-term lock-in contracts?", a: "No. We believe in earning your trust every month. While we offer long-term strategic partnerships, our Managed IT and Web solutions are designed for flexibility." }
]
</script>

<template>
  <div>
    <section class="bg-white py-24 border-t border-gray-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 250, damping: 25 } }"
          class="text-center mb-16"
        >
          <h2 class="text-primary font-heading font-bold text-3xl md:text-4xl">
            Common Questions from Connecticut Businesses
          </h2>
          <p class="text-secondary mt-4 font-medium uppercase tracking-widest text-sm">
            B2B Tech Consulting & Support
          </p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-bg-light transition-colors group"
              :aria-expanded="activeFaq === index"
            >
              <span class="font-bold text-primary text-lg pr-8">{{ faq.q }}</span>
              <span class="text-secondary group-hover:text-primary transition-transform duration-300" :class="{ 'rotate-180': activeFaq === index }">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
              </span>
            </button>
            
            <div 
              v-show="activeFaq === index" 
              class="px-5 pb-5 text-body leading-relaxed animate-fade-in"
            >
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section 
      v-motion
      :initial="{ opacity: 0 }"
      :visible-once="{ opacity: 1, transition: { duration: 800 } }"
      class="bg-bg-dark py-24 relative overflow-hidden"
    >
      <div 
        class="absolute inset-0 opacity-10 pointer-events-none" 
        style="background-image: radial-gradient(var(--color-secondary) 1.5px, transparent 1.5px); background-size: 40px 40px;"
      ></div>
      
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-white font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight"
        >
          Ready to Eliminate <span class="text-secondary italic">Tech Bottlenecks?</span>
        </h2>
        
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 300 } }"
          class="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join dozens of New Haven businesses scaling with our dual-threat IT and Web solutions. Experience zero downtime and 100% accountability.
        </p>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          class="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <NuxtLink 
            to="/contact" 
            class="bg-cta hover:bg-cta-hover text-white font-heading font-bold py-5 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg w-full sm:w-auto hover:-translate-y-1 active:scale-95"
          >
            Book Your 15-Minute Discovery Call
          </NuxtLink>
          
          <NuxtLink 
            to="/insights" 
            class="text-white hover:text-secondary font-bold inline-flex items-center transition-colors group"
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