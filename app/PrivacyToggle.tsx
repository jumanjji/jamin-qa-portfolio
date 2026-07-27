"use client";

import { useEffect, useState } from "react";
import {
  ANALYTICS_OPT_OUT_KEY,
  ANALYTICS_PREFERENCE_EVENT,
  isAnalyticsOptedOut,
  saveAnalyticsOptOut,
} from "./analytics-preferences";

export default function PrivacyToggle() {
  const [optedOut, setOptedOut] = useState<boolean | null>(null);

  useEffect(() => {
    const syncPreference = () => setOptedOut(isAnalyticsOptedOut());
    const handlePreference = (event: Event) => {
      setOptedOut((event as CustomEvent<boolean>).detail);
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === ANALYTICS_OPT_OUT_KEY) syncPreference();
    };

    syncPreference();
    window.addEventListener(ANALYTICS_PREFERENCE_EVENT, handlePreference);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(ANALYTICS_PREFERENCE_EVENT, handlePreference);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const trackingEnabled = optedOut === false;

  const togglePreference = () => {
    if (optedOut === null) return;

    const nextOptedOut = !optedOut;
    setOptedOut(nextOptedOut);
    saveAnalyticsOptOut(nextOptedOut);
  };

  return (
    <section
      className="privacy-choice"
      id="analytics-preferences"
      aria-labelledby="analytics-preferences-title"
    >
      <div className="privacy-choice-copy">
        <p className="privacy-choice-kicker">Your choice</p>
        <h2 id="analytics-preferences-title">Portfolio analytics</h2>
        <p>
          Analytics are enabled by default and help Jamin understand which
          parts of the portfolio are useful. You can stop future analytics in
          this browser at any time.
        </p>
      </div>

      <div className="privacy-toggle-panel">
        <div>
          <strong>
            {optedOut === null
              ? "Checking your preference…"
              : trackingEnabled
                ? "Analytics enabled"
                : "Analytics disabled"}
          </strong>
          <span aria-live="polite">
            {optedOut === null
              ? "The control will be ready in a moment."
              : trackingEnabled
                ? "New portfolio interactions may be sent to Amplitude."
                : "No new portfolio analytics will be collected."}
          </span>
        </div>

        <button
          className="privacy-switch"
          type="button"
          role="switch"
          aria-checked={trackingEnabled}
          aria-label={
            trackingEnabled
              ? "Disable portfolio analytics"
              : "Enable portfolio analytics"
          }
          disabled={optedOut === null}
          onClick={togglePreference}
        >
          <span className="privacy-switch-track" aria-hidden="true">
            <span className="privacy-switch-thumb" />
          </span>
          <span>{trackingEnabled ? "On" : "Off"}</span>
        </button>
      </div>

      <p className="privacy-choice-note">
        This preference is stored only in your browser. Clearing site data may
        reset it. Opting out stops future collection; it does not automatically
        erase analytics already received.
      </p>
    </section>
  );
}
