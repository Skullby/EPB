type CTAAnalyticsEvent = {
  name: string
  section: string
  label?: string
  detail?: string
}

const createPayload = (event: CTAAnalyticsEvent) => ({
  event: 'cta_engagement',
  timestamp: new Date().toISOString(),
  ...event,
})

const pushEvent = (payload: CTAAnalyticsEvent) => {
  const data = createPayload(payload)

  if (typeof window === 'undefined') {
    // Server-side guard; useful for tests or SSR
    console.info('[analytics]', data)
    return
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(data)
    return
  }

  console.info('[analytics]', data)
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export type { CTAAnalyticsEvent }
export { pushEvent as trackCTAEvent }

export {}
