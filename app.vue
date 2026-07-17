<template>
  <div class="relative min-h-screen bg-slate-50 text-slate-800 selection:bg-secondary/20">
    
    <!-- FIXED AMBIENT BACKGROUND (LIGHT THEME) -->
    <!-- pointer-events-none ensures it never interferes with clicks or input fields -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <!-- Outer canvas: Crisp, bright slate backing matching your global body design -->
      <div class="absolute inset-0 bg-[#f8fafc]"></div>
      
      <!-- Inner animated orb: Slowly morphs and flows behind your cards on scroll -->
      <div class="absolute inset-0 w-full h-full filter blur-[100px] md:blur-[140px] opacity-90 animate-scroll-bg"></div>
    </div>

    <!-- MAIN INTERACTIVE INTERFACE (Renders cleanly over the top) -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main class="flex-grow">
        <NuxtPage />
      </main>
      <AppFooter />
      <ClientOnly>
        <ConsentBanner />
      </ClientOnly>
    </div>
    
  </div>
</template>