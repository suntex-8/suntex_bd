"use client";

import { useSyncExternalStore, type CSSProperties } from "react";
import FeralGradientEngine from "./FeralGradientEngine";

type FeralGradientProps = {
  style?: CSSProperties;
  speed?: number;
  paused?: boolean;
  animate?: boolean;
};

const IDLE_MS = 200;

const scrollState = (() => {
  let paused = false;
  let timer: ReturnType<typeof setTimeout> | null = null;
  const listeners = new Set<() => void>();

  const emit = () => listeners.forEach((listener) => listener());

  const markBusy = () => {
    if (!paused) {
      paused = true;
      emit();
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      paused = false;
      timer = null;
      emit();
    }, IDLE_MS);
  };

  return {
    subscribe: (onChange: () => void) => {
      listeners.add(onChange);
      if (listeners.size === 1) {
        addEventListener("scroll", markBusy, { passive: true });
        addEventListener("wheel", markBusy, { passive: true });
        addEventListener("touchmove", markBusy, { passive: true });
        addEventListener("touchstart", markBusy, { passive: true });
      }
      return () => {
        listeners.delete(onChange);
        if (listeners.size === 0) {
          removeEventListener("scroll", markBusy);
          removeEventListener("wheel", markBusy);
          removeEventListener("touchmove", markBusy);
          removeEventListener("touchstart", markBusy);
          if (timer) clearTimeout(timer);
        }
      };
    },
    paused: () => paused,
  };
})();

function useScrolling(): boolean {
  return useSyncExternalStore(scrollState.subscribe, scrollState.paused, () => false);
}

export function FeralGradient({
  style,
  speed,
  paused,
  animate = false,
}: FeralGradientProps) {
  const scrolling = useScrolling();

  return (
    <FeralGradientEngine
      className={undefined}
      speed={speed ?? undefined}
      paused={paused || !animate || scrolling}
      style={style}
    />
  );
}
