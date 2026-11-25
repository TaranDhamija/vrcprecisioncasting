import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/common/Container';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Button from '../components/common/Button';
import ImageWithFallback from '../components/common/ImageWithFallback';
import ProductCard from '../components/cards/ProductCard';
import CTASection from '../components/common/CTASection';
import { WhatsAppCta } from '../components/common/WhatsAppButton';
import { getProduct, products } from '../data/products';
import { useSeo } from '../hooks/useSeo';
import NotFound from './NotFound';

export default function ProductDetails() {
  const { slug = '' } = useParams();
  const product = getProduct(slug);
  const [active, setActive] = useState(0);
  useSeo(product?.name, product?.summary);
  if (!product) return <NotFound />;

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="pt-[calc(var(--header-h)+2.5rem)] pb-20 sm:pb-28">
        <Container>
          <Breadcrumbs
            items={[{ label: 'Products', to: '/products' }, { label: product.name }]}
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ImageWithFallback
                key={product.images[active]}
                src={product.images[active]}
                alt={`${product.name} — view ${active + 1}`}
                eager
                className="aspect-[4/3] w-full"
              />
              <div className="mt-3 grid grid-cols-3 gap-3">
                {product.images.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show image ${i + 1}`}
                    aria-pressed={active === i}
                    className={`border-2 transition-colors ${active === i ? 'border-truffle' : 'border-transparent hover:border-abyssal/40'}`}
                  >
                    <ImageWithFallback src={src} alt="" className="aspect-[4/3] w-full" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="tech-label text-truffle">{product.category}</p>
              <h1 className="display-lg mt-4 uppercase">{product.name}</h1>
              <p className="tech-label mt-5 inline-block border border-truffle/40 px-3 py-2 text-truffle">
                Sample listing — editable placeholder
              </p>
              <p className="mt-6">{product.description}</p>

              <div className="mt-8 border-t border-abyssal/15 pt-6">
                <h2 className="tech-label text-abyssal/60">Manufacturing process</h2>
                <p className="mt-2">{product.process}</p>
              </div>
              <div className="mt-6 border-t border-abyssal/15 pt-6">
                <h2 className="tech-label text-abyssal/60">Applications</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <li key={a} className="border border-abyssal/25 px-3 py-1.5 text-sm">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button to={`/contact?product=${encodeURIComponent(product.name)}`} variant="primary">
                  Enquire about this
                </Button>
                <WhatsAppCta message={`Hello, I would like to enquire about: ${product.name}.`} />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="tech-label mb-6 text-truffle">Technical specifications</h2>
            <dl className="divide-y divide-abyssal/15 border-y border-abyssal/15">
              {product.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3">
                  <dt className="text-abyssal/65">{s.label}</dt>
                  <dd className="sm:col-span-2">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="tech-label mb-6 text-truffle">Related components</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
      <CTASection />
    </>
  );
}
