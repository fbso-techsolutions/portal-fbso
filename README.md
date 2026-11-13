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
| [public/](public) | Assets estáticos — `robots.txt`, favicon, imagens OG (previsto; FEATURE-0005.0001) |

## Stack (Release 1 — MVP estático)

React + TypeScript · Vite · Tailwind CSS v4 · React Router v8 (framework mode, `prerender`)
→ build estático em `dist/client/` publicado na **Cloudflare (Workers + Static Assets)**.

## Desenvolvimento

> Comandos do dia a dia. Requisito: Node.js **24.22.1** (`.nvmrc` — use `nvm use`) + npm 11.

| Comando | O que faz |
|---|---|
| `npm install` | instala as dependências |
| `npm run dev` | sobe o dev server → `http://localhost:5173` |
| `npm run build` | compila para `dist/client/` (`tsc -b && react-router build`) |
| `npm run preview` | serve o build de `dist/client/` localmente |
| `npm run typecheck` | checa os tipos (`tsc -b`) |
| `npm run lint` | roda o ESLint |
| `npm run lint:fix` | aplica as correções automáticas do ESLint |
| `npm run format` | formata o código com Prettier |
| `npm run format:check` | verifica a formatação (modo CI) |
| `npm audit` | checa vulnerabilidades (total) |
| `npm audit --omit=dev` | checa vulnerabilidades só de produção |

**Gate antes do PR** — os três precisam sair limpos (exit 0):

```bash
npm run lint && npm run format:check && npm run typecheck
```

**Imports**: use o alias `@/` → `src/` (`@/components/...`, `@/content/...`, `@/lib/...`),
declarado em `tsconfig.app.json` e `vite.config.ts`.

> 🔧 **Como a base foi criada** (scaffold, one-time): ver [docs/tecnico/setup.md](docs/tecnico/setup.md).

## Regras

- "Promover o genérico, manter o específico" — [platform-standards/standards/](https://github.com/fbso-techsolutions/platform-standards).
- Visão completa do produto: [docs/negocio/visao.md](docs/negocio/visao.md).
- Kit de gestão do projeto (PRD, equipe, pendências, rastreabilidade): [projects/PRJ-CORP-2026-0000-PORTAL/](projects/PRJ-CORP-2026-0000-PORTAL).
