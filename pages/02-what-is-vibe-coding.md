---
kicker: apa itu vibe coding
---

<div class="h-full flex flex-col pt-6">
  <Reveal :delay="100">
    <h1>Apa itu <span class="relative inline-block">Vibe Coding<Rough class="!absolute -left-1 -bottom-4 pointer-events-none" shape="line" :width="295" :height="20" color="#c25c3b" :stroke-width="3.5" :delay="700" /></span>?</h1>
  </Reveal>

  <Reveal :delay="900" class="mt-4">
    <ul class="m-0 max-w-[40rem] list-none p-0 space-y-2">
      <li class="!ml-0 flex items-start gap-3 !text-2xl !leading-[1.45] !text-ink">
        <span aria-hidden="true" class="mt-3 size-2 shrink-0 rounded-full bg-ink"></span>
        <span>Bikin aplikasi tanpa harus lihat code-nya. Code-nya tetap ada — AI yang nulis, kamu yang mengarahkan.</span>
      </li>
      <li class="!ml-0 flex items-start gap-3 !text-2xl !leading-[1.45] !text-ink">
        <span aria-hidden="true" class="mt-3 size-2 shrink-0 rounded-full bg-ink"></span>
        <span>Istilah ini baru dicetuskan pada Februari 2025.</span>
      </li>
    </ul>
  </Reveal>

  <Reveal :delay="1700" class="mt-auto pb-1">
    <p class="font-serif italic font-normal leading-[1.25] text-[1.7rem] max-w-[34rem] m-0"><span class="opacity-70">“…give in to the vibes, embrace exponentials, and </span><span class="text-ink font-semibold">forget that the code even exists</span><span class="opacity-70">.”</span></p>
    <p class="mt-2 mb-0 mx-0 text-base font-semibold text-ink max-w-[34rem]">— Andrej Karpathy</p>
  </Reveal>
</div>

<!--
Beat slide ini: definisi sederhana dulu, baru asal-usul istilahnya.

- Definisi: bikin aplikasi tanpa harus lihat code-nya. Tegaskan sesuai cue card: code-nya TETAP ADA, AI yang nulis — kita yang mengarahkan (bukan sulap, bukan "no code").
- Asal istilah: baru dicetuskan Andrej Karpathy (co-founder OpenAI, eks Direktur AI Tesla) lewat post di X pada 2 Februari 2025 — tanggal lengkapnya tetap bisa disebutkan secara lisan.
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
