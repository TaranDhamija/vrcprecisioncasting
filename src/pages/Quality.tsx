import { BadgeCheck } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import AnimatedSection, { Stagger, StaggerItem } from '../components/common/AnimatedSection';
import ImageWithFallback from '../components/common/ImageWithFallback';
import CTASection from '../components/common/CTASection';
import { certificationPlaceholders, qualityPillars } from '../data/company';
import { images } from '../config/images';
import { useSeo } from '../hooks/useSeo';

const extra = [
  { title: 'Testing', text: 'Placeholder: describe confirmed testing capability. Nothing is claimed here.' },
  { title: 'Dimensional Inspection', text: 'Placeholder: list confirmed measuring equipment and methods.' },
];

export default function Quality() {
  useSeo('Quality', 'Quality philosophy, inspection, traceability and process control.');
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title={
          <>
            Precision is measured.
            <br />
            Quality is delivered.
          </>
        }
        text="Placeholder content. Inspection equipment, testing capability and certifications will be added once confirmed."
        crumbs={[{ label: 'Quality' }]}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionHeader eyebrow="Philosophy" title="Quality is built in, not inspected in." />
            <p className="mt-6 max-w-xl text-abyssal/75">
              Editable philosophy copy. Describe how the company approaches quality from enquiry to delivery.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ImageWithFallback src={images.inspection} alt="Inspection" className="aspect-[4/3] w-full" />
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-oatmeal/40 py-20 sm:py-28">
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...qualityPillars, ...extra].map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="h-full border border-abyssal/15 bg-palladian p-7">
                  <span className="font-mono text-sm text-truffle">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-5 text-xl uppercase">{p.title}</h3>
                  <p className="mt-3 text-abyssal/70">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Certifications"
            title="Certifications — to be confirmed."
            text="These cards are placeholders only. No certification is claimed."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certificationPlaceholders.map((c) => (
              <div key={c} className="flex aspect-[4/3] flex-col items-center justify-center gap-3 border border-dashed border-abyssal/40 text-center text-abyssal/60">
                <BadgeCheck size={32} aria-hidden />
                <p className="tech-label">{c}</p>
                <p className="text-sm">Placeholder</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
