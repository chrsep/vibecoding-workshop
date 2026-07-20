# PostHog post-wizard report

The wizard has completed a PostHog analytics integration for the Vibe Coding workshop Slidev presentation. PostHog is initialized in `setup/main.js` (the Slidev app setup entry point) using environment variables. The resources slide now tracks when viewers reach the final call-to-action and when they click the external link — covering the full engagement funnel from deck open to off-site visit.

| Event | Description | File |
|---|---|---|
| `presentation_opened` | Fired when the slide deck is first loaded in the browser, marking the top of the engagement funnel. | `setup/main.js` |
| `resources_slide_reached` | Fired when a viewer reaches the resources slide with the QR code, indicating they watched through to the end. | `pages/06-live-demo.md` |
| `resources_link_clicked` | Fired when a viewer clicks the chrsep.dev/vibe-coding external resources link on the final slide. | `pages/06-live-demo.md` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on viewer behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://eu.posthog.com/project/228051/dashboard/833424)
- [Presentation engagement funnel (wizard)](https://eu.posthog.com/project/228051/insights/LTIB9yj2)
- [Presentations opened over time (wizard)](https://eu.posthog.com/project/228051/insights/pAUFIJJY)
- [Resources link conversion rate (wizard)](https://eu.posthog.com/project/228051/insights/r94dAOBO)

## Verify before merging

- [ ] Run a full production build (`pnpm build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `VITE_POSTHOG_PROJECT_TOKEN` and `VITE_POSTHOG_HOST` to `.env.example` and any deployment configuration (Vercel env vars, etc.) so collaborators and CI have the correct values.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
