# 🗓️ Sprint 3 — Estrutura, navegação e institucional · 14/12/2026 – 24/12/2026

> **Status:** `📋 Planejada` · **Sprint Goal:** "Estrutura, navegação e páginas institucionais no ar, sobre o design system da S2" ·
> **Board:** [board-sprint-0003.md](board-sprint-0003.md) · **Tasks:** [prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md) ·
> **Verdade única do corte:** [escopo-release-1](../escopo-release-1.md)

| Campo | Valor |
|---|---|
| Empresa / Marca | FBSO TechSolutions |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Período | 14/12 (seg) → 24/12 (sex) · 2 semanas (10 dias úteis) |
| Foco | Layout institucional (header/footer/nav) + páginas institucionais (Home/Sobre/Contato/Legais) |
| Capacidade | ver §3 — Disponibilidade bruta (sprint) |
| Escopo | ver §2 — 9 stories (FEATURE-0002.0001 … 0002.0005) |
| Dono do documento | Tech lead (Francisco Oliveira) + PM/PO (Alessandra Neves) |

## 1. Sprint Goal

**Objetivo:** estruturar a navegação e as páginas institucionais, consumindo os tokens e componentes `ui/` da S2 — o portal passa a ter identidade e conteúdo reais.

**Resultados esperados:**
- [ ] Header + navegação + footer presentes em todas as páginas (0002.0001).
- [ ] Home institucional (hero → posicionamento → ecossistema SaaS → CTA) publicada (0002.0002).
- [ ] Páginas Sobre, Contato e Legais acessíveis pela navegação/footer (0002.0003…0005).

## 2. Escopo (o corte)

> **Nota:** escopo **fundido** S3+S4 (decisão de Planning 2026-11-13) — a frente institucional entrou na
> Sprint 3 para preencher a capacidade do dev frontend; TechServices ficou para a próxima.

| Item | SP | Tipo | Tasks | Depende de | Travada por |
|---|---|---|---|---|---|
| [US-FEAT-0002.0001-0008 — Header + navegação](../user-stories/US-FEAT-0002.0001-0008-header-navegacao.md) | 5 | 💬 Story | [TASK-0033…0034](../../prj-tecnico/tasks/README.md) | — | — |
| [US-FEAT-0002.0001-0009 — Footer institucional](../user-stories/US-FEAT-0002.0001-0009-footer-institucional.md) | 3 | 💬 Story | [TASK-0035](../../prj-tecnico/tasks/README.md) | — | — |
| [US-FEAT-0002.0001-0010 — Menu responsivo](../user-stories/US-FEAT-0002.0001-0010-menu-responsivo.md) | 3 | 💬 Story | [TASK-0036 · 0043](../../prj-tecnico/tasks/README.md) | [0008](../user-stories/US-FEAT-0002.0001-0008-header-navegacao.md) | — |
| [US-FEAT-0002.0002-0011 — Hero institucional](../user-stories/US-FEAT-0002.0002-0011-hero-institucional.md) | 5 | 💬 Story | [TASK-0037](../../prj-tecnico/tasks/README.md) | [0008](../user-stories/US-FEAT-0002.0001-0008-header-navegacao.md) | — |
| [US-FEAT-0002.0002-0012 — Posicionamento e diferenciais](../user-stories/US-FEAT-0002.0002-0012-posicionamento-diferenciais.md) | 5 | 💬 Story | [TASK-0038](../../prj-tecnico/tasks/README.md) | [0011](../user-stories/US-FEAT-0002.0002-0011-hero-institucional.md) | — |
| [US-FEAT-0002.0002-0013 — Ecossistema SaaS + CTA](../user-stories/US-FEAT-0002.0002-0013-ecossistema-saas-cta.md) | 3 | 💬 Story | [TASK-0039](../../prj-tecnico/tasks/README.md) | [0012](../user-stories/US-FEAT-0002.0002-0012-posicionamento-diferenciais.md) | — |
| [US-FEAT-0002.0003-0014 — Página Sobre](../user-stories/US-FEAT-0002.0003-0014-pagina-sobre.md) | 3 | 💬 Story | [TASK-0040](../../prj-tecnico/tasks/README.md) | [0008](../user-stories/US-FEAT-0002.0001-0008-header-navegacao.md) | — |
| [US-FEAT-0002.0004-0015 — Página Contato](../user-stories/US-FEAT-0002.0004-0015-pagina-contato.md) | 3 | 💬 Story | [TASK-0041](../../prj-tecnico/tasks/README.md) | [0008](../user-stories/US-FEAT-0002.0001-0008-header-navegacao.md) | — |
| [US-FEAT-0002.0005-0016 — Páginas legais](../user-stories/US-FEAT-0002.0005-0016-paginas-legais.md) | 2 | 💬 Story | [TASK-0042](../../prj-tecnico/tasks/README.md) | [0008](../user-stories/US-FEAT-0002.0001-0008-header-navegacao.md) | — |

**Não incluído:** TechServices (0003.0001 — próxima sprint), catálogo/detalhe SaaS (0004.0001/0002), SEO/a11y/go-live (0005.*).

## 3. Capacidade — Disponibilidade bruta (sprint) · fonte única

> 📊 Fonte única da capacidade bruta. O [board](board-sprint-0003.md) consome esta disponibilidade.

| Recurso | Papel | Disponibilidade bruta (sprint) | Observação |
|---|---|---|---|
| Alfredo Bento | Dev frontend | 80h | executor principal (layout + institucional) |
| Patricia Varra | QA | 40h | smoke final (TASK-0043) |

