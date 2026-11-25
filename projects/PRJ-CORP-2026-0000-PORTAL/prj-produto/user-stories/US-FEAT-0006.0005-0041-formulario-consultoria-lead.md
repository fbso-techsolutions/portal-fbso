# 💬 User Story: US-FEAT-0006.0005-0041 — Formulário de interesse de consultoria → lead no CRM

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0005](../features/FEATURE-0006.0005-contratacao-consultoria.md) ➔ `US-FEAT-0006.0005-0041` |
| Prioridade | Should |
| Estimativa | — (a estimar no refinamento) |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** gestor comercial, **quero** que o interesse em consultoria vire um lead qualificado (tipo
  de serviço) no CRM, **para** encaminhar a oportunidade.

## 2. Cenários (Gherkin)

- **Dado que** o visitante preenche o formulário de consultoria, **quando** envia, **então** o lead é
  criado com o tipo de serviço e a origem de aquisição.
- **Dado que** o envio ocorre, **quando** o lead é registrado, **então** a solicitação é registrada
  como *key event* no GA4.

## 3. Não funcionais

- Depende de FEATURE-0006.0002 (formulário) · FEATURE-0006.0003 (CRM).
- Sem pagamento online (Release 3 — a confirmar no refinamento).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E — · S — · T ✅
