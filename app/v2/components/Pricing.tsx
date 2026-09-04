"use client";

import { Check } from "lucide-react";
import { pricingData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Pricing() {
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#f2f0e7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="text-center">
            <SectionLabel>{pricingData.subTitle}</SectionLabel>
            <h2 className="mt-8 mx-auto max-w-[700px] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#1b2130]">
              Flexible manufacturing
              <br />
              <span className="text-[#858a91]">for every business size.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingData.items.map((plan, index) => (
            <Reveal key={plan.title} delay={index * 0.08}>
              <div
                className={`relative border p-8 ${
                  plan.featured
                    ? "border-[#1b2130] bg-[#1b2130] text-[#f2f0e7]"
                    : "border-[#1b2130]/15 bg-white text-[#1b2130]"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-6 bg-[#fff000] px-3 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-[#1b2130]">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold tracking-[-.03em]">
                  {plan.title}
                </h3>
                <p className={`mt-1 text-sm ${plan.featured ? "text-[#b7b9bd]" : "text-[#666b76]"}`}>
                  {plan.tagline}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-mono-ui text-4xl font-semibold tracking-[-.06em]">
                    {plan.price}
                  </span>
                  <span className={`text-xs ${plan.featured ? "text-[#8f949d]" : "text-[#858a91]"}`}>
                    {plan.period}
                  </span>
                </div>
                <button
                  onClick={() => goTo("contact")}
                  className={`mt-6 w-full py-3 text-xs font-bold uppercase tracking-[.14em] transition-colors ${
                    plan.featured
                      ? "bg-[#fff000] text-[#1b2130] hover:bg-[#f2f0e7]"
                      : "bg-[#1b2130] text-[#f2f0e7] hover:bg-[#fff000] hover:text-[#1b2130]"
                  }`}
                >
                  {plan.cta}
                </button>
                <div className="mt-7 border-t border-current/10 pt-6">
                  <div className={`mb-4 text-[10px] uppercase tracking-[.12em] ${plan.featured ? "text-[#8f949d]" : "text-[#858a91]"}`}>
                    What&apos;s included
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check size={15} className={`mt-0.5 shrink-0 ${plan.featured ? "text-[#fff000]" : "text-[#1b2130]"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
