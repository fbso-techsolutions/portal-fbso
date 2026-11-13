# 🗓️ Sprint 1 — Fundação · 16/11/2026 – 27/11/2026

> **Status:** `Em execução` · **Sprint Goal:** "Repo + scaffold + CI/CD publicando o 'hello world' na Cloudflare" ·
> **Board:** [board-sprint-0001.md](board-sprint-0001.md) · **Roteiro:** [roteiro-execucao-sprint-0001.md](roteiro-execucao-sprint-0001.md) · **Tasks:** [prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md) ·
> **Verdade única do corte:** [escopo-release-1](../escopo-release-1.md)

| Campo | Valor |
|---|---|
| Empresa / Marca | FBSO TechSolutions |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Período | 16/11 (seg) → 27/11 (sex) · 2 semanas (10 dias úteis) |
| Foco | Fundação (enablers + stories de scaffold/CI-CD) |
| Capacidade | ver §3 — Disponibilidade bruta (sprint) |
| Escopo | ver §2 — 2 enablers + 5 stories |
| Dono do documento | Tech lead (Francisco Oliveira) + PM/PO (Alessandra Neves) |

## 1. Sprint Goal

**Objetivo:** fundação técnica — repo, scaffold da stack aprovada e pipeline publicando na Cloudflare.

**Resultados esperados:**
- [ ] Repo + espelho local + branch protection (ENABLER-0001).
- [ ] Conta Cloudflare + domínio prontos (ENABLER-0002).
- [ ] Scaffold Vite+TS+Tailwind+Router v8 com `dist/` pré-renderizado (0001.0001).
- [ ] CI/CD publicando o "hello world" (0001.0003).

## 2. Escopo (o corte)

> **Tasks:** cada item foi decomposto em `TASK-{NNNN}` no Planning. A especificação mora em
> [prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md) (27 cards); aqui e no board só **apontamento**.

