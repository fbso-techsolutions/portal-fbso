# ⚙️ TASK-0036 — Menu mobile

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0002.0001-0010 — Menu responsivo](../../prj-produto/user-stories/US-FEAT-0002.0001-0010-menu-responsivo.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 3 — Estrutura, navegação e institucional](../../prj-produto/sprints/sprint-0003-estrutura-navegacao-institucional.md) · 14/12–24/12 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0034](TASK-0034-navegacao.md) |

## 1. Objetivo

Tornar a navegação responsiva com menu mobile (toggle), acessível.

## 2. O que implementar/entregar

- Menu-toggle no breakpoint mobile; abrir/fechar; fecha ao clicar num link; `aria-expanded`/`aria-controls`.

## 3. Critério de saída (evidência)

- [x] Menu mobile abre/fecha e fecha ao navegar; acessível (aria).

**Evidências**

- `AppLayout.tsx`: menu-toggle (mobile) + menu dropdown; `aria-expanded`/`aria-controls`; fecha ao clicar num link.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Verificar o menu mobile

Reduza a viewport (< `md`) e confirme o toggle abrir/fechar o menu; os itens fecham o menu ao navegar.
