<template>
  <article class="min-h-screen flex items-center justify-center bg-bg-light px-4">
    <div class="fixed top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mt-48 pointer-events-none"></div>
    <div class="fixed bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 pointer-events-none"></div>

    <section 
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }"
      class="max-w-2xl w-full bg-white rounded-3xl shadow-soft p-8 md:p-16 text-center relative z-10 border border-slate-100"
    >
      <div class="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-success/20">
        <svg class="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 class="text-4xl md:text-5xl font-heading font-extrabold text-heading mb-6 tracking-tight">
        Request <span class="text-secondary">Received.</span>
      </h1>
      
      <p class="text-lg md:text-xl text-body mb-10 leading-relaxed">
        Thank you for reaching out to **Casatech LLC**. Your technical inquiry has been routed to our team. 
        We typically provide a personal follow-up within <span class="text-primary font-bold">one business hour</span>.
      </p>

      <div class="bg-bg-light rounded-2xl p-6 mb-12 border border-slate-200 text-left">
        <h3 class="text-sm font-bold text-primary uppercase tracking-widest mb-3">What happens next?</h3>
        <ul class="space-y-3 text-sm text-secondary">
          <li class="flex items-start">
            <span class="mr-3 text-success">●</span> 
            Check your inbox for a confirmation email.
          </li>
          <li class="flex items-start">
            <span class="mr-3 text-success">●</span> 
            Alex will review your infrastructure goals personally.
          </li>
        </ul>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <NuxtLink 
          to="/" 
          class="w-full sm:w-auto bg-primary hover:bg-bg-dark text-white font-heading font-bold py-4 px-10 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Return Home
        </NuxtLink>

        <NuxtLink 
          to="/insights" 
          class="text-primary hover:text-secondary font-bold inline-flex items-center transition-colors group"
        >
          Explore IT Insights
          <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </NuxtLink>
      </div>
    </section>
  </article>
</template>

<script setup>
// SEO Setup
useHead({
  title: 'Thank You | Casatech LLC',
  meta: [{ name: 'robots', content: 'noindex' }] // Prevent search engines from indexing the thank you page
});
</script>

<style scoped>
/* No custom CSS needed! Tailwind handles it all. */
</style>