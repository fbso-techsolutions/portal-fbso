# ⚙️ TASK-0002 — Inicializar git local, espelhar conteúdo e push inicial

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0001 — Repositório e ambiente GitHub](../enablers/ENABLER-0001-repositorio-ambiente-github.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Francisco Oliveira |
| Esforço | 2h |
| Depende de | [TASK-0001 — Criar repositório na org](TASK-0001-criar-repositorio-org-github.md) |

## 1. Objetivo

Transformar o espelho local (`portal-fbso/`) em repositório git sincronizado com o remote da org,
preservando toda a documentação já existente.

## 2. O que implementar/entregar

- `git init` na raiz de `portal-fbso/`.
- Confirmar o `.gitignore` já presente cobre `node_modules/`, `dist/`, `.wrangler/` e artefatos locais
  (ajustar se faltar algo da stack).
- `git remote add origin` apontando para o repo da org (TASK-0001).
- Commit inicial com o estado atual (docs/, projects/, AGENTS.md, INTENT.md, README.md, .gitignore).
- Push da branch `main` para o remote.

## 3. Critério de saída (evidência)

- [x] `git remote -v` aponta para `fbso-techsolutions/portal-fbso`.
- [x] `git log` mostra o commit inicial com a documentação atual.
- [x] `main` espelhada no GitHub (conteúdo idêntico ao local).
