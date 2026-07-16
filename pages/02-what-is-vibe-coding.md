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
        <span>Membangun aplikasi dengan bahasa sehari-hari menggunakan <b>AI agents</b>.</span>
      </li>
      <li class="!ml-0 flex items-start gap-3 !text-2xl !leading-[1.45] !text-ink">
        <span aria-hidden="true" class="mt-3 size-2 shrink-0 rounded-full bg-ink"></span>
        <span>Progress sangat baru dan cepat, pertama mulai 2025.</span>
      </li>
    </ul>
  </Reveal>

  <Reveal :delay="1700" class="mt-auto pb-1">
    <div class="flex items-center gap-5">
      <img src="/karpathy.jpg" alt="Andrej Karpathy" class="size-20 shrink-0 rounded-full border-2 border-ink object-cover" />
      <div>
        <p class="font-serif italic font-normal leading-[1.25] text-[1.7rem] max-w-[34rem] m-0"><span class="opacity-70">“…give in to the vibes, embrace exponentials, and </span><span class="text-ink font-semibold">forget that the code even exists</span><span class="opacity-70">.”</span></p>
        <p class="mt-2 mb-0 mx-0 text-base font-semibold text-ink max-w-[34rem]">— Andrej Karpathy, <span class="font-normal text-ink-soft">OpenAI Founding Member</span></p>
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
kicker: mengapa belajar vibe coding
---

<div class="h-full flex flex-col pt-6">
  <Reveal :delay="100">
    <h1>Mengapa belajar <span class="relative inline-block">vibe coding<Rough class="!absolute -left-1 -bottom-4 pointer-events-none" shape="line" :width="275" :height="20" color="#c25c3b" :stroke-width="3.5" :delay="700" /></span>?</h1>
  </Reveal>

  <div class="mt-6 max-w-[46rem] flex flex-col gap-4">
    <Reveal :delay="900">
      <div class="flex items-start gap-3 text-2xl leading-[1.45] text-ink">
        <span aria-hidden="true" class="mt-3 size-2 shrink-0 rounded-full bg-ink"></span>
        <span>AI menciptakan revolusi dalam cara pembuatan software. Prototype dalam hitungan jam, bukan minggu.</span>
      </div>
    </Reveal>
        <Reveal :delay="2100">
      <div class="flex items-start gap-3 text-2xl leading-[1.45] text-ink">
        <span aria-hidden="true" class="mt-3 size-2 shrink-0 rounded-full bg-ink"></span>
        <span>AI Agents berguna lebih dari hanya untuk coding.</span>
      </div>
    </Reveal>
  </div>
</div>

<AgentParade />

<!--
Beat slide ini: dua alasan kenapa vibe coding layak dipelajari sekarang.

- AI mengubah cara software dibuat: satu orang yang mengarahkan AI agents bisa membangun jauh lebih banyak dengan effort lebih sedikit. Ini sudah terjadi, bukan prediksi.
- AI agents berguna melampaui coding: pola kerja yang sama (mengarahkan AI, mengecek hasilnya, iterasi) mulai dipakai di desain, riset, marketing, dan bidang lain. Perubahan yang sama akan menyusul di industri lain.
- Slide beranimasi otomatis: judul, garis bawah, lalu poin berurutan. Parade agent kecil berjalan terus di bawah slide.
-->

---
kicker: mengapa belajar vibe coding
---

