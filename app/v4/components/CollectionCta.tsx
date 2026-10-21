import { Button } from "./ui/button";

export function CollectionCta() {
  return (
    <section
      className="bg-surface px-5 py-10 sm:py-12 lg:px-8 lg:py-14"
      aria-labelledby="collection-cta-title"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-y border-line py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:py-8">
        <h2
          id="collection-cta-title"
          className="max-w-xl text-3xl leading-[1.05] text-foreground sm:text-4xl lg:text-[3.25rem]"
        >
          Let&apos;s talk about your next collection.
        </h2>

        <Button href="#contact" className="shrink-0 self-start sm:self-auto">
          Get a Quote
        </Button>
      </div>
    </section>
  );
}
