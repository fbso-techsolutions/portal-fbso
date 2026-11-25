# 🧭 EPIC-0006 — Comercial (conversão e relacionamento)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | `EPIC-0006` — Comercial |
| B-REQs atendidas | B-REQ-08 |
| Features | 6 — `FEATURE-0006.0001` … `FEATURE-0006.0006` |
| Prioridade | Onda 2-Should (Release 2) |
| Status | ✅ Revisado (2026-11-25) |

## 1. Objetivo

- **Problema:** o portal apresenta a empresa, mas não mede quem chega nem converte o visitante em
  lead/negócio.
- **Solução:** instrumentar analytics (origem de acessos + eventos) e construir o caminho de
  conversão — formulários/leads, integração com CRM, planos/contratação (produtos) e contratação
  de consultoria — sempre em conformidade LGPD (consentimento).
- **Impacto:** o portal deixa de ser só vitrine e passa a alimentar o funil comercial.

## 2. Fora do escopo deste épico

- SSO/identidade e acesso unificado aos SaaS (Release 3 — B-REQ-09).
- Pagamento online / checkout / assinaturas (Release 3 — a confirmar no refinamento); aqui
  "contratação" é via **lead/formulário**, sem cobrança online.

## 3. Features derivadas

| Feature | Título | Stories |
|---|---|---|
| [FEATURE-0006.0001](../features/FEATURE-0006.0001-analytics-origem-acessos.md) | Analytics e origem de acessos | S6 |
| [FEATURE-0006.0002](../features/FEATURE-0006.0002-formularios-captura-leads.md) | Formulários e captura de leads | S7 |
| [FEATURE-0006.0003](../features/FEATURE-0006.0003-integracao-crm.md) | Integração CRM | S7 |
| [FEATURE-0006.0004](../features/FEATURE-0006.0004-planos-contratacao-produtos.md) | Planos e contratação (produtos) | S8 |
| [FEATURE-0006.0005](../features/FEATURE-0006.0005-contratacao-consultoria.md) | Contratação de consultoria (TechServices) | S8 |
| [FEATURE-0006.0006](../features/FEATURE-0006.0006-consentimento-privacidade-lgpd.md) | Consentimento e privacidade (LGPD) | S6 |

> 📌 **Ferramenta de analytics (decidida):** GA4 client-side (`gtag.js`) + Consent Mode v2 + banner
> próprio — detalhe em [FEATURE-0006.0001](../features/FEATURE-0006.0001-analytics-origem-acessos.md)
> e [FEATURE-0006.0006](../features/FEATURE-0006.0006-consentimento-privacidade-lgpd.md).

> 💡 **Rastreabilidade:** [matriz](../rastreabilidade.md) · **Backlog:** [BACKLOG-LIST](../../../../docs/produto/backlog/BACKLOG-LIST.md).
