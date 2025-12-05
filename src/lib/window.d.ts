interface Window {
  sa_event(name: string): void;
  gtag?: (
    command: "config" | "event" | "js" | "set",
    targetId: string | Date,
    config?: Record<string, any>
  ) => void;
  dataLayer?: any[];
}
