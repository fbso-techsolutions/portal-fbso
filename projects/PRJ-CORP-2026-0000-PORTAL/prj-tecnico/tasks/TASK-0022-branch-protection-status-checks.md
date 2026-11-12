# ⚙️ TASK-0022 — Branch protection ligada aos status checks do CI

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0003-0004 — Pipeline CI/CD (lint/typecheck/build)](../../prj-produto/user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 1h |
| Depende de | [TASK-0021 — Setup Node + cache + steps](TASK-0021-setup-node-cache-steps.md) · [TASK-0003 — Branch protection](TASK-0003-branch-protection-codeowners.md) |

## 1. Objetivo

Vincular os checks do CI à proteção da `main`, tornando o "exit limpo" um requisito real de merge.

## 2. O que implementar/entregar

- Selecionar os checks do `ci.yml` (lint/typecheck/build) como **required status checks** na branch
  protection da `main` (config iniciada na TASK-0003).
- Validar que um PR sem check verde não permite merge.

## 3. Critério de saída (evidência)

- [ ] Status checks obrigatórios aparecem na proteção da `main`.
- [ ] PR com CI vermelho bloqueado (print/teste).
