<!-- components/ServiceHero.vue -->
<template>
  <section 
    v-if="activeType"
    class="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden min-h-[90vh] flex items-center"
  >
    
    <!-- DYNAMIC BACKGROUND ICONS WITH CONSTANT FLOAT ANIMATION -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div 
        v-for="(icon, index) in activeType.bgIcons" 
        :key="icon + index"
        class="absolute text-secondary/15 text-8xl sm:text-9xl transition-all duration-1000 ease-in-out"
        :class="[getIconPosition(index), getFloatAnimation(index)]"
      >
        <font-awesome-icon :icon="icon" />
      </div>
    </div>

    <!-- Background Accent Glows -->
    <div 
      class="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl transition-colors duration-1000 opacity-20 z-0" 
      :class="activeType.gradient ? activeType.gradient.split(' ')[0].replace('from-', 'bg-') : 'bg-indigo-500'"
    ></div>
    <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      
      <!-- Section Intro Header (Now fully animated on scroll!) -->
      <div class="text-center max-w-3xl mx-auto mb-16 overflow-hidden">
        
        <!-- Animated Eyebrow Badge -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150, damping: 20, delay: 100 } }"
          class="inline-block"
        >
          <span class="text-accent uppercase tracking-widest font-bold text-xs sm:text-sm bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            The Casatech Playbook
          </span>
        </div>

        <!-- Animated Main Title -->
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18, delay: 250 } }"
          class="text-secondary text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6"
        >
          Web Architectures Tailored To Your Goal
        </h2>

        <!-- Animated Description Paragraph -->
        <p 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20, delay: 400 } }"
          class="text-slate-400 text-base sm:text-lg leading-relaxed"
        >
          We don’t believe in cookie-cutter designs. Choose your industry below to preview how we align UX frameworks, visuals, and performance mechanics to solve your precise operational bottlenecks.
        </p>
        
      </div>

      <!-- INTERACTIVE SERVICE BUILDER WIDGET -->
      <div class="card-gradient-border backdrop-blur-md p-6 lg:p-10 shadow-2xl relative">
        
        <!-- Mobile Swipe Hint -->
        <div class="absolute -top-3 right-6 lg:hidden bg-slate-800 border border-slate-700 text-slate-300 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse z-10">
          <font-awesome-icon icon="fa-solid fa-arrows-left-right" class="text-accent" />
          Swipe to explore
        </div>

        <!-- Tab Selectors -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-800 scrollbar-none relative">
          <button
            v-for="type in websiteTypes"
            :key="type.id"
            @click="selectType(type)"
            class="flex items-center gap-2.5 px-5 py-3 rounded-xl font-heading text-sm font-semibold whitespace-nowrap transition-all duration-300 relative group"
            :class="activeType.id === type.id 
              ? 'bg-gradient-to-r ' + type.gradient + ' text-white shadow-lg scale-[1.02]' 
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'"
          >
            <font-awesome-icon :icon="type.icon" class="mr-1.5" />
            {{ type.label }}
          </button>
        </div>

        <!-- Dynamic Information Panel Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- LEFT COLUMN: The Strategy Board -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- TRANSITION ADDED: Strategy Profile Eyebrow Badge -->
            <div class="overflow-hidden">
              <div :key="activeType.id" class="animate-base-up inline-flex items-center gap-2">
                <span class="text-xs font-mono px-3 py-1 bg-slate-800 text-accent border border-slate-700/50 rounded-md">
                  STRATEGY PROFILE
                </span>
              </div>
            </div>

            <!-- Header and Description Content Container -->
            <div class="overflow-hidden">
              <div :key="activeType.id" class="animate-base-up">
                <h3 class="text-2xl sm:text-3xl font-heading font-bold text-slate-300 mb-3">
                  {{ activeType.label }}
                </h3>
                <p class="text-slate-400 text-sm font-medium mb-4 italic">
                  {{ activeType.subtitle }}
                </p>
                <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {{ activeType.description }}
                </p>
              </div>
            </div>

            <!-- Mission Block -->
            <div class="bg-slate-950/60 border border-slate-800 p-5 rounded-2xl flex gap-4 items-start hover:border-slate-700 transition-colors">
              <div class="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <font-awesome-icon icon="fa-solid fa-bullseye" class="text-lg" />
              </div>
              <div class="overflow-hidden w-full">
                <div :key="activeType.id" class="animate-base-up">
                  <h4 class="font-heading font-bold text-sm text-white uppercase tracking-wider mb-1">Target Website Mission</h4>
                  <p class="text-slate-400 text-sm leading-relaxed">{{ activeType.mission }}</p>
                </div>
              </div>
            </div>

            <!-- TRANSITION ADDED: Interactive Example Link Container -->
            <div class="overflow-hidden">
              <div :key="activeType.id" class="animate-base-up pt-2">
                <div v-if="activeType.exampleUrl">
                  <a 
                    :href="activeType.exampleUrl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-md bg-slate-900/70 py-1 px-3 rounded-lg font-semibold text-accent hover:text-white transition-colors group"
                  >
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-xs" />
                    <span>{{ activeType.exampleLabel }}</span>
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-xs transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div v-else class="flex items-center gap-2 text-xs text-slate-500 font-mono italic">
                  <font-awesome-icon icon="fa-solid fa-spinner" spin class="text-accent" /> Custom build concept open for immediate deployment
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN: Core Feature Stack -->
          <div class="lg:col-span-5">
            <div class="relative bg-slate-950/80 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 overflow-hidden">
              <!-- Edge Highlight Border -->
              <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r" :class="activeType.gradient"></div>

              <h4 class="font-heading font-bold text-sm tracking-wider uppercase text-slate-400 mb-4 flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-cubes" class="text-accent" /> Built-In Architectures
              </h4>

              <!-- Dynamic Feature Loops -->
              <div class="space-y-4 overflow-hidden relative min-h-[220px]">
                <div :key="activeType.id" class="animate-base-up space-y-4">
                  <div 
                    v-for="(feat, idx) in activeType.features" 
                    :key="feat.title"
                    class="flex gap-4 group"
                  >
                    <!-- Number Badge with Accent Transition -->
                    <div class="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:text-accent transition-colors">
                      0{{ idx + 1 }}
                    </div>
                    <div>
                      <h5 class="font-heading font-semibold text-sm text-white mb-1 group-hover:text-accent transition-colors">
                        {{ feat.title }}
                      </h5>
                      <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {{ feat.desc }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Instant Callout Anchor -->
              <div class="pt-4 border-t border-slate-800/80 mt-6">
                <NuxtLink 
                  to="/contact" 
                  class="flex items-center justify-between bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-accent py-3 px-4 rounded-xl text-xs font-bold text-center transition-all duration-300 group"
                >
                  <span class="group-hover:text-accent transition-colors">Discuss Your Project Model</span>
                  <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-slate-500 group-hover:text-accent transition-colors transform group-hover:translate-x-1" />
                </NuxtLink>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { websiteTypes } from '~/assets/data/services.js';

const activeType = ref(websiteTypes && websiteTypes.length > 0 ? websiteTypes[0] : null);

const selectType = (type) => {
  activeType.value = type;
};

const getIconPosition = (index) => {
  const positions = [
    'top-[12%] left-[6%] rotate-12 scale-110',
    'bottom-[16%] left-[10%] -rotate-12 scale-95',
    'top-[18%] right-[8%] rotate-45 scale-125',
    'bottom-[18%] right-[12%] -rotate-6 scale-100'
  ];
  return positions[index] || '';
};

const getFloatAnimation = (index) => {
  const animations = [
    'animate-float-slow',
    'animate-float-medium',
    'animate-float-fast',
    'animate-float-reverse'
  ];
  return animations[index] || 'animate-float-slow';
};
</script>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes baseUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-base-up {
  animation: baseUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* CONSTANT BACKDROP FLOATING KEYFRAMES */
@keyframes floatSlow {
  0%, 100% { transform: translateY(0) rotate(12deg) scale(1.1); }
  50% { transform: translateY(-15px) rotate(15deg) scale(1.12); }
}
@keyframes floatMedium {
  0%, 100% { transform: translateY(0) rotate(-12deg) scale(0.95); }
  50% { transform: translateY(-10px) rotate(-8deg) scale(0.98); }
}
@keyframes floatFast {
  0%, 100% { transform: translateY(0) rotate(45deg) scale(1.25); }
  50% { transform: translateY(-18px) rotate(40deg) scale(1.22); }
}
@keyframes floatReverse {
  0%, 100% { transform: translateY(0) rotate(-6deg) scale(1); }
  50% { transform: translateY(12px) rotate(-2deg) scale(1.03); }
}

.animate-float-slow {
  animation: floatSlow 8s ease-in-out infinite;
}
.animate-float-medium {
  animation: floatMedium 6s ease-in-out infinite;
}
.animate-float-fast {
  animation: floatFast 5s ease-in-out infinite;
}
.animate-float-reverse {
  animation: floatReverse 7s ease-in-out infinite;
}
</style>