# ⚙️ TASK-0015 — Lint/format limpos + documentar comandos no README

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0002 — Configurar ESLint/Prettier e tsconfig](../../prj-produto/user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 1h |
| Depende de | [TASK-0012 — ESLint flat config](TASK-0012-eslint-flat-config.md) · [TASK-0013 — Prettier](TASK-0013-prettier-eslint-config.md) · [TASK-0014 — tsconfig](TASK-0014-tsconfig-strict-alias.md) |

## 1. Objetivo

Garantir que lint/format/typecheck rodem limpos no scaffold e que os comandos estejam documentados
para o time (humano e IA).

## 2. O que implementar/entregar

- Rodar `npm run lint` e `npm run format:check` até saírem limpos (corrigir o que aparecer).
- Documentar no [README do repo](../../../README.md) a seção "Desenvolvimento" com os comandos
  (`dev`, `build`, `preview`, `lint`, `format`, `typecheck`).

## 3. Critério de saída (evidência)

- [ ] `npm run lint` exit 0.
- [ ] `npm run format:check` exit 0.
- [ ] README com a seção de comandos de desenvolvimento.
