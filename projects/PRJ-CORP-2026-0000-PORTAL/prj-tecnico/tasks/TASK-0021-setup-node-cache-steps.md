# ⚙️ TASK-0021 — Setup Node pinado + cache de dependências + steps que falham o job

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0003-0004 — Pipeline CI/CD (lint/typecheck/build)](../../prj-produto/user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 2h |
| Depende de | [TASK-0020 — Workflow ci.yml](TASK-0020-workflow-ci-github-actions.md) |

## 1. Objetivo

Tornar o CI **reprodutível e rápido**: versão de Node fixa, cache de dependências e comandos que
falham o job corretamente.

## 2. O que implementar/entregar

- `actions/setup-node` com `node-version` pinada (ex.: `22.x`) e `cache: npm`.
- `actions/checkout` no início de cada job.
- Steps `npm ci` (não `npm install`) → `npm run lint` → `npm run typecheck` (ou `tsc --noEmit`) → `npm run build`.
- Confirmar que cada step usa o script correspondente do `package.json`.

## 3. Critério de saída (evidência)

- [ ] `npm ci` usa lockfile (sem `install`).
- [ ] Cache de dependências ativo (log do runner mostra hit/miss).
- [ ] Cada step falha o job ao receber exit não-zero.
