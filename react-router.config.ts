import type { Config } from '@react-router/dev/config';

export default {
  ssr: true,
  prerender: true,
  appDirectory: 'src/app',
  buildDirectory: 'dist',
} satisfies Config;
