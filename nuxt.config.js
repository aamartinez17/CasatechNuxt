import { fileURLToPath, URL } from 'node:url'
// Note: Ensure this path is correct for Nuxt 4 (usually root or ./assets/...)
import { allPosts } from './assets/data/ArticleData.js'

export default defineNuxtConfig({
  // 1. THE NUXT 4 FIX: Tells Nuxt to use the modern engine behaviors
  compatibilityDate: '2026-03-20',

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || 'https://ggfnaxteqqcsmybodusd.supabase.co',
      supabaseKey: process.env.SUPABASE_KEY || '', // Your public anon key
      tenantId: process.env.NUXT_PUBLIC_TENANT_ID || ''
    }
  },

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
    'swiper/css/bundle',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // 3. VITE 7 OPTIMIZATION (Crucial for entry.js errors)
  vite: {
    optimizeDeps: {
      include: ['@vueuse/motion', '@vueuse/core', '@vueuse/shared'],
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
    transpile: [
      '@vueuse/motion', 
      '@vueuse/core', 
      '@vueuse/shared',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons'
    ]
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
})