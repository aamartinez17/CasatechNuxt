<template>
  <footer class="footer-custom text-white pt-5 pb-4">
    <div class="container">
      <div class="row">
        
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <router-link to="/" class="footer-logo-link mb-3">
            <img src="/logos/casatech-logo-white-bg.png" alt="Casatech LLC logo" class="footer-logo">
          </router-link>
          
          <p class="footer-text">Modern tech solutions for local business.</p>
          <p class="fw-bold text-accent">Se Habla Español</p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="footer-heading">Quick Links</h5>
          <ul class="list-unstyled">
            <div class="row">
            <div class="col-4">
            <li class="mb-2"><router-link to="/" class="footer-link">Home</router-link></li>
            <li class="mb-2"><router-link to="/about" class="footer-link">About</router-link></li>
            <li class="mb-2"><router-link to="/services" class="footer-link">Services</router-link></li>
            </div>
            <div class="col-4">
            <li class="mb-2"><router-link to="/portfolio" class="footer-link">Portfolio</router-link></li>
            <li class="mb-2"><router-link to="/blog" class="footer-link">Blog</router-link></li>
            <li class="mb-2"><router-link to="/contact" class="footer-link">Contact</router-link></li>
            </div>
            </div>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="footer-heading">Contact Us</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <i class="fas fa-map-marker-alt me-2"></i>New Haven, CT & Harrisonburg, VA
            </li>
            <li class="mb-2">
              <a href="tel:2038848244" class="footer-link">
                <i class="fas fa-phone me-2"></i>(203) 884-8244
              </a>
            </li>
            <li class="mb-2">
              <a href="mailto:info@casatechllc.com" class="footer-link">
                <i class="fas fa-envelope me-2"></i>info@casatechllc.com
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h5 class="footer-heading">Follow Us</h5>
          <div class="social-icons">
            <a href="https://linkedin.com/company/casatech-llc" class="social-icon me-3" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <!-- <a href="#" class="social-icon me-3" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a> -->
            <a href="https://www.facebook.com/casatechllc/" class="social-icon me-3" aria-label="Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.yelp.com/biz/casatech-new-haven" target="_blank" class="social-icon me-3" aria-label="Yelp">
              <i class="fab fa-yelp"></i>
            </a>
            
          </div>
        </div>
      </div>

      <hr class="footer-divider mt-4 mb-3">
      <div class="row">
      <div class="col-12 text-center">
        <p class="small mb-0">
          &copy; {{ new Date().getFullYear() }} Casatech LLC. All Rights Reserved.
          <span class="mx-2">|</span>
          <router-link to="/privacy-policy" class="footer-link small">Privacy Policy</router-link>
          <span class="mx-2">|</span>
            <a href="/sitemap.xml" target="_blank" class="footer-link small">Sitemap</a>
        </p>
      </div>
    </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
// const { t, locale } = useI18n();

// DYNAMIC PATHS (like in Navbar)
// const homePath = computed(() => (locale.value === 'es' ? '/es/' : '/'));
// const contactPath = computed(() => (locale.value === 'es' ? '/es/contact' : '/contact'));
// const servicesPath = computed(() => (locale.value === 'es' ? '/es/services' : '/services'));
// const aboutPath = computed(() => (locale.value === 'es' ? '/es/about' : '/about'));
// const portfolioPath = computed(() => (locale.value === 'es' ? '/es/portfolio' : '/portfolio'));
// const blogPath = computed(() => (locale.value === 'es' ? '/es/blog' : '/blog'));

</script>

<style scoped>
@import '@/assets/_variables.css';

.footer-custom {
  background-color: var(--color-primary);
}

.footer-heading {
  font-family: var(--font-family-headings);
  color: var(--color-secondary);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

.footer-text {
  color: rgba(255, 255, 255, 0.85);
}

.text-accent {
    color: var(--color-accent);
}

.footer-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: var(--transition-default);
}

.footer-link:hover {
  color: var(--color-text-light);
  text-decoration: underline;
}

/* Icon list for contact */
.list-unstyled li {
  color: rgba(255, 255, 255, 0.85);
}

.social-icon {
  font-size: 1.75rem;
  color: var(--color-text-light);
  transition: var(--transition-default);
}

.social-icon:hover {
  color: var(--color-secondary);
  transform: translateY(-2px);
}

.footer-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.small {
  color: rgba(255, 255, 255, 0.7);
}

/* === NEW STYLES FOR FOOTER LOGO === */
.footer-logo-link {
  display: inline-block; /* Allows margin-bottom to work */
}

.footer-logo {
  max-height: 100px; /* A good size for the footer */
  width: auto;
  background-color: #ffffff; /* White background */
  border-radius: 8px; /* Rounded edges */
  padding: 4px; /* A little padding */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: var(--transition-default);
}

.footer-logo:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}
</style>