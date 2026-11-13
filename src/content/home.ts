/**
 * Conteúdo da Home — placeholder de fundação ("hello world").
 * O conteúdo institucional real entra na FEATURE-0002.0002 (S4).
 */
export interface HomeContent {
  /** Título principal (h1). */
  title: string
  /** Texto de apoio sob o título. */
  lead: string
  /** Selo/status exibido abaixo do texto. */
  badge: string
}

export const homeContent: HomeContent = {
  title: 'hello world',
  lead: 'Portal em construção — a base do FBSO Corporate Portal está no ar.',
  badge: 'Sprint 1 · Fundação',
}
