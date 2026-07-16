<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $clicks, $nav, $page, $renderContext } = useSlideContext()

// Steps: 0 GitHub · 1 Vercel + tarik code · 2 database + tarik data · 3 user + kirim
const LAST_STEP = 3
// Comet timing (seconds): one glowing pulse per wire, staggered so the
// story reads code → data → user, then loops forever once revealed.
const PERIOD = 2.6
const TRAVEL = 1.5
const TAIL = 36

const WIRES = [
  { id: 'w-code', step: 1, phase: 0 },
  { id: 'w-data', step: 2, phase: 0.9 },
  { id: 'w-user', step: 3, phase: 1.7 },
]

const root = ref(null)
const reduced = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const isAnimatable = computed(() => ['slide', 'presenter'].includes($renderContext.value))
const isCurrentSlide = computed(() => $nav.value.currentPage === $page.value)
// In PDF/PPTX exports render the finished diagram, no animation.
const step = computed(() => (isAnimatable.value ? Math.min(Number($clicks.value) || 0, LAST_STEP) : LAST_STEP))

const parts = new Map()
let rafId = 0

function collect() {
  const el = root.value
  if (!el)
    return
  WIRES.forEach((w) => {
    const path = el.querySelector(`[data-wire="${w.id}"]`)
    const tail = el.querySelector(`[data-tail="${w.id}"]`)
    const head = el.querySelector(`[data-head="${w.id}"]`)
    if (!path)
      return
    parts.set(w.id, { ...w, path, tail, head, len: path.getTotalLength(), active: false, since: 0 })
  })
}

function drawIn(p) {
  p.path.style.opacity = '1'
  p.path.style.strokeDasharray = String(p.len)
  p.path.style.strokeDashoffset = String(p.len)
  const anim = p.path.animate(
    [{ strokeDashoffset: p.len }, { strokeDashoffset: 0 }],
    { duration: 850, easing: 'cubic-bezier(0.25, 1, 0.4, 1)', fill: 'forwards' },
  )
  anim.onfinish = () => settle(p)
}

function settle(p) {
  p.path.style.opacity = '1'
  p.path.style.strokeDasharray = 'none'
  p.path.style.strokeDashoffset = '0'
}

function hideWire(p) {
  p.path.style.opacity = '0'
  hideComet(p)
}

function hideComet(p) {
  if (p.head)
    p.head.style.opacity = '0'
  if (p.tail)
    p.tail.style.opacity = '0'
}

function apply(n, forward) {
  const el = root.value
  if (!el)
    return
  el.querySelectorAll('[data-step]').forEach((g) => {
    const s = Number(g.dataset.step)
    g.classList.toggle('on', s <= n)
    if (g.classList.contains('arch-node'))
      g.classList.toggle('hot', s === n)
  })
  parts.forEach((p) => {
    const on = p.step <= n
    if (on && !p.active) {
      p.since = performance.now() / 1000
      if (forward && isAnimatable.value && !reduced)
        drawIn(p)
      else
        settle(p)
    }
    else if (on) {
      settle(p)
    }
    else {
      hideWire(p)
    }
    p.active = on
  })
}

function tick(now) {
  const t = now / 1000
  parts.forEach((p) => {
    if (!p.head || !p.tail)
      return
    // let the wire finish drawing before the first pulse departs
    if (!p.active || t - p.since < 0.9) {
      hideComet(p)
      return
    }
    const k = ((t + p.phase) % PERIOD) / TRAVEL
    if (k >= 1) {
      hideComet(p)
      return
    }
    const pos = (1 - (1 - k) ** 3) * p.len
    const pt = p.path.getPointAtLength(pos)
    p.head.setAttribute('cx', pt.x)
    p.head.setAttribute('cy', pt.y)
    const fade = k < 0.12 ? k / 0.12 : k > 0.82 ? (1 - k) / 0.18 : 1
    p.head.style.opacity = String(fade)
    p.tail.style.opacity = String(0.6 * fade)
    const tailStart = Math.max(0, pos - TAIL)
    p.tail.setAttribute('stroke-dasharray', `0 ${tailStart} ${Math.max(0.01, pos - tailStart)} ${p.len}`)
  })
  rafId = requestAnimationFrame(tick)
}

