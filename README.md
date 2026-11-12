# FBSO Corporate Portal

> **Technology · Consulting · Software**

Plataforma digital institucional da **FBSO Technology Solutions**: apresentação da empresa,
divulgação dos serviços, exposição do portfólio SaaS e — futuramente — centralização do
relacionamento comercial e do acesso aos produtos.

**Projeto:** FBSO-CORPORATE-PORTAL · **Domínio principal:** `fbso.com.br` · **Idioma:** pt-BR.

## Onde está o quê

| Caminho | Conteúdo |
|---|---|
| [INTENT.md](INTENT.md) | **Intenção do projeto** (para IAs) — visão, roadmap e não-negociáveis |
| [AGENTS.md](AGENTS.md) | **Regras de operação** (para IAs) — processo, convenções e limites |
| [docs/](docs) | **Produto** — visão, negócio, branding, arquitetura, segurança (persistente) |
| [projects/](projects) | **Projetos** — um folder por entrega (PRD → negócio → produto → técnico) |
| [src/](src) | Código do portal (React + TypeScript + Vite) — criado no scaffold (Sprint 1) |
| [public/](public) | Assets estáticos (robots.txt, favicon, imagens OG) |

## Stack (Release 1 — MVP estático)

React + TypeScript · Vite · Tailwind CSS v4 · React Router v7 (framework mode, `prerender`)
→ build estático em `dist/` publicado na **Cloudflare (Workers + Static Assets)**.

## Regras

- "Promover o genérico, manter o específico" — [platform-standards/standards/](https://github.com/fbso-techsolutions/platform-standards).
- Visão completa do produto: [docs/negocio/visao.md](docs/negocio/visao.md).
- Kit de gestão do projeto (PRD, equipe, pendências, rastreabilidade): [projects/PRJ-CORP-2026-0000-PORTAL/](projects/PRJ-CORP-2026-0000-PORTAL).
