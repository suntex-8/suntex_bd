"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { blogData } from "@/data/SiteSectionData";
import { SectionHeader } from "./SectionHeader";

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader data={blogData} />
        <div className="grid gap-8 md:grid-cols-3">
          {blogData.items.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl bg-[#f6f6f3]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 flex h-16 w-16 flex-col items-center justify-center bg-accent text-foreground">
                  <span className="font-display text-3xl leading-none">{post.date.day}</span>
                  <span className="text-[10px] font-bold uppercase">{post.date.month}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-foreground/50">
                  <span>{post.date.year}</span>
                  <span>•</span>
                  <span>By {post.meta.author}</span>
                  <span>•</span>
                  <span>{post.meta.comments}</span>
                </div>
                <h3 className="mb-3 text-2xl">
                  <Link href={post.readMore.href} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-foreground/60">
                  {post.excerpt}
                </p>
                <Link
                  href={post.readMore.href}
                  className="inline-flex items-center gap-1 text-xs font-bold tracking-wide text-foreground hover:text-accent"
                >
                  {post.readMore.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
