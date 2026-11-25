# ✨ FEATURE-0006.0005 — Contratação de consultoria (TechServices)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0006 — Comercial](../epicos/EPIC-0006-comercial.md) |
| B-REQ dona | B-REQ-08 |
| Prioridade | Onda 2-Should (Release 2) |
| 🔒 Travada por | FEATURE-0006.0001 (GA4) · FEATURE-0006.0002 (formulário) · FEATURE-0006.0003 (CRM) |
| Status | ✅ Revisado (2026-11-25) |

## 1. Objetivo de negócio

Permitir contratar consultoria da divisão FBSO TechServices (via lead/formulário).

## 2. Escopo

### Entra
- CTA/fluxo de "solicitar consultoria" na página TechServices.
- Formulário de interesse de consultoria (escopo/tipo de serviço) → lead no CRM
  (via FEATURE-0006.0002/0006.0003).
- Evento de conversão no GA4 para "solicitou consultoria" (*key event* — depende de FEATURE-0006.0001).

### Fora
- Pagamento online (Release 3 — a confirmar no refinamento).
- Catálogo/contratação dos SaaS (FEATURE-0006.0004).

## 5. User stories desta feature

| ID | História |
|---|---|
| [US-FEAT-0006.0005-0040](../user-stories/US-FEAT-0006.0005-0040-cta-consultoria-techservices.md) | CTA de consultoria na página TechServices |
| [US-FEAT-0006.0005-0041](../user-stories/US-FEAT-0006.0005-0041-formulario-consultoria-lead.md) | Formulário de interesse de consultoria → lead no CRM |

## 7. Critérios de aceite (DoD)

- [ ] Interessado em consultoria vira lead no CRM (com origem de aquisição).
- [ ] Solicitação registrada como *key event* no GA4.
