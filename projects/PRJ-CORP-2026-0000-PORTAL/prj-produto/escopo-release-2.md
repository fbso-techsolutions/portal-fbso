# 🚀 Escopo da Release 2 (Comercial)

> Fatiamento vertical da segunda entrega. Fonte: [PRD](../PRD.md) · [rastreabilidade](rastreabilidade.md) ·
> [EPIC-0006](epicos/EPIC-0006-comercial.md).
> **Status:** 📝 **Em formação (proposta — corte a aprovar).** Documentação do épico/features/stories
> concluída; o corte S6/S7/S8 é **sugerido**, ainda não fechado em sprints formais.

## 1. O que entra

| Épico | Features | Entregável visível |
|---|---|---|
| EPIC-0006 Comercial | 0006.0001 Analytics · 0006.0006 LGPD | Medição de tráfego (GA4) com consentimento (Consent Mode v2) |
| EPIC-0006 Comercial | 0006.0002 Formulários · 0006.0003 CRM | Captura de leads + fluxo ao CRM próprio |
| EPIC-0006 Comercial | 0006.0004 Planos · 0006.0005 Consultoria | Planos/contratação via lead (sem pagamento) |

## 2. O que **não** entra (Release 2)

- SSO / identidade / acesso unificado aos SaaS (Release 3 — B-REQ-09).
- Checkout / pagamento online / assinaturas (Release 3 — a confirmar no refinamento).
- Fonte de conteúdo externa (CMS/API) — **ENABLER-0004** fica como runway **Release 3**.
- Self-service/automação de direitos do titular (portabilidade/exportação) — Release 3.

## 3. Ordem de entrega (corte sugerido — a aprovar)

| Sprint | Tema | Itens |
|---|---|---|
| **S6** | Medir + habilitar | ENABLER-0003 (Workers/API) · ENABLER-0005 (Manutenção) · FEATURE-0006.0001 (Analytics) · FEATURE-0006.0006 (LGPD) |
| **S7** | Capturar | FEATURE-0006.0002 (Formulários) · FEATURE-0006.0003 (CRM) |
| **S8** | Converter | FEATURE-0006.0004 (Planos) · FEATURE-0006.0005 (Consultoria) |

> ⚠️ O corte S6/S7/S8 ainda **não foi aprovado** (sprints formais a criar no Planning).
> Pendências que travam o go-live da R2: [pendencias.md](../pendencias.md).

## 4. Racional do corte

1. **Analytics primeiro** — menor custo, valor imediato; consentido/anonimizado, não trava na LGPD.
2. **Workers/API + LGPD são pré-requisitos** dos formulários (S7) — vêm antes.
3. **Formulários + CRM (S7)** dependem de ENABLER-0003 e do produto CRM (a criar).
4. **Planos/contratação (S8)** dependem de preço/proposta comercial do PO/PM.
