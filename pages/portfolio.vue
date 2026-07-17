<template>
  <div class="min-h-screen pt-20">
    <!-- Header Hero Section -->
    <section class="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-gray-100">
      <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-70"></div>
      <div class="max-w-5xl mx-auto text-center relative z-10">
        <span class="text-secondary uppercase tracking-widest font-bold text-xs sm:text-sm bg-secondary/10 px-3 py-1 rounded-full">
          Our Crafted Work
        </span>
        <h1 class="text-primary font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6">
          Websites Built to Convert
        </h1>
        <p class="text-body text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Explore a handpicked showcase of premium interfaces where strategic art direction meets pixel-perfect front-end engineering.
        </p>
      </div>
    </section>

    <!-- Main Portfolio Gallery Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="portfolio-gallery">
      
      <!-- Premium Segmented Filter Controls -->
      <div class="flex flex-wrap justify-center items-center gap-2 mb-12">
        <button 
          v-for="filter in filterOptions" 
          :key="filter.value"
          @click="setFilter(filter.value)"
          class="font-heading text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200"
          :class="activeFilter === filter.value 
            ? 'bg-primary text-white border-primary shadow-md scale-[1.02]' 
            : 'bg-white text-slate-600 border-gray-200 hover:border-secondary hover:text-secondary'"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Animated Responsive Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="(project, index) in filteredProjects" 
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, type: 'spring', stiffness: 100 } }"
          class="group bg-white rounded-2xl border border-gray-100 shadow-soft overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
        >
          <!-- Modern Image Container / Showcase Technique -->
          <div class="relative overflow-hidden aspect-[4/3] bg-slate-100 border-b border-gray-50">
            <img 
              :src="project.imageUrl || '/images/project-placeholder.png'" 
              :alt="project.title"
              class="w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <!-- Dark Premium Overlay Fade on Hover -->
            <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <a 
                v-if="project.projectUrl" 
                :href="project.projectUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="bg-white text-primary font-heading font-bold py-2.5 px-5 rounded-lg shadow-lg hover:bg-secondary hover:text-white transition-colors flex items-center gap-2 text-sm"
              >
                Launch Live Site
                <i class="fa-solid fa-external-link text-xs"></i>
              </a>
            </div>
          </div>

          <!-- Card Info Body -->
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                {{ project.category }}
              </span>
            </div>
            
            <h3 class="text-primary font-heading font-bold text-xl mb-2 group-hover:text-secondary transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
              {{ project.description }}
            </p>

            <!-- Render Stack Badges dynamically if defined in data, or use defaults -->
            <div class="flex flex-wrap gap-1.5 pt-4 border-t border-gray-50 text-xs font-mono text-slate-400">
              <span v-for="tag in project.tags || ['Vue.js', 'Tailwind CSS']" :key="tag">
                #{{ tag.toLowerCase().replace(/\s+/g, '') }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Partner Trust Wall Section -->
    <section class=" border-t-4 border-b border-gray-100 py-16" id="client-logos">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-xl mx-auto mb-10">
          <h2 class="text-primary font-heading font-bold text-2xl sm:text-3xl">Local Partners & Growth Allies</h2>
          <p class="text-slate-500 mt-2 text-sm sm:text-base">We design web architectures that empower local business infrastructures across Connecticut.</p>
        </div>
        
        <LogoCarousel :logos="clientLogos" />
      </div>
    </section>

    <!-- Bottom Action Call Block -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-brand-gradient text-white relative overflow-hidden text-center">
      <div class="absolute -top-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-2xl"></div>
      <div class="relative z-10 max-w-2xl mx-auto">
        <h2 class="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-white"> Ready to Launch Yours?</h2>
        <p class="text-slate-200 text-lg mb-8 max-w-md mx-auto">Let's build a custom interface tailored precisely to turn your visitors into paying customers.</p>
        <NuxtLink to="/contact" class="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-heading font-bold py-3.5 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
          Get a Custom Design Architecture Quote
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { allProjects as projectData } from '@/assets/data/ProjectData.js';
import { clientLogos as logoData } from '@/assets/data/PartnerData.js';

const allProjects = ref(projectData);
const clientLogos = ref(logoData);
const activeFilter = ref('all');

// Configuration Array for Quick Filter Adjustments
const filterOptions = [
  { label: 'All Projects', value: 'all' },
  { label: 'E-Commerce', value: 'e-commerce' },
  { label: 'Business Showcases', value: 'showcase' },
  { label: 'Custom Web Apps', value: 'web-app' }
];

const setFilter = (filterValue) => {
  activeFilter.value = filterValue;
};

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return allProjects.value;
  }
  return allProjects.value.filter(project => project.category === activeFilter.value);
});

// Structural page dynamic head attributes
useHead({
  title: 'Portfolio - Casatech LLC',
  meta: [
    { name: 'description', content: 'Explore premium tailored e-commerce, application, and business platform showcase designs built by Casatech LLC.' }
  ]
});
</script>

<style scoped>
/* High quality box shadows to use across components */
.shadow-soft {
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02);
}
</style>