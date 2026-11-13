# 💬 User Story: US-FEAT-0002.0001-0008 — Criar Header + navegação principal

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0002](../epicos/EPIC-0002-experiencia-institucional.md) ➔ [FEATURE-0002.0001](../features/FEATURE-0002.0001-layout-institucional.md) ➔ `US-FEAT-0002.0001-0008` |
| Prioridade | Must |
| Estimativa | 5 SP |
| Rastreio | B-REQ-01 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** um header com a marca FBSO e a navegação principal (Home, Sobre,
  TechServices, Soluções, Contato), **para** me orientar no portal em qualquer página.

## 2. Cenários (Gherkin)

- **Dado que** estou em qualquer rota, **quando** carrego a página, **então** o header (marca + nav)
  está presente no topo.
- **Dado que** o header renderizou, **quando** clico num item da nav, **então** navego para a rota
  correspondente.

## 3. Não funcionais

- Marca usa **placeholder** (símbolo provisório) até a resolução da `PENDENCY-0011`.
- Header sticky; consome tokens e componentes `ui/` (ex.: `Button` para o CTA).
- Links da nav apontam para rotas criadas nas features 0002.0002+ — por ora podem ser âncoras/placeholders.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
