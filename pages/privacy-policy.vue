<template>
  <article class="pt-32 pb-24 bg-bg-light min-h-screen">
    <!-- Header Section -->
    <header class="max-w-3xl mx-auto px-6 mb-12 text-center" v-motion-fade>
      <h1 class="text-4xl md:text-5xl font-heading font-extrabold text-text-heading mb-4">
        Privacy Policy
      </h1>
      <p class="text-text-secondary font-medium uppercase tracking-widest text-sm">
        Effective Date: March 20, 2026
      </p>
      <div class="mt-6 h-1 w-20 bg-secondary mx-auto rounded-full"></div>
    </header>

    <!-- Content Section -->
    <section class="max-w-3xl mx-auto px-6 prose prose-slate prose-lg">
      <div class="bg-white p-8 md:p-12 rounded-2xl shadow-soft border border-gray-100">
        
        <p class="text-text-body leading-relaxed mb-8">
          At <strong class="text-text-primary">Casatech LLC</strong>, your privacy and corporate data security are our top priorities. This policy outlines how we handle information for our clients and partners seeking <strong>Secure Web Development in New Haven</strong> and professional <strong>B2B Tech Support Data Privacy</strong>.
        </p>

        <h2 class="text-2xl font-heading font-bold text-text-heading mt-10 mb-4">1. Information We Collect</h2>
        <p class="text-text-body mb-6">
          To provide high-tier <strong>IT Consultant Privacy Policy CT</strong> compliant services, we collect minimal, high-intent business information via our contact and audit request forms, including:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-text-body mb-8">
          <li>Full Name and Professional Title</li>
          <li>Company Name and Industry Type</li>
          <li>Corporate Email Address</li>
          <li>Business Phone Number</li>
          <li>Specific Technical Project or Infrastructure Requirements</li>
        </ul>

        <h2 class="text-2xl font-heading font-bold text-text-heading mt-10 mb-4">2. How We Use Your Information (Phone & SMS Clause)</h2>
        <div class="bg-bg-light p-6 rounded-xl border-l-4 border-cta mb-8">
          <p class="text-text-body font-medium leading-relaxed italic">
            "By submitting a contact form or requesting a technical audit on this website, you provide explicit consent for Casatech LLC to use your provided phone number to contact you via voice calls or SMS text messages. This communication is strictly limited to scheduling audits, providing technical support updates, responding to service inquiries, and project coordination. Standard message and data rates may apply."
          </p>
        </div>

        <h2 class="text-2xl font-heading font-bold text-text-heading mt-10 mb-4">3. Absolute "Zero Data Sharing" Guarantee</h2>
        <p class="text-text-primary font-bold mb-6">
          We do not sell, rent, trade, or otherwise share your personal or corporate data with any third parties under any circumstances.
        </p>
        <p class="text-text-body mb-8">
          Your information is never provided to third-party marketers, list brokers, or external agencies. All data remains within the secure Casatech LLC infrastructure for the sole purpose of fulfilling our professional engagement with your business.
        </p>

        <h2 class="text-2xl font-heading font-bold text-text-heading mt-10 mb-4">4. Data Security & Infrastructure</h2>
        <p class="text-text-body mb-8">
          We utilize enterprise-grade encryption and secure cloud infrastructure to protect your data from unauthorized access. As a technical consultancy, we apply the same rigorous security standards to our own internal data that we recommend to our clients.
        </p>

        <h2 class="text-2xl font-heading font-bold text-text-heading mt-10 mb-4">5. Your Rights & Data Control</h2>
        <p class="text-text-body mb-10">
          You may opt-out of SMS communications at any time by replying "STOP" to any message received. To request the complete deletion of your data from our active systems, please contact us directly at the information provided below.
        </p>

        <!-- Contact Block -->
        <footer class="pt-8 border-t border-gray-100 space-y-4">
          <h3 class="text-xl font-heading font-bold text-text-heading">Privacy Inquiries</h3>
          <div class="flex flex-col space-y-2">
            <a href="mailto:info@casatechllc.com" class="text-secondary font-bold hover:underline">info@casatechllc.com</a>
            <a href="tel:2038848244" class="text-text-primary font-bold hover:text-secondary transition-colors">(203) 884-8244</a>
          </div>
          <p class="text-sm text-text-muted italic pt-4">
            Casatech LLC | New Haven, CT & Harrisonburg, VA
          </p>
        </footer>
      </div>
    </section>

    <!-- Simple Navigation Back -->
    <div class="max-w-3xl mx-auto px-6 mt-12 text-center">
      <NuxtLink to="/" class="text-text-secondary hover:text-primary font-bold transition-colors">
        ← Return to Homepage
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
// SEO Metadata for the Privacy Page
useHead({
  title: 'Privacy Policy | Casatech LLC - B2B Data Security New Haven',
  meta: [
    { 
      name: 'description', 
      content: 'Casatech LLC Privacy Policy. We maintain a strict zero-data-sharing policy. Learn how we protect your corporate information and handle SMS/Phone consent.' 
    },
    { name: 'robots', content: 'noindex, follow' } // Legal pages often benefit from noindex to focus SEO on service pages
  ]
})
</script>

<style scoped>
/* Scanned Typography Optimization */
.prose {
  color: var(--color-text-body);
  max-width: none;
}

.prose h2 {
  color: var(--color-text-heading);
  letter-spacing: -0.025em;
}

.shadow-soft {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}
</style>