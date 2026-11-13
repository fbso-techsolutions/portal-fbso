# ⚙️ TASK-0046 — Página `/solucoes`

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0004.0001-0019 — Página /solucoes](../../prj-produto/user-stories/US-FEAT-0004.0001-0019-pagina-solucoes.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 4 — TechServices e Portfólio SaaS](../../prj-produto/sprints/sprint-0004-techservices-portfolio-saas.md) · 11/01–22/01 |
| Dono | Alfredo Bento |
| Esforço | 4h |
| Depende de | [TASK-0045](TASK-0045-catalogo-saas-dados.md) |

## 1. Objetivo

Criar a rota `/solucoes` com grid de cards dos 4 produtos, a partir do catálogo de dados.

## 2. O que implementar/entregar

- Grid de `Card` (nome + descritivo + link) consumindo `saas-catalog.ts`.

## 3. Critério de saída (evidência)

- [x] `/solucoes` acessível pela nav; 4 cards renderizam a partir dos dados.

**Evidências**

- `src/pages/Solucoes.tsx` (grid de `Card` consumindo `saasCatalog`) + rota `solucoes`.
- `npm run build` → `Prerender (html): /solucoes -> dist/client/solucoes/index.html`.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅.

## 4. Runbook

### 4.1 Alterar os cards

Edite `saasCatalog` em `src/content/saas-catalog.ts`.
