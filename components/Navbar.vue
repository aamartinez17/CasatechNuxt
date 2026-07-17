<template>
  <!-- Semantic Header -->
  <header class="fixed top-0 w-full z-50 flex flex-col shadow-sm bg-white/80 backdrop-blur-md border-b border-gray-100">
    
    <!-- Top Bar (Eyebrow Banner) -->
    <div class="bg-primary text-slate-300 text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-8 hidden sm:flex justify-between items-center">
      <div class="font-body font-medium tracking-wide flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
        Let's build something beautiful together | Now welcoming new design partners
      </div>
      <div class="flex items-center">
        <a href="tel:2038848244" 
           class="font-bold text-white hover:text-secondary transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded p-1"
           title="Call Casatech">
          <font-awesome-icon icon="fa-solid fa-phone" class="text-xs" />
          (203) 884-8244
        </a>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav ref="navbarRef" class="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative z-50">
      
      <!-- Logo Container -->
      <NuxtLink to="/" 
                class="flex-shrink-0 transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded"
                title="Casatech LLC - Custom Web Design"
                @click="closeMenu">
        <img src="/logos/casatech-transparent-bg.png" 
             alt="Casatech LLC Logo" 
             class="h-9 w-auto">
      </NuxtLink>

      <!-- Desktop Links (Modularly Rendered) -->
      <ul class="hidden lg:flex space-x-8 items-center m-0 p-0">
        <li v-for="link in navLinks" :key="link.path">
          <NuxtLink :to="link.path" class="nav-desktop-link group">
            <font-awesome-icon :icon="link.icon" class="nav-icon mr-1.5 opacity-60 group-hover:text-secondary transition-colors" />
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Desktop Conversion Call-to-Action -->
      <div class="hidden lg:block">
        <NuxtLink to="/contact" 
                  class="group inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-heading font-bold py-2.5 px-6 rounded shadow-soft transition-all duration-200 hover:-translate-y-0.5">
          Get Started
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-xs transform group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

      <!-- Mobile Hamburger Button -->
      <button @click.stop="toggleMenu"
              type="button" 
              class="lg:hidden text-primary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded p-2 transition-colors relative z-50"
              aria-controls="mobile-menu" 
              :aria-expanded="isMenuOpen.toString()">
        <span class="sr-only">Open main menu</span>
        <font-awesome-icon :icon="isMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'" class="h-6 w-6" />
      </button>
    </nav>

    <!-- Slide-in Mobile Drawer Overlay -->
    <ClientOnly>
      <!-- Backdrop Shadow -->
      <div 
        v-if="isMenuOpen" 
        class="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        @click="closeMenu"
      ></div>

      <!-- Drawer Panel -->
      <div 
        id="mobile-menu"
        class="lg:hidden fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl border-l border-gray-100 z-40 flex flex-col p-6 transition-transform duration-300 transform"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <!-- Top gap pushing items below mobile header bar layout height -->
        <div class="h-16"></div>

        <!-- Phone & Primary CTAs inside Drawer -->
        <div class="flex flex-col gap-3 mb-6">
          <a href="tel:2038848244" class="text-primary font-bold text-center py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <font-awesome-icon icon="fa-solid fa-phone" class="text-secondary" />
            (203) 884-8244
          </a>
          <NuxtLink to="/contact" @click="closeMenu" class="bg-cta hover:bg-cta-hover text-white text-center font-heading font-bold py-3 rounded-lg shadow-soft transition-colors">
            Start A Design Project
          </NuxtLink>
        </div>

        <hr class="border-gray-100 mb-6" />

        <!-- Mobile Links (Rendered Modularly) -->
        <ul class="flex flex-col space-y-2 m-0 p-0 overflow-y-auto flex-1">
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink :to="link.path" @click="closeMenu" class="mobile-nav-link">
              <font-awesome-icon :icon="link.icon" class="text-secondary w-5" />
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </ClientOnly>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 1. Modular Navigation Links (Easily update, add, or swap pages here!)
const navLinks = [
  { label: 'Home', path: '/', icon: 'fa-solid fa-palette' },
  { label: 'Services', path: '/web-design', icon: 'fa-solid fa-laptop-code' },
  { label: 'Portfolio', path: '/portfolio', icon: 'fa-solid fa-folder-open' },
  { label: 'About', path: '/about', icon: 'fa-solid fa-user' },
  { label: 'Insights', path: '/insights', icon: 'fa-solid fa-book-open' },
];

const isMenuOpen = ref(false);
const navbarRef = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Auto-close side drawer on window resize if layout becomes desktop width
const handleResize = () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* Scoped classes to keep layout lightweight */
.nav-desktop-link {
  @apply text-slate-600 font-body font-semibold hover:text-secondary transition-colors duration-200 py-2 px-1 text-sm xl:text-base flex items-center;
}

/* Active Class Highlight (Applied automatically by NuxtLink router match) */
.router-link-exact-active {
  @apply text-secondary font-bold;
}

.mobile-nav-link {
  @apply flex items-center gap-3 py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 hover:text-secondary rounded-lg transition-colors;
}

/* Specific active styling for Mobile link states */
.mobile-nav-link.router-link-exact-active {
  @apply bg-slate-50 text-secondary font-semibold;
}
</style>