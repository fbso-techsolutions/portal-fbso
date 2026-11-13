# 💬 User Story: US-FEAT-0003.0001-0017 — Página FBSO TechServices

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0003](../epicos/EPIC-0003-techservices.md) ➔ [FEATURE-0003.0001](../features/FEATURE-0003.0001-pagina-techservices.md) ➔ `US-FEAT-0003.0001-0017` |
| Prioridade | Must |
| Estimativa | 5 SP |
| Rastreio | B-REQ-03 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** a página `/techservices` com as frentes da divisão (consultoria de TI,
  engenharia de software, Cloud & DevOps, sustentação & serviços, IA em negócios), **para** conhecer
  os serviços de consultoria da FBSO.

## 2. Cenários (Gherkin)

- **Dado que** estou na navegação, **quando** clico em "TechServices", **então** navego para `/techservices`.
- **Dado que** carrego `/techservices`, **quando** a página renderiza, **então** as frentes da
  divisão aparecem.

## 3. Não funcionais

- Usa tokens e componentes `ui/` (`Section`, `Card`); textos de `src/content/`.
- **Fora:** contratação de consultoria online (Release 2).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
