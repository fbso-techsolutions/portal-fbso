import { afterEach, describe, expect, it, vi } from 'vitest';
import { GA4_CONFIG_SNIPPET, GA4_GTAG_SRC, GA4_MEASUREMENT_ID, trackEvent } from './analytics';

describe('analytics (GA4)', () => {
  it('usa o Measurement ID do portal', () => {
    expect(GA4_MEASUREMENT_ID).toBe('G-LCBF75K8KW');
  });

  it('carrega o gtag.js dinamicamente com o ID e configura o GA4', () => {
    expect(GA4_GTAG_SRC).toContain('googletagmanager.com/gtag/js');
    expect(GA4_GTAG_SRC).toContain(GA4_MEASUREMENT_ID);
    expect(GA4_CONFIG_SNIPPET).toContain("document.createElement('script')");
    expect(GA4_CONFIG_SNIPPET).toContain(GA4_GTAG_SRC);
    expect(GA4_CONFIG_SNIPPET).toContain("gtag('config'");
    expect(GA4_CONFIG_SNIPPET).toContain(GA4_MEASUREMENT_ID);
  });
});

describe('trackEvent', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('emite gtag("event", nome, params)', () => {
    const gtag = vi.fn();
    vi.stubGlobal('window', { gtag });

    trackEvent('cta_click', { cta: 'Fale com a FBSO' });

    expect(gtag).toHaveBeenCalledWith('event', 'cta_click', { cta: 'Fale com a FBSO' });
  });

  it('emite evento sem params quando omitido', () => {
    const gtag = vi.fn();
    vi.stubGlobal('window', { gtag });

    trackEvent('produto_view');

    expect(gtag).toHaveBeenCalledWith('event', 'produto_view', undefined);
  });
});
