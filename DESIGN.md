---
name: Vibe Coding Workshop
description: Hand-drawn Excalidraw-style slide deck on warm paper — software you can sketch, for a live workshop room
colors:
  terracotta: "#c25c3b"
  terracotta-wash: "#f4dcc8"
  ink: "#3a332a"
  ink-soft: "#685f52"
  paper: "#f8f4e9"
  paper-deep: "#eee7d6"
  grid-dot: "#ddd4bf"
  connector: "#94897a"
  leaf-deep: "#23795a"
  leaf: "#3fbd85"
  leaf-wash: "#ddf2e5"
typography:
  display:
    fontFamily: "Fraunces, serif"
    fontSize: "3.2rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fraunces, serif"
    fontSize: "2.4rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.5
  annotation:
    fontFamily: "Fraunces, serif"
    fontSize: "1.25em"
    fontWeight: 400
    lineHeight: 1.25
  label:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.06em"
  kicker:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  chip: "4px"
  node: "14px"
  node-lg: "16px"
  device: "22px"
spacing:
  grid: "28px"
  gutter: "56px"
  stage-gutter: "64px"
components:
  diagram-node:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.node}"
    padding: "20px 24px"
  diagram-node-hot:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.node}"
    padding: "20px 24px"
  diagram-node-db:
    backgroundColor: "{colors.leaf-wash}"
    textColor: "{colors.leaf-deep}"
    rounded: "{rounded.node}"
    padding: "20px 24px"
  tool-chip:
    textColor: "{colors.terracotta}"
    typography: "{typography.label}"
  arrow-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.chip}"
    padding: "3px 6px"
  kicker:
    textColor: "{colors.ink-soft}"
    typography: "{typography.kicker}"
---

# Design System: Vibe Coding Workshop

## 1. Overview

**Creative North Star: "The Mentor's Sketchbook"**

Every slide looks like a page from a confident mentor's notebook: warm cream paper with a faint dotted grid, hand-drawn rough.js shapes that sketch themselves in as the mentor talks, serif headings with the poise of print, and italic pencil-notes in the margins. The style is the argument made visual — software is something you can sketch and reason about, not a sealed machine. Nothing glows, nothing gradients, nothing pretends to be a product screenshot; the room should feel like watching someone draw the idea live on paper.

The system explicitly rejects the corporate SaaS pitch deck (gradient heroes, screenshot grids, walls of bullets) and equally rejects childish rainbow-marker chaos. It is restrained sketchwork: ink structure with exactly one warm accent per beat, staged so a lit-room audience always knows where to look. It never claims magic — real tool names sit in small chips under plain-language titles, because honesty is the trust-builder.

