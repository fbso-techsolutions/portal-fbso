/**
 * Worker do portal — entry point do Cloudflare Workers (ENABLER-0003 · ENABLER-0005).
 *
 * Roteamento:
 * - `GET /health` e `/api/health` → health check (responde 200 sempre, mesmo em manutenção).
 * - `maintenance = on` (KV) → página de manutenção (HTTP 503 + Retry-After), exceto exceções.
 * - Exceções de rota: `/robots.txt` e `/privacidade` servem normalmente mesmo em `on`.
 * - demais rotas → binding `ASSETS` (assets estáticos, pass-through).
 */

export interface Env {
  /** Binding dos assets estáticos (`wrangler.jsonc` → `assets.binding`). */
  ASSETS: Fetcher;
  /** KV do modo manutenção (`wrangler.jsonc` → `kv_namespaces`). */
  KV: KVNamespace;
}

/** Subset mínimo de `Fetcher` (evita dependência de `@cloudflare/workers-types`). */
interface Fetcher {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
}

/** Subset mínimo de `KVNamespace` (evita dependência de `@cloudflare/workers-types`). */
interface KVNamespace {
  get(key: string): Promise<string | null>;
}

/** Chave que liga/desliga o modo manutenção (ENABLER-0005). */
const MAINTENANCE_KEY = 'maintenance';

/** Rotas de health check — respondem 200 mesmo em manutenção (monitoramento). */
const HEALTH_PATHS = new Set(['/health', '/api/health']);

/** Rotas que NÃO entram em modo manutenção (SEO/legal) — TASK-0061. */
const MAINTENANCE_EXEMPT = new Set(['/robots.txt', '/privacidade']);

/** Página de manutenção (branding + mensagem neutra, sem assets externos). */
const MAINTENANCE_HTML = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Em manutenção — FBSO TechSolutions</title>
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body {
        margin: 0; min-height: 100vh; display: grid; place-items: center;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        background: #0b1220; color: #e6edf3; padding: 24px;
      }
      main { max-width: 520px; text-align: center; }
      h1 { font-size: 1.75rem; margin: 0 0 4px; }
      h1 span { color: #38bdf8; }
      h2 { font-size: 1.1rem; font-weight: 600; margin: 16px 0 8px; }
      p { color: #9fb3c8; line-height: 1.6; margin: 0 0 8px; }
      a { color: #38bdf8; text-decoration: none; }
    </style>
  </head>
  <body>
    <main>
      <h1>FBSO <span>TechSolutions</span></h1>
      <h2>Estamos temporariamente indisponíveis</h2>
      <p>Nosso portal está passando por uma manutenção. Já estamos trabalhando para voltar o mais rápido possível.</p>
      <p>Se precisar, fale conosco em <a href="mailto:contato@fbso.com.br">contato@fbso.com.br</a>.</p>
    </main>
  </body>
</html>`;

/** Resposta 503 com a página de manutenção. */
function maintenanceResponse(): Response {
  return new Response(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '3600',
      'Cache-Control': 'no-store',
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Health check: sempre responde, mesmo em manutenção (monitoramento).
    if (HEALTH_PATHS.has(url.pathname)) {
      return Response.json({ status: 'ok' });
    }

    // Modo manutenção (catch-all), com exceções de rota (TASK-0061).
    const maintenanceOn = (await env.KV.get(MAINTENANCE_KEY)) === 'on';
    if (maintenanceOn && !MAINTENANCE_EXEMPT.has(url.pathname)) {
      return maintenanceResponse();
    }

    // Demais rotas: assets estáticos (pass-through, sem regressão).
    return env.ASSETS.fetch(request);
  },
};
