export type StatVisual =
  | { kind: "trend"; values: number[] }
  | { kind: "uptime"; days: number[] }
  | { kind: "distribution"; bins: number[]; max: number; marker: number }
  | { kind: "map"; points: [number, number][] }
  | { kind: "image"; src: string; alt: string };

export interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  notation?: "compact";
  decimals?: number;
  detail?: string;
  context?: string;
  visual?: StatVisual;
}

export const stats: Stat[] = [
  {
    value: 200,
    suffix: "+",
    label: "Partner factories",
    detail: "Across Bangladesh",
    context: "A trusted production network",
    visual: {
      kind: "image",
      src: "/dotted_bd_white.png",
      alt: "Dotted map of Bangladesh",
    },
  },
  {
    value: 5,
    suffix: "M+",
    label: "Knit capacity",
    detail: "Pieces per month",
    context: "In-house production",
    visual: { kind: "trend", values: [3.2, 3.5, 3.8, 4.1, 4.4, 4.6, 4.8, 5] },
  },
  {
    value: 1,
    suffix: "M+",
    label: "Woven capacity",
    detail: "Pieces per month",
    context: "Reliable partner supply",
    visual: { kind: "distribution", bins: [2, 3, 4, 5, 7, 8, 9, 10], max: 10, marker: 6 },
  },
  {
    value: 500,
    suffix: "+",
    label: "Minimum order",
    detail: "Pieces per style",
    context: "Built for growing brands",
    visual: { kind: "uptime", days: [99, 100, 100, 99, 100, 100, 100, 100, 99, 100, 100, 100] },
  },
];
