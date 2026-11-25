import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import ProductCard from '../components/cards/ProductCard';
import CTASection from '../components/common/CTASection';
import { categories, products } from '../data/products';
import { useSeo } from '../hooks/useSeo';

export default function Products() {
  useSeo('Products', 'Browse sample categories of precision cast and machined components.');
  const [params, setParams] = useSearchParams();
  const category = params.get('category') ?? 'All';
  const query = params.get('q') ?? '';

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value && value !== 'All') next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (!q || [p.name, p.category, p.application, p.summary].some((f) => f.toLowerCase().includes(q))),
    );
  }, [category, query]);

  const chip = (active: boolean) =>
    `px-4 py-2.5 font-display text-[0.72rem] font-bold uppercase tracking-[0.1em] border transition-colors ${
      active ? 'border-abyssal bg-abyssal text-palladian' : 'border-abyssal/30 hover:border-truffle hover:text-truffle'
    }`;

  return (
    <>
      <PageHero
        eyebrow="Product catalogue"
        title="Engineered components."
        text="Illustrative sample categories and placeholder entries — an editable catalogue structure, not a verified product range."
        crumbs={[{ label: 'Products' }]}
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 border-b border-abyssal/15 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {['All', ...categories].map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={category === c}
                  onClick={() => setParam('category', c)}
                  className={chip(category === c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="relative block w-full lg:w-80">
              <span className="sr-only">Search products</span>
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-abyssal/50" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => setParam('q', e.target.value)}
                placeholder="Search products"
                className="w-full border border-abyssal/30 bg-transparent py-3 pl-11 pr-4 placeholder:text-abyssal/45 focus:border-truffle focus:outline-none"
              />
            </label>
          </div>

          <p className="tech-label mt-6 text-abyssal/60" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
          </p>

          {filtered.length ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-dashed border-abyssal/30 p-12 text-center">
              <p className="font-display text-xl font-bold uppercase">No matching products</p>
              <p className="mt-2 text-abyssal/70">Try a different category or search term.</p>
            </div>
          )}
        </Container>
      </section>
      <CTASection title="CAN'T FIND YOUR COMPONENT?" text="Share a drawing or description and we will discuss feasibility." />
    </>
  );
}
