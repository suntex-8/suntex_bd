import { ArrowRight } from 'lucide-react';
import { designerImage } from '../data';

export default function About() {
  return (
    <section className="bg-gold py-[120px]" id="about">
      <div className="w-[min(1180px,calc(100%-80px))] mx-auto grid grid-cols-[1fr_0.8fr] gap-[110px] items-center">
        <div>
          <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-ink">Who We Are</div>
          <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] my-[18px] mb-7">
            A Manufacturing &amp; Sourcing<br />Partner Built <em className="font-serif font-medium">by Specialists.</em>
          </h2>
          <p className="text-[#4a461e] max-w-[410px] text-[15px] leading-[1.7] mb-[30px]">
            SUNTEX Apparel Group is a Bangladesh-based garment manufacturing and sourcing company formed by specialists from across the apparel value chain. We combine our own knit and woven production with a trusted partner network for every other category a modern buyer needs — giving international and local clients one reliable point of contact for quality, adaptability, and on-time delivery.
          </p>
          <a className="inline-flex items-center gap-4 px-[18px] py-[15px] rounded-sm text-xs font-semibold text-ink bg-gold transition-transform hover:-translate-y-0.5" href="#services">
            Explore More <ArrowRight size={16} />
          </a>
        </div>
        <div className="h-[430px] relative">
          <img src={designerImage} alt="Fashion designer at work" className="h-full grayscale-[0.12]" />
          <div className="absolute left-[18px] bottom-4 right-[18px] flex justify-between text-white font-mono text-[10px] uppercase">
            <span>SUNTEX Global Ltd.</span>
            <span>Trusted by International &amp; Local Buyers Alike</span>
          </div>
        </div>
      </div>
    </section>
  );
}