<div class="h-full flex flex-col pt-6">
  <Reveal :delay="100">
    <h1>Berkembang cepat</h1>
  </Reveal>

  <div class="relative mx-auto mt-2 h-[360px] w-[860px]">
    <Rough class="!absolute left-[-80px] top-[148px] -rotate-90" shape="arrow" :width="280" :height="24" color="#94897a" :stroke-width="2.5" :delay="700" :seed="3" />
    <Rough class="!absolute left-[52px] top-[288px]" shape="arrow" :width="768" :height="24" color="#94897a" :stroke-width="2.5" :delay="700" :seed="5" />
    <Rough class="!absolute left-[52px] top-[228px] opacity-50" shape="line" :width="756" :height="24" color="#94897a" :stroke-width="1.2" :duration="500" :delay="950" :seed="21" />
    <Rough class="!absolute left-[52px] top-[168px] opacity-50" shape="line" :width="756" :height="24" color="#94897a" :stroke-width="1.2" :duration="500" :delay="1000" :seed="22" />
    <Rough class="!absolute left-[52px] top-[108px] opacity-50" shape="line" :width="756" :height="24" color="#94897a" :stroke-width="1.2" :duration="500" :delay="1050" :seed="23" />
    <Rough class="!absolute left-[52px] top-[48px] opacity-50" shape="line" :width="756" :height="24" color="#94897a" :stroke-width="1.2" :duration="500" :delay="1100" :seed="24" />
    <Reveal :delay="1050" class="!absolute inset-0 text-[0.75rem] text-ink-soft">
      <span class="absolute left-0 top-[232px] w-[50px] text-right">4 jam</span>
      <span class="absolute left-0 top-[172px] w-[50px] text-right">8 jam</span>
      <span class="absolute left-0 top-[112px] w-[50px] text-right">12 jam</span>
      <span class="absolute left-0 top-[52px] w-[50px] text-right">16 jam</span>
    </Reveal>
    <Reveal :delay="1000" class="!absolute left-[78px] top-[6px]">
      <span class="hand text-ink-soft text-[0.85rem]">durasi task yang bisa diselesaikan AI</span>
      <div class="text-[0.7rem] text-ink-soft">(tingkat sukses 50%)</div>
    </Reveal>
    <Reveal :delay="1100" class="!absolute inset-0 text-[0.75rem] text-ink-soft">
      <span class="absolute left-[87px] top-[306px] w-[36px] text-center">2019</span>
      <span class="absolute left-[178px] top-[306px] w-[36px] text-center">2020</span>
      <span class="absolute left-[269px] top-[306px] w-[36px] text-center">2021</span>
      <span class="absolute left-[359px] top-[306px] w-[36px] text-center">2022</span>
      <span class="absolute left-[450px] top-[306px] w-[36px] text-center">2023</span>
      <span class="absolute left-[540px] top-[306px] w-[36px] text-center">2024</span>
      <span class="absolute left-[631px] top-[306px] w-[36px] text-center">2025</span>
      <span class="absolute left-[722px] top-[306px] w-[36px] text-center">2026</span>
      <span class="absolute left-[620px] top-[330px] w-[200px] text-right">data: METR (metr.org)</span>
    </Reveal>
    <Rough class="!absolute left-0 top-0" shape="curve" :points="[[100, 298], [113, 297], [226, 297], [392, 297], [483, 297], [589, 296], [641, 290], [672, 270], [702, 249], [732, 212]]" :width="860" :height="360" color="#3a332a" :stroke-width="3" :roughness="1.4" :delay="1300" :duration="1600" :seed="7" />
    <Rough class="!absolute left-0 top-0" shape="curve" :points="[[732, 212], [760, 148], [785, 60]]" :width="860" :height="360" color="#c25c3b" :stroke-width="2.5" :roughness="1.4" :delay="3500" :duration="700" :seed="17" />
    <Rough class="!absolute left-[98px] top-[282px]" shape="ellipse" :width="30" :height="30" color="#3a332a" fill="#f8f4e9" fill-style="solid" :stroke-width="2.5" :duration="400" :delay="1350" :seed="2" />
    <Rough class="!absolute left-[211px] top-[282px]" shape="ellipse" :width="30" :height="30" color="#3a332a" fill="#f8f4e9" fill-style="solid" :stroke-width="2.5" :duration="400" :delay="1620" :seed="4" />
    <Rough class="!absolute left-[377px] top-[282px]" shape="ellipse" :width="30" :height="30" color="#3a332a" fill="#f8f4e9" fill-style="solid" :stroke-width="2.5" :duration="400" :delay="2040" :seed="6" />
    <Rough class="!absolute left-[468px] top-[282px]" shape="ellipse" :width="30" :height="30" color="#3a332a" fill="#f8f4e9" fill-style="solid" :stroke-width="2.5" :duration="400" :delay="2270" :seed="8" />
    <Rough class="!absolute left-[574px] top-[281px]" shape="ellipse" :width="30" :height="30" color="#3a332a" fill="#f8f4e9" fill-style="solid" :stroke-width="2.5" :duration="400" :delay="2540" :seed="9" />
    <Rough class="!absolute left-[657px] top-[255px]" shape="ellipse" :width="30" :height="30" color="#3a332a" fill="#f8f4e9" fill-style="solid" :stroke-width="2.5" :duration="400" :delay="2750" :seed="12" />
    <Rough class="!absolute left-[687px] top-[234px]" shape="ellipse" :width="30" :height="30" color="#3a332a" fill="#f8f4e9" fill-style="solid" :stroke-width="2.5" :duration="400" :delay="2820" :seed="13" />
    <Rough class="!absolute left-[717px] top-[197px]" shape="ellipse" :width="30" :height="30" color="#3a332a" fill="#f8f4e9" fill-style="solid" :stroke-width="2.5" :duration="400" :delay="2900" :seed="14" />
    <Rough class="!absolute left-[770px] top-[45px]" shape="ellipse" :width="30" :height="30" color="#c25c3b" fill="#f4dcc8" fill-style="solid" :stroke-width="2.5" :duration="400" :delay="4100" :seed="16" />
    <Reveal :delay="1500" class="!absolute left-[77px] top-[249px] w-[72px] text-center">
      <div class="font-semibold text-[0.85rem] leading-tight text-ink">GPT-2</div>
      <div class="text-[0.7rem] text-ink-soft">3 detik</div>
    </Reveal>
    <Reveal :delay="1770" class="!absolute left-[190px] top-[249px] w-[72px] text-center">
      <div class="font-semibold text-[0.85rem] leading-tight text-ink">GPT-3</div>
      <div class="text-[0.7rem] text-ink-soft">9 detik</div>
    </Reveal>
    <Reveal :delay="2190" class="!absolute left-[356px] top-[249px] w-[72px] text-center">
      <div class="font-semibold text-[0.85rem] leading-tight text-ink">GPT-3.5</div>
      <div class="text-[0.7rem] text-ink-soft">36 detik</div>
    </Reveal>
    <Reveal :delay="2420" class="!absolute left-[447px] top-[249px] w-[72px] text-center">
      <div class="font-semibold text-[0.85rem] leading-tight text-ink">GPT-4</div>
      <div class="text-[0.7rem] text-ink-soft">4 menit</div>
    </Reveal>
    <Reveal :delay="2690" class="!absolute left-[553px] top-[249px] w-[72px] text-center">
      <div class="font-semibold text-[0.85rem] leading-tight text-ink">GPT-4o</div>
      <div class="text-[0.7rem] text-ink-soft">7 menit</div>
    </Reveal>
    <Reveal :delay="2900" class="!absolute left-[525px] top-[230px] w-[130px] text-right">
      <span class="font-semibold text-[0.85rem] text-ink">o3</span> <span class="text-[0.75rem] text-ink-soft">2 jam</span>
    </Reveal>
    <Reveal :delay="2970" class="!absolute left-[555px] top-[205px] w-[130px] text-right">
      <span class="font-semibold text-[0.85rem] text-ink">GPT-5</span> <span class="text-[0.75rem] text-ink-soft">3,4 jam</span>
    </Reveal>
    <Reveal :delay="3050" class="!absolute left-[585px] top-[183px] w-[130px] text-right">
      <span class="font-semibold text-[0.85rem] text-ink">GPT-5.2</span> <span class="text-[0.75rem] text-ink-soft">5,9 jam</span>
    </Reveal>
    <Reveal :delay="3200" class="!absolute left-[150px] top-[112px]">
      <span class="hand text-ink-soft text-[1rem] bg-paper rounded px-2">durasi dobel kira-kira tiap 6 bulan</span>
    </Reveal>
    <Reveal :delay="4250" class="!absolute left-[602px] top-[38px] w-[150px] text-right rounded bg-paper">
      <div class="font-semibold text-[0.85rem] leading-tight text-accent">GPT-5.6 Sol</div>
      <div class="text-[0.7rem] text-accent">±16 jam (proyeksi)</div>
    </Reveal>
  </div>
