import type { MetaFunction } from 'react-router';
import { contatoContent } from '@/content/contato';
import { siteContent } from '@/content/site';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const meta: MetaFunction = () => [
  { title: `Contato · ${siteContent.shortName}` },
  { name: 'description', content: contatoContent.description },
];

export default function Contato() {
  const { kicker, title, description, channels } = contatoContent;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Badge>{kicker}</Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted">{description}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {channels.map((channel) => (
            <Button key={channel.href} variant="primary" href={channel.href}>
              {channel.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
