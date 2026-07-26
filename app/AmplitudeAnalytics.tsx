"use client";

import { useEffect } from "react";
import * as amplitude from "@amplitude/unified";

const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
const localAnalyticsEnabled =
  process.env.NEXT_PUBLIC_AMPLITUDE_LOCAL_ENABLED === "true";
const analyticsEnabled =
  process.env.NODE_ENV === "production" || localAnalyticsEnabled;
const pageName = "Home";
const pageType = "Portfolio";
const inactivityTimeoutMs = 30_000;
const maxEventsPerPageView = 100;
const scrollDepthThresholds = [25, 50, 75, 90];
const engagementMilestones = [15, 30, 60, 120];

let initializationStarted = false;
let pageViewId: string | undefined;
let pageViewTracked = false;
let trackedEventCount = 0;
let eventBudgetWarningShown = false;

const createPageViewId = () =>
  typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const trackEvent = (
  eventName: string,
  eventProperties: Record<string, unknown>,
) => {
  if (trackedEventCount >= maxEventsPerPageView) {
    if (!eventBudgetWarningShown) {
      eventBudgetWarningShown = true;
      console.warn(
        `Amplitude event budget reached — further events disabled for this page view`,
      );
    }
    return;
  }

  trackedEventCount += 1;
  amplitude.track(eventName, eventProperties);
};

const getSectionName = () => {
  const centeredElement = document.elementFromPoint(
    window.innerWidth / 2,
    window.innerHeight / 2,
  );

  return (
    centeredElement
      ?.closest<HTMLElement>("[data-analytics-section]")
      ?.dataset.analyticsSection ?? "Unknown"
  );
};

