# ✨ FEATURE-0006.0003 — Integração CRM

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0006 — Comercial](../epicos/EPIC-0006-comercial.md) |
| B-REQ dona | B-REQ-08 |
| Prioridade | Onda 2-Should (Release 2) |
| 🔒 Travada por | FEATURE-0006.0002 (formulários) · produto CRM (a criar) |
| Status | ✅ Revisado (2026-11-25) |

## 1. Objetivo de negócio

Fazer os leads capturados fluírem automaticamente para o CRM comercial.

## 2. Escopo

> 📌 **Decisão (2026-11-23):** o CRM será **próprio (simples)**, um **novo produto** da empresa,
> criado em breve (dono: PM/PO + Comercial). Não é ferramenta externa.
>
> 📌 **Repo (2026-11-26):** produto criado — [`fbso-techsolutions/saas-sociera`](https://github.com/fbso-techsolutions/saas-sociera)
> (projeto `PRJ-CORP-2026-0000-CRM`).

### Entra
- Integração portal → **CRM próprio (simples)** (produto a criar em breve).
- Mapeamento dos campos do formulário para o CRM.
- Incluir **origem de aquisição** (`source`/`medium`/`campaign`) no lead.

> 📌 Enquanto o CRM não existe, os leads ficam **persistidos no backend do formulário**
> (FEATURE-0006.0002); o contrato de integração é definido quando o produto CRM for criado.

### Fora
- Automação de marketing/outbound (fora do portal).

## 5. User stories desta feature

| ID | História |
|---|---|
| [US-FEAT-0006.0003-0035](../user-stories/US-FEAT-0006.0003-0035-contrato-integracao-crm.md) | Contrato de integração portal ↔ CRM (mapeamento de campos) |
| [US-FEAT-0006.0003-0036](../user-stories/US-FEAT-0006.0003-0036-envio-lead-crm.md) | Envio do lead ao CRM (webhook/API) |

## 7. Critérios de aceite (DoD)

- [ ] Lead do formulário chega ao CRM com os campos mapeados, origem de aquisição e status correto.
