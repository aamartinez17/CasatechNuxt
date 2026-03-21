export default defineNuxtConfig({
  // 1. Tell Nuxt to load the Tailwind module
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  // 2. Tell Nuxt where your global CSS file lives
  css: [
    '~/assets/css/main.css'
  ],
  // ... any other config you had (like build ID, etc.)
})