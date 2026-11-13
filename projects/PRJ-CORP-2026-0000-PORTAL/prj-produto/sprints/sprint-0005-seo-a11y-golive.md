# 🗓️ Sprint 5 — SEO, a11y e go-live · 25/01/2027 – 05/02/2027

> **Status:** `📋 Planejada` · **Sprint Goal:** "Portal encontrável (SEO), acessível (a11y) e publicado no domínio próprio `fbso.com.br`" ·
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
- [ ] Metadados por página + `sitemap.xml`/`robots.txt` (0005.0001).
- [ ] Responsividade e acessibilidade básica de todas as páginas (0005.0002).
- [ ] `https://fbso.com.br` no ar com HTTPS e smoke aprovado (0005.0003).

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

- [ ] Stories `✅ Entregue` no backlog (DoD + artefato verificável — PR/deploy).
- [ ] `npm run lint` · `format:check` · `typecheck` verdes no CI.
- [ ] `https://fbso.com.br` no ar com HTTPS e smoke test aprovado.

## 6. Execução (log)

> 📓 Diário de execução — preenchido a cada tarefa executada (regra viva).

| Data | Item | O que foi feito (comandos/ações) | Decisões/desvios |
|---|---|---|---|
| 2026-11-13 | [TASK-0050](../../prj-tecnico/tasks/TASK-0050-metadados-pagina.md) | `src/lib/seo.ts` (helper `seo()`) · 8 páginas refatoradas para usá-lo (title/description/OG) | fonte única de SEO · US-0005.0001-0022 concluída |
| 2026-11-13 | [TASK-0051](../../prj-tecnico/tasks/TASK-0051-sitemap-robots.md) | `public/robots.txt` + hook `buildEnd` gerando `sitemap.xml` no build | sitemap gerado (11 URLs) via catálogo · US-0005.0001 concluída |

## 7. Sprint Review — `[Encerramento]`

*A preencher no encerramento.*

## 8. Retrospectiva — `[Encerramento]`

*A preencher no encerramento.*

## 9. Encerramento — `[Encerramento]`

*A preencher no encerramento.*

## 10. Decisões pendentes deste documento

1. `[ ]` **PENDENCY-0011** — logo/identidade visual definitiva (Arquiteto + PM/PO).

---

> 🔁 **Regra viva:** mudou o corte? Atualize este documento + [board](board-sprint-0005.md) +
> [rastreabilidade](../rastreabilidade.md) + [backlog](../../../../docs/produto/backlog/BACKLOG-LIST.md) +
> [tasks](../../prj-tecnico/tasks/README.md) no mesmo passo.
