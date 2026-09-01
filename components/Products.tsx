"use client";

import React from "react";
import { motion } from "motion/react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { productsData } from "@/data/SiteSectionData";

function ProductContent({ item }: { item: { category: string; note: string } }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-[#f6f6f3] p-6">
        <h4 className="mb-2 text-sm font-bold text-foreground">About {item.category}</h4>
        <p className="text-sm leading-relaxed text-foreground/60">
          {item.note === "Manufactured in-house"
            ? `Our ${item.category.toLowerCase()} garments are manufactured entirely in-house — full control over quality, cost, and lead time from fabric to finished garment.`
            : `${item.category} products are sourced through our trusted partner network — collaborative partners who extend our range without stretching our quality standards.`}
        </p>
      </div>
      <div className="rounded-2xl bg-[#f6f6f3] p-6">
        <h4 className="mb-2 text-sm font-bold text-foreground">Production Details</h4>
        <ul className="space-y-2 text-sm text-foreground/60">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item.note}
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Quality inspected at every stage
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            Flexible MOQ from 500 pieces
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Products() {
  const cards = productsData.items.map((item, index) => (
    <Card
      key={item.category}
      card={{
        category: item.note,
        title: item.category,
        src: item.image,
        content: <ProductContent item={item} />,
      }}
      index={index}
    />
  ));

  return (
    <section id="products" className="bg-[#edf2fb] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {productsData.subTitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-[32px] leading-[1.15] text-foreground sm:text-4xl lg:text-[44px]"
          >
            {productsData.headline}
          </motion.h2>
        </div>

        {/* Carousel */}
        <Carousel items={cards} />

        {/* Caption */}
        <p className="mt-8 text-center text-sm text-foreground/50">
          {productsData.caption}
        </p>
      </div>
    </section>
  );
}
