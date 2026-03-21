<template>
  <footer class="bg-primary text-on-dark pt-16 pb-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Section: 4-Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        <!-- Column 1: Brand & UVP -->
        <div class="flex flex-col">
          <NuxtLink to="/" class="group flex items-center mb-6">
            <!-- 
              LCP/Performance Choice: Text-based logo for instant rendering. 
              If using an image, ensure it has a white bg-rounded wrapper as per your previous style.
            -->
            <span class="text-2xl font-heading font-bold text-on-dark group-hover:text-secondary transition-fast">
              Casatech<span class="text-secondary group-hover:text-white">LLC</span>
            </span>
          </NuxtLink>
          <p class="text-sm text-muted leading-relaxed mb-4">
            Bridging the gap between enterprise-grade technology and growing local businesses. 
            Fully bilingual (English/Español) IT infrastructure and high-performance Vue.js web development.
          </p>
          <p class="text-secondary font-bold text-sm tracking-wide">
            Se Habla Español
          </p>
        </div>

        <!-- Column 2: Solutions (SEO Keyword Links) -->
        <nav aria-label="Footer Solutions">
          <h5 class="text-sm font-semibold text-on-dark uppercase tracking-widest mb-6">
            Solutions
          </h5>
          <ul class="space-y-4">
            <li>
              <NuxtLink to="/services" class="text-sm text-muted hover:text-secondary transition-fast">
                Managed IT & Cybersecurity
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="text-sm text-muted hover:text-secondary transition-fast">
                Custom Web Development
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="text-sm text-muted hover:text-secondary transition-fast">
                Cloud Integrations
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/article" class="text-sm text-muted hover:text-secondary transition-fast">
                B2B Local SEO
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Column 3: Company -->
        <nav aria-label="Footer Company">
          <h5 class="text-sm font-semibold text-on-dark uppercase tracking-widest mb-6">
            Company
          </h5>
          <ul class="space-y-4">
            <li><NuxtLink to="/about" class="text-sm text-muted hover:text-secondary transition-fast">About Casatech</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="text-sm text-muted hover:text-secondary transition-fast">Client Success Stories</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-sm text-muted hover:text-secondary transition-fast">Executive Insights</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-sm text-muted hover:text-secondary transition-fast">Book an Audit</NuxtLink></li>
          </ul>
        </nav>

        <!-- Column 4: Contact & Local NAP (Crucial for Local SEO) -->
        <div>
          <h5 class="text-sm font-semibold text-on-dark uppercase tracking-widest mb-6">
            Contact & Locations
          </h5>
          <address class="not-italic text-sm text-muted space-y-3">
            <div class="flex items-start">
              <span class="mr-3 text-secondary">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span>
                Primary: New Haven, CT<br />
                Also serving: Harrisonburg, VA
              </span>
            </div>
            <div class="pt-2">
              <a href="tel:+12038848244" class="block text-xl font-bold text-on-dark hover:text-secondary transition-fast">
                (203) 884-8244
              </a>
              <a href="mailto:info@casatechllc.com" class="block mt-1 hover:text-secondary transition-fast">
                info@casatechllc.com
              </a>
            </div>
          </address>
        </div>
      </div>

      <!-- Bottom Sub-Footer -->
      <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
        <p>
          &copy; {{ new Date().getFullYear() }} Casatech LLC. All Rights Reserved.
        </p>
        <nav class="flex flex-wrap justify-center gap-6">
          <NuxtLink to="/privacy-policy" class="hover:text-secondary transition-fast">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-secondary transition-fast">Terms of Service</NuxtLink>
          <NuxtLink to="/accessibility" class="hover:text-secondary transition-fast">Accessibility</NuxtLink>
          <a href="/sitemap.xml" target="_blank" class="hover:text-secondary transition-fast">Sitemap</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
/**
 * Note: We've removed social media icons to reduce "bleed points." 
 * For B2B, the primary goal is a Phone Call or Email, not a Facebook like.
 */
</script>

<style scoped>
/* 
  Relying 100% on Tailwind Utility classes. 
  The 'text-muted' and 'text-on-dark' classes should map to your 
  predefined CSS variables in your main.css.
*/
</style>