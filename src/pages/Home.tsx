import type { MetaFunction } from 'react-router';
import { homeContent } from '@/content/home';
import { siteContent } from '@/content/site';

export const meta: MetaFunction = () => [
  { title: siteContent.title },
  { name: 'description', content: siteContent.description },
  { property: 'og:title', content: siteContent.title },
  { property: 'og:description', content: siteContent.description },
  { property: 'og:type', content: 'website' },
];

export default function Home() {
  return (
    <section className="max-w-3xl text-center">
      <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">{homeContent.title}</h1>

      <p className="text-lg leading-relaxed text-[#b8c5d6]">{homeContent.lead}</p>

      <span className="mt-6 inline-block rounded-full border border-[#1e88e5] px-4 py-2 text-sm text-[#90caf9]">
        {homeContent.badge}
      </span>
    </section>
  );
}
