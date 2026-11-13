# 🗓️ Sprint 5 — SEO, a11y e go-live · 25/01/2027 – 05/02/2027

> **Status:** `✅ Concluída (executada antecipadamente em 2026-11-13; janela prevista 25/01–05/02)` · **Sprint Goal:** "Portal encontrável (SEO), acessível (a11y) e publicado no domínio próprio `fbso.com.br`" ·
> **Board:** [board-sprint-0005.md](board-sprint-0005.md) · **Tasks:** [prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md) ·
> **Verdade única do corte:** [escopo-release-1](../escopo-release-1.md)

| Campo | Valor |
|---|---|
| Empresa / Marca | FBSO TechSolutions |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Período | 25/01 (seg) → 05/02 (sex) · 2 semanas (10 dias úteis) |
| Foco | SEO, acessibilidade e publicação no domínio próprio (go-live) |
| Capacidade | ver §3 — Disponibilidade bruta (sprint) |
| Escopo | ver §2 — 6 stories (FEATURE-0005.0001…0005.0003) |
| Dono do documento | Tech lead (Francisco Oliveira) + PM/PO (Alessandra Neves) |

## 1. Sprint Goal

**Objetivo:** fechar a Release 1 — portal encontrável, acessível e publicado no `fbso.com.br` com homologação.

**Resultados esperados:**
- [x] Metadados por página + `sitemap.xml`/`robots.txt` (0005.0001).
- [x] Responsividade e acessibilidade básica de todas as páginas (0005.0002).
- [x] `https://fbso.com.br` no ar com HTTPS e smoke aprovado (0005.0003).

## 2. Escopo (o corte)

| Item | SP | Tipo | Tasks | Depende de | Travada por |
|---|---|---|---|---|---|
| [US-FEAT-0005.0001-0022 — Metadados por página](../user-stories/US-FEAT-0005.0001-0022-metadados-pagina.md) | 3 | 💬 Story | [TASK-0050](../../prj-tecnico/tasks/README.md) | — | — |
| [US-FEAT-0005.0001-0023 — sitemap + robots](../user-stories/US-FEAT-0005.0001-0023-sitemap-robots.md) | 3 | 💬 Story | [TASK-0051](../../prj-tecnico/tasks/README.md) | [0022](../user-stories/US-FEAT-0005.0001-0022-metadados-pagina.md) | — |
| [US-FEAT-0005.0002-0024 — Responsividade](../user-stories/US-FEAT-0005.0002-0024-responsividade.md) | 5 | 💬 Story | [TASK-0052](../../prj-tecnico/tasks/README.md) | — | — |
| [US-FEAT-0005.0002-0025 — Acessibilidade básica](../user-stories/US-FEAT-0005.0002-0025-acessibilidade-basica.md) | 3 | 💬 Story | [TASK-0053](../../prj-tecnico/tasks/README.md) | — | — |
| [US-FEAT-0005.0003-0026 — Domínio custom + HTTPS](../user-stories/US-FEAT-0005.0003-0026-dominio-custom-https.md) | 3 | 💬 Story | [TASK-0054](../../prj-tecnico/tasks/README.md) | — | — |
| [US-FEAT-0005.0003-0027 — Homologação e go-live](../user-stories/US-FEAT-0005.0003-0027-homologacao-golive.md) | 3 | 💬 Story | [TASK-0055](../../prj-tecnico/tasks/README.md) | [0023](../user-stories/US-FEAT-0005.0001-0023-sitemap-robots.md) · [0025](../user-stories/US-FEAT-0005.0002-0025-acessibilidade-basica.md) · [0026](../user-stories/US-FEAT-0005.0003-0026-dominio-custom-https.md) | — |

**Não incluído:** Analytics (R2) · auditoria WCAG formal completa (evolução) · contratação/SSO (R2/R3).

## 3. Capacidade — Disponibilidade bruta (sprint) · fonte única

> 📊 Fonte única da capacidade bruta. O [board](board-sprint-0005.md) consome esta disponibilidade.

| Recurso | Papel | Disponibilidade bruta (sprint) | Observação |
|---|---|---|---|
| Alfredo Bento | Dev frontend | 80h | SEO (0050/0051) + a11y (0052/0053) |
| Lourival Louro | Infra / DevOps | 40h | domínio + HTTPS + homologação (0054/0055) |
| Patricia Varra | QA | 40h | smoke de go-live (0055) |

## 4. Riscos e dependências

| ID | Risco | Impacto | Mitigação |
|---|---|---|---|
| RISK-0001 | Domínio/NS no registro.br atrasa | Baixo (não bloqueia deploy preview) | deploy segue em URL Cloudflare até NS propagar |
| RISK-0008 | Propagação de DNS + emissão de certificado pode levar horas | Baixo | validação antes do smoke; fallback na URL preview |

## 5. Definition of Done

- [x] Stories `✅ Entregue` no backlog (DoD + artefato verificável — PR/deploy).
- [x] `npm run lint` · `format:check` · `typecheck` verdes no CI.
- [x] `https://fbso.com.br` no ar com HTTPS e smoke test aprovado.

## 6. Execução (log)

> 📓 Diário de execução — preenchido a cada tarefa executada (regra viva).

