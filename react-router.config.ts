import type { Config } from '@react-router/dev/config';
import { writeFileSync } from 'node:fs';
import { saasCatalog } from './src/content/saas-catalog';

const BASE_URL = 'https://fbso.com.br';

const staticRoutes = [
  '/',
  '/sobre',
  '/contato',
  '/techservices',
  '/solucoes',
  '/privacidade',
  '/termos',
];

export default {
  ssr: true,
  // Prerender de todas as rotas estáticas + as páginas de produto (`/solucoes/:slug`).
  prerender: ({ getStaticPaths }) => {
    const staticPaths = getStaticPaths();
    const productPaths = saasCatalog.map((product) => `/solucoes/${product.slug}`);
    return [...staticPaths, ...productPaths];
  },
  // Gera o `sitemap.xml` no build (não hardcoded) a partir das rotas + catálogo.
  buildEnd: () => {
    const paths = [...staticRoutes, ...saasCatalog.map((product) => `/solucoes/${product.slug}`)];
    const xml =
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      paths.map((path) => `  <url><loc>${BASE_URL}${path}</loc></url>`).join('\n') +
      '\n</urlset>\n';
    writeFileSync('dist/client/sitemap.xml', xml);
  },
  appDirectory: 'src/app',
  buildDirectory: 'dist',
} satisfies Config;
