<template>
  <article class="pt-28 pb-16 bg-bg-light lg:mt-12 overflow-hidden">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20" 
             v-motion-fade-visible>
      <span class="text-cta font-heading font-bold tracking-widest uppercase text-sm mb-4 block">
        Our Mission
      </span>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-heading mb-6 leading-tight">
        Leveling the Digital Playing Field <br class="hidden md:block" /> 
        for <span class="text-secondary font-bold">Growing Businesses.</span>
      </h1>
      <p class="max-w-3xl mx-auto text-lg md:text-xl text-secondary leading-relaxed">
        We bridge the technological gap between massive corporations and local SMEs by delivering 
        enterprise-grade IT infrastructure and custom Vue.js web solutions.
      </p>
    </section>

    <section class="bg-white py-20 border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div v-motion-slide-visible-left>
          <h2 class="text-3xl font-heading font-bold text-heading mb-6">
            The Digital Monopoly Ends Here
          </h2>
          <p class="text-body mb-4 leading-relaxed">
            For too long, top-tier technology has been the exclusive domain of global corporations with 
            unlimited budgets. This creates a critical "Tech Divide," leaving local Connecticut businesses 
            and Hispanic-owned enterprises struggling to compete in an increasingly digital economy.
          </p>
          <p class="text-body leading-relaxed">
            At Casatech, we believe that <strong class="text-primary">Enterprise Web Development for SMEs</strong> 
            shouldn't be a luxury—it's a requirement for survival. We specialize in accelerating tech adoption 
            within the Latin community, ensuring cultural relevance is never sacrificed for technical performance.
          </p>
        </div>
        <aside class="bg-bg-light p-8 md:p-12 border-l-4 border-secondary rounded-r-lg shadow-sm"
               v-motion-slide-visible-right>
          <blockquote class="text-2xl md:text-3xl font-heading font-medium italic text-heading leading-snug">
            "Technology should be the great equalizer, not the barrier to entry for the businesses that 
            drive our local economy."
          </blockquote>
        </aside>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="grid lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5 relative" v-motion-fade-visible>
          <div class="aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-2xl border-8 border-white group">
            <img 
              src="/images/aboutview-story.png" 
              alt="Alex Martinez - Connecticut IT Consultant & Founder of Casatech LLC"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-xl text-white hidden md:block">
            <span class="block text-3xl font-bold">8+ Years</span>
            <span class="text-xs uppercase tracking-widest opacity-80">Enterprise Experience</span>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-6" v-motion-slide-visible-right>
          <div class="inline-flex items-center space-x-2 text-secondary font-bold text-sm uppercase tracking-wider">
            <span>Direct Access to Senior Expertise</span>
          </div>
          <h2 class="text-4xl font-heading font-bold text-heading">Alex Martinez</h2>
          <h3 class="text-xl text-secondary font-medium italic -mt-2">Founder & Lead Technical Consultant</h3>
          
          <div class="prose prose-slate max-w-none text-body space-y-4">
            <p>
              Born in Harrisonburg, VA, and now deeply rooted in New Haven, Alex is a first-generation 
              Mexican-American who recognized a critical market failure: smaller businesses adopt technology 
              at a slower rate, limiting their ability to compete with corporate giants.
            </p>
            <p>
              Alex founded <span class="font-bold">Casatech LLC</span> to bridge this gap. A Computer Science 
              scholar with a <span class="text-secondary font-bold underline decoration-secondary/30">3.97 GPA</span> 
              and over 8 years of experience in enterprise infrastructure, he provides SMEs with something 
              unheard of in the agency world: <strong>Direct, unfiltered access to a Senior Architect.</strong>
            </p>
            <p>
              When you partner with Alex, you aren't handed off to a junior account manager. You gain 
              a strategic growth partner providing <strong>Bilingual Tech Support in New Haven</strong> and 
              enterprise-grade solutions that were once reserved for the Fortune 500.
            </p>
          </div>

          <div class="flex flex-wrap gap-4 pt-4">
            <span class="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium border border-gray-200">
              🎓 BS Computer Science (3.97 GPA)
            </span>
            <span class="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium border border-gray-200">
              🇲🇽 Fully Bilingual (English/Español)
            </span>
            <span class="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium border border-gray-200 text-secondary">
              ✓ 8+ Years Enterprise IT
            </span>
          </div>
        </div>
      </div>
    </section>


    <!-- CREDENTIALS & AUTHORITY SECTION -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Verify Credentials Bar -->
      <div class="flex items-center justify-center lg:justify-start space-x-6 py-6 border-t border-gray-200">
        <span class="text-xs font-bold uppercase tracking-widest text-muted">Verify Credentials:</span>
        <div class="flex items-center space-x-4">
          <a href="https://www.linkedin.com/company/casatech-llc" target="_blank" rel="noopener noreferrer" 
             class="text-muted hover:text-secondary transition-colors duration-300" title="LinkedIn Profile">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://github.com/Casatechllc" target="_blank" rel="noopener noreferrer" 
             class="text-muted hover:text-secondary transition-colors duration-300" title="GitHub Technical Portfolio">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>

      <!-- By the Numbers Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" v-motion-slide-visible-bottom>
        <div class="p-6 bg-white rounded-xl shadow-soft border-b-4 border-primary">
          <div class="text-3xl font-bold text-primary mb-1">8+ Years</div>
          <div class="text-xs font-bold uppercase tracking-tight text-secondary">Enterprise IT & Dev</div>
        </div>
        <div class="p-6 bg-white rounded-xl shadow-soft border-b-4 border-secondary">
          <div class="text-3xl font-bold text-primary mb-1">3.97 GPA</div>
          <div class="text-xs font-bold uppercase tracking-tight text-secondary">CS Excellence</div>
        </div>
        <div class="p-6 bg-white rounded-xl shadow-soft border-b-4 border-cta">
          <div class="text-3xl font-bold text-primary mb-1">100%</div>
          <div class="text-xs font-bold uppercase tracking-tight text-secondary">Bilingual Support</div>
        </div>
      </div>
    </section>

    <section class="bg-white py-24 mt-12 border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-heading mb-4">Our Operating Philosophy</h2>
          <p class="text-secondary max-w-2xl mx-auto">How we deliver corporate-grade reliability with small-business agility.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Value 1 -->
          <div class="p-8 bg-bg-light rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
               v-motion-slide-visible-bottom>
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-heading mb-3">Zero Technical Jargon</h3>
            <p class="text-body text-sm leading-relaxed">We translate complex infrastructure and Vue.js architecture into clear business outcomes. No fluff, just results.</p>
          </div>

          <!-- Value 2 -->
          <div class="p-8 bg-bg-light rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
               v-motion-slide-visible-bottom>
            <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 text-secondary">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-heading mb-3">Local Accountability</h3>
            <p class="text-body text-sm leading-relaxed">Proudly serving New Haven, CT with the dedication of an in-house partner, not a faceless outsourced vendor.</p>
          </div>

          <!-- Value 3 -->
          <div class="p-8 bg-bg-light rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
               v-motion-slide-visible-bottom>
            <div class="w-12 h-12 bg-cta/10 rounded-lg flex items-center justify-center mb-6 text-cta">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-heading mb-3">Agile Execution</h3>
            <p class="text-body text-sm leading-relaxed">Eliminating enterprise bloat to deliver rapid, high-performance digital solutions tailored to SME timelines.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 relative z-10">
      <div class="bg-bg-dark rounded-3xl p-12 text-center shadow-2xl">
        <h2 class="text-3xl font-heading font-bold text-white mb-6 text-light">Ready to upgrade your infrastructure?</h2>
        <NuxtLink to="/contact" class="inline-block bg-cta hover:bg-cta-hover text-white font-heading font-bold py-4 px-10 rounded-lg transition-all duration-300">
          Book a Technical Audit with Alex
        </NuxtLink>
      </div>
    </section>
  </article>
</template>

<script setup>
// SEO Metadata
useHead({
  title: 'Founder & Mission | Casatech LLC - New Haven IT Consultant',
  meta: [
    { 
      name: 'description', 
      content: 'Learn about Alex Martinez and Casatech LLC. Providing bilingual IT support in New Haven and enterprise web development for growing SMEs.' 
    }
  ]
})
</script>

<style scoped>
/* High-performance text rendering for long-form copy */
.prose p {
  line-height: 1.75;
}
</style>