# ⚙️ TASK-0047 — Rota `/solucoes/:slug`

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0004.0002-0020 — Rota /solucoes/:slug](../../prj-produto/user-stories/US-FEAT-0004.0002-0020-rota-detalhe-produto.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 4 — TechServices e Portfólio SaaS](../../prj-produto/sprints/sprint-0004-techservices-portfolio-saas.md) · 11/01–22/01 |
| Dono | Alfredo Bento |
| Esforço | 5h |
| Depende de | [TASK-0045](TASK-0045-catalogo-saas-dados.md) |

## 1. Objetivo

Criar a rota dinâmica `/solucoes/:slug` para o detalhe de cada produto.

## 2. O que implementar/entregar

- Rota dinâmica (React Router) lendo o catálogo; slug inválido → 404/placeholder.

## 3. Critério de saída (evidência)

- [x] Cada produto tem sua página em `/solucoes/:slug`; slug inválido tratado.

**Evidências**

- `src/pages/Produto.tsx` (rota dinâmica, lê `:slug` do `saasCatalog`; 404/placeholder para slug inválido) + rota `solucoes/:slug`.
- `react-router.config.ts`: `prerender` dinâmico (`getStaticPaths()` + slugs do catálogo).
- `npm run build` → prerender de `/solucoes/educatio`, `/fiscalia`, `/mercator`, `/materiae`.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅.

## 4. Runbook

### 4.1 Adicionar um produto (gera a página automaticamente)

Adicione o item em `saasCatalog` (`src/content/saas-catalog.ts`) — o prerender dinâmico gera a rota `/solucoes/:slug`.
