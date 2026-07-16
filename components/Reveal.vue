<script setup>
import { computed, onUnmounted, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  // ms after the slide becomes current
  delay: { type: Number, default: 0 },
})

const { $nav, $page, $renderContext } = useSlideContext()

// animate only in live contexts — exports render content fully visible
const isAnimatable = computed(() => ['slide', 'presenter'].includes($renderContext.value))
const isCurrentSlide = computed(() => $nav.value.currentPage === $page.value)

const on = ref(!isAnimatable.value)
let timer

watch(
  isCurrentSlide,
  (current) => {
    if (!isAnimatable.value)
      return
    clearTimeout(timer)
    if (current)
      timer = setTimeout(() => (on.value = true), props.delay)
    else
      on.value = false
  },
  { immediate: true },
)

onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <div :class="on
    ? 'opacity-100 translate-y-0 [transition:opacity_0.55s_cubic-bezier(0.22,1,0.36,1),transform_0.65s_cubic-bezier(0.22,1,0.36,1)] motion-reduce:[transition:opacity_0.25s_ease]'
    : 'opacity-0 translate-y-[14px] motion-reduce:translate-y-0'">
    <slot />
  </div>
</template>
