// src/composables/useCookieConsent.js

export const useCookieConsent = () => {
  // useCookie is reactive and works on both Server and Client.
  // We set a long maxAge (1 year) so users aren't asked constantly.
  const consentCookie = useCookie('casatech_consent', {
    maxAge: 60 * 60 * 24 * 365,
    watch: true
  });

  // If the cookie exists and is 'true', the user has consented.
  const hasConsented = computed(() => consentCookie.value === 'true');

  const acceptCookies = () => {
    consentCookie.value = 'true';
    console.log('✅ Consent Granted: Initializing JS Modules...');
  };

  return {
    hasConsented,
    acceptCookies
  };
};