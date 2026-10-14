"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { contactData } from "@/data/SiteSectionData";
import { HEADER_DELAY } from "@/lib/motion";

export function Contact() {
  const fields = contactData.form.fields;
  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: content + form */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: HEADER_DELAY }}
              className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-muted"
            >
              <span className="h-px w-8 bg-accent" />
              {contactData.subTitle}
            </motion.span>
            <h2 className="mb-4 text-[32px] leading-[1.08] text-foreground sm:text-4xl lg:text-[40px]">
              {contactData.headline}
            </h2>
            <motion.p
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: HEADER_DELAY }}
              className="mb-10 max-w-lg text-base leading-relaxed text-muted"
            >
              {contactData.paragraph}
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: HEADER_DELAY }}
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

              <div>
                <label htmlFor="reference-file" className="mb-2 block text-xs font-semibold text-muted">
                  Tech pack or reference file <span className="font-normal">(optional)</span>
                </label>
                <input
                  id="reference-file"
                  name="reference-file"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.zip"
                  className="block w-full cursor-pointer border-b border-line py-3 text-xs text-muted file:mr-3 file:rounded-md file:border-0 file:bg-accent file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-ink"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file && file.size > MAX_FILE_SIZE) {
                      event.target.value = "";
                      window.alert("Please choose a file smaller than 10 MB.");
                    }
                  }}
                />
                <p className="mt-2 text-[11px] leading-relaxed text-muted">
                  PDF, JPG, PNG, or ZIP up to 10 MB.
                </p>
              </div>

              <p className="max-w-md text-xs leading-relaxed text-muted">
                SUNTEX Apparel Group — Garment Manufacturing & Sourcing, Bangladesh. Your trusted partner from concept to delivery.
</p>

              <Button type="submit">{contactData.form.submitLabel}</Button>
            </motion.form>
          </div>

          {/* Right image */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
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
