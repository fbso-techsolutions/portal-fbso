# 💬 User Story: US-FEAT-0006.0002-0032 — Formulário de contato/interesse (UI + validação)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0002](../features/FEATURE-0006.0002-formularios-captura-leads.md) ➔ `US-FEAT-0006.0002-0032` |
| Prioridade | Should |
| Estimativa | — (a estimar no refinamento) |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** visitante, **quero** preencher um formulário de contato/interesse (Contato e "quero saber
  mais" por produto/serviço), **para** enviar meu interesse ao comercial.

## 2. Cenários (Gherkin)

- **Dado que** estou na página Contato, **quando** preencho e envio o formulário, **então** vejo
  confirmação de envio e os dados são encaminhados ao endpoint.
- **Dado que** deixo campos obrigatórios vazios ou inválidos, **quando** envio, **então** vejo
  mensagens de validação e o envio é bloqueado.

## 3. Não funcionais

- Validação client-side (acessível) + server-side (nunca confiar só no client).
- Em conformidade LGPD (coleta mínima; aviso aponta para a política — FEATURE-0006.0006).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E — · S — · T ✅
