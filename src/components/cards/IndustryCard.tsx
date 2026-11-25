import ImageWithFallback from '../common/ImageWithFallback';
import type { Industry } from '../../data/industries';

/** Full-bleed image card with overlay; reveals component examples on hover/focus. */
export default function IndustryCard({ industry, tall }: { industry: Industry; tall?: boolean }) {
  return (
    <article
      tabIndex={0}
      className={`on-dark group relative isolate overflow-hidden bg-abyssal text-palladian ${
        tall ? 'min-h-[26rem] sm:min-h-[30rem]' : 'min-h-[22rem]'
      }`}
    >
      <ImageWithFallback
        src={industry.image}
        alt={industry.name}
        className="absolute inset-0 h-full w-full"
        imgClassName="transition-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-abyssal via-abyssal/55 to-abyssal/10" aria-hidden />
      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between p-6 sm:p-7">
        <span className="tech-label self-start bg-flame px-2.5 py-1 text-abyssal">{industry.index}</span>
        <div>
          <h3 className="text-2xl uppercase sm:text-3xl">{industry.name}</h3>
          <p className="mt-3 max-w-sm text-sm text-palladian/80">{industry.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
            {industry.components.map((c) => (
              <li key={c} className="tech-label border border-palladian/40 px-2.5 py-1 text-[0.65rem]">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
