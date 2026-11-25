# 💬 User Story: US-FEAT-0006.0001-0029 — Origem de acessos + eventos-chave

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0001](../features/FEATURE-0006.0001-analytics-origem-acessos.md) ➔ `US-FEAT-0006.0001-0029` |
| Prioridade | Should |
| Estimativa | 3 SP |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** gestor do portal, **quero** saber a origem dos acessos (UTM/referrer) e os eventos-chave,
  **para** avaliar canais e conversão.

## 2. Cenários (Gherkin)

- **Dado que** o usuário chega por um link com UTM, **quando** a página carrega, **então** a origem
  (`source`/`medium`/`campaign`) é registrada.
- **Dado que** o usuário clica num CTA, **quando** o clique ocorre, **então** o evento é registrado
  como *key event* no GA4.

## 3. Não funcionais

- Consentimento prévio (FEATURE-0006.0006).
- Origem via UTM/referrer é **automática** no GA4 (dimensões de tráfego).
- Key events mínimos: clique em CTA · contato · visualização de produto.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
