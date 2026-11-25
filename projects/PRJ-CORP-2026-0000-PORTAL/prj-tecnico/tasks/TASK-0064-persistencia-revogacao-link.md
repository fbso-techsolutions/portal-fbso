# ⚙️ TASK-0064 — Persistência + revogação + link "Preferências de Privacidade"

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0006.0006-0030 — Banner de consentimento + aviso de privacidade](../../prj-produto/user-stories/US-FEAT-0006.0006-0030-banner-consentimento.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0063 — Consent Mode v2](TASK-0063-consent-mode-v2.md) |

## 1. Objetivo

Persistir a escolha do usuário (1ª parte) e permitir **revogação**, com o link "Preferências de
Privacidade" no rodapé.

## 2. O que implementar/entregar

- Persistir a escolha em cookie/localStorage **1ª parte** (não reexibir o banner a cada visita).
- Adicionar "Preferências de Privacidade" no rodapé (`src/content/site.ts` → `footerLegal`).
- Revogação: ao reabrir as preferências, permitir trocar/revogar o consentimento (→ `update: denied`).

## 3. Critério de saída (evidência)

- [x] Escolha persistida entre navegações.
- [x] Link "Preferências de Privacidade" no rodapé.
- [x] Revogação funciona (muda estado para `denied`).

**Evidências:**
- `src/lib/consent.ts` → `readConsent`/`saveConsent` (localStorage 1ª parte, chave `fbso.consent`).
- `AppLayout` → restaura a escolha no mount (`useEffect`) e persiste em `handleConsentChoice`.
- `site.ts` → `privacyPreferencesLabel` + botão no rodapé (reabre o banner → reescolher/revogar).
- Testes 20/20 (round-trip da persistência + valor desconhecido → null).
- Prerender: "Preferências de Privacidade" presente no rodapé de todas as páginas.
- Screenshot: a capturar na revisão visual (QA).
