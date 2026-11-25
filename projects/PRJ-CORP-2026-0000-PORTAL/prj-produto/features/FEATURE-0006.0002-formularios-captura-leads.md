# ✨ FEATURE-0006.0002 — Formulários e captura de leads

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0006 — Comercial](../epicos/EPIC-0006-comercial.md) |
| B-REQ dona | B-REQ-08 |
| Prioridade | Onda 2-Should (Release 2) |
| 🔒 Travada por | FEATURE-0006.0001 (GA4) · FEATURE-0006.0006 (LGPD) · ENABLER-0003 (Workers/API) |
| Status | ✅ Revisado (2026-11-25) |

## 1. Objetivo de negócio

Capturar contato/interesse do visitante (formulário com backend) para alimentar o funil comercial.

## 2. Escopo

### Entra
- Formulário de contato/interesse (ex.: Contato, "quero saber mais" por produto/serviço).
- Endpoint server-side (Workers/API) para receber e validar o envio.
- Evento de conversão no GA4: `form_submit`/`generate_lead` como **key event** (depende de FEATURE-0006.0001).
- Captura da **origem de aquisição** (UTM `source`/`medium`/`campaign`) junto do lead.

### Fora
- Integração com CRM (FEATURE-0006.0003) · pagamento (Release 3 — a confirmar no refinamento).

## 5. User stories desta feature

| ID | História |
|---|---|
| [US-FEAT-0006.0002-0032](../user-stories/US-FEAT-0006.0002-0032-formulario-contato-interesse.md) | Formulário de contato/interesse (UI + validação) |
| [US-FEAT-0006.0002-0033](../user-stories/US-FEAT-0006.0002-0033-endpoint-envio-workers.md) | Endpoint de envio (Workers/API) + armazenamento |
| [US-FEAT-0006.0002-0034](../user-stories/US-FEAT-0006.0002-0034-conversao-ga4-origem.md) | Conversão no GA4 + origem de aquisição no lead |

## 7. Critérios de aceite (DoD)

- [ ] Formulário em produção com envio validado e armazenado, em conformidade LGPD.
- [ ] Envio gera evento de conversão no GA4 com a origem de aquisição registrada.
