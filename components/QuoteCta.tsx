import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function QuoteCta() {
  return (
    <section className="bg-linear-to-tr from-[#d9ba09] to-[#e9a112] text-foreground" aria-labelledby="quote-cta-title">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8 lg:py-10">
        <div>
          <h2
            id="quote-cta-title"
            className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-none"
          >
            Have a collection in mind?
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/70">
            Tell us what you’re building. Our team will help shape the right production plan and quote.
          </p>
        </div>
        <Link
          href="#contact"
          className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-foreground sm:self-auto"
        >
          Get a Quote
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
