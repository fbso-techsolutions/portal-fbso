# 💬 User Story: US-FEAT-0004.0001-0019 — Página `/solucoes` com cards

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0004](../epicos/EPIC-0004-portfolio-saas.md) ➔ [FEATURE-0004.0001](../features/FEATURE-0004.0001-catalogo-saas.md) ➔ `US-FEAT-0004.0001-0019` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-04 |
| Status | ✅ Revisado (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** a página `/solucoes` com grid de cards dos 4 produtos, **para**
  conhecer o ecossistema SaaS.

## 2. Cenários (Gherkin)

- **Dado que** estou na navegação, **quando** clico em "Soluções", **então** navego para `/solucoes`.
- **Dado que** carrego `/solucoes`, **quando** a página renderiza, **então** os 4 cards aparecem a
  partir do catálogo de dados.

## 3. Não funcionais

- Cards usam `Card`; dados vêm de `src/content/saas-catalog.ts` (nunca hardcoded).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
