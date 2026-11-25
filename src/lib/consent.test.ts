import { describe, expect, it } from 'vitest';
import { CONSENT_DEFAULT, CONSENT_DEFAULT_SNIPPET, consentUpdate } from './consent';

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
