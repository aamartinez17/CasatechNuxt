<!-- components/GlobalParticleBackground.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationFrameId = null
let particles = []
let mouse = { x: null, y: null, radius: 250, isLeftPressed: false }

const palette = [
  { r: 56,  g: 189, b: 248 }, // Sky Blue
  { r: 255, g: 255, b: 255 }, // Pure White
  { r: 168, g: 85,  b: 247 }, // Neon Violet
  { r: 52,  g: 211, b: 153 }, // Emerald Green
  { r: 244, g: 63,  b: 94  }  // Coral Pink
]

class Particle3D {
  constructor(width, height) {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.z = (Math.random() * 2) - 1 
    
    this.baseSpeedFactor = (this.z + 1.2) * 0.7
    this.vx = (Math.random() - 0.5) * 0.9 * this.baseSpeedFactor
    this.vy = (Math.random() - 0.5) * 0.9 * this.baseSpeedFactor
    this.vz = (Math.random() - 0.5) * 0.02

    this.currentVx = this.vx
    this.currentVy = this.vy

    this.colorObj = palette[Math.floor(Math.random() * palette.length)]
    this.baseRadius = Math.random() * 3.8 + 2.4
  }

  update(width, height) {
    if (mouse.isLeftPressed && mouse.x !== null && mouse.y !== null) {
      // Pull particles tightly toward the mouse cursor when clicked and held
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > 1) {
        this.x += dx * 0.08 * this.baseSpeedFactor
        this.y += dy * 0.08 * this.baseSpeedFactor
      }
      this.z += (0.5 - this.z) * 0.04

      this.currentVx = this.vx
      this.currentVy = this.vy
    } else {
      // Normal organic drift behavior
      this.currentVx += (this.vx - this.currentVx) * 0.06
      this.currentVy += (this.vy - this.currentVy) * 0.06

      this.x += this.currentVx
      this.y += this.currentVy
      this.z += this.vz

      if (this.x < 0) this.x = width
      if (this.x > width) this.x = 0
      if (this.y < 0) this.y = height
      if (this.y > height) this.y = 0

      if (this.z < -1 || this.z > 1) this.vz *= -1

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (mouse.radius - distance) / mouse.radius
          this.x -= forceDirectionX * force * 1.5
          this.y -= forceDirectionY * force * 1.5
        }
      }
    }
  }

  draw(context) {
    const depthScale = (this.z + 1.5) * 0.75 
    const currentRadius = this.baseRadius * depthScale
    const alpha = (this.z + 1) * 0.275 + 0.45

    context.beginPath()
    context.arc(this.x, this.y, currentRadius, 0, Math.PI * 2)
    context.fillStyle = `rgba(${this.colorObj.r}, ${this.colorObj.g}, ${this.colorObj.b}, ${alpha})`
    context.fill()
  }

  explode(mouseX, mouseY, width, height) {
    const targetX = Math.random() * width
    const targetY = Math.random() * height
    const angle = Math.atan2(targetY - mouseY, targetX - mouseX)
    
    const explosiveSpeed = Math.random() * 25 + 12 
    this.currentVx = Math.cos(angle) * explosiveSpeed
    this.currentVy = Math.sin(angle) * explosiveSpeed
  }
}

const initCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const context = canvas.getContext('2d')
  
  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 7000), 180)
  particles = Array.from({ length: particleCount }, () => new Particle3D(canvas.width, canvas.height))

  const render = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)

    particles.sort((a, b) => a.z - b.z)

    particles.forEach((p, index) => {
      p.update(canvas.width, canvas.height)
      p.draw(context)

      for (let j = index + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const dz = Math.abs(p.z - p2.z)
        const dist = Math.sqrt(dx * dx + dy * dy)

        const maxDist = mouse.isLeftPressed ? 220 : 160

        if (dist < maxDist && dz < 0.7) {
          context.beginPath()
          context.moveTo(p.x, p.y)
          context.lineTo(p2.x, p2.y)
          
          const avgZ = (p.z + p2.z) / 2
          const alphaMultiplier = mouse.isLeftPressed ? 0.8 : 0.5
          const alpha = (1 - (dist / maxDist)) * ((avgZ + 1) * 0.2 + (alphaMultiplier - 0.2))
          
          context.strokeStyle = `rgba(56, 189, 248, ${alpha})`
          context.lineWidth = ((avgZ + 1) * 0.6) + 0.8
          context.stroke()
        }
      }
    })

    animationFrameId = requestAnimationFrame(render)
  }

  render()

  return () => {
    window.removeEventListener('resize', resizeCanvas)
  }
}

const handleMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

const handleMouseLeave = () => {
  mouse.x = null
  mouse.y = null
  if (mouse.isLeftPressed && canvasRef.value) {
    particles.forEach(p => p.explode(mouse.x || window.innerWidth / 2, mouse.y || window.innerHeight / 2, canvasRef.value.width, canvasRef.value.height))
  }
  mouse.isLeftPressed = false
}

const handleMouseDown = (e) => {
  if (e.button === 0) mouse.isLeftPressed = true
}

const handleMouseUp = (e) => {
  if (e.button === 0 && mouse.isLeftPressed) {
    mouse.isLeftPressed = false
    const cx = mouse.x !== null ? mouse.x : window.innerWidth / 2
    const cy = mouse.y !== null ? mouse.y : window.innerHeight / 2
    const width = canvasRef.value ? canvasRef.value.width : window.innerWidth
    const height = canvasRef.value ? canvasRef.value.height : window.innerHeight
    
    particles.forEach(p => p.explode(cx, cy, width, height))
  }
}

onMounted(() => {
  const cleanup = initCanvas()
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mousedown', handleMouseDown)
  window.addEventListener('mouseup', handleMouseUp)
  window.addEventListener('mouseleave', handleMouseLeave)
  
  onUnmounted(() => {
    if (cleanup) cleanup()
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('mouseup', handleMouseUp)
    window.removeEventListener('mouseleave', handleMouseLeave)
  })
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <div 
    class="fixed inset-0 pointer-events-auto z-0 overflow-hidden bg-slate-950 cursor-crosshair"
  >
    <canvas ref="canvasRef" class="absolute inset-0 pointer-events-none"></canvas>
    <div class="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950/80 to-slate-950 pointer-events-none"></div>
  </div>
</template>

<style scoped>
canvas {
  display: block;
}
</style>