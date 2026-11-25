import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import CTASection from '../components/common/CTASection';
import { faqs } from '../data/company';
import { useSeo } from '../hooks/useSeo';

export default function FAQ() {
  useSeo('FAQ', 'Frequently asked questions about investment casting and submitting an enquiry.');
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        text="Editable illustrative answers."
        crumbs={[{ label: 'FAQ' }]}
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <ul className="divide-y divide-abyssal/15 border-y border-abyssal/15">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <h2>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl font-bold uppercase hover:text-truffle sm:text-2xl"
                    >
                      {f.q}
                      <Plus
                        size={22}
                        aria-hidden
                        className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-truffle' : ''}`}
                      />
                    </button>
                  </h2>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 text-abyssal/75">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
