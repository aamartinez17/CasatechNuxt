<!-- components/AppBreadcrumbs.vue -->
<template>
  <nav aria-label="Breadcrumb" class="py-3 select-none">
    <ol class="flex items-center flex-wrap gap-2 text-xs font-mono tracking-wider">
      
      <!-- Home Link -->
      <li class="inline-flex items-center">
        <NuxtLink
          to="/"
          class="text-slate-400 hover:text-secondary transition-colors inline-flex items-center gap-1.5"
          title="Return to Casatech Home"
        >
          <font-awesome-icon icon="house-chimney" class="text-[11px]" />
          <span class="sr-only sm:not-sr-only">Home</span>
        </NuxtLink>
      </li>

      <!-- Dynamic / Passed Breadcrumbs -->
      <li
        v-for="(crumb, index) in computedCrumbs"
        :key="crumb.path"
        class="inline-flex items-center gap-2"
      >
        <!-- Separator -->
        <span class="text-slate-600">/</span>

        <!-- Active Leaf Item (Current Page) -->
        <span
          v-if="index === computedCrumbs.length - 1"
          class="text-secondary font-medium truncate max-w-[200px] sm:max-w-xs"
          aria-current="page"
        >
          {{ crumb.label }}
        </span>

        <!-- Parent Page Link -->
        <NuxtLink
          v-else
          :to="crumb.path"
          class="text-slate-400 hover:text-secondary transition-colors truncate max-w-[150px] sm:max-w-xs"
        >
          {{ crumb.label }}
        </NuxtLink>
      </li>

    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  /**
   * Optional manual override:
   * Array of items: [{ label: 'Services', path: '/services' }, { label: 'Web Architecture' }]
   */
  items: {
    type: Array,
    default: null
  }
})

const route = useRoute()

// Human-friendly naming map for known kebab-case route segments
const labelDictionary = {
  services: 'Services',
  portfolio: 'Portfolio',
  insights: 'Insights',
  about: 'About',
  contact: 'Contact',
  'custom-web-architecture': 'Custom Web Architecture',
  'core-application-systems': 'Application Systems',
  'api-integrations-webhooks': 'Integrations & APIs',
  'data-engineering-backend': 'Data Engineering',
  'cloud-hosting-security': 'Hosting & Security',
  'growth-search-advisory': 'Growth & Search'
}

const formatSegment = (segment) => {
  if (labelDictionary[segment]) return labelDictionary[segment]
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Generates breadcrumbs automatically from route path if props.items isn't passed
const computedCrumbs = computed(() => {
  if (props.items && props.items.length > 0) {
    return props.items
  }

  const segments = route.path.split('/').filter(Boolean)
  let accumulatedPath = ''

  return segments.map((seg, idx) => {
    accumulatedPath += `/${seg}`
    return {
      label: formatSegment(seg),
      path: accumulatedPath
    }
  })
})

// Machine-readable Schema.org BreadcrumbList injection for AEO & Google SERP enrichment
useHead(() => {
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://casatechllc.com/'
    },
    ...computedCrumbs.value.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: crumb.label,
      item: `https://casatechllc.com${crumb.path}`
    }))
  ]

  return {
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement
        })
      }
    ]
  }
})
</script>