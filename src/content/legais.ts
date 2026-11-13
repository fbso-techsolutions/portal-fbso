/**
 * Conteúdo das páginas legais — texto fixo/padrão (decisão PENDENCY-0005).
 * A revisão jurídica definitiva é pós-MVP.
 */
export interface LegalPageContent {
  title: string;
  updated: string;
  paragraphs: string[];
}

export interface LegaisContent {
  privacidade: LegalPageContent;
  termos: LegalPageContent;
}

export const legaisContent: LegaisContent = {
  privacidade: {
    title: 'Política de Privacidade',
    updated: 'Última atualização: novembro de 2026',
    paragraphs: [
      'A FBSO Technology Solutions respeita a sua privacidade. Este texto é um padrão provisório e será substituído pela versão jurídica definitiva.',
      'Os dados fornecidos pelos canais de contato são usados exclusivamente para responder às suas solicitações.',
    ],
  },
  termos: {
    title: 'Termos de Uso',
    updated: 'Última atualização: novembro de 2026',
    paragraphs: [
      'Ao acessar este portal, você concorda com estes termos. Este texto é um padrão provisório e será substituído pela versão jurídica definitiva.',
      'O conteúdo do portal é informativo e pode ser alterado sem aviso prévio.',
    ],
  },
};
