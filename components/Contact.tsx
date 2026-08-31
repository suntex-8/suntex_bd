"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { contactData } from "@/data/SiteSectionData";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: content + form */}
          <div>
            {/* Pill label + headline */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              {contactData.subTitle}
            </motion.span>
            <h2 className="mb-4 text-[32px] leading-[1.15] text-foreground sm:text-4xl lg:text-[40px]">
              {contactData.headline}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mb-10 max-w-lg text-base leading-relaxed text-foreground/60"
            >
              {contactData.paragraph}
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {contactData.form.fields.slice(0, 2).map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 block text-xs font-bold text-foreground/50"
                    >
                      {field.label}*
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full border-b border-foreground/15 bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                ))}
              </div>
              {contactData.form.fields.slice(2).map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-xs font-bold text-foreground/50"
                  >
                    {field.label}*
                  </label>
                  {field.textarea ? (
                    <div className="relative">
                      <textarea
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        rows={4}
                        className="w-full resize-none border-b border-foreground/15 bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent"
                      />
                      <span className="absolute right-0 top-3 text-foreground/20">
                        {/* decorative icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      </span>
                    </div>
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full border-b border-foreground/15 bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent"
                    />
                  )}
                </div>
              ))}

              <p className="max-w-md text-xs leading-relaxed text-foreground/40">
                Texora & Garment Design Studio Based In Delhi That Combines Modernity With The Art Of Textiles. We Stand Out In The Marketplace. Your Partner.
              </p>

              <button
                type="submit"
                className="btn-brand inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  {contactData.form.submitLabel}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </motion.form>
          </div>

          {/* Right: large image with floating card */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl lg:h-[520px]"
            >
              <Image
                src={contactData.images.one}
                alt="Contact Suntex"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -right-4 top-10 z-10 rounded-xl bg-white p-4 shadow-2xl lg:-right-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Support"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-foreground/50">Got Questions?</p>
                  <p className="text-xs font-bold text-foreground">Let&apos;s Talk</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
