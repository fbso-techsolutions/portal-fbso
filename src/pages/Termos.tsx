import type { MetaFunction } from 'react-router';
import { legaisContent } from '@/content/legais';
import { siteContent } from '@/content/site';

export const meta: MetaFunction = () => [
  { title: `Termos · ${siteContent.shortName}` },
  { name: 'description', content: legaisContent.termos.title },
];

export default function Termos() {
  const { title, updated, paragraphs } = legaisContent.termos;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">{updated}</p>
        <div className="mt-6 space-y-4">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
