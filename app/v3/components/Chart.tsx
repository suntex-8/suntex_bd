export default function Chart() {
  return (
    <section className="bg-sand py-[108px] pb-[122px]">
      <div className="w-[min(1180px,calc(100%-80px))] mx-auto grid grid-cols-[0.8fr_1.2fr] gap-[100px] items-end">
        <div>
          <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold">Built for scale</div>
          <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] my-5 mb-7">
            From first sample<br />to <em className="font-serif font-medium">full collection.</em>
          </h2>
          <p className="max-w-[410px] text-[15px] leading-[1.7] text-muted-dark">
            Whether you are building your first line or scaling an established brand, our network flexes around what you need — not the other way around.
          </p>
        </div>
        <div className="relative h-[250px] border-b border-[#8e8d84] border-l">
          <div className="absolute left-[-5px] top-[-27px] text-[9px]">Volume</div>
          <div className="absolute left-[-43px] top-0 bottom-0 flex flex-col justify-between font-mono text-[9px] text-[#85837c]">
            <span>500k</span>
            <span>250k</span>
            <span>0</span>
          </div>
          <div className="absolute inset-0 overflow-hidden bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_82px,rgba(120,120,110,0.22)_83px)]">
            <div className="absolute left-0 right-0 bottom-0 h-full bg-gold-deep z-[2] [clip-path:polygon(0_92%,30%_79%,52%_68%,73%_43%,100%_9%,100%_10%,73%_44%,52%_69%,30%_80%,0_93%)]" />
            <div className="absolute inset-0 [clip-path:polygon(0_92%,30%_79%,52%_68%,73%_43%,100%_9%,100%_100%,0_100%)] bg-[linear-gradient(145deg,transparent_47%,rgba(223,180,17,0.42)_48%,rgba(223,180,17,0.08)_100%)]" />
          </div>
          <span className="absolute bottom-[-28px] left-0 text-[10px] text-muted">Starting out</span>
          <span className="absolute bottom-[-28px] right-0 text-[10px] text-muted">Growing together</span>
        </div>
      </div>
    </section>
  );
}
