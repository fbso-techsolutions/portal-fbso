# 💬 User Story: US-FEAT-0002.0001-0009 — Criar Footer institucional

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0002](../epicos/EPIC-0002-experiencia-institucional.md) ➔ [FEATURE-0002.0001](../features/FEATURE-0002.0001-layout-institucional.md) ➔ `US-FEAT-0002.0001-0009` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-01 |
| Status | ✅ Revisado (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** um footer institucional (nome completo, domínio, links
  institucionais/legais), **para** encontrar informações de contato e legais em qualquer página.

## 2. Cenários (Gherkin)

- **Dado que** estou em qualquer rota, **quando** carrego a página, **então** o footer está presente
  no rodapé.
- **Dado que** o footer renderizou, **quando** clico num link institucional/legal, **então** navego
  para a rota correspondente (ou placeholder).

## 3. Não funcionais

- Links legais (privacidade/termos) apontam para rotas da FEATURE-0002.0005 — por ora placeholder.
- Copyright com **ano dinâmico** (não hardcoded); consome tokens.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
