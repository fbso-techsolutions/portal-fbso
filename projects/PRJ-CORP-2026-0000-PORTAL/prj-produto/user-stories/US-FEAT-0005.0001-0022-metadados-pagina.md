# 💬 User Story: US-FEAT-0005.0001-0022 — Metadados (title/description/OG) por página

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0005](../epicos/EPIC-0005-seo-publicacao.md) ➔ [FEATURE-0005.0001](../features/FEATURE-0005.0001-seo-prerender.md) ➔ `US-FEAT-0005.0001-0022` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-07 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** time de engenharia, **quero** metadados próprios (`<title>`, meta description, Open Graph)
  por página, **para** encontrabilidade orgânica e compartilhamento correto.

## 2. Cenários (Gherkin)

- **Dado que** cada rota é pré-renderizada, **quando** o build roda, **então** o HTML traz
  `title`/`description`/`og:*` próprios de cada página.
- **Dado que** a página é compartilhada, **quando** a URL é aberta por um crawler, **então** os
  metadados corretos são servidos.

## 3. Não funcionais

- Helper centralizado (`src/lib/seo.ts`); `lang="pt-BR"` e URLs próprias mantidas.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
