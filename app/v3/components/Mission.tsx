export default function Mission() {
  return (
    <section className="bg-ink-dark text-cream py-[120px] pb-[132px]" id="mission">
      <div className="w-[min(1180px,calc(100%-80px))] mx-auto grid grid-cols-2 gap-20 items-end">
        <div>
          <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold">Our Mission</div>
          <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] my-[18px] mt-0">
            Connecting Ideas<br /><em className="font-serif font-medium">to Reality.</em>
          </h2>
        </div>
        <div>
          <p className="text-white/67 max-w-[410px] text-[15px] leading-[1.7] m-0 mb-[46px]">
            To connect global fashion ideas with reliable Bangladeshi manufacturing — delivering the right product, at the right quality, on time, every time.
          </p>
          <div className="border-t border-[#575d54] pt-4 flex justify-between items-baseline">
            <span className="text-gold font-mono text-[9px] uppercase">Our Vision</span>
            <strong className="text-sm font-medium">Bangladesh’s most trusted full-service sourcing &amp; manufacturing partner</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
