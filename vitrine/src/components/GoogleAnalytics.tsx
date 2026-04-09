"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const COOKIE_KEY = "keymatic-cookie-consent";

function getConsentSnapshot() {
  return localStorage.getItem(COOKIE_KEY) === "accepted";
}

function getServerSnapshot() {
  return false;
}

function subscribeConsent(callback: () => void) {
  function onStorage(e: StorageEvent) {
    if (e.key === COOKIE_KEY) callback();
  }
  window.addEventListener("storage", onStorage);
  return () => window.removeEventListener("storage", onStorage);
}

export default function GoogleAnalytics() {
  const hasConsent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getServerSnapshot);

  if (!GA_MEASUREMENT_ID || !hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
          });
        `}
      </Script>
    </>
  );
}
