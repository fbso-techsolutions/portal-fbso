import { Links, Meta, Outlet, Scripts } from 'react-router';
import AppLayout from '@/components/layout/AppLayout';
import { CONSENT_DEFAULT_SNIPPET } from '@/lib/consent';
import '@/styles/index.css';

export default function Root() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* Consent Mode v2 (TASK-0063): default denied antes de qualquer script de analytics. */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SNIPPET }} />
      </head>
      <body>
        <AppLayout>
          <Outlet />
        </AppLayout>
        <Scripts />
      </body>
    </html>
  );
}
