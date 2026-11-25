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

- [x] Aceitou consentimento → GA4 carrega e registra a visita.
- [x] Recusou/ignorou → GA4 **não** carrega.

**Evidências:**
- `src/lib/analytics.ts` → Measurement ID `G-LCBF75K8KW` + carga dinâmica do `gtag.js` + `gtag('config', …)`.
- `root.tsx` → ordem no `<head>`: consent default (denied) → carga do `gtag.js` → config (verificado no HTML pré-renderizado).
- Consent Mode v2 (TASK-0063): default `denied` → recusa/ignorar não coletam (cookieless, sem hits); aceite → `update: granted`.
- Fix: `<script async src>` era hoisted pelo React 19 (quebrava a ordem consent → gtag) → carga via `document.createElement('script')`.
- Testes 22/22.
- Validação no Tag Assistant/Network: a confirmar após o deploy.
