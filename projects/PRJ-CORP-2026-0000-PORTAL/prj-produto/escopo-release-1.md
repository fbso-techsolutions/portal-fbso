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

## 3. Ordem de entrega (5 sprints · 2 semanas · a partir de 16/11/2026)

| Sprint | Período | Features |
|---|---|---|
| **S1 — Fundação** ✅ | 16/11 – 27/11 | FEATURE-0001.0001 (scaffold) · FEATURE-0001.0003 (CI/CD) |
| **S2 — Design System** ✅ | 30/11 – 11/12 | FEATURE-0001.0002 |
| **S3 — Estrutura, navegação e institucional** 📋 | 14/12 – 24/12 | FEATURE-0002.0001 (layout) + 0002.0002…0002.0005 (Home/Sobre/Contato/Legais) |
| **S4 — TechServices e Portfólio SaaS** 📋 | 11/01 – 22/01 | FEATURE-0003.0001 · 0004.0001 (catálogo) · 0004.0002 (página produto) |
| **S5 — SEO, a11y e go-live** 📋 | 25/01 – 05/02 | FEATURE-0005.0001 (SEO) · 0005.0002 (a11y) · 0005.0003 (go-live) |

> ⚠️ S3 (14/12–24/12) cruza o recesso de fim de ano (Natal/Ano Novo); S4 inicia em 11/01 após o retorno.
