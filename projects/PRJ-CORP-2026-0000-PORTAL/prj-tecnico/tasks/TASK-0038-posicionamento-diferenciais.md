# ⚙️ TASK-0038 — Posicionamento + diferenciais

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0002.0002-0012 — Posicionamento e diferenciais](../../prj-produto/user-stories/US-FEAT-0002.0002-0012-posicionamento-diferenciais.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 3 — Estrutura, navegação e institucional](../../prj-produto/sprints/sprint-0003-estrutura-navegacao-institucional.md) · 14/12–24/12 |
| Dono | Alfredo Bento |
| Esforço | 5h |
| Depende de | [TASK-0037](TASK-0037-hero-institucional.md) |

## 1. Objetivo

Criar as seções de posicionamento ("quem somos") e diferenciais (pilares + resumo TechServices) da Home.

## 2. O que implementar/entregar

- Seções com `Section`/`Card` (3 pilares + check-list de serviços); textos de `src/content/`.

## 3. Critério de saída (evidência)

- [x] Pilares e resumo TechServices renderizam; textos vêm de `src/content/`.

**Evidências**

- `Home.tsx`: seções de posicionamento (kicker + título + copy + 3 `Card`) e resumo TechServices (check-list de 6 serviços).
- `home.ts`: `positioning` (pilares) e `services` — conteúdo como dados.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Alterar pilares/serviços

Edite `positioning.pillars` e `services.services` em `src/content/home.ts`.
