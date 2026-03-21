<template>
  <div>
    <Navbar />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
    <ClientOnly>
      <ConsentBanner />
    </ClientOnly>
  </div>
</template>
