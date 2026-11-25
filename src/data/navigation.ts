import { services } from './services';
import { categories } from './products';

export interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    children: services.map((s) => ({ label: s.title, to: `/services/${s.slug}` })),
  },
  {
    label: 'Products',
    to: '/products',
    children: categories.map((c) => ({
      label: c,
      to: `/products?category=${encodeURIComponent(c)}`,
    })),
  },
  { label: 'Industries', to: '/industries' },
  { label: 'Quality', to: '/quality' },
  { label: 'Infrastructure', to: '/infrastructure' },
  { label: 'Contact', to: '/contact' },
];

export const footerLinks = {
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Quality', to: '/quality' },
    { label: 'Infrastructure', to: '/infrastructure' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
  ],
};
