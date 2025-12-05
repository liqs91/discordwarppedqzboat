"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/lib/gtag";
import { GA_CONFIG, validateGAConfig } from "@/lib/ga-config";

const GA_MEASUREMENT_ID = GA_CONFIG.measurementId;

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const validation = validateGAConfig();
    
    if (!validation.isValid) {
      if (GA_CONFIG.debug) {
        console.warn("Google Analytics:", validation.message);
      }
      return;
    }

    if (!GA_CONFIG.enabled) {
      return;
    }

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    pageview(url);
  }, [pathname, searchParams]);

  // Validate configuration on mount
  useEffect(() => {
    const validation = validateGAConfig();
    if (!validation.isValid && GA_CONFIG.debug) {
      console.warn("Google Analytics Configuration:", validation.message);
    }
  }, []);

  if (!GA_MEASUREMENT_ID || !GA_CONFIG.enabled) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={() => {
          if (GA_CONFIG.debug) {
            console.log("✅ Google Analytics loaded successfully");
          }
        }}
        onError={() => {
          console.error("❌ Failed to load Google Analytics script");
        }}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}

