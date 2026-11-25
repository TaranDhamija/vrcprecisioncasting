import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../../config/site';
import Button from '../common/Button';
import { WhatsAppCta } from '../common/WhatsAppButton';

/** Contact details panel (placeholders flagged). Used on the Contact page. */
export default function ContactSection() {
  return (
    <div className="on-dark bg-fantastic p-7 text-palladian sm:p-9">
      <p className="tech-label text-flame">Direct contact</p>
      <ul className="mt-6 space-y-5">
        <li className="flex gap-4">
          <Phone size={20} className="mt-1 shrink-0 text-flame" aria-hidden />
          <div>
            <p className="tech-label text-palladian/60">WhatsApp / Phone</p>
            <a href={siteConfig.phone.tel} className="text-lg hover:text-flame">
              {siteConfig.phone.display}
            </a>
          </div>
        </li>
        <li className="flex gap-4">
          <Mail size={20} className="mt-1 shrink-0 text-flame" aria-hidden />
          <div>
            <p className="tech-label text-palladian/60">Email (placeholder)</p>
            <p className="text-lg">{siteConfig.email}</p>
          </div>
        </li>
        <li className="flex gap-4">
          <MapPin size={20} className="mt-1 shrink-0 text-flame" aria-hidden />
          <div>
            <p className="tech-label text-palladian/60">Address (placeholder)</p>
            <p className="text-lg">{siteConfig.address}</p>
          </div>
        </li>
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <WhatsAppCta variant="primary" label="WhatsApp" />
        <Button href={siteConfig.phone.tel} variant="outlineLight" arrow={false} icon={<Phone size={16} aria-hidden />}>
          Call
        </Button>
      </div>
    </div>
  );
}
