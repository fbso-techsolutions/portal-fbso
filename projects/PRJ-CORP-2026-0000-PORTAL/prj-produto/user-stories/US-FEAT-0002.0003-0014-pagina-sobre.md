# 💬 User Story: US-FEAT-0002.0003-0014 — Página Sobre (quem somos)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0002](../epicos/EPIC-0002-experiencia-institucional.md) ➔ [FEATURE-0002.0003](../features/FEATURE-0002.0003-pagina-sobre.md) ➔ `US-FEAT-0002.0003-0014` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-01 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** uma página `/sobre` com o posicionamento institucional (quem somos,
  missão, valores), **para** conhecer a FBSO.

## 2. Cenários (Gherkin)

- **Dado que** estou na navegação, **quando** clico em "Sobre", **então** navego para `/sobre`.
- **Dado que** carrego `/sobre`, **quando** a página renderiza, **então** o conteúdo institucional
  (posicionamento, missão, valores) aparece.

## 3. Não funcionais

- Usa tokens e componentes `ui/` (`Section`, `Card`); textos de `src/content/`.
- **Fora:** conteúdo da divisão TechServices (FEATURE-0003.0001).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
