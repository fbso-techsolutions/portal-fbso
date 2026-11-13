# ⚙️ Tasks — Sprint 1 (Fundação)

> **O que é.** As `TASK-{NNNN}` são o **trabalho técnico executável** derivado no Planning de
> cada item (story · enabler · runway · débito · bug · incidente). Por decisão do projeto, **tasks
> são documentos técnicos**: vivem **aqui** (pasta técnica) com a especificação completa. A pasta de
> produto (`prj-produto/`) guarda apenas **apontamento** — o [board](../prj-produto/sprints/board-sprint-0001.md),
> o [backlog](../../../docs/produto/backlog/BACKLOG-LIST.md) e a
> [rastreabilidade](../prj-produto/rastreabilidade.md) citam o `código + link`.
>
> **Base:** [padrão de identificação de entidades](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/padrao-identificacao-entidades.md)
> (⚙️ Task · `TASK-{NNNN}` global · arquivo `{ID}-{slug}.md`) e
> [guia INVEST/Enabler](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/guia-invest-enablers-spike.md)
> (§2 granularidade · §4.5 · "a task guarda o esforço real; o item guarda o SP/Job Size").

## Índice

| Task | Origem | Dono | Esforço | Depende de |
|---|---|---|---|---|
| [TASK-0001 — Criar repositório na org](TASK-0001-criar-repositorio-org-github.md) | ENABLER-0001 | Francisco Oliveira | 2h | — |
| [TASK-0002 — Inicializar git/espelho/push](TASK-0002-inicializar-git-espelho-push.md) | ENABLER-0001 | Francisco Oliveira | 2h | TASK-0001 |
| [TASK-0003 — Branch protection + CODEOWNERS](TASK-0003-branch-protection-codeowners.md) | ENABLER-0001 | Lourival Louro | 2h | TASK-0002 |
| [TASK-0004 — Secrets Cloudflare no GitHub](TASK-0004-secrets-cloudflare-github.md) | ENABLER-0001 | Lourival Louro | 1h | TASK-0007 |
| [TASK-0005 — Conta Cloudflare + zona](TASK-0005-conta-cloudflare-zona-dominio.md) | ENABLER-0002 | Lourival Louro | 2h | — |
| [TASK-0006 — Nameservers + delegação NS](TASK-0006-nameservers-delegacao-registro-br.md) | ENABLER-0002 | Lourival Louro | 2h | TASK-0005 |
| [TASK-0007 — API token escopo mínimo](TASK-0007-api-token-escopo-minimo.md) | ENABLER-0002 | Lourival Louro | 1h | TASK-0005 |
| [TASK-0008 — Scaffold Vite + React + TS](TASK-0008-scaffold-vite-react-ts.md) | US-FEAT-0001.0001-0001 | Alfredo Bento | 3h | TASK-0002 |
| [TASK-0009 — Tailwind CSS v4](TASK-0009-tailwind-css-v4.md) | US-FEAT-0001.0001-0001 | Alfredo Bento | 3h | TASK-0008 |
| [TASK-0010 — React Router v8 (prerender)](TASK-0010-react-router-v8-prerender.md) | US-FEAT-0001.0001-0001 | Alfredo Bento | 4h | TASK-0008 |
| [TASK-0011 — Meta/SEO pré-render](TASK-0011-meta-seo-prerender.md) | US-FEAT-0001.0001-0001 | Alfredo Bento | 2h | TASK-0009 · TASK-0010 |
| [TASK-0012 — ESLint flat config](TASK-0012-eslint-flat-config.md) | US-FEAT-0001.0001-0002 | Alfredo Bento | 3h | TASK-0008 |
| [TASK-0013 — Prettier + integração ESLint](TASK-0013-prettier-eslint-config.md) | US-FEAT-0001.0001-0002 | Alfredo Bento | 2h | TASK-0012 |
| [TASK-0014 — tsconfig strict + alias](TASK-0014-tsconfig-strict-alias.md) | US-FEAT-0001.0001-0002 | Alfredo Bento | 2h | TASK-0008 |
| [TASK-0015 — Lint limpo + documentar comandos](TASK-0015-lint-limpo-documentar.md) | US-FEAT-0001.0001-0002 | Alfredo Bento | 1h | TASK-0012 · TASK-0013 · TASK-0014 |
| [TASK-0016 — Estrutura de pastas src/](TASK-0016-estrutura-pastas-src.md) | US-FEAT-0001.0001-0003 | Alfredo Bento | 2h | TASK-0008 |
| [TASK-0017 — Rota / (Home hello world)](TASK-0017-rota-home-hello-world.md) | US-FEAT-0001.0001-0003 | Alfredo Bento | 3h | TASK-0016 |
| [TASK-0018 — Conteúdo em src/content/](TASK-0018-conteudo-src-content.md) | US-FEAT-0001.0001-0003 | Alfredo Bento | 2h | TASK-0016 |
| [TASK-0019 — Build/prerender + smoke local](TASK-0019-build-prerender-smoke-local.md) | US-FEAT-0001.0001-0003 | Alfredo Bento | 1h | TASK-0017 · TASK-0018 |
| [TASK-0020 — Workflow CI (lint/typecheck/build)](TASK-0020-workflow-ci-github-actions.md) | US-FEAT-0001.0003-0004 | Lourival Louro | 4h | TASK-0019 · TASK-0003 |
| [TASK-0021 — Setup Node + cache + steps](TASK-0021-setup-node-cache-steps.md) | US-FEAT-0001.0003-0004 | Lourival Louro | 2h | TASK-0020 |
| [TASK-0022 — Branch protection ↔ status checks](TASK-0022-branch-protection-status-checks.md) | US-FEAT-0001.0003-0004 | Lourival Louro | 1h | TASK-0021 · TASK-0003 |
| [TASK-0023 — wrangler.jsonc + static assets](TASK-0023-wrangler-jsonc-static-assets.md) | US-FEAT-0001.0003-0005 | Lourival Louro | 3h | TASK-0019 |
| [TASK-0024 — Step wrangler deploy + secrets](TASK-0024-step-wrangler-deploy-secrets.md) | US-FEAT-0001.0003-0005 | Lourival Louro | 3h | TASK-0023 · TASK-0021 · TASK-0004 |
| [TASK-0025 — Deploy preview + smoke](TASK-0025-deploy-preview-smoke-cloudflare.md) | US-FEAT-0001.0003-0005 | Lourival Louro | 2h | TASK-0024 · TASK-0005 |
| [TASK-0026 — QA: smoke test do deploy](TASK-0026-qa-smoke-test-deploy.md) | US-FEAT-0001.0003-0005 | Patricia Varra | 2h | TASK-0025 |
| [TASK-0027 — Revisão de aderência ao ADR-001](TASK-0027-revisao-aderencia-adr-001.md) | US-FEAT-0001.0001-0001 | Bolismar da Silva | 2h | TASK-0019 |
| [TASK-0028 — Design tokens](TASK-0028-design-tokens.md) | US-FEAT-0001.0002-0006 | Alfredo Bento | 3h | — |
| [TASK-0029 — Aplicar tokens no app](TASK-0029-aplicar-tokens-app.md) | US-FEAT-0001.0002-0006 | Alfredo Bento | 2h | TASK-0028 |
| [TASK-0030 — Componente Button](TASK-0030-componente-button.md) | US-FEAT-0001.0002-0007 | Alfredo Bento | 3h | TASK-0028 |
| [TASK-0031 — Componentes Card + Section](TASK-0031-componentes-card-section.md) | US-FEAT-0001.0002-0007 | Alfredo Bento | 3h | TASK-0028 |
| [TASK-0032 — Badge + responsividade + QA](TASK-0032-badge-responsividade-qa.md) | US-FEAT-0001.0002-0007 | Alfredo Bento + Patricia Varra | 2h | TASK-0030 · TASK-0031 |

