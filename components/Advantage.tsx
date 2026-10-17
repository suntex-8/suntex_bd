"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Download } from "lucide-react";
import {
  ClipboardCheck,
  Coins,
  Factory,
  Handshake,
  Link2,
  PencilRuler,
  Rocket,
  Shirt,
  ShieldCheck,
  Ship,
  ShoppingBag,
  Truck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { textIn, textInSoft } from "@/lib/motion";

const EASE: [number, number, number, number] = [0.23, 1, 0.32, 1];

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const panelIn: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, staggerChildren: 0.07, delayChildren: 0.25 },
  },
};
const pop: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } },
};
const fadeLine: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

/* One tint per role, icon circle only. No purple anywhere. */
const TONES = {
  blue: "bg-blue-500/10 text-blue-600",
  rose: "bg-rose-500/10 text-rose-600",
  orange: "bg-orange-500/10 text-orange-600",
  emerald: "bg-emerald-500/10 text-emerald-600",
  sky: "bg-sky-500/10 text-sky-600",
  pink: "bg-pink-500/10 text-pink-600",
  amber: "bg-amber-500/10 text-amber-600",
} as const;
type Tone = keyof typeof TONES;
type Step = { label: string; icon: LucideIcon; tone: Tone };

/* Both panels share one coordinate system: percentages of the panel box.
   HUB_Y is the shared row where the SUNTEX hub sits between the panels. */
const HUB_Y = 56;

const CHAIN: (Step & { x: number; y: number })[] = [
  { label: "Buyer", icon: ShoppingBag, tone: "blue", x: 25, y: 27 },
  { label: "Sourcing agent", icon: UserRound, tone: "rose", x: 62, y: 41 },
  { label: "Factory", icon: Factory, tone: "orange", x: 24, y: 55 },
  { label: "QC inspector", icon: ClipboardCheck, tone: "emerald", x: 66, y: 69 },
  { label: "Shipping", icon: Ship, tone: "sky", x: 31, y: 83 },
];

const STEPS: (Step & { y: number })[] = [
  { label: "Design", icon: PencilRuler, tone: "pink", y: 33 },
  { label: "Sampling", icon: Shirt, tone: "amber", y: 44.5 },
  { label: "Production", icon: Factory, tone: "orange", y: 56 },
  { label: "QC", icon: ShieldCheck, tone: "emerald", y: 67.5 },
  { label: "Logistics", icon: Truck, tone: "blue", y: 79 },
];

const BENEFITS: { title: string; text: string; icon: LucideIcon; tone: Tone }[] = [
  { title: "Faster Turnaround", text: "From idea to delivery, in less time.", icon: Rocket, tone: "sky" },
  { title: "Better Quality Control", text: "We keep a closer eye at every step.", icon: ShieldCheck, tone: "emerald" },
  { title: "Lower Costs", text: "No middlemen, no extra markup.", icon: Coins, tone: "orange" },
  { title: "Full Transparency", text: "You know exactly where your product is.", icon: Handshake, tone: "rose" },
];

const curveV = (a: { x: number; y: number }, b: { x: number; y: number }) => {
  const my = (a.y + b.y) / 2;
  return `M${a.x} ${a.y} C${a.x} ${my} ${b.x} ${my} ${b.x} ${b.y}`;
};
const curveH = (a: { x: number; y: number }, b: { x: number; y: number }) => {
  const mx = (a.x + b.x) / 2;
  return `M${a.x} ${a.y} C${mx} ${a.y} ${mx} ${b.y} ${b.x} ${b.y}`;
};

/* ---------- Pieces ---------- */