</div>

<!--
Beat slide ini: kemampuan AI menyelesaikan task panjang meledak secara eksponensial, dengan data terukur dari METR.

- Metriknya: panjang task (diukur dari berapa lama manusia ahli mengerjakannya) yang bisa diselesaikan AI dengan tingkat keberhasilan 50%. Sumbu Y linear, jadi ledakannya terlihat: bertahun-tahun kurvanya nempel di nol, lalu melesat.
- Angka METR (benchmark METR-Horizon v1.1, metr.org/time-horizons): GPT-2 (Feb 2019) 3 detik, GPT-3 (Mei 2020) 9 detik, GPT-3.5 (Mar 2022) 36 detik, GPT-4 (Mar 2023) 4 menit, GPT-4o (Mei 2024) 7 menit, o3 (Apr 2025) 2 jam, GPT-5 (Agu 2025) 3,4 jam, GPT-5.2 (Des 2025) 5,9 jam.
- Tidak digambar supaya grafik tetap bersih: o1 (Des 2024) 39 menit (kurva tetap melewatinya) dan GPT-5.4 (Mar 2026) 5,7 jam, sedikit di bawah GPT-5.2.
- Titik GPT-5.6 Sol (Jul 2026) adalah proyeksi, bukan pengukuran: METR belum mengukurnya. Dari tren doubling METR (kira-kira tiap 6 bulan sepanjang data, sekitar 4 bulan sejak 2023), estimasinya 13 sampai 18 jam; digambar 16 jam, kira-kira dua hari kerja manusia.
- Kaitkan ke workshop: task yang butuh sehari-dua hari kerja manusia mulai bisa diserahkan ke AI agent. Itulah kenapa vibe coding baru masuk akal sekarang.
- Slide beranimasi otomatis: sumbu, garis bantu, kurva data, titik model berurutan, lalu segmen proyeksi terracotta naik ke titik GPT-5.6 Sol.
-->

