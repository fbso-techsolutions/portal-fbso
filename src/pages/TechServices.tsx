import type { MetaFunction } from 'react-router';
import { techServicesContent } from '@/content/techservices';
import { siteContent } from '@/content/site';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const meta: MetaFunction = () => [
  { title: `TechServices · ${siteContent.shortName}` },
  { name: 'description', content: techServicesContent.description },
];

export default function TechServices() {
  const { kicker, title, description, fronts } = techServicesContent;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Badge>{kicker}</Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted">{description}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fronts.map((front) => (
            <Card key={front.title}>
              <h2 className="text-lg font-bold text-navy">{front.title}</h2>
              <p className="mt-2 text-sm text-muted">{front.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
