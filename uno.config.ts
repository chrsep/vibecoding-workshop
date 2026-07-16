// Design tokens for the Excalidraw-style Vibe Coding deck.
// Terracotta (`accent`) is THE accent color; `green.deep` is the secondary
// accent for data/db/special elements. Mirrors references/example.html.
// This config is merged with Slidev's built-in UnoCSS (preset-wind3) config,
// so these tokens/shortcuts are available as Tailwind-style utility classes
// in slides.md and *.vue files (e.g. text-ink, bg-paper, text-accent).
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      paper: {
        DEFAULT: '#f8f4e9',
        deep: '#eee7d6',
      },
      ink: {
        DEFAULT: '#3a332a',
        soft: '#685f52',
      },
      accent: {
        DEFAULT: '#c25c3b',
        soft: '#f4dcc8',
      },
      green: {
        DEFAULT: '#3fbd85',
        deep: '#23795a',
      },
      line: '#94897a',
    },
  },
  shortcuts: {
    hand: 'font-serif italic font-normal text-[1.25em] leading-[1.25]',
  },
  rules: [
    ['bg-dotted-grid', { 'background-image': 'radial-gradient(circle, #ddd4bf 1px, transparent 1px)', 'background-size': '28px 28px' }],
  ],
})
