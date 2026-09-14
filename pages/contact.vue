<template>
  <!-- Full-height landing page structure with refined aesthetic spacing -->
  <article class="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#fafaf9] selection:bg-secondary/20 selection:text-primary font-sans antialiased">
    
    <!-- LEFT COLUMN: Bespoke Authority, Craft & Narrative -->
    <section class="lg:col-span-5 bg-[#09111e] p-8 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden text-slate-100 border-r border-slate-800/40">
      <!-- Ambient luxury lighting effects -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-1/4 -left-20 w-72 h-72 bg-cta/10 rounded-full blur-2xl pointer-events-none"></div>

      <div class="relative z-10">
        <NuxtLink 
          to="/" 
          class="inline-block mb-16 focus-visible:ring-1 focus-visible:ring-secondary/50 rounded-lg outline-none transition-transform hover:scale-[1.02]" 
          title="Return to Casatech Home"
        >
          <img src="/logos/casatech-logo-crop-white-bg.png" alt="Casatech LLC Logo" class="h-14 w-auto object-contain brightness-105 contrast-125">
        </NuxtLink>

        <!-- Premium Eyebrow Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md text-[11px] font-mono tracking-widest text-slate-300 uppercase mb-8">
          <span class="w-1.5 h-1.5 rounded-full bg-cta animate-pulse"></span>
          Bespoke Digital Atelier
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-[1.1] tracking-tight text-white">
          Elevate Your <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-secondary to-slate-300">Market Presence.</span>
        </h1>
        
        <p class="text-base md:text-lg text-slate-300/90 mb-12 max-w-md leading-relaxed font-normal">
          We architect ultra-performance web platforms and bespoke enterprise solutions designed to convert discerning clients, accelerate revenue, and command market leadership.
        </p>

        <!-- Direct Contact Block -->
        <div class="space-y-6 mb-16 pt-2 border-t border-white/10">
          <div class="flex items-center group pt-4">
            <div class="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mr-4 group-hover:border-secondary/60 group-hover:bg-secondary/10 transition-all duration-300">
              <svg class="w-4 h-4 text-slate-300 group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div>
              <span class="block text-[10px] uppercase font-mono tracking-widest text-slate-400">Direct Line</span>
              <a href="tel:2038848244" class="text-lg font-bold text-slate-100 hover:text-secondary transition-colors font-heading tracking-wide">
                (203) 884-8244
              </a>
            </div>
          </div>

          <div class="flex items-center group">
            <div class="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mr-4 group-hover:border-secondary/60 group-hover:bg-secondary/10 transition-all duration-300">
              <svg class="w-4 h-4 text-slate-300 group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <span class="block text-[10px] uppercase font-mono tracking-widest text-slate-400">Private Advisory</span>
              <a href="mailto:info@casatechllc.com" class="text-base text-slate-200 hover:text-secondary transition-colors">
                info@casatechllc.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Editorial Testimonial Card -->
      <div class="relative z-10 bg-white/[0.03] backdrop-blur-md p-7 rounded-2xl border border-white/10 shadow-2xl" v-motion-fade>
        <div class="flex text-cta gap-1 mb-3">
          <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        </div>
        <p class="text-slate-300 mb-5 leading-relaxed text-sm italic font-serif opacity-95">
          "Casatech completely re-engineered our digital footprint. The aesthetic sophistication combined with their technical precision produced an immediate uptick in enterprise client acquisition."
        </p>
        <div class="flex items-center justify-between border-t border-white/10 pt-3 text-xs">
          <cite class="not-italic font-semibold text-white tracking-wide">Managing Principal</cite>
          <span class="text-slate-400 font-mono text-[11px]">Private Equity & Assets</span>
        </div>
      </div>
    </section>

    <!-- RIGHT COLUMN: High-Touch Consultation Request -->
    <section class="lg:col-span-7 p-6 md:p-14 lg:p-20 flex flex-col justify-center bg-[#fafaf9]">
      <div class="max-w-xl w-full mx-auto">
        
        <form 
          name="contact" 
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit" 
          v-motion-fade
          class="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p class="hidden" aria-hidden="true">
            <label>Don’t fill this out if you're human: <input name="bot-field" v-model="formData.botField" /></label>
          </p>

          <div class="mb-10 text-left border-b border-slate-200 pb-6">
            <span class="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-2">Initiate Engagement</span>
            <h2 class="text-3xl font-heading font-bold text-slate-900 tracking-tight">Request an Architectural Consultation</h2>
            <p class="text-slate-600 text-sm mt-2 leading-relaxed">Tell us about your brand vision, operational objectives, and scale benchmarks. Our principal responds within one business day.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-1.5">
              <label for="full_name" class="text-xs font-semibold uppercase tracking-wider text-slate-700">Full Name</label>
              <input 
                id="full_name" 
                v-model="formData.name" 
                type="text" 
                required 
                class="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary/40 outline-none transition-all shadow-sm placeholder:text-slate-400"
                placeholder="Alexander Wright"
              />
            </div>
            <div class="space-y-1.5">
              <label for="company_email" class="text-xs font-semibold uppercase tracking-wider text-slate-700">Direct Corporate Email</label>
              <input 
                id="company_email" 
                v-model="formData.email" 
                type="email" 
                required 
                class="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary/40 outline-none transition-all shadow-sm placeholder:text-slate-400"
                placeholder="a.wright@firm.com"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-1.5">
              <label for="company_name" class="text-xs font-semibold uppercase tracking-wider text-slate-700">Company or Organization</label>
              <input 
                id="company_name" 
                v-model="formData.company" 
                type="text" 
                required 
                class="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary/40 outline-none transition-all shadow-sm placeholder:text-slate-400"
                placeholder="Wright Capital Partners"
              />
            </div>

            <div class="space-y-1.5">
              <label for="interest" class="text-xs font-semibold uppercase tracking-wider text-slate-700">Core Objective</label>
              <select 
                id="interest" 
                v-model="formData.interest"
                class="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary/40 outline-none transition-all shadow-sm appearance-none cursor-pointer"
              >
                <option value="Bespoke_Web_Design">Bespoke Web Design & Brand Modernization</option>
                <option value="Conversion_Engine">Revenue Growth & Conversion Platform</option>
                <option value="Custom_Web_App">Custom Web Application (Vue / Nuxt / API)</option>
                <option value="Infrastructure_Audit">Enterprise IT & Cloud Infrastructure</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div class="space-y-1.5">
            <div class="flex justify-between items-center">
              <label for="message" class="text-xs font-semibold uppercase tracking-wider text-slate-700">Project Scope & Strategic Goals</label>
              <span class="text-[11px] text-slate-400 font-mono">Confidential</span>
            </div>
            <textarea 
              id="message" 
              v-model="formData.message" 
              rows="4" 
              class="w-full p-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary/40 outline-none transition-all shadow-sm placeholder:text-slate-400"
              placeholder="Outline your current bottlenecks, target launch timeframe, or expansion objectives..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full bg-cta hover:bg-cta/90 active:scale-[0.99] text-white font-heading font-semibold text-sm py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <svg v-if="isSubmitting" class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>{{ isSubmitting ? 'Transmitting Request...' : 'Submit Consultation Request' }}</span>
            <svg v-if="!isSubmitting" class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
          
          <p class="text-[11px] text-center text-slate-500 leading-normal">
            Your inquiry is handled under strict non-disclosure. By submitting, you agree to our 
            <NuxtLink to="/terms" class="underline hover:text-slate-900 transition-colors">Privacy Terms</NuxtLink>.
          </p>
        </form>
      </div>
    </section>
  </article>
</template>

<script setup>
import { reactive, ref } from 'vue';
const router = useRouter();

definePageMeta({
  layout: false
});

const isSubmitting = ref(false);

const formData = reactive({
  name: '',
  email: '',
  company: '',
  interest: 'Bespoke_Web_Design',
  message: '',
  botField: ''
});

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  try {
    const response = await fetch('/.netlify/functions/send-emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setTimeout(() => {
        router.push('/thank-you');
      }, 400);
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('An unexpected error occurred while transmitting your request. Please connect with us directly via phone or email.');
  } finally {
    isSubmitting.value = false;
  }
};

useHead({
  title: 'Consultation & Strategic Engagements | Casatech LLC',
  meta: [
    { name: 'description', content: 'Request an executive web design and digital architecture consultation. High-performance digital platforms crafted for measurable enterprise growth.' }
  ]
});
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 1rem center;
  background-repeat: no-repeat;
  background-size: 1.25em 1.25em;
}
</style>