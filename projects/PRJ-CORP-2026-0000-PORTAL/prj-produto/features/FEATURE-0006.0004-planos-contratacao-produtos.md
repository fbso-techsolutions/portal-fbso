# ✨ FEATURE-0006.0004 — Planos e contratação (produtos)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0006 — Comercial](../epicos/EPIC-0006-comercial.md) |
| B-REQ dona | B-REQ-08 |
| Prioridade | Onda 2-Should (Release 2) |
| 🔒 Travada por | decisão de preço/planos (PO/PM) — conteúdo · FEATURE-0006.0001 (GA4) · FEATURE-0006.0002 (formulário) · FEATURE-0006.0003 (CRM) |
| Status | ✅ Revisado (2026-11-25) |

## 1. Objetivo de negócio

Expor planos/preços dos quatro SaaS e permitir contratar — via **lead/formulário**, **sem pagamento online**.

## 2. Escopo

> 📌 **Conteúdo (a definir):** os planos/preços por SaaS são decisão do **PO/PM**. Esta feature define
> a **estrutura** (onde e como exibir + como o interesse vira lead); os valores entram depois.

### Entra
- **Planos como dados** — estende o catálogo SaaS da Release 1 (`src/content/`): tiers, preço,
  recursos, comparativo.
- **Página de planos por produto** (ex.: `/solucoes/:slug/planos`), reutilizando o design system.
- **CTA de contratação por plano** → formulário pré-preenchido (produto + plano) → lead no CRM
  (via FEATURE-0006.0002/0006.0003).
- Evento de conversão no GA4 para "clicou em contratar" (*key event* — depende de FEATURE-0006.0001).

### Fora
- Checkout / pagamento / assinatura (Release 3 — a confirmar no refinamento).
- Preenchimento dos **valores** de preço (PO/PM — decisão pendente).

## 5. User stories desta feature

| ID | História |
|---|---|
| [US-FEAT-0006.0004-0037](../user-stories/US-FEAT-0006.0004-0037-modelar-planos-dados.md) | Modelar planos/preços por SaaS como dados |
| [US-FEAT-0006.0004-0038](../user-stories/US-FEAT-0006.0004-0038-pagina-planos-produto.md) | Página de planos por produto (rota + tiers + comparativo) |
| [US-FEAT-0006.0004-0039](../user-stories/US-FEAT-0006.0004-0039-cta-contratacao-plano.md) | CTA de contratação por plano → lead pré-preenchido |

## 7. Critérios de aceite (DoD)

- [ ] Planos visíveis por SaaS a partir dos dados do catálogo.
- [ ] CTA de contratação gera lead no CRM com produto/plano e origem de aquisição.
- [ ] Clique em "contratar" registrado como *key event* no GA4.
