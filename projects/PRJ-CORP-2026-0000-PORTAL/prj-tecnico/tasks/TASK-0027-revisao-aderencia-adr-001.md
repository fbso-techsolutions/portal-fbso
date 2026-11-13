# ⚙️ TASK-0027 — Revisão de aderência do scaffold ao ADR-001 e à ARCHITECTURE

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0001 — Inicializar projeto Vite + TS + Tailwind + Router v8](../../prj-produto/user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Bolismar da Silva |
| Esforço | 2h |
| Depende de | [TASK-0019 — Build/prerender + smoke local](TASK-0019-build-prerender-smoke-local.md) |

## 1. Objetivo

Confirmar que o scaffold entregue segue as decisões de arquitetura registradas, evitando retrabalho
nas próximas sprints.

## 2. O que implementar/entregar

- Revisar o scaffold contra o [ADR-001](../../../../docs/tecnico/arquitetura/adrs/adr-001-stack-portal.md)
  (stack: React+TS+Vite+Tailwind v4+Router v8, `prerender: true`) e a
  [ARCHITECTURE.md](../../../../docs/tecnico/arquitetura/ARCHITECTURE.md).
- Verificar estrutura de pastas e o padrão "conteúdo como dados" (`src/content/`).
- Apontar desvios ou registrar ADR complementar se algo divergir do decidido.

## 3. Critério de saída (evidência)

- [ ] Parecer registrado (comentário no PR ou ADR/nota), aprovando ou listando ajustes.
- [ ] Desvios (se houver) registrados como pendência/ADR — nunca ajuste silencioso.
