# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A [Slidev](https://sli.dev) slide deck for a "Vibe Coding" workshop, styled to look like Excalidraw (hand-drawn shapes, paper background with dotted grid). Slide content is written in **Indonesian** (`lang: id`) with tech jargon kept in English (prompt, deploy, boilerplate…). `AGENTS.md` is a symlink to this file — only ever edit `CLAUDE.md`.

## Reference material (`references/`)

Source of truth for content and look — read the relevant file before writing slides:

- **`agenda.md`** — the workshop outline: 7 sections with timings, the key beats per section, and open items still to refine. Deck structure and slide content must follow it.
- **`cue-card.docx`** — mentor cue card for the live event (IT STEP Academy Jakarta). Binary — extract text via `python3` + `zipfile` on `word/document.xml`. Sets messaging constraints for slide copy: say "you don't need to know how to code" but **never** "no code at all" or "it's magic"; the live deploy to a public URL everyone opens on their own phone is the non-negotiable demo moment; frame the demo as *directing* the AI, not clicking "build me an app".
- **`example.html`** — the design north star: one finished, self-contained sample slide (the architecture diagram). The Design language section below is distilled from it; when in doubt about look/feel/motion, open this file.

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
- **`uno.config.ts`** — design tokens and shortcuts, merged into Slidev's built-in UnoCSS (preset-wind3) config. Defines the `theme.colors` palette (`paper`/`paper-deep`, `ink`/`ink-soft`, `accent`/`accent-soft`, `green`/`green-deep`, `line`) used as Tailwind-style utilities (`bg-paper`, `text-ink-soft`, `text-accent`, `stroke-line`, …), the `bg-dotted-grid` custom rule (Excalidraw-style dotted paper background), and shortcuts `hand` (italic Fraunces annotation voice) and `title-grid-line`/`title-grid-fill`/`title-grid-accent` (title slide's modular SVG grid).
- **`style.css`** — minimal base layer via `@apply`, styling only markdown-generated elements and Slidev-layout internals that markup can't reach (`.slidev-layout` wrapper, raw `h1`/`h2`/`h3`/`p`/`li`/`b`/`strong` from markdown). All other styling is Tailwind-syntax utility classes in markup, backed by the tokens/shortcuts in `uno.config.ts`. Fonts (Fraunces for headings, Instrument Sans for body) are loaded via the `fonts:` block in `slides.md` frontmatter, not a CSS `@import`.
- **`global-top.vue`** — renders the editorial frame (kicker top-left + `§N` slide number top-right, styled with inline utility classes) on any slide that declares `kicker: <topic>` in its frontmatter. The title slide omits it, and swaps the dotted grid for an inline-SVG modular grid (`class: title-slide` + the SVG at the top of `slides.md`).

## Design language

Distilled from `references/example.html` — match it when designing new slides:

- **Type**: Fraunces 600 for headings, tight (`line-height` ≈1.1, `letter-spacing: -0.01em`); Instrument Sans for body; italic Fraunces (`.hand`) for annotations *and* diagram arrow labels (~16px, `--ink-soft`, sitting on a small paper-colored chip so they read on top of connector lines).
- **Diagram nodes**: rounded rect (`rx` 14–16), 2px ink stroke, paper fill, with a duplicate rect offset ~5px in `--paper-deep` at 25% opacity as the hand-drawn drop shadow. Inside: Fraunces title in plain language ("The code's home") + a small uppercase chip (12px, `0.06em` tracking, terracotta) naming the real tool ("github", "vercel"). Secondary/optional nodes: dashed `--ink-soft` stroke, no fill. Database nodes: `--green-deep` stroke, pale green fill.
- **Emphasis discipline**: exactly one "hot" element per slide/step gets the terracotta treatment; everything else stays ink. Progressive reveals are cumulative — earlier elements stay visible as new ones appear.
- **Motion**: ease with `cubic-bezier(0.22, 1, 0.36, 1)`, 0.5–0.65s, elements rising ~14px into place; connectors draw in via stroke-dashoffset; stagger sequential elements rather than revealing them at once. Respect `prefers-reduced-motion` in any hand-written animation (`Rough.vue` already handles exports).

## Conventions

- Styling is done with Tailwind-syntax utility classes, processed by Slidev's built-in UnoCSS (preset-wind3) merged with `uno.config.ts`. Use the token utilities — `text-ink`, `text-ink-soft`, `text-accent`, `bg-paper`, `bg-paper-deep`, `stroke-line`, etc. — rather than hardcoded colors in markup.
- `.hand` and `title-grid-line`/`title-grid-fill`/`title-grid-accent` are `uno.config.ts` shortcuts (Tailwind classes under the hood), not hand-written CSS — use them the same way as any utility class.
- For the rotated "sticker" feel, use the `-rotate-2` / `rotate-2` utilities directly instead of the old `.tilt-l`/`.tilt-r` classes.
- When adding shapes to a diagram, stagger `delay` values so shapes draw in sequence (see the flow diagram slide in `slides.md`).
- Palette is deliberately restrained: default to ink (`#3a332a`) strokes for `Rough` shapes, terracotta (`#c25c3b`) for the one emphasized element per slide, deep green (`#23795a`) for data/db, `#94897a` for connectors/arrows. Pass raw hex to `Rough` props and `v-mark` (SVG attributes can't resolve UnoCSS/Tailwind utility classes or `var()`).
- For `v-mark`, use object syntax with an explicit palette color, e.g. `v-mark="{ at: 1, type: 'circle', color: '#c25c3b' }"` (highlight uses `#f4dcc8`).
- Content slides declare `kicker: <short lowercase topic>` in frontmatter to get the header frame.
