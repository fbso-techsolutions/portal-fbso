# ⚙️ TASK-0013 — Prettier + integração com ESLint

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0002 — Configurar ESLint/Prettier e tsconfig](../../prj-produto/user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 2h |
| Depende de | [TASK-0012 — ESLint flat config](TASK-0012-eslint-flat-config.md) |

## 1. Objetivo

Configurar o **Prettier** e desativar as regras de formatação conflitantes do ESLint, para que
formatação seja automática e consistente.

## 2. O que implementar/entregar

- Instalar `prettier` + `eslint-config-prettier`.
- Criar `.prettierrc` (ou `prettier.config.js`) com o estilo padrão da org (single quote, semicolons,
  trailing comma, `printWidth` 100).
- Adicionar `eslint-config-prettier` como última config do `eslint.config.js` (desliga conflitos).
- Adicionar scripts `format` e `format:check` no `package.json`.
- Adicionar `.prettierignore` (cobrir `dist/`, `node_modules/`).
  → Inclui também `*.md`: tabelas longas do projeto são formatadas à mão (evita reformatação em massa).

## 3. Critério de saída (evidência)

- [x] `npm run format` formata sem erro.
- [x] `npm run lint` continua verde após a integração (sem conflito Prettier×ESLint).
