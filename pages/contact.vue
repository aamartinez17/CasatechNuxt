<template>
  <!-- Full-height landing page structure to eliminate site-wide distractions -->
  <article class="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-bg-light">
    
    <!-- LEFT COLUMN: Trust, Authority & Brand Narrative -->
    <section class="lg:col-span-5 bg-bg-dark p-8 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden">
      <!-- Background subtle branding element -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32"></div>

      <div class="relative z-10">
        <!-- FIXED: Increased logo height and added w-auto to prevent squishing -->
        <NuxtLink to="/" class="inline-block mb-16 focus-visible:ring-2 focus-visible:ring-cta rounded-lg outline-none" title="Return to Casatech Home">
          <img src="/logos/casatech-logo-crop-white-bg.png" alt="Casatech LLC Logo" class="h-16 w-auto object-contain">
        </NuxtLink>

        <!-- FIXED: Changed 'Let's Scale Your' to text-white for maximum contrast -->
        <h1 class="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-tight text-slate-100">
          Let’s Scale Your <br />
          <span class="text-secondary">Digital Infrastructure.</span>
        </h1>
        
        <!-- Adjusted contrast for subhead -->
        <p class="text-lg text-slate-300 mb-12 max-w-md leading-relaxed opacity-90">
          Schedule your free, bilingual (English/Español) discovery audit to uncover tech bottlenecks 
          and enterprise growth opportunities.
        </p>

        <!-- Direct Contact Block: Ensured high-contrast colors -->
        <div class="space-y-8 mb-16">
          <div class="flex items-center group">
            <div class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-5 group-hover:bg-secondary transition-colors border border-secondary/30">
              <svg class="w-5 h-5 text-secondary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <a href="tel:2038848244" class="text-2xl font-bold text-slate-300 hover:text-secondary transition-colors font-heading tracking-wide">
              (203) 884-8244
            </a>
          </div>

          <div class="flex items-center group">
            <div class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-5 group-hover:bg-secondary transition-colors border border-secondary/30">
              <svg class="w-5 h-5 text-secondary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <a href="mailto:info@casatechllc.com" class="text-xl text-slate-100 hover:text-secondary transition-colors opacity-90 group-hover:opacity-100">
              info@casatechllc.com
            </a>
          </div>
        </div>
      </div>

      <!-- Testimonial remains same but uses text-white for author -->
      <div class="relative z-10 bg-white/5 p-8 rounded-2xl border border-white/10" v-motion-fade>
        <div class="flex text-cta mb-4">
          <svg v-for="i in 5" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        </div>
        <p class="italic text-slate-300 mb-6 leading-relaxed text-lg">
          "Alex provided a technical roadmap that finally made sense for our operations. 
          His bilingual support was the deciding factor for our New Haven team."
        </p>
        <cite class="not-italic font-bold text-slate-100 tracking-wide">— Operations Manager, Local Manufacturing</cite>
      </div>
    </section>

    <!-- RIGHT COLUMN: Conversion Engine (Tabs + Form/Calendar) -->
    <section class="lg:col-span-7 p-6 md:p-12 lg:p-24 flex flex-col justify-center bg-white shadow-soft">
      <div class="max-w-xl w-full mx-auto">
        
        <!-- CRO Tab Switcher: Decreases friction for ready-to-book leads -->
        <div class="flex p-1 bg-bg-light rounded-xl mb-12">
          <button 
            @click="activeTab = 'calendar'"
            :class="activeTab === 'calendar' ? 'bg-white shadow-sm text-primary font-bold' : 'text-text-secondary'"
            class="flex-1 py-3 text-sm rounded-lg transition-all outline-none focus-visible:ring-2 focus-visible:ring-cta"
          >
            Schedule a Call
          </button>
          <button 
            @click="activeTab = 'message'"
            :class="activeTab === 'message' ? 'bg-white shadow-sm text-primary font-bold' : 'text-text-secondary'"
            class="flex-1 py-3 text-sm rounded-lg transition-all outline-none focus-visible:ring-2 focus-visible:ring-cta"
          >
            Send a Message
          </button>
        </div>

        <!-- TAB 1: Calendar Embed -->
        <div v-if="activeTab === 'calendar'" v-motion-fade class="space-y-6">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-heading font-bold text-text-heading">Choose a Time for Your Audit</h2>
            <p class="text-text-secondary">Direct access to a senior consultant's schedule.</p>
          </div>
          <!-- Placeholder for Calendly/Scheduling Widget -->
          <div id="calendly-embed-placeholder" class="h-[600px] w-full bg-slate-50 border border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center text-slate-400 p-8">
            <svg class="w-12 h-12 mb-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <p class="text-center">Calendly or Scheduling Widget Embeds Here</p>
          </div>
        </div>

        <!-- TAB 2: Form Capture -->
        <form v-else 
              name="contact" 
              @submit.prevent="handleSubmit" 
              v-motion-slide-right 
              class="space-y-6">
          
          <div class="text-center mb-8">
            <h2 class="text-2xl font-heading font-bold text-text-heading">Request Information</h2>
            <p class="text-text-secondary">We typically respond within 1 business hour.</p>
          </div>

          <!-- Semantic Accessibility: ID/For Mapping + Focus Rings -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="full_name" class="text-sm font-bold text-text-heading">Full Name</label>
              <input 
                id="full_name" 
                v-model="formData.name" 
                type="text" 
                required 
                class="w-full p-4 bg-bg-light border border-slate-200 rounded-lg focus:ring-2 focus:ring-secondary outline-none transition-all"
                placeholder="Alex Martinez"
              />
            </div>
            <div class="space-y-2">
              <label for="company_email" class="text-sm font-bold text-text-heading">Company Email</label>
              <input 
                id="company_email" 
                v-model="formData.email" 
                type="email" 
                required 
                class="w-full p-4 bg-bg-light border border-slate-200 rounded-lg focus:ring-2 focus:ring-secondary outline-none transition-all"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label for="company_name" class="text-sm font-bold text-text-heading">Company Name</label>
            <input 
              id="company_name" 
              v-model="formData.company" 
              type="text" 
              required 
              class="w-full p-4 bg-bg-light border border-slate-200 rounded-lg focus:ring-2 focus:ring-secondary outline-none transition-all"
              placeholder="Business Name LLC"
            />
          </div>

          <div class="space-y-2">
            <label for="interest" class="text-sm font-bold text-text-heading">Primary Interest</label>
            <select 
              id="interest" 
              v-model="formData.interest"
              class="w-full p-4 bg-bg-light border border-slate-200 rounded-lg focus:ring-2 focus:ring-secondary outline-none appearance-none transition-all"
            >
              <option value="managed_it">Managed IT & Infrastructure</option>
              <option value="web_dev">Custom Web Development (Vue.js)</option>
              <option value="cloud">Cloud Integration</option>
              <option value="other">Other Technical Consulting</option>
            </select>
          </div>

          <div class="space-y-2">
            <label for="message" class="text-sm font-bold text-text-heading">Message</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              rows="4" 
              class="w-full p-4 bg-bg-light border border-slate-200 rounded-lg focus:ring-2 focus:ring-secondary outline-none transition-all"
              placeholder="Tell us about your technical goals..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full bg-cta hover:bg-cta-hover text-white font-heading font-bold py-4 rounded-lg shadow-soft transform transition active:scale-95 disabled:opacity-50"
          >
            {{ isSubmitting ? 'Sending Request...' : 'Send Message' }}
          </button>
          
          <p class="text-xs text-center text-text-muted italic">
            Your data is protected. By submitting, you agree to our 
            <NuxtLink to="/terms" class="underline">Privacy Policy</NuxtLink>.
          </p>
        </form>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, reactive } from 'vue';

// Define layout: custom-empty (no main navbar/footer to maximize CRO)
definePageMeta({
  layout: false
});

const activeTab = ref('calendar'); // Default to high-intent action
const isSubmitting = ref(false);

const formData = reactive({
  name: '',
  email: '',
  company: '',
  interest: 'managed_it',
  message: ''
});

const handleSubmit = async () => {
  isSubmitting.value = true;
  // Netlify form submission or API logic here
  setTimeout(() => {
    isSubmitting.value = false;
    // router.push('/thank-you')
  }, 1500);
};

// SEO Head setup
useHead({
  title: 'Hire IT Consultant New Haven | Schedule Tech Audit | Casatech LLC',
  meta: [
    { name: 'description', content: 'Schedule a free bilingual IT audit or request a custom B2B web development quote in CT and VA. Direct access to senior enterprise technical consultants.' }
  ]
});
</script>

<style scoped>
/* Custom select arrow */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 1rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
}
</style>