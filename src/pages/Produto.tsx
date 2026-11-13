import type { MetaFunction } from 'react-router';
import { useParams } from 'react-router';
import { saasCatalog } from '@/content/saas-catalog';
import { siteContent } from '@/content/site';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const meta: MetaFunction = ({ params }) => {
  const product = saasCatalog.find((p) => p.slug === params.slug);
  return [
    { title: product ? `${product.name} · ${siteContent.shortName}` : 'Produto' },
    { name: 'description', content: product?.tagline ?? '' },
  ];
};

export default function Produto() {
  const { slug } = useParams();
  const product = saasCatalog.find((p) => p.slug === slug);

  if (!product) {
    return (
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="text-3xl font-bold tracking-tight text-navy md:text-5xl">
            Produto não encontrado
          </h1>
          <p className="mt-4 text-muted">O produto que você procura não existe.</p>
          <a href="/solucoes" className="mt-6 inline-block text-sm font-bold text-blue">
            ← Voltar para Soluções
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5">
        <Badge>Produto SaaS</Badge>
        <div className="mt-4 flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-soft bg-paper text-2xl font-extrabold text-blue">
            {product.symbol}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-navy md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-muted">{product.status}</p>
          </div>
        </div>

        <p className="mt-6 text-lg text-muted">{product.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {product.link ? (
            <Button variant="primary" href={product.link}>
              Acessar o produto
            </Button>
          ) : null}
          <Button variant="outline" href="/contato">
            Fale com a FBSO
          </Button>
        </div>
      </div>
    </section>
  );
}