| Item | SP | Tipo | Tasks | Depende de | Travada por |
|---|---|---|---|---|---|
| [ENABLER-0001 — Repo e ambiente](../../prj-tecnico/enablers/ENABLER-0001-repositorio-ambiente-github.md) | 2 | 🔧 Enabler | [TASK-0001…0004](../../prj-tecnico/tasks/README.md) | — | — |
| [ENABLER-0002 — Cloudflare + domínio](../../prj-tecnico/enablers/ENABLER-0002-conta-cloudflare-dominio.md) | 2 | 🔧 Enabler | [TASK-0005…0007](../../prj-tecnico/tasks/README.md) | — | — |
| [US-FEAT-0001.0001-0001 — Inicializar projeto](../user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | 5 | 💬 Story | [TASK-0008…0011 · 0027](../../prj-tecnico/tasks/README.md) | [ENABLER-0001](../../prj-tecnico/enablers/ENABLER-0001-repositorio-ambiente-github.md) | — |
| [US-FEAT-0001.0001-0002 — Lint/tsconfig](../user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) | 3 | 💬 Story | [TASK-0012…0015](../../prj-tecnico/tasks/README.md) | [0001 — Inicializar projeto](../user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | — |
| [US-FEAT-0001.0001-0003 — Estrutura + Home](../user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) | 3 | 💬 Story | [TASK-0016…0019](../../prj-tecnico/tasks/README.md) | [0001 — Inicializar projeto](../user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | — |
| [US-FEAT-0001.0003-0004 — Pipeline CI/CD](../user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) | 3 | 💬 Story | [TASK-0020…0022](../../prj-tecnico/tasks/README.md) | [0003 — Estrutura + Home](../user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) · [ENABLER-0001](../../prj-tecnico/enablers/ENABLER-0001-repositorio-ambiente-github.md) | — |
| [US-FEAT-0001.0003-0005 — Deploy Cloudflare](../user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) | 3 | 💬 Story | [TASK-0023…0026](../../prj-tecnico/tasks/README.md) | [0004 — Pipeline CI/CD](../user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) · [ENABLER-0002](../../prj-tecnico/enablers/ENABLER-0002-conta-cloudflare-dominio.md) | — |

**Não incluído:** conteúdo institucional (S3/S4), design tokens finais (S2).

## 3. Capacidade — Disponibilidade bruta (sprint) · fonte única

> 📊 **Fonte única da capacidade bruta** ("aponta, não copia") — o [board](board-sprint-0001.md)
> consome esta disponibilidade para calcular horas comprometidas × saldo; não duplica a tabela.

| Recurso | Papel | Disponibilidade bruta (sprint) | Observação |
|---|---|---|---|
| Francisco Oliveira | Tech lead | 40h | — |
| Lourival Louro | Infra / DevOps | 40h | — |
| Alfredo Bento | Dev frontend | 80h | — |
| Bolismar da Silva | Arquiteto | 40h | — |
| Patricia Varra | QA | 40h | — |
| Daniel Vini | Segurança | sob demanda | acionado sob demanda |

> Disponibilidade = 10 dias úteis × 8h × alocação ([equipe.md](../../equipe.md)). A Sprint 1 é
> **100% fundação**: a régua 70/20/10 de *capacity allocation* não se aplica literalmente (não há
> story de valor de negócio neste corte).

## 4. Riscos e dependências

| ID | Risco | Impacto | Mitigação |
|---|---|---|---|
| RISK-0001 | Domínio/NS no registro.br atrasa | Baixo (não bloqueia deploy preview) | deploy em URL Cloudflare até NS propagar |
| RISK-0002 | `coding-standards-react.md` ainda inexistente | Baixo | alinhar por referência; registrar pendência |

## 5. Definition of Done

- [ ] Stories com `✅ Entregue` no backlog (DoD + artefato verificável — PR/deploy).
- [ ] `npm run build` verde no CI e deploy acessível.

## 6. Execução (log)

> 📓 **Diário de execução** — registra o **como** (comandos, decisões, desvios) de cada tarefa.
> O **status** continua no [board](board-sprint-0001.md); aqui fica a **trilha de auditoria**.
> Regra: **toda tarefa executada ganha uma linha aqui**, no mesmo passo.

| Data | Item | O que foi feito (comandos/ações) | Decisões/desvios |
|---|---|---|---|
| 2026-11-11 | [TASK-0001](../../prj-tecnico/tasks/TASK-0001-criar-repositorio-org-github.md) | `gh repo create fbso-techsolutions/portal-fbso --public` | público "por enquanto" |
| 2026-11-11 | [TASK-0002](../../prj-tecnico/tasks/TASK-0002-inicializar-git-espelho-push.md) | `git init -b main` · `git commit -m "primeiro commit"` · `git push -u origin main` | — |
| 2026-11-11 | [TASK-0003](../../prj-tecnico/tasks/TASK-0003-branch-protection-codeowners.md) | branch protection (PR + 1 aprovação + enforce admins) + `CODEOWNERS` | `@bolismar69` como owner · PR #1 |
| 2026-11-12 | [TASK-0004](../../prj-tecnico/tasks/TASK-0004-secrets-cloudflare-github.md) | 5 secrets no Environment (`ACCOUNT_ID` · `API_TOKEN` · 3× S3/R2) | desvio: 3 secrets extras S3/R2 |
| 2026-11-12 | [TASK-0005](../../prj-tecnico/tasks/TASK-0005-conta-cloudflare-zona-dominio.md) | conta Cloudflare ativada + zona `fbso.com.br` | — |
| 2026-11-12 | [TASK-0006](../../prj-tecnico/tasks/TASK-0006-nameservers-delegacao-registro-br.md) | nameservers `ray` + `tess.ns.cloudflare.com` | registrados no [DEPLOYMENT.md](../../../../docs/tecnico/arquitetura/DEPLOYMENT.md) |
| 2026-11-12 | [TASK-0007](../../prj-tecnico/tasks/TASK-0007-api-token-escopo-minimo.md) | API token criado | rotação a cada 30 dias |
| 2026-11-12 | [TASK-0008](../../prj-tecnico/tasks/TASK-0008-scaffold-vite-react-ts.md) | `npm create vite@latest . -- --template react-ts` · deps pinadas (`--save-exact`) | scaffold na **raiz** (não `frontend/`) · PR #3 |
| 2026-11-12 | [TASK-0009](../../prj-tecnico/tasks/TASK-0009-tailwind-css-v4.md) | `npm install --save-dev --save-exact tailwindcss @tailwindcss/vite` · plugin no `vite.config.ts` · entry `src/styles/index.css` | tokens em [design-tokens.md](../../../../docs/tecnico/ux-ui/design-tokens.md); tema `@theme` na S2 · PR #4 |
| 2026-11-12 | [TASK-0010](../../prj-tecnico/tasks/TASK-0010-react-router-v8-prerender.md) | `npm install react-router @react-router/dev @react-router/node` · scripts `react-router dev/build` · `src/app/{root,routes}.tsx` + `src/pages/Home.tsx` | adotado **v8** (docs v7→v8); prerender → `dist/client/index.html` |
| 2026-11-12 | [TASK-0011](../../prj-tecnico/tasks/TASK-0011-meta-seo-prerender.md) | `meta` export na Home (`title`/`description`/`og:*`) | `lang`/charset/viewport no `root.tsx`; build → `dist/client/index.html` com meta/OG |
| 2026-11-12 | [TASK-0016](../../prj-tecnico/tasks/TASK-0016-estrutura-pastas-src.md) | `mkdir -p src/components/{layout,ui,sections} src/content src/lib` + `.gitkeep` | pastas vazias com `.gitkeep`; `app/`/`pages/`/`styles/` já existiam |
| 2026-11-13 | [TASK-0017](../../prj-tecnico/tasks/TASK-0017-rota-home-hello-world.md) | `src/components/layout/AppLayout.tsx` (header/main/footer) no `root.tsx` · Home em `src/pages/Home.tsx` | layout mínimo aplicado a todas as rotas via `root.tsx`; eslint ignora `.react-router/` e libera `meta` no react-refresh (config completa = TASK-0012) |
| 2026-11-13 | [TASK-0018](../../prj-tecnico/tasks/TASK-0018-conteudo-src-content.md) | `src/content/site.ts` + `src/content/home.ts` com `SiteContent`/`HomeContent` | conteúdo como dados; meta da Home lê `siteContent` (sem literal no JSX) |
| 2026-11-13 | [TASK-0019](../../prj-tecnico/tasks/TASK-0019-build-prerender-smoke-local.md) | `npm run build` → `dist/client/index.html` com "hello world"/header/footer · `npm run preview` (HTTP 200) | script `preview` = `vite preview --outDir dist/client`; sem erro no preview |

## 7. Decisões pendentes

1. ✅ **Capacidade calibrada** no planning (2026-11-11) — ver §3.
2. ✅ **Gate DoR aprovado** (2026-11-11) — 5 stories + 2 enablers marcados `✅ Revisado`
   ([checklist DoR](checklist-dor-sprint-0001.md)).
3. ✅ **PENDENCY-0007 resolvida** (2026-11-11) — dev frontend confirmado: Alfredo Bento (100%).

---

> 🔁 **Regra viva:** mudou o corte? Atualize este documento + [board](board-sprint-0001.md) +
> [rastreabilidade](../rastreabilidade.md) + [backlog](../../../../docs/produto/backlog/BACKLOG-LIST.md) +
> [tasks](../../prj-tecnico/tasks/README.md) no mesmo passo.
