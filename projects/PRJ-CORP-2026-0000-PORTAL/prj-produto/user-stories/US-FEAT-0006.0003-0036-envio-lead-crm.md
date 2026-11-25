# 💬 User Story: US-FEAT-0006.0003-0036 — Envio do lead ao CRM (webhook/API)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0003](../features/FEATURE-0006.0003-integracao-crm.md) ➔ `US-FEAT-0006.0003-0036` |
| Prioridade | Should |
| Estimativa | — (a estimar no refinamento) |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** time comercial, **quero** que cada lead enviado flua automaticamente para o CRM, **para**
  não depender de repasse manual.

## 2. Cenários (Gherkin)

- **Dado que** um lead é armazenado no backend, **quando** o CRM estiver disponível, **então** o lead
  é enviado ao CRM com os campos mapeados.
- **Dado que** o envio falha, **quando** ocorre erro, **então** há retry/log e o lead não se perde.

## 3. Não funcionais

- 🔒 **Bloqueada** pelo produto CRM (a criar) — FEATURE-0006.0003.
- Depende de ENABLER-0003 (Workers) para o webhook/API.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E — · S — · T ✅
