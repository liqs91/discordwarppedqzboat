import { event } from "./gtag";

export function trackEvent(name: string, params?: Record<string, any>) {
  if (typeof window !== "undefined") {
    // SimpleAnalytics
    if (window.sa_event) {
      try {
        window.sa_event(name);
      } catch (e) {
        console.error(e);
      }
    }

    // Google Analytics
    try {
      event({
        action: name,
        category: params?.category || "engagement",
        label: params?.label || name,
        value: params?.value,
      });
    } catch (e) {
      console.error("Error tracking event to Google Analytics:", e);
    }
  }
}
