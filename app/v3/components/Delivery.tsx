import Image from 'next/image';
import {
  PenTool,
  Scissors,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from 'lucide-react';

type Capability = {
  title: string;
  desc: string;
  icon: LucideIcon;
  img: string;
};

const lanes = [
  {
    label: 'We make',
    items: ['Knit garments', 'Woven garments'],
    note: 'Full control over quality, cost, and lead time from fabric to finished garment.',
  },
  {
    label: 'We source',
    items: ['Sweaters', 'Home textiles', 'Socks', 'Shoes & leather items'],
    note: 'Collaborative partners who support and grow with us — extending our range without stretching our quality standards.',
  },
];

const capabilities: Capability[] = [
  {
    title: 'Design & Product Development',
    desc: 'An in-house design and product development facility that takes buyer ideas from concept to sample.',
    icon: PenTool,
    img: 'https://images.pexels.com/photos/7256867/pexels-photo-7256867.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Own Sample Section',
    desc: 'Dedicated in-house sampling for faster turnaround and earlier sample delivery.',
    icon: Scissors,
    img: 'https://images.pexels.com/photos/7147644/pexels-photo-7147644.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Own QC & Inspection',
    desc: 'In-house quality control and compliance inspection at every stage of production.',
    icon: ShieldCheck,
    img: 'https://images.pexels.com/photos/32318653/pexels-photo-32318653.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Own Logistics & Shipping',
    desc: 'Inner logistics and shipping coordination, so orders move smoothly from factory to port.',
    icon: Truck,
    img: 'https://images.pexels.com/photos/6169177/pexels-photo-6169177.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Delivery() {
  return (
    <section className="bg-sand" id="services">
      <div className="w-[min(1180px,calc(100%-80px))] mx-auto py-[120px]">
        <div className="text-center max-w-[600px] mx-auto">
          <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold">What We Do</div>
          <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] my-[18px]">
            One Partner, Two Ways<br /><em className="font-serif font-medium">We Deliver.</em>
          </h2>
        </div>

        {/* Two delivery lanes */}
        <div className="mt-[60px] overflow-hidden rounded-2xl border border-line bg-cream">
          {lanes.map((lane, i) => (
            <div
              key={lane.label}
              className={`grid md:grid-cols-[minmax(190px,270px)_1fr] ${i === 1 ? 'border-t-2 border-gold' : ''}`}
            >
              <div className="flex flex-col gap-5 border-b border-line p-7 sm:p-9 md:border-r md:border-b-0 lg:p-11">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-sm font-semibold text-muted">{lane.label}</span>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted">{lane.note}</p>
              </div>

              <div className="p-7 sm:p-9 lg:p-11">
                {lane.items.map((item) => (
                  <p
                    key={item}
                    className="border-t border-line py-4 text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.1] font-medium tracking-[-0.02em] text-ink first:border-t-0 first:pt-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* End-to-End Service Capability */}
        <h3 className="mt-20 border-t border-line pt-14 text-[26px] leading-tight font-medium text-ink sm:text-3xl lg:mt-24 lg:pt-16 lg:text-[34px]">
          End-to-End Service Capability
        </h3>

        <div className="mt-8 flex flex-col gap-3 lg:h-[440px] lg:flex-row lg:gap-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              tabIndex={0}
              className="capability-panel group relative isolate min-h-[280px] overflow-hidden rounded-xl outline-none lg:min-h-0 lg:flex-1"
            >
              <Image
                src={cap.img}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="capability-image object-cover motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/15" />
              <div className="relative flex h-full flex-col justify-end p-5 lg:p-6">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-ink">
                  <cap.icon className="h-4 w-4" />
                </span>
                <h4 className="text-lg leading-snug font-medium text-white sm:text-xl">
                  {cap.title}
                </h4>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
