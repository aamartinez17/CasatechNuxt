<!-- app.vue -->
<template>
  <div class="relative min-h-screen bg-slate-50 text-slate-800 selection:bg-secondary/20" :class="{ 'pt-20 sm:pt-24': !isSpecialEventRoute }">
    
    <!-- FIXED AMBIENT BACKGROUND (LIGHT THEME) -->
    <div v-if="!isSpecialEventRoute" class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute inset-0 bg-[#f8fafc]"></div>
      <div class="absolute inset-0 w-full h-full filter blur-[100px] md:blur-[140px] opacity-90 animate-scroll-bg"></div>
    </div>

    <!-- MAIN INTERACTIVE INTERFACE -->
    <div class="relative z-10 flex flex-col min-h-screen">
      
      <!-- Navbar is hidden on event routes -->
      <Navbar v-if="!isSpecialEventRoute" />
      
      <main class="flex-grow">
        <!-- Global Breadcrumbs Wrapper: Only shows on deep subroutes -->
        <div v-if="shouldShowBreadcrumbs && !isSpecialEventRoute" class="w-full bg-gradient-to-r from-secondary/5 via-secondary/5 to-transparent border-y border-secondary/10 -mt-2 pb-1">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
            <AppBreadcrumbs />
          </div>
        </div>

        <NuxtPage />
      </main>

      <!-- Footer & Consent Banner hidden on event routes -->
      <AppFooter v-if="!isSpecialEventRoute" />
      <ClientOnly>
        <ConsentBanner v-if="!isSpecialEventRoute" />
      </ClientOnly>
    </div>
    
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()

// Checks if the current page belongs to the events section
const isSpecialEventRoute = computed(() => {
  return route.path.startsWith('/events')
})

// Computes true only if the path has more than one segment
const shouldShowBreadcrumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  return segments.length > 1
})
</script>