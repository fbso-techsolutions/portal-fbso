import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  CONSENT_DEFAULT,
  CONSENT_DEFAULT_SNIPPET,
  CONSENT_STORAGE_KEY,
  consentUpdate,
  readConsent,
  saveConsent,
} from './consent';

describe('consent (Consent Mode v2)', () => {
  it('default = tudo denied', () => {
    expect(CONSENT_DEFAULT).toEqual({
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  });

  it('snippet define window.gtag + consent default denied', () => {
    expect(CONSENT_DEFAULT_SNIPPET).toContain('window.gtag = function gtag');
    expect(CONSENT_DEFAULT_SNIPPET).toContain("gtag('consent', 'default'");
    expect(CONSENT_DEFAULT_SNIPPET).toContain('"analytics_storage":"denied"');
  });

  it('aceite → granted; recusa → denied', () => {
    expect(consentUpdate(true)).toEqual({ analytics_storage: 'granted' });
    expect(consentUpdate(false)).toEqual({ analytics_storage: 'denied' });
  });
});

describe('persistência do consentimento (localStorage)', () => {
  afterEach(() => vi.unstubAllGlobals());

  function stubStorage(seed: Record<string, string> = {}) {
    const store = new Map(Object.entries(seed));
    vi.stubGlobal('window', {
      localStorage: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => void store.set(key, value),
      },
    });
  }

  it('salva e lê a escolha (1ª parte)', () => {
    stubStorage();
    expect(readConsent()).toBeNull();
    saveConsent(true);
    expect(readConsent()).toBe(true);
    saveConsent(false);
    expect(readConsent()).toBe(false);
  });

  it('retorna null para valor desconhecido', () => {
    stubStorage({ [CONSENT_STORAGE_KEY]: 'bogus' });
    expect(readConsent()).toBeNull();
  });
});
