import posthog from 'posthog-js'

// Slidev app setup: called with the AppContext ({ app, router }) at startup
export default ({ app }) => {
  posthog.init(import.meta.env.VITE_POSTHOG_PROJECT_TOKEN || '', {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com',
    defaults: '2026-01-30',
  })

  app.config.errorHandler = (err) => {
    posthog.captureException(err)
  }

  posthog.capture('presentation_opened')
}