> Demais papéis (Tech lead, DevOps, Arquiteto, Segurança) **não alocados** nesta sprint (frente frontend).

## 4. Riscos e dependências

| ID | Risco | Impacto | Mitigação |
|---|---|---|---|
| RISK-0003 | Logo/identidade visual definitiva pendente (`PENDENCY-0011`) | Baixo | marca usa placeholder; não bloqueia o layout |
| RISK-0005 | Links da nav apontam para rotas que só nascem nas próximas sprints (TechServices, Soluções) | Baixo | rotas placeholder/âncora até a feature chegar |
| RISK-0006 | Escopo ampliado (S3+S4 fundidos) pode estourar | Médio | monitorar no board; devolver item ao backlog se a capacidade não comportar |

## 5. Definition of Done

- [ ] Stories `✅ Entregue` no backlog (DoD + artefato verificável — PR).
- [ ] `npm run lint` · `format:check` · `typecheck` verdes no CI.
- [ ] Navegação e footer presentes em **todas** as rotas; páginas institucionais acessíveis.

## 6. Execução (log)

> 📓 Diário de execução — preenchido a cada tarefa executada (regra viva).

| Data | Item | O que foi feito (comandos/ações) | Decisões/desvios |
|---|---|---|---|
| 2026-11-13 | [TASK-0033](../../prj-tecnico/tasks/TASK-0033-header-topbar.md) | `AppLayout`: topbar + header sticky (marca `FBSO TechSolutions` + CTA `Button`) · `site.ts` ganhou `brandAccent`/`topbarNote`/`navCta` | header consome tokens e `Button`; marca usa placeholder (`PENDENCY-0011`) |
| 2026-11-13 | [TASK-0035](../../prj-tecnico/tasks/TASK-0035-footer-institucional.md) | `AppLayout`: footer institucional (marca + links + e-mail + copyright dinâmico) · `site.ts` ganhou `contactEmail`/`footerInstitutional`/`footerLegal` | conteúdo como dados; ano do copyright dinâmico |
| 2026-11-13 | [TASK-0034](../../prj-tecnico/tasks/TASK-0034-navegacao.md) | `AppLayout`: nav desktop (Home/Sobre/TechServices/Soluções/Contato) · `site.ts` ganhou `navItems` | links para rotas futuras são placeholder até a feature chegar · US-0002.0001-0008 concluída |
| 2026-11-13 | [TASK-0036](../../prj-tecnico/tasks/TASK-0036-menu-mobile.md) | `AppLayout`: menu mobile (toggle + dropdown) com `aria-expanded`/`aria-controls`, fecha ao navegar | layout responsivo; CTA oculto no mobile |
| 2026-11-13 | [TASK-0037](../../prj-tecnico/tasks/TASK-0037-hero-institucional.md) | `Home`: hero institucional (eyebrow + título + copy + CTAs) · `home.ts` ganhou `hero` | substitui o "hello world"; CTAs `Button` + link; textos de `src/content/` |
| 2026-11-13 | [TASK-0038](../../prj-tecnico/tasks/TASK-0038-posicionamento-diferenciais.md) | `Home`: posicionamento (3 pilares em `Card`) + resumo TechServices (check-list) · `home.ts` ganhou `positioning`/`services` | usa `Card`/`Badge`; textos de `src/content/` |
| 2026-11-13 | [TASK-0039](../../prj-tecnico/tasks/TASK-0039-ecossistema-saas-cta.md) | `Home`: ecossistema SaaS (4 `Card` de produto) + CTA "vamos conversar" · `home.ts` ganhou `products`/`cta` | cards linkam para `/solucoes/:slug` (rota da S4) · US-0002.0002 concluída |
| 2026-11-13 | [TASK-0040](../../prj-tecnico/tasks/TASK-0040-pagina-sobre.md) | rota `/sobre` (`Sobre.tsx` + `sobre.ts`: quem somos/missão/valores) | prerender `/sobre` ok · US-0002.0003 concluída |
| 2026-11-13 | [TASK-0041](../../prj-tecnico/tasks/TASK-0041-pagina-contato.md) | rota `/contato` (`Contato.tsx` + `contato.ts`: e-mail) | sem formulário (R2); prerender `/contato` ok · US-0002.0004 concluída |
| 2026-11-13 | [TASK-0042](../../prj-tecnico/tasks/TASK-0042-paginas-legais.md) | rotas `/privacidade` e `/termos` (`Privacidade.tsx`/`Termos.tsx` + `legais.ts`: texto padrão) | texto fixo/padrão (`PENDENCY-0005`) · US-0002.0005 concluída |
| 2026-11-13 | [TASK-0043](../../prj-tecnico/tasks/TASK-0043-qa-smoke-portal.md) | QA smoke: 5 rotas prerender + marca/topbar presentes em todas as páginas | smoke aprovado · US-0002.0001-0010 concluída · **Sprint 3 completa** |

## 7. Sprint Review — `[Encerramento]`

*A preencher no encerramento.*

## 8. Retrospectiva — `[Encerramento]`

*A preencher no encerramento.*

## 9. Encerramento — `[Encerramento]`

*A preencher no encerramento.*

## 10. Decisões pendentes deste documento

1. `[ ]` **PENDENCY-0011** — logo/identidade visual definitiva (Arquiteto + PM/PO) — marca usa placeholder.

---

> 🔁 **Regra viva:** mudou o corte? Atualize este documento + [board](board-sprint-0003.md) +
> [rastreabilidade](../rastreabilidade.md) + [backlog](../../../../docs/produto/backlog/BACKLOG-LIST.md) +
> [tasks](../../prj-tecnico/tasks/README.md) no mesmo passo.
