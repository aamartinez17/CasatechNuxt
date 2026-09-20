<template>
  <div class="home-view relative min-h-screen bg-slate-950 text-white">
    <!-- PERSISTENT GLOBAL 3D BACKGROUND -->
    <GlobalParticleBackground />

    <!-- FOREGROUND HOMEPAGE CONTENT -->
    <div class="relative z-10">
      <HomeHero />
      <LogoCarousel :logos="clientLogos" />
      <HomeProfitSection />
      <DividerBinary />
      <HomePortfolioCTA />
      <!-- <HomeServices /> -->
      <!-- <HomeProcess /> -->
      <HomeAuthority />
      <HomeClosing />
      <!-- <DiagnosticTest /> -->
    </div>
  </div>
</template>

<script setup>
import { clientLogos } from '@/assets/data/PartnerData.js';
import GlobalParticleBackground from '@/components/GlobalParticleBackground.vue';
</script>