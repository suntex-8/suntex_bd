import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { faqs } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="bg-sand py-[120px]" id="contact">
      <div className="w-[min(1180px,calc(100%-80px))] mx-auto grid grid-cols-[0.9fr_1.1fr] gap-[130px]">
        <div>
          <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold">Frequently Asked<br />Questions</div>
          <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] my-[18px] mb-[23px]">
            Have a collection<br />in <em className="font-serif font-medium">mind?</em>
          </h2>
          <p className="max-w-[410px] text-[15px] leading-[1.7] text-muted-dark">
            Tell us what you’re building. Our team will help shape the right production plan and quote.
          </p>
          <a className="inline-flex items-center gap-4 px-[18px] py-[15px] rounded-sm text-xs font-semibold text-ink bg-gold transition-transform hover:-translate-y-0.5" href="mailto:info@suntexbd.com">
            Get a Quote <ArrowRight size={16} />
          </a>
        </div>
        <div className="border-t border-line-faq">
          {faqs.map((faq, i) => (
            <div className="border-b border-line-faq py-[21px]" key={i}>
              <div
                className="flex justify-between items-center cursor-pointer text-[13px] font-medium"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                {faq.q}
                <ChevronDown size={18} className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </div>
              {openIndex === i && (
                <p className="mt-3.5 mr-[25px] text-xs leading-[1.6] text-muted-dark">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
