"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Check, Clock3, Leaf, Settings, ShieldCheck } from "lucide-react";
import { leadTimeData } from "@/data/SiteSectionData";
import { HEADER_DELAY } from "@/lib/motion";
import { Button } from "@/components/ui/button";

type OrderSize = "smaller" | "larger";
type StyleType = "repeat" | "new";

/* Swap for your own sewing / production photo. */
const SIDE_IMAGE = {
  src: "https://images.pexels.com/photos/18359551/pexels-photo-18359551.jpeg?auto=compress&cs=tinysrgb&w=1200",
  alt: "Garment being sewn in a SUNTEX production line",
};

const FEATURES = [
  { icon: ShieldCheck, label: "Reliable", text: "Consistent production schedules." },
  { icon: Settings, label: "Flexible", text: "From small runs to large orders." },
  { icon: Leaf, label: "Transparent", text: "Clear communication at every step." },
];

export function LeadTime() {
  const [orderSize, setOrderSize] = useState<OrderSize | "">("smaller");
  const [styleType, setStyleType] = useState<StyleType | "">("repeat");

  const result =
    orderSize && styleType
      ? orderSize === "smaller" && styleType === "repeat"
        ? "As fast as 1 week"
        : orderSize === "larger" && styleType === "new"
          ? "Up to 1 month"
          : "1 week – 1 month"
      : null;

  const detail = !result
    ? "Select both options to see your estimate."
    : orderSize === "smaller" && styleType === "repeat"
      ? "For smaller orders with repeat styles."
      : orderSize === "larger" && styleType === "new"
        ? "For larger orders with new development."
        : "Depending on your order size and style.";

  return (
    <section
      id="lead-time"
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative arcs (desktop only) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 hidden h-[420px] w-[420px] rounded-full border border-ink/10 lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-48 hidden h-[560px] w-[560px] rounded-full border border-ink/10 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: HEADER_DELAY, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-muted uppercase">
              <span className="h-px w-8 bg-accent" />
              {leadTimeData.subTitle}
            </p>

            <h2
              className="mt-8 text-[32px] leading-[1.05] tracking-[-0.035em] text-foreground lg:mt-14 sm:text-4xl lg:text-[44px]"
            >
              Your order.
              <br />
              <span className="text-muted">Our timeline.</span>
            </h2>

            <p className="mt-6 max-w-[28ch] text-[15px] leading-[1.7] font-light text-muted">
              Tell us a bit about your order and we&rsquo;ll share an
              indicative production timeline, simple, fast and clear.
            </p>

            <p className="mt-16 hidden items-center gap-3 text-[10px] leading-[1.9] font-medium tracking-[0.22em] text-muted uppercase lg:flex">
              <span className="h-2.5 w-2.5 rounded-full border border-muted" />
              Quality
              <br />
              on time
            </p>
          </motion.div>

          {/* Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: HEADER_DELAY + 0.1, duration: 0.6 }}
            className="flex flex-col gap-10 lg:col-span-3 lg:border-l lg:border-line lg:pl-7"
          >
            <Question<OrderSize>
              number="01"
              label="Order size"
              hint="How many pieces are you ordering?"
              value={orderSize}
              options={[
                { value: "smaller", label: "Smaller order" },
                { value: "larger", label: "Larger order" },
              ]}
              onChange={setOrderSize}
            />
            <Question<StyleType>
              number="02"
              label="Style type"
              hint="What are you producing?"
              value={styleType}
              options={[
                { value: "repeat", label: "Repeat style" },
                { value: "new", label: "New development" },
              ]}
              onChange={setStyleType}
            />
          </motion.div>

          {/* Result card + image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: HEADER_DELAY + 0.2, duration: 0.6 }}
            className="grid gap-3 sm:grid-cols-[1.12fr_0.88fr] lg:col-span-6 lg:h-[394px]"
          >
            <div className="flex min-h-[320px] flex-col rounded-3xl bg-ink p-6 text-white sm:p-8">
              

              <p className="mt-6 text-[10px] font-medium tracking-[0.24em] text-white/60 uppercase">
                Estimated lead time
              </p>

              <motion.p
                key={result ?? "empty"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                aria-live="polite"
                className="font-display mt-3 font-thin"
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 2.9rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  textWrap: "balance",
                }}
              >
                {result ?? "Made to your timeline."}
              </motion.p>

              <p className="mt-3 max-w-[26ch] text-sm leading-relaxed font-light text-white/60">
                {detail}
              </p>

              <div className="mt-auto flex items-start gap-3 border-t border-white/15 pt-5 text-[13px] leading-snug text-white/70">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-ink">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                We&rsquo;ll confirm the exact timeline based on your details.
              </div>
            </div>

            <div className="relative hidden overflow-hidden rounded-3xl bg-ink sm:block">
              <Image
                src={SIDE_IMAGE.src}
                alt={SIDE_IMAGE.alt}
                fill
                sizes="(min-width: 1024px) 18vw, 40vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-ink/25" />
              
              <a
                href="#contact"
                className="group absolute right-4 bottom-4 left-4 z-10 inline-flex items-center justify-between gap-4 rounded-xl bg-white px-4 py-3 text-sm font-medium text-ink shadow-lg shadow-black/15 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                Have a specific timeline or bigger order in mind?
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Features + CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid gap-8 border-t border-line pt-8 lg:mt-16 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16"
        >
          <ul className="grid gap-6 sm:grid-cols-3 sm:gap-0">
            {FEATURES.map(({ icon: Icon, label, text }) => (
              <li
                key={label}
                className="flex items-start gap-4 sm:border-l sm:border-line sm:px-6 sm:first:border-l-0 sm:first:pl-0"
              >
                <Icon
                  className="mt-0.5 h-6 w-6 shrink-0 text-foreground/80"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-[10px] font-medium tracking-[0.22em] text-foreground uppercase">
                    {label}
                  </span>
                  <span className="mt-1.5 block max-w-[24ch] text-[13px] leading-relaxed font-light text-muted">
                    {text}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="lg:pl-8">
            <p className="max-w-[26ch] text-[15px] leading-snug font-light text-muted">
              Have a specific timeline or bigger order in mind?
            </p>
            <a
              href="#contact"
              className="group mt-3 inline-flex items-center gap-2.5 border-b border-accent pb-1 text-sm font-medium text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Get in touch
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

type Option<T extends string> = { value: T; label: string };

function Question<T extends string>({
  number,
  label,
  hint,
  value,
  options,
  onChange,
}: {
  number: string;
  label: string;
  hint: string;
  value: T | "";
  options: Option<T>[];
  onChange: (value: T) => void;
}) {
  return (
    <fieldset className="relative min-w-0 pl-0 sm:pl-14">
      {/* Number badge + connecting line */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 hidden h-10 w-10 place-items-center rounded-full bg-ink/[0.06] text-[13px] font-medium text-foreground sm:grid"
      >
        {number}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-12 bottom-0 left-5 hidden w-px bg-line sm:block"
      />

      <legend className="p-0">
        <span className="flex items-center gap-3">
          <span className="text-xs text-muted sm:hidden">{number}</span>
          <span className="text-[11px] font-semibold tracking-[0.2em] text-foreground uppercase">
            {label}
          </span>
        </span>
      </legend>
      <p className="mt-1.5 text-[13px] font-light text-muted">{hint}</p>

      <div className="mt-4 grid gap-2.5">
        {options.map((option) => {
          const selected = value === option.value;

          return (
            <label
              key={option.value}
              className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-full border px-5 py-3 text-sm transition-colors duration-200 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 motion-reduce:transition-none ${
                selected
                  ? "border-ink bg-ink text-white"
                  : "border-foreground/15 text-foreground/75 hover:border-foreground/35"
              }`}
            >
              <input
                type="radio"
                name={label}
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              <span
                className={`grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full border ${
                  selected ? "border-accent" : "border-foreground/25"
                }`}
              >
                {selected && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
              </span>
              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}