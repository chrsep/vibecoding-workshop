---
kicker: intro
---

<div class="h-full flex flex-col pt-6">
  <Reveal :delay="100">
    <h1>What we'll cover today</h1>
  </Reveal>

  <div class="mt-10 flex flex-col gap-6">
    <Reveal :delay="700">
      <div class="flex items-center gap-5">
        <Rough shape="ellipse" :width="52" :height="52" color="#3a332a" :stroke-width="2.5" :delay="800" :seed="2">
          <span class="font-serif font-semibold text-xl text-ink">1</span>
        </Rough>
        <span class="text-2xl text-ink">What is Vibe Coding?</span>
      </div>
    </Reveal>
    <Reveal :delay="1400">
      <div class="flex items-center gap-5">
        <Rough shape="ellipse" :width="52" :height="52" color="#3a332a" :stroke-width="2.5" :delay="1500" :seed="8">
          <span class="font-serif font-semibold text-xl text-ink">2</span>
        </Rough>
        <span class="text-2xl text-ink">Basic app architecture</span>
      </div>
    </Reveal>
    <Reveal :delay="1750">
      <div class="flex items-center gap-5">
        <Rough shape="ellipse" :width="52" :height="52" color="#c25c3b" fill="#f4dcc8" fill-style="solid" :stroke-width="2.5" :delay="1850" :seed="11">
          <span class="font-serif font-semibold text-xl text-accent">3</span>
        </Rough>
        <span class="text-2xl text-ink font-semibold">Live demo</span>
      </div>
    </Reveal>
  </div>
</div>

<!--
Before this slide, introduce yourself out loud: name, background, what you do day to day.

- Walk through the agenda briefly: what vibe coding is, why it's only possible now, basic app architecture, then the biggest part of this session, the live demo.
- Emphasize that the idea for the demo comes from the participants, so they start thinking about it now.
- The slide animates automatically: the title first, then the agenda lines appear one by one.
-->
