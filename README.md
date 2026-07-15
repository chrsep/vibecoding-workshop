# Vibe Coding Workshop — Slides

Slide deck built with [Slidev](https://sli.dev) + pnpm, styled like Excalidraw (hand-drawn, light paper canvas).

## Commands

```bash
pnpm dev            # dev server at http://localhost:3030 (presenter mode at /presenter)
pnpm build          # static site build (deploy dist/ to Netlify/Vercel/GitHub Pages)
pnpm export:pdf     # export PDF handout
pnpm export:pptx    # export PowerPoint (slides as images)
```

Exports need a one-time extra dependency:

```bash
pnpm add -D playwright-chromium
```

## Writing slides

Slides live in `slides.md`, separated by `---`. Speaker notes go in `<!-- ... -->` at the end of a slide.

### Hand-drawn text marks (built into Slidev)

```md
<span v-mark.underline.red="{ at: 1 }">important</span>
<span v-mark.circle.orange="{ at: 2 }">circled</span>
<span v-mark.highlight.yellow="{ at: 3 }">highlighted</span>
```

`at` = which click the annotation sketches itself in on.

### Sketchy shapes that draw themselves (`components/Rough.vue`)

```html
<Rough shape="rect" :width="190" :height="110" color="#f08c00" fill="#f08c00">
  <b>label inside</b>
</Rough>
<Rough shape="arrow" :width="110" :height="40" />
<Rough shape="ellipse" :width="190" :height="110" color="#1971c2" :delay="500" />
```

Shapes: `rect`, `ellipse`, `line`, `arrow`. Useful props: `color`, `fill`, `fillStyle`
(`hachure`, `cross-hatch`, `dots`, `scribble`), `delay` (ms, for staggering), `seed`
(change to get a different wobble), `at` (reveal on click N — the slide needs at least
that many clicks registered, e.g. from `v-click` on text).

Shapes animate when the slide opens; in PDF/PPTX exports they render fully drawn.

### Styling

Theme lives in `style.css`: paper background with dotted grid, Patrick Hand for
headings, Caveat via `.hand` for handwritten annotations, Excalidraw accent colors
via `.accent-red|blue|green|orange|violet`.
