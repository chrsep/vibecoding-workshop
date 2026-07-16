<script setup>
// Bottom-of-slide gag: Claw'd the crab marches in from the left, tiny
// OpenAI knots from the right. Performance notes: a fixed pool of walkers
// on infinite transform-only CSS animations (no JS timers, no DOM churn);
// staggered delays + varied durations make the stream look like it keeps
// spawning. Paused while the slide is inactive; exports and reduced-motion
// get a static scatter instead.
import { computed } from 'vue'
import { useIsSlideActive, useNav, useSlideContext } from '@slidev/client'
import AgentLogo from './AgentLogo.vue'

const { $renderContext } = useSlideContext()
const { isPrintMode } = useNav()
const isActive = useIsSlideActive()

const isLive = computed(() =>
  ['slide', 'presenter'].includes($renderContext.value) && !isPrintMode.value,
)

// Slide canvas is 980px wide; walkers start 56px off one edge and cross to
// 56px past the other. Deterministic configs: [delay s, duration s, size px,
// bottom px, waddle s] — varied so the stream never looks like a loop.
const MARCH_DISTANCE = 980 + 2 * 56

const LEFT = [
  [0.4, 10, 27, 6, 0.42],
  [2.6, 12.5, 23, 13, 0.5],
  [4.9, 9, 30, 3, 0.36],
  [7.3, 11.5, 25, 10, 0.46],
  [9.8, 10.5, 28, 5, 0.4],
  [12.2, 13, 24, 15, 0.52],
  [14.7, 9.5, 26, 8, 0.38],
].map(cfg => walker('claude', 1, cfg))

const RIGHT = [
  [1.3, 11, 26, 5, 0.44],
  [3.7, 9.5, 29, 11, 0.37],
  [6.1, 12, 22, 3, 0.5],
  [8.4, 10, 27, 14, 0.4],
  [10.9, 13.5, 23, 7, 0.54],
  [13.3, 9, 28, 12, 0.36],
  [15.6, 11.5, 25, 4, 0.46],
].map(cfg => walker('openai', -1, cfg))

const LIVE_WALKERS = [...LEFT, ...RIGHT]

// Static scatter for print/export/overview and reduced motion.
const STATIC_WALKERS = [
  { kind: 'claude', left: '7%', size: 27, bottom: 6 },
  { kind: 'openai', left: '24%', size: 25, bottom: 12 },
  { kind: 'claude', left: '41%', size: 30, bottom: 4 },
  { kind: 'openai', left: '58%', size: 23, bottom: 10 },
  { kind: 'claude', left: '74%', size: 25, bottom: 7 },
  { kind: 'openai', left: '90%', size: 28, bottom: 13 },
]

function walker(kind, dir, [delay, dur, size, bottom, waddle]) {
  return {
    kind,
    size,
    waddle,
    style: {
      [dir === 1 ? 'left' : 'right']: '-56px',
      bottom: `${bottom}px`,
      '--march-x': `${dir * MARCH_DISTANCE}px`,
      animationDuration: `${dur}s`,
      animationDelay: `${delay}s`,
    },
  }
}
</script>

<template>
  <div class="pointer-events-none absolute inset-x-0 bottom-6 h-14 overflow-hidden" aria-hidden="true">
    <div v-if="isLive" class="motion-reduce:hidden" :class="{ 'parade-paused': !isActive }">
      <div v-for="(w, i) in LIVE_WALKERS" :key="i" class="agent-walker" :style="w.style">
        <div class="agent-body" :style="{ animationDuration: `${w.waddle}s` }">
          <AgentLogo :kind="w.kind" :size="w.size" :tempo="w.waddle" />
          <div v-if="w.kind === 'openai'" class="agent-legs">
            <span :style="{ animationDuration: `${w.waddle}s` }" />
            <span :style="{ animationDuration: `${w.waddle}s`, animationDelay: `${-w.waddle / 2}s` }" />
          </div>
        </div>
      </div>
    </div>
    <div :class="isLive ? 'hidden motion-reduce:block' : ''">
      <div v-for="(w, i) in STATIC_WALKERS" :key="i" class="agent-walker agent-static" :style="{ left: w.left, bottom: `${w.bottom}px` }">
        <div class="agent-body">
          <AgentLogo :kind="w.kind" :size="w.size" />
          <div v-if="w.kind === 'openai'" class="agent-legs">
            <span /><span />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.agent-walker {
  position: absolute;
  animation-name: agent-march;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}

.agent-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: 50% 90%;
  animation-name: agent-waddle;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.agent-legs {
  display: flex;
  justify-content: center;
  gap: 3px;
  height: 7px;
  margin-top: -1px;
}

.agent-legs span {
  width: 2px;
  height: 100%;
  background: currentColor;
  color: #3a332a;
  transform-origin: top center;
  animation-name: agent-step;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.agent-static,
.agent-static .agent-body,
.agent-static .agent-legs span {
  animation: none;
}

.agent-static :deep(.crab-leg) {
  animation: none;
}

.parade-paused .agent-walker,
.parade-paused .agent-body,
.parade-paused .agent-legs span {
  animation-play-state: paused;
}

.parade-paused :deep(.crab-leg) {
  animation-play-state: paused;
}

@keyframes agent-march {
  to {
    transform: translateX(var(--march-x));
  }
}

@keyframes agent-waddle {
  0%,
  100% {
    transform: translateY(0) rotate(-8deg);
  }
  50% {
    transform: translateY(-2.5px) rotate(8deg);
  }
}

@keyframes agent-step {
  from {
    transform: rotate(26deg);
  }
  to {
    transform: rotate(-26deg);
  }
}
</style>
