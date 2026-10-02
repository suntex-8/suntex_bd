import { ArrowRight } from 'lucide-react';

const metrics = [
  { value: '200', suffix: '+', label: 'Partner factories<br />worldwide' },
  { value: '500', suffix: 'k', label: 'Units delivered<br />every year' },
  { value: '24', suffix: 'h', label: 'Average response<br />time' },
  { value: '16', suffix: '', label: 'Markets served<br />across the globe' },
];

export default function Intro() {
  return (
    <section
      className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-[120px] lg:pb-[112px]"
      id="approach"
    >
      <div className="font-mono text-[10px] uppercase leading-[1.5] tracking-[0.07em] text-accent sm:text-[11px]">
        A better way to make
      </div>

      {/* Single column until lg. At two columns on a 375px screen the
          headline was sharing ~150px with the paragraph. */}
      <div className="mt-5 grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-[90px]">
        <h2
          /* globals.css sets an unlayered font-size, line-height and
             letter-spacing on h2, which beats any Tailwind utility.
             Inlined so the intended display scale actually applies. */
          style={{
            fontSize: 'clamp(2rem, 5.1vw, 4.4375rem)',
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
          }}
          className="font-medium"
        >
          Good products start
          <br />
          with <em className="font-serif font-medium">good relationships.</em>
        </h2>

        <div>
          <p className="max-w-[410px] text-[15px] leading-[1.7] text-muted">
            At SUNTEX, we believe the best garments come from working closely with the people who make them. No
            black boxes. No unnecessary layers. Just a clear, capable partner from first idea to final delivery.
          </p>
          <a
            className="mt-[17px] inline-flex min-h-11 items-center gap-2 border-b border-ink pb-[7px] text-[12px] font-semibold"
            href="#about"
          >
            Our story <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Two-up on mobile, four across on lg. The vertical rules between
          columns only exist at lg, where there are columns to divide. */}
      <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-line pt-7 sm:mt-16 lg:mt-[82px] lg:grid-cols-4 lg:gap-x-6">
        {metrics.map((m, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 sm:gap-5 ${i > 0 && i < 3 ? 'lg:border-l lg:border-line lg:pl-6' : ''}`}
          >
            <strong className="text-[28px] font-medium tracking-tighter sm:text-[32px] lg:text-[39px]">
              {m.value}
              <span className="font-serif text-[19px] italic text-accent lg:text-[26px]">{m.suffix}</span>
            </strong>
            <small
              className="text-[11px] leading-[1.35] text-muted"
              dangerouslySetInnerHTML={{ __html: m.label }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
