# 📋 Board — Sprint 1 (Fundação)

> Camada fina de **status de execução**. O corte e o porquê vivem no
> [sprint-0001-fundacao.md](sprint-0001-fundacao.md); a fila única, no
> [BACKLOG-LIST](../../../../docs/produto/backlog/BACKLOG-LIST.md). As **tasks** (documento técnico)
> vivem em [prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md) — aqui só **apontamento**.

**Etapas:** ⬜ A fazer · 🔄 Em execução · 🔎 Em review · 🧪 Em testes · 🚀 Pronto p/ deploy · ✅ Entregue

## Itens

| Item | Dono | Tasks | Etapa | Evidência |
|---|---|---|---|---|
| [ENABLER-0001 — Repo e ambiente](../../prj-tecnico/enablers/ENABLER-0001-repositorio-ambiente-github.md) | Lourival Louro + Francisco Oliveira | [TASK-0001…0004](../../prj-tecnico/tasks/README.md) | ✅ Entregue | — |
| [ENABLER-0002 — Cloudflare + domínio](../../prj-tecnico/enablers/ENABLER-0002-conta-cloudflare-dominio.md) | Lourival Louro | [TASK-0005…0007](../../prj-tecnico/tasks/README.md) | ✅ Entregue | — |
| [US-FEAT-0001.0001-0001 — Inicializar projeto](../user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | Alfredo Bento | [TASK-0008…0011 · 0027](../../prj-tecnico/tasks/README.md) | ✅ Entregue | [PR #8](https://github.com/fbso-techsolutions/portal-fbso/pull/8) |
| [US-FEAT-0001.0001-0002 — Lint/tsconfig](../user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) | Alfredo Bento | [TASK-0012…0015](../../prj-tecnico/tasks/README.md) | ✅ Entregue | — |
| [US-FEAT-0001.0001-0003 — Estrutura + Home](../user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) | Alfredo Bento | [TASK-0016…0019](../../prj-tecnico/tasks/README.md) | ✅ Entregue | [PR #7](https://github.com/fbso-techsolutions/portal-fbso/pull/7) |
| [US-FEAT-0001.0003-0004 — Pipeline CI/CD](../user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) | Lourival Louro | [TASK-0020…0022](../../prj-tecnico/tasks/README.md) | ✅ Entregue | — |
| [US-FEAT-0001.0003-0005 — Deploy Cloudflare](../user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) | Lourival Louro | [TASK-0023…0026](../../prj-tecnico/tasks/README.md) | 🔄 Em execução | — |

> Evidência aponta para **PR/deploy** (artefato real), não planilha.

## Tasks (saída do Planning)

> Cada item foi decomposto em `TASK-{NNNN}` no Planning. A especificação mora no card
> ([prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md)); aqui só a **camada fina**. Deploy/
> homologação ficam no nível do **item**, não da task. Previsões de data = rolling (preenchidas na execução).

| Check | Task | Origem | Status | Esforço (h) | Previsão | Dono | Evidência |
|---|---|---|---|---|---|---|---|
| 🏁 | [TASK-0001 — Criar repo na org](../../prj-tecnico/tasks/TASK-0001-criar-repositorio-org-github.md) | [ENABLER-0001](../../prj-tecnico/enablers/ENABLER-0001-repositorio-ambiente-github.md) | ✅ Entregue | 2 | S1 | Francisco Oliveira | [repo público](https://github.com/fbso-techsolutions/portal-fbso) |
| 🏁 | [TASK-0002 — git/espelho/push](../../prj-tecnico/tasks/TASK-0002-inicializar-git-espelho-push.md) | [ENABLER-0001](../../prj-tecnico/enablers/ENABLER-0001-repositorio-ambiente-github.md) | ✅ Entregue | 2 | S1 | Francisco Oliveira | [commit 0d4f60e](https://github.com/fbso-techsolutions/portal-fbso/commit/0d4f60e) |
| 🏁 | [TASK-0003 — branch protection](../../prj-tecnico/tasks/TASK-0003-branch-protection-codeowners.md) | [ENABLER-0001](../../prj-tecnico/enablers/ENABLER-0001-repositorio-ambiente-github.md) | ✅ Entregue | 2 | S1 | Lourival Louro | PR + 1 aprovação · enforce admins · CODEOWNERS |
| 🏁 | [TASK-0004 — secrets Cloudflare](../../prj-tecnico/tasks/TASK-0004-secrets-cloudflare-github.md) | [ENABLER-0001](../../prj-tecnico/enablers/ENABLER-0001-repositorio-ambiente-github.md) | ✅ Entregue | 1 | S1 | Lourival Louro | 5 secrets no Environment (ACCOUNT_ID · API_TOKEN · 3× S3/R2) |
| 🏁 | [TASK-0005 — conta Cloudflare](../../prj-tecnico/tasks/TASK-0005-conta-cloudflare-zona-dominio.md) | [ENABLER-0002](../../prj-tecnico/enablers/ENABLER-0002-conta-cloudflare-dominio.md) | ✅ Entregue | 2 | S1 | Lourival Louro | conta ativada + zona fbso.com.br |
| 🏁 | [TASK-0006 — nameservers/NS](../../prj-tecnico/tasks/TASK-0006-nameservers-delegacao-registro-br.md) | [ENABLER-0002](../../prj-tecnico/enablers/ENABLER-0002-conta-cloudflare-dominio.md) | ✅ Entregue | 2 | S1 | Lourival Louro | ray + tess.ns.cloudflare.com |
| 🏁 | [TASK-0007 — API token](../../prj-tecnico/tasks/TASK-0007-api-token-escopo-minimo.md) | [ENABLER-0002](../../prj-tecnico/enablers/ENABLER-0002-conta-cloudflare-dominio.md) | ✅ Entregue | 1 | S1 | Lourival Louro | token criado · rotação 30 dias |
| 🏁 | [TASK-0008 — scaffold Vite](../../prj-tecnico/tasks/TASK-0008-scaffold-vite-react-ts.md) | [US-0001.0001-0001](../user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | ✅ Entregue | 3 | S1 | Alfredo Bento | [PR #3](https://github.com/fbso-techsolutions/portal-fbso/pull/3) |
| 🏁 | [TASK-0009 — Tailwind v4](../../prj-tecnico/tasks/TASK-0009-tailwind-css-v4.md) | [US-0001.0001-0001](../user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | ✅ Entregue | 3 | S1 | Alfredo Bento | [PR #4](https://github.com/fbso-techsolutions/portal-fbso/pull/4) |
| 🏁 | [TASK-0010 — Router v8 prerender](../../prj-tecnico/tasks/TASK-0010-react-router-v8-prerender.md) | [US-0001.0001-0001](../user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | ✅ Entregue | 4 | S1 | Alfredo Bento | [PR #5](https://github.com/fbso-techsolutions/portal-fbso/pull/5) |
| 🏁 | [TASK-0011 — Meta/SEO pré-render](../../prj-tecnico/tasks/TASK-0011-meta-seo-prerender.md) | [US-0001.0001-0001](../user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | ✅ Entregue | 2 | S1 | Alfredo Bento | [PR #6](https://github.com/fbso-techsolutions/portal-fbso/pull/6) |
| 🏁 | [TASK-0012 — ESLint flat](../../prj-tecnico/tasks/TASK-0012-eslint-flat-config.md) | [US-0001.0001-0002](../user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) | ✅ Entregue | 3 | S1 | Alfredo Bento | [PR #9](https://github.com/fbso-techsolutions/portal-fbso/pull/9) |
| 🏁 | [TASK-0013 — Prettier](../../prj-tecnico/tasks/TASK-0013-prettier-eslint-config.md) | [US-0001.0001-0002](../user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) | ✅ Entregue | 2 | S1 | Alfredo Bento | [PR #10](https://github.com/fbso-techsolutions/portal-fbso/pull/10) |
| 🏁 | [TASK-0014 — tsconfig alias](../../prj-tecnico/tasks/TASK-0014-tsconfig-strict-alias.md) | [US-0001.0001-0002](../user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) | ✅ Entregue | 2 | S1 | Alfredo Bento | [PR #11](https://github.com/fbso-techsolutions/portal-fbso/pull/11) |
| 🏁 | [TASK-0015 — lint limpo](../../prj-tecnico/tasks/TASK-0015-lint-limpo-documentar.md) | [US-0001.0001-0002](../user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) | ✅ Entregue | 1 | S1 | Alfredo Bento | [PR #12](https://github.com/fbso-techsolutions/portal-fbso/pull/12) |
| 🏁 | [TASK-0016 — pastas src/](../../prj-tecnico/tasks/TASK-0016-estrutura-pastas-src.md) | [US-0001.0001-0003](../user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) | ✅ Entregue | 2 | S1 | Alfredo Bento | pastas + `.gitkeep` |
| 🏁 | [TASK-0017 — rota / Home](../../prj-tecnico/tasks/TASK-0017-rota-home-hello-world.md) | [US-0001.0001-0003](../user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) | ✅ Entregue | 3 | S1 | Alfredo Bento | [PR #7](https://github.com/fbso-techsolutions/portal-fbso/pull/7) |
| 🏁 | [TASK-0018 — conteúdo content/](../../prj-tecnico/tasks/TASK-0018-conteudo-src-content.md) | [US-0001.0001-0003](../user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) | ✅ Entregue | 2 | S1 | Alfredo Bento | [PR #7](https://github.com/fbso-techsolutions/portal-fbso/pull/7) |
| 🏁 | [TASK-0019 — build + smoke local](../../prj-tecnico/tasks/TASK-0019-build-prerender-smoke-local.md) | [US-0001.0001-0003](../user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) | ✅ Entregue | 1 | S1 | Alfredo Bento | [PR #7](https://github.com/fbso-techsolutions/portal-fbso/pull/7) |
| 🏁 | [TASK-0020 — workflow ci.yml](../../prj-tecnico/tasks/TASK-0020-workflow-ci-github-actions.md) | [US-0001.0003-0004](../user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) | ✅ Entregue | 4 | S1 | Lourival Louro | [PR #14](https://github.com/fbso-techsolutions/portal-fbso/pull/14) |
| 🏁 | [TASK-0021 — setup node/cache](../../prj-tecnico/tasks/TASK-0021-setup-node-cache-steps.md) | [US-0001.0003-0004](../user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) | ✅ Entregue | 2 | S1 | Lourival Louro | [PR #16](https://github.com/fbso-techsolutions/portal-fbso/pull/16) |
| 🏁 | [TASK-0022 — status checks](../../prj-tecnico/tasks/TASK-0022-branch-protection-status-checks.md) | [US-0001.0003-0004](../user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) | ✅ Entregue | 1 | S1 | Lourival Louro | [PR #18](https://github.com/fbso-techsolutions/portal-fbso/pull/18) |
| 🏁 | [TASK-0023 — wrangler.jsonc](../../prj-tecnico/tasks/TASK-0023-wrangler-jsonc-static-assets.md) | [US-0001.0003-0005](../user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) | ✅ Entregue | 3 | S1 | Lourival Louro | [PR #20](https://github.com/fbso-techsolutions/portal-fbso/pull/20) |
| 🏁 | [TASK-0024 — step deploy](../../prj-tecnico/tasks/TASK-0024-step-wrangler-deploy-secrets.md) | [US-0001.0003-0005](../user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) | ✅ Entregue | 3 | S1 | Lourival Louro | [PR #21](https://github.com/fbso-techsolutions/portal-fbso/pull/21) |
| 💡 | [TASK-0025 — deploy preview](../../prj-tecnico/tasks/TASK-0025-deploy-preview-smoke-cloudflare.md) | [US-0001.0003-0005](../user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) | ⬜ A fazer | 2 | S1 | Lourival Louro | — |
| 💡 | [TASK-0026 — QA smoke](../../prj-tecnico/tasks/TASK-0026-qa-smoke-test-deploy.md) | [US-0001.0003-0005](../user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) | ⬜ A fazer | 2 | S1 | Patricia Varra | — |
| 🏁 | [TASK-0027 — revisão ADR-001](../../prj-tecnico/tasks/TASK-0027-revisao-aderencia-adr-001.md) | [US-0001.0001-0001](../user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | ✅ Entregue | 2 | S1 | Bolismar da Silva | [PR #8](https://github.com/fbso-techsolutions/portal-fbso/pull/8) |

**Total de esforço:** 59h.

## Capacidade — consumo (disponibilidade restante × saldo)

> 📊 A **disponibilidade bruta** da sprint vive em [sprint-0001-fundacao.md §3 — Disponibilidade bruta](sprint-0001-fundacao.md)
> (fonte única — "aponta, não copia"). Aqui só o **consumo** (horas comprometidas × saldo).

| Recurso | Papel | Horas comprometidas (tasks) | Disponibilidade restante | Saldo |
|---|---|---|---|---|
| Francisco Oliveira | Tech lead | 4h | — | — |
| Lourival Louro | Infra / DevOps | 23h | — | — |
| Alfredo Bento | Dev frontend | 28h | — | — |
| Bolismar da Silva | Arquiteto | 2h | — | — |
| Patricia Varra | QA | 2h | — | — |
| Daniel Vini | Segurança | 0h | — | — |

> **Compromisso da sprint:** 17 SP (stories) · 4 Job Size (enablers).
> `Disponibilidade restante` = dias úteis **restantes** × horas/dia · `Saldo` = restante − comprometido
> — figuras **dinâmicas**, preenchidas na execução (não duplicam a disponibilidade bruta do sprint doc).
