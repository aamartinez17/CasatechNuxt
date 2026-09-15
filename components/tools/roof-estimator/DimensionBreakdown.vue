<!-- components/tools/roof-estimator/DimensionBreakdown.vue -->
<template>
  <div class="bg-primary border border-secondary rounded-2xl p-6 shadow-xl space-y-6">
    <!-- Header -->
    <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
      <div>
        <span class="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
          Formulaic Synthesis & AI Payload Audit
        </span>
        <h3 class="text-base font-heading font-bold text-white">
          Structural Dimension & Material Breakdown
        </h3>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono text-slate-400">Slope Multiplier:</span>
        <span class="font-mono text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20 px-2 py-0.5 rounded">
          {{ pitchMultiplier.toFixed(3) }}x
        </span>
      </div>
    </div>

    <!-- Core Metrics 4-Stat Strip -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div class="bg-white/5 border border-white/30 rounded-xl p-3.5">
        <span class="block text-[10px] font-mono text-white/80 uppercase">Footprint (Flat)</span>
        <span class="text-lg font-bold font-heading text-white mt-0.5 block">
          {{ Number(groundFootprintSqFt || 0).toLocaleString() }}
        </span>
        <span class="text-[10px] text-white/80 font-mono">Planar Sq Ft</span>
      </div>

      <div class="bg-cyan-400/5 border border-cyan-400/30 rounded-xl p-3.5">
        <span class="block text-[10px] font-mono text-cyan-400 uppercase">3D Pitch Area</span>
        <span class="text-lg font-bold font-heading text-cyan-400 mt-0.5 block">
          {{ trueRoofSqFt.toLocaleString() }}
        </span>
        <span class="text-[10px] text-cyan-400/80 font-mono">True Surface Sq Ft</span>
      </div>

      <div class="bg-secondary/5 border border-secondary/30 rounded-xl p-3.5">
        <span class="block text-[10px] font-mono text-secondary uppercase">Building Profile</span>
        <span class="text-lg font-bold font-heading text-secondary mt-0.5 block truncate">
          {{ buildingHeight }} ft
        </span>
        <span class="text-[10px] text-slate-400 font-mono">~{{ stories }} Stories Elevation</span>
      </div>

      <div class="border border-emerald-500/30 rounded-xl p-3.5 bg-emerald-500/5">
        <span class="block text-[10px] font-mono text-emerald-400 uppercase">Order Quantity</span>
        <span class="text-lg font-bold font-heading text-emerald-400 mt-0.5 block">
          {{ totalOrderSquares }}
        </span>
        <span class="text-[10px] text-emerald-400/80 font-mono">+{{ wastePercentage }}% Contingency</span>
      </div>
    </div>

    <!-- Detailed Facets & Material Takeoff Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-left font-mono text-xs border border-slate-800 rounded-xl overflow-hidden">
        <thead class="bg-slate-900 text-slate-400 border-b border-slate-800 text-[11px]">
          <tr>
            <th class="p-3">Specification Item</th>
            <th class="p-3">Field Measurement</th>
            <th class="p-3 text-right">Unit Takeoff</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/60 text-slate-300">
          
          <!-- Classified Material Row -->
          <tr class="hover:bg-slate-900/40 transition-colors bg-secondary/10">
            <td class="p-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>Classified Roof Material</span>
            </td>
            <td class="p-3 text-slate-300 font-sans font-semibold">{{ detectedMaterial }}</td>
            <td class="p-3 text-right text-secondary font-bold">AI Verified</td>
          </tr>

          <!-- Building Height & Stories Row -->
          <tr class="hover:bg-slate-900/40 transition-colors">
            <td class="p-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>Building Height & Elevation</span>
            </td>
            <td class="p-3 text-slate-400">Vertical span from ground to eave</td>
            <td class="p-3 text-right text-white font-bold">{{ buildingHeight }} ft (~{{ stories }} Stories)</td>
          </tr>

          <!-- Identified Penetrations Row -->
          <tr class="hover:bg-slate-900/40 transition-colors">
            <td class="p-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>Identified Obstacles & Vents</span>
            </td>
            <td class="p-3 text-slate-400 font-sans text-xs">
              {{ formattedObstacles }}
            </td>
            <td class="p-3 text-right text-white font-bold">Mapped</td>
          </tr>

          <!-- Pitch Ratio Row -->
          <tr class="hover:bg-slate-900/40 transition-colors">
            <td class="p-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>Roof Pitch Ratio & Degrees</span>
            </td>
            <td class="p-3 text-slate-400">{{ pitchDegrees }}° Incline angle</td>
            <td class="p-3 text-right text-white font-bold">{{ pitchRatio }}</td>
          </tr>

          <!-- Individual Facet Planes -->
          <tr class="hover:bg-slate-900/40 transition-colors">
            <td class="p-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>Individual Facet Planes</span>
            </td>
            <td class="p-3 text-slate-400">{{ valleys }} Valleys, {{ ridges }} Ridges mapped</td>
            <td class="p-3 text-right text-white font-bold">{{ facetsCount }} Planes</td>
          </tr>

          <!-- Contingency Scrap -->
          <tr class="hover:bg-slate-900/40 transition-colors">
            <td class="p-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>Contingency Scrap & Cuts</span>
            </td>
            <td class="p-3 text-slate-400">{{ wastePercentage }}% margin applied</td>
            <td class="p-3 text-right text-amber-400 font-bold">+{{ wasteSquaresAdded }} Squares</td>
          </tr>

          <!-- Shingle Bundle Count -->
          <tr class="hover:bg-slate-900/40 transition-colors bg-slate-900/20">
            <td class="p-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Estimated Shingle Bundle Count</span>
            </td>
            <td class="p-3 text-slate-400">Industry standard: 3 bundles / square</td>
            <td class="p-3 text-right text-emerald-400 font-bold">{{ bundleCount }} Bundles</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Regional Pricing & Formula Transparency Note -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <!-- Pricing Summary Box -->
      <div class="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
        <span class="text-secondary font-bold uppercase tracking-wider block mb-1 text-[10px]">Estimated Replacement Cost</span>
        <div class="flex justify-between items-center text-slate-300">
          <span>Architectural Asphalt:</span>
          <span class="font-bold text-white">${{ estimatedCostAsphalt.low.toLocaleString() }} – ${{ estimatedCostAsphalt.high.toLocaleString() }}</span>
        </div>
        <div class="flex justify-between items-center text-sky-300">
          <span>Standing-Seam Metal:</span>
          <span class="font-bold text-white">${{ estimatedCostMetal.low.toLocaleString() }} – ${{ estimatedCostMetal.high.toLocaleString() }}</span>
        </div>
        <p class="text-[10px] text-slate-500 pt-1 leading-normal font-sans">
          Includes material order quantity with +{{ wastePercentage }}% contingency margin for regional CT contractor labor.
        </p>
      </div>

      <!-- Mathematical Formula Note -->
      <div class="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
        <span class="text-cyan-400 font-bold uppercase tracking-wider block mb-1 text-[10px]">Takeoff Formula Transparency</span>
        <div class="flex justify-between items-center text-slate-300">
          <span>Flat Ground Footprint:</span>
          <span class="font-bold text-white">{{ Number(groundFootprintSqFt || 0).toLocaleString() }} sq ft</span>
        </div>
        <div class="flex justify-between items-center text-cyan-400">
          <span>Slope Factor ({{ pitchRatio }} Pitch):</span>
          <span class="font-bold">+{{ Math.round((pitchMultiplier - 1) * 100) }}% Surface</span>
        </div>
        <div class="flex justify-between items-center text-emerald-400 pt-1 border-t border-slate-800">
          <span>Actual 3D Roof Area:</span>
          <span class="font-bold text-xs">{{ trueRoofSqFt.toLocaleString() }} sq ft</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  groundFootprintSqFt: { type: [Number, String], default: 1850 },
  trueRoofArea: { type: [Number, String], default: 0 },
  pitchRatio: { type: String, default: '5:12' },
  pitchDegrees: { type: [Number, String], default: 21 },
  facetsCount: { type: [Number, String], default: 8 },
  ridges: { type: [Number, String], default: 3 },
  valleys: { type: [Number, String], default: 4 },
  wastePercentage: { type: [Number, String], default: 15 },
  detectedMaterial: { type: String, default: 'Architectural Shingle' },
  detectedObstacles: { type: [Array, String], default: () => [] },
  obstacles: { type: [Array, String], default: () => [] }, // Added support for alternate prop name
  buildingHeight: { type: [Number, String], default: 20 },
  buildingHeightFt: { type: [Number, String], default: 0 }, // Alternate fallback
  stories: { type: [Number, String], default: 2 },
  estimatedStories: { type: [Number, String], default: 0 } // Alternate fallback
})