**Key Characteristics:**
- Warm cream paper (#f8f4e9) with a 28px dotted grid; a broken modular grid replaces it on the title slide only
- Self-drawing rough.js shapes (rects, ellipses, arrows) with visible wobble, staggered so diagrams sketch themselves in sequence
- Fraunces serif for structure, Instrument Sans for reading, italic Fraunces for the mentor's handwriting
- One terracotta emphasis per slide/step; deep green reserved for data; everything else ink
- Cumulative progressive reveals — earlier elements stay visible as new ones appear
- Projector-first legibility: generous sizes, strong ink-on-paper contrast, meaning never carried by color alone

## 2. Colors: The Warm Editorial Palette

A restrained warm-paper palette where ink does the work and terracotta does the pointing (canonical OKLCH values live in `references/example.html`; the hex tokens above are what ships in `style.css`).

### Primary
- **Terracotta** (#c25c3b): THE accent. The single hot element per slide or step — the circled word, the active node, the emphasized annotation, the accent half of the kicker. Its rarity is what makes the room look where the mentor points.
- **Terracotta Wash** (#f4dcc8): the highlight color for `v-mark` highlights and soft accent fills. Never used for text.

### Secondary
- **Leaf Deep** (#23795a): the data voice. Strokes and text for database/memory/special nodes only.
- **Leaf** (#3fbd85): bright green for small moving markers on data wires (the travelling dot), never for text or fills.
- **Leaf Wash** (#ddf2e5): pale mint fill inside database nodes (approximates `oklch(95% 0.04 158)` from the reference slide).

### Neutral
- **Ink** (#3a332a): headings, bold text, default stroke for all Rough shapes and diagram frames.
- **Ink Soft** (#685f52): body copy, annotations, secondary/optional node strokes, slide furniture.
- **Paper** (#f8f4e9): the slide background and the fill of every solid diagram node.
- **Paper Deep** (#eee7d6): the hand-drawn drop-shadow color and subtle panel fills.
- **Grid Dot** (#ddd4bf): the dotted-grid points, nothing else.
- **Connector** (#94897a): every arrow, wire, and divider line between elements.

### Named Rules
**The One Hot Thing Rule.** Exactly one element per slide (or per click-step) wears terracotta. If a second element needs emphasis, it waits for the next step. Everything else stays ink.

**The Green Means Data Rule.** Deep green appears only on data — databases, memory, storage. A green element that isn't data is a bug.

**The Raw Hex Rule.** `Rough` props and `v-mark` colors always receive raw hex (`#c25c3b`, `#3a332a`, `#23795a`, `#94897a`) — SVG attributes cannot resolve `var()`.

## 3. Typography

**Display Font:** Fraunces (with serif fallback)
**Body Font:** Instrument Sans (with sans-serif fallback)
**Annotation Font:** Fraunces italic, 400 weight — the `.hand` class

**Character:** Print-shop poise over notebook paper. Upright Fraunces at 600 gives headings the authority of a well-set book title; Instrument Sans keeps body copy effortless to read from the back row; italic Fraunces is the mentor's pencil, annotating in the margins. Copy is Indonesian with English tech jargon left natural (prompt, deploy, boilerplate).

### Hierarchy
- **Display** (600, 3.2rem, 1.1): slide titles (h1). Tight tracking (-0.01em), `text-wrap: balance` behavior expected.
- **Headline** (600, 2.4rem, 1.1): section headings (h2).
- **Body** (400, 1.15rem, 1.5): paragraphs and list items, always Ink Soft with Ink for `<b>`/`<strong>` emphasis.
- **Annotation** (400 italic, 1.25em, 1.25): the `.hand` voice — margin notes, punchlines, and diagram arrow labels (~16.5px on diagrams, sitting on a small paper-colored chip so they read on top of connector lines).
- **Label** (600, 12px, 0.06em, uppercase): tool chips inside diagram nodes ("github", "vercel", "neon · database").
- **Kicker** (600, 11px, 0.18em, uppercase): the top-left frame line, with the topic name in terracotta.

### Named Rules
**The Two Voices Rule.** Upright Fraunces speaks structure; italic Fraunces is handwriting. Body copy is never set in Fraunces, and annotations are never upright.

**The Back Row Rule.** The deck is read off a projector in a lit room. Body text never drops below 1.15rem on the slide canvas, labels never below 11px, and contrast never softer than Ink Soft on Paper.

## 4. Elevation

This system has no soft shadows and no blur. Depth is drawn, not lit: a solid diagram node gets a duplicate of its own shape offset ~5px down-right, filled Paper Deep at 25% opacity, sitting behind it like a second pen stroke. Everything else sits flat on the paper. Layering beyond that is z-order only (arrow-label chips over wires, content over the title slide's modular grid).

### Named Rules
**The Paper Shadow Rule.** Never `box-shadow` with blur, never glassmorphism, never a glow. If an element needs depth, duplicate its shape, offset it ~5px, fill Paper Deep at 25% opacity, and put it behind.

## 5. Components

### Rough (the signature component)
The self-drawing sketch shape (`components/Rough.vue`), auto-registered by Slidev. Renders rough.js `rect | ellipse | line | arrow` with visible wobble (roughness 1.8, stroke 2.5px, seed varies the wobble); slot content centers inside the shape.
- **Defaults:** Ink stroke, no fill; `fillStyle: hachure` when filled.
- **Motion:** paths draw in via stroke-dashoffset (700ms ease-out, each path starting 50% into the previous). Stagger `delay` across shapes so diagrams sketch in sequence; `at` gates a shape to click N. Animation only runs in `slide`/`presenter` contexts — PDF/PPTX exports render fully drawn.

### Diagram Nodes
- **Solid node:** rounded rect (14–16px radius), 2px Ink stroke, Paper fill, Paper Shadow behind. Inside: a Fraunces title in plain language ("The code's home") over a tool chip.
- **Hot node:** the current step's node swaps to a Terracotta stroke at 2.5px. One at a time (One Hot Thing Rule).
- **Database node:** Leaf Deep stroke, Leaf Wash fill, all text Leaf Deep.
- **Secondary/optional node:** dashed Ink Soft stroke (≈1.6px, dash 7 6), no fill, Ink Soft text.
- **Device node (phone):** same recipe at 22px radius with a small speaker slot bar.

### Tool Chips
- **Style:** uppercase Label type (12px, 0.06em) in Terracotta (Leaf Deep inside database nodes), naming the real tool: "github", "vercel", "their phone".
- **Role:** the honesty device — plain-language node title on top, real tool named below. Never omit the chip on a tool node.

### Arrow Labels
- **Style:** italic Fraunces ~16.5px in Ink Soft, sitting on a Paper chip (4px radius, ~85% opacity) so the label reads on top of its connector line.
- **Motion:** fades/rises in ~450ms after its wire finishes drawing.

### Connectors & Wires
- **Style:** 2px Connector-colored lines with small solid arrowheads; hand-drawn curves, never straight elbows.
- **Motion:** draw in via stroke-dashoffset (0.9s), then an optional 6px travelling dot runs the path (Terracotta for build/deploy flows, Ink for requests, Leaf for data writes).

### Slide Furniture
- **Kicker (top-left):** "Vibe Coding Workshop · **topic**" — Kicker type in Ink Soft with the topic bolded in Terracotta. Rendered by `global-top.vue` on any slide declaring `kicker:` frontmatter.
- **Slide number (top-right):** italic Fraunces 14px, "§N".
- **Deliberately not adopted from the reference slide:** its bottom-left caption-titles and progress pips — the deck uses Slidev's own click flow instead.

### Stickers
- **Tilt:** `.tilt-l`/`.tilt-r` rotate images/cards ±2° for a taped-to-the-page feel. Use sparingly — one tilted element per slide.

## 6. Do's and Don'ts

### Do:
- **Do** pass raw hex to `Rough` props and `v-mark` (`#c25c3b` terracotta, `#3a332a` ink, `#23795a` green, `#94897a` connectors, `#f4dcc8` highlight) — SVG attributes can't resolve `var()`.
- **Do** stagger `delay` values (200 → 900 → 1300 → 2000…) so multi-shape diagrams draw in sequence, never all at once.
- **Do** keep progressive reveals cumulative: earlier elements stay visible as new ones appear; the newest element is the hot one.
- **Do** pair every tool node's plain-language title with a real-tool chip ("github", "vercel") — honest empowerment, never mystery.
- **Do** ease motion with `cubic-bezier(0.22, 1, 0.36, 1)` at 0.5–0.65s, rising ~14px into place, and respect `prefers-reduced-motion` in any hand-written animation (`Rough.vue` already handles exports).
- **Do** keep every slide legible from the back row: body ≥1.15rem, strong ink-on-paper contrast, shape or label redundancy wherever color distinguishes.

### Don't:
- **Don't** write "no code at all" or "it's magic" anywhere in slide copy — the messaging ban from the mentor cue card. This is guided, controlled building with AI.
- **Don't** let a second element go terracotta in the same beat. One hot thing per slide/step, everything else ink.
- **Don't** use corporate SaaS pitch-deck grammar: no gradient heroes, no product-screenshot grids, no walls of bullets (PRODUCT.md anti-reference).
- **Don't** reintroduce rainbow-marker chaos: the legacy `--sketch-*` variables all alias into this restrained palette; never give red/blue/violet independent values again.
- **Don't** add blur shadows, glows, or glassmorphism — depth is the Paper Shadow only.
- **Don't** carry meaning by subtle color alone; the deck is judged on a projector in a lit room.
- **Don't** add sales or program-promotion language to any slide — the deck is purely educational; offers live in what the mentor says out loud.
- **Don't** draw connectors as straight elbow lines — every wire is a hand-drawn curve with a small arrowhead.

*Audit test: paste any new slide next to `references/example.html`. If it looks like it came from a different notebook — shinier, straighter, more colorful, or more corporate — it fails.*
