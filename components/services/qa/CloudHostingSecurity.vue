<!-- components/services/qa/CloudHostingSecurity.vue -->
<template>
  <div class="space-y-12 lg:space-y-16 w-full">
    
    <!-- Question 01: Edge CDN vs Traditional VPS Hosting -->
    <article 
      id="edge-vs-vps" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        01 // Global Availability
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        Why deploy to global serverless edge networks instead of traditional single-server VPS hosting?
      </h2>

      <!-- Widescreen 2-Column Split: Direct Answer + Strategic Context -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 mb-8 items-stretch">
        <div class="lg:col-span-7 p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm flex flex-col justify-center">
          <span class="text-xs font-mono uppercase text-secondary font-bold tracking-wider mb-2">Direct Answer</span>
          <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
            <strong>Direct Answer:</strong> Traditional VPS hosting relies on a single geographical server, creating a single point of failure (SPOF) and causing high network latency for distant users. Serverless edge networks (such as Cloudflare, Netlify, and Vercel) distribute your application across hundreds of worldwide data centers. Static assets and serverless functions execute within milliseconds of the visitor, guaranteeing 99.9% uptime even during regional cloud outages.
          </p>
        </div>

        <div class="lg:col-span-5 p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-center space-y-3">
          <h3 class="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">Sub-50ms Time to First Byte</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            By terminating SSL/TLS handshakes and serving pre-rendered pages directly from local edge nodes, Time to First Byte (TTFB) drops to single-digit milliseconds worldwide, preventing mobile drop-offs and elevating Core Web Vitals across all regions.
          </p>
        </div>
      </div>

      <!-- Comparison Matrix -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/40">
        <table class="min-w-full text-left text-xs sm:text-sm">
          <thead class="bg-slate-900 text-white font-mono uppercase text-[11px] sm:text-xs">
            <tr>
              <th class="p-4 sm:p-5">Operational Parameter</th>
              <th class="p-4 sm:p-5">Traditional VPS (Single Server)</th>
              <th class="p-4 sm:p-5 text-secondary">Casatech Distributed Edge Platform</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200/80 font-sans">
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Uptime & Outage Resilience</td>
              <td class="p-4 sm:p-5 text-rose-600 font-medium">Single failure point; data center reboots take your entire business down</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Anycast routing automatically reroutes traffic around degraded regions</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Global Response Latency (TTFB)</td>
              <td class="p-4 sm:p-5 text-rose-600 font-medium">200ms–800ms+ for visitors far from the origin server</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">&lt; 50ms worldwide via local edge data center caching</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Scaling Under Traffic Spikes</td>
              <td class="p-4 sm:p-5 text-slate-600">Fixed CPU/RAM thresholds; traffic bursts crash the server process</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Auto-scaling serverless compute absorbs viral spikes without server provisioning</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Maintenance Overhead</td>
              <td class="p-4 sm:p-5 text-slate-500">Manual OS security patches, firewall configurations, and certificate renewals</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Zero server maintenance; automated SSL renewal and managed security layers</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>

    <!-- Question 02: Multi-Stage CI/CD & Deploy Previews -->
    <article 
      id="cicd-previews" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-slate-50/80 text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        02 // Release Engineering
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How do automated branch previews and smoke tests prevent broken code from reaching production?
      </h2>

      <div class="p-6 rounded-2xl bg-white border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> We configure multi-stage CI/CD pipelines that trigger ephemeral preview deployments for every Git pull request. Each branch spins up an isolated, production-identical testing URL where stakeholder reviews and automated smoke tests run prior to merge. If a build test fails or regressions are caught, production remains untouched, and our platform supports one-click instant rollbacks to the prior working release.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold text-xs font-mono mb-3">01</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Ephemeral Preview URLs</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every feature branch deploys its own unique sandbox URL, eliminating staging collisions and allowing teams to review UI changes before merging.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs font-mono mb-3">02</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Automated Smoke Tests</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Build runners execute type checks, lint validations, and core route renders during compile time to catch silent JavaScript syntax bugs before deployment.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs font-mono mb-3">03</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Instant Atomic Rollbacks</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Deployments are atomic: previous versions stay preserved on CDN nodes, allowing traffic to revert instantly to the last healthy commit in under 2 seconds.
            </p>
          </div>
        </div>
      </div>
    </article>

    <!-- Question 03: Two-Key Architecture & Zero-Trust Security -->
    <article 
      id="two-key-security" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        03 // Zero-Trust Security
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        What is a "two-key" architecture, and how does it prevent public scripts from leaking backend secrets?
      </h2>

      <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> A two-key architecture separates public read-only credentials from sensitive backend secrets. The frontend browser bundle only receives a public, domain-locked key with read-restricted permissions. High-privilege actions (like database mutations or payment processing) execute exclusively on isolated serverless routes using private environment secrets. This prevents attackers from inspecting client bundles to extract master database or API keys.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm mb-3">✓</div>
          <h3 class="font-bold text-slate-900 text-base mb-2">Strict Edge CORS & Rate Limiting</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our edge layers enforce Cross-Origin Resource Sharing (CORS) rules alongside token-bucket IP rate limiters, blocking unauthorized third-party sites from scraping your API endpoints or executing denial-of-wallet spam attacks.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm mb-3">✓</div>
          <h3 class="font-bold text-slate-900 text-base mb-2">Encrypted Secret Vaults</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Stripe secret keys, database passwords, and OAuth tokens live inside encrypted infrastructure vaults that are never committed to Git or exposed across staging branches.
          </p>
        </div>
      </div>
    </article>

    <!-- Question 04: Continuous Telemetry & Error Monitoring -->
    <article 
      id="telemetry-monitoring" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-slate-50/80 text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        04 // Real-Time Observability
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How does continuous telemetry catch runtime errors and malicious bot attacks before clients notice?
      </h2>

      <div class="p-6 rounded-2xl bg-white border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> We configure unified observability combining client-side crash reporting (via Sentry) with serverless edge diagnostics. If a customer encounters a JavaScript exception or an API route experiences latency spikes, automated telemetry captures the exact stack trace and device context with instant engineer alerts. Edge analytics simultaneously distinguish between real user spikes and malicious bot traffic, mitigating threats in real time.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-900 text-base mb-2">Full Stack Trace Context</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Errors are captured with source-mapped line numbers, user action breadcrumbs, and network payload state, allowing developers to replicate and patch bugs in minutes instead of days.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-900 text-base mb-2">Automated Bot & Scraping Mitigation</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Machine-learning edge filters detect headless scrapers and credential-stuffing bots at the DNS layer, filtering malicious requests before they hit backend compute resources.
          </p>
        </div>
      </div>
    </article>

    <!-- Question 05: Modern Edge Hosting Stack (Cloudflare, Vercel, Netlify) -->
    <article 
      id="platform-stack" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        05 // Edge Infrastructure
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How do Cloudflare WAF, Vercel, and Netlify provide enterprise DDoS resilience for serverless web applications?
      </h2>

      <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> We deploy modern web platforms across Cloudflare, Vercel, and Netlify with integrated Web Application Firewalls (WAF) and unmetered Layer 3, 4, and 7 DDoS protection. Edge middleware validates incoming requests and handles route authorization at the CDN layer, shielding underlying serverless functions and databases from brute-force traffic floods.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-xs">
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-secondary font-bold uppercase block mb-1">Defense</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Managed Cloudflare WAF</h4>
          <p class="text-slate-600 leading-relaxed">Filters SQL injections, cross-site scripting (XSS), and zero-day threats before requests reach application code.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-sky-600 font-bold uppercase block mb-1">DDoS Shield</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Unmetered Mitigation</h4>
          <p class="text-slate-600 leading-relaxed">Absorbs multi-gigabit volumetric DDoS traffic without taking down your site or billing you for traffic surges.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-emerald-600 font-bold uppercase block mb-1">Routing</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Edge Middleware</h4>
          <p class="text-slate-600 leading-relaxed">Executes lightweight auth checks, redirects, and A/B test routing in under 5ms without cold starts.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-amber-600 font-bold uppercase block mb-1">Cost Control</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Smart Edge Caching</h4>
          <p class="text-slate-600 leading-relaxed">Static caching serves up to 90% of requests without executing serverless functions, keeping hosting costs minimal.</p>
        </div>
      </div>
    </article>

  </div>
