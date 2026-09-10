<template>
  <section class="py-24 bg-slate-950 border-t border-b border-slate-800 text-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16">
        <span class="text-secondary font-mono text-xs uppercase tracking-widest bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full">
          System Architecture & Standards
        </span>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-white mt-4 mb-4">
          Why This Architecture Matters for Enterprise Tools
        </h2>
        <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
          Building client-facing automated utilities requires more than stitching third-party APIs together. Here is why we architected this pipeline using Nuxt server engine proxies, zero-trust credential handling, and sub-second edge compute.
        </p>
      </div>

      <!-- 4-Pillar Engineering Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        <!-- Pillar 1: Server-Side Proxies & Zero Credential Leaks -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 100, type: 'spring', stiffness: 200 } }"
          class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors"
        >
          <div class="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-6">
            <font-awesome-icon icon="shield-halved" class="text-xl" />
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3">
            Server-Side Key Isolation & Zero-Trust
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">
            Commercial APIs like Google Solar and Maps charge per query. Exposing API keys directly in client-side JavaScript leaves them vulnerable to extraction, quota depletion, and unauthorized scraping.
          </p>
          <ul class="space-y-2 text-xs font-mono text-slate-300">
            <li class="flex items-center gap-2">
              <span class="text-emerald-400">✔</span>
              <span>All external calls routed through Nuxt Nitro server routes</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-emerald-400">✔</span>
              <span>Keys stored exclusively in server environment variables</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-emerald-400">✔</span>
              <span>Origin validation and CORS restrictions enforced</span>
            </li>
          </ul>
        </div>

        <!-- Pillar 2: Edge Rate-Limiting & Abuse Prevention -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, type: 'spring', stiffness: 200 } }"
          class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors"
        >
          <div class="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6">
            <font-awesome-icon icon="server" class="text-xl" />
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3">
            Edge Throttling & In-Memory Caching
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">
            Public utilities must balance instant accessibility with cost predictability. We integrate IP-based bucket throttling and transient caching for repeated geographic queries.
          </p>
          <ul class="space-y-2 text-xs font-mono text-slate-300">
            <li class="flex items-center gap-2">
              <span class="text-cyan-400">✔</span>
              <span>Token-bucket rate limiting per IP address</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-cyan-400">✔</span>
              <span>LRU cache for high-density parcel coordinate lookups</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-cyan-400">✔</span>
              <span>Prevents bill shocks and robotic query cycling</span>
            </li>
          </ul>
        </div>

        <!-- Pillar 3: Vite Engine & Reactive Hydration -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 300, type: 'spring', stiffness: 200 } }"
          class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors"
        >
          <div class="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-6">
            <font-awesome-icon icon="laptop-code" class="text-xl" />
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3">
            Nuxt & Vite Instant Hydration
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">
            Heavy single-page applications often choke under mathematical and visual rendering loads. Nuxt combines static shell generation with reactive Vue 3 composition modules.
          </p>
          <ul class="space-y-2 text-xs font-mono text-slate-300">
            <li class="flex items-center gap-2">
              <span class="text-emerald-400">✔</span>
              <span>Zero-bloat bundle size with tree-shaken SVG icons</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-emerald-400">✔</span>
              <span>Sub-second cold starts powered by Vite compilation</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-emerald-400">✔</span>
              <span>Reactive pitch multipliers recalculate instantly</span>
            </li>
          </ul>
        </div>

        <!-- Pillar 4: Deterministic Trade Calculations -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 400, type: 'spring', stiffness: 200 } }"
          class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors"
        >
          <div class="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
            <font-awesome-icon icon="network-wired" class="text-xl" />
          </div>
          <h3 class="text-xl font-heading font-bold text-white mb-3">
            Hybrid AI & Deterministic Math
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">
            AI models are prone to hallucinations when asked to perform raw geometric calculations. We treat AI as an observational classifier and rely on strict deterministic algorithms for measurements.
          </p>
          <ul class="space-y-2 text-xs font-mono text-slate-300">
            <li class="flex items-center gap-2">
              <span class="text-amber-400">✔</span>
              <span>Vision AI classifies material & surface obstructions</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-amber-400">✔</span>
              <span>Strict trigonometry calculates 3D pitch multipliers</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-amber-400">✔</span>
              <span>Audit-ready outputs that contractors can verify</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Tech Stack Badges Strip -->
      <div class="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-wrap items-center justify-between gap-6">
        <div>
          <span class="text-xs font-mono text-slate-400 uppercase tracking-wider block">Target Stack Standard</span>
          <span class="text-white font-heading font-bold text-sm sm:text-base">Modern High-Throughput TypeScript Web Architecture</span>
        </div>
        <div class="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
          <span class="px-3 py-1 bg-slate-800 rounded-lg border border-slate-700">Nuxt 4 / Vue 3</span>
          <span class="px-3 py-1 bg-slate-800 rounded-lg border border-slate-700">Nitro Engine</span>
          <span class="px-3 py-1 bg-slate-800 rounded-lg border border-slate-700">Tailwind CSS</span>
          <span class="px-3 py-1 bg-slate-800 rounded-lg border border-slate-700">Google Solar API</span>
          <span class="px-3 py-1 bg-slate-800 rounded-lg border border-slate-700">Multimodal Vision</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Presentational component explaining architectural and security rationale
</script>