import Container from './Container';
import Button from './Button';
import AnimatedSection from './AnimatedSection';
import { WhatsAppCta } from './WhatsAppButton';

interface Props {
  title?: string;
  text?: string;
}

export default function CTASection({
  title = "LET'S ENGINEER YOUR NEXT COMPONENT.",
  text = 'Have a component requirement or manufacturing enquiry? Connect with our team to discuss your requirements.',
}: Props) {
  return (
    <section className="on-dark relative overflow-hidden bg-fantastic py-20 text-palladian sm:py-28">
      <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
      <div className="absolute -right-24 top-0 h-full w-1/3 bg-truffle/20 [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]" aria-hidden />
      <Container className="relative">
        <AnimatedSection className="max-w-4xl">
          <p className="tech-label mb-6 flex items-center gap-3 text-flame">
            <span className="h-px w-8 bg-current" aria-hidden />
            Start an enquiry
          </p>
          <h2 className="display-lg uppercase">{title}</h2>
          <p className="mt-6 max-w-2xl text-palladian/75">{text}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact" variant="primary">
              Request a Quote
            </Button>
            <WhatsAppCta variant="outlineLight" />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