// Resolve height & stories safely across variable naming conventions
const buildingHeight = computed(() => {
  return props.buildingHeightFt || props.buildingHeight || 20
})

const stories = computed(() => {
  return props.estimatedStories || props.stories || 2
})

// Dynamic calculation of slope multiplier from pitchRatio
const pitchMultiplier = computed(() => {
  const parts = String(props.pitchRatio || '5:12').split(':')
  if (parts.length !== 2) return 1.083
  const rise = parseFloat(parts[0]) || 5
  const run = parseFloat(parts[1]) || 12
  return Math.sqrt(1 + Math.pow(rise / run, 2))
})

const trueRoofSqFt = computed(() => {
  const passedArea = parseFloat(props.trueRoofArea)
  if (!isNaN(passedArea) && passedArea > 0) {
    return Math.round(passedArea)
  }
  const footprint = parseFloat(props.groundFootprintSqFt) || 1850
  return Math.round(footprint * pitchMultiplier.value)
})

const baseSquares = computed(() => (trueRoofSqFt.value / 100).toFixed(2))

const totalOrderSquares = computed(() => {
  const base = parseFloat(baseSquares.value) || 0
  const waste = parseFloat(props.wastePercentage) || 15
  const factor = 1 + (waste / 100)
  return (base * factor).toFixed(2)
})

const wasteSquaresAdded = computed(() => {
  const diff = parseFloat(totalOrderSquares.value) - parseFloat(baseSquares.value)
  return isNaN(diff) ? '0.00' : diff.toFixed(2)
})

const bundleCount = computed(() => {
  const order = parseFloat(totalOrderSquares.value) || 0
  return Math.ceil(order * 3)
})

// Unifies obstacles & detectedObstacles into a clean comma-separated list
const formattedObstacles = computed(() => {
  // Check props.detectedObstacles first, then props.obstacles, then fall back safely
  const rawList = (props.detectedObstacles && props.detectedObstacles.length > 0) 
    ? props.detectedObstacles 
    : (props.obstacles && props.obstacles.length > 0) 
      ? props.obstacles 
      : null

  if (Array.isArray(rawList)) {
    return rawList.join(', ')
  }
  if (typeof rawList === 'string' && rawList.trim().length > 0) {
    return rawList
  }
  return 'No obstacles mapped'
})

const estimatedCostAsphalt = computed(() => {
  const squares = parseFloat(totalOrderSquares.value) || 0
  return { low: Math.round(squares * 450), high: Math.round(squares * 600) }
})

const estimatedCostMetal = computed(() => {
  const squares = parseFloat(totalOrderSquares.value) || 0
  return { low: Math.round(squares * 950), high: Math.round(squares * 1300) }
})
</script>