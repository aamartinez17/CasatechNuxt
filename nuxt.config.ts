// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2026-03-20',

  routeRules: {
    '/portfolio': { ssr: false }
  },

  // Explicitly mapping environment variables so localhost client hydration reads them
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || 'https://ggfnaxteqqcsmybodusd.supabase.co',
      supabaseKey: process.env.SUPABASE_KEY || '',
      tenantId: process.env.NUXT_PUBLIC_TENANT_ID || ''
    }
  },

  site: {
    url: 'https://casatechllc.com'
  },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt' // ✅ FIXED: Correct VueUse Motion module path
  ],

  css: [
    './assets/main.css', 
    'swiper/css/bundle',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Motion Configuration
  motion: {
    directives: {
      'pop-in': {
        initial: { opacity: 0, y: 100 },
        enter: { opacity: 1, y: 0 }
      }
    }
  },

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons'
    ]
  }
})