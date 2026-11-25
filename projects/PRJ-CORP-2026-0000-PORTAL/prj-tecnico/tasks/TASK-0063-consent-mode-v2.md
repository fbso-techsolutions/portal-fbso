# ⚙️ TASK-0063 — Consent Mode v2 (default `denied` → `update`)

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0006.0006-0030 — Banner de consentimento + aviso de privacidade](../../prj-produto/user-stories/US-FEAT-0006.0006-0030-banner-consentimento.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0062 — Banner de consentimento (UI)](TASK-0062-banner-consentimento-ui.md) |

## 1. Objetivo

Integrar o **Consent Mode v2** ao banner: default `denied` antes da escolha, `update` no aceite/recusa.

## 2. O que implementar/entregar

- Antes de carregar o GA4: `gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })`.
- No aceite: `gtag('consent', 'update', { analytics_storage: 'granted' })`.
- Na recusa: mantém `denied` (não dispara analytics).

## 3. Critério de saída (evidência)

- [x] Consent state default = `denied` (analytics bloqueado antes da escolha).
- [x] Aceite → `analytics_storage: granted`; recusa → permanece `denied`.

**Evidências:**
- `src/lib/consent.ts` → `CONSENT_DEFAULT` (tudo denied) + snippet inline + `consentUpdate`/`updateConsent`.
- Snippet injetado no `<head>` (`root.tsx`) e presente no HTML pré-renderizado (default denied).
- `updateConsent` ligado ao `onChoice` do banner (`AppLayout`).
- Testes 18/18 (consent: default denied, snippet, aceite→granted / recusa→denied).
- Validação no Tag Assistant/debug: a confirmar após o deploy (TASK-0065 carrega o `gtag.js`).
