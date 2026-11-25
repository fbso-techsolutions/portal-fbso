# 💬 User Story: US-FEAT-0006.0002-0034 — Conversão no GA4 + origem de aquisição no lead

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0002](../features/FEATURE-0006.0002-formularios-captura-leads.md) ➔ `US-FEAT-0006.0002-0034` |
| Prioridade | Should |
| Estimativa | — (a estimar no refinamento) |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** gestor comercial, **quero** que cada envio gere um evento de conversão no GA4 com a origem
  de aquisição (UTM `source`/`medium`/`campaign`), **para** atribuir o lead ao canal certo.

## 2. Cenários (Gherkin)

- **Dado que** um lead é enviado com sucesso, **quando** o envio ocorre, **então** o evento
  `generate_lead` é registrado como *key event* no GA4.
- **Dado que** o visitante chegou por um link com UTM, **quando** envia o formulário, **então** a
  origem (`source`/`medium`/`campaign`) é capturada junto do lead.

## 3. Não funcionais

- Depende de FEATURE-0006.0001 (GA4) e do consentimento (FEATURE-0006.0006).
- Origem capturada no lead para o mapeamento do CRM (FEATURE-0006.0003).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E — · S — · T ✅
