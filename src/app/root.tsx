import { Links, Meta, Outlet, Scripts } from 'react-router';
import AppLayout from '@/components/layout/AppLayout';
import '@/styles/index.css';

export default function Root() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
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
