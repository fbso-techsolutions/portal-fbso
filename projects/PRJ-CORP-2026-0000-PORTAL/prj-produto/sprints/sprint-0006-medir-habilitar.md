# 🗓️ Sprint 6 — Medir + habilitar

> **Status:** `📝 Planejada` · **Sprint Goal:** "Portal medindo tráfego com consentimento (LGPD) + modo manutenção disponível" ·
> **Board:** [board-sprint-0006.md](board-sprint-0006.md) · **DoR:** [checklist-dor-sprint-0006.md](checklist-dor-sprint-0006.md) · **Tasks:** [prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md) (TASK-0056+ a criar) ·
> **Verdade única do corte:** [escopo-release-2](../escopo-release-2.md)

| Campo | Valor |
|---|---|
| Empresa / Marca | FBSO TechSolutions |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Período | 08/02/2027 – 19/02/2027 (2 semanas) |
| Foco | Medir + habilitar — Workers, analytics consentido, LGPD, modo manutenção |
| Capacidade | ver §3 (a calibrar) |
| Escopo | ver §2 — 2 enablers + 4 stories |
| Dono do documento | Tech lead (Francisco Oliveira) + PM/PO (Alessandra Neves) |

## 1. Sprint Goal

**Objetivo:** portal medindo tráfego com consentimento (LGPD) + modo manutenção disponível.

**Resultados esperados:**
- [ ] Worker script no ar (ENABLER-0003) — endpoint server-side + binding `ASSETS`.
- [ ] Modo manutenção on/off via KV, sem redeploy (ENABLER-0005).
- [ ] Banner de consentimento + Consent Mode v2 (US-0030).
- [ ] Analytics (GA4) disparando **só** após consentimento (US-0028).
- [ ] Origem de acessos (UTM/referrer) + eventos-chave no GA4 (US-0029).
- [ ] Política de privacidade/termos atualizados (US-0031).

## 2. Escopo (o corte)

| Item | SP | Tipo | Tasks | Depende de | Travada por |
|---|---|---|---|---|---|
| [ENABLER-0003 — Cloudflare Workers + API](../../prj-tecnico/enablers/ENABLER-0003-cloudflare-workers-api.md) | 3 | 🔧 Enabler | [TASK-0056…0058](../../prj-tecnico/tasks/README.md) | — | — |
| [ENABLER-0005 — Modo manutenção (Worker + KV)](../../prj-tecnico/enablers/ENABLER-0005-modo-manutencao-worker-kv.md) | 2 | 🔧 Enabler | [TASK-0059…0061](../../prj-tecnico/tasks/README.md) | ENABLER-0003 | — |
| [US-FEAT-0006.0006-0030 — Banner de consentimento](../user-stories/US-FEAT-0006.0006-0030-banner-consentimento.md) | 5 | 💬 Story | [TASK-0062…0064](../../prj-tecnico/tasks/README.md) | — | — |
| [US-FEAT-0006.0001-0028 — Analytics consentido](../user-stories/US-FEAT-0006.0001-0028-analytics-consentido.md) | 3 | 💬 Story | [TASK-0065](../../prj-tecnico/tasks/README.md) | US-0030 | — |
| [US-FEAT-0006.0001-0029 — Origem + eventos-chave](../user-stories/US-FEAT-0006.0001-0029-origem-acessos-eventos.md) | 3 | 💬 Story | [TASK-0066](../../prj-tecnico/tasks/README.md) | US-0028 · US-0030 | — |
| [US-FEAT-0006.0006-0031 — Política/termos (LGPD)](../user-stories/US-FEAT-0006.0006-0031-atualizar-politica-privacidade.md) | 2 | 💬 Story | [TASK-0067](../../prj-tecnico/tasks/README.md) | — | — |

**Não incluído:** S7 (formulários/CRM) · S8 (planos/consultoria) · ENABLER-0004 (R3 runway).

## 3. Capacidade — Disponibilidade bruta (sprint) · fonte única

> 📊 **Fonte única da capacidade bruta.** Disponibilidade = 10 dias úteis × 8h × alocação
> ([equipe.md](../../equipe.md)). Calibrada no planning (2026-11-25).

| Recurso | Papel | Disponibilidade bruta (sprint) | Observação |
|---|---|---|---|
| Francisco Oliveira | Tech lead | 40h | 50% |
| Bolismar da Silva | Arquiteto | 40h | 50% |
| Alfredo Bento | Dev frontend | 80h | 100% |
| Lourival Louro | Infra / DevOps | 40h | 50% |
| Patricia Varra | QA | 40h | 50% |
| Daniel Vini | Segurança | sob demanda | acionado sob demanda |
| Jurídico / LGPD | Jurídico | sob demanda | acionado sob demanda |

## 4. Riscos e dependências (gate DoR)

| ID | Risco / Dependência | Impacto | Mitigação |
|---|---|---|---|
| PENDENCY-0014 | Conta/propriedade GA4 + Measurement ID | ✅ Resolvida (G-LCBF75K8KW) | — |
| PENDENCY-0012 | Base legal transferência internacional (art. 33) | ✅ Resolvida | — |
| PENDENCY-0013 | Texto de privacidade não redigido | ✅ Resolvida | — |
| PENDENCY-0011 | Logo/identidade visual definitiva | 🟡 Afeta página de manutenção/banner | usar branding provisório |

## 5. Definition of Done

- [ ] Stories/enablers com `✅ Entregue` no backlog (DoD + artefato verificável).
- [ ] Analytics respeitando consentimento (Consent Mode v2) em produção.
- [ ] Modo manutenção liga/desliga **sem redeploy**.

## 6. Execução (log)

> 📓 A preencher durante a execução (uma linha por task).

| Data | Item | O que foi feito | Decisões/desvios |
|---|---|---|---|
| 2026-11-25 | TASK-0056 | Worker script (`src/worker/index.ts`) + `main`/binding `ASSETS` no `wrangler.jsonc`; dry-run OK | `run_worker_first: true` (pass-through p/ assets); deploy automatizado fica na TASK-0058 |
| 2026-11-25 | TASK-0057 | Endpoint `GET /api/health` (JSON 200) + roteamento `/api/*` no Worker; teste unitário | Curl no deploy fica na TASK-0058 (CI) |
| 2026-11-25 | TASK-0058 | Passo `Validar Worker + assets (dry-run)` no `deploy.yml`; dry-run OK nos 3 ambientes | Deploy contínuo (merge → main) a comprovar no release flow |
| 2026-11-25 | TASK-0059 | KV namespace `MAINTENANCE` criado (id `6387a3e…`); binding `KV` no `wrangler.jsonc`; `maintenance=off` gravado (`--remote`) | KV clássico (instant não habilitado, code 10062); toggle exige `--remote` |

## 7–9. Review · Retrospectiva · Encerramento

> A preencher após a execução.

## 10. Decisões pendentes deste documento

1. `[x]` **Gate DoR (pendências)** — PENDENCY-0012/0013/0014 ✅ todas resolvidas.
2. `[x]` **Estimativas (SP)** — 0030=5 · 0028=3 · 0029=3 · 0031=2 (total 13 SP).
3. `[x]` **Capacidade** — calibrada (§3).
4. `[x]` **Período** — 08/02–19/02/2027.
5. `[x]` **Tasks** — decompostas em TASK-0056…0067 (12 tasks).

---

> 🔁 **Regra viva:** mudou o corte? Atualize este documento + board + rastreabilidade + backlog + tasks no mesmo passo.
