import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import { heroImage } from '../data';

export default function Hero({ nav }: { nav: React.ReactNode }) {
  return (
    <header className="relative min-h-[730px] text-white bg-ink-darker overflow-hidden" id="top">
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_56%_47%,rgba(226,180,18,0.3),transparent_21%),linear-gradient(90deg,rgba(4,24,76,0.96)_0%,rgba(5,44,105,0.72)_44%,rgba(5,44,105,0.16)_100%)]" />
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Garment maker working at a sewing machine" className="h-full object-cover object-[center_44%] saturate-[0.75]" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(4,24,76,0.9)_0%,rgba(5,44,105,0.56)_46%,rgba(5,44,105,0.12)_100%)]" />
      </div>
      <div className="relative z-[4] w-[min(1180px,calc(100%-80px))] mx-auto">{nav}</div>
      <div className="relative z-[2] w-[min(1180px,calc(100%-80px))] mx-auto h-[555px] flex items-center">
        <div className="max-w-[650px] pb-3.5">
          <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold flex items-center">
            <span className="w-[7px] h-[7px] bg-gold inline-block rounded-full mr-2" /> Connecting Ideas to Reality
          </div>
          <h1 className="font-medium tracking-tightest leading-[0.98] my-5 text-[clamp(54px,7.2vw,100px)]">
            SUNTEX<br /><em className="font-serif font-medium">Apparel Group</em>
          </h1>
          <p className="max-w-[350px] my-[29px] text-sm leading-[1.65] text-white/74">
            Full-Service Garment Manufacturing &amp; Sourcing, Built in Bangladesh.
          </p>
          <div className="flex items-center gap-[26px]">
            <a className="inline-flex items-center gap-4 px-[18px] py-[15px] rounded-sm text-xs font-semibold text-ink bg-gold transition-transform hover:-translate-y-0.5" href="#contact">
              Get a Quote <ArrowRight size={16} />
            </a>
            <a className="flex items-center gap-[9px] text-[11px] font-medium" href="#services">
              <span className="w-7 h-7 grid place-items-center border border-white/55 rounded-full">
                <Play size={12} fill="currentColor" />
              </span>
              Our Services
            </a>
          </div>
        </div>
        <div className="absolute right-0 bottom-[46px] flex gap-2.5 items-center text-white/70 font-mono text-[9px] uppercase leading-[1.3]">
          <span>01</span>
          <span className="w-12 h-px bg-gold" />
          <span>200+ Partner<br />Factories</span>
        </div>
      </div>
      <a href="#approach" className="absolute z-[2] bottom-7 left-10 flex gap-2 items-center font-mono text-[9px] text-white/70 uppercase">
        <ArrowDown size={17} /> Scroll to explore
      </a>
    </header>
  );
}
