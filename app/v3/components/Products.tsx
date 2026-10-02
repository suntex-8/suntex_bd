import { ArrowRight } from 'lucide-react';
import { products } from '../data';

export default function Products() {
  return (
    <section className="py-[120px] pb-[128px] w-[min(1180px,calc(100%-80px))] mx-auto" id="products">
      <div className="flex justify-between items-end mb-[42px]">
        <div>
          <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold">Our Products</div>
          <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] my-5 mb-0">
            All Types of Products.<br /><em className="font-serif font-medium">Under One Roof.</em>
          </h2>
        </div>
        <a className="inline-flex items-center gap-2 mt-[17px] pb-[7px] border-b border-ink text-[11px] font-semibold" href="#contact">
          Explore capabilities <ArrowRight size={15} />
        </a>
      </div>
      <div className="grid grid-cols-4 gap-2.5">
        {products.map((product) => (
          <a href="#contact" className="h-[300px] overflow-hidden relative text-white bg-blue-deep" key={product.title}>
            <img src={product.image} alt={product.title} className="h-full transition-transform duration-500 hover:scale-105" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_30%,rgba(0,0,0,0.75))]" />
            <div className="absolute bottom-[19px] left-[19px] right-[15px] flex justify-between items-center text-xs">
              <span className="max-w-[90px] leading-[1.25]">{product.title}</span>
              <ArrowRight size={16} className="text-gold" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
