import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { mainNav } from '../../data/navigation';
import { siteConfig } from '../../config/site';
import Button from '../common/Button';
import { WhatsAppCta } from '../common/WhatsAppButton';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  const location = useLocation();
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="on-dark fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-abyssal text-palladian"
        >
          <div className="flex items-center justify-between px-5 py-5">
            <span className="tech-label text-flame">Menu</span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center border border-palladian/30"
            >
              <X size={20} aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 px-5 pb-6">
            <ul className="divide-y divide-palladian/10 border-y border-palladian/10">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <div className="flex items-center justify-between">
                    <Link to={item.to} className="flex-1 py-4 font-display text-2xl font-extrabold uppercase">
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={expanded === item.label}
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        className="flex h-11 w-11 items-center justify-center"
                      >
                        <ChevronDown
                          size={20}
                          aria-hidden
                          className={`transition-transform ${expanded === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence initial={false}>
                    {item.children && expanded === item.label && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link to={c.to} className="block py-2.5 pl-4 text-palladian/75 hover:text-flame">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 px-5 pb-8">
            <Button to="/contact" variant="primary" className="w-full">
              Request a Quote
            </Button>
            <WhatsAppCta variant="outlineLight" className="w-full" />
            <a href={siteConfig.phone.tel} className="tech-label block pt-2 text-center text-palladian/70">
              {siteConfig.phone.display}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
