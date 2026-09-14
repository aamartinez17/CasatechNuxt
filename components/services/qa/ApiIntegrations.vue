<!-- components/services/qa/ApiIntegrations.vue -->
<template>
  <div class="space-y-12 lg:space-y-16 w-full">
    
    <!-- Question 01: Resilient API Architecture & External Feeds -->
    <article 
      id="resilient-apis" 
      class="scroll-mt-24 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        01 // Architectural Durability
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How do you prevent third-party API rate limits and external provider outages from breaking your web application?
      </h2>

      <!-- Widescreen 2-Column Split: Direct Answer + Strategic Context -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 mb-8 items-stretch">
        <div class="lg:col-span-7 p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm flex flex-col justify-center">
          <span class="text-xs font-mono uppercase text-secondary font-bold tracking-wider mb-2">Direct Answer</span>
          <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
            <strong>Direct Answer:</strong> We isolate external connections behind server-side proxies equipped with circuit breakers, stale-while-revalidate caching, and token-bucket rate limiters. If a third-party vendor (like Google Maps or an AI provider) slows down or goes offline, the circuit breaker opens instantly to deliver cached responses or fallback states—ensuring your users never experience a frozen checkout or broken dashboard.
          </p>
        </div>

        <div class="lg:col-span-5 p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-center space-y-3">
          <h3 class="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">Zero Direct-to-Browser Calls</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Connecting browsers directly to third-party endpoints exposes your business to IP bans, quota spikes, and billing shock. Routing through a decoupled edge gateway lets us batch requests, throttle abusers, and keep your core app fast and responsive.
          </p>
        </div>
      </div>

      <!-- Comparison Matrix: Direct Client Calls vs Casatech Resilient Gateway -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/40">
        <table class="min-w-full text-left text-xs sm:text-sm">
          <thead class="bg-slate-900 text-white font-mono uppercase text-[11px] sm:text-xs">
            <tr>
              <th class="p-4 sm:p-5">Integration Factor</th>
              <th class="p-4 sm:p-5">Direct Client-Side Integration</th>
              <th class="p-4 sm:p-5 text-secondary">Casatech Resilient API Gateway</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200/80 font-sans">
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Third-Party Outage Handling</td>
              <td class="p-4 sm:p-5 text-rose-600 font-medium">Page freezes, spin wheels hang indefinitely, transactions fail</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Circuit breaker trips to cached data or graceful degraded state in &lt;100ms</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Credential Protection</td>
              <td class="p-4 sm:p-5 text-rose-600 font-medium">API keys exposed in browser network tab; vulnerable to scraping</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Keys encrypted in backend vaults; client only sees ephemeral session tokens</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Vendor API Costs</td>
              <td class="p-4 sm:p-5 text-slate-600">Billed for every single user tap; runaway usage bills during spikes</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Server-side deduplication & edge caching reduce billed vendor calls by up to 70%</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">AI Integration Latency</td>
              <td class="p-4 sm:p-5 text-slate-600">Client waits 4–8 seconds for multimodal vision/text completion</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Asynchronous streaming responses with optimistic UI previews</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>

    <!-- Question 02: Webhooks, Real-Time Streams & Failure Recovery -->
    <article 
      id="webhooks-reliability" 
      class="scroll-mt-24 p-6 sm:p-10 xl:p-12 rounded-3xl bg-slate-50/80 text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        02 // Mission-Critical Delivery
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How do asynchronous queues and dead-letter queues (DLQs) prevent lost webhook events?
      </h2>

      <div class="p-6 rounded-2xl bg-white border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> Basic webhook receivers crash or drop payloads during sudden traffic spikes because they attempt to process complex database operations synchronously before responding to the sender. We engineer two-tier webhook architectures: incoming payloads are immediately acknowledged in milliseconds and placed into an asynchronous worker queue. If a downstream database lock occurs, automated exponential backoff retries the event. If repeated failures persist, events divert to a dead-letter queue (DLQ) with instant alerting, guaranteeing zero silent transaction loss.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold text-xs font-mono mb-3">01</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Cryptographic HMAC Verification</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every incoming webhook signature is mathematically validated against raw payloads before execution, stopping replay attacks and spoofed notifications.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs font-mono mb-3">02</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Idempotency Guardrails</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unique event keys ensure that duplicate webhook deliveries from payment gateways or carriers never result in double charges or duplicate customer emails.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs font-mono mb-3">03</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Dead-Letter Queues (DLQ)</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unprocessable events are segregated with full payload snapshots, allowing engineering teams to inspect, debug, and safely replay jobs with one click.
            </p>
          </div>
        </div>
      </div>
    </article>

    <!-- Question 03: Payment Infrastructure & Subscriptions -->
    <article 
      id="payment-infrastructure" 
      class="scroll-mt-24 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        03 // Secure Revenue Operations
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How do custom Stripe and PayPal integrations achieve strict PCI compliance without complex audit burdens?
      </h2>

      <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> We utilize hosted checkout flows, Stripe Elements, and customer portal sessions that tokenize payment instruments directly in the client’s browser before communication reaches your application. Credit card numbers, expiration dates, and CVVs never touch or pass through your database servers, satisfying PCI-DSS SAQ-A compliance and eliminating regulatory liability while retaining complete control over custom tiering and automated invoices.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm mb-3">✓</div>
          <h3 class="font-bold text-slate-900 text-base mb-2">Automated Dunning & Prorations</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            When a corporate customer upgrades their seat tiers or their card expires on renewal, custom webhook listeners automatically calculate prorated balance differences, trigger retry emails, and adjust portal access permissions without manual staff intervention.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm mb-3">✓</div>
          <h3 class="font-bold text-slate-900 text-base mb-2">Instant PDF Invoice & Receipt Generation</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Successful subscription charges automatically generate compliant, itemized PDF invoices accessible directly inside the customer’s self-service billing tab, eliminating back-and-forth accounts receivable emails.
          </p>
        </div>
      </div>
    </article>

    <!-- Question 04: Social Feeds, Marketing Sync & Credential Security -->
    <article 
      id="credential-security" 
      class="scroll-mt-24 p-6 sm:p-10 xl:p-12 rounded-3xl bg-slate-50/80 text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        04 // Credential Containment
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How do server-side proxies protect social and marketing API keys from browser exposure?
      </h2>

      <div class="p-6 rounded-2xl bg-white border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> Many websites accidentally leak high-privilege credentials—such as Meta Graph tokens, LinkedIn client secrets, or Google Service Account keys—by embedding them in client-side scripts where anyone can inspect them. We place all marketing and social connectors behind dedicated server-side endpoints that authenticate internally, refresh short-lived tokens automatically, and return clean sanitized data to the browser with zero credential exposure.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-900 text-base mb-2">Automated OAuth Refresh Cycles</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Long-lived access tokens expire every 60 days. Our serverless background routines automatically negotiate token rotation with OAuth providers before expiration, ensuring social feeds and CRM syncing never silently disconnect.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-900 text-base mb-2">Cached Content Delivery</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Instead of hitting Meta or LinkedIn servers every time a user loads your page, social posts and review counts are cached in fast cloud memory, increasing page load speed and eliminating third-party tracking cookies.
          </p>
        </div>
      </div>
    </article>

    <!-- Question 05: Modern Integration Stack (REST, Webhooks, Node.js) -->
    <article 
      id="integration-stack" 
      class="scroll-mt-24 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        05 // Robust Implementation
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        Why decoupled serverless routes and environment vaults are critical for enterprise API workflows
      </h2>

      <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> Decoupling integration logic into lightweight serverless microservices isolates potential failures from your primary user interface. Encrypting keys inside managed environment variable vaults prevents accidental leaks across staging and production branches. This modular architecture allows your business to swap CRM vendors, switch payment processors, or scale API throughput without touching frontend presentation code.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-xs">
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-secondary font-bold uppercase block mb-1">Architecture</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Decoupled Microservices</h4>
          <p class="text-slate-600 leading-relaxed">External connections run independently; slow third-party services never drag down frontend rendering speeds.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-sky-600 font-bold uppercase block mb-1">Security</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Managed Secret Vaults</h4>
          <p class="text-slate-600 leading-relaxed">Production credentials remain strictly isolated from source code repositories and developer machines.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-emerald-600 font-bold uppercase block mb-1">Performance</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Edge Gateway Routing</h4>
          <p class="text-slate-600 leading-relaxed">Proxy requests terminate close to users, cutting round-trip latency and accelerating mobile checkouts.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-amber-600 font-bold uppercase block mb-1">Flexibility</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Unified Webhook Handlers</h4>
          <p class="text-slate-600 leading-relaxed">Standardized ingest routes process payments, inventory updates, and lead notifications cleanly.</p>
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
        '@id': 'https://casatechllc.com/services/api-integrations-webhooks#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do you prevent third-party API rate limits and external provider outages from breaking your web application?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We isolate external connections behind server-side proxies equipped with circuit breakers, stale-while-revalidate caching, and token-bucket rate limiters. If a third-party vendor slows down or goes offline, the circuit breaker opens instantly to deliver cached responses or fallback states—ensuring your users never experience a frozen checkout or broken dashboard.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do asynchronous queues and dead-letter queues (DLQs) prevent lost webhook events?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Basic webhook receivers crash during sudden traffic spikes because they process database operations synchronously before responding. We engineer two-tier webhook architectures where payloads are immediately acknowledged and queued. If downstream locks occur, exponential backoff retries the event, while repeated failures divert to a dead-letter queue (DLQ) with instant alerting, guaranteeing zero silent transaction loss.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do custom Stripe and PayPal integrations achieve strict PCI compliance without complex audit burdens?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We utilize hosted checkout flows, Stripe Elements, and customer portal sessions that tokenize payment instruments directly in the client browser before communication reaches your application. Credit card numbers and CVVs never touch or pass through your database servers, satisfying PCI-DSS SAQ-A compliance and eliminating regulatory liability.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do server-side proxies protect social and marketing API keys from browser exposure?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We place all marketing and social connectors behind dedicated server-side endpoints that authenticate internally, refresh short-lived tokens automatically, and return clean sanitized data to the browser with zero credential exposure, preventing API key scraping and unauthorized usage.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Why decoupled serverless routes and environment vaults are critical for enterprise API workflows',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Decoupling integration logic into lightweight serverless microservices isolates potential failures from your primary user interface. Encrypting keys inside managed environment variable vaults prevents accidental leaks across staging and production branches, allowing businesses to scale throughput without touching frontend code.'
            }
          }
        ]
      })
    }
  ]
})
</script>