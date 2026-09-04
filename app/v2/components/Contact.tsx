"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { contactData } from "@/data/SiteSectionData";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#d5d4cd] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-28">
        <Reveal>
          <SectionLabel>{contactData.subTitle}</SectionLabel>
          <h2 className="mt-10 max-w-[600px] text-[clamp(3.1rem,6vw,6rem)] font-semibold leading-[.87] tracking-[-.075em]">
            Let&apos;s connect
            <br />
            <span className="text-[#858a91]">ideas to reality.</span>
          </h2>
          <p className="mt-8 max-w-[390px] text-base leading-7 text-[#555b67]">
            {contactData.paragraph}
          </p>
          <div className="mt-12 space-y-5 border-t border-[#1b2130]/20 pt-6">
            <a
              href="mailto:info@suntexbd.com"
              className="flex items-center gap-4 text-sm text-[#1b2130] transition-colors hover:text-[#6c7200]"
            >
              <Mail size={17} />
              info@suntexbd.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-4 text-sm text-[#1b2130] transition-colors hover:text-[#6c7200]"
            >
              <Phone size={17} />
              +123-456-7890
            </a>
            <div className="flex items-start gap-4 text-sm leading-6 text-[#1b2130]">
              <MapPin size={17} className="mt-1 shrink-0" />
              House-690, Road-09, Mirpur DOHS,
              <br />
              Dhaka-1216, Bangladesh
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          {submitted ? (
            <div className="flex min-h-[500px] flex-col justify-center border-t border-[#1b2130]/20">
              <div className="flex h-14 w-14 items-center justify-center bg-[#fff000]">
                <Check size={25} />
              </div>
              <h3 className="mt-8 text-4xl font-semibold tracking-[-.06em]">
                Message received.
              </h3>
              <p className="mt-4 max-w-[390px] leading-7 text-[#555b67]">
                Thank you for reaching out. A SUNTEX specialist will be in
                touch shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 w-fit border-b border-[#1b2130] pb-2 text-xs font-bold uppercase tracking-[.15em]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border-t border-[#1b2130]/20 pt-8"
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="text-xs uppercase tracking-[.12em]">
                  Name
                  <input
                    required
                    name="name"
                    placeholder="Your name"
                    className="mt-3 w-full border-b border-[#1b2130]/30 bg-transparent px-0 py-3 text-base normal-case tracking-normal outline-none placeholder:text-[#858a91] focus:border-[#1b2130]"
                  />
                </label>
                <label className="text-xs uppercase tracking-[.12em]">
                  Company
                  <input
                    required
                    name="company"
                    placeholder="Company name"
                    className="mt-3 w-full border-b border-[#1b2130]/30 bg-transparent px-0 py-3 text-base normal-case tracking-normal outline-none placeholder:text-[#858a91] focus:border-[#1b2130]"
                  />
                </label>
                <label className="text-xs uppercase tracking-[.12em]">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="mt-3 w-full border-b border-[#1b2130]/30 bg-transparent px-0 py-3 text-base normal-case tracking-normal outline-none placeholder:text-[#858a91] focus:border-[#1b2130]"
                  />
                </label>
                <label className="text-xs uppercase tracking-[.12em]">
                  Product category
                  <select
                    required
                    name="category"
                    className="mt-3 w-full border-b border-[#1b2130]/30 bg-transparent px-0 py-3 text-base normal-case tracking-normal outline-none focus:border-[#1b2130]"
                  >
                    <option value="">Select category</option>
                    {contactData.form.fields
                      .find((f) => f.name === "category")
                      ?.options?.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                  </select>
                </label>
              </div>
              <label className="mt-8 block text-xs uppercase tracking-[.12em]">
                Tell us about your project
                <textarea
                  required
                  name="message"
                  rows={3}
                  placeholder="What are you looking to make?"
                  className="mt-3 w-full resize-none border-b border-[#1b2130]/30 bg-transparent px-0 py-3 text-base normal-case tracking-normal outline-none placeholder:text-[#858a91] focus:border-[#1b2130]"
                />
              </label>
              <button
                type="submit"
                className="group mt-9 inline-flex items-center gap-4 bg-[#1b2130] px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-[#f2f0e7] transition-colors hover:bg-[#fff000] hover:text-[#1b2130]"
              >
                Send inquiry{" "}
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}