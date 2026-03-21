<template>
  <main class="pt-32 pb-24 bg-bg-light min-h-screen">
    <!-- Header Section -->
    <header class="max-w-3xl mx-auto px-6 mb-16" v-motion-fade>
      <nav class="mb-8">
        <NuxtLink to="/" class="text-secondary font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform outline-none focus-visible:ring-2 focus-visible:ring-cta rounded">
          <svg class="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Home
        </NuxtLink>
      </nav>
      <h1 class="text-4xl md:text-5xl font-heading font-extrabold text-heading mb-4 leading-tight">
        Digital Accessibility Statement
      </h1>
      <p class="text-secondary text-lg leading-relaxed border-l-4 border-secondary pl-6">
        Casatech LLC is committed to ensuring digital inclusion and providing a high-performance, seamless technology experience for every user in Connecticut and beyond.
      </p>
    </header>

    <!-- Main Content Section -->
    <article class="max-w-3xl mx-auto px-6 prose prose-slate prose-lg">
      <div class="bg-white p-8 md:p-12 rounded-2xl shadow-soft border border-gray-100">
        
        <!-- 1. Our Commitment -->
        <section class="mb-12">
          <h2 class="text-2xl font-heading font-bold text-heading mb-4">1. Our Commitment to Inclusion</h2>
          <p class="text-body leading-relaxed">
            At Casatech LLC, we believe technology should be a bridge, not a barrier. We strive to provide a frictionless, 
            accessible experience for all users, regardless of physical ability, cognitive style, or assistive technology. 
            As a leader in <strong>ADA Compliant Web Design in Connecticut</strong>, our mission is to support the 
            diverse business landscape of New Haven by ensuring everyone can navigate our digital tools with dignity and ease.
          </p>
        </section>

        <!-- 2. Conformance Status -->
        <section class="mb-12 p-6 bg-bg-light rounded-xl border-l-4 border-primary">
          <h2 class="text-xl font-heading font-bold text-heading mb-3">2. Conformance Status</h2>
          <p class="text-body leading-relaxed">
            The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve 
            accessibility for people with disabilities. Casatech LLC is continually optimizing our user experience 
            to conform to the <strong>WCAG 2.2 Level AA</strong> standard.
          </p>
        </section>

        <!-- 3. Technical Specifications -->
        <section class="mb-12">
          <h2 class="text-2xl font-heading font-bold text-heading mb-4">3. Technical Specifications</h2>
          <p class="text-body mb-6">
            Accessibility on the Casatech platform relies on the following technologies to work with the particular 
            combination of web browsers and any assistive technologies or plugins installed on your computer:
          </p>
          <ul class="list-disc pl-6 space-y-3 text-body mb-6">
            <li><strong>Semantic HTML5:</strong> For proper document structure and screen reader navigation.</li>
            <li><strong>WAI-ARIA:</strong> To provide additional context to complex interface elements.</li>
            <li><strong>High Contrast CSS:</strong> Maintaining a minimum contrast ratio of 4.5:1 for all text.</li>
            <li><strong>Minimum Target Sizes:</strong> Ensuring all interactive elements meet or exceed a 24x24 CSS pixel target area for touch and pointer accuracy.</li>
          </ul>
        </section>

        <!-- 4. Continuous Improvement & Bilingual Support -->
        <section class="mb-12">
          <h2 class="text-2xl font-heading font-bold text-heading mb-4">4. Continuous Improvement & Bilingual Support</h2>
          <p class="text-body leading-relaxed">
            Digital accessibility is an ongoing journey. As a <strong>WCAG 2.2 Web Developer in New Haven</strong>, 
            we conduct regular automated and manual audits to identify and resolve potential barriers. Furthermore, 
            to support the diverse workforces of our partners, our technical support and digital documentation are 
            available in both <strong>English and Español</strong>, ensuring language is never a barrier to technical proficiency.
          </p>
        </section>

        <!-- 5. Feedback & Contact Information -->
        <section class="pt-8 border-t border-gray-100">
          <h2 class="text-2xl font-heading font-bold text-heading mb-4">5. Feedback & Assistance</h2>
          <p class="text-body mb-6">
            We welcome your feedback on the accessibility of our site. If you encounter any barriers or require assistance 
            navigating our <strong>Accessible IT Solutions</strong>, please contact our lead consultant directly:
          </p>
          <div class="flex flex-col space-y-4">
            <div class="flex items-center gap-3">
              <span class="font-bold text-primary">Phone:</span>
              <a href="tel:2038848244" class="text-secondary font-bold hover:underline italic">(203) 884-8244</a>
            </div>
            <div class="flex items-center gap-3">
              <span class="font-bold text-primary">Email:</span>
              <a href="mailto:info@casatechllc.com" class="text-secondary font-bold hover:underline">info@casatechllc.com</a>
            </div>
          </div>
        </section>
      </div>
    </article>
  </main>
</template>

<script setup>
/**
 * Casatech LLC - Accessibility Statement
 * 
 * This component is designed with a high-readability prose layout.
 * It uses semantic HTML5 tags and high-contrast text to practice 
 * exactly what the statement preaches.
 */
useHead({
  title: 'Accessibility Statement | Casatech LLC - New Haven Web Compliance',
  meta: [
    { 
      name: 'description', 
      content: 'Casatech LLC is committed to digital inclusion. We strive for WCAG 2.2 Level AA compliance to provide accessible IT solutions for all Connecticut businesses.' 
    },
    { name: 'robots', content: 'noindex, follow' }
  ]
})
</script>

<style scoped>
.shadow-soft {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

/* Enhancing readability for long-form legal/compliance text */
.prose p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.prose h2 {
  color: var(--color-text-heading);
}

/* Visual cue for focus states to ensure keyboard accessibility */
a:focus-visible {
  outline: 2px solid var(--color-cta);
  outline-offset: 4px;
}
</style>