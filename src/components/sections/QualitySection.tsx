import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';
import AnimatedSection, { Stagger, StaggerItem } from '../common/AnimatedSection';
import ImageWithFallback from '../common/ImageWithFallback';
import { qualityPillars } from '../../data/company';
import { images } from '../../config/images';

export default function QualitySection() {
  return (
    <section className="on-dark relative overflow-hidden bg-abyssal py-24 text-palladian sm:py-32">
      <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
      <Container className="relative grid gap-14 lg:grid-cols-12">
        <AnimatedSection className="lg:col-span-5">
          <p className="tech-label mb-6 flex items-center gap-3 text-flame">
            <span className="h-px w-8 bg-current" aria-hidden />
            Quality
          </p>
          <h2 className="display-lg uppercase">
            Precision is measured.
            <br />
            <span className="text-flame">Quality is delivered.</span>
          </h2>
          <p className="mt-6 max-w-md text-palladian/75">
            Placeholder quality philosophy. Replace the pillars with the company’s confirmed quality
            systems, inspection methods and certifications.
          </p>
          <ImageWithFallback
            src={images.inspection}
            alt="Inspection of a machined component"
            className="mt-10 aspect-[16/10] w-full"
          />
          <div className="mt-8">
            <Button to="/quality" variant="primary">
              Our quality approach
            </Button>
          </div>
        </AnimatedSection>

        <Stagger className="lg:col-span-7">
          <ol className="divide-y divide-palladian/15 border-y border-palladian/15">
            {qualityPillars.map((p, i) => (
              <StaggerItem key={p.title}>
                <li className="group grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[4rem_1fr]">
                  <span className="tech-label pt-1.5 text-flame">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-xl uppercase transition-colors group-hover:text-flame sm:text-2xl">{p.title}</h3>
                    <p className="mt-2 text-palladian/70">{p.text}</p>
                  </div>
                </li>
              </StaggerItem>
            ))}
          </ol>
          <p className="tech-label mt-6 text-palladian/55">
            Certifications: placeholders only — see{' '}
            <Link to="/quality" className="text-flame underline underline-offset-4">
              Quality page
            </Link>
            .
          </p>
        </Stagger>
      </Container>
    </section>
  );
}
