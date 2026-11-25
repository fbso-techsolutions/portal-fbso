# 💬 User Story: US-FEAT-0006.0004-0037 — Modelar planos/preços por SaaS como dados

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0004](../features/FEATURE-0006.0004-planos-contratacao-produtos.md) ➔ `US-FEAT-0006.0004-0037` |
| Prioridade | Should |
| Estimativa | — (a estimar no refinamento) |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** gestor comercial, **quero** os planos/preços de cada SaaS modelados como dados (tiers,
  preço, recursos, comparativo), **para** exibi-los de forma consistente e editá-los sem tocar no
  código.

## 2. Cenários (Gherkin)

- **Dado que** o catálogo SaaS existe em `src/content/`, **quando** adiciono o modelo de planos,
  **então** cada produto tem seus tiers/recursos/preço representados como dados tipados.
- **Dado que** os valores ainda não foram definidos, **quando** o modelo é criado, **então** os
  campos de preço ficam com placeholder "a definir (PO)".

## 3. Não funcionais

- **Valores de preço a definir pelo PO/PM** — o modelo entrega a estrutura, não os números.
- Estende o catálogo de dados da Release 1 (FEATURE-0004.0001), sem reescrever componentes.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E — · S — · T ✅
