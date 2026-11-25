import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import ImageWithFallback from '../common/ImageWithFallback';
import { WhatsAppCta } from '../common/WhatsAppButton';
import { images } from '../../config/images';
import { motionConfig } from '../../config/theme';

const line = (delay: number, reduce: boolean | null) => ({
  initial: reduce ? false : { y: '110%' },
  animate: { y: 0 },
  transition: { duration: 0.9, ease: motionConfig.ease, delay },
});

export default function HomeHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%']);

  return (
    <section ref={ref} className="relative overflow-hidden pt-[var(--header-h)]">
      <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden />
      <Container className="relative grid min-h-[calc(100svh-var(--header-h))] items-center gap-10 py-12 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-7 lg:pr-6">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="tech-label mb-8 flex items-center gap-3 text-truffle"
          >
            <span className="h-px w-10 bg-current" aria-hidden />
            Investment casting · Engineered components
          </motion.p>

          <h1 className="display-xl uppercase">
            <span className="block overflow-hidden pb-1">
              <motion.span className="block" {...line(0.15, reduce)}>
                Engineered for
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span className="block text-truffle" {...line(0.27, reduce)}>
                Precision.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span className="block" {...line(0.39, reduce)}>
                Trusted to
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span className="block" {...line(0.51, reduce)}>
                Deliver.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-8 max-w-xl text-lg text-abyssal/75"
          >
            Precision-engineered metal components manufactured through advanced casting processes,
            uncompromising quality and a commitment to reliability.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button to="/services" variant="dark">
              Explore our capabilities
            </Button>
            <Button to="/contact" variant="primary">
              Request a quote
            </Button>
            <WhatsAppCta />
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1.2, ease: motionConfig.ease, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-abyssal lg:aspect-[3/4]">
            <motion.div style={{ y }} className="absolute inset-[-6%]">
              <ImageWithFallback
                src={images.heroCasting}
                alt="Precision cast metal components in an industrial setting"
                eager
                className="h-full w-full"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-abyssal/70 via-transparent to-transparent" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-palladian">
              <span className="tech-label">Fig. 01 — Cast component</span>
              <span className="tech-label text-flame">Ø ±0.00</span>
            </div>
          </div>
          <div className="absolute -bottom-3 -left-3 hidden h-24 w-24 border-b-2 border-l-2 border-truffle sm:block" aria-hidden />
          <div className="absolute -right-3 -top-3 hidden h-24 w-24 border-r-2 border-t-2 border-flame sm:block" aria-hidden />
        </motion.div>
      </Container>

      <a
        href="#overview"
        aria-label="Scroll to content"
        className="tech-label absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-abyssal/60 hover:text-truffle lg:flex"
      >
        Scroll
        <motion.span animate={reduce ? undefined : { y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={14} aria-hidden />
        </motion.span>
      </a>
    </section>
  );
}
