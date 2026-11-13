/**
 * Conteúdo da Home — hero, posicionamento, diferenciais e resumo TechServices.
 * Fonte única dos textos; os componentes não têm literais hardcoded.
 */
export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  highlight: string;
  copy: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  note: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface PositioningContent {
  kicker: string;
  title: string;
  description: string;
  pillars: Pillar[];
}

export interface ServicesContent {
  kicker: string;
  title: string;
  description: string;
  services: string[];
}

export interface Product {
  name: string;
  slug: string;
  symbol: string;
  tagline: string;
}

export interface ProductsContent {
  kicker: string;
  title: string;
  description: string;
  products: Product[];
}

export interface CtaContent {
  eyebrow: string;
  title: string;
  description: string;
  button: CtaLink;
}

export interface HomeContent {
  hero: HeroContent;
  positioning: PositioningContent;
  services: ServicesContent;
  products: ProductsContent;
  cta: CtaContent;
}

export const homeContent: HomeContent = {
  hero: {
    eyebrow: 'Tecnologia · Consultoria · Software',
    title: 'Transformamos desafios em',
    highlight: 'soluções inteligentes.',
    copy: 'Unimos engenharia de software, arquitetura tecnológica e visão de negócio para criar soluções que simplificam operações e impulsionam resultados.',
    primaryCta: { label: 'Conheça nossas soluções', href: '/solucoes' },
    secondaryCta: { label: 'Explore a consultoria', href: '/techservices' },
    note: 'Plataforma modular de soluções para um futuro mais eficiente.',
  },
  positioning: {
    kicker: 'Quem somos',
    title: 'Tecnologia com visão de negócio.',
    description:
      'A FBSO Technology Solutions combina conhecimento técnico e entendimento dos desafios empresariais para projetar, desenvolver e sustentar soluções digitais.',
    pillars: [
      {
        title: 'Excelência em engenharia',
        description:
          'Arquitetura, desenvolvimento e integração orientados por qualidade, segurança, escalabilidade e boas práticas.',
      },
      {
        title: 'Visão consultiva',
        description:
          'Entendimento do contexto, dos processos e dos objetivos para transformar necessidades em caminhos tecnológicos viáveis.',
      },
      {
        title: 'Inovação aplicada',
        description:
          'Soluções próprias e serviços que evoluem junto com as necessidades dos clientes e dos mercados.',
      },
    ],
  },
  services: {
    kicker: 'FBSO TechServices',
    title: 'Conhecimento técnico. Entrega consistente.',
    description:
      'Atuamos em consultoria e serviços de tecnologia, apoiando empresas na evolução de seus sistemas, plataformas e operações digitais.',
    services: [
      'Arquitetura de soluções',
      'Engenharia de software',
      'Desenvolvimento sob medida',
      'Integração de sistemas',
      'Cloud, DevOps e SRE',
      'Suporte e sustentação',
    ],
  },
  products: {
    kicker: 'Nosso ecossistema',
    title: 'Soluções para diferentes desafios.',
    description:
      'Plataformas SaaS concebidas para apoiar operações, organizar processos e gerar eficiência em diferentes segmentos.',
    products: [
      {
        name: 'Educatio',
        slug: 'educatio',
        symbol: 'E',
        tagline: 'Gestão de processos e serviços educacionais em uma plataforma integrada.',
      },
      {
        name: 'Fiscalia',
        slug: 'fiscalia',
        symbol: 'F',
        tagline: 'Gestão de processos e operações contábeis com organização e controle.',
      },
      {
        name: 'Mercator',
        slug: 'mercator',
        symbol: 'M',
        tagline: 'Gestão de operações e processos comerciais para o varejo.',
      },
      {
        name: 'Materiae',
        slug: 'materiae',
        symbol: 'Ma',
        tagline: 'Gestão do ciclo de vida de ativos eletrônicos e economia circular.',
      },
    ],
  },
  cta: {
    eyebrow: 'Vamos construir o próximo passo?',
    title: 'Seu próximo desafio pode começar aqui.',
    description: 'Converse com a FBSO sobre consultoria, tecnologia ou nossas plataformas.',
    button: { label: 'Entre em contato', href: '/contato' },
  },
};
