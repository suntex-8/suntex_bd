"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { faqItems } from "@/data/ServicesPageData";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(2);

  return (
    <section className="bg-[#fafaff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              Frequently Ask Questions
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-[32px] leading-[1.15] text-foreground sm:text-4xl lg:text-[40px]"
            >
              Assisting you in comprehending our Suntex offerings
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10 max-w-md text-sm leading-relaxed text-foreground/60"
            >
              Suntex & Garment Factory website, the FAQs section should address MOQ, lead times, quality control, export customization, etc.
            </motion.p>

            {/* People looking at fabric image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                    <Image
                      src={`https://images.pexels.com/photos/${220453 + i * 100}/pexels-photo-${220453 + i * 100}.jpeg?auto=compress&cs=tinysrgb&w=100`}
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-foreground/60">
                People are choosing us for better work.
              </p>
            </motion.div>

            {/* Contact boxes */}
            <div className="flex flex-wrap gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3 rounded-xl bg-accent/10 px-5 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-foreground">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-foreground/50">Call us now</p>
                  <a href="tel:+12337885896" className="text-sm font-bold text-foreground hover:text-accent">+1 233 788 5896</a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 rounded-xl bg-accent/10 px-5 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-foreground/50">Email now</p>
                  <a href="mailto:support@example.com" className="text-sm font-bold text-foreground hover:text-accent">support@example.com</a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: FAQ accordion */}
          <div className="space-y-3">
            {faqItems.map((item, i) => {
              const isOpen = i === openIndex;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen ? "border-accent/30 bg-accent/5" : "border-foreground/10 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-bold text-foreground lg:text-base">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-accent text-foreground" : "bg-foreground/5 text-foreground/40"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-foreground/60">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
