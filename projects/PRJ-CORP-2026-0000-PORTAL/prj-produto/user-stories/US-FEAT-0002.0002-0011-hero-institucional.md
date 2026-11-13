# 💬 User Story: US-FEAT-0002.0002-0011 — Hero institucional

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0002](../epicos/EPIC-0002-experiencia-institucional.md) ➔ [FEATURE-0002.0002](../features/FEATURE-0002.0002-home-institucional.md) ➔ `US-FEAT-0002.0002-0011` |
| Prioridade | Must |
| Estimativa | 5 SP |
| Rastreio | B-REQ-01 · B-REQ-02 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** um hero institucional (eyebrow + título + posicionamento + CTA),
  **para** entender em segundos o que a FBSO entrega.

## 2. Cenários (Gherkin)

- **Dado que** acesso a Home, **quando** carrego a página, **então** o hero (título, copy e CTA) é o
  primeiro bloco.
- **Dado que** o hero renderizou, **quando** clico no CTA, **então** navego para a seção/rota de destino.

## 3. Não funcionais

- Consome tokens e componentes `ui/` (`Section`, `Button`); ilustração geométrica é placeholder.
- Textos vêm de `src/content/` (nunca hardcoded no JSX).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
