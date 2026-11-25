/**
 * Worker do portal — entry point do Cloudflare Workers (ENABLER-0003 · TASK-0056).
 *
 * Pass-through: todo request é delegado ao binding `ASSETS` (assets estáticos),
 * preservando o comportamento atual (assets-only) sem regressão. O roteamento de
 * rotas server-side (`/api/*`) entra na TASK-0057.
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
    return env.ASSETS.fetch(request);
  },
};
