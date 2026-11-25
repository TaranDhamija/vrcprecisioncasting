import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Container from './Container';
import Breadcrumbs from './Breadcrumbs';
import { motionConfig } from '../../config/theme';

interface Props {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  crumbs: { label: string; to?: string }[];
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, text, crumbs, children }: Props) {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden border-b border-abyssal/10 pt-[calc(var(--header-h)+3rem)] pb-16 sm:pb-24">
      <div className="blueprint-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <Container className="relative">
        <Breadcrumbs items={crumbs} />
        <motion.div
          className="mt-10 max-w-5xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: motionConfig.ease }}
        >
          <p className="tech-label mb-6 flex items-center gap-3 text-truffle">
            <span className="h-px w-8 bg-current" aria-hidden />
            {eyebrow}
          </p>
          <h1 className="display-xl uppercase">{title}</h1>
          {text && <p className="mt-8 max-w-2xl text-lg text-abyssal/75">{text}</p>}
          {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
        </motion.div>
      </Container>
    </section>
  );
}
