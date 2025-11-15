// src/composables/useCookieConsent.js
import { ref, onMounted } from 'vue';

// 1. Create a "singleton" ref.
//    We MUST initialize it to 'false' so that
//    server and client are identical on first render.
const hasConsented = ref(false);

export function useCookieConsent() {

  // 2. onMounted() only runs in the browser.
  // This will check localStorage AFTER hydration,
  // preventing a mismatch.
  onMounted(() => {
    hasConsented.value = localStorage.getItem('cookie_consent') === 'true';
  });

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    hasConsented.value = true;
  };

  return {
    hasConsented,
    acceptCookies
  };
}