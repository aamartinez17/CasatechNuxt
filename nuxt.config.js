import { fileURLToPath, URL } from 'node:url'
// import { defineConfig } from 'vite'
import { allPosts } from './assets/data/BlogData.js' // Use relative path

const blogRoutes = allPosts.map(post => `/blog/${post.slug}`)

// https://vite.dev/config/
export default defineNuxtConfig({

  css: [
    './assets/main.css', // This is also correct
    'bootstrap/dist/css/bootstrap.min.css',
    'swiper/css/bundle',
  ],

  sitemap: {
    hostname: 'https://casatechllc.com',
    // We don't need 'dynamicRoutes' anymore. 
    // The module is smart and will find all your pages.
  },

  app: {
    head: {
      script: [
        { 
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', 
          tagPosition: 'bodyClose' 
        }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' 
        },
        { 
          rel: 'stylesheet', 
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' 
        }
      ]
    }
  },

  modules: [
    '@nuxtjs/sitemap',
  ],

  features: {
    inlineStyles: false
  },
  
  optimizeDeps: {
    exclude: [
      'vue3-recaptcha-v2'
    ]
  },

  runtimeConfig: {
    public: {
      // This reads VITE_RECAPTCHA_SITE_KEY from your .env file
      recaptchaSiteKey: process.env.VITE_RECAPTCHA_SITE_KEY 
    }
  },
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})