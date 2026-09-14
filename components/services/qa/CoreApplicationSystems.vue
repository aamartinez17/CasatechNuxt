<!-- components/services/qa/CoreApplicationSystems.vue -->
<template>
  <div class="space-y-12 lg:space-y-16 w-full">
    
    <!-- Question 01: Spreadsheet Migration & Operational Automation -->
    <article 
      id="spreadsheet-to-app" 
      class="scroll-mt-24 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        01 // Operational Modernization
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        What are the hidden risks of running core operations out of spreadsheets, and when should you upgrade?
      </h2>

      <!-- Widescreen 2-Column Split: Direct Answer + Strategic Context -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 mb-8 items-stretch">
        <div class="lg:col-span-7 p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm flex flex-col justify-center">
          <span class="text-xs font-mono uppercase text-secondary font-bold tracking-wider mb-2">Direct Answer</span>
          <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
            <strong>Direct Answer:</strong> Running core business workflows out of Excel or Google Sheets leads to silent formula corruption, accidental data overwrites, concurrency locks when multiple teammates edit simultaneously, and zero row-level permission controls. Companies should transition to a custom cloud database application when more than three people depend on the sheet daily or when spreadsheet crashes threaten client deliverables.
          </p>
        </div>

        <div class="lg:col-span-5 p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-center space-y-3">
          <h3 class="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">The Breaking Point</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Off-the-shelf SaaS tools like Airtable or Monday work well for early task tracking, but per-seat subscription tiers balloon rapidly as your workforce expands. A custom internal portal gives your team unrestricted user seats, automated data integrity, and custom calculation engines you own forever.
          </p>
        </div>
      </div>

      <!-- Comparison Matrix: Spreadsheets vs SaaS vs Custom Web App -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/40">
        <table class="min-w-full text-left text-xs sm:text-sm">
          <thead class="bg-slate-900 text-white font-mono uppercase text-[11px] sm:text-xs">
            <tr>
              <th class="p-4 sm:p-5">Operational Factor</th>
              <th class="p-4 sm:p-5">Spreadsheets (Excel / Sheets)</th>
              <th class="p-4 sm:p-5">Generic SaaS (Airtable / Monday)</th>
              <th class="p-4 sm:p-5 text-secondary">Casatech Custom Web Portal</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200/80 font-sans">
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Data Integrity & Locking</td>
              <td class="p-4 sm:p-5 text-rose-600 font-medium">Formulas easily broken; cells can be deleted without warning</td>
              <td class="p-4 sm:p-5 text-slate-600">Moderate guardrails, but prone to sync conflicts</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Strict database constraints; invalid entries rejected at runtime</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Access Control & Privacy</td>
              <td class="p-4 sm:p-5 text-rose-600 font-medium">All-or-nothing access; everyone sees confidential financial cells</td>
              <td class="p-4 sm:p-5 text-slate-600">Basic team permissions, but limited row-level filtering</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Granular Role-Based Access (RBAC); staff see only what they need</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Scaling Cost Model</td>
              <td class="p-4 sm:p-5 text-slate-600">Low upfront, massive administrative debt over time</td>
              <td class="p-4 sm:p-5 text-rose-600 font-medium">Costly per-seat monthly licenses ($20–$50/user/mo)</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Predictable flat hosting; add unlimited staff and clients without fees</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Audit & Accountability</td>
              <td class="p-4 sm:p-5 text-slate-500">Minimal revision history with zero change verification</td>
              <td class="p-4 sm:p-5 text-slate-600">Standard activity logs tied to vendor retention policies</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Immutable database audit logs tracking who edited every record</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>

    <!-- Question 02: RBAC, Multi-Tenant Architecture & Security -->
    <article 
      id="rbac-security" 
      class="scroll-mt-24 p-6 sm:p-10 xl:p-12 rounded-3xl bg-slate-50/80 text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        02 // Enterprise Security
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How does Role-Based Access Control (RBAC) safeguard sensitive business data?
      </h2>

      <div class="p-6 rounded-2xl bg-white border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> Role-Based Access Control (RBAC) restricts system access based on an individual's verified position within your company. Instead of giving every employee keys to the entire database, RBAC ensures accountants only see billing tables, field technicians only view assigned work orders, and executive leadership retains full oversight. In multi-tenant systems, RBAC guarantees that client organizations can never view each other's proprietary files or reports.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold text-xs font-mono mb-3">01</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Row-Level Database Isolation</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every database query is automatically filtered by tenant ID and user role, mathematically preventing cross-tenant data leakage.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs font-mono mb-3">02</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Secure OAuth & Session Tokens</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We deploy encrypted, HTTP-only session tokens with multi-factor authentication (MFA) that automatically expire when idle, neutralizing token theft.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs font-mono mb-3">03</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Audit Trails & Compliance</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every create, read, update, and delete action is logged with user timestamps and IP signatures to satisfy strict industry audits.
            </p>
          </div>
        </div>
      </div>
    </article>

    <!-- Question 03: Custom Dashboards vs Generic BI Tools -->
    <article 
      id="custom-dashboards" 
      class="scroll-mt-24 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        03 // Real-Time Intelligence
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        Why engineer a tailored operational dashboard instead of buying Power BI or Tableau licenses?
      </h2>

      <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> While off-the-shelf BI software is great for retrospective reporting, it is strictly read-only and requires steep technical learning curves for everyday staff. A tailored management portal is bi-directional: your team cannot just inspect live operational metrics, but can trigger actions directly—approving purchase orders, dispatching workers, or updating inventory in one unified interface.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm mb-3">✓</div>
          <h3 class="font-bold text-slate-900 text-base mb-2">Live Web-Socket Telemetry</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Data updates stream dynamically without requiring manual page refreshes. When a field agent logs a completed job or an invoice settles, leadership sees the numbers change instantly on their screen.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm mb-3">✓</div>
          <h3 class="font-bold text-slate-900 text-base mb-2">Simplified, Non-Technical Layouts</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Generic BI suites overwhelm operators with dense menus and confusing slicers. We engineer lean, role-specific interfaces focused only on your high-priority Key Performance Indicators (KPIs).
          </p>
        </div>
      </div>
    </article>

    <!-- Question 04: Interactive Estimators & Customer Portals -->
    <article 
      id="calculators-and-portals" 
      class="scroll-mt-24 p-6 sm:p-10 xl:p-12 rounded-3xl bg-slate-50/80 text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        04 // Growth Engines
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How do interactive web calculators and self-service portals increase qualified sales?
      </h2>

      <div class="p-6 rounded-2xl bg-white border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> High-intent commercial buyers prefer interactive self-service over waiting days for a return phone call. Parametric estimators—like custom takeoff and cost calculation tools—allow prospects to enter project parameters, see instant pricing ranges, and submit qualified lead details directly into your database. Once onboarded, self-service portals let clients sign agreements, pay deposits, and track project status 24/7 without burdening account managers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-900 text-base mb-2">Higher Lead Intent & Automation</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Visitors who invest 2 minutes into an interactive estimation tool convert at three times the rate of a generic contact form because they receive instant clarity on scope and pricing expectations.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-900 text-base mb-2">Reduced Support Ticket Volume</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            By giving customers a single login to check order status, download invoices, and access project documentation, your administrative team spends far fewer hours answering routine email check-ins.
          </p>
        </div>
      </div>
    </article>

    <!-- Question 05: Modern Backend Architecture & TypeScript -->
    <article 
      id="backend-state-stack" 
      class="scroll-mt-24 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        05 // Enterprise Tech Stack
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        Why end-to-end TypeScript, Pinia, and Nitro power reliable internal business tools
      </h2>

      <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> End-to-end TypeScript eliminates entire classes of runtime errors by guaranteeing that data sent from the backend database matches what the frontend interface expects. When paired with Pinia for reactive calculation states and Nitro’s ultra-lightweight serverless architecture, our custom software executes calculations instantly and connects seamlessly to payment processors, ERPs, and CRMs.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-xs">
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-secondary font-bold uppercase block mb-1">Strict Reliability</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">End-to-End TypeScript</h4>
          <p class="text-slate-600 leading-relaxed">Ensures data schemas are validated at compile time, stopping typos and missing fields from breaking transactions.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-sky-600 font-bold uppercase block mb-1">State Reactivity</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Pinia Store Management</h4>
          <p class="text-slate-600 leading-relaxed">Maintains complex multi-step calculation state in real-time across sliders, dropdowns, and form steps without lag.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-emerald-600 font-bold uppercase block mb-1">Edge Engine</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Nitro Server Engine</h4>
          <p class="text-slate-600 leading-relaxed">Runs lightweight serverless API microservices with cold starts measured in milliseconds rather than seconds.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-amber-600 font-bold uppercase block mb-1">System Ecosystem</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Node.js API Integrations</h4>
          <p class="text-slate-600 leading-relaxed">Bridges the gap between legacy on-premise systems, cloud SQL databases, Stripe billing, and modern CRMs.</p>
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
        '@id': 'https://casatechllc.com/services/core-application-systems#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What are the hidden risks of running core operations out of spreadsheets, and when should you upgrade?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Running core business workflows out of Excel or Google Sheets leads to silent formula corruption, accidental data overwrites, concurrency locks when multiple teammates edit simultaneously, and zero row-level permission controls. Companies should transition to a custom cloud database application when more than three people depend on the sheet daily or when spreadsheet crashes threaten client deliverables.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How does Role-Based Access Control (RBAC) safeguard sensitive business data?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Role-Based Access Control (RBAC) restricts system access based on an individual verified position within your company. Instead of giving every employee keys to the entire database, RBAC ensures accountants only see billing tables, field technicians only view assigned work orders, and executive leadership retains full oversight. In multi-tenant systems, RBAC guarantees that client organizations can never view each others proprietary files or reports.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Why engineer a tailored operational dashboard instead of buying Power BI or Tableau licenses?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'While off-the-shelf BI software is great for retrospective reporting, it is strictly read-only and requires steep technical learning curves for everyday staff. A tailored management portal is bi-directional: your team cannot just inspect live operational metrics, but can trigger actions directly—approving purchase orders, dispatching workers, or updating inventory in one unified interface.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do interactive web calculators and self-service portals increase qualified sales?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'High-intent commercial buyers prefer interactive self-service over waiting days for a return phone call. Parametric estimators—like custom takeoff and cost calculation tools—allow prospects to enter project parameters, see instant pricing ranges, and submit qualified lead details directly into your database. Once onboarded, self-service portals let clients sign agreements, pay deposits, and track project status 24/7 without burdening account managers.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Why end-to-end TypeScript, Pinia, and Nitro power reliable internal business tools',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'End-to-end TypeScript eliminates entire classes of runtime errors by guaranteeing that data sent from the backend database matches what the frontend interface expects. When paired with Pinia for reactive calculation states and Nitro ultra-lightweight serverless architecture, our custom software executes calculations instantly and connects seamlessly to payment processors, ERPs, and CRMs.'
            }
          }
        ]
      })
    }
  ]
})
</script>