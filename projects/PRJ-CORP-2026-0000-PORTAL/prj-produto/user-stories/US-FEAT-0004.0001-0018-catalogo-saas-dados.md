# 💬 User Story: US-FEAT-0004.0001-0018 — Modelar catálogo SaaS como dados

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0004](../epicos/EPIC-0004-portfolio-saas.md) ➔ [FEATURE-0004.0001](../features/FEATURE-0004.0001-catalogo-saas.md) ➔ `US-FEAT-0004.0001-0018` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-04 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** time de engenharia, **quero** modelar o catálogo SaaS como dados em
  `src/content/saas-catalog.ts` (id, nome, descritivo, tagline, status, link) para os 4 produtos,
  **para** não hardcodar produtos no JSX.

## 2. Cenários (Gherkin)

- **Dado que** o catálogo existe, **quando** leio `saas-catalog.ts`, **então** os 4 produtos
  (Educatio, Fiscalia, Mercator, Materiae) estão tipados.
- **Dado que** a fonte muda, **quando** rebuildo, **então** os cards refletem a nova fonte sem
  alterar JSX.

## 3. Não funcionais

- Fonte única em `src/content/` (tipado); trocar a fonte (API/CMS na R2) não quebra os cards.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
