# 💬 User Story: US-FEAT-0001.0001-0003 — Estruturar pastas + Home "hello world"

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0001](../epicos/EPIC-0001-fundacao-engenharia.md) ➔ [FEATURE-0001.0001](../features/FEATURE-0001.0001-scaffold-portal.md) ➔ `US-FEAT-0001.0001-0003` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-07 |
| Status | ✅ Revisado (2026-11-11) |

## 1. Declaração

- **Como** time de engenharia, **quero** criar a estrutura de pastas (`src/app`, `components/{layout,ui,sections}`,
  `pages`, `content`, `lib`, `styles`) e uma Home "hello world", **para** dar o esqueleto das
  próximas features.

## 2. Cenários (Gherkin)

- **Dado que** a estrutura foi criada, **quando** o dev adiciona uma página, **então** há um lugar
  claro para cada artefato (rota, componente, conteúdo, estilo).
- **Dado que** a Home "hello world" existe, **quando** acessamos `/`, **então** renderiza sem erro.

## 3. Não funcionais

- Conteúdo (catálogo/textos) isolado em `src/content/` — nada hardcoded no JSX.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
