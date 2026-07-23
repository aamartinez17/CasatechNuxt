import { fileURLToPath, URL } from 'node:url'
import { allPosts } from './assets/data/ArticleData.js'

export default defineNuxtConfig({
  // 1. Modern engine behavior
  compatibilityDate: '2026-03-20',

  // 🌟 TOP-LEVEL ROUTE RULES (Tells Nuxt to skip static SSR pre-baking for /portfolio)
  routeRules: {
    '/portfolio': { ssr: false } // Renders client-side: fixes Netlify build AND pulls live DB data instantly on page load
  },

  // 2. RUNTIME CONFIG (Strictly for environment variables)
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || 'https://ggfnaxteqqcsmybodusd.supabase.co',
      supabaseKey: process.env.SUPABASE_KEY || '',
      tenantId: process.env.NUXT_PUBLIC_TENANT_ID || ''
    }
  },

  // 3. NUXT ALIASING
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

  // 4. VITE 7 OPTIMIZATION
  vite: {
    optimizeDeps: {
      include: ['@vueuse/motion', '@vueuse/core', '@vueuse/shared'],
    },
    server: {
      fs: {
        strict: false
      }
    }
  },

  // 5. NUXT TRANSPILATION
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

  // 6. MOTION DEFAULTS
  motion: {
    directives: {
      'pop-in': {
        initial: { opacity: 0, y: 100 },
        enter: { opacity: 1, y: 0 }
      }
    }
  },

  sitemap: { hostname: 'https://casatechllc.com' },
})