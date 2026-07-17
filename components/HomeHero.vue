<template>
  <!-- 
    HERO SECTION 
    Visual Design Pivot: High-end creative agency layout with absolute background blur-balls, 
    interactive elements, and rich typography.
  -->
  <section class="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 min-h-[90vh] flex items-center">
    
    <!-- Dynamic Decorative Gradients (Background Blobs) -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style="animation-duration: 8s;"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse" style="animation-duration: 12s;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        <!-- LEFT COLUMN: Copy & Interactive Typography -->
        <div class="max-w-2xl">
          
          <!-- Eyebrow with Gradient Pulse Dot -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 15 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, delay: 100 } }"
            class="inline-flex items-center gap-2 mb-4"
          >
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <span class="text-secondary uppercase tracking-widest font-bold text-xs sm:text-sm">
              Custom Web Design & Engineering
            </span>
          </div>

          <!-- Headline with "Base-Up" Overflow Animation -->
          <h1 class="text-primary font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] mb-6">
            <!-- Line 1: Slid from bottom within a clipped container -->
            <span class="block overflow-hidden pb-1">
              <span 
                v-motion
                :initial="{ y: '100%' }"
                :enter="{ y: '0%', transition: { type: 'spring', stiffness: 120, damping: 15, delay: 200 } }"
                class="block"
              >
                We design digital
              </span>
            </span>
            
            <!-- Line 2: The interactive dynamic typist -->
            <span class="block overflow-hidden py-1">
              <span 
                v-motion
                :initial="{ y: '100%' }"
                :enter="{ y: '0%', transition: { type: 'spring', stiffness: 120, damping: 15, delay: 350 } }"
                class="block"
              >
                experiences for
              </span>
            </span>

            <!-- Line 3: Dynamic Word with Accent Gradient -->
            <span class="block overflow-hidden pt-1">
              <span 
                v-motion
                :initial="{ y: '100%' }"
                :enter="{ y: '0%', transition: { type: 'spring', stiffness: 120, damping: 15, delay: 500 } }"
                class="inline-block text-brand-gradient min-h-[1.25em]"
              >
                {{ currentWord }}<span class="animate-blink font-light ml-1">|</span>
              </span>
            </span>
          </h1>

          <!-- Subhead: Optimized value-proposition readability -->
          <p 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150, delay: 650 } }"
            class="text-body text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
          >
            We turn generic websites into unique brand engines. From seamless e-commerce platforms to captivating local business showcases, Casatech LLC blends flawless frontend art with high-performance code.
          </p>

          <!-- CTA Buttons & Interactive Micro-Proof -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150, delay: 800 } }"
            class="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <!-- Primary CTA with Hover Lift & Accent Pulse -->
            <NuxtLink 
              to="/contact" 
              class="group relative inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-on-cta font-heading font-bold py-3.5 px-8 rounded shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 overflow-hidden"
            >
              <span class="relative z-10 flex items-center gap-2">
                Launch Your Project
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div class="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-secondary to-primary opacity-20 transition-transform duration-500"></div>
            </NuxtLink>
            
            <!-- Secondary Portfolio CTA -->
            <NuxtLink 
              to="/portfolio"
              class="font-heading font-bold py-3.5 px-6 text-primary hover:text-secondary transition-colors"
            >
              View Our Showcases
            </NuxtLink>
          </div>
        </div>

        <!-- RIGHT COLUMN: Interactive Dashboard/Visual -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.95, y: 30 }"
          :enter="{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20, delay: 900 } }"
          class="relative lg:ml-auto w-full max-w-lg lg:max-w-none mt-12 lg:mt-0"
        >
          <!-- Neon Accent Ring Behind Media -->
          <div class="absolute -inset-1.5 bg-gradient-to-r from-secondary via-primary to-cta rounded-2xl blur opacity-30 animate-spin" style="animation-duration: 20s;"></div>
          
          <!-- Mockup Frame Container to mimic high-end web design agency work -->
          <div class="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden group">
            <!-- Browser Top Bar Accent -->
            <div class="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-full bg-red-400"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span class="w-3 h-3 rounded-full bg-green-400"></span>
              <span class="ml-4 text-xs font-mono text-slate-400 bg-gray-100 px-3 py-0.5 rounded truncate max-w-xs">casatechllc.com/projects</span>
            </div>
            
            <!-- Hero Image Wrapper with zoom effect on hover -->
            <div class="overflow-hidden aspect-video relative">
              <img 
                src="/images/homeview-header.png" 
                alt="Modern interactive web engineering project by Casatech" 
                width="800"
                height="600"
                loading="eager"
                fetchpriority="high"
                class="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              >
              <!-- Interactive Visual Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span class="text-white text-sm font-semibold tracking-wide bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg">Interactive Web Design</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Array of words covering various industries to reach everyone
const words = [
  'e-commerce businesses.',
  'local restaurants.',
  'bold portfolios.',
  'growth-focused startups.',
  'creative studios.',
  'service professionals.'
]

const currentWord = ref('')
let wordIndex = 0
let charIndex = 0
let isDeleting = false
let timer = null

const typeSpeed = 100
const deleteSpeed = 50
const pauseBetweenWords = 2000

const handleTyping = () => {
  const currentFullWord = words[wordIndex]

  if (!isDeleting) {
    // Type next letter
    currentWord.value = currentFullWord.substring(0, charIndex + 1)
    charIndex++

    if (charIndex === currentFullWord.length) {
      // Pause at full word before deleting
      isDeleting = true
      timer = setTimeout(handleTyping, pauseBetweenWords)
    } else {
      timer = setTimeout(handleTyping, typeSpeed)
    }
  } else {
    // Delete letter
    currentWord.value = currentFullWord.substring(0, charIndex - 1)
    charIndex--

    if (charIndex === 0) {
      isDeleting = false
      // Move to next word in cycle
      wordIndex = (wordIndex + 1) % words.length
      timer = setTimeout(handleTyping, 500) // Brief pause before starting next word
    } else {
      timer = setTimeout(handleTyping, deleteSpeed)
    }
  }
}

onMounted(() => {
  handleTyping()
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-blink {
  animation: blink 0.8s infinite;
}
</style>