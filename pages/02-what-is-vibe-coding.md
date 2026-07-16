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
        <span>Bikin aplikasi tanpa harus lihat code-nya menggunakan <b>AI agents</b>. Siapapun bisa memulai.</span>
      </li>
      <li class="!ml-0 flex items-start gap-3 !text-2xl !leading-[1.45] !text-ink">
        <span aria-hidden="true" class="mt-3 size-2 shrink-0 rounded-full bg-ink"></span>
        <span>Baru mulai bisa sekitar Februari 2025.</span>
      </li>
    </ul>
  </Reveal>

  <Reveal :delay="1700" class="mt-auto pb-1">
    <div class="flex items-center gap-5">
      <img src="/karpathy.jpg" alt="Andrej Karpathy" class="size-20 shrink-0 rounded-full border-2 border-ink object-cover" />
      <div>
        <p class="font-serif italic font-normal leading-[1.25] text-[1.7rem] max-w-[34rem] m-0"><span class="opacity-70">“…give in to the vibes, embrace exponentials, and </span><span class="text-ink font-semibold">forget that the code even exists</span><span class="opacity-70">.”</span></p>
        <p class="mt-2 mb-0 mx-0 text-base font-semibold text-ink max-w-[34rem]">— Andrej Karpathy, <span class="font-normal text-ink-soft">OpenAI Founder</span></p>
      </div>
    </div>
  </Reveal>
</div>

<!--
Beat slide ini: definisi sederhana dulu, baru asal-usul istilahnya.

- Definisi: bikin aplikasi tanpa harus lihat code-nya. Tegaskan sesuai cue card: code-nya TETAP ADA, AI yang nulis — kita yang mengarahkan (bukan sulap, bukan "no code").
- Asal istilah: baru dicetuskan Andrej Karpathy (co-founder OpenAI, eks Direktur AI Tesla) lewat post di X pada 2 Februari 2025 — tanggal lengkapnya tetap bisa disebutkan secara lisan.
- Slide beranimasi otomatis: judul → garis bawah → definisi → kutipan. Kasih jeda ~3 detik sebelum mulai bicara.
-->

---
kicker: apa itu vibe coding
---

<div class="h-full flex flex-col pt-6">
  <Reveal :delay="100">
    <h1 class="!text-[3rem]">Tidak perlu tau coding</h1>
  </Reveal>

  <div class="relative mx-auto mt-14 h-[300px] w-[840px]">
    <Rough class="!absolute left-0 top-[90px] rotate-180" shape="arrow" :width="430" :height="24" color="#94897a" :stroke-width="2.5" :delay="700" :seed="3" />
    <Rough class="!absolute right-0 top-[90px]" shape="arrow" :width="430" :height="24" color="#94897a" :stroke-width="2.5" :delay="700" :seed="5" />
    <Reveal :delay="1100" class="!absolute left-0 top-[56px] text-[0.85rem]">
      <span class="hand text-ink-soft">less knowledge</span>
    </Reveal>
    <Reveal :delay="1200" class="!absolute right-0 top-[56px] text-right text-[0.85rem]">
      <span class="hand text-ink-soft">more knowledge</span>
    </Reveal>
    <Rough class="!absolute left-[93px] top-[85px]" shape="ellipse" :width="34" :height="34" color="#3a332a" fill="#f8f4e9" fill-style="solid" :stroke-width="2.5" :delay="1400" :seed="2" />
    <Rough class="!absolute left-[713px] top-[85px]" shape="ellipse" :width="34" :height="34" color="#3a332a" fill="#f8f4e9" fill-style="solid" :stroke-width="2.5" :delay="1750" :seed="9" />
    <Reveal :delay="1300" class="!absolute left-[-10px] top-[128px] w-[240px] text-center">
      <div class="font-serif font-semibold text-[1.35rem] text-ink whitespace-nowrap">Pure Vibe Coding</div>
      <div class="mt-1 text-[0.95rem] leading-snug text-ink-soft">Jelaskan yang kita mau, biarkan AI agents menghandle semua.</div>
    </Reveal>
    <Reveal :delay="1700" class="!absolute left-[610px] top-[128px] w-[240px] text-center">
      <div class="font-serif font-semibold text-[1.35rem] text-ink whitespace-nowrap">Agentic Engineering</div>
      <div class="mt-1 text-[0.95rem] leading-snug text-ink-soft">AI agents sebagai partner kerja dalam software engineering.</div>
    </Reveal>
    <div v-click="1" class="absolute left-[255px] top-0 z-[1]">
      <span class="hand text-accent text-[1rem]">sesi ini disini</span>
    </div>
    <Rough class="!absolute left-[201px] top-[49px] rotate-[138deg]" shape="arrow" :width="70" :height="24" color="#c25c3b" :stroke-width="2.5" :at="1" :seed="8" />
    <Rough class="!absolute left-[171px] top-[78px]" shape="ellipse" :width="48" :height="48" color="#c25c3b" fill="#f4dcc8" fill-style="solid" :stroke-width="3" :at="1" :delay="150" :seed="4" />
  </div>
</div>

<!--
Beat slide ini: satu sumbu untuk memetakan istilah, lalu tunjukkan posisi workshop ini.

- Arah sumbu: makin ke kiri makin sedikit pengetahuan coding yang dibutuhkan, makin ke kanan makin butuh pengetahuan expert.
- Ujung kiri: vibe coding. Kita jelaskan hasil yang diinginkan, sisanya AI yang urus, tanpa perlu bisa coding dulu.
- Ujung kanan: agentic engineering. Bekerja bareng AI agents sebagai partner, sering lebih dari satu sekaligus, sambil tetap membaca dan mengecek hasil kerjanya.
- [klik] Posisi workshop ini: dekat ujung vibe coding, cuma beberapa inci ke kanan. Kita belum masuk ke wilayah software engineering.
- Spektrum terbangun otomatis begitu slide muncul; penanda "kita ada di sini" keluar saat klik pertama.
-->
