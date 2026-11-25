# 💬 User Story: US-FEAT-0006.0002-0033 — Endpoint de envio (Workers/API) + armazenamento

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0002](../features/FEATURE-0006.0002-formularios-captura-leads.md) ➔ `US-FEAT-0006.0002-0033` |
| Prioridade | Should |
| Estimativa | — (a estimar no refinamento) |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** time, **quero** um endpoint server-side (Cloudflare Workers) que receba, valide e armazene
  o envio do formulário, **para** não perder leads e processá-los com segurança.

## 2. Cenários (Gherkin)

- **Dado que** um formulário é enviado, **quando** o endpoint recebe o payload, **então** valida e
  armazena o lead.
- **Dado que** um payload é inválido/malicioso, **quando** chega ao endpoint, **então** é rejeitado
  sem armazenar (ex.: rate limit, anti-spam).

## 3. Não funcionais

- Depende de ENABLER-0003 (Worker script + binding `ASSETS`).
- Armazenamento em conformidade LGPD (retenção mínima, acesso restrito).
- Enquanto o CRM não existe, o lead fica **persistido no backend** (FEATURE-0006.0003).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E — · S — · T ✅
