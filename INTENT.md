# 🎯 INTENT — FBSO Corporate Portal

> **O que este repositório é, por que existe e para onde vai.** Leitura obrigatória para qualquer
> agente (IA ou humano) antes de tocar em qualquer arquivo. Não é um documento de processo —
> isso vive em [AGENTS.md](AGENTS.md) e na [platform-standards](https://github.com/fbso-techsolutions/platform-standards).

## 1. O que é

Site/portal institucional da **FBSO Technology Solutions** (`fbso.com.br`). Apresenta a empresa,
a divisão de consultoria **FBSO TechServices** e os quatro produtos SaaS (**Educatio**, **Fiscalia**,
**Mercator**, **Materiae**). É a porta de entrada digital da companhia para clientes e prospects.

## 2. Objetivo do MVP (Release 1)

O visitante deve conseguir:

1. Conhecer a FBSO Technology Solutions.
2. Entender o posicionamento e os diferenciais.
3. Conhecer a divisão FBSO TechServices.
4. Conhecer os quatro produtos SaaS.
5. Navegar para páginas específicas de produto/serviço, quando disponíveis.
6. Encontrar informações de contato e canais comerciais.

> **O MVP não tem** login, banco de dados, formulários integrados, checkout ou APIs. É **estático**.

## 3. Roadmap (3 releases)

| Release | Nome | O que entrega |
|---|---|---|
| **1** | Institucional (MVP atual) | Site estático: páginas corporativas, serviços, catálogo SaaS, SEO/responsividade |
| **2** | Comercial | Analytics, origem de acessos, captura de leads, formulários, contratação |
| **3** | Plataforma | Autenticação centralizada (OIDC/SSO), gestão de usuários/orgs, acesso aos SaaS |

> **Não-negociável de arquitetura:** o portal **não** vira um monolito para suportar SSO. Ele é a
> porta visual; autenticação e produtos permanecem serviços independentes.

## 4. Stack (definida)

Stack e regras de implementação: [AGENTS.md §5](AGENTS.md) — fonte única. Modelar conteúdo **como
dados** preserva a evolução para fonte externa (API/CMS) na Release 2 sem reescrever componentes.

## 5. Decisões ainda abertas (não bloqueiam o MVP)

1. **Subdomínio × domínio próprio** para os SaaS (`educatio.fbso.com.br` × `fbsoeducatio.com.br`) —
   afeta a compra de domínios e o desenho do SSO (Release 3).
2. **Renome** `saas-rmr` → `saas-materiae` (ação separada).
3. **`coding-standards-react.md`** a escrever na platform-standards (este projeto é o catalisador).
4. **Nomenclatura** — empresa "FBSO Technology Solutions" · marca "FBSO TechSolutions" · divisão "FBSO TechServices" (ver [BRAND-GUIDELINES](docs/negocio/branding/BRAND-GUIDELINES.md)).
