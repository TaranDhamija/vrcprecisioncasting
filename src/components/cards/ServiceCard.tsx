import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';
import type { Service } from '../../data/services';

/** Editorial service card: image on top, technical label, title, CTA. */
export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex h-full flex-col border border-abyssal/15 bg-palladian transition-colors hover:border-truffle"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={service.image}
          alt={service.title}
          className="h-full w-full"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <span className="tech-label absolute left-4 top-4 bg-abyssal px-3 py-1.5 text-flame">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="tech-label text-truffle">{service.label}</p>
        <h3 className="mt-3 text-2xl uppercase">{service.title}</h3>
        <p className="mt-4 flex-1 text-abyssal/75">{service.short}</p>
        <span className="mt-6 inline-flex items-center gap-2 font-display text-[0.78rem] font-bold uppercase tracking-[0.12em] group-hover:text-truffle">
          View service
          <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
