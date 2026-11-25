import { describe, expect, it } from 'vitest';
import { consentContent } from './consent';

describe('consentContent (smoke)', () => {
  it('expõe aviso, rótulos dos botões e link para a política', () => {
    expect(consentContent.message).toBeTruthy();
    expect(consentContent.acceptLabel).toBeTruthy();
    expect(consentContent.declineLabel).toBeTruthy();
    expect(consentContent.privacyLinkLabel).toBeTruthy();
  });

  it('aponta o link para a política de privacidade', () => {
    expect(consentContent.privacyHref).toBe('/privacidade');
  });
});
