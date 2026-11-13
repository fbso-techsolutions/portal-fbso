import type { MetaFunction } from 'react-router';
import { homeContent } from '@/content/home';
import { saasCatalog } from '@/content/saas-catalog';
import { siteContent } from '@/content/site';
import { seo } from '@/lib/seo';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const meta: MetaFunction = () =>
  seo({ title: siteContent.title, description: siteContent.description });

export default function Home() {
  const { hero, positioning, services, products, cta } = homeContent;

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

      {/* Posicionamento + diferenciais */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <Badge>{positioning.kicker}</Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {positioning.title}
            </h2>
            <p className="mt-4 text-base text-muted">{positioning.description}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {positioning.pillars.map((pillar) => (
              <Card key={pillar.title}>
                <h3 className="text-lg font-bold text-navy">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resumo TechServices */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <Badge>{services.kicker}</Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {services.title}
            </h2>
            <p className="mt-4 text-base text-muted">{services.description}</p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.services.map((service) => (
              <li key={service} className="flex items-center gap-2 text-sm text-ink">
                <span className="font-bold text-mint">✓</span> {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ecossistema SaaS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <Badge>{products.kicker}</Badge>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {products.title}
            </h2>
            <p className="mt-4 text-base text-muted">{products.description}</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {saasCatalog.map((product) => (
              <Card key={product.slug} hoverable>
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-soft bg-paper text-lg font-extrabold text-blue">
                  {product.symbol}
                </div>
                <h3 className="text-lg font-bold text-navy">{product.name}</h3>
                <p className="mt-2 text-sm text-muted">{product.tagline}</p>
                <a
                  href={`/solucoes/${product.slug}`}
                  className="mt-4 inline-block text-sm font-bold text-blue"
                >
                  Conheça o produto →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-start justify-between gap-6 rounded-soft bg-navy px-8 py-10 text-white md:flex-row md:items-center">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-mint">
                {cta.eyebrow}
              </span>
              <h2 className="mt-2 text-2xl font-bold md:text-3xl">{cta.title}</h2>
              <p className="mt-2 text-mist">{cta.description}</p>
            </div>
            <Button variant="primary" href={cta.button.href}>
              {cta.button.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
