<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import rough from 'roughjs'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  // rect | ellipse | line | arrow | curve
  shape: { type: String, default: 'rect' },
  width: { type: Number, default: 200 },
  height: { type: Number, default: 100 },
  // curve only: [[x, y], ...] in local px, drawn as a smooth line through the points
  points: { type: Array, default: () => [] },
  color: { type: String, default: '#3a332a' },
  fill: { type: String, default: '' },
  // hachure | solid | zigzag | cross-hatch | dots | scribble
  fillStyle: { type: String, default: 'hachure' },
  strokeWidth: { type: Number, default: 2.5 },
  roughness: { type: Number, default: 1.8 },
  seed: { type: Number, default: 3 },
  // draw-in animation timing (ms)
  duration: { type: Number, default: 700 },
  delay: { type: Number, default: 0 },
  // reveal at click N (needs clicks registered on the slide, e.g. via v-click on text)
  at: { type: [Number, String], default: undefined },
})

const svgEl = ref(null)
const { $nav, $clicks, $page, $renderContext } = useSlideContext()

const isAnimatable = computed(() => ['slide', 'presenter'].includes($renderContext.value))

const shouldShow = computed(() => {
  if (!isAnimatable.value)
    return true
  if (props.at === undefined || props.at === '')
    return true
  return $clicks.value >= Number(props.at)
})

function build() {
  const svg = svgEl.value
  if (!svg)
    return
  svg.replaceChildren()
  const rc = rough.svg(svg)
  const pad = 8
  const w = props.width
  const h = props.height
  const opts = {
    stroke: props.color,
    strokeWidth: props.strokeWidth,
    roughness: props.roughness,
    seed: props.seed,
    fill: props.fill || undefined,
    fillStyle: props.fillStyle,
    fillWeight: 1.2,
  }

  if (props.shape === 'rect') {
    svg.appendChild(rc.rectangle(pad, pad, w - pad * 2, h - pad * 2, opts))
  }
  else if (props.shape === 'ellipse') {
    svg.appendChild(rc.ellipse(w / 2, h / 2, w - pad * 2, h - pad * 2, opts))
  }
  else if (props.shape === 'line') {
    svg.appendChild(rc.line(pad, h / 2, w - pad, h / 2, opts))
  }
  else if (props.shape === 'curve') {
    svg.appendChild(rc.curve(props.points, opts))
  }
  else if (props.shape === 'arrow') {
    const y = h / 2
    svg.appendChild(rc.line(pad, y, w - pad, y, opts))
    svg.appendChild(rc.line(w - pad, y, w - pad - 16, y - 10, opts))
    svg.appendChild(rc.line(w - pad, y, w - pad - 16, y + 10, opts))
  }
}

function play() {
  const svg = svgEl.value
  if (!svg)
    return
  if (!isAnimatable.value)
    return
  let acc = props.delay
  svg.querySelectorAll('path').forEach((p) => {
    const len = p.getTotalLength()
    p.style.strokeDasharray = String(len)
    p.style.strokeDashoffset = String(len)
    p.animate(
      [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
      { duration: props.duration, delay: acc, fill: 'forwards', easing: 'ease-out' },
    )
    acc += props.duration * 0.5
  })
}

const isCurrentSlide = computed(() => $nav.value.currentPage === $page.value)

onMounted(() => {
  build()
  if (shouldShow.value && isCurrentSlide.value)
    requestAnimationFrame(play)
})

watch([shouldShow, isCurrentSlide], ([show, current]) => {
  if (show && current) {
    build()
    requestAnimationFrame(play)
  }
})
</script>

<template>
  <div
    class="rough-wrap relative inline-block align-middle"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      opacity: shouldShow ? 1 : 0,
      transition: 'opacity 150ms ease',
    }"
  >
    <svg ref="svgEl" :width="width" :height="height" class="absolute inset-0" />
    <div class="absolute inset-0 flex items-center justify-center text-center px-3">
      <slot />
    </div>
  </div>
</template>
