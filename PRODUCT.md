# Product

## Register

brand

## Platform

web

## Users

The room at a live, in-person workshop: attendees at IT STEP Academy Jakarta — entrepreneurs who want a prototype for their business, students who want a portfolio piece, and curious people who want to create instead of just consume. Most cannot code and some arrive intimidated by the topic. They watch the deck projected in a lit room, from a distance, while the mentor presents in Indonesian. The presenter is the other user: the deck is the visual backbone of a ~90-minute session and must also survive as a PDF/PPTX handout with no animation.

## Product Purpose

A Slidev slide deck for the "Vibe Coding" workshop. Its job is to warm up the room and remove fear before the live demo: explain what vibe coding is (the Karpathy origin), where it sits on the spectrum toward software engineering, why it is possible now, and how an app is shaped (client → server → database → deploy) without ever going down into code. Success looks like a room that stays curious rather than lectured, follows the architecture map well enough to appreciate the demo, and leaves believing they could direct an AI to build something real.

## Positioning

"You don't need to know how to code — but this is guided, controlled building with AI, not magic." Every slide reinforces honest empowerment: the human directs the AI; nothing is a black box.

## Conversion & proof

The deck is deliberately non-commercial: no CTA and no program positioning on any slide — any offer lives entirely in what the mentor says out loud. What the deck must move is belief, in this order: (1) this is real and happening today, not the future; (2) you don't need to know how to code to take part; (3) an app has a knowable shape, so the demo will not be a trick; (4) the proof is the live demo itself — an idea from the room, deployed to a public URL everyone opens on their own phone. The deck's job is to set that moment up, never to compete with it.

## Brand Personality

Hand-drawn, warm, honest. The Excalidraw look — sketchy rough.js shapes on cream paper with a dotted grid — is the message made visual: software is something you can sketch and reason about, not a sealed machine. Three words: approachable, credible, alive. Emotional goals: remove fear, spark "I could do this", keep the room's energy up. Indonesian voice with English tech jargon kept natural (prompt, deploy, boilerplate).

## Anti-references

- Messaging bans from the mentor cue card: never "no code at all", never "it's magic". Honesty is the trust-builder.
- Not a corporate SaaS pitch deck: no gradient heroes, no product screenshots grid, no walls of bullets.
- Not childish: the sketch style stays restrained — ink structure with one accent per beat, not rainbow-marker chaos.
- No sales grammar anywhere in the deck; it is purely educational.

## Design Principles

1. **Show, don't lecture.** Diagrams and progressive reveals over bullet lists; the deck is a stage set for a live demo, not a document read aloud.
2. **Honest empowerment.** Visuals make building feel learnable, never magical: plain-language node titles ("The code's home") with the real tool named in a small chip ("github").
3. **One hot thing per beat.** A single terracotta emphasis per slide/step keeps a lit-room audience looking where the mentor is pointing; everything else stays ink.
4. **Legible from the back row.** Projector-first: generous type sizes, strong contrast, meaning never carried by subtle color alone.
5. **The demo is the hero.** Slides warm up and set context; they never spoil or compete with the live build-and-deploy moment.

## Accessibility & Inclusion

Projector legibility is the hard requirement: assume a lit room and distance viewing — large minimum type sizes, strong ink-on-paper contrast, no fine-grained color-only distinctions. Draw-in animation already respects render context (`Rough.vue` renders shapes fully drawn in PDF/PPTX exports); keep `prefers-reduced-motion` alternatives in any hand-written animation.
