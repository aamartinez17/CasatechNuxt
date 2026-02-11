<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" ref="navbarRef">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        <img src="/logos/casatech-logo-white-bg.png" alt="casatech llc logo" class="navbar-logo">
      </NuxtLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain"
        aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarMain" ref="navbarCollapseRef">
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/" @click="closeMenu">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about" @click="closeMenu">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/services" @click="closeMenu">Services</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/portfolio" @click="closeMenu">Portfolio</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/blog" @click="closeMenu">Blog</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact" @click="closeMenu">Contact</NuxtLink>
          </li>
        </ul>
        <div class="d-flex align-items-center navbar-cta-group">
          <a class="btn btn-brand-secondary me-3" href="tel:2038848244" role="button">
            (203) 884-8244
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// 2. Import onUnmounted
import { ref, onMounted, onUnmounted} from 'vue';
// import { Collapse } from 'bootstrap';
// import { useRouter, useRoute } from 'vue-router';

// const router = useRouter(); // Get the router
// const route = useRoute(); // Get the current route

// --- Menu Collapse Logic ---

// 3. Add a ref for the whole navbar element
const navbarRef = ref(null);
const navbarCollapseRef = ref(null);
let bsCollapse = null;

// Function to hide the menu when a link is clicked
function closeMenu() {
  if (bsCollapse) {
    bsCollapse.hide();
  }
}

// 4. NEW: Function to handle clicks outside the navbar
function handleClickOutside(event) {
  // If the navbar exists AND the click was NOT inside the navbar
  if (navbarRef.value && !navbarRef.value.contains(event.target)) {
    // And the menu is currently open...
    if (navbarCollapseRef.value.classList.contains('show')) {
      bsCollapse.hide();
    }
  }
}

if (process.client) {
  
  onMounted(() => {
    // We must wait for the component to mount AND for the
    // global 'bootstrap' object to be ready
    if (window.bootstrap && navbarCollapseRef.value) {
      bsCollapse = new window.bootstrap.Collapse(navbarCollapseRef.value, {
        toggle: false
      });
    }
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

}

</script>

<style scoped>
/* All styles are identical to the previous version. */
@import '@/assets/_variables.css';

/* * ===============================================
 * Navbar Custom Styles
 * ===============================================
 */

 .navbar-logo {
  max-height: 40px;
  width: auto;
  border-radius: 8px;
  padding: 3px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar-custom {
  background-color: var(--color-primary);
  box-shadow: var(--primary-shadow);
  padding-top: var(--spacing-sm);
  padding-bottom: var(--spacing-sm);
}

.navbar-brand img {
  max-height: 40px; /* Adjust this value as needed for your desired height */
  width: auto;     /* Maintain aspect ratio */
  border-radius: 8px; /* Subtle roundness. Adjust for more or less. */
  padding: 3px; /* A little padding inside the rounded border if desired */
  background-color: white; /* Explicitly set a white background */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow for definition */
}

.nav-link {
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-normal);
  transition: var(--transition-default);
  margin-right: var(--spacing-sm);
  border-bottom: 3px solid transparent;
  padding-bottom: calc(0.5rem - 3px);
}

.nav-link:hover,
.nav-link:focus {
  color: var(--color-text-light);
  border-bottom-color: transparent;
}

.nav-link.NuxtLink-exact-active {
  color: var(--color-text-light);
  font-weight: var(--font-weight-bold);
  border-bottom-color: var(--color-secondary);
}

/* --- CTAs & Toggles --- */
.btn-brand-secondary {
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border: 1px solid var(--color-secondary);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
}

.btn-brand-secondary:hover {
  background-color: transparent;
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

.btn-language-toggle {
  color: var(--color-text-light);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: var(--transition-default);
}

.btn-language-toggle:hover {
  color: var(--color-primary);
  background-color: var(--color-text-light);
  border-color: var(--color-text-light);
}

/* --- Mobile Toggler Icon --- */
.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.2);
}

/* .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.85%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%svg%3e");
} */

/* --- Spacing on Mobile --- */
@media (max-width: 991.98px) {
  .navbar-cta-group {
    padding-top: var(--spacing-md);
    padding-bottom: var(--spacing-sm);
    align-items: flex-start !important;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .nav-link {
    padding-bottom: 0.5rem;
    border-bottom: none;
  }

  .nav-link.NuxtLink--active {
    color: var(--color-secondary);
    border-bottom: none;
  }
}
</style>