<template>
  <article class="pt-32 pb-24 bg-bg-light min-h-screen">
    <!-- Header Section -->
    <header class="max-w-4xl mx-auto px-6 mb-12" v-motion-fade>
      <nav class="mb-8">
        <NuxtLink to="/" class="text-secondary font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Home
        </NuxtLink>
      </nav>
      <h1 class="text-4xl md:text-5xl font-heading font-extrabold text-heading mb-4 leading-tight">
        Terms and Conditions of Service
      </h1>
      <p class="text-secondary font-medium uppercase tracking-widest text-sm border-l-4 border-secondary pl-4">
        Effective Date: March 20, 2026 | New Haven, CT
      </p>
    </header>

    <!-- Content Section -->
    <section class="max-w-4xl mx-auto px-6 prose prose-slate prose-lg">
      <div class="bg-white p-8 md:p-12 rounded-2xl shadow-soft border border-gray-100">
        
        <p class="text-body leading-relaxed mb-10 text-lg">
          Welcome to <strong class="text-primary">Casatech LLC</strong>. These Terms and Conditions constitute a legally binding agreement governing your access to our website and the engagement of our professional <strong>Managed IT Services in CT</strong> and <strong>Web Development in New Haven</strong>.
        </p>

        <!-- 1. Acceptance -->
        <h2 class="text-2xl font-heading font-bold text-heading mt-10 mb-4 flex items-center">
          <span class="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
          Acceptance of Terms
        </h2>
        <p class="text-body mb-8">
          By accessing this website or engaging Casatech LLC for technical consultancy, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are entering into this agreement on behalf of a company, you represent that you have the legal authority to bind that entity to these terms.
        </p>

        <!-- 2. Scope of Services -->
        <h2 class="text-2xl font-heading font-bold text-heading mt-10 mb-4 flex items-center">
          <span class="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
          Scope of IT & Web Services
        </h2>
        <p class="text-body mb-8">
          Casatech LLC provides high-tier technical solutions, including but not limited to <strong>B2B Tech Consulting Agreements</strong>, custom software engineering, and infrastructure management. Specific project deliverables, timelines, and costs shall be defined in a mutually executed <strong>Statement of Work (SOW)</strong>. In the event of a conflict between these Terms and an SOW, the SOW shall prevail for that specific engagement.
        </p>

        <!-- 3. Limitation of Liability -->
        <h2 class="text-2xl font-heading font-bold text-heading mt-10 mb-4 flex items-center">
          <span class="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
          Limitation of Liability
        </h2>
        <div class="bg-bg-light p-6 rounded-xl border border-gray-200 mb-8">
          <p class="text-body font-medium leading-relaxed uppercase text-sm mb-4">
            Critical Legal Notice for Operations Managers & Directors:
          </p>
          <p class="text-body leading-relaxed">
            To the maximum extent permitted by law, Casatech LLC shall not be held liable for any indirect, incidental, special, or consequential damages, including but not limited to loss of profits, data loss, or business interruption resulting from network downtime. Total aggregate liability for any claim arising out of our services is strictly capped at the total amount paid by the Client to Casatech LLC in the three (3) months immediately preceding the event giving rise to the claim.
          </p>
        </div>

        <!-- 4. Insurance & Custom Compliance (THE STRATEGIC CLAUSE) -->
        <h2 class="text-2xl font-heading font-bold text-heading mt-10 mb-4 flex items-center">
          <span class="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
          Insurance & Custom Compliance
        </h2>
        <p class="text-body mb-6">
          Casatech LLC operates under the professional limitations of liability outlined in Section 3. We recognize that certain enterprise-level partnerships may require specific commercial insurance thresholds.
        </p>
        <div class="bg-primary/5 p-6 rounded-xl border-l-4 border-primary mb-8">
          <p class="text-primary font-bold leading-relaxed italic">
            "Should a Client require Casatech LLC to carry bespoke commercial insurance policies—including specific limits of Cyber Liability, E&O, or Umbrella coverage—these requirements must be explicitly disclosed by the Client and agreed upon in writing within the SOW prior to the commencement of any work. Additional costs associated with bespoke compliance requests may be reflected in the project pricing. Absent this written agreement, the Client accepts the standard liability terms herein as sufficient for the engagement."
          </p>
        </div>

        <!-- 5. Intellectual Property Rights -->
        <h2 class="text-2xl font-heading font-bold text-heading mt-10 mb-4 flex items-center">
          <span class="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
          Intellectual Property Rights
        </h2>
        <p class="text-body mb-8">
          Unless otherwise stated in the SOW, all pre-existing code, tools, and methodologies remain the sole property of Casatech LLC. Intellectual Property rights for custom code developed specifically for a Client (e.g., custom Vue.js applications) shall transfer to the Client <strong>only upon receipt of final payment</strong> of all outstanding invoices. Casatech LLC retains a non-exclusive right to use generalized code snippets for future development.
        </p>

        <!-- 6. Governing Law -->
        <h2 class="text-2xl font-heading font-bold text-heading mt-10 mb-4 flex items-center">
          <span class="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">6</span>
          Governing Law & Jurisdiction
        </h2>
        <p class="text-body mb-10">
          This agreement shall be governed by and construed in accordance with the laws of the <strong>State of Connecticut</strong>. Any legal action or proceeding related to this agreement shall be brought exclusively in the courts located in New Haven County, Connecticut.
        </p>

        <!-- Contact Block -->
        <footer class="pt-8 border-t border-gray-100">
          <p class="text-sm text-muted mb-4">
            For legal or contract-related inquiries, please contact:
          </p>
          <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a href="mailto:info@casatechllc.com" class="text-secondary font-bold hover:underline">info@casatechllc.com</a>
            <span class="hidden md:inline text-gray-300">|</span>
            <a href="tel:2038848244" class="text-primary font-bold">(203) 884-8244</a>
          </div>
        </footer>
      </div>
    </section>
  </article>
</template>

<script setup>
/**
 * Casatech LLC - Terms and Conditions
 * 
 * Strategic Design Note: This page uses prose-slate to ensure maximum
 * readability for legal review while maintaining brand consistency.
 */
useHead({
  title: 'Terms of Service | Casatech LLC - B2B IT Consulting New Haven',
  meta: [
    { 
      name: 'description', 
      content: 'Standard Terms and Conditions for Casatech LLC. Professional Managed IT services, custom web development, and infrastructure consulting for CT businesses.' 
    },
    { name: 'robots', content: 'noindex, follow' }
  ]
})
</script>

<style scoped>
.shadow-soft {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

/* Ensure typography hierarchy matches the rest of the enterprise site */
.prose h2 {
  margin-top: 2.5rem;
  color: var(--color-text-heading);
}

.prose p {
  line-height: 1.8;
}
</style>