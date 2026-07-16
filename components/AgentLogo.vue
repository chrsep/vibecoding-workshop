<script setup>
// The two parade mascots: Claw'd (the blocky orange Claude character, from
// the SVG the user supplied) and the OpenAI logomark. `size` is the rendered
// height in px; `tempo` (s) paces Claw'd's leg scuttle.
const props = defineProps({
  kind: { type: String, required: true },
  size: { type: Number, required: true },
  tempo: { type: Number, default: 0.4 },
})

// Claw'd's four legs, split out of the artwork so they can scuttle. Tops
// extend up under the body (drawn after) so the pivot seam stays hidden.
const CRAB_LEGS = [
  { x: 36, phase: 'a' },
  { x: 73, phase: 'b' },
  { x: 126, phase: 'a' },
  { x: 165, phase: 'b' },
]

function legStyle(leg) {
  return {
    transformOrigin: `${leg.x + 9.5}px 108px`,
    animationDuration: `${props.tempo / 2}s`,
    animationDelay: leg.phase === 'b' ? `${-props.tempo / 4}s` : '0s',
  }
}

// OpenAI logomark (simple-icons path, 24x24 viewBox).
const OPENAI_PATH = 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7226l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4801zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z'
</script>

<template>
  <svg v-if="kind === 'claude'" :width="Math.round(size * 217 / 146)" :height="size" viewBox="0 0 217 146" shape-rendering="crispEdges">
    <rect
      v-for="(leg, i) in CRAB_LEGS" :key="i"
      class="crab-leg"
      :x="leg.x" y="100" width="19" height="46"
      fill="#DA7758"
      :style="legStyle(leg)"
    />
    <path fill="#DA7758" d="M36 0H184V35H217V72H184V108H36V72H0V35H36Z" />
    <path fill="#000" d="M55 16H74V35H55ZM145 16H164V35H145Z" />
  </svg>
  <svg v-else :width="size" :height="size" viewBox="0 0 24 24">
    <path :d="OPENAI_PATH" fill="#3a332a" />
  </svg>
</template>

<style scoped>
.crab-leg {
  transform-box: view-box;
  animation-name: crab-scuttle;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@media (prefers-reduced-motion: reduce) {
  .crab-leg {
    animation: none;
  }
}

@keyframes crab-scuttle {
  from {
    transform: rotate(10deg);
  }
  to {
    transform: rotate(-10deg);
  }
}
</style>
