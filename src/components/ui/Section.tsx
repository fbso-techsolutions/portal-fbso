import type { ReactNode } from 'react';

interface SectionProps {
  /** Kicker (eyebrow) — texto curto em destaque, acima do título. */
  kicker?: string;
  /** Título da seção (h2). */
  title: string;
  /** Texto de apoio (copy) sob o título. */
  description?: string;
  /** Conteúdo da seção, abaixo do cabeçalho. */
  children?: ReactNode;
}

/** Componente base `Section` — cabeçalho (kicker + título + copy) + conteúdo. */
export default function Section({ kicker, title, description, children }: SectionProps) {
  return (
    <section className="py-20">
      <div className="mb-10 max-w-3xl">
        {kicker ? (
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue">
            {kicker}
          </span>
        ) : null}
        <h2 className="mt-2 mb-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
          {title}
        </h2>
        {description ? <p className="text-base text-muted">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
