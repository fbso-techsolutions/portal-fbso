# 💬 User Story: US-FEAT-0001.0003-0004 — Pipeline CI/CD (lint/typecheck/build)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0001](../epicos/EPIC-0001-fundacao-engenharia.md) ➔ [FEATURE-0001.0003](../features/FEATURE-0001.0003-pipeline-cicd-deploy.md) ➔ `US-FEAT-0001.0003-0004` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-07 |
| Status | ✅ Revisado (2026-11-11) |

## 1. Declaração

- **Como** time de engenharia, **quero** um workflow GitHub Actions (lint → typecheck → build),
  **para** validar cada push/PR automaticamente.

## 2. Cenários (Gherkin)

- **Dado que** o workflow existe, **quando** um push entra na `main`/PR, **então** lint/typecheck/build
  rodam e falham o job se algo quebrar.

## 3. Não funcionais

- Exit limpo = pré-requisito de merge.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
