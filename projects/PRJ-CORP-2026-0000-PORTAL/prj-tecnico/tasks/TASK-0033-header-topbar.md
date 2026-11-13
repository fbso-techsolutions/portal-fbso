# ⚙️ TASK-0033 — Header + topbar

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0002.0001-0008 — Header + navegação](../../prj-produto/user-stories/US-FEAT-0002.0001-0008-header-navegacao.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 3 — Estrutura, navegação e institucional](../../prj-produto/sprints/sprint-0003-estrutura-navegacao-institucional.md) · 14/12–24/12 |
| Dono | Alfredo Bento |
| Esforço | 4h |
| Depende de | — |

## 1. Objetivo

Criar o header institucional (topbar + marca FBSO + CTA) no `AppLayout`, substituindo o header mínimo do scaffold, consumindo tokens e componentes `ui/`.

## 2. O que implementar/entregar

- Topbar (tagline) + header sticky com marca (placeholder até `PENDENCY-0011`) e CTA (`Button`).
- Substituir o header mínimo atual do `AppLayout`.

## 3. Critério de saída (evidência)

- [x] Header institucional presente em todas as rotas (via `AppLayout`).
- [x] Marca usa placeholder; CTA com `Button`; consome tokens.

**Evidências**

- `AppLayout.tsx`: topbar (marca + tagline) + header sticky (marca `FBSO` + `TechSolutions` em blue + CTA `Button`).
- `site.ts`: campos `brandAccent`, `topbarNote`, `navCta` adicionados (conteúdo como dados).
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Alterar o CTA do header

Edite `navCta` em `src/content/site.ts` — o `Button` do header consome o valor.
