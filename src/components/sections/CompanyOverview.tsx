import Container from '../common/Container';
import Button from '../common/Button';
import AnimatedSection from '../common/AnimatedSection';
import ImageWithFallback from '../common/ImageWithFallback';
import { images } from '../../config/images';

export default function CompanyOverview() {
  return (
    <section id="overview" className="py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <AnimatedSection className="relative lg:col-span-6">
          <ImageWithFallback
            src={images.engineering}
            alt="Engineers reviewing a component"
            className="aspect-[4/5] w-full"
          />
          <div className="absolute -bottom-8 right-0 hidden w-2/5 border-8 border-palladian sm:block">
            <ImageWithFallback src={images.metalParts} alt="Cast metal parts" className="aspect-square w-full" />
          </div>
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-6 lg:pl-10" delay={0.1}>
          <p className="tech-label mb-6 flex items-center gap-3 text-truffle">
            <span className="h-px w-8 bg-current" aria-hidden />
            Who we are
          </p>
          <h2 className="display-lg uppercase">
            Built on engineering.
            <br />
            Defined by precision.
          </h2>
          <p className="mt-8 max-w-xl">
            VR Precision Casting is a precision engineering and manufacturing company focused on
            investment casting, precision metal casting and engineered metal components.
          </p>
          <p className="mt-4 max-w-xl text-abyssal/75">
            We work with OEMs, engineering firms and procurement teams to turn drawings into reliable,
            repeatable components. <span className="text-truffle">[Editable introduction — replace with the company’s own story.]</span>
          </p>
          <div className="mt-10">
            <Button to="/about" variant="dark">
              About VR Precision Casting
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
