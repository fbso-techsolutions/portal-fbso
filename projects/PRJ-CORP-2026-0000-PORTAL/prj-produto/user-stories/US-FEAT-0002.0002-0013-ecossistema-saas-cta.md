# 💬 User Story: US-FEAT-0002.0002-0013 — Ecossistema SaaS + CTA

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0002](../epicos/EPIC-0002-experiencia-institucional.md) ➔ [FEATURE-0002.0002](../features/FEATURE-0002.0002-home-institucional.md) ➔ `US-FEAT-0002.0002-0013` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-01 · B-REQ-02 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** a seção de ecossistema SaaS (cards dos produtos) e um CTA
  "vamos conversar", **para** conhecer os produtos e iniciar contato.

## 2. Cenários (Gherkin)

- **Dado que** acesso a Home, **quando** chego à seção de soluções, **então** os cards dos produtos
  (Educatio · Fiscalia · Mercator · Materiae) renderizam.
- **Dado que** chego ao fim da Home, **quando** vejo o CTA, **então** o botão aponta para contato.

## 3. Não funcionais

- Cards usam `Card`; dados dos produtos de `src/content/` (catálogo mínimo, detalhe na FEATURE-0004.0001).
- CTA usa `Button`; textos de `src/content/`.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
