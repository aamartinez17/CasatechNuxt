<script setup>
import ToolHero from '~/components/tools/roof-estimator/ToolHero.vue'
import ToolArchitectureFlow from '~/components/tools/roof-estimator/ToolArchitectureFlow.vue'
import RoofEstimatorWidget from '~/components/tools/roof-estimator/RoofEstimatorWidget.vue'
import TechStackExplainer from '~/components/tools/roof-estimator/TechStackExplainer.vue'
import ToolLeadCapture from '~/components/tools/roof-estimator/ToolLeadCapture.vue'

useHead({
  title: 'Autonomous Aerial Roof Estimator Lab - Casatech LLC',
  meta: [
    { 
      name: 'description', 
      content: 'Explore how Casatech combines Google Solar API, satellite geometry, and computer vision to calculate true roof surfaces and pitches remotely.' 
    }
  ]
})
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-white mt-20 md:mt-24">
    <ToolHero />
    <ToolArchitectureFlow />
    <RoofEstimatorWidget />
    <TechStackExplainer />
    <ToolLeadCapture />
  </main>
</template>