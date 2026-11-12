# ✨ FEATURE-0004.0001 — Catálogo SaaS (dados + cards)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0004 — Portfólio de Produtos SaaS](../epicos/EPIC-0004-portfolio-saas.md) |
| B-REQ dona | B-REQ-04 |
| Prioridade | Onda 1-Must (MVP) |
| 🔒 Travada por | FEATURE-0002.0002 (Home, seção ecossistema) |
| Status | 📝 Rascunho (2026-11-11) |

## 1. Objetivo de negócio

Expor os quatro produtos SaaS (Educatio, Fiscalia, Mercator, Materiae) em cards, com conteúdo
modelado **como dados** em `src/content/saas-catalog.ts`.

## 2. Escopo

### Entra
- Modelo de dados do catálogo (id, nome, descritivo, tagline, status, link).
- Página `/solucoes` com grid de cards.

### Fora
- Página de detalhe por produto (FEATURE-0004.0002) · sites dos próprios SaaS.

## 5. User stories desta feature

| ID | História |
|---|---|
| (a detalhar) | Modelar catálogo SaaS como dados (`src/content/saas-catalog.ts`) |
| (a detalhar) | Página `/solucoes` com cards |

## 7. Critérios de aceite (DoD)

- [ ] Catálogo vem dos dados, não de JSX hardcoded — trocar a fonte não quebra os cards.
