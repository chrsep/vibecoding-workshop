<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage, currentSlideRoute } = useNav()

// Slides opt in to the editorial frame by declaring `kicker:` in their frontmatter.
const kicker = computed(() => currentSlideRoute.value?.meta?.slide?.frontmatter?.kicker)
</script>

<template>
  <template v-if="kicker">
    <div class="deck-kicker">
      Vibe Coding Workshop · <b>{{ kicker }}</b>
    </div>
    <div class="deck-slideno">§{{ currentPage }}</div>
  </template>
</template>
