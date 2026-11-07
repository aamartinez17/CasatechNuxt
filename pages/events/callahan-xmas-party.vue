<!-- pages/events/callahan-xmas-party.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  title: "Callahan's First Annual Christmas Eve Party - RSVP",
  meta: [
    { name: 'description', content: 'Join us for Callahan’s First Annual Christmas Eve Party! Celebrate the magic of the night with festive food, warm drinks, and holiday cheer.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap' }
  ]
})

// Form state
const guestName = ref('')
const guestEmail = ref('')
const guestPhone = ref('')
const guestCount = ref(1)
const dietaryNotes = ref('')
const attending = ref('yes')
const isSubmitted = ref(false)

const handleRSVP = async () => {
  if (!guestName.value.trim()) return
  
  try {
    const response = await $fetch('/.netlify/functions/send-xmas-rsvp', {
      method: 'POST',
      body: {
        name: guestName.value,
        email: guestEmail.value,
        phone: guestPhone.value,
        guestCount: guestCount.value,
        attending: attending.value,
        dietaryNotes: dietaryNotes.value,
        botField: botField.value
      }
    })
    isSubmitted.value = true
  } catch (error) {
    console.error('RSVP submission error:', error)
    alert('There was an issue submitting your RSVP. Please try again or email Shane directly.')
  }
}

