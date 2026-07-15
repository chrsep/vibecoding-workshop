# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A [Slidev](https://sli.dev) slide deck for a "Vibe Coding" workshop, styled to look like Excalidraw (hand-drawn shapes, paper background with dotted grid). Slide content is written in **Indonesian** (`lang: id`).

## Commands

Uses **pnpm** (not npm).

```bash
pnpm dev            # dev server at http://localhost:3030 (presenter mode at /presenter)
pnpm build          # static site build to dist/
pnpm export:pdf     # PDF handout → dist-export/
pnpm export:pptx    # PowerPoint (slides as images) → dist-export/
```

Exports require a one-time `pnpm add -D playwright-chromium`.

There is no lint or test setup. A dev-server launch config named `slidev` exists in `.claude/launch.json` for browser preview.

## Architecture

- **`slides.md`** — all slides, separated by `---`. Frontmatter on the first slide holds deck config. Speaker notes go in an HTML comment `<!-- ... -->` at the end of each slide. Slides use Vue components, UnoCSS utility classes, and Slidev click animations (`v-click`, `v-mark.underline/circle/highlight.<color>` with `{ at: N }` for click timing).
- **`components/Rough.vue`** — auto-registered by Slidev. Renders self-drawing sketchy SVG shapes via rough.js (`shape`: `rect | ellipse | line | arrow`). Key props: `color`, `fill`, `fillStyle` (`hachure`, `cross-hatch`, `dots`, `scribble`...), `delay` (ms, for staggering multiple shapes), `seed` (changes the wobble), `at` (reveal on click N — the slide needs that many clicks registered, e.g. via `v-click` on text). Slot content is centered inside the shape. Draw-in animation only runs in `slide`/`presenter` render contexts; in PDF/PPTX exports shapes render fully drawn.
- **`style.css`** — the whole theme: warm cream paper (`--paper`) with dotted grid, Fraunces for headings, Instrument Sans for body, italic Fraunces via the `.hand` class for annotations. Restrained warm palette (modeled on `references/example.html`): terracotta `--accent` is THE accent, `--green-deep` is the secondary for data/db/special elements, `--ink`/`--ink-soft`/`--line` for structure. Legacy `--sketch-*` vars alias into this palette. `.tilt-l`/`.tilt-r` for a rotated sticker feel, `.deck-kicker`/`.deck-slideno` style the slide furniture.
- **`global-top.vue`** — renders the editorial frame (kicker top-left + `§N` slide number top-right) on any slide that declares `kicker: <topic>` in its frontmatter. The title slide omits it.

## Conventions

- When adding shapes to a diagram, stagger `delay` values so shapes draw in sequence (see the flow diagram slide in `slides.md`).
- Palette is deliberately restrained: default to ink (`#3a332a`) strokes for `Rough` shapes, terracotta (`#c25c3b`) for the one emphasized element per slide, deep green (`#23795a`) for data/db, `#94897a` for connectors/arrows. Pass raw hex to `Rough` props and `v-mark` (SVG attributes can't resolve `var()`).
- For `v-mark`, use object syntax with an explicit palette color, e.g. `v-mark="{ at: 1, type: 'circle', color: '#c25c3b' }"` (highlight uses `#f4dcc8`).
- Content slides declare `kicker: <short lowercase topic>` in frontmatter to get the header frame.
