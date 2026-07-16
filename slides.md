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
kicker: apa itu vibe coding
---

<div class="h-full flex flex-col pt-[1.6rem]">
  <Reveal :delay="100">
    <h1>Apa itu <span class="relative inline-block">Vibe Coding<Rough class="!absolute -left-1 -bottom-4 pointer-events-none" shape="line" :width="295" :height="20" color="#c25c3b" :stroke-width="3.5" :delay="700" /></span>?</h1>
  </Reveal>

  <Reveal :delay="900" class="mt-[2.2rem]">
    <p class="text-2xl leading-[1.55] text-ink max-w-[40rem] m-0">Bikin aplikasi tanpa harus lihat code-nya. Code-nya tetap ada — AI yang nulis, kamu yang mengarahkan.</p>
  </Reveal>

  <Reveal :delay="1700" class="mt-auto pb-[0.3rem]">
    <p class="font-serif italic font-normal leading-[1.25] text-[1.7rem] max-w-[34rem] m-0">“…give in to the vibes, embrace exponentials, and forget that the code even exists.”</p>
    <p class="mt-[0.6rem] mb-0 mx-0 text-base font-semibold text-ink max-w-[34rem]">— Andrej Karpathy</p>
  </Reveal>
</div>

<!--
Beat slide ini: definisi sederhana dulu, baru asal-usul istilahnya.

- Definisi: bikin aplikasi tanpa harus lihat code-nya. Tegaskan sesuai cue card: code-nya TETAP ADA, AI yang nulis — kita yang mengarahkan (bukan sulap, bukan "no code").
- Asal istilah: dicetuskan Andrej Karpathy (co-founder OpenAI, eks Direktur AI Tesla) lewat post di X, 2 Februari 2025 — sebutkan tanggalnya secara lisan.
- Slide beranimasi otomatis: judul → garis bawah → definisi → kutipan. Kasih jeda ~3 detik sebelum mulai bicara.
-->

---
kicker: alur kerja
---

# Alurnya kira-kira begini

<div class="mt-14 flex items-center justify-center gap-2">
  <Rough shape="ellipse" :width="190" :height="110" color="#3a332a" :delay="200">
    <span class="text-lg font-bold">💡 Ide</span>
  </Rough>
  <Rough shape="arrow" :width="110" :height="40" color="#94897a" :delay="900" />
  <Rough shape="rect" :width="190" :height="110" color="#c25c3b" fill="#c25c3b" fill-style="hachure" :delay="1300">
    <span class="text-lg font-bold">✍️ Prompt</span>
  </Rough>
  <Rough shape="arrow" :width="110" :height="40" color="#94897a" :delay="2000" />
  <Rough shape="rect" :width="190" :height="110" color="#23795a" :delay="2400">
    <span class="text-lg font-bold">🚀 Aplikasi</span>
  </Rough>
</div>

<p v-click class="hand text-accent text-center mt-12">…terus diulang sampai vibe-nya dapet 🔁</p>

<!--
Diagram menggambar dirinya sendiri saat slide dibuka.
-->

---
layout: center
kicker: outline
---

# Outline kamu masuk di sini ✏️

<p class="mt-4 text-center">Kirim outline workshop-mu, nanti kita ubah jadi slide satu per satu.</p>
