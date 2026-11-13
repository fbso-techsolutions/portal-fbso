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
| 👷 | [B-REQ-01](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0001 — Layout institucional](features/FEATURE-0002.0001-layout-institucional.md) | [portal-fbso](../../../README.md) | [US-FEAT-0002.0001-0008 — Criar Header + navegação](user-stories/US-FEAT-0002.0001-0008-header-navegacao.md) | [Sprint 3 — Estrutura, navegação e institucional · 14/12–24/12](sprints/sprint-0003-estrutura-navegacao-institucional.md) | [TASK-0033…0034](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-01](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0001 — Layout institucional](features/FEATURE-0002.0001-layout-institucional.md) | [portal-fbso](../../../README.md) | [US-FEAT-0002.0001-0009 — Criar Footer institucional](user-stories/US-FEAT-0002.0001-0009-footer-institucional.md) | [Sprint 3 — Estrutura, navegação e institucional · 14/12–24/12](sprints/sprint-0003-estrutura-navegacao-institucional.md) | [TASK-0035](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-01](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0001 — Layout institucional](features/FEATURE-0002.0001-layout-institucional.md) | [portal-fbso](../../../README.md) | [US-FEAT-0002.0001-0010 — Menu responsivo (mobile)](user-stories/US-FEAT-0002.0001-0010-menu-responsivo.md) | [Sprint 3 — Estrutura, navegação e institucional · 14/12–24/12](sprints/sprint-0003-estrutura-navegacao-institucional.md) | [TASK-0036 · 0043](../prj-tecnico/tasks/README.md) | `—` | — |
| 🏁 | [B-REQ-01 · B-REQ-02](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0002 — Home institucional](features/FEATURE-0002.0002-home-institucional.md) | [portal-fbso](../../../README.md) | [US-FEAT-0002.0002-0011 — Hero institucional](user-stories/US-FEAT-0002.0002-0011-hero-institucional.md) | [Sprint 3 — Estrutura, navegação e institucional · 14/12–24/12](sprints/sprint-0003-estrutura-navegacao-institucional.md) | [TASK-0037](../prj-tecnico/tasks/README.md) | `—` | — |
| 🏁 | [B-REQ-01 · B-REQ-02](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0002 — Home institucional](features/FEATURE-0002.0002-home-institucional.md) | [portal-fbso](../../../README.md) | [US-FEAT-0002.0002-0012 — Posicionamento e diferenciais](user-stories/US-FEAT-0002.0002-0012-posicionamento-diferenciais.md) | [Sprint 3 — Estrutura, navegação e institucional · 14/12–24/12](sprints/sprint-0003-estrutura-navegacao-institucional.md) | [TASK-0038](../prj-tecnico/tasks/README.md) | `—` | — |
| 🏁 | [B-REQ-01 · B-REQ-02](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0002 — Home institucional](features/FEATURE-0002.0002-home-institucional.md) | [portal-fbso](../../../README.md) | [US-FEAT-0002.0002-0013 — Ecossistema SaaS + CTA](user-stories/US-FEAT-0002.0002-0013-ecossistema-saas-cta.md) | [Sprint 3 — Estrutura, navegação e institucional · 14/12–24/12](sprints/sprint-0003-estrutura-navegacao-institucional.md) | [TASK-0039](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-01](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0003 — Página Sobre](features/FEATURE-0002.0003-pagina-sobre.md) | [portal-fbso](../../../README.md) | [US-FEAT-0002.0003-0014 — Página Sobre (quem somos)](user-stories/US-FEAT-0002.0003-0014-pagina-sobre.md) | [Sprint 3 — Estrutura, navegação e institucional · 14/12–24/12](sprints/sprint-0003-estrutura-navegacao-institucional.md) | [TASK-0040](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-06](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0004 — Página Contato](features/FEATURE-0002.0004-pagina-contato.md) | [portal-fbso](../../../README.md) | [US-FEAT-0002.0004-0015 — Página Contato (canais)](user-stories/US-FEAT-0002.0004-0015-pagina-contato.md) | [Sprint 3 — Estrutura, navegação e institucional · 14/12–24/12](sprints/sprint-0003-estrutura-navegacao-institucional.md) | [TASK-0041](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-01](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0002 — Experiência Institucional](epicos/EPIC-0002-experiencia-institucional.md) | [FEATURE-0002.0005 — Páginas legais](features/FEATURE-0002.0005-paginas-legais.md) | [portal-fbso](../../../README.md) | [US-FEAT-0002.0005-0016 — Páginas legais (privacidade/termos)](user-stories/US-FEAT-0002.0005-0016-paginas-legais.md) | [Sprint 3 — Estrutura, navegação e institucional · 14/12–24/12](sprints/sprint-0003-estrutura-navegacao-institucional.md) | [TASK-0042](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-03](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0003 — FBSO TechServices](epicos/EPIC-0003-techservices.md) | [FEATURE-0003.0001 — Página FBSO TechServices](features/FEATURE-0003.0001-pagina-techservices.md) | [portal-fbso](../../../README.md) | [US-FEAT-0003.0001-0017 — Página FBSO TechServices](user-stories/US-FEAT-0003.0001-0017-pagina-techservices.md) | [Sprint 4 — TechServices e Portfólio SaaS · 11/01–22/01](sprints/sprint-0004-techservices-portfolio-saas.md) | [TASK-0044](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-04](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0004 — Portfólio de Produtos SaaS](epicos/EPIC-0004-portfolio-saas.md) | [FEATURE-0004.0001 — Catálogo SaaS](features/FEATURE-0004.0001-catalogo-saas.md) | [portal-fbso](../../../README.md) | [US-FEAT-0004.0001-0018 — Modelar catálogo SaaS como dados](user-stories/US-FEAT-0004.0001-0018-catalogo-saas-dados.md) | [Sprint 4 — TechServices e Portfólio SaaS · 11/01–22/01](sprints/sprint-0004-techservices-portfolio-saas.md) | [TASK-0045](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-04](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0004 — Portfólio de Produtos SaaS](epicos/EPIC-0004-portfolio-saas.md) | [FEATURE-0004.0001 — Catálogo SaaS](features/FEATURE-0004.0001-catalogo-saas.md) | [portal-fbso](../../../README.md) | [US-FEAT-0004.0001-0019 — Página /solucoes com cards](user-stories/US-FEAT-0004.0001-0019-pagina-solucoes.md) | [Sprint 4 — TechServices e Portfólio SaaS · 11/01–22/01](sprints/sprint-0004-techservices-portfolio-saas.md) | [TASK-0046](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-05](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0004 — Portfólio de Produtos SaaS](epicos/EPIC-0004-portfolio-saas.md) | [FEATURE-0004.0002 — Página de produto](features/FEATURE-0004.0002-pagina-produto.md) | [portal-fbso](../../../README.md) | [US-FEAT-0004.0002-0020 — Rota de detalhe /solucoes/:slug](user-stories/US-FEAT-0004.0002-0020-rota-detalhe-produto.md) | [Sprint 4 — TechServices e Portfólio SaaS · 11/01–22/01](sprints/sprint-0004-techservices-portfolio-saas.md) | [TASK-0047](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-05](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0004 — Portfólio de Produtos SaaS](epicos/EPIC-0004-portfolio-saas.md) | [FEATURE-0004.0002 — Página de produto](features/FEATURE-0004.0002-pagina-produto.md) | [portal-fbso](../../../README.md) | [US-FEAT-0004.0002-0021 — Conteúdo/link externo por produto](user-stories/US-FEAT-0004.0002-0021-conteudo-link-produto.md) | [Sprint 4 — TechServices e Portfólio SaaS · 11/01–22/01](sprints/sprint-0004-techservices-portfolio-saas.md) | [TASK-0048 · 0049](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0005 — SEO, Acessibilidade e Publicação](epicos/EPIC-0005-seo-publicacao.md) | [FEATURE-0005.0001 — SEO e prerender](features/FEATURE-0005.0001-seo-prerender.md) | [portal-fbso](../../../README.md) | [US-FEAT-0005.0001-0022 — Metadados por página](user-stories/US-FEAT-0005.0001-0022-metadados-pagina.md) | [Sprint 5 — SEO, a11y e go-live · 25/01–05/02](sprints/sprint-0005-seo-a11y-golive.md) | [TASK-0050](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0005 — SEO, Acessibilidade e Publicação](epicos/EPIC-0005-seo-publicacao.md) | [FEATURE-0005.0001 — SEO e prerender](features/FEATURE-0005.0001-seo-prerender.md) | [portal-fbso](../../../README.md) | [US-FEAT-0005.0001-0023 — sitemap + robots](user-stories/US-FEAT-0005.0001-0023-sitemap-robots.md) | [Sprint 5 — SEO, a11y e go-live · 25/01–05/02](sprints/sprint-0005-seo-a11y-golive.md) | [TASK-0051](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0005 — SEO, Acessibilidade e Publicação](epicos/EPIC-0005-seo-publicacao.md) | [FEATURE-0005.0002 — Acessibilidade e responsividade](features/FEATURE-0005.0002-acessibilidade-responsividade.md) | [portal-fbso](../../../README.md) | [US-FEAT-0005.0002-0024 — Responsividade](user-stories/US-FEAT-0005.0002-0024-responsividade.md) | [Sprint 5 — SEO, a11y e go-live · 25/01–05/02](sprints/sprint-0005-seo-a11y-golive.md) | [TASK-0052](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0005 — SEO, Acessibilidade e Publicação](epicos/EPIC-0005-seo-publicacao.md) | [FEATURE-0005.0002 — Acessibilidade e responsividade](features/FEATURE-0005.0002-acessibilidade-responsividade.md) | [portal-fbso](../../../README.md) | [US-FEAT-0005.0002-0025 — Acessibilidade básica](user-stories/US-FEAT-0005.0002-0025-acessibilidade-basica.md) | [Sprint 5 — SEO, a11y e go-live · 25/01–05/02](sprints/sprint-0005-seo-a11y-golive.md) | [TASK-0053](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0005 — SEO, Acessibilidade e Publicação](epicos/EPIC-0005-seo-publicacao.md) | [FEATURE-0005.0003 — Homologação e go-live](features/FEATURE-0005.0003-golive-dominio.md) | [portal-fbso](../../../README.md) | [US-FEAT-0005.0003-0026 — Domínio custom + HTTPS](user-stories/US-FEAT-0005.0003-0026-dominio-custom-https.md) | [Sprint 5 — SEO, a11y e go-live · 25/01–05/02](sprints/sprint-0005-seo-a11y-golive.md) | [TASK-0054](../prj-tecnico/tasks/README.md) | `—` | — |
| 👷 | [B-REQ-07](../prj-negocio/requisitos/requisitos-negocio.md) | [EPIC-0005 — SEO, Acessibilidade e Publicação](epicos/EPIC-0005-seo-publicacao.md) | [FEATURE-0005.0003 — Homologação e go-live](features/FEATURE-0005.0003-golive-dominio.md) | [portal-fbso](../../../README.md) | [US-FEAT-0005.0003-0027 — Homologação e go-live](user-stories/US-FEAT-0005.0003-0027-homologacao-golive.md) | [Sprint 5 — SEO, a11y e go-live · 25/01–05/02](sprints/sprint-0005-seo-a11y-golive.md) | [TASK-0055](../prj-tecnico/tasks/README.md) | `—` | — |
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
| 💡 | 0 |
| 👷 | 20 |
| 🏁 | 7 |
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
