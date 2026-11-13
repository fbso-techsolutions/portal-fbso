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

      <footer className="border-t border-white/10 bg-navy px-6 py-4 text-center text-sm text-mist">
        {siteContent.footer}
      </footer>
    </div>
  );
}
