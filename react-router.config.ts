import type { Config } from '@react-router/dev/config';
import { saasCatalog } from './src/content/saas-catalog';

export default {
  ssr: true,
  // Prerender de todas as rotas estáticas + as páginas de produto (`/solucoes/:slug`).
  prerender: ({ getStaticPaths }) => {
    const staticPaths = getStaticPaths();
    const productPaths = saasCatalog.map((product) => `/solucoes/${product.slug}`);
    return [...staticPaths, ...productPaths];
  },
  appDirectory: 'src/app',
  buildDirectory: 'dist',
} satisfies Config;
