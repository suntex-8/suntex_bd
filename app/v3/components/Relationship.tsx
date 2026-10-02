import { ArrowRight } from 'lucide-react';

export default function Relationship() {
  return (
    <section className="bg-sand p-12" id="moq">
      <div className="w-[min(1180px,calc(100%-80px))] mx-auto grid grid-cols-[1.15fr_0.85fr] gap-20 items-center">
        <div>
          <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold">Order Flexibility</div>
          <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] my-5 mt-[18px]">
            MOQ Built Around<br />the <em className="font-serif font-medium">Relationship.</em>
          </h2>
          <p className="max-w-[410px] text-[15px] leading-[1.7] text-muted-dark my-[30px]">
            The right number, honestly, depends on the relationship we build with each customer. As trust and order history grow, so does our flexibility.
          </p>
          <a className="inline-flex items-center gap-4 px-[18px] py-[15px] rounded-sm text-xs font-semibold text-cream bg-ink-dark transition-transform hover:-translate-y-0.5" href="#contact">
            Get In Touch <ArrowRight size={16} />
          </a>
        </div>
        <div className="border-l border-line-sand pl-[70px]">
          <strong className="text-[120px] font-medium tracking-tightest2 leading-[0.8]">500</strong>
          <span className="block font-serif italic text-xl leading-[1.15] my-[18px] mb-8">
            pieces per style,<br />single color
          </span>
          <div className="h-px bg-[#bcbab1]" />
          <div className="grid grid-cols-4 pt-4 font-mono text-[9px] text-[#78766d] uppercase">
            <span>Available on inquiry</span>
            <span>Luxury &amp; streetwear brands</span>
            <span>Capsule collections</span>
            <span>Emerging labels</span>
          </div>
        </div>
      </div>
    </section>
  );
}
