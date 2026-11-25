import type { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  dark?: boolean;
  align?: 'left' | 'center';
  action?: ReactNode;
}

export default function SectionHeader({ eyebrow, title, text, dark, align = 'left', action }: Props) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
        align === 'center' ? 'items-center text-center md:flex-col md:items-center' : ''
      }`}
    >
      <div className="max-w-3xl">
        {eyebrow && (
          <p className={`tech-label mb-5 flex items-center gap-3 ${dark ? 'text-flame' : 'text-truffle'}`}>
            <span className="h-px w-8 bg-current" aria-hidden />
            {eyebrow}
          </p>
        )}
        <h2 className={`display-lg uppercase ${dark ? 'text-palladian' : 'text-abyssal'}`}>{title}</h2>
        {text && (
          <p className={`mt-6 max-w-2xl ${dark ? 'text-palladian/75' : 'text-abyssal/75'}`}>{text}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
