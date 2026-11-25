import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import { Stagger, StaggerItem } from '../components/common/AnimatedSection';
import ServiceCard from '../components/cards/ServiceCard';
import CTASection from '../components/common/CTASection';
import { services } from '../data/services';
import { useSeo } from '../hooks/useSeo';

export default function Services() {
  useSeo('Services', 'Investment casting, precision machining, tooling, finishing and custom manufacturing support.');
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Manufacturing services."
        text="Provisional service entries — editable, and not to be read as confirmed capabilities until the company verifies them."
        crumbs={[{ label: 'Services' }]}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={s.slug}>
                <ServiceCard service={s} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
