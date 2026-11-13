# 🏗️ Arquitetura — FBSO Corporate Portal

| Campo | Valor |
|---|---|
| Âmbito | Arquitetura do portal e trilha evolutiva em 3 releases |
| Status | ✅ v1 |
| Referências | [ADR-001 (stack)](adrs/adr-001-stack-portal.md) · [DEPLOYMENT](DEPLOYMENT.md) |

## 1. Visão por release

| Release | Forma | Onde roda |
|---|---|---|
| **1 — Institucional (MVP)** | Frontend **estático** (React + Vite + Router v8, `prerender: true`) | Cloudflare Workers + Static Assets (`dist/`) |
| **2 — Comercial** | + Cloudflare Workers (APIs, analytics, lead capture) | Cloudflare (Workers + KV/analytics) |
| **3 — Plataforma** | + FBSO Identity (OIDC) federando os SaaS | Identidade central + SaaS independentes |

## 2. Decisão-chave: o portal não vira monolito

O portal é a **porta de entrada visual**. Autenticação e produtos permanecem **serviços
independentes**:

- Release 3 usa um **provedor de identidade central (OIDC)** — ex.: Keycloak (blueprint em
  [`platform-standards/blueprints/keycloak`](https://github.com/fbso-techsolutions/platform-standards/tree/main/blueprints/keycloak)).
- Cada SaaS continua uma aplicação própria, confiando na identidade central da FBSO.
- **Não** usar cookie-sharing entre subdomínios como estratégia de SSO: fluxos OIDC com tokens,
  sessões e permissões próprias.

## 3. Estrutura do frontend (MVP)

```
src/
├── app/           # router (React Router v8), layout raiz, loaders de conteúdo
├── components/
│   ├── layout/    # Header, Footer, Nav
│   ├── ui/        # Button, Card, Section, Badge (design system interno)
│   └── sections/  # Hero, SaaSGrid, TechServices, CTASection
├── pages/         # Home, Sobre, TechServices, Solucoes, SolucaoDetalhe, Contato
├── content/       # saas-catalog.ts, empresa.ts, servicos.ts  ← conteúdo como DADOS
├── lib/           # seo.ts, constants.ts
└── styles/        # design tokens (Tailwind theme / CSS variables)
```

**Princípio:** conteúdo (catálogo SaaS, diferenciais, textos) modelado como **dados** em
`src/content/`, não JSX hardcoded → a Release 2 troca a fonte por API/CMS sem reescrever
componentes.

## 4. SEO (exigência)

Pré-renderização por página: título, meta description, Open Graph, `sitemap.xml`, `robots.txt`.
Não ser SPA pura dependente de JS.

## 5. Sitemap do MVP

```
/            Home
/sobre       Quem somos
/techservices  Divisão FBSO TechServices
/solucoes    Catálogo SaaS
/solucoes/:slug  Página de produto (link externo quando existir)
/contato     Canais e e-mail
```
