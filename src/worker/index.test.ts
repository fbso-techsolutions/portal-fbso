import { describe, expect, it } from 'vitest';
import worker, { type Env } from './index';

const env: Env = {
  ASSETS: {
    fetch: async () => new Response('asset', { status: 200 }),
  },
};

describe('worker (smoke)', () => {
  it('GET /api/health responde 200 + JSON', async () => {
    const request = new Request('https://fbso.com.br/api/health');
    const response = await worker.fetch(request, env);

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('application/json');
    expect(await response.json()).toEqual({ status: 'ok' });
  });

  it('demais rotas delegam ao binding ASSETS (pass-through)', async () => {
    const request = new Request('https://fbso.com.br/sobre');
    const response = await worker.fetch(request, env);

    expect(response.status).toBe(200);
    expect(await response.text()).toBe('asset');
  });
});
