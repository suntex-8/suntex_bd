import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const metrics = [
  { value: '200', suffix: '+', label: 'Partner factories<br />worldwide' },
  { value: '500', suffix: 'k', label: 'Units delivered<br />every year' },
  { value: '24', suffix: 'h', label: 'Average response<br />time' },
  { value: '16', suffix: '', label: 'Markets served<br />across the globe' },
];

export default function Intro() {
  return (
    <section className="mx-auto w-full max-w-full px-5 sm:px-8   lg:px-0 " id="approach">
      <div className="overflow-hidden rounded-3xl border border-line bg-white py-8">
        {/* Top block: label column | headline column */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]">
          {/* Left column */}
          <div className="border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="text-[14px] font-bold uppercase leading-[1.5] tracking-[0.12em] text-accent">
              A better way to make
            </div>
            <figure className="mt-26">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                <Image
                  src="/suntex-bg-1.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 236px, (min-width: 640px) 60vw, 100vw"
                  className="object-cover object-bottom "
                />
                <div className="absolute inset-0 bg-linear-to-t from-transparent from-40% via-background/30 to-background" />
              </div>
            </figure>
          </div>

          {/* Right column */}
          <div className="p-6 sm:p-8 lg:p-10">
            <h4
              style={{
                fontSize: 'clamp(1.75rem, 2.5vw, 2.75rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
              }}
              className="max-w-full font-medium text-muted"
            >
              At Suntex <span className="inline-flex items-center gap-1.5 align-middle">
                <Image
                  src="/suntex1logo.png"
                  alt="SUNTEX"
                  width={100}
                  height={100}
                  className="h-10 rounded-md w-auto object-contain relative -top-0.5"
                />
              </span>, we believe the best garments come from working closely with the people who make them.
              <br />
              with{' '}
              <span className="text-ink">No
              black boxes. No unnecessary layers. Just a clear, capable partner from first idea to final delivery.</span>
            </h4>

            <a
              href="#about"
              className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-full bg-ink py-1 pl-5 pr-1 text-[12px] font-medium text-white"
            >
              Our story
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink">
                <ArrowRight size={15} />
              </span>
            </a>
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 gap-3 border-t border-line p-4 sm:p-5 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-line bg-white p-5 sm:p-6"
            >
              <strong
                className="font-medium text-ink"
                style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
              >
                {m.value}
                <span className="text-accent">{m.suffix}</span>
              </strong>
              <small
                className="text-[12px] italic leading-[1.4] text-muted"
                dangerouslySetInnerHTML={{ __html: m.label }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}