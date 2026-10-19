import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { StatsBand } from './ui/stats-band';

import { stats } from "@/components/ui/stats-band-data";

export default function Intro() {
  return (
    <section className="mx-auto w-full max-w-full px-5 sm:px-8  lg:px-0 " id="approach">
      <div className="overflow-hidden rounded-3xl border border-line bg-white py-8">
        {/* Top block: label column | headline column */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] ">
          {/* Left column */}
          <div className="border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="text-[14px] font-bold uppercase leading-[1.5] tracking-[0.12em] text-black">
              A better way to make
            </div>
            <figure className="mt-4 hidden lg:block">
              <div className="relative aspect-square  rounded-xl">
                <Image
                  src="/3d_logo.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 250px, (min-width: 640px) 60vw, 100vw"
                  className="object-cover object-bottom "
                />
                
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
<StatsBand
  stats={stats}
/>
       
      </div>
    </section>
  );
}