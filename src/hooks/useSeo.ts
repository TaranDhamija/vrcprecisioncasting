import { useEffect } from 'react';
import { siteConfig } from '../config/site';

/** Sets the document title and meta description per page (swap for react-helmet / SSR later). */
export function useSeo(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteConfig.shortName}` : siteConfig.shortName;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description ?? siteConfig.description);
  }, [title, description]);
}
