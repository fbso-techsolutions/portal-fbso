# 🏁 Roteiro de Execução — Sprint 1 (Fundação) · kickoff 16/11

> **Status:** ✅ **Executado** — as 27 tasks das ondas 1–11 foram concluídas (encerramento 2026-11-13;
> detalhes no [sprint doc §8 Fechamento](sprint-0001-fundacao.md)).

> **O que é:** a ordem de execução das 27 tasks do corte, por dependência — o "plano de voo" do
> kickoff. Complementa o [sprint doc](sprint-0001-fundacao.md) (o **quê/porquê**) e o
> [board](board-sprint-0001.md) (o **status**). Aqui só a **sequência**.
>
> **Leitura:** cada **onda** = tasks que rodam **em paralelo** (sem dependência entre si). A onda
> seguinte só destrava quando a anterior entrega o que ela espera. Dono = nome completo
> (fonte: [equipe.md](../../equipe.md)). Capacidade: ver [sprint §3](sprint-0001-fundacao.md).

## 0. Pré-requisitos do kickoff (já cumpridos)

- [x] DoR aprovado (5 stories + 2 enablers `✅ Revisado`) — [checklist](checklist-dor-sprint-0001.md).
- [x] PENDENCY-0007 resolvida — dev frontend = **Alfredo Bento** (100%).
- [x] Capacidade calibrada (59h · 17 SP · 4 JS).

## 1. Fase 1 — Fundação de ambiente (repo + Cloudflare) · dias 1–2

### Onda 1 — dia 1 (16/11), destrava tudo
- [TASK-0001 — Criar repo na org](../../prj-tecnico/tasks/TASK-0001-criar-repositorio-org-github.md) · Francisco Oliveira · 2h
- [TASK-0005 — Conta Cloudflare + zona](../../prj-tecnico/tasks/TASK-0005-conta-cloudflare-zona-dominio.md) · Lourival Louro · 2h

### Onda 2 — repo/cloud prontos
- [TASK-0002 — git/espelho/push](../../prj-tecnico/tasks/TASK-0002-inicializar-git-espelho-push.md) · Francisco Oliveira · 2h
- [TASK-0006 — nameservers/NS](../../prj-tecnico/tasks/TASK-0006-nameservers-delegacao-registro-br.md) · Lourival Louro · 2h
- [TASK-0007 — API token](../../prj-tecnico/tasks/TASK-0007-api-token-escopo-minimo.md) · Lourival Louro · 1h

### Onda 3 — ambiente protegido + scaffold
- [TASK-0003 — branch protection](../../prj-tecnico/tasks/TASK-0003-branch-protection-codeowners.md) · Lourival Louro · 2h
- [TASK-0004 — secrets Cloudflare](../../prj-tecnico/tasks/TASK-0004-secrets-cloudflare-github.md) · Lourival Louro · 1h
- [TASK-0008 — scaffold Vite](../../prj-tecnico/tasks/TASK-0008-scaffold-vite-react-ts.md) · Alfredo Bento · 3h

## 2. Fase 2 — Base do código (Alfredo, em paralelo) · dias 2–5

### Onda 4 — ferramentas sobre o scaffold
- [TASK-0009 — Tailwind v4](../../prj-tecnico/tasks/TASK-0009-tailwind-css-v4.md) · 3h
- [TASK-0010 — Router v8 prerender](../../prj-tecnico/tasks/TASK-0010-react-router-v8-prerender.md) · 4h
- [TASK-0012 — ESLint flat](../../prj-tecnico/tasks/TASK-0012-eslint-flat-config.md) · 3h
- [TASK-0014 — tsconfig alias](../../prj-tecnico/tasks/TASK-0014-tsconfig-strict-alias.md) · 2h
- [TASK-0016 — pastas src/](../../prj-tecnico/tasks/TASK-0016-estrutura-pastas-src.md) · 2h

