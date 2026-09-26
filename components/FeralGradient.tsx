import type { CSSProperties } from "react";
import FeralGradientEngine from "./FeralGradientEngine";

type FeralGradientProps = {
  style?: CSSProperties;
  speed?: number;
  paused?: boolean;
};

export function FeralGradient({ style, speed, paused }: FeralGradientProps) {
  return (
    <FeralGradientEngine
      className={undefined}
      speed={speed ?? undefined}
      paused={paused}
      style={style}
    />
  );
}
