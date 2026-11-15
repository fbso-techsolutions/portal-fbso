import { describe, expect, it } from 'vitest';
import { homeContent } from './home';

describe('homeContent (smoke)', () => {
  it('expõe hero com título, highlight e CTAs', () => {
    expect(homeContent.hero.title).toBeTruthy();
    expect(homeContent.hero.highlight).toBeTruthy();
    expect(homeContent.hero.primaryCta.href).toBe('/solucoes');
    expect(homeContent.hero.secondaryCta.href).toBe('/techservices');
  });

  it('expõe pilares de posicionamento', () => {
    expect(homeContent.positioning.pillars.length).toBeGreaterThanOrEqual(3);
  });

  it('expõe serviços da TechServices', () => {
    expect(homeContent.services.services.length).toBeGreaterThanOrEqual(5);
  });
});
