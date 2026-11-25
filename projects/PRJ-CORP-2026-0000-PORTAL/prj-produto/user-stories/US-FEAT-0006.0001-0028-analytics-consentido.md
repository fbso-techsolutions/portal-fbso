# 💬 User Story: US-FEAT-0006.0001-0028 — Instrumentar analytics consentido

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0001](../features/FEATURE-0006.0001-analytics-origem-acessos.md) ➔ `US-FEAT-0006.0001-0028` |
| Prioridade | Should |
| Estimativa | 3 SP |
| Rastreio | B-REQ-08 |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** gestor do portal, **quero** analytics (GA4) funcionando nas páginas respeitando o
  consentimento, **para** medir o tráfego sem violar a LGPD.

## 2. Cenários (Gherkin)

- **Dado que** o usuário aceitou o consentimento, **quando** navega nas páginas, **então** o GA4
  é carregado e registra a visita.
- **Dado que** o usuário recusou, **quando** navega, **então** o GA4 **não** é carregado.

## 3. Não funcionais

- Consent Mode v2: default `analytics_storage: denied`; `update` para `granted` só após aceite.
- Tag `gtag.js` client-side em todas as páginas; sem sinais de anúncio (`ad_*` permanecem `denied`).
- **Measurement ID `G-LCBF75K8KW`** (gtag.js direto, sem GTM).
- Sem PII; retenção de dados configurada na propriedade GA4.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
