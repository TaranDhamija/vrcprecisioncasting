import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';
import type { Product } from '../../data/products';

/** Catalogue-style product card with spec rows. */
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex h-full flex-col bg-oatmeal/40 transition-colors hover:bg-oatmeal/70"
    >
      <div className="relative aspect-square overflow-hidden bg-oatmeal">
        <ImageWithFallback
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full"
          imgClassName="mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
        />
        <span className="tech-label absolute left-3 top-3 bg-palladian px-2.5 py-1 text-[0.65rem] text-abyssal">
          Sample
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="tech-label text-truffle">{product.category}</p>
        <h3 className="mt-2 text-xl uppercase">{product.name}</h3>
        <dl className="mt-4 space-y-1.5 border-t border-abyssal/15 pt-4 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-abyssal/60">Application</dt>
            <dd className="text-right">{product.application}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-abyssal/60">Material</dt>
            <dd className="text-right">{product.material}</dd>
          </div>
        </dl>
        <span className="mt-5 inline-flex items-center gap-2 font-display text-[0.78rem] font-bold uppercase tracking-[0.12em] group-hover:text-truffle">
          View details
          <ArrowUpRight size={16} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
