# 🧭 EPIC-0004 — Portfólio de Produtos SaaS

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | `EPIC-0004` — Portfólio de Produtos SaaS |
| B-REQs atendidas | B-REQ-04 · B-REQ-05 |
| Features | 2 — `FEATURE-0004.0001` · `FEATURE-0004.0002` |
| Prioridade | Onda 1-Must (MVP) |
| Status | 📝 Rascunho (2026-11-11) |

## 1. Objetivo

- **Problema:** o visitante não conhece os quatro produtos (Educatio, Fiscalia, Mercator, Materiae).
- **Solução:** catálogo SaaS + página de detalhe por produto, com conteúdo modelado **como dados**
  (`src/content/`).
- **Impacto:** expõe o portfólio e direciona para os sites dos SaaS quando existirem.

## 2. Fora do escopo deste épico

- Sites/aplicações dos próprios SaaS (vivem nos repos `saas-*`).
- Contratação/planos (Release 2) e SSO (Release 3).

## 3. Features derivadas

| Feature | Título | Stories |
|---|---|---|
| [FEATURE-0004.0001](../features/FEATURE-0004.0001-catalogo-saas.md) | Catálogo SaaS (dados + cards) | a detalhar (S6) |
| [FEATURE-0004.0002](../features/FEATURE-0004.0002-pagina-produto.md) | Página de produto (detalhe por SaaS) | a detalhar (S6) |

> ✅ O catálogo já referencia **Materiae** — repo renomeado `saas-rmr` → `saas-materiae`
> (2026-11-13, [PENDENCY-0006](../../pendencias.md) respondida).

> 💡 **Rastreabilidade:** [matriz](../rastreabilidade.md) · **Backlog:** [BACKLOG-LIST](../../../../docs/produto/backlog/BACKLOG-LIST.md).
