# 💬 User Story: US-FEAT-0006.0004-0038 — Página de planos por produto (rota + tiers + comparativo)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0004](../features/FEATURE-0006.0004-planos-contratacao-produtos.md) ➔ `US-FEAT-0006.0004-0038` |
| Prioridade | Should |
| Estimativa | — (a estimar no refinamento) |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** visitante, **quero** ver os planos de cada SaaS numa página dedicada (tiers + comparativo),
  **para** entender o que cada plano oferece e o preço.

## 2. Cenários (Gherkin)

- **Dado que** o produto tem planos modelados, **quando** acesso `/solucoes/:slug/planos`, **então**
  vejo os tiers, recursos e preço (ou "a definir" quando não há valor).
- **Dado que** o produto não tem planos, **quando** acesso a rota, **então** vejo um estado vazio
  coerente (sem quebrar a página).

## 3. Não funcionais

- Reutiliza o design system (FEATURE-0001.0002); pré-renderização por página (SEO).
- Conteúdo vem dos dados (US-FEAT-0006.0004-0037), nunca hardcoded no JSX.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E — · S — · T ✅
