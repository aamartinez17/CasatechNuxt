import { fileURLToPath, URL } from 'node:url'
// Note: Ensure this path is correct for Nuxt 4 (usually root or ./assets/...)
import { allPosts } from './assets/data/ArticleData.js'

export default defineNuxtConfig({
  // 1. THE NUXT 4 FIX: Tells Nuxt to use the modern engine behaviors
  compatibilityDate: '2026-03-20',

  // 2. NUXT 4 ALIASING
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
    '~': fileURLToPath(new URL('./', import.meta.url))
  },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss'
  ],

  css: [
    './assets/main.css', 
    'swiper/css/bundle'
  ],

  // 3. VITE 7 OPTIMIZATION (Crucial for entry.js errors)
  vite: {
    optimizeDeps: {
      include: ['@vueuse/motion', '@vueuse/core', '@vueuse/shared'],
      exclude: ['vue3-recaptcha-v2']
    },
    server: {
      // Helps Vite 7 find linked modules in Windows/OneDrive environments
      fs: {
        strict: false
      }
    }
  },

  // 4. NUXT 4 TRANSPILATION
  build: {
    transpile: ['@vueuse/motion', '@vueuse/core', '@vueuse/shared']
  },

  // 5. MOTION DEFAULTS
  motion: {
    directives: {
      'pop-in': {
        initial: { opacity: 0, y: 100 },
        enter: { opacity: 1, y: 0 }
      }
    }
  },

  // Rest of your config
  sitemap: { hostname: 'https://casatechllc.com' },
  runtimeConfig: {
    public: {
      recaptchaSiteKey: process.env.VITE_RECAPTCHA_SITE_KEY 
    }
  }
})