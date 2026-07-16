---
kicker: intro
---

<div class="h-full flex flex-col pt-6">
  <Reveal :delay="100">
    <h1>Hari ini kita bahas</h1>
  </Reveal>

  <div class="mt-10 flex flex-col gap-6">
    <Reveal :delay="700">
      <div class="flex items-center gap-5">
        <Rough shape="ellipse" :width="52" :height="52" color="#3a332a" :stroke-width="2.5" :delay="800" :seed="2">
          <span class="font-serif font-semibold text-xl text-ink">1</span>
        </Rough>
        <span class="text-2xl text-ink">Apa itu Vibe Coding?</span>
      </div>
    </Reveal>
    <Reveal :delay="1050">
      <div class="flex items-center gap-5">
        <Rough shape="ellipse" :width="52" :height="52" color="#3a332a" :stroke-width="2.5" :delay="1150" :seed="5">
          <span class="font-serif font-semibold text-xl text-ink">2</span>
        </Rough>
        <span class="text-2xl text-ink">Kenapa sekarang?</span>
      </div>
    </Reveal>
    <Reveal :delay="1400">
      <div class="flex items-center gap-5">
        <Rough shape="ellipse" :width="52" :height="52" color="#3a332a" :stroke-width="2.5" :delay="1500" :seed="8">
          <span class="font-serif font-semibold text-xl text-ink">3</span>
        </Rough>
        <span class="text-2xl text-ink">Arsitektur dasar aplikasi</span>
      </div>
    </Reveal>
    <Reveal :delay="1750">
      <div class="flex items-center gap-5">
        <Rough shape="ellipse" :width="52" :height="52" color="#c25c3b" fill="#f4dcc8" fill-style="solid" :stroke-width="2.5" :delay="1850" :seed="11">
          <span class="font-serif font-semibold text-xl text-accent">4</span>
        </Rough>
        <span class="text-2xl text-ink font-semibold">Live demo</span>
      </div>
    </Reveal>
  </div>
</div>

<!--
Sebelum slide ini, perkenalkan diri secara lisan: nama, background, apa yang dikerjakan sehari-hari.

- Jalankan agendanya singkat saja: apa itu vibe coding, kenapa baru sekarang jadi mungkin, arsitektur dasar aplikasi, lalu bagian terbesar sesi ini yaitu live demo.
- Tekankan bahwa ide untuk demo datang dari peserta, supaya mereka mulai kepikiran dari sekarang.
- Slide beranimasi otomatis: judul dulu, lalu baris agenda muncul satu per satu.
-->
