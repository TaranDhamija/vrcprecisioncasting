import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu } from 'lucide-react';
import { mainNav, type NavItem } from '../../data/navigation';
import { siteConfig } from '../../config/site';
import Button from '../common/Button';
import MobileMenu from './MobileMenu';

export function Logo({ dark }: { dark?: boolean }) {
  return (
    <Link to="/" aria-label="VR Precision Casting — home" className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center bg-abyssal font-display text-base font-extrabold text-flame">
        VR
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[0.95rem] font-extrabold tracking-[0.08em] ${dark ? 'text-palladian' : 'text-abyssal'}`}>
          PRECISION
        </span>
        <span className={`tech-label block pt-1 text-[0.62rem] ${dark ? 'text-flame' : 'text-truffle'}`}>
          Casting
        </span>
      </span>
    </Link>
  );
}

function Dropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname, location.search]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="flex items-center">
        <NavLink to={item.to} className={navCls}>
          {item.label}
        </NavLink>
        <button
          type="button"
          aria-label={`${item.label} submenu`}
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen((o) => !o)}
          className="-ml-2 p-1.5 text-abyssal/60 hover:text-truffle"
        >
          <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
        </button>
      </div>
      <AnimatePresence>
        {open && item.children && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full z-50 w-72 border border-abyssal/10 bg-palladian py-2 shadow-xl"
          >
            {item.children.map((c) => (
              <li key={c.to}>
                <Link
                  to={c.to}
                  className="block px-5 py-2.5 text-sm text-abyssal/80 transition-colors hover:bg-oatmeal/40 hover:text-truffle"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

const navCls = ({ isActive }: { isActive: boolean }) =>
  `relative px-3 py-2 font-display text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors hover:text-truffle ${
    isActive ? 'text-truffle' : 'text-abyssal'
  }`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-palladian/95 shadow-[0_1px_0_rgba(27,38,50,0.1)] backdrop-blur' : 'bg-palladian/80 backdrop-blur-sm'
        }`}
        style={{ height: 'var(--header-h)' }}
      >
        <div className="mx-auto flex h-full max-w-site items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {mainNav.map((item) =>
                item.children ? (
                  <Dropdown key={item.to} item={item} />
                ) : (
                  <li key={item.to}>
                    <NavLink to={item.to} end={item.to === '/'} className={navCls}>
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phone.tel}
              className="tech-label hidden text-abyssal/70 hover:text-truffle 2xl:block"
            >
              {siteConfig.phone.display}
            </a>
            <div className="hidden sm:block">
              <Button to="/contact" variant="primary" className="!px-5 !py-3">
                Request a Quote
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center border border-abyssal/30 text-abyssal xl:hidden"
            >
              <Menu size={20} aria-hidden />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
