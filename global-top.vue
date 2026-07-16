<template>
  <!-- Slides opt in to the editorial frame by declaring `kicker:` in their frontmatter.
       $nav is auto-injected by Slidev into project SFCs. -->
  <template v-if="$nav.currentSlideRoute?.meta?.slide?.frontmatter?.kicker">
    <div class="absolute top-[30px] left-[56px] font-sans text-[11px] tracking-[0.18em] uppercase font-semibold text-ink-soft">
      Vibe Coding Workshop · <b class="text-accent font-semibold">{{ $nav.currentSlideRoute.meta.slide.frontmatter.kicker }}</b>
    </div>
    <div class="absolute top-[27px] right-[56px] font-serif italic text-[14px] text-ink-soft">§{{ $nav.currentPage }}</div>
  </template>
</template>