---
kicker: apa itu vibe coding
---

<div class="h-full flex flex-col pt-6">
  <Reveal :delay="100">
    <h1 class="!text-[3rem] max-w-lg">Tidak perlu tau coding untuk memulai</h1>
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
    <div v-click="2" class="absolute right-[255px] top-0 z-[1] text-right">
      <span class="hand text-green-deep text-[1rem]">Course Vibe Coding</span>
    </div>
    <Rough class="!absolute left-[569px] top-[49px] rotate-[42deg]" shape="arrow" :width="70" :height="24" color="#23795a" :stroke-width="2.5" :at="2" :seed="6" />
    <Rough class="!absolute left-[621px] top-[78px]" shape="ellipse" :width="48" :height="48" color="#23795a" fill="#e8f4ec" fill-style="solid" :stroke-width="3" :at="2" :delay="150" :seed="7" />
  </div>
</div>

<!--
Beat slide ini: satu sumbu untuk memetakan istilah, lalu tunjukkan posisi workshop ini.

- Arah sumbu: makin ke kiri makin sedikit pengetahuan coding yang dibutuhkan, makin ke kanan makin butuh pengetahuan expert.
- Ujung kiri: vibe coding. Kita jelaskan hasil yang diinginkan, sisanya AI yang urus, tanpa perlu bisa coding dulu.
- Ujung kanan: agentic engineering. Bekerja bareng AI agents sebagai partner, sering lebih dari satu sekaligus, sambil tetap membaca dan mengecek hasil kerjanya.
- [klik] Posisi workshop ini: dekat ujung vibe coding, cuma beberapa inci ke kanan. Kita belum masuk ke wilayah software engineering.
- [klik] Posisi course Vibe Coding: jauh lebih dekat ke agentic engineering. Di course, peserta belajar mengarahkan AI agents sampai level kerja engineering.
- Spektrum terbangun otomatis begitu slide muncul; penanda "kita ada di sini" keluar saat klik pertama, penanda course keluar saat klik kedua.
-->


---
kicker: apa itu vibe coding
---

