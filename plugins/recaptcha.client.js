// plugins/recaptcha.client.js

import { install } from "vue3-recaptcha-v2";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(install, {
    // Use the .env variable, NOT a hard-coded string
    sitekey: nuxtApp.$config.public.recaptchaSiteKey,
  });
});