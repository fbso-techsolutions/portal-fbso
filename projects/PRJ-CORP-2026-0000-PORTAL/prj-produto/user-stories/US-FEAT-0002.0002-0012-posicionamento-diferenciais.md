# 💬 User Story: US-FEAT-0002.0002-0012 — Posicionamento e diferenciais

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0002](../epicos/EPIC-0002-experiencia-institucional.md) ➔ [FEATURE-0002.0002](../features/FEATURE-0002.0002-home-institucional.md) ➔ `US-FEAT-0002.0002-0012` |
| Prioridade | Must |
| Estimativa | 5 SP |
| Rastreio | B-REQ-01 · B-REQ-02 |
| Status | ✅ Revisado (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** seções de posicionamento ("quem somos") e diferenciais (pilares +
  resumo TechServices + resumo dos SaaS), **para** entender a proposta de valor da FBSO.

## 2. Cenários (Gherkin)

- **Dado que** acesso a Home, **quando** rolo além do hero, **então** as seções de posicionamento e
  diferenciais renderizam.
- **Dado que** as seções renderizam, **quando** visualizo os diferenciais, **então** cada pilar
  (engenharia · visão consultiva · inovação), o resumo TechServices, e o resumo os SaaS, aparecem com seus textos.

## 3. Não funcionais

- Usa componentes `ui/` (`Section`, `Card`); textos de `src/content/`.
- Resumo TechServices em formato de lista (check-list), sem página completa (FEATURE-0003.0001).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