| Data | Item | O que foi feito (comandos/ações) | Decisões/desvios |
|---|---|---|---|
| 2026-11-13 | [TASK-0050](../../prj-tecnico/tasks/TASK-0050-metadados-pagina.md) | `src/lib/seo.ts` (helper `seo()`) · 8 páginas refatoradas para usá-lo (title/description/OG) | fonte única de SEO · US-0005.0001-0022 concluída |
| 2026-11-13 | [TASK-0051](../../prj-tecnico/tasks/TASK-0051-sitemap-robots.md) | `public/robots.txt` + hook `buildEnd` gerando `sitemap.xml` no build | sitemap gerado (11 URLs) via catálogo · US-0005.0001 concluída |
| 2026-11-13 | [TASK-0052](../../prj-tecnico/tasks/TASK-0052-responsividade.md) | `AppLayout`: `overflow-x-hidden` · revisão de breakpoints responsivos nas páginas | páginas já responsivas (construídas mobile-first) · US-0005.0002-0024 concluída |
| 2026-11-13 | [TASK-0053](../../prj-tecnico/tasks/TASK-0053-acessibilidade-basica.md) | `AppLayout`: skip link + `id="conteudo"` no main | semântica/foco/aria já presentes · US-0005.0002 concluída |
| 2026-11-13 | [TASK-0054](../../prj-tecnico/tasks/TASK-0054-dominio-custom-https.md) | NS delegados (registro.br) + Custom Domain (Workers) + HTTPS (Full Strict) — `https://fbso.com.br` no ar | configuração realizada (Lourival) · US-0005.0003-0026 concluída |
| 2026-11-13 | [TASK-0055](../../prj-tecnico/tasks/TASK-0055-homologacao-golive.md) | smoke em `https://fbso.com.br`: 8 rotas `200` + `www` OK | go-live concluído · **Sprint 5 completa — Release 1 entregue** |

## 7. Sprint Review — `[Encerramento]`

### 7.1 Demonstração das entregas

Portal no ar em `https://fbso.com.br` com SEO (metadados + sitemap/robots), acessibilidade (skip link, foco, semântica) e HTTPS.

### 7.2 Validação dos resultados

| Item | Resultado | Observações |
|---|---|---|
| US-FEAT-0005.0001-0022/0023 — Metadados + sitemap | ✅ Aceito | `seo()` + sitemap gerado no build |
| US-FEAT-0005.0002-0024/0025 — Responsividade + a11y | ✅ Aceito | skip link + breakpoints |
| US-FEAT-0005.0003-0026/0027 — Domínio + go-live | ✅ Aceito | `fbso.com.br` no ar + smoke |

### 7.3 Novas necessidades identificadas

- [ ] Analytics/leads (B-REQ-08) — Release 2.
- [ ] SSO/OIDC (B-REQ-09) — Release 3.

---

## 8. Retrospectiva — `[Encerramento]`

### 8.1 Pontos positivos / de atenção / melhorias

- **Positivos:** go-live no domínio próprio · SEO centralizado (`seo()` + sitemap gerado) · a11y básica aplicada.
- **Atenção:** sitemap/robots ainda dependem do merge da PR #42 para entrar no deploy.
- **Melhorias:** auditoria WCAG formal · definir o logo (`PENDENCY-0011`).

### 8.2 Plano de ação

| Ação | ID | Responsável | Prazo | Status |
|---|---|---|---|---|
| Auditoria WCAG formal | RETRO-ACTION-0008 | QA | pós-MVP | Pendente |
| Logo definitivo | PENDENCY-0011 | Arquiteto + PM/PO | — | Pendente |

---

## 9. Encerramento — `[Encerramento]`

### 9.1 Resultado do Sprint Goal

**Status:** `[x]` Alcançado — portal encontrável, acessível e publicado em `fbso.com.br`.

### 9.2 Indicadores finais

| Indicador | Resultado |
|---|---|
| Story Points concluídos | 20 (6 stories) |
| Itens concluídos / não concluídos | 6 / 0 |
| Tasks concluídas | 6 / 6 (20h) |
| Bugs identificados / corrigidos | 0 / 0 |

### 9.3 Pendências para próximas sprints

| ID | Descrição | Origem | Destino |
|---|---|---|---|
| B-REQ-08 | Analytics/origem de acessos/leads | Release 1 | Release 2 |
| B-REQ-09 | SSO/OIDC | Release 1 | Release 3 |
| PENDENCY-0011 | logo definitivo | — | pendencias |

> **Nota:** Sprint concluída **antecipadamente** (2026-11-13). O go-live (NS + Custom Domain + HTTPS)
> foi executado operacionalmente (Lourival) e validado com smoke em `fbso.com.br`.

## 10. Decisões pendentes deste documento

1. `[ ]` **PENDENCY-0011** — logo/identidade visual definitiva (Arquiteto + PM/PO).

---

> 🔁 **Regra viva:** mudou o corte? Atualize este documento + [board](board-sprint-0005.md) +
> [rastreabilidade](../rastreabilidade.md) + [backlog](../../../../docs/produto/backlog/BACKLOG-LIST.md) +
> [tasks](../../prj-tecnico/tasks/README.md) no mesmo passo.
