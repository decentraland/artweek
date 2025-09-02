import { isbot } from "isbot"
import { config } from "../../config"

interface AnalyticsWindow extends Window {
  analytics: SegmentAnalytics.AnalyticsJS
}

function shouldEnableAnalytics(): boolean {
  if (typeof window === "undefined") return false

  // Respect bots and Do Not Track
  if (isbot(window.navigator.userAgent)) return false
  const dnt =
    (window.navigator as unknown as { doNotTrack?: string }).doNotTrack ||
    (window as unknown as { doNotTrack?: string }).doNotTrack ||
    (navigator as unknown as { msDoNotTrack?: string }).msDoNotTrack
  if (dnt === "1") return false

  // Only enable when explicitly allowed and we have a valid key
  const writeKey = config.get("SEGMENT_API_KEY")
  const enabledFlag = Boolean(config.get("ENABLE_ANALYTICS"))
  if (!writeKey || !enabledFlag) return false

  return true
}

function getAnalytics() {
  try {
    if (!shouldEnableAnalytics()) return undefined
    return (window as unknown as AnalyticsWindow).analytics
  } catch {
    return undefined
  }
}

export { getAnalytics, shouldEnableAnalytics }
