# ⚙️ TASK-0008 — Scaffold Vite + React + TypeScript

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0001 — Inicializar projeto Vite + TS + Tailwind + Router v7](../../prj-produto/user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0002 — Inicializar git/espelho/push](TASK-0002-inicializar-git-espelho-push.md) |

## 1. Objetivo

Criar a base do projeto com a stack aprovada no [ADR-001](../../../../docs/tecnico/arquitetura/adrs/adr-001-stack-portal.md),
deixando `dev`/`build` funcionais.

## 2. O que implementar/entregar

- Scaffold **Vite** com template `react-ts` na raiz do repo (não em subpasta).
- `package.json` com scripts `dev`, `build`, `preview` e dependências **pinadas** (sem `^` solto):
  React 18+, React DOM, TypeScript, Vite.
- Remover o boilerplate de demonstração do Vite (logo/contador/estilos de exemplo).
- Confirmar que `npm install` e `npm run dev` funcionam no ambiente do dev.

## 3. Critério de saída (evidência)

- [x] `npm install` conclui sem erro.
- [x] `npm run dev` sobe o app localmente (print/console).
- [x] Commit do scaffold em branch de trabalho com PR aberto.
