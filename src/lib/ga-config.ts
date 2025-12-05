/**
 * Google Analytics Configuration
 * 
 * This file exports the Google Analytics configuration.
 * Make sure to set NEXT_PUBLIC_GOOGLE_ANALYTICS_ID in your .env.local file
 */

export const GA_CONFIG = {
  measurementId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "",
  enabled: process.env.NODE_ENV === "production" || !!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  debug: process.env.NODE_ENV === "development",
} as const;

/**
 * Validates if Google Analytics is properly configured
 */
export function validateGAConfig(): {
  isValid: boolean;
  message: string;
} {
  if (!GA_CONFIG.measurementId) {
    return {
      isValid: false,
      message: "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID is not set in environment variables",
    };
  }

  if (!GA_CONFIG.measurementId.startsWith("G-")) {
    return {
      isValid: false,
      message: "Invalid Google Analytics Measurement ID format. It should start with 'G-'",
    };
  }

  return {
    isValid: true,
    message: "Google Analytics is properly configured",
  };
}

