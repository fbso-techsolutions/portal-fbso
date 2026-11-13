# ✨ FEATURE-0005.0001 — SEO e prerender (meta/OG/sitemap/robots)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0005 — SEO, Acessibilidade e Publicação](../epicos/EPIC-0005-seo-publicacao.md) |
| B-REQ dona | B-REQ-07 |
| Prioridade | Onda 1-Must (MVP) |
| 🔒 Travada por | — (aplicado sobre as páginas existentes) |
| Status | ✅ Revisado (2026-11-13) |

## 1. Objetivo de negócio

Garantir encontrabilidade orgânica e compartilhamento correto.

## 2. Escopo

### Entra
- `<title>`, meta description e Open Graph por página (prerender).
- `sitemap.xml` e `robots.txt`.
- `lang="pt-BR"` e URLs próprias.

### Fora
- Analytics/medição (Release 2).

## 5. User stories desta feature

| ID | História |
|---|---|
| [US-FEAT-0005.0001-0022](../user-stories/US-FEAT-0005.0001-0022-metadados-pagina.md) | Metadados (title/description/OG) por página |
| [US-FEAT-0005.0001-0023](../user-stories/US-FEAT-0005.0001-0023-sitemap-robots.md) | `sitemap.xml` + `robots.txt` |

## 7. Critérios de aceite (DoD)

- [ ] Cada rota pré-renderizada tem title/description/OG próprios; sitemap e robots gerados.
