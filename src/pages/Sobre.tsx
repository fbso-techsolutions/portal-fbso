import type { MetaFunction } from 'react-router';
import { sobreContent } from '@/content/sobre';
import { siteContent } from '@/content/site';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const meta: MetaFunction = () => [
  { title: `Sobre · ${siteContent.shortName}` },
  { name: 'description', content: sobreContent.description },
];

export default function Sobre() {
  const { kicker, title, description, mission, values } = sobreContent;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Badge>{kicker}</Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted">{description}</p>
        </div>

        <div className="mt-12 max-w-3xl">
          <h2 className="text-xl font-bold text-navy">Missão</h2>
          <p className="mt-2 text-base text-muted">{mission}</p>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold text-navy">Valores</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {values.map((value) => (
              <Card key={value}>
                <p className="text-sm font-semibold text-navy">{value}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
