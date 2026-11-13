/**
 * Conteúdo da página Contato — canais de contato e comerciais.
 */
export interface ContactChannel {
  label: string;
  href: string;
}

export interface ContatoContent {
  kicker: string;
  title: string;
  description: string;
  channels: ContactChannel[];
}

export const contatoContent: ContatoContent = {
  kicker: 'Contato',
  title: 'Fale com a FBSO.',
  description: 'Converse com a FBSO sobre consultoria, tecnologia ou nossas plataformas SaaS.',
  channels: [{ label: 'contato@fbso.com.br', href: 'mailto:contato@fbso.com.br' }],
};
