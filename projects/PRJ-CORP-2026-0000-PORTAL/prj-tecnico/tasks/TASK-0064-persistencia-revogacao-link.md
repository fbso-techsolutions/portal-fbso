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

- [ ] Escolha persistida entre navegações.
- [ ] Link "Preferências de Privacidade" no rodapé.
- [ ] Revogação funciona (muda estado para `denied`).

**Evidências:** — a preencher na execução (PR + screenshot).
