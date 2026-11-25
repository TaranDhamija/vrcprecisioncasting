import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Container from '../common/Container';
import { WhatsAppCta } from '../common/WhatsAppButton';
import { Logo } from './Navbar';
import { footerLinks } from '../../data/navigation';
import { services } from '../../data/services';
import { categories } from '../../data/products';
import { industries } from '../../data/industries';
import { siteConfig } from '../../config/site';

const colTitle = 'tech-label mb-5 text-flame';
const link = 'block py-1 text-palladian/75 transition-colors hover:text-flame';

export default function Footer() {
  return (
    <footer className="on-dark bg-abyssal text-palladian">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-6 max-w-sm font-display text-lg font-bold uppercase leading-tight">
              {siteConfig.tagline}
            </p>
            <div className="mt-8">
              <WhatsAppCta variant="primary" label="Chat on WhatsApp" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h3 className={colTitle}>Company</h3>
              {footerLinks.company.map((l) => (
                <Link key={l.to} to={l.to} className={link}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div>
              <h3 className={colTitle}>Services</h3>
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className={link}>
                  {s.title}
                </Link>
              ))}
            </div>
            <div>
              <h3 className={colTitle}>Products</h3>
              {categories.map((c) => (
                <Link key={c} to={`/products?category=${encodeURIComponent(c)}`} className={link}>
                  {c}
                </Link>
              ))}
            </div>
            <div>
              <h3 className={colTitle}>Industries</h3>
              {industries.map((i) => (
                <Link key={i.slug} to="/industries" className={link}>
                  {i.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-palladian/15 pt-10 sm:grid-cols-3">
          <a href={siteConfig.phone.tel} className="flex items-start gap-3 hover:text-flame">
            <Phone size={18} className="mt-1 shrink-0 text-flame" aria-hidden />
            <span>{siteConfig.phone.display}</span>
          </a>
          <span className="flex items-start gap-3 text-palladian/75">
            <Mail size={18} className="mt-1 shrink-0 text-flame" aria-hidden />
            {siteConfig.email}
          </span>
          <span className="flex items-start gap-3 text-palladian/75">
            <MapPin size={18} className="mt-1 shrink-0 text-flame" aria-hidden />
            {siteConfig.address}
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-palladian/15 pt-6 text-sm text-palladian/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {siteConfig.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-flame" aria-label={`${s.label} (placeholder link)`}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