</template>

<script setup>
// Automated FAQPage schema registration for AEO & GEO discovery
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://casatechllc.com/services/cloud-hosting-security#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Why deploy to global serverless edge networks instead of traditional single-server VPS hosting?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Traditional VPS hosting relies on a single geographical server, creating a single point of failure (SPOF) and causing high network latency for distant users. Serverless edge networks distribute your application across hundreds of worldwide data centers. Static assets and serverless functions execute within milliseconds of the visitor, guaranteeing 99.9% uptime even during regional cloud outages.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do automated branch previews and smoke tests prevent broken code from reaching production?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We configure multi-stage CI/CD pipelines that trigger ephemeral preview deployments for every Git pull request. Each branch spins up an isolated, production-identical testing URL where stakeholder reviews and automated smoke tests run prior to merge. If a build test fails or regressions are caught, production remains untouched, and our platform supports one-click instant rollbacks.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is a two-key architecture, and how does it prevent public scripts from leaking backend secrets?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A two-key architecture separates public read-only credentials from sensitive backend secrets. The frontend browser bundle only receives a public, domain-locked key with read-restricted permissions. High-privilege actions execute exclusively on isolated serverless routes using private environment secrets. This prevents attackers from inspecting client bundles to extract master database or API keys.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How does continuous telemetry catch runtime errors and malicious bot attacks before clients notice?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We configure unified observability combining client-side crash reporting with serverless edge diagnostics. If a customer encounters a JavaScript exception or an API route experiences latency spikes, automated telemetry captures the exact stack trace and device context with instant engineer alerts. Edge analytics simultaneously distinguish between real user spikes and malicious bot traffic.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do Cloudflare WAF, Vercel, and Netlify provide enterprise DDoS resilience for serverless web applications?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We deploy modern web platforms across Cloudflare, Vercel, and Netlify with integrated Web Application Firewalls (WAF) and unmetered Layer 3, 4, and 7 DDoS protection. Edge middleware validates incoming requests and handles route authorization at the CDN layer, shielding underlying serverless functions and databases from brute-force traffic floods.'
            }
          }
        ]
      })
    }
  ]
})
</script>