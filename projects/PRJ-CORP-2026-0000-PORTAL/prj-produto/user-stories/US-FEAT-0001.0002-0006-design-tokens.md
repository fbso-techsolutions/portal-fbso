# 💬 User Story: US-FEAT-0001.0002-0006 — Definir design tokens (cores, tipografia, espaçamento)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0001](../epicos/EPIC-0001-fundacao-engenharia.md) ➔ [FEATURE-0001.0002](../features/FEATURE-0001.0002-design-system.md) ➔ `US-FEAT-0001.0002-0006` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-02 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** time de engenharia/design, **quero** definir os design tokens (cores, tipografia,
  espaçamento, raios, sombras) como fonte única em `src/styles/` (Tailwind theme / CSS variables),
  **para** que todas as telas e componentes compartilhem a mesma identidade visual sem valores
  hardcoded.

## 2. Cenários (Gherkin)

- **Dado que** os tokens existem no tema, **quando** um componente usa `bg-primary`/`text-muted`/
  `rounded-…`/`font-display`, **então** os valores vêm do tema (nenhuma cor/tamanho literal no JSX).
- **Dado que** um token é alterado em **um único lugar**, **quando** o build roda, **então** a
  mudança reflete em todo o portal.

## 3. Não funcionais

- Fonte única: tokens em `src/styles/` via Tailwind `@theme` (não espalhados nos componentes).
- Acessibilidade: contraste texto×fundo ≥ WCAG AA.
- Referência de apresentação (inspiração, não arquitetura/tech): molde `/estudo/ideias1/index.html`.

**Paleta de partida (negociável — ponto de referência do molde):**

| Token | Valor | Uso |
|---|---|---|
| `navy` | `#0B192C` | fundo escuro (hero/topbar) |
| `blue` | `#1E88E5` | acento primário |
| `mint` | `#00E676` | acento secundário |
| `ink` / `muted` | `#142238` / `#65748a` | texto / texto suave |
| `paper` / `line` | `#f5f8fc` / `#e4eaf2` | fundo claro / borda |
| `radius` / `shadow` | `20px` / `0 18px 50px rgba(11,25,44,.10)` | raio / elevação |
| Tipografia | `Inter` (system fallback) | escala `display`/`title`/`body`/`caption` |

**Verificação INVEST:** I ✅ (independe dos componentes) · N ✅ (valores são ponto de partida) · V ✅ (consistência visual) · E ✅ · S ✅ · T ✅ (contraste/token testável)
