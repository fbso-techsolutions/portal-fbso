/**
 * Catálogo SaaS — fonte única dos produtos (Educatio, Fiscalia, Mercator, Materiae).
 * Conteúdo como dados: as páginas (/solucoes, /solucoes/:slug, Home) consomem este catálogo.
 */
export interface SaasProduct {
  /** Slug da URL (ex.: 'educatio'). */
  slug: string;
  /** Nome do produto. */
  name: string;
  /** Símbolo curto exibido no card. */
  symbol: string;
  /** Texto descritivo curto (card). */
  tagline: string;
  /** Descrição detalhada (página do produto). */
  description: string;
  /** Status do produto. */
  status: string;
  /** Link externo (site próprio) — vazio enquanto não existir. */
  link: string;
}

export const saasCatalog: SaasProduct[] = [
  {
    slug: 'educatio',
    name: 'Educatio',
    symbol: 'E',
    tagline: 'Gestão de processos e serviços educacionais em uma plataforma integrada.',
    description:
      'Plataforma integrada para gestão de processos e serviços educacionais — do acadêmico ao administrativo.',
    status: 'Em desenvolvimento',
    link: '',
  },
  {
    slug: 'fiscalia',
    name: 'Fiscalia',
    symbol: 'F',
    tagline: 'Gestão de processos e operações contábeis com organização e controle.',
    description:
      'Plataforma de contabilidade para gestão de processos e operações contábeis com organização e controle.',
    status: 'Em desenvolvimento',
    link: '',
  },
  {
    slug: 'mercator',
    name: 'Mercator',
    symbol: 'M',
    tagline: 'Gestão de operações e processos comerciais para o varejo.',
    description:
      'Plataforma de varejo para gestão de operações e processos comerciais, do estoque à venda.',
    status: 'Em desenvolvimento',
    link: '',
  },
  {
    slug: 'materiae',
    name: 'Materiae',
    symbol: 'Ma',
    tagline: 'Gestão do ciclo de vida de ativos eletrônicos e economia circular.',
    description: 'Plataforma de gestão do ciclo de vida de ativos eletrônicos e economia circular.',
    status: 'Em desenvolvimento',
    link: '',
  },
];
