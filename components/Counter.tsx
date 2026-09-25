"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useReducedMotion } from "motion/react";
import { counterData } from "@/data/SiteSectionData";

const capacityData = [
  { month: "Jan", capacity: 3.1 },
  { month: "Feb", capacity: 3.5 },
  { month: "Mar", capacity: 3.85 },
  { month: "Apr", capacity: 4.15 },
  { month: "May", capacity: 4.45 },
  { month: "Jun", capacity: 4.75 },
  { month: "Jul", capacity: 5 },
];

const displayedCounters = [
  counterData.counters[0],
  counterData.counters[3],
  counterData.counters[1],
  counterData.counters[2],
];

export function Counter() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="innovation" className="w-full py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="max-w-5xl text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl lg:text-[2.75rem] lg:leading-[1.08]">
          Production built to scale with your brand.{" "}
          <span className="text-muted">
            From a 500-piece starting order to 5M+ knit pieces a month, SUNTEX
            brings manufacturing, sourcing, quality, and logistics into one
            dependable partnership.
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {displayedCounters.map((counter) => (
            <div key={counter.label}>
              <p className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
                {counter.value.toLocaleString()}
                {counter.suffix}
              </p>
              <p className="mt-2 text-sm text-muted sm:text-base">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 w-full">
        <div className="mx-auto flex max-w-[1800px] items-end justify-between gap-6 px-5 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Illustrative knit capacity
            </p>
            <p className="mt-1 text-xs text-muted">Million pieces per month</p>
          </div>
          <p className="font-display text-xl font-medium text-foreground sm:text-2xl">
            3.1M → 5M+ pieces
          </p>
        </div>

        <div
          className="mt-3 h-64 w-full sm:h-72 lg:h-80"
          role="img"
          aria-label="Illustrative monthly knit capacity increasing from 3.1 million to 5 million pieces"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={capacityData}
              margin={{ top: 12, right: 8, bottom: 0, left: 8 }}
              accessibilityLayer
            >
              <defs>
                <linearGradient id="capacityFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f7c527" stopOpacity={0.62} />
                  <stop offset="95%" stopColor="#f7c527" stopOpacity={0.03} />
                </linearGradient>
              </defs>
              <YAxis hide domain={[3, 5.2]} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                minTickGap={24}
                tick={{ fill: "#54585f", fontSize: 11 }}
                dy={10}
              />
              <CartesianGrid
                vertical={false}
                stroke="rgba(20, 22, 26, 0.1)"
                strokeDasharray="2 6"
              />
              <Tooltip
                cursor={{ stroke: "rgba(20, 22, 26, 0.2)", strokeWidth: 1 }}
                contentStyle={{
                  background: "#ffffff",
                  border: "1px solid rgba(20, 22, 26, 0.12)",
                  borderRadius: "12px",
                  boxShadow: "0 12px 30px rgba(14, 16, 19, 0.1)",
                  fontSize: "12px",
                }}
                formatter={(value) => [
                  `${Number(value).toFixed(1)}M pieces`,
                  "Illustrative capacity",
                ]}
                labelFormatter={(label) => `${label} 2026`}
              />
              <Area
                type="monotone"
                dataKey="capacity"
                name="Capacity"
                baseValue={3}
                stroke="#0e1013"
                strokeWidth={3}
                fill="url(#capacityFill)"
                fillOpacity={1}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#f7c527",
                  stroke: "#0e1013",
                  strokeWidth: 2,
                }}
                isAnimationActive={!prefersReducedMotion}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
