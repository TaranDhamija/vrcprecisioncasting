# VR Precision Casting — Website

React + TypeScript + Vite + Tailwind CSS + React Router + Framer Motion + Lucide.

```bash
npm install
npm run dev      # development
npm run build    # type-check + production build
```

## Where to edit content

| What | File |
| --- | --- |
| Phone, WhatsApp number/message, email, address, socials | `src/config/site.ts` |
| Images (all temporary stock URLs) | `src/config/images.ts` |
| Services (`/services/:slug`) | `src/data/services.ts` |
| Products (`/products/:slug`) and categories | `src/data/products.ts` |
| Industries | `src/data/industries.ts` |
| About, quality, infrastructure, FAQ copy | `src/data/company.ts` |
| Navigation | `src/data/navigation.ts` |
| Colour palette | `src/styles/globals.css`, `tailwind.config.js` |

## Notes

- All company facts are placeholders (no history, certifications, specs or address are invented).
- The contact form validates client-side and does **not** send anything; wire `submitEnquiry` in `src/utils/enquiry.ts` to a backend later.
- Images load from Unsplash and fall back to a designed placeholder if a URL fails. Replace with company photography.
- For production hosting of a SPA, configure a fallback to `index.html` for client-side routes.
