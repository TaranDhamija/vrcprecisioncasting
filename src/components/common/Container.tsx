import type { ElementType, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Container({ children, className = '', as: Tag = 'div' }: Props) {
  return <Tag className={`mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12 ${className}`}>{children}</Tag>;
}
