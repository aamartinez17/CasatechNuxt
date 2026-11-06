<!-- pages/events/callahan-xmas-party.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

useHead({
  title: "Callahan's First Annual Christmas Eve Party - RSVP",
  meta: [
    { name: 'description', content: 'Join us for Callahan’s First Annual Christmas Eve Party! Celebrate the magic of the night with festive food, warm drinks, and holiday cheer.' }
  ]
})

// Form state
const guestName = ref('')
const guestCount = ref(1)
const dietaryNotes = ref('')
const attending = ref('yes')
const isSubmitted = ref(false)

const handleRSVP = () => {
  if (!guestName.value.trim()) return
  isSubmitted.value = true
}

const canvasRef = ref(null)
let animationFrameId = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const flakeCount = 75
  const snowflakes = Array.from({ length: flakeCount }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 4 + 1.5,
    speed: Math.random() * 2.5 + 0.8,
    density: Math.random() * 20,
    opacity: Math.random() * 0.8 + 0.2,
    isForeground: Math.random() > 0.6
  }))

  let angle = 0

  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    angle += 0.01

    snowflakes.forEach((flake) => {
      ctx.save()
      ctx.fillStyle = flake.isForeground 
        ? `rgba(255, 255, 255, ${flake.opacity * 0.95})` 
        : `rgba(240, 248, 255, ${flake.opacity * 0.5})`
      
      ctx.beginPath()
      ctx.arc(flake.x, flake.y, flake.isForeground ? flake.radius * 1.4 : flake.radius, 0, Math.PI * 2, true)
      ctx.fill()
      ctx.restore()

      flake.y += flake.isForeground ? flake.speed * 1.3 : flake.speed
      flake.x += Math.sin(angle + flake.density) * (flake.isForeground ? 1.2 : 0.5)

      if (flake.y > canvas.height + 10) {
        flake.y = -10
        flake.x = Math.random() * canvas.width
      }
    })

    animationFrameId = requestAnimationFrame(render)
  }

  render()

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
  })
})
</script>

