import type { MetaFunction } from 'react-router';
import { homeContent } from '@/content/home';
import { saasCatalog } from '@/content/saas-catalog';
import { siteContent } from '@/content/site';
import { seo } from '@/lib/seo';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const meta: MetaFunction = () =>
  seo({
    title: `Soluções · ${siteContent.shortName}`,
    description: homeContent.products.description,
  });

export default function Solucoes() {
  const { products } = homeContent;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Badge>{products.kicker}</Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-5xl">
            {products.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{products.description}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {saasCatalog.map((product) => (
            <Card key={product.slug} hoverable>
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-soft bg-paper text-lg font-extrabold text-blue">
                {product.symbol}
              </div>
              <h2 className="text-lg font-bold text-navy">{product.name}</h2>
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
  );
}
