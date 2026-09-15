<!-- components/Navbar.vue -->
<template>
  <div>
    <!-- Semantic Header with Scroll Hide/Show Logic -->
    <header 
      class="fixed top-0 left-0 right-0 z-50 flex flex-col transition-transform duration-300 ease-in-out bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
      :class="{ '-translate-y-full': !isNavbarVisible, 'translate-y-0': isNavbarVisible }"
    >
      
      <!-- Top Bar (Eyebrow Banner) -->
      <div class="bg-primary text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 hidden sm:flex justify-between items-center">
        <div class="font-body font-medium tracking-wide flex items-center gap-2">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          Let's build something beautiful together | Now welcoming new design partners
        </div>
        <div class="flex items-center">
          <a href="tel:2038848244" 
             class="font-bold text-white hover:text-secondary transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded p-0.5"
             title="Call Casatech">
            <font-awesome-icon icon="fa-solid fa-phone" class="text-[10px]" />
            (203) 884-8244
          </a>
        </div>
      </div>

      <!-- Main Navigation Bar -->
      <nav ref="navbarRef" class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        
        <!-- Logo Container -->
        <NuxtLink to="/" 
                  class="flex-shrink-0 transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded"
                  title="Casatech LLC - Custom Web Design"
                  @click="closeMenu">
          <img src="/logos/casatech-transparent-bg.png" 
               alt="Casatech LLC Logo" 
               class="h-8 sm:h-9 w-auto">
        </NuxtLink>

        <!-- Desktop Links -->
        <ul class="hidden lg:flex space-x-1 xl:space-x-2 items-center m-0 p-0">
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink :to="link.path" class="nav-desktop-link">
              <font-awesome-icon :icon="link.icon" class="nav-icon mr-1.5 opacity-50 transition-colors" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Desktop Conversion Call-to-Action -->
        <div class="hidden lg:block">
          <NuxtLink to="/contact" 
                    class="group inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-heading font-bold text-sm py-2 px-5 rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5">
            Get Started
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-xs transform group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>

        <!-- Mobile Hamburger Button -->
        <button @click.stop="toggleMenu"
                type="button" 
                class="lg:hidden text-slate-800 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded p-2 transition-colors relative z-50"
                aria-controls="mobile-menu" 
                :aria-expanded="isMenuOpen.toString()">
          <span class="sr-only">Open main menu</span>
          <font-awesome-icon :icon="isMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'" class="h-6 w-6" />
        </button>
      </nav>
    </header>

    <!-- Slide-in Mobile Drawer Flow -->
    <ClientOnly>
      <!-- Backdrop Shadow -->
      <div 
        v-if="isMenuOpen" 
        class="lg:hidden fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-[55] transition-opacity duration-300"
        @click="closeMenu"
      ></div>

      <!-- Drawer Panel -->
      <div 
        id="mobile-menu"
        class="lg:hidden fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl border-l border-slate-100 z-[60] flex flex-col p-6 transition-transform duration-300 transform"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <!-- Drawer Header -->
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <NuxtLink to="/" 
                    class="flex-shrink-0"
                    @click="closeMenu">
            <img src="/logos/casatech-transparent-bg.png" 
                 alt="Casatech LLC Logo" 
                 class="h-7 w-auto">
          </NuxtLink>
          
          <button @click="closeMenu" 
                  type="button" 
                  class="text-slate-500 hover:text-secondary p-2 transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
                  aria-label="Close menu">
            <font-awesome-icon icon="fa-solid fa-times" class="h-5 w-5" />
          </button>
        </div>

        <!-- Phone & Primary CTAs inside Drawer -->
        <div class="flex flex-col gap-3 mb-6">
          <a href="tel:2038848244" class="text-primary font-bold text-xs text-center py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <font-awesome-icon icon="fa-solid fa-phone" class="text-secondary" />
            (203) 884-8244
          </a>
          <NuxtLink to="/contact" @click="closeMenu" class="bg-cta hover:bg-cta-hover text-white text-center font-heading font-bold text-xs py-3 rounded-xl shadow-sm transition-colors">
            Start A Design Project
          </NuxtLink>
        </div>

        <!-- Mobile Links -->
        <ul class="flex flex-col space-y-1.5 m-0 p-0 overflow-y-auto flex-1">
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink :to="link.path" @click="closeMenu" class="mobile-nav-link">
              <font-awesome-icon :icon="link.icon" class="text-secondary w-4" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navLinks = [
  { label: 'Home', path: '/', icon: 'fa-solid fa-palette' },
  { label: 'Services', path: '/services', icon: 'fa-solid fa-laptop-code' },
  { label: 'Portfolio', path: '/portfolio', icon: 'fa-solid fa-folder-open' },
  { label: 'About', path: '/about', icon: 'fa-solid fa-user' },
  { label: 'Insights', path: '/insights', icon: 'fa-solid fa-book-open' },
];

const isMenuOpen = ref(false);
const navbarRef = ref(null);
const isNavbarVisible = ref(true);
let lastScrollY = 0;

const handleScroll = () => {
  if (!import.meta.client) return
  const currentScrollY = window.scrollY

  // Always show navbar near the top of the page (< 40px)
  if (currentScrollY < 40) {
    isNavbarVisible.value = true
  } else if (currentScrollY > lastScrollY) {
    // Scrolling down -> Hide navbar
    isNavbarVisible.value = false
  } else {
    // Scrolling up -> Show navbar
    isNavbarVisible.value = true
  }

  lastScrollY = currentScrollY
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
};

onMounted(() => {
  if (import.meta.client) {
    lastScrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  }
});
</script>

<style scoped>
.nav-desktop-link {
  @apply text-slate-600 font-body font-medium hover:text-secondary transition-all duration-200 py-1.5 px-3 rounded-lg text-sm flex items-center hover:bg-slate-100/60;
}

.nav-desktop-link.router-link-active {
  @apply text-secondary font-bold bg-secondary/10;
}

.mobile-nav-link {
  @apply flex items-center gap-3 py-3 px-4 text-slate-700 font-medium text-sm hover:bg-slate-50 hover:text-secondary rounded-xl transition-colors;
}

.mobile-nav-link.router-link-active {
  @apply bg-slate-100 text-secondary font-bold;
}
</style>