/**
 * Central site configuration.
 * Change the phone number, WhatsApp message or placeholders here — nothing else needs touching.
 */

const rawPhone = '+91 98762 66885';
const waNumber = '919876266885';
const waMessage =
  'Hello, I would like to enquire about your precision casting and manufacturing capabilities.';

export const siteConfig = {
  name: 'VR PRECISION CASTING',
  shortName: 'VR Precision Casting',
  tagline: 'ENGINEERED FOR PRECISION. TRUSTED TO DELIVER.',
  description:
    'VR Precision Casting — precision-engineered metal components through investment casting and advanced manufacturing.',
  phone: {
    display: rawPhone,
    tel: `tel:+${waNumber}`,
  },
  whatsapp: {
    number: waNumber,
    message: waMessage,
    url: `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`,
    baseUrl: `https://wa.me/${waNumber}`,
  },
  /** Placeholders — replace once confirmed by the company. */
  email: 'info@your-domain.example',
  address: 'Registered address to be confirmed',
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
} as const;

/** Builds a WhatsApp link with a custom prefilled message (e.g. for a specific product). */
export function whatsappLink(message: string = waMessage): string {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}
