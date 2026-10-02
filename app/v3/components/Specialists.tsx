import { Quote } from 'lucide-react';
import { people } from '../data';

export default function Specialists() {
  return (
    <section className="py-[120px] pb-[124px] w-[min(1180px,calc(100%-80px))] mx-auto" id="team">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold">Our Team</div>
        <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] my-[18px]">
          Specialists Across<br />the <em className="font-serif font-medium">Value Chain.</em>
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-5 my-[65px] mb-[76px] text-center">
        {people.map((p) => (
          <div key={p.name}>
            <div className={`w-[100px] h-[100px] mx-auto mb-[17px] grid place-items-center rounded-full text-white font-serif text-[25px] ${p.color}`}>
              {p.initials}
            </div>
            <strong className="block text-[13px] font-semibold">{p.name}</strong>
            <span className="block mt-1.5 text-muted-light font-mono text-[9px] uppercase">{p.role}</span>
          </div>
        ))}
      </div>
      <div className="max-w-[700px] mx-auto text-center">
        <Quote size={26} className="text-gold" />
        <p className="font-serif italic text-[24px] leading-[1.4] my-5">
          Built for global buyers and local clients.
        </p>
        <span className="font-mono text-[9px] text-muted-light uppercase">— International Buyers &amp; Local Bangladesh Clients</span>
      </div>
    </section>
  );
}
