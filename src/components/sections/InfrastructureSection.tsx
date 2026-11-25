import Container from '../common/Container';
import Button from '../common/Button';
import AnimatedSection from '../common/AnimatedSection';
import ImageWithFallback from '../common/ImageWithFallback';
import { images } from '../../config/images';

export default function InfrastructureSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-4 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-8">
            <ImageWithFallback src={images.factory} alt="Industrial production floor" className="aspect-[16/10] w-full" />
          </AnimatedSection>
          <AnimatedSection className="grid grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-1" delay={0.1}>
            <ImageWithFallback src={images.machinery} alt="Manufacturing equipment" className="aspect-[4/3] w-full lg:aspect-auto lg:h-full" />
            <ImageWithFallback src={images.cnc} alt="CNC machining" className="aspect-[4/3] w-full lg:aspect-auto lg:h-full" />
          </AnimatedSection>
        </div>
        <AnimatedSection className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="tech-label mb-5 flex items-center gap-3 text-truffle">
              <span className="h-px w-8 bg-current" aria-hidden />
              Infrastructure
            </p>
            <h2 className="display-lg uppercase">The facility behind the part.</h2>
            <p className="mt-6 text-abyssal/75">
              Temporary imagery shown. Facility details, equipment and capacity will be added once confirmed.
            </p>
          </div>
          <Button to="/infrastructure" variant="dark">
            Explore our facility
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
