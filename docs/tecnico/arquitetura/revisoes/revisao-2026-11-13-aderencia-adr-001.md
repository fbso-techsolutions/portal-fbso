# 🔎 Revisão de aderência — ADR-001 / ARCHITECTURE (Sprint 1)

| Campo | Valor |
|---|---|
| Data | 2026-11-13 |
| Task | [TASK-0027](../../../../projects/PRJ-CORP-2026-0000-PORTAL/prj-tecnico/tasks/TASK-0027-revisao-aderencia-adr-001.md) |
| Revisor | Bolismar da Silva (Arquiteto) — parecer a validar |
| Escopo | scaffold entregue: TASK-0008…0011, TASK-0016…0019 (commit `77f516d`) |
| Referências | [ADR-001](../adrs/adr-001-stack-portal.md) · [ARCHITECTURE](../ARCHITECTURE.md) |
| Veredito | ✅ **Aderente, com ressalvas editoriais** — nenhum desvio bloqueante |

## 1. Método

Verificação direta no repositório (não por leitura de cards): `package.json`,
`vite.config.ts`, `react-router.config.ts`, `tsconfig*.json`, `src/**`, `dist/**` gerado por
`npm run build`, além de `npm run lint` e `npx tsc -b`.

## 2. Checklist de aderência

| # | Critério (fonte) | Esperado | Encontrado | Veredito |
|---|---|---|---|---|
| A01 | React + TypeScript (ADR-001) | React + TS | React `19.3.1` · TypeScript `6.0.3` | ✅ |
| A02 | Vite (ADR-001) | build via Vite | Vite `8.3.8` | ✅ |
| A03 | Tailwind CSS v4 (ADR-001) | `tailwindcss@4` + plugin Vite | `4.3.5` + `@tailwindcss/vite` no `vite.config.ts` | ✅ |
| A04 | React Router v8 framework mode (ADR-001) | `react-router` + `@react-router/dev` | `8.5.1` (runtime, dev e node) | ✅ |
| A05 | `prerender: true` (ADR-001) | HTML estático por rota | `react-router.config.ts`: `ssr: true`, `prerender: true` | ✅ |
| A06 | Build estático publicado (ARCHITECTURE §1) | HTML sem depender de JS | `dist/client/index.html` pré-renderizado (conteúdo sem JS) | ✅ (ver D-01) |
| A07 | Cloudflare Workers + Static Assets (ADR-001) | deploy via `wrangler` | não implementado | ⏳ TASK-0023/0024 |
| A08 | Conteúdo como dados (ADR-001 · ARCHITECTURE §3) | textos fora do JSX | `src/content/site.ts` + `home.ts`, tipados; Home/meta consomem | ✅ |
| A09 | Estrutura de pastas (ARCHITECTURE §3) | `app`, `components/{layout,ui,sections}`, `pages`, `content`, `lib`, `styles` | todas presentes (`ui`/`sections`/`lib` com `.gitkeep`) | ✅ |
| A10 | Layout raiz no `app/` (ARCHITECTURE §3) | root + rotas | `src/app/root.tsx` + `src/app/routes.ts` | ✅ |
| A11 | `src/lib/seo.ts` (ARCHITECTURE §3) | utilitário de SEO | ausente | ⏳ FEATURE-0005.0001 |
| A12 | `sitemap.xml` / `robots.txt` (ARCHITECTURE §4) | gerados no build | ausentes | ⏳ FEATURE-0005.0001 |
| A13 | Sitemap do MVP (ARCHITECTURE §5) | 6 rotas | só `/` (scaffold) | ⏳ S2–S4 |
| A14 | Scaffold na raiz do repo (ADR-001/PR #3) | sem `frontend/` | na raiz | ✅ |
| A15 | Dependências pinadas (padrão do repo) | sem `^`/`~` | todas exatas (inclui `isbot@5.2.3` desde a TASK-0015) | ✅ |

## 3. Desvios e observações

| ID | Severidade | Achado | Ação |
|---|---|---|---|
| **D-01** | 🟡 média (doc) | Docs normativos citam o alvo de deploy como `dist/`; o framework mode gera `dist/client/` (HTML + assets) e `dist/server/` (build-time, **não** publicado) | Corrigido nesta revisão em ARCHITECTURE, DEPLOYMENT, README, setup, AGENTS e cards TASK-0023/0024; ADR-001 recebeu emenda editorial (decisão inalterada) |
| **D-02** | 🟢 baixa (dep) | `@vitejs/plugin-react` segue em `devDependencies` sem uso desde a TASK-0010 | ✅ Resolvido na TASK-0012 (removido) |
| **D-03** | 🟢 baixa (dep) | `isbot` é dependência direta sem `entry.server` custom (já vem via `@react-router/dev`) | ✅ Resolvido na TASK-0015: pinada em `5.2.3` (mantida — o `entry.server` padrão gerado pelo `@react-router/dev` a importa; remover dependeria do hoisting da dep transitiva) |
| **D-04** | 🟡 média (qualidade) | `tsconfig.app.json` sem `strict: true` | TASK-0014 (fora do escopo do ADR, mas bloqueia o DoD de lint/typecheck) |
| **D-05** | 🟢 baixa (doc) | `setup.md` §4 ainda descreve a estrutura do Vite SPA (`index.html`/`main.tsx`) | Corrigido nesta revisão |
| **D-06** | 🟢 baixa (doc) | README lista `public/` como existente | Corrigido (marcado como previsto) |
| **D-07** | 🟢 baixa (doc) | README descreve `npm run build` como `tsc -b && vite build` | Corrigido para `tsc -b && react-router build` |
| **D-08** | 🟢 aceito | Nomes em `src/content/` (`site.ts`, `home.ts`) diferem do alvo da ARCHITECTURE (`empresa.ts`, `servicos.ts`, `saas-catalog.ts`) | Sem ação: conteúdo real e nomenclatura entram na S4 (FEATURE-0002.0002 / FEATURE-0004.0001) |
| **D-09** | 🟡 processo | ADR-001 segue `📝 Proposta` (assinatura Tech lead + Arquiteto) | Coletar assinatura; sem impacto técnico |

## 4. Veredito

O scaffold **segue o ADR-001 e a ARCHITECTURE**: stack, framework mode, `prerender`, estrutura de
pastas e "conteúdo como dados" conferem. Os desvios são **editoriais/dependências** (D-01…D-07) ou
**escopo de tasks futuras** (A07, A11–A13, D-04) — nenhum exige mudança de arquitetura nem ADR
complementar.

## 5. Evidências

```text
$ npm run build
Prerender (html): / -> dist/client/index.html
$ npm run lint        # exit 0
$ npx tsc -b          # exit 0
```

- `dist/client/index.html` contém `lang="pt-BR"`, `<title>`, `<meta name="description">`, `og:*`,
  `<header>`, o texto da Home e `<footer>`.
- `src/content/` é a única fonte dos textos da Home; `src/pages/Home.tsx` não tem literais
  institucionais.
