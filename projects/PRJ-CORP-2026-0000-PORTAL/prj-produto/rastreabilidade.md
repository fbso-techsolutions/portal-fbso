# 🔗 Matriz de Rastreabilidade — FBSO Corporate Portal

> **O que é:** fonte única da cadeia **B-REQ → Épico → Feature → Story → Sprint → Task → Release/Build/Deploy** (e vice-versa). **Aponta, não copia:** cada célula é um ID/link; a especificação mora no documento do item. A camada grossa de **status** continua no [backlog](../../../docs/produto/backlog/BACKLOG-LIST.md) — aqui só a **posição na cadeia**.

## Régua do `Check`

| Check | Estado | Critério |
|---|---|---|
| 🚩 | Não-iniciado | requisito **sem épico** (nada definido) |
| 💡 | Em documentação | tem épico/feature/story, **sem sprint** (execução não definida) |
| 👷 | Em implementação | tem sprint, **não entregue** |
| 🏁 | Concluído | **entregue** (✅ do backlog — DoD + produção) |
| 🚫 | Cancelado | **desconsiderado** (❌ do backlog) |

> **Fonte:** `🏁` e `🚫` vêm do **status do backlog**; `🚩` `💡` `👷` vêm da **profundidade da cadeia**.

## Régua do `Compliance` (alinhamento vertical)

| Valor | Significado |
|---|---|
| 🟢 | alinhado — o filho está conforme o objetivo/escopo do pai |
| 🟡 | desvio a revisar — parcialmente alinhado |
| 🔴 | desalinhado — fora do escopo/objetivo do pai, **ou órfão** (sem pai) |
| `—` | a julgar (PO no refinamento) |

> **Arestas julgadas:** épico ↔ requisito · feature ↔ épico · story ↔ feature · task ↔ story.
> Julgamento **humano (semântico)**, não mecânico — régua completa no
> [guia](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/guia-matriz-rastreabilidade.md).

## 1. Cadeia de valor — requisito → entrega

