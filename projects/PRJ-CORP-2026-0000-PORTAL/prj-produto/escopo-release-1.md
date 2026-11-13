# 🚀 Escopo da Release 1 (MVP estático)

> Fatiamento vertical da primeira entrega. Fonte: [PRD](../../PRD.md) · [rastreabilidade](rastreabilidade.md).

## 1. O que entra

| Épico | Features | Entregável visível |
|---|---|---|
| EPIC-0001 Fundação | 0001.0001 · 0001.0002 · 0001.0003 | Repo + scaffold + design system + CI/CD |
| EPIC-0002 Institucional | 0002.0001…0002.0005 | Layout + Home + Sobre + Contato + Legais |
| EPIC-0003 TechServices | 0003.0001 | Página da divisão |
| EPIC-0004 Portfólio SaaS | 0004.0001 · 0004.0002 | Catálogo + 4 páginas de produto |
| EPIC-0005 SEO/Publicação | 0005.0001…0005.0003 | SEO/a11y + go-live |

> **Páginas legais** (`/privacidade`, `/termos`) entram no MVP com **texto fixo/padrão**
> (decisão — [PENDENCY-0005](../../pendencias.md) ✅).

## 2. O que **não** entra (Release 1)

- Login, banco de dados, formulários integrados, checkout, APIs (→ Release 2/3).
- Analytics e captura de leads (→ Release 2 — B-REQ-08).
- SSO / acesso unificado (→ Release 3 — B-REQ-09).

## 3. Ordem de entrega (8 sprints · 2 semanas · a partir de 16/11/2026)

| Sprint | Período | Features |
|---|---|---|
| **S1 — Fundação** ✅ | 16/11 – 27/11 | FEATURE-0001.0001 (scaffold) · FEATURE-0001.0003 (CI/CD) |
| **S2 — Design System** 📋 | 30/11 – 11/12 | FEATURE-0001.0002 |
| **S3 — Estrutura e navegação** | 14/12 – 24/12 | FEATURE-0002.0001 (layout) |
| **S4 — Home e institucional** | 28/12 – 08/01 | FEATURE-0002.0002 (Home) · 0002.0003 (Sobre) · 0002.0004 (Contato) · 0002.0005 (Legais) |
| **S5 — TechServices** | 11/01 – 22/01 | FEATURE-0003.0001 |
| **S6 — Portfólio SaaS** | 25/01 – 05/02 | FEATURE-0004.0001 (catálogo) · 0004.0002 (página produto) |
| **S7 — SEO/a11y/responsivo** | 08/02 – 19/02 | FEATURE-0005.0001 (SEO) · 0005.0002 (a11y) |
| **S8 — Publicação e homologação** | 22/02 – 05/03 | FEATURE-0005.0003 (go-live) |

> ⚠️ S3/S4 cruzam feriados de fim de ano (Natal/Ano Novo) — ajustar capacidade no planning.
