<template>
  <main class="sm:pt-40 pt-28 pb-24 bg-bg-light min-h-screen">
    <!-- Header Section -->
    <header class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center md:text-left" v-motion-fade>
      <h1 class="text-3xl md:text-6xl font-heading font-extrabold text-heading mb-6 tracking-tight">
        Executive Insights & <span class="text-secondary">Digital Strategy</span>
      </h1>
      <p class="text-lg md:text-xl text-secondary max-w-4xl leading-relaxed">
        Data-driven <strong>Connecticut IT Consulting Insights</strong> and <strong>B2B Web Development Strategies in New Haven</strong> 
        designed to help growing businesses secure their infrastructure and dominate local search.
      </p>
    </header>

    <!-- Filter Navigation -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div class="flex flex-wrap gap-3 items-center border-b border-gray-200 pb-8">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-300 border-2 mb-2 last:mb-2',
            activeCategory === cat 
              ? 'bg-primary border-primary text-white shadow-md' 
              : 'bg-white border-gray-200 text-secondary hover:border-secondary hover:text-secondary'
          ]"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Featured Article (Only visible on 'All' or specific first-page view) -->
      <section v-if="activeCategory === 'All' && featuredArticle" class="pb-20" v-motion-slide-visible-bottom>
        <article class="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 group">
          <div class="relative h-64 lg:h-full overflow-hidden">
            <img 
              :src="featuredArticle.imageLink" 
              :alt="featuredArticle.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute top-6 left-6">
              <span class="bg-secondary text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg">
                Featured Insight
              </span>
            </div>
          </div>
          <div class="p-8 md:p-12 flex flex-col justify-center">
            <span class="text-cta text-xs font-bold uppercase tracking-widest mb-4 block">{{ featuredArticle.category }}</span>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-heading mb-6 leading-tight">
              {{ featuredArticle.title }}
            </h2>
            <p class="text-secondary text-lg mb-8 leading-relaxed">
              {{ featuredArticle.subtitle }}
            </p>
            <div class="flex items-center justify-between mt-auto">
              <NuxtLink :to="`/insights/${featuredArticle.slug}`" class="text-primary font-heading font-extrabold hover:text-secondary flex items-center gap-2 group/link">
                Read Full Strategy 
                <svg class="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </article>
      </section>

      <!-- Articles Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-24">
        <article 
          v-for="article in displayArticles" 
          :key="article.id"
          class="mb-12 last:mb-0 bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover border border-gray-100 flex flex-col transition-all duration-300 transform hover:-translate-y-1"
          v-motion-slide-visible-bottom
        >
          <NuxtLink :to="`/insights/${article.slug}`" class="block h-52 overflow-hidden">
            <img 
              :src="article.imageLink" 
              :alt="article.title" 
              class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </NuxtLink>
          <div class="p-6 flex flex-col flex-grow">
            <div class="flex justify-between items-center mb-4">
              <span class="text-[10px] font-bold text-secondary uppercase tracking-widest">{{ article.category }}</span>
            </div>
            <h3 class="text-xl font-heading font-bold text-heading mb-3 leading-snug">
              <NuxtLink :to="`/insights/${article.slug}`" class="hover:text-primary transition-colors">
                {{ article.title }}
              </NuxtLink>
            </h3>
            <p class="text-body text-sm leading-relaxed mb-6 line-clamp-3 italic">
              {{ article.subtitle }}
            </p>
            <NuxtLink :to="`/insights/${article.slug}`" class="mt-auto text-sm font-bold text-primary hover:text-secondary flex items-center gap-1">
              View Guide &rarr;
            </NuxtLink>
          </div>
        </article>
      </section>
    </div>

    <!-- Final CTA Block -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div class="bg-bg-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
        <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(var(--color-secondary) 1.5px, transparent 1.5px); background-size: 30px 30px;"></div>
        <div class="relative z-10">
          <h2 class="text-white text-3xl md:text-4xl font-heading font-bold mb-6 italic">Need hands-on help scaling your infrastructure?</h2>
          <p class="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Don't navigate the digital landscape alone. Get a direct roadmap from a 
            <strong>Bilingual IT Consultant</strong> who understands the Connecticut business environment.
          </p>
          <NuxtLink to="/contact" class="bg-cta hover:bg-cta-hover text-white font-heading font-bold py-5 px-12 rounded-xl text-xl inline-block shadow-lg transition-transform hover:-translate-y-1 active:scale-95">
            Book a Technical Audit
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { allPosts } from '@/assets/data/ArticleData.js'

// SEO Implementation
useHead({
  title: 'Local Tech Support Guides & B2B Insights | Casatech LLC',
  meta: [
    { 
      name: 'description', 
      content: 'Access premium Connecticut IT Consulting Insights. Expert guides on managed infrastructure, custom web apps, and digital growth for New Haven SMEs.' 
    }
  ]
})

// Categories matching your business pillars
const categories = ['All', 'IT Infrastructure & Security', 'Digital Growth & SEO', 'Startup Foundations']
const activeCategory = ref('All')

// Article Selection Logic
const featuredArticle = computed(() => {
  return allPosts[0] // Returns the most recent/pinned article
})

const displayArticles = computed(() => {
  let list = allPosts

  // If viewing 'All', remove the featured article from the grid to prevent duplication
  if (activeCategory.value === 'All') {
    list = allPosts.slice(1)
  } else {
    list = allPosts.filter(post => post.category === activeCategory.value)
  }

  return list
})
</script>

<style scoped>
.shadow-soft {
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
}
.shadow-hover {
  box-shadow: 0 20px 40px -4px rgba(0, 0, 0, 0.1);
}

/* Line clamping for cleaner card consistency */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>