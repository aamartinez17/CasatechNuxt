<template>
  <div class="blog-detail-view" v-if="post">
    <!-- 1. Post Header with Image -->
    <section class="post-header text-white text-center" :style="{ backgroundImage: `url(${post.imageLink})` }">
      <div class="header-overlay">
        <div class="container" data-aos="fade-in">
          <h1 class="display-4 fw-bold">{{ post.title_en }}</h1>
          <p class="lead">{{ post.subtitle_en }}</p>
          <p class="text-muted"><small>Posted on {{ formatDate(post.date) }}</small></p>
        </div>
      </div>
    </section>

    <!-- 2. Post Content -->
    <section class="page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <!-- v-html is used to render the HTML from our BlogData.js -->
            <div class="post-body" v-html="post.body_en"></div>

            <!-- References -->
            <div v-if="post.links && post.links.length > 0" class="mt-5">
              <h4 class="reference-title">References</h4>
              <ul class="list-unstyled">
                <li v-for="link in post.links" :key="link.url">
                  <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>
                </li>
              </ul>
            </div>
            
            <hr class="my-5">
            
            <!-- Back to Blog Button -->
            <NuxtLink :to="blogPath" class="btn btn-brand-primary">&larr; Back to Blog</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="page-section text-center">
    <p>Loading post...</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'; // We don't even need 'computed' or 'watch'
import { useRoute } from 'vue-router';
// import { useI18n } from 'vue-i18n';
import { allPosts } from '@/assets/data/BlogData.js';

// const { t, locale } = useI18n();
const route = useRoute();
// const post = ref(null);

const post = computed(() => {
  const slug = route.params.slug;
  return allPosts.find(p => p.slug === slug);
});

// Find the post based on the URL slug (This is correct)
onMounted(() => {
  window.scrollTo(0, 0);
});

// Utility Function (This is correct)
const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    timeZone: 'UTC'
  };
  return new Date(dateString).toDateString(options);
};

// --- ADD DYNAMIC PATHS FOR SIDEBAR ---
const blogPath = computed(() => ('/blog'));


// === THE "GETTER FUNCTION" PATTERN ===

// 1. Call useMeta with an ARROW FUNCTION.
// This function will now be re-run by vue-meta whenever
// 'post.value' or 'locale.value' changes.
// useMeta(() => {
useHead(() => {

  if (!post.value) {
    return {
      title: 'Post Not Found | Casatech LLC'
    };
  }

  // Define all language-specific variables
  // const isSpanish = locale.value === 'es';
  const postTitle = post.value.title_en;
  const postDescription = post.value.subtitle_en;
  const postImage = `https://casatechllc.com${post.value.imageLink}`;
  
  // Create correct URLs
  const enUrl = `https://casatechllc.com/blog/${post.value.slug}`;
  const esUrl = `https://casatechllc.com/es/blog/${post.value.slug}`;
  
  // Set the canonical URL to the *current* page's language version
  const canonicalUrl = enUrl;

  return {
    title: postTitle,
    // Add 'lang' attribute to the <html> tag
    htmlAttrs: {
      lang: 'en'
    },
    // Add all meta tags
    meta: [
      { name: 'description', content: postDescription },
      // Open Graph
      { property: 'og:title', content: postTitle },
      { property: 'og:description', content: postDescription },
      { property: 'og:image', content: postImage },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'article' },
      { 
        content: 'en_US' 
      },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: postTitle },
      { name: 'twitter:description', content: postDescription },
      { 
        property: 'og:image:alt',
        content: postTitle 
      },
    ],
    // Add all link tags
    link: [
      // Set the correct canonical URL
      { 
        rel: 'canonical', 
        href: canonicalUrl 
      },
      // Tell Google about the other language versions
      { rel: 'alternate', hreflang: 'en', href: enUrl },
      { rel: 'alternate', hreflang: 'x-default', href: enUrl } // Default to English
    ]
  };
});
</script>

<style scoped>
@import '@/assets/_variables.css';

.page-section {
  padding: var(--spacing-xl) 0;
}

/* Post Header */
.post-header {
  background-size: cover;
  background-position: center center;
  position: relative;
}
.header-overlay {
  /* background-color: rgba(3, 98, 100, 0.85); */
  background-color: rgba(var(--color-primary-rgb), 0.85);
  padding: calc(var(--spacing-top) + var(--spacing-xl)) 0 var(--spacing-xl);
}
.post-header .lead {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 800px;
  margin: 0 auto;
}
.post-header .text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

/* Post Body */
.post-body {
  font-size: 1.1rem;
  line-height: var(--line-height-base);
}
/* This styling will apply to the v-html content */
.post-body :deep(h5) {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-primary);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
}
.post-body :deep(p) {
  margin-bottom: var(--spacing-md);
}
.post-body :deep(ul) {
  padding-left: 2rem;
  margin-bottom: var(--spacing-md);
}
.post-body :deep(li) {
  margin-bottom: var(--spacing-xs);
}
.post-body :deep(strong) {
  font-weight: 700;
  color: var(--color-text-dark);
}
.post-body :deep(code) {
  background-color: #e9ecef;
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: monospace;
}

.reference-title {
  font-family: var(--font-family-headings);
  font-weight: 600;
  color: var(--color-primary);
}

.btn-brand-primary {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 1px solid var(--color-primary);
  font-weight: var(--font-weight-bold);
  transition: var(--transition-default);
}
.btn-brand-primary:hover {
  background-color: color-mix(in srgb, var(--color-primary), black 20%);
  border-color: color-mix(in srgb, var(--color-primary), black 20%);
  color: var(--color-text-light);
}
</style>