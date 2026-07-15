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
---

<div class="h-full flex flex-col items-center justify-center text-center">

# Vibe Coding

<Rough shape="line" :width="360" :height="24" color="#c25c3b" :stroke-width="3.5" :delay="400" class="-mt-2" />

</div>

<!--
Catatan presenter: sapa peserta, perkenalan singkat.
-->

---
kicker: apa itu vibe coding
---

# Apa itu <span v-mark="{ at: 1, type: 'circle', color: '#c25c3b', strokeWidth: 3 }">Vibe Coding</span>?

<div class="mt-8" />

- <span v-click="2">Kamu fokus ke <b>ide</b> dan <b>hasil</b> — bukan syntax</span>
- <span v-click="3">AI yang nulis <span v-mark="{ at: 4, type: 'highlight', color: '#f4dcc8' }">boilerplate</span>-nya</span>
- <span v-click="5">Iterasi cepat: <i>prompt → lihat → perbaiki</i></span>

<p v-click="6" class="hand accent-red mt-10">intinya: kamu jadi director, bukan typist 🎬</p>

<!--
Jelaskan istilah vibe coding, asal-usulnya, kenapa relevan sekarang.
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

<p v-click class="hand accent-red text-center mt-12">…terus diulang sampai vibe-nya dapet 🔁</p>

<!--
Diagram menggambar dirinya sendiri saat slide dibuka.
-->

---
layout: center
kicker: outline
---

# Outline kamu masuk di sini ✏️

<p class="mt-4 text-center">Kirim outline workshop-mu, nanti kita ubah jadi slide satu per satu.</p>
