/**
 * Worker do portal — entry point do Cloudflare Workers (ENABLER-0003).
 *
 * Roteamento:
 * - `GET /api/health` → endpoint server-side de smoke (TASK-0057).
 * - demais rotas → delegadas ao binding `ASSETS` (assets estáticos, pass-through).
 */

export interface Env {
  /** Binding dos assets estáticos, declarado em `wrangler.jsonc` (`assets.binding`). */
  ASSETS: Fetcher;
}

/** Subset mínimo de `Fetcher` (evita dependência de `@cloudflare/workers-types`). */
interface Fetcher {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Rotas server-side (`/api/*`). Base para o formulário de leads da S7.
    if (url.pathname === '/api/health') {
      return Response.json({ status: 'ok' });
    }

    // Demais rotas: assets estáticos (pass-through, sem regressão).
    return env.ASSETS.fetch(request);
  },
};
