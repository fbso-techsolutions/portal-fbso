# ⚙️ TASK-0012 — ESLint (flat config) + plugins React/TS

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0002 — Configurar ESLint/Prettier e tsconfig](../../prj-produto/user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0008 — Scaffold Vite + React + TS](TASK-0008-scaffold-vite-react-ts.md) |

## 1. Objetivo

Configurar o **ESLint** em flat config com as regras de React/React-Hooks/TypeScript, para manter
qualidade e consistência desde o início.

## 2. O que implementar/entregar

- Instalar `eslint`, `typescript-eslint`, `eslint-plugin-react-hooks` e `eslint-plugin-react-refresh`
  (já presentes do scaffold TASK-0008, pinados — mantidos).
- Criar `eslint.config.js` (flat config) usando o preset `typescript-eslint` recomendado + regras de hooks.
- Adicionar script `lint` no `package.json`.
- Alinhar a config à futura referência `coding-standards-react.md` da platform-standards
  (registrar desvio como pendência se a referência ainda não existir — `RISK-0002`).
  → Referência ainda **inexistente**: registrado como **PENDENCY-0010**.

## 3. Critério de saída (evidência)

- [x] `npm run lint` executa e reporta problemas corretamente.
- [x] `eslint.config.js` versionado; sem `extends` de config legada (`.eslintrc`).
