# 💬 User Story: US-FEAT-0001.0002-0007 — Criar componentes base `ui/` (Button, Card, Section, Badge)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0001](../epicos/EPIC-0001-fundacao-engenharia.md) ➔ [FEATURE-0001.0002](../features/FEATURE-0001.0002-design-system.md) ➔ `US-FEAT-0001.0002-0007` |
| Prioridade | Must |
| Estimativa | 5 SP |
| Rastreio | B-REQ-02 |
| Status | ✅ Revisado (2026-11-13) |

## 1. Declaração

- **Como** time de frontend, **quero** criar os componentes base em `src/components/ui/`
  (Button, Card, Section, Badge) construídos sobre os tokens da
  [US-0001.0002-0006](US-FEAT-0001.0002-0006-design-tokens.md), **para** compor as páginas com
  consistência, responsividade e sem reimplementar estilos.

## 2. Cenários (Gherkin)

- **Dado que** os tokens existem, **quando** componho uma seção com `Section` + `Card` + `Button`,
  **então** os componentes renderizam estilizados (nada hardcoded) e responsivos.
- **Dado que** um `Button` é usado em dois contextos, **quando** passo as variantes `primary`/
  `outline`, **então** renderiza a variante correta com estados `hover`/`focus` visíveis.
- **Dado que** a viewport é mobile, **quando** renderizo os componentes, **então** eles se adaptam
  aos breakpoints do tema.

## 3. Não funcionais

- Componentes **tipados** (TypeScript), **acessíveis** (foco visível, `aria` quando aplicável) e
  **sem lógica de negócio** (apresentação pura).
- Variantes mínimas derivadas do molde: botão pill (raio `999px`), card (borda `line` + raio `20px`
  + hover lift), section (kicker + título + copy), badge/eyebrow (uppercase + marcador).
- **Sem dependência do logo definitivo** — o símbolo/marca entra como parâmetro/placeholder até a
  resolução da `PENDENCY-0011`.

**Verificação INVEST:** I ✅ (depende só dos tokens) · N ✅ (variantes negociáveis) · V ✅ (base das páginas) · E ✅ · S ✅ · T ✅ (variantes/estados testáveis)
