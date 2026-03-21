<template>
  <article class="pt-32 pb-24 bg-bg-light min-h-screen">
    <!-- Handle 404 Case -->
    <div v-if="!article" class="max-w-3xl mx-auto px-4 text-center py-20">
      <h1 class="text-2xl font-bold text-text-heading">Article Not Found</h1>
      <NuxtLink to="/insights" class="text-secondary mt-4 block underline">Return to Insights</NuxtLink>
    </div>

    <!-- Article Content -->
    <template v-else>
      <header class="max-w-3xl mx-auto px-4 mb-12" v-motion-fade>
        <nav class="mb-8">
          <NuxtLink to="/insights" class="text-secondary font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform outline-none focus-visible:ring-2 focus-visible:ring-cta rounded">
            <svg class="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            Back to Insights
          </NuxtLink>
        </nav>

        <h1 class="text-4xl md:text-5xl font-heading font-extrabold text-text-heading mb-8 leading-tight">
          {{ article.title }}
        </h1>

        <!-- Author Meta Block -->
        <div class="flex items-center space-x-4 border-y border-gray-200 py-6 mb-8">
          <div class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
            <img 
              src="/images/alex-martinez-headshot.png" 
              alt="Alex Martinez - Lead Consultant at Casatech LLC" 
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex flex-col">
            <span class="text-text-primary font-bold">Alex Martinez</span>
            <span class="text-text-secondary text-sm">
              Lead Technical Consultant | {{ formatDate(article.date) }}
            </span>
          </div>
        </div>

        <!-- NEW: Conditional Featured Image Block -->
        <div v-if="article.imageLink" class="mb-12 rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-[21/9]">
          <img 
            :src="article.imageLink" 
            :alt="article.title" 
            class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </header>

      <section class="max-w-3xl mx-auto px-4 prose prose-slate prose-lg md:prose-xl prose-links:text-secondary prose-headings:text-text-heading prose-headings:font-heading prose-headings:font-bold">
        <!-- Render the HTML body from ArticleData -->
        <div v-html="article.body"></div>

        <footer class="mt-16 p-10 bg-bg-dark rounded-3xl text-center shadow-2xl relative overflow-hidden" v-motion-slide-visible-bottom>
            <div 
            class="absolute inset-0 opacity-20" 
            style="background-image: radial-gradient(#ff7a00 1.5px, transparent 1.5px); background-size: 30px 30px;"
            ></div>

            <div class="relative z-10">
                <h3 class="text-white text-3xl md:text-4xl font-heading font-bold mb-6 italic">
                <span v-html="article.ctaTitle || 'Ready to Scale?'"></span>
                </h3>

                <p v-if="article.ctaSubtitle" class="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                <span v-html="article.ctaSubtitle"></span>
                </p>

                <NuxtLink 
                to="/contact" 
                class="bg-cta hover:bg-cta-hover text-white font-heading font-bold py-5 px-12 rounded-xl text-xl inline-block shadow-lg transition-transform hover:-translate-y-1 active:scale-95 no-underline"
                >
                {{ article.ctaButtonText || 'Launch Your Tech Right' }}
                </NuxtLink>
            </div>
        </footer>
        <!-- Render Optional Reference Links -->
        <div v-if="article.links && article.links.length > 0" class="mt-12 p-6 bg-white rounded-xl border border-gray-200">
          <h4 class="text-sm uppercase tracking-widest text-text-secondary mb-4 font-bold">Reference Links</h4>
          <ul class="list-none p-0 m-0 flex flex-wrap gap-4">
            <li v-for="link in article.links" :key="link.url">
              <a :href="link.url" target="_blank" rel="noopener noreferrer" class="text-secondary font-bold hover:underline no-underline">
                {{ link.name }} &rarr;
              </a>
            </li>
          </ul>
        </div>
      </section>
    </template>
  </article>
</template>

<script setup>
import { allPosts } from '~/assets/data/ArticleData.js'

const route = useRoute()
const slug = route.params.slug

const article = allPosts.find(post => post.slug === slug)

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

if (article) {
  // Determine structured data image (fallback to headshot if no featured image)
  const schemaImage = article.imageLink 
    ? `https://casatechllc.com${article.imageLink}` 
    : 'https://casatechllc.com/images/alex-martinez-headshot.png';

  useHead({
    title: `${article.title} | Casatech LLC Insights`,
    meta: [
      { name: 'description', content: article.subtitle }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.subtitle,
          "image": schemaImage,
          "datePublished": article.date,
          "author": {
            "@type": "Person",
            "name": "Alex Martinez"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Casatech LLC"
          }
        })
      }
    ]
  })
}
</script>