<!-- components/services/qa/DataEngineering.vue -->
<template>
  <div class="space-y-12 lg:space-y-16 w-full">
    
    <!-- Question 01: Relational vs Document Databases -->
    <article 
      id="postgres-vs-firestore" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        01 // Database Strategy
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        When should your business use PostgreSQL (Supabase) versus a document database like Firestore?
      </h2>

      <!-- Widescreen 2-Column Split: Direct Answer + Strategic Breakdown -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 mb-8 items-stretch">
        <div class="lg:col-span-7 p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm flex flex-col justify-center">
          <span class="text-xs font-mono uppercase text-secondary font-bold tracking-wider mb-2">Direct Answer</span>
          <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
            <strong>Direct Answer:</strong> Use PostgreSQL (such as Supabase) when your business relies on relational data, complex analytical joins, strict financial auditing, and predictable flat-rate cloud hosting. Choose a document store like Firestore only when your primary requirement is offline-first mobile synchronization with simple document lookups. For data-heavy dashboards and SaaS products, Firestore’s pay-per-read billing quickly becomes cost-prohibitive.
          </p>
        </div>

        <div class="lg:col-span-5 p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-center space-y-3">
          <h3 class="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">Predictable Long-Term Cost</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            A single reporting dashboard in Firestore can trigger tens of thousands of read charges in a single executive session. PostgreSQL instances offer predictable compute costs regardless of read volume, combined with ACID guarantees that ensure calculations never go out of balance.
          </p>
        </div>
      </div>

      <!-- Comparison Matrix -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/40">
        <table class="min-w-full text-left text-xs sm:text-sm">
          <thead class="bg-slate-900 text-white font-mono uppercase text-[11px] sm:text-xs">
            <tr>
              <th class="p-4 sm:p-5">Architectural Dimension</th>
              <th class="p-4 sm:p-5">Firestore (NoSQL Document Store)</th>
              <th class="p-4 sm:p-5 text-secondary">PostgreSQL / Supabase (Relational)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200/80 font-sans">
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Complex Queries & Joins</td>
              <td class="p-4 sm:p-5 text-rose-600 font-medium">No native joins; requires client-side merging and duplicate data writes</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Native SQL joins, aggregations, CTEs, and window functions</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Pricing Model at Scale</td>
              <td class="p-4 sm:p-5 text-rose-600 font-medium">Pay-per-operation; read spikes multiply operational bills instantly</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Flat compute instance pricing; unlimited query reads and writes</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Multi-Tenant Isolation</td>
              <td class="p-4 sm:p-5 text-slate-600">Application-layer security rules; easy to misconfigure in complex models</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Engine-level Row-Level Security (RLS); mathematically isolates tenant accounts</td>
            </tr>
            <tr class="hover:bg-white/80 transition-colors">
              <td class="p-4 sm:p-5 font-semibold text-slate-900">Data Integrity Enforcement</td>
              <td class="p-4 sm:p-5 text-slate-500">Schema-less; structural mistakes propagate silently across documents</td>
              <td class="p-4 sm:p-5 text-emerald-700 bg-secondary/5 font-semibold">Strict foreign keys, unique constraints, and check validations at write time</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>

    <!-- Question 02: Multi-Tenant Row-Level Security (RLS) -->
    <article 
      id="multi-tenant-rls" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-slate-50/80 text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        02 // Security & Compliance
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How does PostgreSQL Row-Level Security (RLS) guarantee tenant data isolation?
      </h2>

      <div class="p-6 rounded-2xl bg-white border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> Row-Level Security (RLS) embeds access control policies directly inside the database engine rather than relying on application code. Every query executed by an authenticated user is automatically filtered by their verified tenant identifier (e.g., <code>tenant_id = auth.uid()</code>). Even if an application developer writes a query that accidentally forgets a filter, the database rejects unauthorized rows, preventing cross-tenant data leaks.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold text-xs font-mono mb-3">01</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Engine-Enforced Rules</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Permissions are verified at the database kernel. Compromised frontend views or third-party webhooks cannot bypass data isolation policies.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs font-mono mb-3">02</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Granular Role Policies</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Define distinct policies for <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, and <code>DELETE</code> operations based on employee roles, department boundaries, or client accounts.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs font-mono mb-3">03</div>
            <h3 class="font-bold text-slate-900 text-base mb-2">Audit Compliance</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Satisfies enterprise requirements for SOC 2, HIPAA, and GDPR by providing verifiable mathematical segregation of customer records.
            </p>
          </div>
        </div>
      </div>
    </article>

    <!-- Question 03: Redis In-Memory Caching & Latency -->
    <article 
      id="redis-caching" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        03 // High-Speed Performance
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How does in-memory Redis caching eliminate database bottlenecks and cut API latency?
      </h2>

      <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> An in-memory Redis caching layer stores high-frequency query results in RAM rather than forcing the primary database to recompute disk reads. This drops response times from 300ms down to sub-10ms for repeated requests. By pairing Redis with connection poolers like PgBouncer, backend systems absorb massive traffic surges without exhausting available database connections.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm mb-3">✓</div>
          <h3 class="font-bold text-slate-900 text-base mb-2">Stale-While-Revalidate Caching</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Users receive cached operational metrics instantly while the server updates fresh data asynchronously in the background, keeping web portals snappy without serving obsolete figures.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div class="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm mb-3">✓</div>
          <h3 class="font-bold text-slate-900 text-base mb-2">Connection Pool Defense (PgBouncer)</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Instead of opening and tearing down expensive database sockets for every serverless request, connection poolers reuse established connections, preventing server crashes during customer rush hours.
          </p>
        </div>
      </div>
    </article>

    <!-- Question 04: Data Migrations, Backups & Disaster Recovery -->
    <article 
      id="migrations-backups" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-slate-50/80 text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        04 // Continuity & Backups
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How do automated migrations and Point-In-Time Recovery (PITR) guarantee zero data loss?
      </h2>

      <div class="p-6 rounded-2xl bg-white border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> We safeguard production databases using reversible migration scripts tested in staging environments paired with continuous Write-Ahead Log (WAL) archiving. Point-In-Time Recovery (PITR) allows us to restore a database to the exact second before an accidental deletion or faulty batch script occurred, ensuring that human errors or hardware failures never lead to unrecoverable data loss.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-900 text-base mb-2">Zero-Downtime Schema Migrations</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We apply schema updates using expand-and-contract patterns. New columns and tables are deployed without locking active production tables, keeping internal portals fully operational during upgrades.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <h3 class="font-bold text-slate-900 text-base mb-2">Automated Spreadsheet ETL Cleansing</h3>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            When migrating historical business data out of Excel or Google Sheets, our custom ingest pipelines cleanse dirty formatting, reconcile duplicates, and map records cleanly into normalized relational schemas.
          </p>
        </div>
      </div>
    </article>

    <!-- Question 05: Scalability, Sharding & Query Optimization -->
    <article 
      id="scale-concurrency" 
      class="scroll-mt-36 p-6 sm:p-10 xl:p-12 rounded-3xl bg-white text-slate-800 border border-slate-200/90 shadow-sm w-full"
    >
      <span class="text-xs font-mono uppercase tracking-widest text-secondary font-bold block mb-2">
        05 // Scalable Architecture
      </span>
      <h2 class="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-slate-900 tracking-tight mb-8">
        How do composite indexes and query profiling prevent slow database locks under concurrent write traffic?
      </h2>

      <div class="p-6 rounded-2xl bg-slate-50 border-l-4 border-secondary border border-slate-200 shadow-sm mb-8">
        <p class="text-slate-800 text-sm sm:text-base leading-relaxed">
          <strong>Direct Answer:</strong> Slow database queries are almost always caused by unindexed table scans that force the database engine to inspect millions of rows sequentially. We deploy B-tree and composite indexes tailored to your specific filtering patterns, combined with pessimistic row-locking patterns that prevent race conditions during high-volume checkout or inventory reservation spikes.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-xs">
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-secondary font-bold uppercase block mb-1">Optimization</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Composite B-Tree Indexes</h4>
          <p class="text-slate-600 leading-relaxed">Pins queries directly to required row pointers, reducing query execution times from seconds to single-digit milliseconds.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-sky-600 font-bold uppercase block mb-1">Concurrency</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Atomic Transactions</h4>
          <p class="text-slate-600 leading-relaxed">Guarantees all multi-step financial mutations either complete fully or roll back cleanly, eliminating partial write corruptions.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-emerald-600 font-bold uppercase block mb-1">Telemetry</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Slow Query Logging</h4>
          <p class="text-slate-600 leading-relaxed">Automated telemetry flags queries running over 100ms before growing database volumes degrade user experiences.</p>
        </div>
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <span class="text-xs font-mono text-amber-600 font-bold uppercase block mb-1">Read Scaling</span>
          <h4 class="font-bold text-slate-900 text-sm mb-1.5">Read-Only Replicas</h4>
          <p class="text-slate-600 leading-relaxed">Heavy reporting and analytical exports run on dedicated replica nodes without slowing down primary live writes.</p>
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
        '@id': 'https://casatechllc.com/services/data-engineering-backend#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'When should your business use PostgreSQL (Supabase) versus a document database like Firestore?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Use PostgreSQL (such as Supabase) when your business relies on relational data, complex analytical joins, strict financial auditing, and predictable flat-rate cloud hosting. Choose a document store like Firestore only when your primary requirement is offline-first mobile synchronization with simple document lookups. For data-heavy dashboards and SaaS products, Firestore’s pay-per-read billing quickly becomes cost-prohibitive.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How does PostgreSQL Row-Level Security (RLS) guarantee tenant data isolation?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Row-Level Security (RLS) embeds access control policies directly inside the database engine rather than relying on application code. Every query executed by an authenticated user is automatically filtered by their verified tenant identifier. Even if an application developer writes a query that accidentally forgets a filter, the database rejects unauthorized rows, preventing cross-tenant data leaks.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How does in-memory Redis caching eliminate database bottlenecks and cut API latency?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'An in-memory Redis caching layer stores high-frequency query results in RAM rather than forcing the primary database to recompute disk reads. This drops response times from 300ms down to sub-10ms for repeated requests. By pairing Redis with connection poolers like PgBouncer, backend systems absorb massive traffic surges without exhausting available database connections.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do automated migrations and Point-In-Time Recovery (PITR) guarantee zero data loss?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'We safeguard production databases using reversible migration scripts tested in staging environments paired with continuous Write-Ahead Log (WAL) archiving. Point-In-Time Recovery (PITR) allows us to restore a database to the exact second before an accidental deletion or faulty batch script occurred, ensuring that human errors or hardware failures never lead to unrecoverable data loss.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do composite indexes and query profiling prevent slow database locks under concurrent write traffic?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Slow database queries are almost always caused by unindexed table scans that force the database engine to inspect millions of rows sequentially. We deploy B-tree and composite indexes tailored to your specific filtering patterns, combined with pessimistic row-locking patterns that prevent race conditions during high-volume checkout or inventory reservation spikes.'
            }
          }
        ]
      })
    }
  ]
})
</script>