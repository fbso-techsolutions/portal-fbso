# 💬 User Story: US-FEAT-0004.0002-0020 — Rota de detalhe `/solucoes/:slug`

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0004](../epicos/EPIC-0004-portfolio-saas.md) ➔ [FEATURE-0004.0002](../features/FEATURE-0004.0002-pagina-produto.md) ➔ `US-FEAT-0004.0002-0020` |
| Prioridade | Must |
| Estimativa | 5 SP |
| Rastreio | B-REQ-05 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** navegar para `/solucoes/:slug` de cada produto, **para** ver o
  detalhe do SaaS.

## 2. Cenários (Gherkin)

- **Dado que** estou em `/solucoes`, **quando** clico num card, **então** navego para
  `/solucoes/:slug` correspondente.
- **Dado que** acesso um slug inválido, **quando** a rota resolve, **então** retorna 404/placeholder
  adequado.

## 3. Não funcionais

- Rota dinâmica (React Router), dados do catálogo (`src/content/saas-catalog.ts`).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
