import type { ReactNode } from 'react';
import { siteContent } from '@/content/site';
import Button from '@/components/ui/Button';

interface AppLayoutProps {
  children: ReactNode;
}

/** Layout do portal: topbar + header (marca + CTA) + main + footer. */
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
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
            className="flex items-baseline gap-1 py-4"
            aria-label={`${siteContent.shortName} — início`}
          >
            <span className="text-2xl font-extrabold tracking-tight text-navy">
              {siteContent.shortName}
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-blue">
              {siteContent.brandAccent}
            </span>
          </a>

          <Button variant="primary" href="/contato">
            {siteContent.navCta}
          </Button>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-navy text-mist">
        <div className="mx-auto max-w-6xl px-5 pb-6 pt-12">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="text-xl font-extrabold text-white">
                {siteContent.shortName} <span className="text-sky">{siteContent.brandAccent}</span>
              </div>
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
            <span>
              © {new Date().getFullYear()} {siteContent.footer}. Todos os direitos reservados.
            </span>
            <span>{siteContent.topbarNote}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
