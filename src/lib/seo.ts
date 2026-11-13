import type { MetaDescriptor } from 'react-router';

export interface SeoArgs {
  title: string;
  description: string;
}

/**
 * Metadados padrão por página (title, description e Open Graph).
 * Fonte única para SEO — os componentes de página usam este helper.
 */
export function seo({ title, description }: SeoArgs): MetaDescriptor[] {
  return [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
  ];
}
