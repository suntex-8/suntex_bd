import { ArrowRight } from 'lucide-react';
import { tailorImage, showroomImage, fabricImage } from '../data';

export default function Made() {
  return (
    <section className="py-[120px] pb-[128px] w-[min(1180px,calc(100%-80px))] mx-auto" id="facilities">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold">Our Facilities</div>
        <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] my-[18px]">
          See Where It’s<br /><em className="font-serif font-medium">Made.</em>
        </h2>
      </div>
      <div className="grid grid-cols-[1.25fr_0.75fr] grid-rows-2 gap-2.5 h-[545px] mt-[60px]">
        <a href="#contact" className="row-span-2 relative overflow-hidden text-white group">
          <img src={tailorImage} alt="Tailors working together" className="h-full transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(transparent_40%,rgba(0,0,0,0.78))]" />
          <div className="absolute bottom-[18px] left-5 right-5 z-[1]">
            <span className="block font-mono text-[9px] text-gold uppercase mb-[7px]">Cutting Section</span>
            <strong className="flex justify-between items-center text-[18px] font-medium">Vertical Integration <ArrowRight size={16} /></strong>
          </div>
        </a>
        <a href="#contact" className="relative overflow-hidden text-white group">
          <img src={showroomImage} alt="Clothing showroom" className="h-full transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(transparent_40%,rgba(0,0,0,0.78))]" />
          <div className="absolute bottom-[18px] left-5 right-5 z-[1]">
            <span className="block font-mono text-[9px] text-gold uppercase mb-[7px]">Sewing Line</span>
            <strong className="flex justify-between items-center text-[13px] font-medium">Experienced Team <ArrowRight size={16} /></strong>
          </div>
        </a>
        <a href="#contact" className="relative overflow-hidden text-white group">
          <img src={fabricImage} alt="Colorful sewing threads" className="h-full transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(transparent_40%,rgba(0,0,0,0.78))]" />
          <div className="absolute bottom-[18px] left-5 right-5 z-[1]">
            <span className="block font-mono text-[9px] text-gold uppercase mb-[7px]">Finishing &amp; QC</span>
            <strong className="flex justify-between items-center text-[13px] font-medium">Network Depth <ArrowRight size={16} /></strong>
          </div>
        </a>
      </div>
    </section>
  );
}
