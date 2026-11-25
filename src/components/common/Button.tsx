import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'primary' | 'dark' | 'outline' | 'outlineLight' | 'ghost';

interface Props {
  children: ReactNode;
  variant?: Variant;
  to?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  arrow?: boolean;
  className?: string;
  icon?: ReactNode;
}

const base =
  'group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-display text-[0.8rem] font-bold uppercase tracking-[0.12em] transition-all duration-300 active:translate-y-px disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary: 'bg-flame text-abyssal hover:bg-abyssal hover:text-flame',
  dark: 'bg-abyssal text-palladian hover:bg-truffle',
  outline: 'border border-abyssal text-abyssal hover:bg-abyssal hover:text-palladian',
  outlineLight: 'border border-palladian/60 text-palladian hover:bg-palladian hover:text-abyssal',
  ghost: 'px-0 py-1 text-abyssal border-b border-abyssal/40 hover:border-truffle hover:text-truffle',
};

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  external,
  onClick,
  type = 'button',
  disabled,
  arrow = true,
  className = '',
  icon,
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          size={16}
          aria-hidden
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </button>
  );
}
