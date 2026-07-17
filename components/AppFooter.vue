<template>
  <!-- Premium Dark Footer with New Top Gradient Border -->
  <footer class="relative border-gradient-top bg-slate-950 text-slate-300 pt-16 pb-8 overflow-hidden">
    
    <!-- Subtle Background Glow -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Section: 4-Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        <!-- Column 1: Brand & Strategic UVP -->
        <div class="flex flex-col">
          <NuxtLink to="/" class="group flex items-center mb-6">
            <span class="text-2xl font-heading font-bold text-white group-hover:text-secondary transition-colors">
              Casatech<span class="text-secondary group-hover:text-white">LLC</span>
            </span>
          </NuxtLink>
          <p class="text-sm text-slate-400 leading-relaxed mb-4">
            We build high-performance, custom websites that turn clicks into loyal clients. Combining striking, tailored web design with clean modern code to scale your brand.
          </p>
          <div class="inline-flex items-center gap-2 text-secondary font-bold text-sm tracking-wide">
            <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            Se Habla Español
          </div>
        </div>

        <!-- Column 2: Studio Services -->
        <nav aria-label="Footer Services">
          <h5 class="text-sm font-semibold text-white uppercase tracking-widest mb-6">
            Services
          </h5>
          <ul class="space-y-4">
            <li>
              <NuxtLink to="/web-design" class="text-sm text-slate-400 hover:text-secondary transition-colors">
                Custom Web Design
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/web-design" class="text-sm text-slate-400 hover:text-secondary transition-colors">
                E-Commerce Stores
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/web-design" class="text-sm text-slate-400 hover:text-secondary transition-colors">
                Web App Engineering
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/web-design" class="text-sm text-slate-400 hover:text-secondary transition-colors">
                SEO & Brand Identity
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Column 3: Studio Profile -->
        <nav aria-label="Footer Company">
          <h5 class="text-sm font-semibold text-white uppercase tracking-widest mb-6">
            Our Studio
          </h5>
          <ul class="space-y-4">
            <li>
              <NuxtLink to="/about" class="text-sm text-slate-400 hover:text-secondary transition-colors">
                About Casatech
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/portfolio" class="text-sm text-slate-400 hover:text-secondary transition-colors">
                Explore Portfolio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/insights" class="text-sm text-slate-400 hover:text-secondary transition-colors">
                Creative Insights
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-sm text-slate-400 hover:text-secondary transition-colors">
                Start a Project
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Column 4: Local NAP Info (Optimized for Web SEO) -->
        <div>
          <h5 class="text-sm font-semibold text-white uppercase tracking-widest mb-6">
            Get in Touch
          </h5>
          <address class="not-italic text-sm text-slate-400 space-y-4">
            <div class="flex items-start gap-3">
              <!-- Replaced map marker with free-solid faHouseChimney component -->
              <font-awesome-icon icon="fa-solid fa-house-chimney" class="text-secondary mt-1 text-sm" />
              <span>
                <strong>Primary Studio:</strong> New Haven, CT<br />
                <strong>Regional Consults:</strong> Harrisonburg, VA
              </span>
            </div>
            <div class="pt-2 border-t border-slate-800/60">
              <a href="tel:+12038848244" class="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-secondary transition-colors">
                <font-awesome-icon icon="fa-solid fa-phone" class="text-xs text-secondary" />
                (203) 884-8244
              </a>
              <a href="mailto:info@casatechllc.com" class="block mt-1 hover:text-secondary text-slate-400 transition-colors">
                info@casatechllc.com
              </a>
            </div>
          </address>
        </div>
      </div>

      <!-- Bottom Sub-Footer Bar -->
      <div class="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>
          &copy; {{ new Date().getFullYear() }} Casatech LLC. All Rights Reserved.
        </p>
        <nav class="flex flex-wrap justify-center gap-6">
          <NuxtLink to="/privacy-policy" class="hover:text-secondary transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-secondary transition-colors">Terms of Service</NuxtLink>
          <NuxtLink to="/accessibility" class="hover:text-secondary transition-colors">Accessibility</NuxtLink>
          <a href="/sitemap.xml" target="_blank" class="hover:text-secondary transition-colors">Sitemap</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Fully optimized for Web Design. Social media links are omitted to focus entirely on on-page conversion goals.
</script>

<style scoped>
/* 
  Leverages 100% standard Tailwind utility spacing.
  Gradient behavior is driven globally from your updated utilities block in main.css!
*/
</style>