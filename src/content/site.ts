/**
 * Conteúdo institucional base do site.
 * Fonte única de textos globais — componentes não devem ter literais hardcoded.
 */
export interface NavItem {
  label: string;
  href: string;
}

export interface SiteContent {
  /** Nome completo da empresa (títulos, meta tags). */
  name: string;
  /** Marca curta exibida no header. */
  shortName: string;
  /** Complemento da marca (parte em destaque). */
  brandAccent: string;
  /** Assinatura/slogan institucional. */
  tagline: string;
  /** Texto do topbar. */
  topbarNote: string;
  /** Texto do CTA do header. */
  navCta: string;
  /** `<title>` padrão das páginas. */
  title: string;
  /** `meta description` padrão das páginas. */
  description: string;
  /** E-mail de contato. */
  contactEmail: string;
  /** Texto do rodapé (nome). */
  footer: string;
  /** Links institucionais do rodapé. */
  footerInstitutional: NavItem[];
  /** Links legais do rodapé. */
  footerLegal: NavItem[];
}

export const siteContent: SiteContent = {
  name: 'FBSO Technology Solutions',
  shortName: 'FBSO',
  brandAccent: 'TechSolutions',
  tagline: 'Tecnologia para transformar desafios em soluções.',
  topbarNote: 'Technology · Consulting · Software',
  navCta: 'Fale com a FBSO',
  title: 'FBSO TechSolutions | Tecnologia, Consultoria e Software',
  description:
    'FBSO Technology Solutions: tecnologia, consultoria e software para construir um futuro mais eficiente.',
  contactEmail: 'contato@fbso.com.br',
  footer: 'FBSO Technology Solutions',
  footerInstitutional: [
    { label: 'A empresa', href: '/sobre' },
    { label: 'FBSO TechServices', href: '/techservices' },
    { label: 'Soluções SaaS', href: '/solucoes' },
  ],
  footerLegal: [
    { label: 'Privacidade', href: '/privacidade' },
    { label: 'Termos', href: '/termos' },
  ],
};
