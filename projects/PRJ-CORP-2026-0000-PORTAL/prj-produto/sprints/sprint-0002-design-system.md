# 🗓️ Sprint 2 — Design System · 30/11/2026 – 11/12/2026

> **Status:** `📋 Planejada` · **Sprint Goal:** "Design System base: tokens + componentes `ui/` prontos para compor as páginas institucionais (S3/S4)" ·
> **Board:** [board-sprint-0002.md](board-sprint-0002.md) · **Tasks:** [prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md) ·
> **Verdade única do corte:** [escopo-release-1](../escopo-release-1.md)

| Campo | Valor |
|---|---|
| Empresa / Marca | FBSO TechSolutions |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Período | 30/11 (seg) → 11/12 (sex) · 2 semanas (10 dias úteis) |
| Foco | Design System (tokens + componentes base `ui/`) |
| Capacidade | ver §3 — Disponibilidade bruta (sprint) |
| Escopo | ver §2 — 2 stories (FEATURE-0001.0002) |
| Dono do documento | Tech lead (Francisco Oliveira) + PM/PO (Alessandra Neves) |

## 1. Sprint Goal

**Objetivo:** estabelecer o design system base — tokens e componentes `ui/` — como fundação visual das páginas institucionais das próximas sprints.

**Resultados esperados:**
- [ ] Design tokens (cor/tipografia/espaçamento) definidos e consumíveis via Tailwind `@theme` (0001.0002-0006).
- [ ] Componentes base `ui/` (Button, Card, Section, Badge) tipados, acessíveis e responsivos (0001.0002-0007).

## 2. Escopo (o corte)

> **Tasks:** cada item é decomposto em `TASK-{NNNN}` no Planning. A especificação mora em
> [prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md); aqui e no board só **apontamento**.

| Item | SP | Tipo | Tasks | Depende de | Travada por |
|---|---|---|---|---|---|
| [US-FEAT-0001.0002-0006 — Design tokens](../user-stories/US-FEAT-0001.0002-0006-design-tokens.md) | 3 | 💬 Story | [TASK-0028…0029](../../prj-tecnico/tasks/README.md) | — | — |
| [US-FEAT-0001.0002-0007 — Componentes ui/](../user-stories/US-FEAT-0001.0002-0007-componentes-ui.md) | 5 | 💬 Story | [TASK-0030…0032](../../prj-tecnico/tasks/README.md) | [0006 — Design tokens](../user-stories/US-FEAT-0001.0002-0006-design-tokens.md) | — |

**Não incluído:** identidade visual definitiva (logo — `PENDENCY-0011`), páginas institucionais (S3/S4).

## 3. Capacidade — Disponibilidade bruta (sprint) · fonte única

> 📊 A fonte única da capacidade bruta. O [board](board-sprint-0002.md) consome esta disponibilidade
> para calcular horas comprometidas × saldo.

| Recurso | Papel | Disponibilidade bruta (sprint) | Observação |
|---|---|---|---|
| Alfredo Bento | Dev frontend | 80h | executor principal (tokens + componentes) |
| Patricia Varra | QA | 40h | smoke final (TASK-0032) |

> Demais papéis (Tech lead, DevOps, Arquiteto, Segurança) **não alocados** nesta sprint (frente 100% frontend).

## 4. Riscos e dependências

| ID | Risco | Impacto | Mitigação |
|---|---|---|---|
| RISK-0003 | Logo/identidade visual definitiva pendente (`PENDENCY-0011`) | Baixo | símbolo entra como placeholder; não bloqueia tokens/componentes |
| RISK-0004 | Paleta do molde é "ponto de partida" — pode mudar com a aprovação do PO | Baixo | tokens são negociáveis; mudança reflete só no tema (fonte única) |

## 5. Definition of Done

- [ ] Stories `✅ Entregue` no backlog (DoD + artefato verificável — PR).
- [ ] `npm run lint` · `format:check` · `typecheck` verdes no CI.
- [ ] Tokens consumíveis via Tailwind `@theme`, sem valor hardcoded nos componentes.

## 6. Execução (log)

> 📓 Diário de execução — preenchido a cada tarefa executada (regra viva). Vazio nesta sprint planejada.

| Data | Item | O que foi feito (comandos/ações) | Decisões/desvios |
|---|---|---|---|
| 2026-11-13 | [TASK-0028](../../prj-tecnico/tasks/TASK-0028-design-tokens.md) | `@theme` no `src/styles/index.css`: paleta (navy/blue/mint/ink/muted/paper/line/mist/sky) + `--font-sans` Inter + `--radius-soft`/`--shadow-soft` | tokens como fonte única; valores do molde = ponto de partida |
| 2026-11-13 | [TASK-0029](../../prj-tecnico/tasks/TASK-0029-aplicar-tokens-app.md) | `AppLayout`/`Home` migrados para tokens (`bg-navy`/`text-mint`/`text-mist`/`border-blue`/`text-sky`) | grep `[#` limpo; US-0001.0002-0006 concluída |
| 2026-11-13 | [TASK-0030](../../prj-tecnico/tasks/TASK-0030-componente-button.md) | `src/components/ui/Button.tsx` — variantes `primary`/`outline`, pill, hover/focus, polimórfico `button`/`a` | consome tokens; sem lógica de negócio |
| 2026-11-13 | [TASK-0031](../../prj-tecnico/tasks/TASK-0031-componentes-card-section.md) | `src/components/ui/Card.tsx` (borda/raio/hover) + `src/components/ui/Section.tsx` (kicker/título/copy) | consomem tokens; composição sem reimplementar estilos |

## 7. Sprint Review — `[Encerramento]`

*A preencher no encerramento da sprint.*

## 8. Retrospectiva — `[Encerramento]`

*A preencher no encerramento da sprint.*

## 9. Encerramento — `[Encerramento]`

*A preencher no encerramento da sprint.*

## 10. Decisões pendentes deste documento

1. `[ ]` **PENDENCY-0011** — logo/identidade visual definitiva (Arquiteto + PM/PO) — os componentes usam símbolo placeholder até a resolução.

---

> 🔁 **Regra viva:** mudou o corte? Atualize este documento + [board](board-sprint-0002.md) +
> [rastreabilidade](../rastreabilidade.md) + [backlog](../../../../docs/produto/backlog/BACKLOG-LIST.md) +
> [tasks](../../prj-tecnico/tasks/README.md) no mesmo passo.