export default function AmplitudeAnalytics() {
  useEffect(() => {
    if (!analyticsEnabled) return;

    if (!apiKey) {
      console.warn("Amplitude API key missing — analytics disabled");
      return;
    }

    if (!initializationStarted) {
      initializationStarted = true;
      void amplitude.initAll(apiKey, {
        analytics: { autocapture: false },
        engagement: { skip: true },
      });
    }

    pageViewId ??= createPageViewId();

    const baseProperties = () => ({
      page_name: pageName,
      page_type: pageType,
      page_path: window.location.pathname,
      page_view_id: pageViewId,
      environment: process.env.NODE_ENV,
    });

    if (!pageViewTracked) {
      pageViewTracked = true;
      trackEvent("Viewed Page", baseProperties());
    }

    const sectionTimers = new Map<Element, ReturnType<typeof setTimeout>>();
    const viewedSections = new Set<string>();

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const marker = entry.target as HTMLElement;
          const section = marker.closest<HTMLElement>(
            "[data-analytics-section]",
          );
          const sectionName = section?.dataset.analyticsSection;

          if (!sectionName || viewedSections.has(sectionName)) continue;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (sectionTimers.has(marker)) continue;

            const timer = setTimeout(() => {
              viewedSections.add(sectionName);
              sectionTimers.delete(marker);
              sectionObserver.unobserve(marker);

              trackEvent("Viewed Section", {
                ...baseProperties(),
                section_name: sectionName,
                section_position: Number(
                  section?.dataset.analyticsSectionPosition,
                ),
              });
            }, 1_000);

            sectionTimers.set(marker, timer);
          } else {
            const timer = sectionTimers.get(marker);
            if (timer) clearTimeout(timer);
            sectionTimers.delete(marker);
          }
        }
      },
      { threshold: [0, 0.5] },
    );

    const sectionMarkers = document.querySelectorAll(
      "[data-analytics-view-marker]",
    );
    sectionMarkers.forEach((marker) => sectionObserver.observe(marker));

    const reachedScrollDepths = new Set<number>();
    let maxScrollDepthPercent = 0;

    const measureScrollDepth = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollDepthPercent =
        scrollableHeight <= 0
          ? 100
          : Math.min(100, (window.scrollY / scrollableHeight) * 100);

      maxScrollDepthPercent = Math.max(
        maxScrollDepthPercent,
        scrollDepthPercent,
      );

      for (const threshold of scrollDepthThresholds) {
        if (
          scrollDepthPercent >= threshold &&
          !reachedScrollDepths.has(threshold)
        ) {
          reachedScrollDepths.add(threshold);
          trackEvent("Reached Scroll Depth", {
            ...baseProperties(),
            scroll_depth_percent: threshold,
          });
        }
      }
    };

    let lastActivityAt = Date.now();
    let lastEngagementTickAt = performance.now();
    let activeTimeMs = 0;
    const reachedEngagementMilestones = new Set<number>();

    const recordActivity = () => {
      lastActivityAt = Date.now();
    };

    const engagementTimer = window.setInterval(() => {
      const now = performance.now();
      const elapsedSinceLastTick = now - lastEngagementTickAt;
      lastEngagementTickAt = now;

      const isActive =
        document.visibilityState === "visible" &&
        document.hasFocus() &&
        Date.now() - lastActivityAt < inactivityTimeoutMs;

      if (!isActive) return;
      activeTimeMs += elapsedSinceLastTick;

      for (const milestone of engagementMilestones) {
        if (
          activeTimeMs >= milestone * 1_000 &&
          !reachedEngagementMilestones.has(milestone)
        ) {
          reachedEngagementMilestones.add(milestone);
          trackEvent("Reached Engagement Milestone", {
            ...baseProperties(),
            engagement_seconds: milestone,
            section_name: getSectionName(),
          });
        }
      }
    }, 1_000);

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const trackedElement = target.closest<HTMLElement>(
        "[data-analytics-click]",
      );
      if (!trackedElement) return;

      const clickType = trackedElement.dataset.analyticsClick;
      const sectionName =
        trackedElement
          .closest<HTMLElement>("[data-analytics-section]")
          ?.dataset.analyticsSection ?? "Unknown";
      const elementText =
        trackedElement.dataset.analyticsText ??
        trackedElement.textContent?.trim().replace(/\s+/g, " ") ??
        "";

      if (clickType === "Link") {
        trackEvent("Clicked Link", {
          ...baseProperties(),
          section_name: sectionName,
          link_type: trackedElement.dataset.analyticsType,
          link_name: trackedElement.dataset.analyticsName,
          link_text: elementText,
          link_location: trackedElement.dataset.analyticsLocation,
          destination_type:
            trackedElement.dataset.analyticsDestinationType,
          destination_name:
            trackedElement.dataset.analyticsDestinationName,
          ...(trackedElement.dataset.analyticsDomain
            ? { destination_domain: trackedElement.dataset.analyticsDomain }
            : {}),
          ...(trackedElement.dataset.analyticsContactMethod
            ? {
                contact_method:
                  trackedElement.dataset.analyticsContactMethod,
              }
            : {}),
          ...(trackedElement.dataset.analyticsFileName
            ? {
                file_name: trackedElement.dataset.analyticsFileName,
                file_type: trackedElement.dataset.analyticsFileType,
              }
            : {}),
        });
      }

      if (clickType === "Button") {
        trackEvent("Clicked Button", {
          ...baseProperties(),
          section_name: sectionName,
          button_type: trackedElement.dataset.analyticsType,
          button_name: trackedElement.dataset.analyticsName,
          button_text: elementText,
          button_location: trackedElement.dataset.analyticsLocation,
          interaction_type: trackedElement.dataset.analyticsInteractionType,
        });
      }
    };

    let pageViewEnded = false;
    const startedAt = performance.now();

    const endPageView = () => {
      if (pageViewEnded) return;
      pageViewEnded = true;
      measureScrollDepth();

      amplitude.setTransport("beacon");
      trackEvent("Ended Page View", {
        ...baseProperties(),
        active_time_seconds: Math.round(activeTimeMs / 100) / 10,
        elapsed_time_seconds:
          Math.round((performance.now() - startedAt) / 100) / 10,
        max_scroll_depth_percent:
          Math.round(maxScrollDepthPercent * 10) / 10,
        sections_viewed_count: viewedSections.size,
        last_section_name: getSectionName(),
      });
      void amplitude.flush();
    };

    const restoreDefaultTransport = () => {
      amplitude.setTransport("fetch");
    };

    const activityEvents: Array<keyof WindowEventMap> = [
      "keydown",
      "pointerdown",
      "scroll",
      "touchstart",
    ];

    measureScrollDepth();
    window.addEventListener("scroll", measureScrollDepth, { passive: true });
    activityEvents.forEach((eventName) =>
      window.addEventListener(eventName, recordActivity, { passive: true }),
    );
    document.addEventListener("click", handleClick);
    window.addEventListener("pagehide", endPageView);
    window.addEventListener("pageshow", restoreDefaultTransport);

    return () => {
      sectionObserver.disconnect();
      sectionTimers.forEach((timer) => clearTimeout(timer));
      window.clearInterval(engagementTimer);
      window.removeEventListener("scroll", measureScrollDepth);
      activityEvents.forEach((eventName) =>
        window.removeEventListener(eventName, recordActivity),
      );
      document.removeEventListener("click", handleClick);
      window.removeEventListener("pagehide", endPageView);
      window.removeEventListener("pageshow", restoreDefaultTransport);
    };
  }, []);

  return null;
}