**Totais:** 32 tasks · ~72h de esforço estimado (a calibrar na execução).

## Formato do card

> 📄 **Template e guia (genéricos, platform-standards):**
> [template-task-v1.md](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/template-task-v1.md) ·
> [guia-tasks-planning.md](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/guia-tasks-planning.md).
> Este projeto adota o H1 `⚙️ {ID} — {nome}` e o formato abaixo (promovido à plataforma em 2026-11-11 — ADR-004):

1. **Cabeçalho** — `Origem` (item que originou a task, com link) · `Projeto` · `Sprint` · `Dono` · `Esforço` · `Depende de`.
2. **§1 Objetivo** — por que a task existe (uma frase).
3. **§2 O que implementar/entregar** — passos concretos, detalhados o bastante para humano e IA saberem o "pronto".
4. **§3 Critério de saída (evidência)** — checklist verificável + artefato real (commit/PR/deploy/print).
5. **Evidências** — prova concreta de cada critério do §3 (ID de run/build, link de PR/deploy, output, print).
6. **§4 Runbook (quando aplicável)** — comandos de ligar/desligar/recuperar o entregável; omitir se não houver operação.

> Adoção dos itens 5–6 a partir da TASK-0020 (ADR-006, 2026-11-13): tasks novas **devem** trazê-los.

> 🔁 **Regra viva:** criou/moveu task? Atualize este índice **e** o
> [board](../prj-produto/sprints/board-sprint-0001.md) **e** o
> [backlog](../../../docs/produto/backlog/BACKLOG-LIST.md) **e** a
> [rastreabilidade](../prj-produto/rastreabilidade.md) no mesmo passo.