<div class="h-full flex flex-col pt-6">
  <Reveal :delay="100">
    <h1>Apa itu <span class="relative inline-block">AI Agent<Rough class="!absolute -left-1 -bottom-4 pointer-events-none" shape="line" :width="210" :height="20" color="#c25c3b" :stroke-width="3.5" :delay="700" /></span>?</h1>
  </Reveal>

  <div class="mt-4 max-w-[46rem] flex flex-col gap-4">
    <Reveal :delay="900">
      <div class="flex items-start gap-3 text-2xl leading-[1.45] text-ink">
        <span aria-hidden="true" class="mt-3 size-2 shrink-0 rounded-full bg-ink"></span>
        <span>AI system yang bergerak secara autonomous dan bisa menggunakan alat untuk mengerjakan suatu task.</span>
      </div>
    </Reveal>
  
  <Reveal :delay="900">
      <div class="flex items-start gap-3 text-2xl leading-[1.45] text-ink">
        <span aria-hidden="true" class="mt-3 size-2 shrink-0 rounded-full bg-ink"></span>
        <span>Bisa belajar dan beradaptasi dengan kerjaan dan kebutuhan kita.</span>
      </div>
    </Reveal>
    <Reveal :delay="1500">
      <div class="flex items-start gap-3 text-2xl leading-[1.45] text-ink">
        <span aria-hidden="true" class="mt-3 size-2 shrink-0 rounded-full bg-ink"></span>
        <span>Contohnya: <b>Claude</b>, <b>Codex</b></span>
      </div>
    </Reveal>
  </div>

  <div class="relative mt-12 ml-5 h-[110px] w-[840px]">
    <Reveal :delay="2100" class="!absolute left-0 top-0">
      <Rough shape="rect" :width="130" :height="56" color="#3a332a" :stroke-width="2" :delay="2150" :seed="2">
        <span class="font-serif font-semibold text-lg text-ink">Coba</span>
      </Rough>
    </Reveal>
    <Rough class="!absolute left-[134px] top-[17px]" shape="arrow" :width="60" :height="22" color="#94897a" :stroke-width="2.5" :delay="2350" :seed="4" />
    <Reveal :delay="2450" class="!absolute left-[196px] top-0">
      <Rough shape="rect" :width="170" :height="56" color="#3a332a" :stroke-width="2" :delay="2500" :seed="6">
        <span class="font-serif font-semibold text-lg text-ink">Lihat hasil</span>
      </Rough>
    </Reveal>
    <Rough class="!absolute left-[370px] top-[17px]" shape="arrow" :width="60" :height="22" color="#94897a" :stroke-width="2.5" :delay="2700" :seed="7" />
    <Reveal :delay="2800" class="!absolute left-[432px] top-0">
      <Rough shape="rect" :width="160" :height="56" color="#3a332a" :stroke-width="2" :delay="2850" :seed="9">
        <span class="font-serif font-semibold text-lg text-ink">Sesuaikan</span>
      </Rough>
    </Reveal>
    <Rough class="!absolute left-[56px] top-[68px] rotate-180" shape="arrow" :width="480" :height="22" color="#94897a" :stroke-width="2.5" :delay="3100" :seed="11" />
    <Reveal :delay="3350" class="!absolute left-[250px] top-[66px] z-[1]">
      <span class="hand text-ink-soft bg-paper rounded px-2">coba lagi</span>
    </Reveal>
  </div>
</div>

<!--
Beat slide ini: definisi AI agent lewat perbandingan yang gampang kebayang, dua contoh produknya, lalu cara kerjanya.

- Definisi: AI agent itu seperti asisten andal yang kita serahi task, bukan vending machine tempat memasukkan pertanyaan lalu keluar jawaban. Chatbot menjawab lalu berhenti; agent terus bekerja sampai task-nya selesai.
- Contoh produk: Claude Code dari Anthropic dan Codex dari OpenAI.
- Cara kerja: dia coba sesuatu, lihat hasilnya, sesuaikan, lalu coba lagi sampai berhasil. Sama seperti cara manusia menyelesaikan pekerjaan.
- Tegaskan sesuai cue card: kita yang mengarahkan, agent yang mengerjakan.
- Slide beranimasi otomatis: judul, definisi, contoh, lalu loop kerja.
-->