<template>
  <div class="relative min-h-screen lg:h-screen -mt-12 bg-[#f7f2e7] text-[#1b3022] font-sans selection:bg-[#c41e3a] selection:text-white overflow-x-hidden flex flex-col justify-between">
    
    <!-- Light Background Base -->
    <div class="fixed inset-0 pointer-events-none z-0 bg-[#f7f2e7]">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fffcf5] via-[#f7f2e7] to-[#eee4d0]"></div>
    </div>

    <!-- Main Content Container configured for 1-page desktop fit -->
    <div class="relative z-20 max-w-7xl mx-auto px-4 py-6 sm:py-8 lg:py-6 w-full flex-grow flex flex-col items-center justify-center">
      
      <!-- Gold Border Outer Card matching reference poster (Theme: Rich Forest Green Foreground) -->
      <div class="w-full bg-[#133020] text-[#fbf8ef] rounded-2xl p-5 sm:p-8 lg:p-8 shadow-[0_25px_60px_rgba(15,30,20,0.4)] border-4 border-[#d4af37] relative overflow-hidden ring-1 ring-black/15">
        
        <!-- Festive Top Decorative Banner -->
        <div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#c41e3a] via-[#d4af37] to-[#c41e3a]"></div>

        <!-- Desktop 2-Column Grid Layout (Left: Title thru Image, Right: RSVP Form) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          <!-- LEFT COLUMN (Title through Image & Details) -->
          <div class="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            <!-- HEADER SECTION -->
            <div class="text-center lg:text-left space-y-2">
              <h1 class="font-serif text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide leading-tight drop-shadow-md">
                <span class="bg-gradient-to-r from-[#ffd700] via-[#fff8dc] to-[#f0e68c] bg-clip-text text-transparent drop-shadow">
                  CALLAHAN’S FIRST ANNUAL CHRISTMAS EVE PARTY
                </span>
              </h1>
              <div>
                <span class="inline-block text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#ffd700] px-4 py-1 rounded-full bg-[#0d2115] border border-[#d4af37]/40 shadow-inner">
                  ★ CELEBRATE THE MAGIC OF THE NIGHT! ★
                </span>
              </div>
            </div>

            <!-- REFERENCE IMAGE CONTAINER WITH GOLD BORDER -->
            <div class="relative group my-1">
              <div class="absolute -inset-1 bg-gradient-to-r from-[#d4af37] via-[#fff3b0] to-[#d4af37] rounded-xl blur-sm opacity-75"></div>
              
              <div class="relative bg-[#0d2115] p-1.5 rounded-xl border-2 border-[#d4af37] shadow-2xl overflow-hidden">
                <NuxtImg 
                  src="/events/xmas-gathering.jpg" 
                  alt="Christmas Gathering Illustration" 
                  class="w-full h-auto object-cover rounded-lg shadow-inner max-h-[280px] sm:max-h-[340px] lg:max-h-[320px]"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- EVENT LOGISTICS -->
            <div class="py-3 px-4 space-y-2 bg-[#0d2115]/60 rounded-xl border border-[#234e35] text-center shadow-inner flex flex-wrap items-center justify-around">
              <div class="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#ffd700]">
                <span>★</span> 📅 <span class="text-[#fbf8ef]">DEC 24TH</span>
              </div>
              <div class="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#ffd700]">
                <span>✦</span> ⏰ <span class="text-[#fbf8ef]">6:00 PM TILL LATE</span>
              </div>
              <div class="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#ffd700]">
                <span>★</span> 📍 <span class="text-[#fbf8ef]">MERIDEN, CT</span>
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN (RSVP Form & Highlights) -->
          <div class="lg:col-span-5 flex flex-col justify-center space-y-4">
            
            <!-- HIGHLIGHTS BANNER -->
            <div class="bg-[#c41e3a] text-white py-2 px-4 rounded-lg text-center shadow-md border border-[#ffd700]/40">
              <p class="text-[11px] sm:text-xs font-extrabold tracking-wider uppercase drop-shadow">
                🎄 FESTIVE FOOD, WARM DRINKS & HOLIDAY CHEER! 🎄
              </p>
            </div>

            <!-- RSVP FORM SECTION -->
            <div class="bg-[#fcf9f2] text-[#133020] p-5 sm:p-6 rounded-xl border border-[#d4af37] shadow-xl">
              <div v-if="!isSubmitted">
                <h3 class="text-lg font-bold font-serif text-[#133020] mb-3 text-center">
                  Reserve Your Spot
                </h3>

                <form @submit.prevent="handleRSVP" class="space-y-3">
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-[#355843] mb-1">Your Full Name *</label>
                    <input 
                      v-model="guestName" 
                      type="text" 
                      required
                      placeholder="e.g. Clark Griswold"
                      class="w-full px-3 py-2 rounded-lg border border-[#c5b59b] bg-white text-[#133020] focus:outline-none focus:border-[#c41e3a] focus:ring-1 focus:ring-[#c41e3a]/20 transition-all text-xs sm:text-sm shadow-sm"
                    />
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label class="block text-[10px] font-bold uppercase tracking-wider text-[#355843] mb-1">Will you attend?</label>
                      <select 
                        v-model="attending"
                        class="w-full px-3 py-2 rounded-lg border border-[#c5b59b] bg-white text-[#133020] focus:outline-none focus:border-[#c41e3a] focus:ring-1 focus:ring-[#c41e3a]/20 transition-all text-xs sm:text-sm shadow-sm"
                      >
                        <option value="yes">Joyfully Accept (Yes!)</option>
                        <option value="no">Regretfully Decline (No)</option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-[10px] font-bold uppercase tracking-wider text-[#355843] mb-1">Total Guests</label>
                      <input 
                        v-model.number="guestCount" 
                        type="number" 
                        min="1" 
                        max="6"
                        class="w-full px-3 py-2 rounded-lg border border-[#c5b59b] bg-white text-[#133020] focus:outline-none focus:border-[#c41e3a] focus:ring-1 focus:ring-[#c41e3a]/20 transition-all text-xs sm:text-sm shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-[#355843] mb-1">Dietary Restrictions / Notes</label>
                    <input 
                      v-model="dietaryNotes" 
                      type="text" 
                      placeholder="e.g. Vegetarian, Gluten-free"
                      class="w-full px-3 py-2 rounded-lg border border-[#c5b59b] bg-white text-[#133020] focus:outline-none focus:border-[#c41e3a] focus:ring-1 focus:ring-[#c41e3a]/20 transition-all text-xs sm:text-sm shadow-sm"
                    />
                  </div>

                  <button 
                    type="submit"
                    class="w-full mt-2 py-3 px-4 rounded-xl bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold font-serif tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 text-sm cursor-pointer border border-[#ffd700]/30"
                  >
                    Send RSVP 🎁
                  </button>
                </form>
              </div>

              <!-- Success State -->
              <div v-else class="text-center py-6 space-y-3 animate-fade-in">
                <div class="w-12 h-12 bg-[#133020] text-[#ffd700] rounded-full flex items-center justify-center mx-auto text-xl shadow-md border border-[#ffd700]">
                  🎄
                </div>
                <h3 class="text-xl font-serif font-bold text-[#133020]">
                  See You on Christmas Eve!
                </h3>
                <p class="text-xs sm:text-sm text-[#355843] max-w-sm mx-auto leading-relaxed">
                  Thank you, <span class="font-bold text-[#133020]">{{ guestName }}</span>! Your response has been recorded. Get ready for a night of merry-making in Meriden, CT.
                </p>
                <button 
                  @click="isSubmitted = false"
                  class="text-[10px] font-mono uppercase tracking-widest text-[#c41e3a] underline hover:text-[#a01830] pt-1"
                >
                  Update RSVP Response
                </button>
              </div>
            </div>

            <!-- Footer Note inside card -->
            <div class="text-center text-[11px] text-[#ffd700] font-mono tracking-wide">
              <p>JOIN US FOR A NIGHT OF MERRY-MAKING! • RSVP BY DEC 15TH</p>
            </div>

          </div>

        </div>

      </div>
    </div>

    <!-- CANVAS SNOWFALL LAYER -->
    <canvas ref="canvasRef" class="fixed inset-0 pointer-events-none z-30"></canvas>

    <!-- Minimalist Footer -->
    <footer class="relative z-20 py-3 text-center text-xs text-[#627a6c] font-mono">
      Hosted with ❄️ for Callahan's Christmas Eve Celebration
    </footer>

  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
</style>