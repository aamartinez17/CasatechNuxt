<template>
  <div>
    <Navbar />
    <main>
      <NuxtPage />
    </main>
    <Footer />
    <ClientOnly>
      <CookieBanner />
    </ClientOnly>
  </div>
</template>
<style>
/* We use the '~/' alias, which Nuxt's <style> block understands.
  This imports your main.css file globally.
*/
@import '~/assets/main.css';
</style>