import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin((nuxtApp) => {
  // Registers the plugin so the Server doesn't panic
  nuxtApp.vueApp.use(MotionPlugin)

  // You can still run client-only logic here if needed
  if (import.meta.client) {
    // Logic that only runs in the browser
  }
})