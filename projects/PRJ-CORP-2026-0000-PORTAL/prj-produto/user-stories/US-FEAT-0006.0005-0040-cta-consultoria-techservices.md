# 💬 User Story: US-FEAT-0006.0005-0040 — CTA de consultoria na página TechServices

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0005](../features/FEATURE-0006.0005-contratacao-consultoria.md) ➔ `US-FEAT-0006.0005-0040` |
| Prioridade | Should |
| Estimativa | — (a estimar no refinamento) |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** visitante da página TechServices, **quero** um CTA claro de "solicitar consultoria", **para**
  iniciar o contato com a divisão.

## 2. Cenários (Gherkin)

- **Dado que** estou na página TechServices, **quando** clico em "solicitar consultoria", **então** sou
  levado ao formulário de interesse e o clique é registrado no GA4.

## 3. Não funcionais

- Reutiliza o formulário (FEATURE-0006.0002) com contexto "consultoria".
- Evento de clique no GA4 (depende de FEATURE-0006.0001).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E — · S — · T ✅