// Bot trap
const botField = ref('')

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
  <div class="relative min-h-screen bg-[#990000] text-[#fbf8ef] font-sans selection:bg-[#ffd700] selection:text-[#990000] overflow-x-hidden flex flex-col justify-between py-6">
    
    <!-- Rich Festive Red Background Base with subtle gradient -->
    <div class="fixed inset-0 pointer-events-none z-0 bg-[#990000]">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#b30000] via-[#990000] to-[#660000]"></div>
    </div>

    <!-- Main Content Container -->
    <div class="relative z-20 max-w-7xl mx-auto px-4 w-full flex-grow flex flex-col items-center justify-center">
      
      <!-- Gold Border Outer Card with Festive Forest Green Inner Contrast -->
      <div class="w-full bg-[#133020] text-[#fbf8ef] rounded-2xl p-5 sm:p-8 lg:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] border-4 border-[#d4af37] relative overflow-hidden ring-1 ring-black/20">
        
        <!-- Festive Top Decorative Banner -->
        <div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#ffd700] via-[#ffffff] to-[#ffd700]"></div>

        <!-- Static Cursive Merry Christmas Header -->
        <div class="text-center pb-4 mb-4 border-b border-[#234e35] overflow-hidden">
          <h2 
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-xl bg-gradient-to-r from-[#ff4d4d] via-[#ff8080] to-[#b30000] bg-clip-text text-transparent"
            style="font-family: 'Pacifico', cursive;"
          >
            Merry Christmas
          </h2>
        </div>

        <!-- Desktop 2-Column Grid Layout (Left: Title thru Image & Details, Right: RSVP Form) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          <!-- LEFT COLUMN (Title through Image & Details) -->
          <div class="lg:col-span-7 flex flex-col justify-between space-y-3">
            
            <!-- HEADER SECTION -->
            <div class="text-center lg:text-left space-y-1">
              <h1 class="font-serif text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-wide leading-tight drop-shadow-md">
                <span class="bg-gradient-to-r from-[#ffd700] via-[#fff8dc] to-[#f0e68c] bg-clip-text text-transparent drop-shadow">
                  CALLAHAN’S FIRST ANNUAL CHRISTMAS EVE PARTY
                </span>
              </h1>
              <div>
                <span class="inline-block text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#ffd700] px-3 py-0.5 rounded-full bg-[#0d2115] border border-[#d4af37]/40 shadow-inner">
                  <font-awesome-icon icon="solid fa-star" class="text-yellow-400 mr-1" /> CELEBRATE THE MAGIC OF THE NIGHT! <font-awesome-icon icon="solid fa-star" class="text-yellow-400 ml-1" />
                </span>
              </div>
            </div>

            <!-- REFERENCE IMAGE CONTAINER WITH GOLD BORDER -->
            <div class="relative group my-0.5">
              <div class="absolute -inset-1 bg-gradient-to-r from-[#d4af37] via-[#fff3b0] to-[#d4af37] rounded-xl blur-sm opacity-75"></div>
              
              <div class="relative bg-[#0d2115] p-1.5 rounded-xl border-2 border-[#d4af37] shadow-2xl overflow-hidden text-center">
                <NuxtImg 
                  src="/events/xmas-gathering.jpg" 
                  alt="Christmas Gathering Illustration" 
                  class="w-full h-auto object-cover rounded-lg shadow-inner max-h-[190px] sm:max-h-[220px] lg:max-h-[200px]"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- EVENT LOGISTICS & CLICKABLE DETAILS -->
            <div class="py-2 px-3 space-y-1 bg-[#0d2115]/60 rounded-xl border border-[#234e35] text-center shadow-inner text-xs sm:text-sm">
              <div class="flex flex-wrap items-center justify-around gap-2 font-bold text-[#ffd700]">
                <span><font-awesome-icon icon="solid fa-calendar-days" class="mr-1" /> <a href="#details" class="text-[#fbf8ef] hover:underline">Dec 24th</a></span>
                <span><font-awesome-icon icon="solid fa-clock" class="mr-1" /> <a href="#details" class="text-[#fbf8ef] hover:underline">6:00 PM Till Late</a></span>
                <span><font-awesome-icon icon="solid fa-location-dot" class="mr-1" /> <a href="https://maps.google.com/?q=358+Gravel+St,+Meriden,+CT+06450" target="_blank" class="text-[#fbf8ef] underline hover:text-[#ffd700]">Meriden, CT</a></span>
              </div>
            </div>

            <!-- THOUGHTFUL MESSAGE & DETAILS SECTION WITH PARKING -->
            <div id="details" class="bg-[#0d2115]/80 p-3 rounded-xl border border-[#d4af37]/40 text-xs text-[#fbf8ef] space-y-1.5 leading-relaxed font-serif">
              <p class="text-[#ffd700] font-bold font-sans uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <font-awesome-icon icon="solid fa-holly-berry" class="text-red-500" /> Event Details & Parking Guidelines
              </p>


              <p class="italic text-[11px] sm:text-xs">
                "As the year winds down and the winter snow settles in, there is nothing quite like gathering by the fire with the people who mean the most. We invite you to join us for an evening filled with laughter, great conversations, delicious food, and holiday warmth!"
              </p>
              
              <!-- Parking Instructions -->
              <div class="bg-[#133020]/90 p-2 rounded-lg border border-[#d4af37]/20 text-[11px] font-sans space-y-1 text-slate-200">
                <p class="font-bold text-[#ffd700] flex items-center gap-1">
                  <font-awesome-icon icon="solid fa-car" /> Parking Instructions:
                </p>
                <p>• You are welcome to park in the <strong>driveway or on the grass</strong>.</p>
                <p>• Please <strong>avoid parking on the road</strong>.</p>
                <p>• Neighbor is not home and you are welcome to park there, but <em>only as a last option</em> — please call before parking there.</p>
              </div>

              <div class="pt-1 text-[11px] font-mono text-[#8fa89b] flex flex-wrap gap-x-4 gap-y-1 justify-between border-t border-[#234e35] mt-1 pt-1">
                <span><font-awesome-icon icon="solid fa-map-pin" class="mr-1 text-[#ffd700]" /> <a href="https://maps.google.com/?q=358+Gravel+St,+Meriden,+CT+06450" target="_blank" class="text-[#ffd700] underline">358 Gravel St, Meriden, CT 06450</a></span>
                <span><font-awesome-icon icon="solid fa-phone" class="mr-1 text-[#ffd700]" /> <a href="tel:5708319060" class="text-[#ffd700] underline">570-831-9060</a></span>
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN (RSVP Form & Highlights) -->
          <div class="lg:col-span-5 flex flex-col justify-center space-y-3">
            
            <!-- HIGHLIGHTS BANNER -->
            <div class="bg-[#c41e3a] text-white py-2 px-4 rounded-lg text-center shadow-md border border-[#ffd700]/40">
              <p class="text-[11px] sm:text-xs font-extrabold tracking-wider uppercase drop-shadow flex items-center justify-center gap-1.5">
                <font-awesome-icon icon="solid fa-gift" /> FESTIVE FOOD, WARM DRINKS & HOLIDAY CHEER! <font-awesome-icon icon="solid fa-champagne-glasses" />
              </p>
            </div>

            <!-- RSVP FORM SECTION -->
            <div class="bg-[#fcf9f2] text-[#133020] p-4 sm:p-5 rounded-xl border border-[#d4af37] shadow-xl">
              <div v-if="!isSubmitted">
                <h3 class="text-base sm:text-lg font-bold font-serif text-[#133020] mb-2 text-center">
                  Reserve Your Spot
                </h3>

                <form @submit.prevent="handleRSVP" class="space-y-2.5">
                  <!-- Honeypot Bot Field -->
                  <div class="hidden" aria-hidden="true">
                    <label>Do not fill this out if you are human: <input v-model="botField" type="text" tabindex="-1" autocomplete="off" /></label>
                  </div>

                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-[#355843] mb-0.5">Your Full Name *</label>
                    <input 
                      v-model="guestName" 
                      type="text" 
                      required
                      placeholder="e.g. Clark Griswold"
                      class="w-full px-3 py-2 rounded-lg border border-[#c5b59b] bg-white text-[#133020] focus:outline-none focus:border-[#c41e3a] focus:ring-1 focus:ring-[#c41e3a]/20 transition-all text-xs sm:text-sm shadow-sm"
                    />
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label class="block text-[10px] font-bold uppercase tracking-wider text-[#355843] mb-0.5">Email Address (Optional)</label>
                      <input 
                        v-model="guestEmail" 
                        type="email" 
                        placeholder="e.g. clark@griswold.com"
                        class="w-full px-3 py-2 rounded-lg border border-[#c5b59b] bg-white text-[#133020] focus:outline-none focus:border-[#c41e3a] focus:ring-1 focus:ring-[#c41e3a]/20 transition-all text-xs sm:text-sm shadow-sm"
                      />
                    </div>
                    <div>
                      <label class="block text-[10px] font-bold uppercase tracking-wider text-[#355843] mb-0.5">Phone Number (Optional)</label>
                      <input 
                        v-model="guestPhone" 
                        type="tel" 
                        placeholder="e.g. 555-123-4567"
                        class="w-full px-3 py-2 rounded-lg border border-[#c5b59b] bg-white text-[#133020] focus:outline-none focus:border-[#c41e3a] focus:ring-1 focus:ring-[#c41e3a]/20 transition-all text-xs sm:text-sm shadow-sm"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label class="block text-[10px] font-bold uppercase tracking-wider text-[#355843] mb-0.5">Will you attend?</label>
                      <select 
                        v-model="attending"
                        class="w-full px-3 py-2 rounded-lg border border-[#c5b59b] bg-white text-[#133020] focus:outline-none focus:border-[#c41e3a] focus:ring-1 focus:ring-[#c41e3a]/20 transition-all text-xs sm:text-sm shadow-sm"
                      >
                        <option value="yes">Joyfully Accept (Yes!)</option>
                        <option value="no">Regretfully Decline (No)</option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-[10px] font-bold uppercase tracking-wider text-[#355843] mb-0.5">Total Guests</label>
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
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-[#355843] mb-0.5">Dietary Restrictions / Notes</label>
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
                    <font-awesome-icon icon="solid fa-gift" class="mr-1" /> Send RSVP
                  </button>
                </form>
              </div>

              <!-- Success State -->
              <div v-else class="text-center py-6 space-y-3">
                <div class="w-12 h-12 bg-[#133020] text-[#ffd700] rounded-full flex items-center justify-center mx-auto text-xl shadow-md border border-[#ffd700]">
                  <font-awesome-icon icon="solid fa-tree" />
                </div>
                <h3 class="text-xl font-serif font-bold text-[#133020]">
                  See You on Christmas Eve!
                </h3>
                <p class="text-xs sm:text-sm text-[#355843] max-w-sm mx-auto leading-relaxed">
                  Thank you, <span class="font-bold text-[#133020]">{{ guestName }}</span>! Your response has been recorded.
                </p>
                <button 
                  @click="isSubmitted = false"
                  class="text-[10px] font-mono uppercase tracking-widest text-[#c41e3a] underline hover:text-[#a01830] pt-1"
                >
                  Update RSVP Response
                </button>
              </div>
            </div>

            <!-- Footer Note inside card with smaller portfolio link print -->
            <div class="text-center space-y-1">
              <div class="text-[11px] text-[#ffd700] font-mono tracking-wide">
                <p>JOIN US FOR A NIGHT OF MERRY-MAKING! • RSVP BY DEC 15TH</p>
              </div>
              <p class="italic text-[11px] sm:text-xs text-[#fff8dc] font-sans">
                "Merry Christmas everyone! I hope you all have a wonderful time."
              </p>
              <p class="italic text-[11px] sm:text-xs text-[#fff8dc] font-sans">
                -Alex (Finnegan ShellCrest)
              </p>
              <div class="text-[9px] text-[#ffd700]/70 font-mono">
                Check out some of my other work at my website <a href="https://casatechllc.com/projects" target="_blank" class="underline hover:text-[#ffd700]">casatechllc.com/projects</a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

    <!-- CANVAS SNOWFALL LAYER -->
    <canvas ref="canvasRef" class="fixed inset-0 pointer-events-none z-30"></canvas>

    <!-- Minimalist Footer -->
    <footer class="relative z-20 py-3 text-center text-xs text-[#ffd700]/80 font-mono">
      Hosted with <font-awesome-icon icon="solid fa-snowflake" class="text-sky-300" /> for Callahan's Christmas Eve Celebration
    </footer>

  </div>
</template>

<style scoped>
</style>