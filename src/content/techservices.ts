/**
 * Conteúdo da página TechServices — frentes da divisão de consultoria.
 */
export interface ServiceFront {
  title: string;
  description: string;
}

export interface TechServicesContent {
  kicker: string;
  title: string;
  description: string;
  fronts: ServiceFront[];
}

export const techServicesContent: TechServicesContent = {
  kicker: 'FBSO TechServices',
  title: 'Conhecimento técnico. Entrega consistente.',
  description:
    'A divisão de consultoria da FBSO apoia empresas na evolução de sistemas, plataformas e operações digitais.',
  fronts: [
    {
      title: 'Consultoria de TI',
      description:
        'Avaliação de contexto, processos e objetivos para transformar necessidades em caminhos tecnológicos viáveis.',
    },
    {
      title: 'Engenharia de software',
      description:
        'Desenvolvimento sob medida, arquitetura e integração orientados por qualidade e boas práticas.',
    },
    {
      title: 'Cloud & DevOps',
      description:
        'Infraestrutura em nuvem, automação e observabilidade para entrega contínua e operação confiável.',
    },
    {
      title: 'Sustentação & serviços',
      description:
        'Suporte e sustentação de sistemas e plataformas, mantendo estabilidade e evolução contínua.',
    },
    {
      title: 'IA em negócios',
      description:
        'Aplicação de inteligência artificial para otimizar processos e gerar eficiência operacional.',
    },
  ],
};
