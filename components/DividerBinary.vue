<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationFrameId = null
let chars = []

// Character configuration class for floating, tumbling binary items
class TumblingBinary {
  constructor(width, height) {
    this.reset(width, height, true)
  }

  reset(width, height, initial = false) {
    // Start off-screen to the left if initial, or randomize across width
    this.x = initial ? Math.random() * width : -100
    
    // Large typography size
    this.fontSize = Math.floor(Math.random() * 16) + 32 // 32px to 48px
    
    // Clamp Y position safely inside the container height to prevent vertical cutting
    const padding = this.fontSize
    this.startY = Math.random() * (height - padding * 2) + padding
    this.y = this.startY

    // Horizontal drift speed from left to right
    this.vx = Math.random() * 1.5 + 1.0
    
    // Controlled vertical bobbing amplitude so it stays inside bounds
    this.bobFrequency = Math.random() * 0.02 + 0.01
    this.bobAmplitude = Math.random() * 14 + 8

    // Binary content
    this.char = Math.random() > 0.5 ? '1' : '0'

    // 3D Rotation angles and velocities for tumbling effect
    this.angleX = Math.random() * Math.PI * 2
    this.angleY = Math.random() * Math.PI * 2
    this.angleZ = Math.random() * Math.PI * 2
    
    this.vAngleX = (Math.random() - 0.5) * 0.03
    this.vAngleY = (Math.random() - 0.5) * 0.03
    this.vAngleZ = (Math.random() - 0.5) * 0.02

    // Z-depth for perspective scaling (-1 to 1)
    this.z = Math.random() * 2 - 1
  }

  update(width, height, time) {
    // Move horizontally from left to right
    this.x += this.vx

    // Bob up and down safely around startY
    this.y = this.startY + Math.sin(time * this.bobFrequency * 50 + this.x * 0.01) * this.bobAmplitude

    // Rotate/tumble in 3D space
    this.angleX += this.vAngleX
    this.angleY += this.vAngleY
    this.angleZ += this.vAngleZ

    // Recycle when it moves past the right side of the screen
    if (this.x > width + 100) {
      this.reset(width, height, false)
    }
  }

  draw(context) {
    context.save()
    context.translate(this.x, this.y)

    // Apply 3D-like tilt & scale illusion via canvas transformations
    const scaleX = Math.cos(this.angleY)
    const scaleY = Math.cos(this.angleX)
    const depthScale = (this.z + 1.5) * 0.75

    context.scale(scaleX * depthScale, scaleY * depthScale)
    context.rotate(this.angleZ)

    // Styling the large glowing binary glyph
    context.font = `bold ${this.fontSize}px monospace`
    context.textAlign = 'center'
    context.textBaseline = 'middle'

    // Opacity tied to depth
    const alpha = (this.z + 1) * 0.25 + 0.35
    context.fillStyle = `rgba(56, 189, 248, ${alpha})` // Sky blue glow color
    context.shadowColor = 'rgba(56, 189, 248, 0.6)'
    context.shadowBlur = 12

    context.fillText(this.char, 0, 0)
    context.restore()
  }
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = canvas.parentElement.offsetHeight || 120
  }
  resize()
  window.addEventListener('resize', resize)

  // Number of items in the separator stream
  const count = Math.min(Math.floor(window.innerWidth / 60), 25)
  chars = Array.from({ length: count }, () => new TumblingBinary(canvas.width, canvas.height))

  let time = 0
  const render = () => {
    time += 0.016
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    chars.forEach(item => {
      item.update(canvas.width, canvas.height, time)
      item.draw(ctx)
    })

    animationFrameId = requestAnimationFrame(render)
  }

  render()

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    cancelAnimationFrame(animationFrameId)
  })
})
</script>

<template>
  <div class="relative w-full h-32 bg-transparent overflow-x-hidden overflow-y-visible flex items-center justify-center select-none">
    <!-- Canvas carrying the transparent tumbling stream -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>
  </div>
</template>

<style scoped>
canvas {
  display: block;
}
</style>