import { describe, expect, it } from 'vitest';
import routes from './routes';

describe('rotas (smoke)', () => {
  it('registra as páginas institucionais esperadas', () => {
    const files = routes.map((route) => (route as { file?: string }).file ?? '');

    for (const page of [
      'Home.tsx',
      'Sobre.tsx',
      'Contato.tsx',
      'Privacidade.tsx',
      'Termos.tsx',
      'TechServices.tsx',
      'Solucoes.tsx',
      'Produto.tsx',
    ]) {
      expect(files.some((file) => file.endsWith(page))).toBe(true);
    }
  });
});
