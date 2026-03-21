<template>
  <!-- Semantic HTML5 header for SEO -->
  <header class="fixed top-0 w-full z-50 flex flex-col shadow-soft bg-bg-light">
    
    <!-- Top Bar (Eyebrow) -->
    <div class="bg-bg-dark text-slate-400 text-sm py-2 px-4 sm:px-6 lg:px-8 hidden sm:flex justify-between items-center">
      <div class="font-body font-medium tracking-wide">
        Bilingual IT Support: English/Español | Serving New Haven & Beyond
      </div>
      <div class="flex items-center space-x-4">
        <a href="tel:2038848244" 
           class="font-bold hover:text-secondary transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded"
           title="New Haven, CT Tech Support">
          (203) 884-8244
        </a>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav ref="navbarRef" class="bg-bg-light px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center border-b border-gray-200">
      
      <!-- Logo -->
      <NuxtLink to="/" 
                class="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded"
                title="Casatech LLC - Enterprise Web Development"
                @click="closeMenu">
        <img src="/logos/casatech-logo-white-bg.png" 
             alt="Casatech LLC - Managed IT Services New Haven" 
             class="h-10 w-auto rounded-md shadow-sm p-1 bg-white">
      </NuxtLink>

      <!-- Desktop Links -->
      <ul class="hidden lg:flex space-x-8 items-center m-0 p-0">
        <li>
          <NuxtLink to="/web-design" class="text-text-main font-body font-medium hover:text-secondary transition-fast rounded px-1">
            Web Design
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/managed-it-infrastructure" class="text-text-main font-body font-medium hover:text-secondary transition-fast rounded px-1">
            Managed IT & Infrastructure
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/web-app" class="text-text-main font-body font-medium hover:text-secondary transition-fast rounded px-1">
            Custom Web Apps
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="text-text-main font-body font-medium hover:text-secondary transition-fast rounded px-1">
            About Casatech
          </NuxtLink>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <div class="hidden lg:block">
        <NuxtLink to="/contact" 
                  class="bg-cta hover:bg-cta-hover text-white font-heading font-bold py-2.5 px-6 rounded shadow-soft transition-fast">
          Book an IT Audit
        </NuxtLink>
      </div>

      <!-- Mobile Hamburger Toggle -->
      <button @click.stop="toggleMenu"
              type="button" 
              class="lg:hidden text-text-main hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded p-2"
              aria-controls="mobile-menu" 
              :aria-expanded="isMenuOpen.toString()">
        <span class="sr-only">Open main menu</span>
        <svg v-if="!isMenuOpen" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu Drawer (FIXED NESTING) -->
     
    <ClientOnly>
      <div v-if="isMenuOpen" 
          v-motion="'slide-in-top'"
          id="mobile-menu"
          class="lg:hidden origin-top bg-bg-light border-b border-gray-200 shadow-hover absolute w-full top-full left-0 flex flex-col z-40">
          <div class="p-4 border-b border-gray-200 bg-gray-50 flex flex-col gap-3">
            <a href="tel:2038848244" class="text-text-heading font-bold text-lg text-center py-2 border border-gray-300 rounded hover:bg-gray-100 transition-fast">
              📞 (203) 884-8244
            </a>
            <NuxtLink to="/contact" @click="closeMenu" class="bg-cta hover:bg-cta-hover text-white text-center font-heading font-bold py-3 rounded shadow-soft transition-fast">
              Book an IT Audit
            </NuxtLink>
          </div>

          <ul class="flex flex-col px-4 py-2 space-y-1 m-0">
            <li>
              <NuxtLink to="/web-design" @click="closeMenu" class="block py-3 text-text-main font-medium hover:text-secondary border-b border-gray-100">
                Web Design
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/managed-it-infrastructure" @click="closeMenu" class="block py-3 text-text-main font-medium hover:text-secondary border-b border-gray-100">
                Managed IT & Infrastructure
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/web-app" @click="closeMenu" class="block py-3 text-text-main font-medium hover:text-secondary border-b border-gray-100">
                Custom Web Apps
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" @click="closeMenu" class="block py-3 text-text-main font-medium hover:text-secondary">
                About Casatech
              </NuxtLink>
            </li>
          </ul>
        </div>
    </ClientOnly>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const navbarRef = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleClickOutside = (event) => {
  if (!isMenuOpen.value) return;
  const nav = navbarRef.value;
  const menu = document.getElementById('mobile-menu');
  if (nav && !nav.contains(event.target) && (!menu || !menu.contains(event.target))) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.router-link-exact-active {
  @apply text-secondary font-bold;
}
</style>