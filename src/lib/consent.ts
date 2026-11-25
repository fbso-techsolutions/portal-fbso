/**
 * Consent Mode v2 (US-0028 · TASK-0063) — estado de consentimento do GA4.
 *
 * Default = tudo `denied` (analytics bloqueado antes da escolha). Após a escolha
 * no banner, `updateConsent` dispara `gtag('consent', 'update', …)`.
 */

export type ConsentValue = 'granted' | 'denied';

/** Estado default do Consent Mode v2 (tudo negado antes da escolha). */
export const CONSENT_DEFAULT = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
} as const;

/**
 * Snippet inline do `<head>`, antes do `gtag.js`: define `window.gtag` e dispara o
 * `consent default` (denied). Roda no parse do HTML, antes de qualquer script de analytics.
 */
export const CONSENT_DEFAULT_SNIPPET = `window.dataLayer = window.dataLayer || [];
window.gtag = function gtag() { window.dataLayer.push(arguments); };
window.gtag('consent', 'default', ${JSON.stringify(CONSENT_DEFAULT)});`;

/** Parâmetros do `consent update` após a escolha (puro, testável). */
export function consentUpdate(accepted: boolean): { analytics_storage: ConsentValue } {
  return { analytics_storage: accepted ? 'granted' : 'denied' };
}

/** Atualiza o Consent Mode após a escolha do visitante (aceite → granted; recusa → denied). */
export function updateConsent(accepted: boolean): void {
  window.gtag('consent', 'update', consentUpdate(accepted));
}

declare global {
  interface Window {
    /** gtag.js — injetado pelo snippet de consentimento (TASK-0063) e carregado na TASK-0065. */
    gtag: (command: string, ...args: unknown[]) => void;
  }
}
