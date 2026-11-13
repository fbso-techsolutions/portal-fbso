/**
 * Conteúdo institucional base do site.
 * Fonte única de textos globais — componentes não devem ter literais hardcoded.
 */
export interface SiteContent {
  /** Nome completo da empresa (títulos, meta tags). */
  name: string;
  /** Marca curta exibida no header. */
  shortName: string;
  /** Assinatura/slogan institucional. */
  tagline: string;
  /** `<title>` padrão das páginas. */
  title: string;
  /** `meta description` padrão das páginas. */
  description: string;
  /** Texto do rodapé. */
  footer: string;
}

export const siteContent: SiteContent = {
  name: 'FBSO Technology Solutions',
  shortName: 'FBSO',
  tagline: 'Plataforma modular de soluções, para um futuro mais eficiente.',
  title: 'FBSO TechSolutions | Tecnologia, Consultoria e Software',
  description:
    'FBSO Technology Solutions: tecnologia, consultoria e software para construir um futuro mais eficiente.',
  footer: '© 2026 FBSO Technology Solutions',
};
