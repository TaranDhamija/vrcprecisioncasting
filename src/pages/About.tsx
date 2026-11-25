import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import AnimatedSection, { Stagger, StaggerItem } from '../components/common/AnimatedSection';
import ImageWithFallback from '../components/common/ImageWithFallback';
import CTASection from '../components/common/CTASection';
import { approachSteps, vision } from '../data/company';
import { images } from '../config/images';
import { useSeo } from '../hooks/useSeo';

export default function About() {
  useSeo('About Us', 'About VR Precision Casting — engineering with purpose, manufacturing with precision.');
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Engineering with purpose.
            <br />
            Manufacturing with precision.
          </>
        }
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="py-24 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-6">
            <SectionHeader eyebrow="Our story" title="A company story, ready to be written." />
            <p className="mt-8 max-w-xl">
              This section is an editable placeholder. Add the company’s history, founding story,
              leadership and milestones once confirmed — nothing here should be treated as fact until then.
            </p>
            <p className="mt-4 max-w-xl text-abyssal/75">
              VR Precision Casting focuses on investment casting, precision metal casting and engineered
              metal components.
            </p>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-6" delay={0.1}>
            <ImageWithFallback src={images.factory} alt="Manufacturing floor" className="aspect-[4/3] w-full" />
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-oatmeal/40 py-24 sm:py-28">
        <Container>
          <Stagger className="grid gap-5 md:grid-cols-2">
            {[
              { k: 'Vision', t: vision.vision },
              { k: 'Mission', t: vision.mission },
            ].map((v) => (
              <StaggerItem key={v.k}>
                <div className="h-full border border-abyssal/20 bg-palladian p-8 sm:p-12">
                  <p className="tech-label text-truffle">{v.k}</p>
                  <p className="mt-6 font-display text-xl font-bold leading-snug sm:text-2xl">{v.t}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-5">
            <SectionHeader eyebrow="Philosophy" title="Precision is a discipline." />
          </AnimatedSection>
          <AnimatedSection className="space-y-5 lg:col-span-7" delay={0.1}>
            <p>
              Precision is not a single step — it is the result of clear requirements, careful process
              planning and honest inspection at every stage.
            </p>
            <p className="text-abyssal/75">
              Reliability comes from engineering discipline: understanding the application, controlling
              the process and communicating clearly with the customer. Replace this editorial copy with the
              company’s own manufacturing philosophy.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="on-dark bg-fantastic py-24 text-palladian sm:py-28">
        <Container>
          <AnimatedSection>
            <SectionHeader
              dark
              eyebrow="Our approach"
              title="From requirement to delivery."
              text="A proposed workflow — not a verified company procedure."
            />
          </AnimatedSection>
          <Stagger className="mt-14 grid gap-px bg-palladian/15 sm:grid-cols-2 lg:grid-cols-5">
            {approachSteps.map((s) => (
              <StaggerItem key={s.n} className="bg-fantastic">
                <div className="h-full p-6 sm:p-7">
                  <span className="font-mono text-3xl text-flame">{s.n}</span>
                  <h3 className="mt-6 text-lg uppercase">{s.title}</h3>
                  <p className="mt-3 text-sm text-palladian/70">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
