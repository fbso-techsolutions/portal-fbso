# 💬 User Story: US-FEAT-0006.0004-0039 — CTA de contratação por plano → lead pré-preenchido

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0004](../features/FEATURE-0006.0004-planos-contratacao-produtos.md) ➔ `US-FEAT-0006.0004-0039` |
| Prioridade | Should |
| Estimativa | — (a estimar no refinamento) |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** visitante, **quero** acionar "contratar" num plano, **para** ser levado a um formulário
  pré-preenchido (produto + plano) e virar lead.

## 2. Cenários (Gherkin)

- **Dado que** estou na página de planos, **quando** clico em "contratar", **então** o formulário
  abre pré-preenchido com produto e plano, e o clique é registrado como *key event* no GA4.
- **Dado que** envio o formulário, **quando** o lead é criado, **então** produto/plano seguem no lead
  para o CRM.

## 3. Não funcionais

- Depende de FEATURE-0006.0002 (formulário) · FEATURE-0006.0003 (CRM) · FEATURE-0006.0001 (GA4).
- Sem pagamento online (Release 3 — a confirmar no refinamento).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E — · S — · T ✅