function startLoop() {
  stopLoop()
  if (!isAnimatable.value || reduced)
    return
  rafId = requestAnimationFrame(tick)
}

function stopLoop() {
  if (rafId)
    cancelAnimationFrame(rafId)
  rafId = 0
}

onMounted(() => {
  collect()
  apply(step.value, false)
  if (isCurrentSlide.value)
    startLoop()
})

watch(step, (n, o) => apply(n, (o ?? 0) < n))
watch(isCurrentSlide, current => (current ? startLoop() : stopLoop()))
onUnmounted(stopLoop)
</script>

<template>
  <svg ref="root" viewBox="0 0 880 330" fill="none" class="w-full">
    <defs>
      <marker id="arch-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="#94897a" />
      </marker>
      <filter id="arch-glow" x="-120%" y="-120%" width="340%" height="340%">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- wires -->
    <path data-wire="w-code" class="arch-wire" marker-end="url(#arch-arrow)" d="M226 148 C 280 144, 298 124, 332 116" />
    <path data-wire="w-data" class="arch-wire" marker-end="url(#arch-arrow)" d="M452 244 C 448 220, 446 192, 444 170" />
    <path data-wire="w-user" class="arch-wire" marker-end="url(#arch-arrow)" d="M582 108 C 650 106, 674 130, 718 140" />

    <!-- glowing comet tails + heads (driven by rAF) -->
    <path data-tail="w-code" class="arch-tail" stroke="#c25c3b" filter="url(#arch-glow)" d="M226 148 C 280 144, 298 124, 332 116" />
    <path data-tail="w-data" class="arch-tail" stroke="#3fbd85" filter="url(#arch-glow)" d="M452 244 C 448 220, 446 192, 444 170" />
    <path data-tail="w-user" class="arch-tail" stroke="#c25c3b" filter="url(#arch-glow)" d="M582 108 C 650 106, 674 130, 718 140" />
    <circle data-head="w-code" class="arch-head" r="5" fill="#c25c3b" filter="url(#arch-glow)" />
    <circle data-head="w-data" class="arch-head" r="5" fill="#3fbd85" filter="url(#arch-glow)" />
    <circle data-head="w-user" class="arch-head" r="5" fill="#c25c3b" filter="url(#arch-glow)" />

    <!-- wire labels -->
    <g data-step="1" class="arch-label">
      <rect x="236" y="100" width="76" height="22" rx="4" fill="#f8f4e9" opacity="0.85" />
      <text x="246" y="116" class="arch-hand">tarik code</text>
    </g>
    <g data-step="2" class="arch-label">
      <rect x="462" y="196" width="76" height="22" rx="4" fill="#f8f4e9" opacity="0.85" />
      <text x="470" y="212" class="arch-hand">tarik data</text>
    </g>
    <g data-step="3" class="arch-label">
      <rect x="606" y="88" width="96" height="22" rx="4" fill="#f8f4e9" opacity="0.85" />
      <text x="614" y="104" class="arch-hand">kirim ke user</text>
    </g>

    <!-- GitHub -->
    <g data-step="0" class="arch-node">
      <rect x="24" y="112" width="200" height="90" rx="14" fill="#eee7d6" stroke="#3a332a" stroke-width="2" transform="translate(5,5)" opacity="0.25" />
      <rect x="24" y="112" width="200" height="90" rx="14" fill="#f8f4e9" stroke="#3a332a" stroke-width="2" class="frame" />
      <text x="48" y="152" class="arch-title">Rumah code-mu</text>
      <path transform="translate(48 169.4) scale(0.5417)" fill="#c25c3b" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      <text x="67" y="180" fill="#c25c3b" class="arch-chip">github</text>
    </g>

    <!-- Vercel -->
    <g data-step="1" class="arch-node">
      <rect x="338" y="52" width="240" height="112" rx="16" fill="#eee7d6" stroke="#3a332a" stroke-width="2" transform="translate(6,6)" opacity="0.25" />
      <rect x="338" y="52" width="240" height="112" rx="16" fill="#f8f4e9" stroke="#3a332a" stroke-width="2" class="frame" />
      <path d="M368 96 l12 -21 l12 21 z" fill="#3a332a" />
      <text x="368" y="124" class="arch-title">Menjalankan aplikasi</text>
      <text x="368" y="148" font-style="italic" fill="#c25c3b" class="arch-title arch-sub">24 jam sehari</text>
      <text x="556" y="78" fill="#c25c3b" text-anchor="end" class="arch-chip">vercel · server</text>
    </g>

    <!-- Database -->
    <g data-step="2" class="arch-node">
      <rect x="364" y="246" width="196" height="76" rx="14" fill="#eee7d6" stroke="#23795a" stroke-width="2" transform="translate(5,5)" opacity="0.25" />
      <rect x="364" y="246" width="196" height="76" rx="14" fill="#e8f4ec" stroke="#23795a" stroke-width="2" class="frame" />
      <text x="388" y="280" font-size="19" fill="#23795a" class="arch-title arch-title-green">Ingatan aplikasi</text>
      <path transform="translate(388 295.4) scale(0.5417)" fill="#23795a" d="M24 0V24l-9.365-8.045V24H0V0ZM2.942 21.087h8.751V9.563l9.365 8.204V2.919L2.942 2.914Z" />
      <text x="407" y="306" fill="#23795a" class="arch-chip">neon · database</text>
    </g>

    <!-- User / phone -->
    <g data-step="3" class="arch-node">
      <rect x="724" y="58" width="136" height="176" rx="20" fill="#eee7d6" stroke="#3a332a" stroke-width="2" transform="translate(5,5)" opacity="0.25" />
      <rect x="724" y="58" width="136" height="176" rx="20" fill="#f8f4e9" stroke="#3a332a" stroke-width="2" class="frame" />
      <rect x="768" y="70" width="48" height="6" rx="3" fill="#3a332a" opacity="0.5" />
      <text x="744" y="132" class="arch-title arch-title-sm">Siapapun,</text>
      <text x="744" y="154" class="arch-title arch-title-sm">di mana pun</text>
      <text x="744" y="194" fill="#c25c3b" class="arch-chip">hp mereka</text>
    </g>
  </svg>
