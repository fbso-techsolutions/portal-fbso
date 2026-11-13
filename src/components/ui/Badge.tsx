import type { ReactNode } from 'react';

interface BadgeProps {
  /** Texto curto do kicker/eyebrow. */
  children: ReactNode;
}

/** Componente base `Badge`/eyebrow — kicker uppercase com marcador (linha mint). */
export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-blue">
      <span aria-hidden="true" className="h-0.5 w-6 bg-mint" />
      {children}
    </span>
  );
}
