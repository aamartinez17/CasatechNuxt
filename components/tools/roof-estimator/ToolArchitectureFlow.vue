<template>
  <section class="py-20 bg-slate-950 border-b border-slate-800 text-white relative overflow-hidden">
    <!-- Subtle Ambient Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-secondary font-mono text-xs uppercase tracking-widest bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full">
          Pipeline Architecture
        </span>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mt-4 mb-4">
          Under the Hood: Multi-API Synthesis
        </h2>
        <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
          Standard vision models cannot infer scale without reference anchors. We orchestrate raw building geometry, pitch vectors, and vision intelligence into a single automated pipeline.
        </p>
      </div>

      <!-- 4-Stage Interactive Pipeline Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

        <!-- STAGE 1: Geocoding & Coordinate Normalization -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 100, type: 'spring', stiffness: 200 } }"
          class="bg-slate-900/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-secondary/40 transition-colors"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">01. INGEST</span>
              <font-awesome-icon icon="globe" class="text-slate-500 text-lg" />
            </div>
            <h3 class="text-lg font-heading font-bold text-white mb-2">Places & Geocoding</h3>
            <p class="text-slate-400 text-xs leading-relaxed mb-4">
              Parses the raw address string into clean, normalized rooftop latitude and longitude coordinates, isolating the exact structural parcel.
            </p>
          </div>
          <div class="bg-slate-950 border border-slate-800/80 rounded p-2.5 font-mono text-[11px] text-slate-400">
            <span class="text-secondary">Input:</span> "123 Elm St..."<br/>
            <span class="text-secondary">Output:</span> lat, lng, place_id
          </div>
        </div>

        <!-- STAGE 2: Google Solar API Insights -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, type: 'spring', stiffness: 200 } }"
          class="bg-slate-900/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-secondary/40 transition-colors"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-xs font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">02. GEOMETRY</span>
              <font-awesome-icon icon="cubes" class="text-slate-500 text-lg" />
            </div>
            <h3 class="text-lg font-heading font-bold text-white mb-2">Solar API Vectors</h3>
            <p class="text-slate-400 text-xs leading-relaxed mb-4">
              Pulls LiDAR-derived building footprint data: individual roof segment facets, pitch angles, azimuth bearings, and flat unadjusted square meterage.
            </p>
          </div>
          <div class="bg-slate-950 border border-slate-800/80 rounded p-2.5 font-mono text-[11px] text-slate-400">
            <span class="text-cyan-400">Solar Data:</span> pitchDegrees, azimuth<br/>
            <span class="text-cyan-400">Facets:</span> roofSegmentStats[]
          </div>
        </div>

        <!-- STAGE 3: Multimodal Vision Inspection -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 300, type: 'spring', stiffness: 200 } }"
          class="bg-slate-900/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-secondary/40 transition-colors"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-xs font-bold text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded">03. VISION AI</span>
              <font-awesome-icon icon="wand-magic-sparkles" class="text-slate-500 text-lg" />
            </div>
            <h3 class="text-lg font-heading font-bold text-white mb-2">Satellite & Street AI</h3>
            <p class="text-slate-400 text-xs leading-relaxed mb-4">
              Static multi-angle captures are passed to a vision model to detect material types (architectural vs 3-tab), obstructions (skylights, chimneys), and overhanging trees.
            </p>
          </div>
          <div class="bg-slate-950 border border-slate-800/80 rounded p-2.5 font-mono text-[11px] text-slate-400">
            <span class="text-indigo-400">Detected:</span> Shingle (Architectural)<br/>
            <span class="text-indigo-400">Obstacles:</span> 1 Chimney, 2 Vents
          </div>
        </div>

        <!-- STAGE 4: Math Engine & Proposal Formulation -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 400, type: 'spring', stiffness: 200 } }"
          class="bg-slate-900/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-secondary/40 transition-colors"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="font-mono text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">04. FORMULATION</span>
              <font-awesome-icon icon="server" class="text-slate-500 text-lg" />
            </div>
            <h3 class="text-lg font-heading font-bold text-white mb-2">Nuxt Trade Engine</h3>
            <p class="text-slate-400 text-xs leading-relaxed mb-4">
              Calculates sloped surface area multipliers, converts sq ft into trade squares (100 sq ft = 1 square), and applies customizable waste contingency margins.
            </p>
          </div>
          <div class="bg-slate-950 border border-slate-800/80 rounded p-2.5 font-mono text-[11px] text-slate-400">
            <span class="text-emerald-400">Output:</span> 28.4 Squares<br/>
            <span class="text-emerald-400">Waste (+15%):</span> 32.66 Squares
          </div>
        </div>

      </div>

      <!-- Data Flow Legend Banner -->
      <div class="mt-12 p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Security: Server-Side Proxied Endpoints (Zero Client API Key Leakage)</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-secondary"></span>
          <span>Response Latency: ~1.8s Aggregated Execution</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Presentational component explaining the multi-API technical architecture flow
</script>