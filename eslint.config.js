import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

// Flat config (ESLint 10). Sem `.eslintrc`/`extends` de config legada.
// Referência de estilo da org: platform-standards/standards/engineering
// (`coding-standards-react.md` ainda não publicado — PENDENCY-0010 / RISK-0002).
export default defineConfig([
  // Build, artefatos gerados e dependências.
  globalIgnores(['dist', 'build', '.react-router', 'coverage']),

  // Aplicação (browser): React + TypeScript + hooks.
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // React Router: rotas exportam `meta`/`links`/`loader`/`action` além do componente.
      'react-refresh/only-export-components': [
        'error',
        { allowExportNames: ['meta', 'links', 'headers', 'loader', 'action'] },
      ],
    },
  },

  // Arquivos de tooling na raiz (Node).
  {
    files: ['*.config.{js,ts}', 'eslint.config.js'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      globals: globals.node,
    },
  },
])
