# ⚙️ TASK-0065 — Tag `gtag.js` (G-LCBF75K8KW) carregada só após consentimento

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0006.0001-0028 — Instrumentar analytics consentido](../../prj-produto/user-stories/US-FEAT-0006.0001-0028-analytics-consentido.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0063 — Consent Mode v2](TASK-0063-consent-mode-v2.md) |

## 1. Objetivo

Instrumentar o GA4 (**`gtag.js` direto, Measurement ID `G-LCBF75K8KW`**) em todas as páginas, disparando
**somente** após o consentimento.

## 2. O que implementar/entregar

- Carregar o snippet `gtag.js` com `gtag('config', 'G-LCBF75K8KW')`.
- Respeitar o Consent Mode: analytics **não** carrega antes do aceite (default `denied`).
- Sem PII; sem `ad_storage`/`ad_personalization` (permanecem `denied`).

## 3. Critério de saída (evidência)

- [ ] Aceitou consentimento → GA4 carrega e registra a visita.
- [ ] Recusou/ignorou → GA4 **não** carrega.

**Evidências:** — a preencher na execução (Tag Assistant / Network: gtag bloqueado até aceite).
