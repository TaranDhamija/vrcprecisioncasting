import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import AnimatedSection, { Stagger, StaggerItem } from '../common/AnimatedSection';
import IndustryCard from '../cards/IndustryCard';
import { industries } from '../../data/industries';

export default function IndustriesSection() {
  return (
    <section className="bg-oatmeal/40 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Industries"
            title="Built for demanding sectors."
            text="Illustrative industry categories — to be confirmed against the sectors the company actually serves."
            action={
              <Button to="/industries" variant="outline">
                All industries
              </Button>
            }
          />
        </AnimatedSection>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {industries.map((ind, i) => (
            <StaggerItem key={ind.slug} className={i % 3 === 1 ? 'md:translate-y-8' : ''}>
              <IndustryCard industry={ind} tall={i % 2 === 0} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
