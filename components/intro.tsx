import { ArrowRight } from 'lucide-react';

const metrics = [
  { value: '200', suffix: '+', label: 'Partner factories<br />worldwide' },
  { value: '500', suffix: 'k', label: 'Units delivered<br />every year' },
  { value: '24', suffix: 'h', label: 'Average response<br />time' },
  { value: '16', suffix: '', label: 'Markets served<br />across the globe' },
];

export default function Intro() {
  return (
    <section className="py-[120px] pb-[112px] w-[min(1180px,calc(100%-80px))] mx-auto" id="approach">
      <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold">A better way to make</div>
      <div className="grid grid-cols-[1.2fr_0.8fr] gap-[90px] items-end mt-5">
        <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] mb-0">
          Good products start<br />with <em className="font-serif font-medium">good relationships.</em>
        </h2>
        <div>
          <p className="max-w-[410px] text-[15px] leading-[1.7] text-muted-dark">
            At SUNTEX, we believe the best garments come from working closely with the people who make them. No black boxes. No unnecessary layers. Just a clear, capable partner from first idea to final delivery.
          </p>
          <a className="inline-flex items-center gap-2 mt-[17px] pb-[7px] border-b border-ink text-[11px] font-semibold" href="#about">
            Our story <ArrowRight size={15} />
          </a>
        </div>
      </div>
      <div className="mt-[82px] grid grid-cols-4 border-t border-line pt-7">
        {metrics.map((m, i) => (
          <div key={i} className={`flex gap-5 items-center ${i > 0 ? 'border-l border-line pl-6' : ''} ${i === 3 ? 'border-l-0' : ''}`}>
            <strong className="text-[39px] font-medium tracking-tighter">
              {m.value}<span className="text-gold-deep font-serif italic text-[26px]">{m.suffix}</span>
            </strong>
            <small className="text-muted text-[10px] leading-[1.35]" dangerouslySetInnerHTML={{ __html: m.label }} />
          </div>
        ))}
      </div>
    </section>
  );
}
