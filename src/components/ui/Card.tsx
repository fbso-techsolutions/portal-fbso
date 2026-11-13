import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Elevação no hover (lift + borda) — opcional. */
  hoverable?: boolean;
  children: ReactNode;
}

/** Componente base `Card` — borda `line`, raio `soft`, fundo branco. */
export default function Card({ hoverable = false, children, className = '', ...rest }: CardProps) {
  const base = 'rounded-soft border border-line bg-white p-6';
  const hover = hoverable
    ? 'transition duration-200 hover:-translate-y-1 hover:border-blue hover:shadow-soft'
    : '';
  return (
    <div className={`${base} ${hover} ${className}`} {...rest}>
      {children}
    </div>
  );
}
