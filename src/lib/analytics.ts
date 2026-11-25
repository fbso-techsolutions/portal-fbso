/**
 * GA4 (gtag.js direto) — TASK-0065.
 * Measurement ID do portal (PENDENCY-0014). O Consent Mode v2 (consent.ts) garante que a
 * coleta só ocorre após o aceite — recusa/ignorar = cookieless, sem cookies nem hits.
 */

export const GA4_MEASUREMENT_ID = 'G-LCBF75K8KW';

/** URL do gtag.js (carregado dinamicamente, após o consent default). */
export const GA4_GTAG_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;

/**
 * Snippet que carrega o `gtag.js` dinamicamente (após o consent default) e registra a config.
 * Carregamos via `document.createElement('script')` porque um `<script async src>` no JSX é
 * hoisted pelo React 19 para o topo do `<head>` — o que quebraria a ordem consent → gtag.js.
 */
export const GA4_CONFIG_SNIPPET = `(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = '${GA4_GTAG_SRC}';
  document.head.appendChild(s);
})();
window.gtag('config', '${GA4_MEASUREMENT_ID}');`;
