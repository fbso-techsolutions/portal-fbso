import { describe, expect, it } from 'vitest';
import worker, { type Env } from './index';

function makeEnv(maintenance: string | null): Env {
  return {
    ASSETS: {
      fetch: async () => new Response('asset', { status: 200 }),
    },
    KV: {
      get: async () => maintenance,
    },
  };
}

describe('worker (smoke)', () => {
  it('GET /api/health responde 200 + JSON (maintenance off)', async () => {
    const request = new Request('https://fbso.com.br/api/health');
    const response = await worker.fetch(request, makeEnv('off'));

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('application/json');
    expect(await response.json()).toEqual({ status: 'ok' });
  });

  it('demais rotas delegam ao binding ASSETS (pass-through)', async () => {
    const request = new Request('https://fbso.com.br/sobre');
    const response = await worker.fetch(request, makeEnv('off'));

    expect(response.status).toBe(200);
    expect(await response.text()).toBe('asset');
  });

  it('maintenance = on → 503 + Retry-After + página de manutenção', async () => {
    const request = new Request('https://fbso.com.br/');
    const response = await worker.fetch(request, makeEnv('on'));

    expect(response.status).toBe(503);
    expect(response.headers.get('retry-after')).toBe('3600');
    expect(response.headers.get('content-type')).toContain('text/html');
    expect(await response.text()).toContain('FBSO');
  });

  it('maintenance = on → todas as rotas públicas retornam 503 (catch-all)', async () => {
    const request = new Request('https://fbso.com.br/api/health');
    const response = await worker.fetch(request, makeEnv('on'));

    expect(response.status).toBe(503);
  });

  it('maintenance = null (chave ausente) → comportamento normal (off)', async () => {
    const request = new Request('https://fbso.com.br/');
    const response = await worker.fetch(request, makeEnv(null));

    expect(response.status).toBe(200);
    expect(await response.text()).toBe('asset');
  });
});
