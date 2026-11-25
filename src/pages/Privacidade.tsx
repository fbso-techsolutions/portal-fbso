import type { MetaFunction } from 'react-router';
import { legaisContent } from '@/content/legais';
import { siteContent } from '@/content/site';
import { seo } from '@/lib/seo';

export const meta: MetaFunction = () =>
  seo({
    title: `Privacidade · ${siteContent.shortName}`,
    description: legaisContent.privacidade.title,
  });

export default function Privacidade() {
  const { title, updated, intro, sections } = legaisContent.privacidade;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">{updated}</p>
        {intro && <p className="mt-6 text-base text-muted">{intro}</p>}
        <div className="mt-6 space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold text-navy">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-base text-muted">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-muted">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