| Check | Requisito | Épico | Feature | Produto/Serviço | Story | Sprint | Task | Release/Build/Deploy | Compliance |
|---|---|---|---|---|---|---|---|---|---|
| 🏁 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0001 — Fundação e Engenharia do Portal](epicos/EPIC-0001-fundacao-engenharia.md) | [FEATURE-0001.0001 — Scaffold do portal](features/FEATURE-0001.0001-scaffold-portal.md) | [portal-fbso](../../../README.md) | [US-FEAT-0001.0001-0001 — Inicializar projeto Vite + TS + Tailwind + Router v8](user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | [Sprint 1 — Fundação · 16/11–27/11](sprints/sprint-0001-fundacao.md) | [TASK-0008…0011 · 0027](../prj-tecnico/tasks/README.md) | `—` | — |
| 🏁 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0001 — Fundação e Engenharia do Portal](epicos/EPIC-0001-fundacao-engenharia.md) | [FEATURE-0001.0001 — Scaffold do portal](features/FEATURE-0001.0001-scaffold-portal.md) | [portal-fbso](../../../README.md) | [US-FEAT-0001.0001-0002 — Configurar ESLint/Prettier e tsconfig](user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) | [Sprint 1 — Fundação · 16/11–27/11](sprints/sprint-0001-fundacao.md) | [TASK-0012…0015](../prj-tecnico/tasks/README.md) | `—` | — |
| 🏁 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0001 — Fundação e Engenharia do Portal](epicos/EPIC-0001-fundacao-engenharia.md) | [FEATURE-0001.0001 — Scaffold do portal](features/FEATURE-0001.0001-scaffold-portal.md) | [portal-fbso](../../../README.md) | [US-FEAT-0001.0001-0003 — Estruturar pastas + Home "hello world"](user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) | [Sprint 1 — Fundação · 16/11–27/11](sprints/sprint-0001-fundacao.md) | [TASK-0016…0019](../prj-tecnico/tasks/README.md) | `—` | — |
| 🏁 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0001 — Fundação e Engenharia do Portal](epicos/EPIC-0001-fundacao-engenharia.md) | [FEATURE-0001.0003 — Pipeline CI/CD + deploy Cloudflare](features/FEATURE-0001.0003-pipeline-cicd-deploy.md) | [portal-fbso](../../../README.md) | [US-FEAT-0001.0003-0004 — Pipeline CI/CD (lint/typecheck/build)](user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) | [Sprint 1 — Fundação · 16/11–27/11](sprints/sprint-0001-fundacao.md) | [TASK-0020…0022](../prj-tecnico/tasks/README.md) | `—` | — |
| 🏁 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0001 — Fundação e Engenharia do Portal](epicos/EPIC-0001-fundacao-engenharia.md) | [FEATURE-0001.0003 — Pipeline CI/CD + deploy Cloudflare](features/FEATURE-0001.0003-pipeline-cicd-deploy.md) | [portal-fbso](../../../README.md) | [US-FEAT-0001.0003-0005 — Deploy Cloudflare (wrangler + static assets)](user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) | [Sprint 1 — Fundação · 16/11–27/11](sprints/sprint-0001-fundacao.md) | [TASK-0023…0026](../prj-tecnico/tasks/README.md) | `—` | — |
| 🏁 | [B-REQ-02](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0001 — Fundação e Engenharia do Portal](epicos/EPIC-0001-fundacao-engenharia.md) | [FEATURE-0001.0002 — Design System e identidade visual](features/FEATURE-0001.0002-design-system.md) | [portal-fbso](../../../README.md) | [US-FEAT-0001.0002-0006 — Definir design tokens](user-stories/US-FEAT-0001.0002-0006-design-tokens.md) | [Sprint 2 — Design System · 30/11–11/12](sprints/sprint-0002-design-system.md) | [TASK-0028…0029](../prj-tecnico/tasks/README.md) | `—` | — |
| 🏁 | [B-REQ-02](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0001 — Fundação e Engenharia do Portal](epicos/EPIC-0001-fundacao-engenharia.md) | [FEATURE-0001.0002 — Design System e identidade visual](features/FEATURE-0001.0002-design-system.md) | [portal-fbso](../../../README.md) | [US-FEAT-0001.0002-0007 — Criar componentes base ui/](user-stories/US-FEAT-0001.0002-0007-componentes-ui.md) | [Sprint 2 — Design System · 30/11–11/12](sprints/sprint-0002-design-system.md) | [TASK-0030…0032](../prj-tecnico/tasks/README.md) | `—` | — |
| 💡 | [B-REQ-01](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0001 — Layout institucional](features/FEATURE-0002.0001-layout-institucional.md) | [portal-fbso](../../../README.md) | `—` | Onda 1-Must (MVP) | `—` | `—` | — |
| 💡 | [B-REQ-01 · B-REQ-02](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0002 — Home institucional](features/FEATURE-0002.0002-home-institucional.md) | [portal-fbso](../../../README.md) | `—` | Onda 1-Must (MVP) | `—` | `—` | — |
| 💡 | [B-REQ-01](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0003 — Página Sobre](features/FEATURE-0002.0003-pagina-sobre.md) | [portal-fbso](../../../README.md) | `—` | Onda 1-Must (MVP) | `—` | `—` | — |
| 💡 | [B-REQ-06](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0004 — Página Contato](features/FEATURE-0002.0004-pagina-contato.md) | [portal-fbso](../../../README.md) | `—` | Onda 1-Must (MVP) | `—` | `—` | — |
| 💡 | [B-REQ-01](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0005 — Páginas legais](features/FEATURE-0002.0005-paginas-legais.md) | [portal-fbso](../../../README.md) | `—` | Onda 1-Must (MVP) | `—` | `—` | — |
| 💡 | [B-REQ-03](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0003 — FBSO TechServices](epicos/EPIC-0003-techservices.md) | [FEATURE-0003.0001 — Página FBSO TechServices](features/FEATURE-0003.0001-pagina-techservices.md) | [portal-fbso](../../../README.md) | `—` | Onda 1-Must (MVP) | `—` | `—` | — |
| 💡 | [B-REQ-04](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0004 — Portfólio de Produtos SaaS](epicos/EPIC-0004-portfolio-saas.md) | [FEATURE-0004.0001 — Catálogo SaaS](features/FEATURE-0004.0001-catalogo-saas.md) | [portal-fbso](../../../README.md) | `—` | Onda 1-Must (MVP) | `—` | `—` | — |
| 💡 | [B-REQ-05](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0004 — Portfólio de Produtos SaaS](epicos/EPIC-0004-portfolio-saas.md) | [FEATURE-0004.0002 — Página de produto](features/FEATURE-0004.0002-pagina-produto.md) | [portal-fbso](../../../README.md) | `—` | Onda 1-Must (MVP) | `—` | `—` | — |
| 💡 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0005 — SEO, Acessibilidade e Publicação](epicos/EPIC-0005-seo-publicacao.md) | [FEATURE-0005.0001 — SEO e prerender](features/FEATURE-0005.0001-seo-prerender.md) | [portal-fbso](../../../README.md) | `—` | Onda 1-Must (MVP) | `—` | `—` | — |
| 💡 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0005 — SEO, Acessibilidade e Publicação](epicos/EPIC-0005-seo-publicacao.md) | [FEATURE-0005.0002 — Acessibilidade e responsividade](features/FEATURE-0005.0002-acessibilidade-responsividade.md) | [portal-fbso](../../../README.md) | `—` | Onda 1-Must (MVP) | `—` | `—` | — |
| 💡 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0005 — SEO, Acessibilidade e Publicação](epicos/EPIC-0005-seo-publicacao.md) | [FEATURE-0005.0003 — Homologação e go-live](features/FEATURE-0005.0003-golive-dominio.md) | [portal-fbso](../../../README.md) | `—` | Onda 1-Must (MVP) | `—` | `—` | — |
| 🚩 | [B-REQ-08](../prj-negocio/requisitos/requisitos-negocio.md) | `—` | `—` | `—` | `—` | `—` | `—` | `—` | — |
| 🚩 | [B-REQ-09](../prj-negocio/requisitos/requisitos-negocio.md) | `—` | `—` | `—` | `—` | `—` | `—` | `—` | — |

