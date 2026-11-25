import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { motionConfig } from '../../config/theme';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/** Fades and lifts content in when it scrolls into view. Honors reduced-motion. */
export default function AnimatedSection({ children, className = '', delay = 0, y = 28 }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: motionConfig.duration, ease: motionConfig.ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered grid/list wrapper — pair with <StaggerItem>. */
export function Stagger({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: motionConfig.stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: motionConfig.ease } },
      }}
    >
      {children}
    </motion.div>
  );
}
