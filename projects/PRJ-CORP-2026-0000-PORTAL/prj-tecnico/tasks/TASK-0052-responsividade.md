# ⚙️ TASK-0052 — Responsividade

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0005.0002-0024 — Responsividade](../../prj-produto/user-stories/US-FEAT-0005.0002-0024-responsividade.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 5 — SEO, a11y e go-live](../../prj-produto/sprints/sprint-0005-seo-a11y-golive.md) · 25/01–05/02 |
| Dono | Alfredo Bento |
| Esforço | 5h |
| Depende de | — |

## 1. Objetivo

Garantir que todas as páginas sejam responsivas (mobile-first) nos breakpoints do tema.

## 2. O que implementar/entregar

- Ajuste de layout/breakpoints em todas as páginas; sem overflow/quebra.

## 3. Critério de saída (evidência)

- [x] Páginas navegáveis/legíveis em mobile/desktop.

**Evidências**

- `AppLayout`: `overflow-x-hidden` no root (evita scroll horizontal no mobile).
- Todas as páginas usam breakpoints responsivos (`md:`/`sm:`/`lg:`) — verificado por grep (Home 14 · AppLayout 7 · demais 2–4).
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Verificar responsividade

Reduza a viewport e confirme que não há overflow horizontal; o menu mobile substitui a nav no breakpoint `md`.
