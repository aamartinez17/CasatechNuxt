import { useHead } from '@unhead/vue'; // Make sure to import this if not auto-imported
import { useRoute } from 'vue-router';

export function usePageMeta(pageData) {
  const route = useRoute();

  useHead(() => {
    // 1. Get the data or use an empty object to prevent errors
    const data = pageData.value || {};
    
    const baseUrl = 'https://casatechllc.com';
    
    // 2. Define Defaults (The Safety Net)
    // If specific data is missing, these will be used instead.
    const title = data.title || 'Casatech LLC | Web Design & IT Services';
    const description = data.description || 'Bilingual, tech-focused solutions for small businesses in New Haven and beyond.';
    
    // 3. Image Logic
    // If data.image exists, use it. Otherwise, force the default OG image.
    const ogImage = data.image 
      ? `${baseUrl}${data.image}` 
      : `${baseUrl}/images/casatechllc-og-image.png`;

    const cleanPath = data.path || route.path;
    const canonicalUrl = `${baseUrl}${cleanPath}`;

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Casatech LLC",
      "url": "https://casatechllc.com/",
      "logo": "https://casatechllc.com/logos/casatech-transparent-bg.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-203-884-8244",
        "contactType": "Customer Service"
      }
    };

    return {
      title: title,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: description },
        // Open Graph (Used by iMessage, Android, Facebook, LinkedIn)
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:image', content: ogImage },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter (Used by X/Twitter and some other apps)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage }
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl },
        { rel: 'alternate', hreflang: 'en', href: canonicalUrl },
        { rel: 'alternate', hreflang: 'x-default', href: canonicalUrl }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(organizationSchema)
        }
      ]
    };
  });
}