> **Formato das colunas:** `Requisito` = código + link · `Épico`/`Feature`/`Story` = código+nome + link ·
> `Produto/Serviço` = rótulo de roteamento (aqui, o próprio repo) · `Sprint` = título completo + link
> (ou horizonte `Onda 1-Must (MVP)`) · `Task` = código + link (aponta para [prj-tecnico/tasks/](../prj-tecnico/tasks/README.md)) · `Release` = rolling wave · `Compliance` = `—` (a julgar no refinamento).

## 2. Cadeia de habilitação (enabler · runway)

| Enabler / Runway | Habilita | Sprint | Status |
|---|---|---|---|
| [ENABLER-0001 — Repositório e ambiente GitHub](../prj-tecnico/enablers/ENABLER-0001-repositorio-ambiente-github.md) | FEATURE-0001.0001 (stories 0001–0003) · FEATURE-0001.0003 | [Sprint 1 — Fundação · 16/11–27/11](sprints/sprint-0001-fundacao.md) | ✅ Entregue |
| [ENABLER-0002 — Conta Cloudflare + domínio](../prj-tecnico/enablers/ENABLER-0002-conta-cloudflare-dominio.md) | FEATURE-0001.0003 · FEATURE-0005.0003 | [Sprint 1 — Fundação · 16/11–27/11](sprints/sprint-0001-fundacao.md) | ✅ Entregue |

> **Nota:** enabler/runway **não** tracejam para B-REQ/épico/feature — o vínculo deles é o **"Habilita"**
> (declarado no card do enabler e refletido no `🔒 Travada por`/`Depende de` da feature). Esta tabela é só o espelho.

## 3. Cobertura — resumo

| Check | Contagem |
|---|---|
| 🚩 | 2 |
| 💡 | 11 |
| 👷 | 2 |
| 🏁 | 5 |
| 🚫 | 0 |

> **Requisitos 🚩** (não-iniciado, sem épico): **B-REQ-08** (analytics/origem de acessos/leads) e
> **B-REQ-09** (SSO/acesso unificado) — **adiadas** para Release 2 e Release 3, respectivamente
> (épicos futuros "Comercial" e "Plataforma" a criar no rolling wave). Não são gap acidental.

## 4. Decisões pendentes deste documento

1. `[ ]` Coluna **`Compliance`** — julgar as arestas (épico↔requisito · feature↔épico · story↔feature)
   no refinamento com o PO (hoje tudo `—`).
2. `[ ]` Criar o script `check-rastreabilidade.sh` (validação automática de links/órfãos) — hoje manual.

---

> 🔁 **Regra viva:** criou/moveu item, feature, épico, sprint ou release? Atualize esta matriz **e**
> [o backlog](../../../docs/produto/backlog/BACKLOG-LIST.md) **e** o índice da pasta no mesmo passo.
