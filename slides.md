---
theme: default
title: Vibe Coding
info: |
  ## Vibe Coding
  Slide deck bergaya hand-drawn (Excalidraw style).
transition: fade
mdc: true
drawings:
  persist: false
htmlAttrs:
  lang: id
class: title-slide
fonts:
  sans: Instrument Sans
  serif: Fraunces
  weights: '400,500,600,700'
  italic: true
---

<svg class="absolute inset-0 z-0 w-full h-full pointer-events-none" viewBox="0 0 1280 720" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <filter id="title-grid-wobble" x="-3%" y="-3%" width="106%" height="106%">
      <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="1" seed="17" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
    </filter>
    <pattern id="title-grid-hatch" width="11" height="11" patternUnits="userSpaceOnUse" patternTransform="rotate(-8)">
      <path d="M 0 11 L 11 0" stroke="#c25c3b" stroke-width="2" opacity="0.28" />
    </pattern>
  </defs>

  <g filter="url(#title-grid-wobble)">
    <path class="title-grid-fill" d="M-24 80H142V-16H-24ZM104 190H232V252H104ZM936-16H1066V82H936ZM1134 516H1298V626H1134Z" />
    <path class="title-grid-accent" d="M1134 516H1262V626H1134Z" />
    <path class="title-grid-line" d="M-24 80H142V-16M142 80H306V18H444V126H366" />
    <path class="title-grid-line" d="M-18 190H104V306H-18M104 190H232V252H316M232 80V190" />
    <path class="title-grid-line" d="M306 18V190H366V126M232 252V340H318" />
    <path class="title-grid-line" d="M806-18V82H936V160H1066V82H1298" />
    <path class="title-grid-line" d="M936 160V230H1134V160H1298M1066 82V-18" />
    <path class="title-grid-line" d="M1134 160V286H1222V350H1298M806 82H736V142" />
    <path class="title-grid-line" d="M-18 514H126V428H248V514H344" />
    <path class="title-grid-line" d="M126 514V646H270V722M248 428V354H338" />
    <path class="title-grid-line" d="M-18 646H126M270 646H378V722" />
    <path class="title-grid-line" d="M862 722V626H1012V516H1134V626H1298" />
    <path class="title-grid-line" d="M1012 516V432H1094M1134 516H1262V428H1298" />
    <path class="title-grid-line" d="M1012 626V722M1134 626V688H1262V722" />
  </g>
</svg>

<div class="relative z-[1] h-full flex flex-col items-center justify-center text-center">

# Vibe Coding

<Rough shape="line" :width="360" :height="24" color="#c25c3b" :stroke-width="3.5" :delay="400" class="-mt-2" />

</div>

<!--
Catatan presenter: sapa peserta, perkenalan singkat.
-->

---
src: ./pages/01-intro.md
---

---
src: ./pages/02-what-is-vibe-coding.md
---

---
src: ./pages/03-spectrum.md
---

---
src: ./pages/04-why-now.md
---

---
src: ./pages/05-architecture.md
---

---
src: ./pages/06-live-demo.md
---

---
src: ./pages/07-closing.md
---
