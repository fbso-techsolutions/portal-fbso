# ⚙️ TASK-0020 — Workflow GitHub Actions `ci.yml` (lint → typecheck → build)

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0003-0004 — Pipeline CI/CD (lint/typecheck/build)](../../prj-produto/user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 4h |
| Depende de | [TASK-0019 — Build/prerender + smoke local](TASK-0019-build-prerender-smoke-local.md) · [TASK-0003 — Branch protection](TASK-0003-branch-protection-codeowners.md) |

## 1. Objetivo

Criar o pipeline de **integração contínua** que valida todo push/PR, bloqueando regressões antes do merge.

## 2. O que implementar/entregar

- Criar `.github/workflows/ci.yml` disparando em `push` e `pull_request` para `main`.
- Jobs na ordem **lint → typecheck → build** (o job de build só roda se os anteriores passarem, ou como steps dependentes).
- Usar a versão de Node **pinada** (a mesma do scaffold — TASK-0021 detalha o setup).
- Garantir que qualquer falha falha o check (exit não-zero) — pré-requisito de merge.

## 3. Critério de saída (evidência)

- [x] Workflow versionado em `.github/workflows/ci.yml`.
- [x] Um PR de teste dispara o workflow e ele roda os 3 estágios.
- [x] Falha proposital (ex.: erro de lint) falha o check.

**Evidências**

- PR [#14](https://github.com/fbso-techsolutions/portal-fbso/pull/14) → run `43362460685`:
  steps `Lint` · `Typecheck` · `Build` · `Verificar artefato de build` todos verdes (53s).
- Teste negativo (branch descartável, PR [#15](https://github.com/fbso-techsolutions/portal-fbso/pull/15)
  fechado) → run `43362583760`: `Lint` falhou (exit 1, `no-explicit-any` + `no-unused-vars`);
  `Typecheck`, `Build` e `Verificar artefato` **não rodaram** (fail-fast).
