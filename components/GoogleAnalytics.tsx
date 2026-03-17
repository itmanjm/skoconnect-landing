'use client';

import { useEffect } from 'react';

// Google Analytics 4 Tracking ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 measurement ID

// Type declarations for Google Analytics globals
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Only initialize GA4 on client-side and in production
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Load gtag.js
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        (window.dataLayer || []).push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_path: window.location.pathname,
        send_page_view: true,
        custom_map: {
          dimension1: 'user_type',
          dimension2: 'school_type',
          dimension3: 'school_tier',
          dimension4: 'school_location',
        },
      });
    }
  }, []);

  return null;
}

// Event tracking helper functions
export const trackEvent = (eventName: string, parameters?: object) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-expect-error - gtag is defined externally
    window.gtag('event', eventName, parameters);
  }
};

// Track form submissions
export const trackFormSubmit = (formType: string) => {
  trackEvent('form_submit', {
    event_category: 'form',
    form_type: formType,
  });
};

// Track button clicks
export const trackButtonClick = (buttonLabel: string, buttonLocation: string) => {
  trackEvent('button_click', {
    event_category: 'engagement',
    button_label: buttonLabel,
    button_location: buttonLocation,
  });
};

// Track feature views (scroll tracking)
export const trackFeatureView = (featureName: string) => {
  trackEvent('feature_view', {
    event_category: 'engagement',
    feature_name: featureName,
  });
};

// Track conversion events
export const trackConversion = (conversionType: string) => {
  trackEvent('conversion', {
    event_category: 'conversion',
    conversion_type: conversionType,
    value: 1,
  });
};

// Track page views (for single-page apps)
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-expect-error - gtag is defined externally
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};
