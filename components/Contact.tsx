"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { contactData } from "@/data/SiteSectionData";

export function Contact() {
  const fields = contactData.form.fields;

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: content + form */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted"
            >
              <span className="h-px w-8 bg-accent" />
              {contactData.subTitle}
            </motion.span>
            <h2 className="mb-4 text-[32px] leading-[1.08] text-foreground sm:text-4xl lg:text-[40px]">
              {contactData.headline}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mb-10 max-w-lg text-base leading-relaxed text-muted"
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
              {/* Row 1: Name + Company */}
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.slice(0, 2).map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="mb-2 block text-xs font-semibold text-muted">
                      {field.label}*
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full border-b border-line bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                ))}
              </div>
              {/* Row 2: Email + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.slice(2, 4).map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="mb-2 block text-xs font-semibold text-muted">
                      {field.label}*
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full border-b border-line bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                ))}
              </div>
              {/* Product Category (select) */}
              {fields.slice(4, 5).map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="mb-2 block text-xs font-semibold text-muted">
                    {field.label}*
                  </label>
                  <select
                    id={field.name}
                    name={field.name}
                    className="w-full border-b border-line bg-transparent py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>{field.placeholder}</option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}
              {/* Message textarea */}
              {fields.slice(5).map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="mb-2 block text-xs font-semibold text-muted">
                    {field.label}*
                  </label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={4}
                    className="w-full resize-none border-b border-line bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </div>
              ))}

              <p className="max-w-md text-xs leading-relaxed text-muted">
                SUNTEX Apparel Group — Garment Manufacturing & Sourcing, Bangladesh. Your trusted partner from concept to delivery.
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

          {/* Right image */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] w-full overflow-hidden rounded-lg ring-1 ring-line lg:h-[520px]"
            >
              <Image
                src={contactData.images.one}
                alt="Contact SUNTEX"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
