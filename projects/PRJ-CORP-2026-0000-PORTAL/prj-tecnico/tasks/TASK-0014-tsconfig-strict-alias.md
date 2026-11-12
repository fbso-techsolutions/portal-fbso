# ⚙️ TASK-0014 — `tsconfig` strict + path aliases `@/`

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0002 — Configurar ESLint/Prettier e tsconfig](../../prj-produto/user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 2h |
| Depende de | [TASK-0008 — Scaffold Vite + React + TS](TASK-0008-scaffold-vite-react-ts.md) |

## 1. Objetivo

Deixar o TypeScript no modo mais estrito e com aliases de import, para sustentar a estrutura de
pastas (`@/components`, `@/content`, `@/lib`) das próximas features.

## 2. O que implementar/entregar

- Ajustar `tsconfig.json`/`tsconfig.app.json`: `strict: true`, `noUnusedLocals`, `noUnusedParameters`,
  `verbatimModuleSyntax` (ou conforme o padrão da org).
- Configurar path aliases `@/*` → `src/*` (em `tsconfig` **e** no `vite.config.ts` via `resolve.alias`).
- Validar que import `@/` resolve no build e no lint.

## 3. Critério de saída (evidência)

- [ ] `tsc` (via `npm run build`) passa com `strict`.
- [ ] Import com `@/` compila sem erro.
