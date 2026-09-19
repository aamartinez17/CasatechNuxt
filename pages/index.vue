<template>
  <div class="home-view">
    <HomeHero />
    <LogoCarousel :logos="clientLogos" />
    <HomeProfitSection />
    <HomePortfolioCTA />
    <!-- <HomeServices /> -->
    <!-- <HomeProcess /> -->
    <HomeAuthority />
    <HomeClosing />
    <!-- <DiagnosticTest /> -->

  </div>
</template>

<script setup>
import { clientLogos} from '@/assets/data/PartnerData.js';
</script>