### Onda 5 — composição sobre a base
- [TASK-0011 — Meta/SEO pré-render](../../prj-tecnico/tasks/TASK-0011-meta-seo-prerender.md) · 2h
- [TASK-0013 — Prettier](../../prj-tecnico/tasks/TASK-0013-prettier-eslint-config.md) · 2h
- [TASK-0017 — rota / Home](../../prj-tecnico/tasks/TASK-0017-rota-home-hello-world.md) · 3h
- [TASK-0018 — conteúdo content/](../../prj-tecnico/tasks/TASK-0018-conteudo-src-content.md) · 2h

### Onda 6 — fechamento do scaffold
- [TASK-0015 — lint limpo](../../prj-tecnico/tasks/TASK-0015-lint-limpo-documentar.md) · 1h
- [TASK-0019 — build + smoke local](../../prj-tecnico/tasks/TASK-0019-build-prerender-smoke-local.md) · 1h

> **Marco:** `npm run build` verde + `dist/` pré-renderizado = destrava a Fase 3.

## 3. Fase 3 — CI/CD + deploy (Lourival) · dias 5–8

### Onda 7 — pipeline + revisão
- [TASK-0020 — workflow ci.yml](../../prj-tecnico/tasks/TASK-0020-workflow-ci-github-actions.md) · Lourival Louro · 4h
- [TASK-0023 — wrangler.jsonc](../../prj-tecnico/tasks/TASK-0023-wrangler-jsonc-static-assets.md) · Lourival Louro · 3h
- [TASK-0027 — revisão ADR-001](../../prj-tecnico/tasks/TASK-0027-revisao-aderencia-adr-001.md) · Bolismar da Silva · 2h

### Onda 8
- [TASK-0021 — setup node/cache](../../prj-tecnico/tasks/TASK-0021-setup-node-cache-steps.md) · Lourival Louro · 2h

### Onda 9
- [TASK-0022 — status checks](../../prj-tecnico/tasks/TASK-0022-branch-protection-status-checks.md) · Lourival Louro · 1h
- [TASK-0024 — step deploy](../../prj-tecnico/tasks/TASK-0024-step-wrangler-deploy-secrets.md) · Lourival Louro · 3h

### Onda 10
- [TASK-0025 — deploy preview + smoke](../../prj-tecnico/tasks/TASK-0025-deploy-preview-smoke-cloudflare.md) · Lourival Louro · 2h

> **Marco:** deploy automático publicando o "hello world" em URL da Cloudflare (Sprint Goal ✅).

## 4. Fase 4 — QA e fechamento · dias 8–10

### Onda 11
- [TASK-0026 — QA smoke do deploy](../../prj-tecnico/tasks/TASK-0026-qa-smoke-test-deploy.md) · Patricia Varra · 2h

## 5. Caminho crítico (não pode atrasar)

```
TASK-0001 → 0002 → 0008 → 0016 → 0017 → 0019 → 0020 → 0021 → 0024 → 0025 → 0026
```
(~26h de esforço direto no caminho; paralelo a ele corre a trilha Cloudflare `0005 → 0007 → 0004`).

## 6. Pontos de atenção

| # | Atenção | Impacto | Ação |
|---|---|---|---|
| 1 | Delegacão NS no registro.br (`RISK-0001`) | não bloqueia | deploy em URL preview até o NS propagar |
| 2 | ~~`coding-standards-react.md` ainda não existe (`RISK-0002`)~~ ✅ criado (2026-11-13, ADR-007) | baixo | alinhar por referência; registrar pendência se divergir |
| 3 | `TASK-0004` (secrets) depende do token (`TASK-0007`) | médio | token antes de configurar o secret |

---

> 🔁 **Regra viva:** a ordem reflete as dependências do [board](board-sprint-0001.md). Mudou uma
> dependência? Atualize este roteiro + o board + o índice de [tasks](../../prj-tecnico/tasks/README.md)
> no mesmo passo.
