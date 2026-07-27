export const ANALYTICS_OPT_OUT_KEY = "jamin.analytics.optOut";
export const ANALYTICS_PREFERENCE_EVENT = "jamin:analytics-preference";

export const isAnalyticsOptedOut = () => {
  if (typeof window === "undefined") return false;

  try {
    return window.localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === "true";
  } catch {
    return false;
  }
};

export const saveAnalyticsOptOut = (optedOut: boolean) => {
  try {
    if (optedOut) {
      window.localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "true");
    } else {
      window.localStorage.removeItem(ANALYTICS_OPT_OUT_KEY);
    }
  } catch {
    // The in-memory preference still applies for this page view.
  }

  window.dispatchEvent(
    new CustomEvent<boolean>(ANALYTICS_PREFERENCE_EVENT, {
      detail: optedOut,
    }),
  );
};
