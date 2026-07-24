"use client";

import { useState, type AnimationEvent } from "react";

type HeroVisualProps = {
  assetBasePath: string;
};

export default function HeroVisual({ assetBasePath }: HeroVisualProps) {
  const [portraitInFront, setPortraitInFront] = useState(false);
  const [movingCard, setMovingCard] = useState<
    "portrait" | "signal" | null
  >(null);

  const swapLayers = () => {
    if (movingCard) return;
    setMovingCard(portraitInFront ? "portrait" : "signal");
  };

  const finishSwap = (
    card: "portrait" | "signal",
    event: AnimationEvent<HTMLElement>,
  ) => {
    if (event.animationName !== "layer-orbit") return;
    setPortraitInFront(card === "signal");
    setMovingCard(null);
  };

  return (
    <div
      className={[
        "hero-visual",
        portraitInFront ? "is-swapped" : "",
        movingCard ? "is-animating" : "",
        movingCard ? `moving-${movingCard}` : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <figure
        className="portrait-frame"
        onAnimationEnd={(event) => finishSwap("portrait", event)}
      >
        <img
          src={`${assetBasePath}/jamin-portrait.webp`}
          alt="Portrait of Jamin"
        />
        <figcaption>
          <span>Jamin</span>
          <span>QA · Toronto</span>
        </figcaption>
      </figure>

      <div
        className="signal-card"
        aria-label="Quality signal summary"
        onAnimationEnd={(event) => finishSwap("signal", event)}
      >
        <div className="signal-card-top">
          <span>RELEASE_SIGNAL</span>
          <span className="live-label">
            <span className="status-dot" /> LIVE
          </span>
        </div>
        <div className="signal-score">
          <span className="signal-number">96</span>
          <span className="signal-unit">%</span>
          <p>Confidence, made visible.</p>
        </div>
        <div className="signal-grid">
          <div>
            <span>Surfaces</span>
            <strong>iOS · Android · Web</strong>
          </div>
          <div>
            <span>Automation</span>
            <strong>Appium · Playwright</strong>
          </div>
          <div>
            <span>Approach</span>
            <strong>Explore · Verify · Improve</strong>
          </div>
        </div>
        <div className="scan-line" aria-hidden="true" />
      </div>

      <button
        className="visual-swap-button"
        type="button"
        aria-label={
          portraitInFront
            ? "Move quality signal card to the front"
            : "Move portrait to the front"
        }
        aria-pressed={portraitInFront}
        disabled={movingCard !== null}
        onClick={swapLayers}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 7h11M15 4l3 3-3 3M17 17H6M9 14l-3 3 3 3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
        <span>Swap layers</span>
      </button>
    </div>
  );
}
