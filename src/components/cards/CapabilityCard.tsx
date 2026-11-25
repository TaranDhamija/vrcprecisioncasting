import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

interface Props {
  slug: string;
  title: string;
  description: string;
  image: string;
  index: number;
}

/** Vertical capability card: the image darkens and the copy rises on hover. */
export default function CapabilityCard({ slug, title, description, image, index }: Props) {
  return (
    <Link
      to={`/services/${slug}`}
      className="on-dark group relative flex aspect-[3/4] flex-col justify-end overflow-hidden bg-fantastic text-palladian"
    >
      <ImageWithFallback
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full"
        imgClassName="transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-abyssal via-abyssal/50 to-transparent transition-opacity group-hover:from-abyssal" aria-hidden />
      <span className="tech-label absolute left-5 top-5 text-flame">{String(index + 1).padStart(2, '0')} /</span>
      <div className="relative p-6">
        <h3 className="text-2xl uppercase">{title}</h3>
        <p className="mt-3 max-h-0 overflow-hidden text-sm text-palladian/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:max-h-32 group-focus-visible:opacity-100 max-sm:max-h-32 max-sm:opacity-100">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 font-display text-[0.75rem] font-bold uppercase tracking-[0.12em] text-flame">
          Learn more
          <ArrowUpRight size={16} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
