"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { CustomCursor } from "@/components/CustomCursor";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.8,
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <CustomCursor />
      {children}
    </ReactLenis>
  );
}
