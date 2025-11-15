// plugins/aos.client.js
import AOS from 'aos';
import 'aos/dist/aos.css';

// This tells Nuxt to run AOS.init()
// only *after* the app is mounted in the browser
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50
    });
  });
});