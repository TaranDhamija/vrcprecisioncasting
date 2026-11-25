import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import AnimatedSection, { Stagger, StaggerItem } from '../components/common/AnimatedSection';
import ImageWithFallback from '../components/common/ImageWithFallback';
import CTASection from '../components/common/CTASection';
import { galleryImages, infrastructureAreas } from '../data/company';
import { useSeo } from '../hooks/useSeo';

export default function Infrastructure() {
  useSeo('Infrastructure', 'Factory, equipment and inspection environment of VR Precision Casting.');
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="The facility behind the part."
        text="Temporary imagery and placeholder copy. Facility size, equipment and capacity will be added once confirmed."
        crumbs={[{ label: 'Infrastructure' }]}
      />

      <section className="py-20 sm:py-28">
        <Container className="space-y-20">
          {infrastructureAreas.map((a, i) => (
            <AnimatedSection key={a.title} className="grid items-center gap-10 lg:grid-cols-12">
              <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
                <ImageWithFallback src={a.image} alt={a.title} className="aspect-[16/10] w-full" />
              </div>
              <div className="lg:col-span-5">
                <p className="tech-label text-truffle">{String(i + 1).padStart(2, '0')}</p>
                <h2 className="display-md mt-4 uppercase">{a.title}</h2>
                <p className="mt-5 text-abyssal/75">{a.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </Container>
      </section>

      <section className="bg-oatmeal/40 py-20 sm:py-28">
        <Container>
          <SectionHeader eyebrow="Gallery" title="Inside the process." />
          <Stagger className="mt-12 grid auto-rows-[14rem] gap-3 sm:auto-rows-[16rem] md:grid-cols-3">
            {galleryImages.map((g) => (
              <StaggerItem key={g.src} className={g.span}>
                <ImageWithFallback src={g.src} alt={g.alt} className="h-full w-full" imgClassName="transition-transform duration-700 hover:scale-105" />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
