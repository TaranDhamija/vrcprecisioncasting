import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import AnimatedSection, { Stagger, StaggerItem } from '../common/AnimatedSection';
import CapabilityCard from '../cards/CapabilityCard';
import { capabilities } from '../../data/company';

export default function CapabilitiesSection() {
  return (
    <section className="bg-oatmeal/40 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Manufacturing capabilities"
            title="From wax pattern to finished component."
            text="Provisional capability overview — editable content, to be confirmed against the company’s actual capabilities."
            action={
              <Button to="/services" variant="outline">
                All services
              </Button>
            }
          />
        </AnimatedSection>
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <StaggerItem key={c.slug}>
              <CapabilityCard {...c} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
