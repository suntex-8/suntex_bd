import {
  CheckCheck,
  Layers3,
  PackageCheck,
  Scissors,
  Spool,
  type LucideIcon,
} from 'lucide-react';
import { qualityData } from '@/data/SiteSectionData';

const stageIcons: LucideIcon[] = [Layers3, Scissors, Spool, CheckCheck, PackageCheck];

/* Colourful stage chips, matching the v1 Quality Assurance section. */
const stageIconColors = [
  'border-sky-600/25 bg-sky-500 text-white',
  'border-emerald-600/25 bg-emerald-500 text-white',
  'border-orange-600/25 bg-orange-500 text-white',
  'border-violet-600/25 bg-violet-500 text-white',
  'border-rose-600/25 bg-rose-500 text-white',
];

export default function Process() {
  return (
    <section className="py-[120px] w-[min(1180px,calc(100%-80px))] mx-auto" id="process">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="font-mono text-[10px] tracking-[0.07em] uppercase leading-[1.5] text-gold">{qualityData.subTitle}</div>
        <h2 className="font-medium tracking-tightest leading-[0.98] text-[clamp(42px,5.1vw,71px)] my-[18px]">
          Quality Checked<br /><em className="font-serif font-medium">at Every Stage.</em>
        </h2>
        <p className="text-[13px] text-muted">Every checkpoint is handled by our own QC team, from incoming materials to final dispatch.</p>
      </div>

      {/* Desktop: five checkpoints strung along a dashed path (matches the v1 layout). */}
      <div className="relative mt-[67px] hidden h-[340px] xl:block">
        <svg
          className="absolute inset-0 z-0 h-full w-full"
          viewBox="0 0 1180 340"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M118 28 L354 98 L590 28 L826 98 L1062 28"
            fill="none"
            stroke="rgba(31, 45, 56, 0.22)"
            strokeWidth={1.5}
            strokeDasharray="7 9"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ol className="absolute inset-0 z-10 grid grid-cols-5 gap-4">
          {qualityData.stages.map((stage, i) => {
            const StageIcon = stageIcons[i];
            const isOffset = i % 2 === 1;

            return (
              <li
                key={stage.step}
                className={`relative h-[250px] ${isOffset ? 'translate-y-[70px] rotate-[1deg]' : 'rotate-[-1deg]'}`}
              >
                <article className="flex h-full flex-col rounded-[22px] border border-line bg-sand p-2.5 shadow-[0_18px_45px_rgba(31,45,56,0.08)]">
                  <div className="flex justify-center">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full border shadow-sm ${stageIconColors[i]}`}>
                      <StageIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="mt-3 flex flex-1 flex-col rounded-xl border border-gold/30 bg-gold/10 px-4 py-4">
                    <span className="font-serif text-3xl leading-none font-medium text-gold-dark">0{stage.step}</span>
                    <h3 className="mt-2 text-[16px] font-medium text-ink">{stage.stage}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{stage.description}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile / tablet: vertical timeline (matches the v1 mobile layout). */}
      <ol className="relative mx-auto mt-14 max-w-2xl xl:hidden" aria-label="Five-stage quality control process">
        <span className="absolute top-10 bottom-10 left-[38px] border-l border-dashed border-line" aria-hidden="true" />

        {qualityData.stages.map((stage, i) => {
          const StageIcon = stageIcons[i];

          return (
            <li key={stage.step} className="relative mb-6 last:mb-0">
              <article className="flex items-start gap-4">
                <span className={`relative z-10 mt-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border shadow-sm ${stageIconColors[i]}`}>
                  <StageIcon className="h-4 w-4" aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1 rounded-xl border border-line bg-sand p-4">
                  <span className="font-serif text-2xl leading-none font-medium text-gold-dark">0{stage.step}</span>
                  <h3 className="mt-2 text-base font-medium text-ink">{stage.stage}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{stage.description}</p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>

      <p className="mx-auto mt-12 max-w-3xl text-center text-[13px] leading-relaxed text-muted">{qualityData.caption}</p>
    </section>
  );
}
