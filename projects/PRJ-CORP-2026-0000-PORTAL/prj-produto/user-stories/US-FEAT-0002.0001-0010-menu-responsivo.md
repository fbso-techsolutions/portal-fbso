# 💬 User Story: US-FEAT-0002.0001-0010 — Menu responsivo (mobile)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0002](../epicos/EPIC-0002-experiencia-institucional.md) ➔ [FEATURE-0002.0001](../features/FEATURE-0002.0001-layout-institucional.md) ➔ `US-FEAT-0002.0001-0010` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-01 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** visitante mobile, **quero** um menu responsivo (toggle), **para** navegar no portal sem
  quebrar o layout.

## 2. Cenários (Gherkin)

- **Dado que** a viewport é mobile, **quando** carrego a página, **então** a nav colapsa num
  menu-toggle.
- **Dado que** o menu está fechado, **quando** toco no toggle, **então** o menu abre com os links.
- **Dado que** o menu está aberto, **quando** toco num link, **então** navega e o menu fecha.

## 3. Não funcionais

- Acessível (`aria-expanded`, `aria-controls`, `aria-label` no toggle).
- Conteúdo pré-renderizado permanece sem depender de JS; o toggle é interação client-side.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
