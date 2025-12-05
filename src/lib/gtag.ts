/**
 * Google Analytics utility functions
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

export const isGAEnabled = () => {
  return typeof window !== "undefined" && GA_MEASUREMENT_ID && window.gtag;
};

// Page view tracking
export const pageview = (url: string) => {
  if (!isGAEnabled()) {
    return;
  }

  try {
    window.gtag!("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } catch (error) {
    console.error("Error tracking pageview:", error);
  }
};

// Event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (!isGAEnabled()) {
    return;
  }

  try {
    window.gtag!("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } catch (error) {
    console.error("Error tracking event:", error);
  }
};

