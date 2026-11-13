# ⚙️ TASK-0003 — Branch protection na `main` + CODEOWNERS

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0001 — Repositório e ambiente GitHub](../enablers/ENABLER-0001-repositorio-ambiente-github.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 2h |
| Depende de | [TASK-0002 — Inicializar git/espelho/push](TASK-0002-inicializar-git-espelho-push.md) |

## 1. Objetivo

Proteger a `main` contra merge direto, garantindo que toda mudança passe por PR revisado — base do
gate de documentação do [AGENTS.md](../../../AGENTS.md).

## 2. O que implementar/entregar

- Branch protection na `main`: exigir **PR antes de merge**, mínimo **1 aprovação**, e descartar
  push direto.
- Exigir **status checks** (os checks do CI serão ligados na TASK-0022 — deixar a regra pronta).
- Criar `CODEOWNERS` com o Tech lead (Francisco Oliveira) como revisor de `src/` e do CI
  (`.github/workflows/`).

## 3. Critério de saída (evidência)

- [x] Push direto na `main` bloqueado (teste/print do erro).
- [x] `CODEOWNERS` versionado no repo.
- [x] Regra de status checks presente (mesmo sem check ainda registrado).
