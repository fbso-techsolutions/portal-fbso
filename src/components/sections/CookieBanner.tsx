import { consentContent } from '@/content/consent';
import Button from '@/components/ui/Button';

interface CookieBannerProps {
  /** Chamado quando o visitante escolhe (true = aceitar, false = recusar). */
  onChoice: (accepted: boolean) => void;
}

/**
 * Banner de consentimento (US-0030) — exibido no layout raiz antes da escolha.
 * A escolha é registrada pelo Consent Mode (TASK-0063) e persistida (TASK-0064);
 * aqui só a UI (aceitar/recusar + link para a política de privacidade).
 */
export default function CookieBanner({ onChoice }: CookieBannerProps) {
  return (
    <div
      role="region"
      aria-label="Aviso de consentimento de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white shadow-soft"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-ink">
          {consentContent.message}{' '}
          <a
            href={consentContent.privacyHref}
            className="font-semibold text-blue underline underline-offset-2 hover:text-navy"
          >
            {consentContent.privacyLinkLabel}
          </a>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Button type="button" variant="outline" onClick={() => onChoice(false)}>
            {consentContent.declineLabel}
          </Button>
          <Button type="button" variant="primary" onClick={() => onChoice(true)}>
            {consentContent.acceptLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
