import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { siteContent } from '@/content/site';
import Button from '@/components/ui/Button';
import CookieBanner from '@/components/sections/CookieBanner';
import { readConsent, saveConsent, updateConsent } from '@/lib/consent';
import { trackEvent } from '@/lib/analytics';

// Versão e ambiente injetados no build (deploy.yml → VITE_APP_VERSION / VITE_APP_ENV).
// Só preenchidos em deploys reais; em `npm run dev` ficam vazios (sem selo/versão).
const appVersion = (import.meta.env.VITE_APP_VERSION as string | undefined) ?? '';
const appEnv = (import.meta.env.VITE_APP_ENV as string | undefined) ?? '';
const isNonProd = appEnv === 'dev' || appEnv === 'hml';

interface AppLayoutProps {
  children: ReactNode;
}

/** Layout do portal: topbar + header (marca + nav + CTA + menu mobile) + main + footer. */
export default function AppLayout({ children }: AppLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  // Escolha do visitante no banner: null = ainda não escolheu (banner visível).
  // O valor (true/false) alimenta o Consent Mode (TASK-0063) e a persistência (TASK-0064).
  const [consent, setConsent] = useState<boolean | null>(null);

  // Restaura a escolha persistida (1ª parte) — não reexibe o banner a cada visita (TASK-0064).
  useEffect(() => {
    const stored = readConsent();
    if (stored !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restaura o consentimento persistido (localStorage) pós-hidratação; evita mismatch de SSR.
      setConsent(stored);
      updateConsent(stored); // reaplica o granted/denied salvo.
    }
  }, []);

  function handleConsentChoice(accepted: boolean) {
    setConsent(accepted);
    saveConsent(accepted); // persistência 1ª parte (TASK-0064).
    updateConsent(accepted); // Consent Mode v2: granted/denied (TASK-0063).
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-ink">
      {/* Skip link (acessibilidade) */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-soft focus:bg-blue focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      {/* Topbar */}
      <div className="bg-navy text-sm text-mist">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2">
          <span>
            <strong className="font-semibold text-mint">{siteContent.shortName}</strong> ·{' '}
            {siteContent.tagline}
          </span>
          <span className="hidden sm:inline">{siteContent.topbarNote}</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5">
          <a
            href="/"
            className="flex items-center py-2"
            aria-label={`${siteContent.shortName} — início`}
          >
            <img src={siteContent.logo} alt={siteContent.name} className="h-10 w-auto" />
          </a>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-7 text-sm font-semibold text-ink md:flex">
            {siteContent.navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-blue">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA (desktop) */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              href="/contato"
              onClick={() => trackEvent('cta_click', { cta: siteContent.navCta, href: '/contato' })}
            >
              {siteContent.navCta}
            </Button>
          </div>

          {/* Toggle mobile */}
          <button
            type="button"
            className="text-2xl text-navy md:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav-mobile"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen ? (
          <nav
            id="main-nav-mobile"
            aria-label="Navegação principal"
            className="flex flex-col border-t border-line px-5 py-3 md:hidden"
          >
            {siteContent.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 text-sm font-semibold text-ink"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="conteudo" className="flex-1">
        {children}
      </main>

      <footer className="bg-navy text-mist">
        <div className="mx-auto max-w-6xl px-5 pb-6 pt-12">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <img src={siteContent.logo} alt={siteContent.name} className="h-10 w-auto" />
              <p className="mt-3 text-sm text-mist">{siteContent.tagline}</p>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-bold text-white">Institucional</h4>
              <div className="grid gap-2">
                {siteContent.footerInstitutional.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-mist hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-bold text-white">Legal</h4>
              <div className="grid gap-2">
                {siteContent.footerLegal.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-mist hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => setConsent(null)}
                  className="text-left text-sm text-mist hover:text-white"
                >
                  {siteContent.privacyPreferencesLabel}
                </button>
                <a
                  href={`mailto:${siteContent.contactEmail}`}
                  className="text-sm text-mist hover:text-white"
                >
                  {siteContent.contactEmail}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-mist sm:flex-row">
            <span className="flex flex-wrap items-center gap-2">
              <span>
                © {new Date().getFullYear()} {siteContent.footer}. Todos os direitos reservados.
              </span>
              {appVersion ? <span className="text-mist/70">· {appVersion}</span> : null}
              {isNonProd ? (
                <span
                  className={`rounded-sm px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy ${
                    appEnv === 'hml' ? 'bg-mint' : 'bg-sky'
                  }`}
                >
                  {appEnv}
                </span>
              ) : null}
            </span>
            <span>{siteContent.topbarNote}</span>
          </div>
        </div>
      </footer>

      {/* Banner de consentimento (US-0030) — reabre via "Preferências de Privacidade" (revogação). */}
      {consent === null ? <CookieBanner onChoice={handleConsentChoice} /> : null}
    </div>
  );
}
