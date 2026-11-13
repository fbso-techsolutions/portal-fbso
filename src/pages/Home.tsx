import type { MetaFunction } from 'react-router';
import { homeContent } from '@/content/home';
import { siteContent } from '@/content/site';
import Button from '@/components/ui/Button';

export const meta: MetaFunction = () => [
  { title: siteContent.title },
  { name: 'description', content: siteContent.description },
  { property: 'og:title', content: siteContent.title },
  { property: 'og:description', content: siteContent.description },
  { property: 'og:type', content: 'website' },
];

export default function Home() {
  const { hero } = homeContent;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-mint">
            <span aria-hidden="true" className="h-0.5 w-6 bg-mint" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            {hero.title} <span className="text-sky">{hero.highlight}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-mist">{hero.copy}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Button>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center px-2 py-3 text-sm font-bold text-white hover:text-sky"
            >
              {hero.secondaryCta.label} →
            </a>
          </div>

          <p className="mt-8 text-sm text-mist">{hero.note}</p>
        </div>
      </section>
    </>
  );
}
