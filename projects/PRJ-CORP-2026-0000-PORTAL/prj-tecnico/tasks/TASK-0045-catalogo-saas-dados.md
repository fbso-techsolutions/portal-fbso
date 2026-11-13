# ⚙️ TASK-0045 — Catálogo SaaS (dados)

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0004.0001-0018 — Catálogo SaaS (dados)](../../prj-produto/user-stories/US-FEAT-0004.0001-0018-catalogo-saas-dados.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 4 — TechServices e Portfólio SaaS](../../prj-produto/sprints/sprint-0004-techservices-portfolio-saas.md) · 11/01–22/01 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | — |

## 1. Objetivo

Modelar o catálogo dos 4 produtos (Educatio, Fiscalia, Mercator, Materiae) como dados em `src/content/saas-catalog.ts`.

## 2. O que implementar/entregar

- Interface tipada (id, nome, descritivo, tagline, status, link) + dados dos 4 produtos.

## 3. Critério de saída (evidência)

- [x] `saas-catalog.ts` tipado com os 4 produtos; fonte única (nada hardcoded no JSX).

**Evidências**

- `src/content/saas-catalog.ts`: `SaasProduct` tipado (slug/name/symbol/tagline/status/link) + 4 produtos.
- **Refatoração**: `Home.tsx` passou a consumir `saasCatalog` (removida a duplicação em `home.ts` — fonte única).
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Adicionar um produto

Edite `saasCatalog` em `src/content/saas-catalog.ts`.
