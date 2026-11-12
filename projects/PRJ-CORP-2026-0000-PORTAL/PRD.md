# 📝 PRD Ágil — Projeto PRJ-CORP-2026-0000-PORTAL (Release 1 / MVP estático)

> Versão: 0.1 (rascunho) | Status: 📝 Em formação
>
> Este PRD cobre o **escopo do projeto** (seções 3–6). A **visão do produto** vive em
> [docs/negocio/visao.md](../../docs/negocio/visao.md).

## 1. Objetivo do projeto

Publicar a **primeira versão** do site corporativo da FBSO Technology Solutions — **estática**,
sem login, banco, formulários integrados, checkout ou APIs — para apresentar a empresa, a divisão
FBSO TechServices e os quatro produtos SaaS (Educatio, Fiscalia, Mercator, Materiae) a clientes e
prospects.

## 2. Requisitos de negócio (B-REQ)

> Fonte canônica: [prj-negocio/requisitos/requisitos-negocio.md](prj-negocio/requisitos/requisitos-negocio.md).

| B-REQ | Necessidade | Release |
|---|---|---|
| B-REQ-01 | Conhecer a FBSO Technology Solutions | 1 |
| B-REQ-02 | Entender posicionamento e diferenciais | 1 |
| B-REQ-03 | Conhecer a divisão FBSO TechServices | 1 |
| B-REQ-04 | Conhecer os quatro produtos SaaS | 1 |
| B-REQ-05 | Navegar para páginas de produto/serviço | 1 |
| B-REQ-06 | Encontrar contato e canais comerciais | 1 |
| B-REQ-07 | SEO e responsividade (encontrabilidade) | 1 |
| B-REQ-08 | Analytics, origem de acessos e captura de leads | 2 |
| B-REQ-09 | SSO e acesso unificado aos SaaS | 3 |

## 3. Mapeamento de Épicos e Features

> Árvore completa (B-REQ → épico → feature) em
> [prj-produto/rastreabilidade.md](prj-produto/rastreabilidade.md).

| Épico | Features |
|---|---|
| [**EPIC-0001** — Fundação e Engenharia do Portal](prj-produto/epicos/EPIC-0001-fundacao-engenharia.md) | 0001.0001 Scaffold · 0001.0002 Design System · 0001.0003 CI/CD + deploy |
| [**EPIC-0002** — Experiência Institucional](prj-produto/epicos/EPIC-0002-experiencia-institucional.md) | 0002.0001 Layout · 0002.0002 Home · 0002.0003 Sobre · 0002.0004 Contato · 0002.0005 Legais |
| [**EPIC-0003** — FBSO TechServices](prj-produto/epicos/EPIC-0003-techservices.md) | 0003.0001 Página TechServices |
| [**EPIC-0004** — Portfólio de Produtos SaaS](prj-produto/epicos/EPIC-0004-portfolio-saas.md) | 0004.0001 Catálogo SaaS · 0004.0002 Página de produto |
| [**EPIC-0005** — SEO, Acessibilidade e Publicação](prj-produto/epicos/EPIC-0005-seo-publicacao.md) | 0005.0001 SEO/prerender · 0005.0002 A11y/responsivo · 0005.0003 Go-live |

## 4. Estrutura de Engenharia

> Diretrizes e stack: [docs/tecnico/arquitetura/ARCHITECTURE.md](../../docs/tecnico/arquitetura/ARCHITECTURE.md)
> · [ADR-001](../../docs/tecnico/arquitetura/adrs/adr-001-stack-portal.md) ·
> [DEPLOYMENT](../../docs/tecnico/arquitetura/DEPLOYMENT.md).

## 5. Frentes (cross-repo)

| Frente | Repo | Status |
|---|---|---|
| — (nenhuma no MVP) | — | — |

> Release 2/3 abrirão frentes para os `saas-*` (links de produto, SSO) e para o provedor de
> identidade — seguindo o [ADR-002 (projeto transversal)](https://github.com/fbso-techsolutions/platform-standards/blob/main/governance/adrs/adr-002-projeto-transversal.md).

## 6. Mapa de documentos

| Frente | Documento | Caminho |
|---|---|---|
| Produto | Visão | [docs/negocio/visao.md](../../docs/negocio/visao.md) |
| Produto | Branding | [docs/negocio/branding/BRAND-GUIDELINES.md](../../docs/negocio/branding/BRAND-GUIDELINES.md) |
| Produto | Arquitetura / Deploy | [docs/tecnico/arquitetura/](../../docs/tecnico/arquitetura) |
| Produto | Segurança | [docs/tecnico/seguranca/README.md](../../docs/tecnico/seguranca/README.md) |
| Projeto | Demanda de origem | [prj-negocio/discovery/PEDIDO.md](prj-negocio/discovery/PEDIDO.md) |
| Projeto | Requisitos (B-REQ) | [prj-negocio/requisitos/requisitos-negocio.md](prj-negocio/requisitos/requisitos-negocio.md) |
| Projeto | Épicos, features, stories, sprints | [prj-produto/](prj-produto) |
| Projeto | Enablers e runways | [prj-tecnico/](prj-tecnico) |
| Projeto | Hub de pendências | [pendencias.md](pendencias.md) |
| Projeto | Equipe | [equipe.md](equipe.md) |
| Processo | Padrões ágeis | [platform-standards/standards/agile/](https://github.com/fbso-techsolutions/platform-standards/tree/main/standards/agile) |

## 7. Decisões pendentes deste documento

1. ✅ **ID do projeto** — `PRJ-CORP-2026-0000-PORTAL` (código de área `CORP`) confirmado (2026-11-11).
2. ✅ **Time do projeto** — preenchido em [equipe.md](equipe.md) (2026-11-11).
3. ✅ **Calendário de sprints** — 2 semanas/sprint a partir de 16/11/2026.
4. ✅ **Páginas legais** — entram no MVP com texto fixo/padrão (FEATURE-0002.0005).
5. `[ ]` **Subdomínio × domínio próprio** dos SaaS (afeta B-REQ-05 e Release 3) — [PENDENCY-0004](pendencias.md).
