import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  to?: string;
}

export default function Breadcrumbs({ items, dark }: { items: Crumb[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`tech-label ${dark ? 'text-palladian/70' : 'text-abyssal/60'}`}>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="hover:text-truffle">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight size={12} aria-hidden />
            {item.to && i < items.length - 1 ? (
              <Link to={item.to} className="hover:text-truffle">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={dark ? 'text-flame' : 'text-abyssal'}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