</template>

<style scoped>
.arch-node {
  opacity: 0;
  transform: translateY(14px) scale(0.96);
  transform-box: fill-box;
  transform-origin: center;
}
.arch-node.on {
  opacity: 1;
  transform: none;
  transition:
    opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}
.arch-node.hot .frame {
  stroke: #c25c3b;
  stroke-width: 2.5;
}
.arch-wire {
  fill: none;
  stroke: #94897a;
  stroke-width: 2;
  opacity: 0;
  transition: opacity 0.2s linear;
}
.arch-label {
  opacity: 0;
  transform: translateY(6px);
}
.arch-label.on {
  opacity: 1;
  transform: none;
  transition:
    opacity 0.5s ease 0.45s,
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.45s;
}
/* Chromium rasterizes SVG <text> before Slidev's slide-scale transform lands and
   never re-rasterizes it, leaving glyphs painted at the wrong scale; forcing the
   geometric path keeps text scaling with the shapes. */
text {
  text-rendering: geometricPrecision;
}
.arch-title {
  font-family: Fraunces, serif;
  font-weight: 600;
  font-size: 19px;
  fill: #3a332a;
}
.arch-title-sm {
  font-size: 17px;
}
.arch-sub {
  font-size: 18px;
}
.arch-title-green {
  fill: #23795a;
}
.arch-chip {
  font-family: 'Instrument Sans', sans-serif;
  font-weight: 600;
  font-size: 11.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.arch-hand {
  font-family: Fraunces, serif;
  font-style: italic;
  font-size: 15px;
  fill: #685f52;
}
.arch-tail {
  fill: none;
  stroke-width: 5;
  stroke-linecap: round;
  opacity: 0;
}
.arch-head {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .arch-node.on,
  .arch-label.on,
  .arch-wire {
    transition: none;
  }
}
</style>
