"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { pricingData } from "@/data/SiteSectionData";
import { SectionHeader } from "./SectionHeader";

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#f6f6f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader data={pricingData} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricingData.items.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-xl border border-foreground/10 bg-white p-6"
            >
              {/* Title + tagline */}
              <h3 className="text-lg font-bold text-foreground">{plan.title}</h3>
              <p className="mt-1 text-xs text-foreground/50">{plan.tagline}</p>

              {/* Image */}
              <div className="relative mt-4 h-28 overflow-hidden rounded-lg">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Price */}
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-foreground/50">{plan.period}</span>
              </div>

              {/* CTA button */}
              <button className="btn-brand mt-5 w-full rounded-full px-6 py-3 text-sm font-bold">
                <span className="relative z-10">{plan.cta}</span>
              </button>

              {/* "Best for..." */}
              <p className="mt-5 text-sm font-bold text-foreground">
                Best for {plan.title === "Basic Production" ? "Small Bulk Orders" : plan.title === "Standard Manufacturing" ? "Growing Brands" : "Large-Scale & Export Clients"}
              </p>

              {/* Features */}
              <ul className="mt-4 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-foreground/20">
                      <Check className="h-2.5 w-2.5 text-foreground/60" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
