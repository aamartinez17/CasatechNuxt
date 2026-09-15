<!-- app.vue (or layouts/default.vue) -->
<template>
  <div class="relative min-h-screen bg-slate-50 text-slate-800 selection:bg-secondary/20 pt-20 sm:pt-24">
    
    <!-- FIXED AMBIENT BACKGROUND (LIGHT THEME) -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div class="absolute inset-0 bg-[#f8fafc]"></div>
      <div class="absolute inset-0 w-full h-full filter blur-[100px] md:blur-[140px] opacity-90 animate-scroll-bg"></div>
    </div>

    <!-- MAIN INTERACTIVE INTERFACE -->
    <div class="relative z-10 flex flex-col min-h-screen">
      
      <!-- Smart Hide/Show Navbar Wrapper -->
      <div 
        class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out"
        :class="{ '-translate-y-full': !isNavbarVisible, 'translate-y-0': isNavbarVisible }"
      >
        <Navbar />
      </div>
      
      <main class="flex-grow">
        <!-- Global Breadcrumbs Wrapper: Only shows on deep subroutes (path segments > 1) -->
        <div v-if="shouldShowBreadcrumbs" class="w-full bg-gradient-to-r from-secondary/5 via-secondary/5 to-transparent border-y border-secondary/10 -mt-2 pb-1">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
            <AppBreadcrumbs />
          </div>
        </div>

        <NuxtPage />
      </main>

      <AppFooter />
      <ClientOnly>
        <ConsentBanner />
      </ClientOnly>
    </div>
    
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const route = useRoute()

const isNavbarVisible = ref(true)
let lastScrollY = 0

const handleScroll = () => {
  if (!import.meta.client) return
  const currentScrollY = window.scrollY

  // Always show navbar near the very top of the page (< 50px)
  if (currentScrollY < 50) {
    isNavbarVisible.value = true
  } else if (currentScrollY > lastScrollY) {
    // Scrolling down -> Hide navbar
    isNavbarVisible.value = false
  } else {
    // Scrolling up -> Show navbar
    isNavbarVisible.value = true
  }

  lastScrollY = currentScrollY
}

onMounted(() => {
  if (import.meta.client) {
    lastScrollY = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})

// Computes true only if the path has more than one segment (e.g., /services/foo is true, but /, /about, /services are false)
const shouldShowBreadcrumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  return segments.length > 1
})
</script>