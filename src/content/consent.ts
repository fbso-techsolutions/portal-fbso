/**
 * Conteúdo do banner de consentimento (US-FEAT-0006.0006-0030).
 * Fonte única do texto — o componente não deve ter literais hardcoded.
 */
export interface ConsentContent {
  /** Texto do aviso exibido no banner. */
  message: string;
  /** Rótulo do botão de aceitar. */
  acceptLabel: string;
  /** Rótulo do botão de recusar. */
  declineLabel: string;
  /** Rótulo do link para a política de privacidade. */
  privacyLinkLabel: string;
  /** URL da política de privacidade. */
  privacyHref: string;
}

export const consentContent: ConsentContent = {
  message:
    'Usamos cookies para medir o tráfego e melhorar sua experiência, em conformidade com a LGPD. Ao aceitar, você autoriza a coleta de dados de navegação; ao recusar, nenhum rastreamento é ativado.',
  acceptLabel: 'Aceitar',
  declineLabel: 'Recusar',
  privacyLinkLabel: 'Política de Privacidade',
  privacyHref: '/privacidade',
};
