"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "motion/react";

export function CustomCursor() {
  const [enabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches
  );
  const [hovering, setHovering] = useState(false);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringX: MotionValue<number> = useSpring(dotX, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.001,
  });
  const ringY: MotionValue<number> = useSpring(dotY, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest("a, button, [role='button'], .cursor-target, input, textarea, select")
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={hovering ? { opacity: 0.5 } : { opacity: 1 }}
      />
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
