import { Link, useParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import AnimatedSection from '../components/common/AnimatedSection';
import ImageWithFallback from '../components/common/ImageWithFallback';
import CTASection from '../components/common/CTASection';
import { WhatsAppCta } from '../components/common/WhatsAppButton';
import { getService, services } from '../data/services';
import { useSeo } from '../hooks/useSeo';
import NotFound from './NotFound';

export default function ServiceDetails() {
  const { slug = '' } = useParams();
  const service = getService(slug);
  useSeo(service?.title, service?.short);
  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.label}
        title={service.title}
        text={service.short}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      >
        <Button to="/contact" variant="primary">
          Request a quote
        </Button>
        <WhatsAppCta message={`Hello, I would like to enquire about your ${service.title} service.`} />
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-7">
            <ImageWithFallback src={service.image} alt={service.title} eager className="aspect-[16/10] w-full" />
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <p className="tech-label text-truffle">Overview</p>
            <p className="mt-5">{service.description}</p>
            {service.provisional && (
              <p className="tech-label mt-6 border border-truffle/40 px-3 py-2 text-truffle">
                Provisional content — pending company confirmation
              </p>
            )}
            <ul className="mt-8 space-y-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <Check size={18} className="mt-1 shrink-0 text-truffle" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-oatmeal/40 py-20 sm:py-24">
        <Container>
          <p className="tech-label mb-8 text-truffle">Typical workflow (proposed)</p>
          <ol className="grid gap-px bg-abyssal/15 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step} className="bg-palladian p-6">
                <span className="font-mono text-2xl text-truffle">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-4 font-display text-lg font-bold uppercase">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <p className="tech-label mb-8 text-truffle">Other services</p>
          <ul className="divide-y divide-abyssal/15 border-y border-abyssal/15">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="flex items-center justify-between py-5 font-display text-xl font-bold uppercase hover:text-truffle sm:text-2xl"
                >
                  {s.title}
                  <span className="tech-label text-abyssal/50">{s.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
