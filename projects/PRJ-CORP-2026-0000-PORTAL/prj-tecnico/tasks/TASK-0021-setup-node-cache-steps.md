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

- [x] `npm ci` usa lockfile (sem `install`).
- [x] Cache de dependências ativo (log do runner mostra hit/miss).
- [x] Cada step falha o job ao receber exit não-zero.

**Evidências** — run `43363856972` (PR [#16](https://github.com/fbso-techsolutions/portal-fbso/pull/16)):

```text
node-version-file: .nvmrc
Acquiring 24.22.1 - x64 from https://github.com/actions/node-versions/...
node: v24.22.1
Cache hit for: node-cache-Linux-x64-npm-7d738160f2b2...
Cache restored from key: node-cache-Linux-x64-npm-7d738160f2b2...
Cache hit occurred on the primary key ..., not saving cache.
```

- Versão **única**: `.nvmrc` (`24.22.1`) é a fonte; o workflow lê via `node-version-file`.
- `engines` no `package.json` (`node >=24.22.1 <25`, `npm >=11`) documenta o requisito.
- Falha de step: run `43362583760` (TASK-0020) — `Lint` exit 1 derrubou o job e os steps
  seguintes não rodaram (comportamento padrão do runner: `bash -e`).
