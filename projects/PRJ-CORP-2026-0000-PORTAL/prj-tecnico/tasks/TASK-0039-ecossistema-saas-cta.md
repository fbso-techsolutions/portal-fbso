# ⚙️ TASK-0039 — Ecossistema SaaS + CTA

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0002.0002-0013 — Ecossistema SaaS + CTA](../../prj-produto/user-stories/US-FEAT-0002.0002-0013-ecossistema-saas-cta.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 3 — Estrutura, navegação e institucional](../../prj-produto/sprints/sprint-0003-estrutura-navegacao-institucional.md) · 14/12–24/12 |
| Dono | Alfredo Bento |
| Esforço | 4h |
| Depende de | [TASK-0038](TASK-0038-posicionamento-diferenciais.md) |

## 1. Objetivo

Criar a seção de ecossistema SaaS (cards dos 4 produtos) e o CTA "vamos conversar" na Home.

## 2. O que implementar/entregar

- Grid de `Card` (Educatio/Fiscalia/Mercator/Materiae) + CTA com `Button`; dados mínimos de `src/content/`.

## 3. Critério de saída (evidência)

- [x] 4 cards renderizam; CTA aponta para contato; dados vêm de `src/content/`.

**Evidências**

- `Home.tsx`: seção ecossistema SaaS (4 `Card` de produto) + CTA "vamos conversar" (painel navy + `Button`).
- `home.ts`: `products` (4 produtos) e `cta` — conteúdo como dados.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Alterar produtos/CTA

Edite `products` e `cta` em `src/content/home.ts`.
