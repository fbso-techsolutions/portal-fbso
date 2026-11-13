# 💬 User Story: US-FEAT-0005.0001-0023 — `sitemap.xml` + `robots.txt`

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0005](../epicos/EPIC-0005-seo-publicacao.md) ➔ [FEATURE-0005.0001](../features/FEATURE-0005.0001-seo-prerender.md) ➔ `US-FEAT-0005.0001-0023` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-07 |
| Status | ✅ Revisado (2026-11-13) |

## 1. Declaração

- **Como** time de engenharia, **quero** gerar `sitemap.xml` e `robots.txt` no build, **para**
  orientar a indexação pelos buscadores.

## 2. Cenários (Gherkin)

- **Dado que** o build roda, **quando** acesso `/sitemap.xml` e `/robots.txt`, **então** ambos são
  servidos.
- **Dado que** o sitemap é gerado, **quando** o leio, **então** lista as rotas públicas do portal.

## 3. Não funcionais

- Gerados no build/prerender (não hardcoded); `robots.txt` aponta para o sitemap.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
