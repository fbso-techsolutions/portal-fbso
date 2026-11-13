# 🗓️ Sprint 4 — TechServices e Portfólio SaaS · 11/01/2027 – 22/01/2027

> **Status:** `📋 Planejada` · **Sprint Goal:** "Página TechServices + catálogo e páginas de produto SaaS no ar, a partir do layout da S3" ·
> **Board:** [board-sprint-0004.md](board-sprint-0004.md) · **Tasks:** [prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md) ·
> **Verdade única do corte:** [escopo-release-1](../escopo-release-1.md)

| Campo | Valor |
|---|---|
| Empresa / Marca | FBSO TechSolutions |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Período | 11/01 (seg) → 22/01 (sex) · 2 semanas (10 dias úteis) |
| Foco | Página TechServices + catálogo e detalhe dos produtos SaaS |
| Capacidade | ver §3 — Disponibilidade bruta (sprint) |
| Escopo | ver §2 — 5 stories (FEATURE-0003.0001 · 0004.0001 · 0004.0002) |
| Dono do documento | Tech lead (Francisco Oliveira) + PM/PO (Alessandra Neves) |

## 1. Sprint Goal

**Objetivo:** expor a divisão TechServices e o portfólio SaaS (catálogo + página de produto) com conteúdo como dados.

**Resultados esperados:**
- [ ] Página `/techservices` com as frentes da divisão (0003.0001).
- [ ] Catálogo SaaS como dados (`src/content/saas-catalog.ts`) + página `/solucoes` (0004.0001).
- [ ] Página de detalhe `/solucoes/:slug` com conteúdo/link por produto (0004.0002).

## 2. Escopo (o corte)

| Item | SP | Tipo | Tasks | Depende de | Travada por |
|---|---|---|---|---|---|
| [US-FEAT-0003.0001-0017 — Página TechServices](../user-stories/US-FEAT-0003.0001-0017-pagina-techservices.md) | 5 | 💬 Story | [TASK-0044](../../prj-tecnico/tasks/README.md) | [0002.0001 — Layout](../user-stories/US-FEAT-0002.0001-0008-header-navegacao.md) | — |
| [US-FEAT-0004.0001-0018 — Catálogo SaaS (dados)](../user-stories/US-FEAT-0004.0001-0018-catalogo-saas-dados.md) | 3 | 💬 Story | [TASK-0045](../../prj-tecnico/tasks/README.md) | [0002.0002 — Home](../user-stories/US-FEAT-0002.0002-0013-ecossistema-saas-cta.md) | — |
| [US-FEAT-0004.0001-0019 — Página /solucoes](../user-stories/US-FEAT-0004.0001-0019-pagina-solucoes.md) | 3 | 💬 Story | [TASK-0046](../../prj-tecnico/tasks/README.md) | [0018](../user-stories/US-FEAT-0004.0001-0018-catalogo-saas-dados.md) | — |
| [US-FEAT-0004.0002-0020 — Rota /solucoes/:slug](../user-stories/US-FEAT-0004.0002-0020-rota-detalhe-produto.md) | 5 | 💬 Story | [TASK-0047](../../prj-tecnico/tasks/README.md) | [0018](../user-stories/US-FEAT-0004.0001-0018-catalogo-saas-dados.md) | — |
| [US-FEAT-0004.0002-0021 — Conteúdo/link por produto](../user-stories/US-FEAT-0004.0002-0021-conteudo-link-produto.md) | 2 | 💬 Story | [TASK-0048 · 0049](../../prj-tecnico/tasks/README.md) | [0020](../user-stories/US-FEAT-0004.0002-0020-rota-detalhe-produto.md) | — |

**Não incluído:** SEO/a11y/go-live (0005.* — próxima sprint), contratação/planos (R2), sites dos próprios SaaS.

## 3. Capacidade — Disponibilidade bruta (sprint) · fonte única

> 📊 Fonte única da capacidade bruta. O [board](board-sprint-0004.md) consome esta disponibilidade.

| Recurso | Papel | Disponibilidade bruta (sprint) | Observação |
|---|---|---|---|
| Alfredo Bento | Dev frontend | 80h | executor principal |
| Patricia Varra | QA | 40h | smoke final (TASK-0049) |

## 4. Riscos e dependências

| ID | Risco | Impacto | Mitigação |
|---|---|---|---|
| RISK-0005 | Links da nav (TechServices/Soluções) apontam para rotas desta sprint | Baixo | rotas criadas nesta sprint; nav já aponta (S3) |
| RISK-0007 | Sites dos próprios SaaS ainda não existem (link externo condicional) | Baixo | `link` opcional no catálogo; omitido quando ausente |

## 5. Definition of Done

- [ ] Stories `✅ Entregue` no backlog (DoD + artefato verificável — PR).
- [ ] `npm run lint` · `format:check` · `typecheck` verdes no CI.
- [ ] Catálogo vem dos dados (`saas-catalog.ts`), não de JSX hardcoded.

## 6. Execução (log)

> 📓 Diário de execução — preenchido a cada tarefa executada (regra viva).

| Data | Item | O que foi feito (comandos/ações) | Decisões/desvios |
|---|---|---|---|
| 2026-11-13 | [TASK-0044](../../prj-tecnico/tasks/TASK-0044-pagina-techservices.md) | rota `/techservices` (`TechServices.tsx` + `techservices.ts`: 5 frentes) | prerender `/techservices` ok · US-0003.0001 concluída |
| 2026-11-13 | [TASK-0045](../../prj-tecnico/tasks/TASK-0045-catalogo-saas-dados.md) | `src/content/saas-catalog.ts` (SaasProduct tipado + 4 produtos) · `Home.tsx` passou a consumir `saasCatalog` | fonte única do catálogo (removida a duplicação em `home.ts`) · US-0004.0001-0018 concluída |

## 7. Sprint Review — `[Encerramento]`

*A preencher no encerramento.*

## 8. Retrospectiva — `[Encerramento]`

*A preencher no encerramento.*

## 9. Encerramento — `[Encerramento]`

*A preencher no encerramento.*

## 10. Decisões pendentes deste documento

1. `[ ]` **PENDENCY-0004** — subdomínio × domínio próprio já decidido (ADR-002); reflete no link externo por produto quando os sites existirem.

---

> 🔁 **Regra viva:** mudou o corte? Atualize este documento + [board](board-sprint-0004.md) +
> [rastreabilidade](../rastreabilidade.md) + [backlog](../../../../docs/produto/backlog/BACKLOG-LIST.md) +
> [tasks](../../prj-tecnico/tasks/README.md) no mesmo passo.
