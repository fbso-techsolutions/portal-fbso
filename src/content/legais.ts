/**
 * Conteúdo das páginas legais — Política de Privacidade e Termos de Uso.
 * Texto revisado (LGPD): base legal = consentimento (art. 7º-I) · transferência
 * internacional (art. 33) · direitos do titular (art. 18).
 */
export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalPageContent {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
}

export interface LegaisContent {
  privacidade: LegalPageContent;
  termos: LegalPageContent;
}

export const legaisContent: LegaisContent = {
  privacidade: {
    title: 'Política de Privacidade',
    updated: 'Última atualização: novembro de 2026',
    intro:
      'A FBSO Technology Solutions ("FBSO"), inscrita no CNPJ nº LZ.G8A.664/0001-93, respeita a sua privacidade. Este documento explica de forma simples como tratamos as informações coletadas em nosso site (https://fbso.com.br), em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e o Marco Civil da Internet (Lei nº 12.965/2014).',
    sections: [
      {
        heading: '1. Quais informações coletamos e por quê',
        bullets: [
          'Dados enviados voluntariamente (Formulário de Contato): nome e canal de retorno (e-mail ou telefone), usados exclusivamente para responder ao seu contato sobre consultoria ou produtos SaaS (Educatio, Fiscalia, Mercator e Materiae).',
          'Dados de navegação (Google Analytics 4): estatísticas de visitas, páginas acessadas, origem do acesso e cliques. Coletados somente se você clicar em "Aceitar" no banner de consentimento; se recusar ou ignorar, nenhum rastreamento é ativado.',
        ],
      },
      {
        heading: '2. Cookies e controle de consentimento',
        paragraphs: [
          'Utilizamos cookies essenciais (para lembrar a sua escolha no banner) e, mediante autorização expressa, os cookies do Google Analytics 4 (GA4). A base legal para os cookies de analytics é o consentimento (art. 7º, I, da LGPD).',
        ],
        bullets: [
          'Revogar o consentimento: a qualquer momento, no link "Preferências de Privacidade" no rodapé ou limpando os cookies do navegador.',
        ],
      },
      {
        heading: '3. Compartilhamento, transferência internacional e segurança',
        paragraphs: [
          'Não vendemos nem compartilhamos seus dados para fins de publicidade de terceiros.',
        ],
        bullets: [
          'Os dados de navegação (quando autorizados) são processados pelo Google (Google Analytics 4). Isso envolve transferência internacional de dados aos Estados Unidos, com base legal no art. 33, II, da LGPD — Cláusulas Contratuais Padrão (SCCs) e certificação EU-US Data Privacy Framework (DPF) — conforme os Data Processing Terms do Google.',
          'Os dados do formulário ficam restritos à equipe interna da FBSO e são protegidos por criptografia (HTTPS).',
        ],
      },
      {
        heading: '4. Retenção dos dados',
        bullets: [
          'Dados de navegação (GA4): 14 meses.',
          'Dados do formulário: mantidos apenas enquanto necessário ao atendimento da sua solicitação.',
        ],
      },
      {
        heading: '5. Seus direitos (LGPD — art. 18)',
        bullets: [
          'Confirmação da existência de tratamento e acesso aos seus dados;',
          'Correção de dados incompletos, inexatos ou desatualizados;',
          'Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;',
          'Portabilidade dos dados a outro fornecedor, mediante requisição expressa (art. 18, V);',
          'Revogação do consentimento, quando aplicável;',
          'Informação sobre as entidades com as quais compartilhamos seus dados.',
        ],
      },
      {
        heading: '6. Contato e encarregado (DPO)',
        paragraphs: ['Para exercer seus direitos ou tirar dúvidas, entre em contato:'],
        bullets: [
          'Encarregado (DPO): Daniel Vini — daniel.vini.fbso@gmail.com',
          'Canal de contato: contato@fbso.com.br',
        ],
      },
    ],
  },
  termos: {
    title: 'Termos de Uso',
    updated: 'Última atualização: novembro de 2026',
    intro:
      'Ao acessar o portal da FBSO Technology Solutions (https://fbso.com.br), você concorda com estes termos.',
    sections: [
      {
        heading: '1. Objeto',
        paragraphs: [
          'Este portal é informativo e apresenta a FBSO Technology Solutions, a divisão FBSO TechServices e os produtos SaaS (Educatio, Fiscalia, Mercator e Materiae).',
        ],
      },
      {
        heading: '2. Uso do conteúdo',
        bullets: [
          'O conteúdo é de propriedade da FBSO e não pode ser reproduzido sem autorização.',
          'As informações podem ser alteradas sem aviso prévio.',
        ],
      },
      {
        heading: '3. Responsabilidade',
        paragraphs: [
          'A FBSO não se responsabiliza por decisões tomadas com base no conteúdo do portal, nem por indisponibilidades temporárias.',
        ],
      },
      {
        heading: '4. Legislação e foro',
        paragraphs: [
          'Estes termos são regidos pela legislação brasileira. Dúvidas: contato@fbso.com.br.',
        ],
      },
    ],
  },
};
