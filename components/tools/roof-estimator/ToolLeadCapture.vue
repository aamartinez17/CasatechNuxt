<template>
  <section class="py-20 sm:py-24 bg-bg-light text-slate-900 relative overflow-hidden border-t border-slate-200/80" id="custom-tool-consultation">
    <!-- Ambient Soft Brand Glow -->
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 blur-[140px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left: Pitch & Business Value (7 Cols) -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono font-semibold uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Tailored Enterprise Engineering
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Need Custom Field Automation or AI Portals Built for Your Operation?
          </h2>

          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            Generic SaaS subscriptions force your crew into rigid, one-size-fits-all workflows while leaking monthly overhead. We architect proprietary internal software, automated estimation pipelines, and client-facing portals configured to your exact pricing formulas and trade logic.
          </p>

          <!-- Core Capability Highlights -->
          <div class="grid sm:grid-cols-2 gap-4 pt-2">
            <div class="p-4 bg-white border border-slate-200/90 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="text-secondary font-bold font-mono text-sm mb-1">01. Direct Senior Engineering</div>
              <p class="text-slate-600 text-xs leading-relaxed">
                Work directly with the software engineer designing your system. No account reps or middle-management delays.
              </p>
            </div>

            <div class="p-4 bg-white border border-slate-200/90 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="text-secondary font-bold font-mono text-sm mb-1">02. Zero Vendor Lock-In</div>
              <p class="text-slate-600 text-xs leading-relaxed">
                You own 100% of your codebase, intellectual property, and custom data pipelines outright.
              </p>
            </div>

            <div class="p-4 bg-white border border-slate-200/90 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="text-secondary font-bold font-mono text-sm mb-1">03. Automated Takeoffs & CRM Sync</div>
              <p class="text-slate-600 text-xs leading-relaxed">
                Seamlessly pipe aerial measurements and material calculations directly into JobNimbus, ServiceTitan, or custom databases.
              </p>
            </div>

            <div class="p-4 bg-white border border-slate-200/90 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="text-secondary font-bold font-mono text-sm mb-1">04. Cost-Capped Infrastructure</div>
              <p class="text-slate-600 text-xs leading-relaxed">
                Serverless architectures and secure server-side proxies ensure zero surprise billing or API credit leaks.
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Action Card / Direct Consultation Path (5 Cols) -->
        <div class="lg:col-span-5">
          <div class="bg-white border border-slate-200/90 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all relative">
            <div class="absolute -top-3 right-6 bg-cta text-white font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
              Open For Q3 / Q4 Projects
            </div>

            <h3 class="text-xl font-heading font-bold text-slate-900 mb-2">
              Architect Your Custom Solution
            </h3>
            <p class="text-slate-500 text-xs font-mono mb-6 leading-relaxed">
              Schedule an introductory technical consultation to evaluate your business workflows and discuss custom tooling feasibility.
            </p>

            <div class="space-y-4 font-mono text-xs mb-8">
              <div class="flex items-center gap-3 text-slate-700">
                <span class="text-emerald-600 font-bold">✓</span>
                <span>Feasibility review of your target data sources & APIs</span>
              </div>
              <div class="flex items-center gap-3 text-slate-700">
                <span class="text-emerald-600 font-bold">✓</span>
                <span>System architecture plan & milestone roadmap</span>
              </div>
              <div class="flex items-center gap-3 text-slate-700">
                <span class="text-emerald-600 font-bold">✓</span>
                <span>Fixed-scope delivery with full code ownership</span>
              </div>
            </div>

            <NuxtLink
              to="/contact"
              class="w-full inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta/90 active:scale-[0.99] text-white font-heading font-bold text-sm py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Schedule Technical Consultation</span>
              <font-awesome-icon icon="arrow-right" class="text-xs" />
            </NuxtLink>

            <div class="mt-4 text-center">
              <span class="text-[11px] font-mono text-slate-400">
                Direct response within 24 business hours.
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Presentational lead capture component for enterprise tooling consultations
</script>