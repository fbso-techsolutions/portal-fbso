/**
 * Conteúdo da página Sobre — posicionamento institucional (quem somos, missão, valores).
 */
export interface SobreContent {
  kicker: string;
  title: string;
  description: string;
  mission: string;
  values: string[];
}

export const sobreContent: SobreContent = {
  kicker: 'Quem somos',
  title: 'Tecnologia com visão de negócio.',
  description:
    'A FBSO Technology Solutions combina conhecimento técnico e entendimento dos desafios empresariais para projetar, desenvolver e sustentar soluções digitais.',
  mission:
    'Transformar desafios em soluções inteligentes, unindo engenharia de software, arquitetura tecnológica e visão de negócio.',
  values: ['Excelência em engenharia', 'Visão consultiva', 'Inovação aplicada'],
};
