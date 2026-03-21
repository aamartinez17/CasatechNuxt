<template>
  <div class="thank-you-view">
    <PageHeader 
      title="Thank You!"
      subtitle="Your message has been sent. We'll be in touch soon."
      backgroundImage="/" 
    />

    <section class="page-section text-center">
      <div class="container">
        <p class="lead">I'll be in touch with you as soon as possible.</p>
        <NuxtLink :to="homePath" class="btn btn-brand-primary btn-lg mt-4">
          <i class="fas fa-home me-2"></i>
          Return to Home Page
        </NuxtLink>
      </div>
    </section>
    </div>
</template>

<script setup>
// import { useI18n } from 'vue-i18n';
// const { t, locale } = useI18n();

// --- ADD DYNAMIC PATHS FOR SIDEBAR ---
const homePath = computed(() => ('/'));

</script>

<style scoped>

.page-section {
  padding: var(--spacing-xl) 0;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.btn-brand-primary {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 1px solid var(--color-primary);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
  padding: 0.75rem 1.5rem;
}
.btn-brand-primary:hover {
  background-color: color-mix(in srgb, var(--color-primary), black 20%);
  border-color: color-mix(in srgb, var(--color-primary), black 20%);
}
</style>