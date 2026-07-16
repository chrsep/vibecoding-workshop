---
kicker: kenapa sekarang
---

<div class="h-full flex flex-col pt-6">
  <Reveal :delay="100">
    <h1>Apa itu <span class="relative inline-block">AI Agent<Rough class="!absolute -left-1 -bottom-4 pointer-events-none" shape="line" :width="210" :height="20" color="#c25c3b" :stroke-width="3.5" :delay="700" /></span>?</h1>
  </Reveal>

  <div class="mt-4 max-w-[46rem] flex flex-col gap-4">
    <Reveal :delay="900">
      <div class="flex items-start gap-3 text-2xl leading-[1.45] text-ink">
        <span aria-hidden="true" class="mt-3 size-2 shrink-0 rounded-full bg-ink"></span>
        <span>Asisten andal yang bisa kita serahi task, bukan vending machine tempat tanya jawab.</span>
      </div>
    </Reveal>
    <Reveal :delay="1500">
      <div class="flex items-start gap-3 text-2xl leading-[1.45] text-ink">
        <span aria-hidden="true" class="mt-3 size-2 shrink-0 rounded-full bg-ink"></span>
        <span>Contohnya: <b>Claude Code</b>, <b>Codex</b></span>
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

<AgentParade />

<!--
Beat slide ini: definisi AI agent lewat perbandingan yang gampang kebayang, dua contoh produknya, lalu cara kerjanya.

- Definisi: AI agent itu seperti asisten andal yang kita serahi task, bukan vending machine tempat memasukkan pertanyaan lalu keluar jawaban. Chatbot menjawab lalu berhenti; agent terus bekerja sampai task-nya selesai.
- Contoh produk: Claude Code dari Anthropic dan Codex dari OpenAI. Maskot keduanya juga yang berjalan di bagian bawah slide.
- Cara kerja: dia coba sesuatu, lihat hasilnya, sesuaikan, lalu coba lagi sampai berhasil. Sama seperti cara manusia menyelesaikan pekerjaan.
- Tegaskan sesuai cue card: kita yang mengarahkan, agent yang mengerjakan.
- Slide beranimasi otomatis: judul, definisi, contoh, lalu loop kerja. Parade logo di bawah biarkan saja sebagai hiburan.
-->

---
layout: center
kicker: kenapa sekarang
---

# Kenapa Sekarang? ✏️

<p class="mt-4 text-center">Bagian ini belum ditulis. Beats-nya ada di catatan presenter.</p>

<!--
TODO: tulis bagian ini. Beats dari references/agenda.md §4 (~15 menit):

- Pertanyaan pembuka: kenapa vibe coding baru mungkin sekarang, bukan lima tahun lalu?
- Apa itu model? Penjelasan bahasa sederhana: apa yang orang maksud dengan "AI model" dan kenapa ada banyak model berbeda.
- Apa yang berubah? Timeline milestone kemampuan (bukan daftar rilis produk): generate teks → nulis code → pakai tools → melihat interface → menyelesaikan tugas multi-step.
- Posisi sekarang: peta sederhana lanskap frontier model dan jenis pekerjaan yang bisa mereka lakukan hari ini.
- Ambang yang sudah dilewati: model tidak lagi cuma menjawab pertanyaan. Mereka makin bisa ikut dalam loop penuh membangun, memeriksa, dan meng-iterasi software.
- Kenapa momen ini unik: kemampuannya cukup kuat mengubah niat bahasa natural jadi software yang jalan; tools-nya cukup mudah diakses pemula; learning loop jauh lebih pendek (bikin, lihat hasil, tanya kenapa, perbaiki dalam satu sesi); dan kita masih di awal, jadi judgment tetap penting.
- Beat penutup: barrier untuk mulai sudah runtuh, sementara ceiling yang bisa dibangun terus naik.
- Transisi ke arsitektur: "Tapi untuk mengarahkan tools ini dengan baik, kita tetap butuh peta dari apa yang kita bangun."
-->
