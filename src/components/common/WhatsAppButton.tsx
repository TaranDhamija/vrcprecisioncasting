import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig, whatsappLink } from '../../config/site';
import Button from './Button';

export function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.45 9.45 0 0 1-1.45-5.04c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.23-4.25 9.47-9.5 9.47zM20.1 3.9A11.3 11.3 0 0 0 12.04.5C5.8.5.72 5.57.72 11.8c0 2 .52 3.94 1.51 5.65L.62 23.5l6.2-1.62a11.3 11.3 0 0 0 5.21 1.28h.01c6.24 0 11.32-5.07 11.32-11.3 0-3.02-1.18-5.86-3.26-7.96z" />
    </svg>
  );
}

/** Floating WhatsApp action — rendered once in PageLayout. */
export default function WhatsAppButton() {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={siteConfig.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VR Precision Casting on WhatsApp"
      initial={reduce ? false : { opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      whileHover={reduce ? undefined : { scale: 1.08 }}
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center rounded-full bg-abyssal text-flame shadow-lg ring-1 ring-flame/40 transition-colors hover:bg-flame hover:text-abyssal sm:bottom-7 sm:right-7"
      style={{ width: 52, height: 52 }}
    >
      <WhatsAppIcon size={26} />
    </motion.a>
  );
}

/** Inline WhatsApp CTA used in hero, footer, product and service pages. */
export function WhatsAppCta({
  message,
  label = 'WhatsApp Us',
  variant = 'outline',
  className = '',
}: {
  message?: string;
  label?: string;
  variant?: 'outline' | 'outlineLight' | 'dark' | 'primary';
  className?: string;
}) {
  return (
    <Button
      href={message ? whatsappLink(message) : siteConfig.whatsapp.url}
      external
      variant={variant}
      arrow={false}
      icon={<WhatsAppIcon size={18} />}
      className={className}
    >
      {label}
    </Button>
  );
}
