/**
 * Conteúdo da Home — hero institucional.
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

export interface HomeContent {
  hero: HeroContent;
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
};