function Pill({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-line bg-background py-1 pr-2.5 pl-1 whitespace-nowrap shadow-[0_2px_10px_rgba(0,0,0,0.04)] sm:gap-2 sm:py-1.5 sm:pr-3.5 sm:pl-1.5">
      <span
        className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full sm:h-6 sm:w-6 ${TONES[step.tone]}`}
      >
        <Icon className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
      </span>
      <span className="text-[11px] font-normal text-foreground sm:text-[13px]">
        {step.label}
      </span>
    </div>
  );
}

/* Positions a child by percentage of the panel. The translate lives on this
   wrapper so the inner motion element can animate scale freely. */
function At({
  x,
  y,
  left,
  z = 10,
  children,
}: {
  x?: number;
  y: number;
  left?: string;
  z?: number;
  children: ReactNode;
}) {
  const style: CSSProperties = {
    left: left ?? `${x}%`,
    top: `${y}%`,
    zIndex: z,
  };
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={style}>
      {children}
    </div>
  );
}

function PanelShell({
  label,
  children,
}: {
  label: ReactNode;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={panelIn}
      className="relative h-[430px] overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 shadow-[0_18px_50px_rgba(14,16,19,0.06)] backdrop-blur-xl sm:h-[460px] [--dx:37%] [--sx:40%] lg:[--dx:24%] lg:[--sx:27%]"
    >
      <div className="absolute inset-x-0 top-0 z-20 px-5 pt-5 sm:px-7 sm:pt-6">
        <div className="flex flex-col gap-1 text-[10px] font-semibold tracking-[0.16em] text-muted uppercase">
          {label}
        </div>
      </div>
      {children}
    </motion.div>
  );
}

/* ---------- Panels ---------- */

function ChainPanel() {
  const sa = CHAIN[1];
  return (
    <PanelShell
      label={
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-muted/60" />
            Traditional sourcing
          </span>
          <span className="pl-3.5 font-normal tracking-normal text-muted/65 normal-case">
            Many handoffs
          </span>
        </div>
      }
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {CHAIN.slice(0, -1).map((a, i) => (
          <motion.path
            key={a.label}
            d={curveV(a, CHAIN[i + 1])}
            stroke="currentColor"
            className="text-muted/35"
            strokeWidth={1.25}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            variants={fadeLine}
          />
        ))}
        {/* Runs on out of the panel, into the hub (desktop only) */}
        <motion.path
          d={curveH(sa, { x: 100, y: HUB_Y })}
          stroke="currentColor"
          className="hidden text-muted/35 lg:block"
          strokeWidth={1.25}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          variants={fadeLine}
        />
      </svg>

      {CHAIN.map((n) => (
        <At key={n.label} x={n.x} y={n.y}>
          <motion.div variants={pop}>
            <Pill step={n} />
          </motion.div>
        </At>
      ))}
    </PanelShell>
  );
}

function SuntexPanel() {
  return (
    <PanelShell
      label={
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-2">
            <Image
              src="/suntex1logo.png"
              alt=""
              width={28}
              height={28}
              className="h-6 w-6 object-contain"
            />
            SUNTEX sourcing
          </span>
          <span className="pl-8 font-normal tracking-normal text-muted/65 normal-case">
            One clear partner
          </span>
        </div>
      }
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {STEPS.map((s) => (
          <g key={`m-${s.label}`} className="lg:hidden">
            <motion.path
              d={curveH({ x: 13, y: HUB_Y }, { x: 37, y: s.y })}
              stroke="currentColor"
              className="text-muted/35"
              strokeWidth={1.25}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              variants={fadeLine}
            />
          </g>
        ))}
        {STEPS.map((s) => (
          <g key={`d-${s.label}`} className="hidden lg:block">
            <motion.path
              d={curveH({ x: 0, y: HUB_Y }, { x: 24, y: s.y })}
              stroke="currentColor"
              className="text-muted/35"
              strokeWidth={1.25}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              variants={fadeLine}
            />
          </g>
        ))}
      </svg>

      {/* Compact hub (mobile only; desktop uses the one between panels) */}
      <At x={13} y={HUB_Y} z={8}>
        <motion.div variants={pop} className="relative lg:hidden">
          <span className="absolute -inset-2.5 rounded-full border border-accent/30 bg-accent/10" />
          <span className="relative flex flex-col items-center gap-1">
            <Image
              src="/suntex1logo.png"
              alt="SUNTEX"
              width={48}
              height={48}
              className="h-8 w-8 object-contain"
            />
            <span className="text-[9px] font-medium tracking-[0.14em] text-foreground uppercase">
              SUNTEX
            </span>
          </span>
        </motion.div>
      </At>

      

      {STEPS.map((s) => (
        <div key={s.label}>
          <div
            className="absolute z-[6] -translate-x-1/2 -translate-y-1/2"
            style={{ left: "var(--dx)", top: `${s.y}%` }}
          >
            <motion.span variants={pop} className="block h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          <div
            className="absolute z-10 -translate-y-1/2"
            style={{ left: "var(--sx)", top: `${s.y}%` }}
          >
            <motion.div variants={pop}>
              <Pill step={s} />
            </motion.div>
          </div>
        </div>
      ))}

      {/* Handwritten note (desktop only) */}
      <motion.div
        variants={rise}
        className="absolute z-10 hidden lg:block"
        style={{ left: "69%", top: "37%" }}
      >
        <p className="-rotate-3 text-[12px] leading-[1.5] font-light text-amber-600 italic">
          Direct control.
          <br />
          Better quality.
          <br />
          Faster delivery.
        </p>
      </motion.div>
      <motion.svg
        variants={rise}
        viewBox="0 0 40 30"
        className="absolute z-10 hidden h-7 w-10 text-amber-500 lg:block"
        style={{ left: "66%", top: "52%" }}
        fill="none"
        aria-hidden="true"
      >
        <path d="M36 2 C33 18 20 25 5 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M11 12 L5 17 L12 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </PanelShell>
  );
}

/* Desktop hub, sitting in the gap between the two panels */
function Hub() {
  const nodeRadius = 52;
  const lineW = `calc(50% - ${nodeRadius}px)`;
  return (
    <div className="relative hidden h-[460px] lg:block">
      <span
        className="absolute left-0 h-px bg-muted/35"
        style={{ top: `${HUB_Y}%`, width: lineW }}
      />
      <span
        className="absolute right-0 h-px bg-accent"
        style={{ top: `${HUB_Y}%`, width: lineW }}
      />
      {[-nodeRadius, nodeRadius].map((dx) => (
        <span
          key={dx}
          className="absolute z-[6] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
          style={{ left: `calc(50% + ${dx}px)`, top: `${HUB_Y}%` }}
        />
      ))}

      <At x={50} y={HUB_Y}>
        <motion.div variants={pop} className="relative">
          <span className="absolute -inset-5 rounded-[2rem] border border-accent/15 bg-accent/[0.04]" />
          <span className="absolute -inset-2 rounded-[1.75rem] border border-accent/25 bg-accent/[0.08]" />
          <span className="relative flex h-[104px] w-[104px] flex-col items-center justify-center gap-1.5 rounded-[1.5rem] border border-white/80 bg-white/70 shadow-[0_14px_30px_rgba(14,16,19,0.1)] backdrop-blur-md">
            <Image
              src="/suntex1logo.png"
              alt="SUNTEX"
              width={72}
              height={72}
              className="h-12 w-12 object-contain"
            />
            <span className="text-[11px] font-semibold tracking-[0.16em] text-foreground uppercase">
              SUNTEX
            </span>
            <span className="text-[7px] font-medium tracking-[0.2em] text-muted uppercase">
              Direct sourcing
            </span>
          </span>
        </motion.div>
      </At>
    </div>
  );
}

/* ---------- Section ---------- */

export function Advantage() {
  const reduced = useReducedMotion();
  const initial = reduced ? false : "hidden";
  const viewport = { once: true, amount: 0.15 };

  return (
    <section id="advantage" className="relative isolate overflow-hidden bg-background py-20 lg:py-28">
      <Image
        src="/3d_logo.png"
        alt=""
        width={520}
        height={520}
        aria-hidden="true"
        className="pointer-events-none absolute top-68 -right-28 z-0 hidden w-[360px] opacity-[0.08] mix-blend-multiply sm:block lg:-top-36 lg:-right-24 lg:w-[500px]"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          variants={group}
          initial={initial}
          whileInView="show"
          viewport={viewport}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={textIn}
            className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted"
          >
            <span className="h-px w-8 bg-accent" />
            Why SUNTEX
          </motion.span>

          <motion.h2
            variants={textIn}
            className="max-w-3xl text-[32px] leading-[1.02] font-normal tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[44px]"
          >
            Fewer hands between the <span className="text-muted/55">factory</span>{" "}
            & <span className="text-muted/55">you.</span>
          </motion.h2>

          <motion.p
            variants={textInSoft}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted"
          >
            We cut out the middlemen, so your products move faster, cost less
            and stay under your control.
          </motion.p>
        </motion.div>

        {/* Comparison */}
        <motion.div
          variants={group}
          initial={initial}
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid grid-cols-1 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_200px_minmax(0,1fr)]"
        >
          <ChainPanel />

          <Hub />
          <div className="flex h-12 flex-col items-center lg:hidden" aria-hidden="true">
            <span className="w-px flex-1 bg-muted/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="w-px flex-1 bg-accent" />
          </div>

          <SuntexPanel />
        </motion.div>

        {/* Closing line + benefits */}
        {/* <motion.div
          variants={group}
          initial={initial}
          whileInView="show"
          viewport={viewport}
          className="mt-12 lg:mt-18"
        >
          <motion.a
            variants={rise}
            href="/capability-profile.pdf"
            download
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Download our capability profile (PDF)
            <Download className="h-4 w-4" strokeWidth={1.7} />
          </motion.a> */}
          {/* <motion.div variants={rise} className="flex items-center gap-6">
            <span className="hidden h-px flex-1 bg-line sm:block" />
            <p
              className="font-display mx-auto text-center font-light text-foreground sm:mx-0"
              style={{
                fontSize: "clamp(1.4rem, 2vw, 2.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
            >
              Fewer handoffs, <span className="text-muted/55">fewer risks.</span>
            </p>
            <span className="hidden h-px flex-1 bg-line sm:block" />
          </motion.div>

          <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 lg:mt-12 lg:grid-cols-4 lg:gap-0">
            {BENEFITS.map(({ title, text, icon: Icon, tone }) => (
              <motion.li
                key={title}
                variants={rise}
                className="flex items-start gap-3 lg:border-l lg:border-line lg:px-8 lg:first:border-l-0 lg:first:pl-0"
              >
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full sm:h-10 sm:w-10 ${TONES[tone]}`}
                >
                  <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] leading-snug font-medium text-foreground sm:text-[18px]">
                    {title}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-relaxed font-light text-muted">
                    {text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}