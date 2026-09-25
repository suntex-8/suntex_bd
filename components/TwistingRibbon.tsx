"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface RibbonColors {
  face?: string;
  foldA?: string;
  foldB?: string;
  foldC?: string;
}

export interface TwistingRibbonProps
  extends HTMLAttributes<HTMLDivElement> {
  segments?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  twistCycles?: number;
  lightColors?: RibbonColors;
  darkColors?: RibbonColors;
}

function hexToRgb(hex: string): [number, number, number] {
  const normalized = hex.replace(/^#/, "");
  const full =
    normalized.length === 3
      ? normalized
          .split("")
          .map((character) => character + character)
          .join("")
      : normalized;
  const value = parseInt(full, 16);

  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

export function TwistingRibbon({
  className,
  segments = 400,
  waveSpeed = 0.018,
  waveAmplitude = 1,
  twistCycles = 6,
  lightColors,
  darkColors,
  ...props
}: TwistingRibbonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const activeCanvas = canvas;
    const activeContainer = container;
    const ctx = context;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let animationFrame = 0;
    let running = false;
    let inView = true;
    let width = container.clientWidth;
    let height = container.clientHeight;
    let time = 0;

    const ribbonHalfWidth = 14;
    const ribbonXScale = 1.4;
    const ribbonXOffset = 0.2;

    const waveOneFrequency = 3.5;
    const waveOneSpeed = 0.7;
    const waveOneAmplitude = 110 * waveAmplitude;
    const waveTwoFrequency = 7;
    const waveTwoSpeed = 1.1;
    const waveTwoAmplitude = 30 * waveAmplitude;
    const twistSpeed = 0.5;

    const lightFace = lightColors?.face
      ? hexToRgb(lightColors.face)
      : [255, 60, 10];
    const lightFoldA = lightColors?.foldA
      ? hexToRgb(lightColors.foldA)
      : [180, 255, 0];
    const lightFoldB = lightColors?.foldB
      ? hexToRgb(lightColors.foldB)
      : [60, 80, 255];
    const lightFoldC = lightColors?.foldC
      ? hexToRgb(lightColors.foldC)
      : [0, 220, 255];
    const lightShadow = [80, 60, 40];
    const lightShadowAlpha = 14 / 255;
    const lightEdge = [0, 0, 0];
    const lightEdgeAlpha = 22 / 255;

    const darkFace = darkColors?.face
      ? hexToRgb(darkColors.face)
      : [255, 60, 10];
    const darkFoldA = darkColors?.foldA
      ? hexToRgb(darkColors.foldA)
      : [180, 255, 0];
    const darkFoldB = darkColors?.foldB
      ? hexToRgb(darkColors.foldB)
      : [60, 80, 255];
    const darkFoldC = darkColors?.foldC
      ? hexToRgb(darkColors.foldC)
      : [0, 220, 255];
    const darkShadow = [0, 0, 0];
    const darkShadowAlpha = 120 / 255;
    const darkEdge = [255, 255, 255];
    const darkEdgeAlpha = 30 / 255;

    const colorCycleFrequency = 2;
    const colorCycleSpeed = 0.3;
    const faceBlendGamma = 1.2;
    const shadowOffsetX = 4;
    const shadowOffsetY = 7;
    const edgeMinTwist = 0.08;
    const edgeWeight = 0.5;

    function lerpColor(a: number[], b: number[], fraction: number) {
      return [
        Math.round(a[0] + (b[0] - a[0]) * fraction),
        Math.round(a[1] + (b[1] - a[1]) * fraction),
        Math.round(a[2] + (b[2] - a[2]) * fraction),
      ];
    }

    function buildSpine(currentTime: number) {
      const points: { x: number; y: number }[] = [];

      for (let index = 0; index <= segments; index++) {
        const progress = index / segments;
        points.push({
          x: progress * width * ribbonXScale - width * ribbonXOffset,
          y:
            height / 2 +
            Math.sin(
              progress * Math.PI * waveOneFrequency +
                currentTime * waveOneSpeed,
            ) *
              waveOneAmplitude +
            Math.sin(
              progress * Math.PI * waveTwoFrequency +
                currentTime * waveTwoSpeed,
            ) *
              waveTwoAmplitude,
        });
      }

      return points;
    }

    function buildNormals(points: { x: number; y: number }[]) {
      const lastIndex = points.length - 1;

      return points.map((_, index) => {
        const previous = index === 0 ? points[0] : points[index - 1];
        const next =
          index === lastIndex ? points[lastIndex] : points[index + 1];
        const deltaX = next.x - previous.x;
        const deltaY = next.y - previous.y;
        const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY) || 1;

        return { normalX: -deltaY / length, normalY: deltaX / length };
      });
    }

    function buildEdges(
      points: { x: number; y: number }[],
      normals: { normalX: number; normalY: number }[],
      currentTime: number,
    ) {
      const tops: { x: number; y: number }[] = [];
      const bottoms: { x: number; y: number }[] = [];
      const twists: number[] = [];

      for (let index = 0; index <= segments; index++) {
        const twist = Math.cos(
          (index / segments) * Math.PI * twistCycles +
            currentTime * twistSpeed,
        );
        const widthAtTwist = ribbonHalfWidth * Math.abs(twist);
        const sign = twist >= 0 ? 1 : -1;

        twists.push(twist);
        tops.push({
          x:
            points[index].x +
            normals[index].normalX * widthAtTwist * sign,
          y:
            points[index].y +
            normals[index].normalY * widthAtTwist * sign,
        });
        bottoms.push({
          x:
            points[index].x -
            normals[index].normalX * widthAtTwist * sign,
          y:
            points[index].y -
            normals[index].normalY * widthAtTwist * sign,
        });
      }

      return { tops, bottoms, twists };
    }

    function getFoldColor(fraction: number, currentTime: number, isDark: boolean) {
      const cycle =
        (((fraction * colorCycleFrequency +
          currentTime * colorCycleSpeed) %
          1) +
          1) %
        1;
      const colorA = isDark ? darkFoldA : lightFoldA;
      const colorB = isDark ? darkFoldB : lightFoldB;
      const colorC = isDark ? darkFoldC : lightFoldC;

      if (cycle < 1 / 3) return lerpColor(colorA, colorB, cycle * 3);
      if (cycle < 2 / 3) {
        return lerpColor(colorB, colorC, (cycle - 1 / 3) * 3);
      }

      return lerpColor(colorC, colorA, (cycle - 2 / 3) * 3);
    }

    function getRibbonColor(
      fraction: number,
      twist: number,
      currentTime: number,
      isDark: boolean,
    ) {
      const foldColor = getFoldColor(fraction, currentTime, isDark);
      const faceColor = isDark ? darkFace : lightFace;
      const facedness = Math.pow(Math.abs(twist), faceBlendGamma);

      return lerpColor(foldColor, faceColor, facedness);
    }

    function drawQuad(
      firstX: number,
      firstY: number,
      secondX: number,
      secondY: number,
      thirdX: number,
      thirdY: number,
      fourthX: number,
      fourthY: number,
    ) {
      ctx.beginPath();
      ctx.moveTo(firstX, firstY);
      ctx.lineTo(secondX, secondY);
      ctx.lineTo(thirdX, thirdY);
      ctx.lineTo(fourthX, fourthY);
      ctx.closePath();
      ctx.fill();
    }

    function drawShadow(
      tops: { x: number; y: number }[],
      bottoms: { x: number; y: number }[],
      isDark: boolean,
    ) {
      const color = isDark ? darkShadow : lightShadow;
      const alpha = isDark ? darkShadowAlpha : lightShadowAlpha;

      ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;

      for (let index = 0; index < segments; index++) {
        drawQuad(
          tops[index].x + shadowOffsetX,
          tops[index].y + shadowOffsetY,
          tops[index + 1].x + shadowOffsetX,
          tops[index + 1].y + shadowOffsetY,
          bottoms[index + 1].x + shadowOffsetX,
          bottoms[index + 1].y + shadowOffsetY,
          bottoms[index].x + shadowOffsetX,
          bottoms[index].y + shadowOffsetY,
        );
      }
    }

    function drawRibbon(
      tops: { x: number; y: number }[],
      bottoms: { x: number; y: number }[],
      twists: number[],
      currentTime: number,
      isDark: boolean,
    ) {
      const edgeColor = isDark ? darkEdge : lightEdge;
      const edgeAlpha = isDark ? darkEdgeAlpha : lightEdgeAlpha;

      for (let index = 0; index < segments; index++) {
        const [red, green, blue] = getRibbonColor(
          index / segments,
          twists[index],
          currentTime,
          isDark,
        );

        ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        drawQuad(
          tops[index].x,
          tops[index].y,
          tops[index + 1].x,
          tops[index + 1].y,
          bottoms[index + 1].x,
          bottoms[index + 1].y,
          bottoms[index].x,
          bottoms[index].y,
        );

        if (Math.abs(twists[index]) > edgeMinTwist) {
          ctx.strokeStyle = `rgba(${edgeColor[0]}, ${edgeColor[1]}, ${edgeColor[2]}, ${edgeAlpha})`;
          ctx.lineWidth = edgeWeight;
          ctx.beginPath();
          ctx.moveTo(tops[index].x, tops[index].y);
          ctx.lineTo(tops[index + 1].x, tops[index + 1].y);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(bottoms[index].x, bottoms[index].y);
          ctx.lineTo(bottoms[index + 1].x, bottoms[index + 1].y);
          ctx.stroke();
        }
      }
    }

    function drawFrame() {
      const isDark = document.documentElement.classList.contains("dark");
      const points = buildSpine(time);
      const normals = buildNormals(points);
      const { tops, bottoms, twists } = buildEdges(
        points,
        normals,
        time,
      );

      ctx.clearRect(0, 0, width, height);
      drawShadow(tops, bottoms, isDark);
      drawRibbon(tops, bottoms, twists, time, isDark);
    }

    function frame() {
      time += waveSpeed;
      drawFrame();

      if (inView && !document.hidden && !motionQuery.matches) {
        animationFrame = requestAnimationFrame(frame);
      } else {
        running = false;
      }
    }

    function start() {
      if (
        running ||
        !inView ||
        document.hidden ||
        motionQuery.matches
      ) {
        return;
      }

      running = true;
      animationFrame = requestAnimationFrame(frame);
    }

    function stop() {
      cancelAnimationFrame(animationFrame);
      running = false;
    }

    function resize() {
      width = activeContainer.clientWidth;
      height = activeContainer.clientHeight;
      const ratio = window.devicePixelRatio || 1;

      activeCanvas.width = Math.max(1, Math.floor(width * ratio));
      activeCanvas.height = Math.max(1, Math.floor(height * ratio));
      activeCanvas.style.width = `${width}px`;
      activeCanvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      drawFrame();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;

        if (inView) {
          drawFrame();
          start();
        } else {
          stop();
        }
      },
      { rootMargin: "120px" },
    );

    const handleVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const handleMotionChange = () => {
      stop();
      drawFrame();
      start();
    };

    resize();
    observer.observe(activeContainer);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    motionQuery.addEventListener("change", handleMotionChange);
    start();

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [
    segments,
    waveSpeed,
    waveAmplitude,
    twistCycles,
    lightColors,
    darkColors,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[12px]",
        className,
      )}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
      />
    </div>
  );
}

export default TwistingRibbon;
