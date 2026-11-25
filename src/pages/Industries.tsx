import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import { Stagger, StaggerItem } from '../components/common/AnimatedSection';
import IndustryCard from '../components/cards/IndustryCard';
import CTASection from '../components/common/CTASection';
import { industries } from '../data/industries';
import { useSeo } from '../hooks/useSeo';

export default function Industries() {
  useSeo('Industries', 'Illustrative industry sectors for precision cast and machined components.');
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sectors we can support."
        text="Illustrative sectors only — to be confirmed by the company before being presented as industries served."
        crumbs={[{ label: 'Industries' }]}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <StaggerItem key={ind.slug}>
                <IndustryCard industry={ind} tall={i % 3 !== 1} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
