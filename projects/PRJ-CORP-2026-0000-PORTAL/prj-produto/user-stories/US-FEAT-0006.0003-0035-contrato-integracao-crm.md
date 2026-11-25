# 💬 User Story: US-FEAT-0006.0003-0035 — Contrato de integração portal ↔ CRM (mapeamento)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0003](../features/FEATURE-0006.0003-integracao-crm.md) ➔ `US-FEAT-0006.0003-0035` |
| Prioridade | Should |
| Estimativa | — (a estimar no refinamento) |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** time, **quero** definir o contrato de integração portal ↔ CRM (campos + origem de
  aquisição), **para** que o lead chegue ao CRM consistente e rastreável.

## 2. Cenários (Gherkin)

- **Dado que** o CRM próprio for criado, **quando** o contrato for definido, **então** os campos do
  formulário (contato, produto/interesse, origem) têm mapeamento 1:1 para o CRM.
- **Dado que** um lead tem origem UTM, **quando** é mapeado, **então** `source`/`medium`/`campaign`
  seguem junto no registro do CRM.

## 3. Não funcionais

- CRM **próprio (simples)** — produto a criar (dono: PM/PO + Comercial).
- Enquanto o CRM não existe, o contrato define o **schema**; a integração efetiva depende do produto.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E — · S — · T ✅
