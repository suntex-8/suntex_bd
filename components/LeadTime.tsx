"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { leadTimeData } from "@/data/SiteSectionData";
import { HEADER_DELAY } from "@/lib/motion";

export function LeadTime() {
  const [orderSize, setOrderSize] = useState<"smaller" | "larger" | "">("");
  const [styleType, setStyleType] = useState<"repeat" | "new" | "">("");

  const result =
    orderSize && styleType
      ? orderSize === "smaller" && styleType === "repeat"
        ? "As fast as 1 week"
        : orderSize === "larger" && styleType === "new"
          ? "Up to 1 month"
          : "Somewhere between 1 week and 1 month"
      : null;

  return (
    <section id="lead-time" className="bg-[#fafaff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: HEADER_DELAY }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {leadTimeData.subTitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: HEADER_DELAY }}
            className="text-[32px] leading-[1.15] text-foreground sm:text-4xl lg:text-[44px]"
          >
            {leadTimeData.headline}
          </motion.h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: HEADER_DELAY }}
            className="grid gap-6 sm:grid-cols-2"
          >
            <Question
              label="Order size"
              value={orderSize}
              options={[
                ["smaller", "Smaller order"],
                ["larger", "Larger order"],
              ]}
              onChange={setOrderSize}
            />
            <Question
              label="Style"
              value={styleType}
              options={[
                ["repeat", "Repeat style with established specs"],
                ["new", "New development"],
              ]}
              onChange={setStyleType}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: HEADER_DELAY + 0.12 }}
            className="flex min-h-[190px] flex-col justify-between rounded-2xl bg-foreground p-7 text-background sm:p-8"
          >
            <div className="flex items-center gap-3 text-sm text-background/60">
              <Clock3 className="h-4 w-4 text-accent" />
              Indicative lead time
            </div>
            <div>
              <p className="font-display text-2xl leading-tight sm:text-3xl">
                {result ?? "Answer two questions to see a guide"}
              </p>
              {result && (
                <p className="mt-3 flex items-center gap-2 text-xs text-background/60">
                  <Check className="h-3.5 w-3.5 text-accent" />
                  Send us the details and we&apos;ll confirm.
                </p>
              )}
            </div>
          </motion.div>
        </div>
        <p className="mx-auto mt-8 max-w-5xl text-center text-xs text-muted">
          Indicative only. Final timing is confirmed on inquiry.
        </p>
      </div>
    </section>
  );
}

function Question({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: [string, string][];
  onChange: (value: never) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-semibold text-foreground">{label}</legend>
      <div className="space-y-2">
        {options.map(([option, text]) => (
          <label
            key={option}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition-colors ${
              value === option
                ? "border-accent bg-accent/10 text-foreground"
                : "border-foreground/10 bg-white text-foreground/65 hover:border-foreground/25"
            }`}
          >
            <input
              type="radio"
              name={label}
              value={option}
              checked={value === option}
              onChange={() => onChange(option as never)}
              className="sr-only"
            />
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-foreground/20">
              {value === option && <span className="h-2.5 w-2.5 rounded-full bg-accent" />}
            </span>
            {text}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
