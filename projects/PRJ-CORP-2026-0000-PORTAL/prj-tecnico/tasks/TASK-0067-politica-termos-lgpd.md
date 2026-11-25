# ⚙️ TASK-0067 — Política de privacidade e termos (conteúdo LGPD final)

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0006.0006-0031 — Atualizar política de privacidade e termos (LGPD)](../../prj-produto/user-stories/US-FEAT-0006.0006-0031-atualizar-politica-privacidade.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Alfredo Bento + Daniel Vini (revisão, sob demanda) |
| Esforço | 2h |
| Depende de | [TASK-0062 — Banner de consentimento (UI)](TASK-0062-banner-consentimento-ui.md) |

## 1. Objetivo

Publicar a política de privacidade e os termos com o **conteúdo LGPD final** (base legal art. 7º-I,
transferência internacional art. 33, retenção 14 meses, direitos art. 18, DPO Daniel Vini).

## 2. O que implementar/entregar

- Conteúdo **já implementado** em `src/content/legais.ts` + páginas `Privacidade.tsx`/`Termos.tsx`
  (feito na resolução da PENDENCY-0013). Esta task é a **verificação formal**:
- Conferir se o texto reflete o que o GA4/Consent Mode realmente fazem (revisão Segurança).
- Confirmar o link "Preferências de Privacidade" (entregue na TASK-0064).

## 3. Critério de saída (evidência)

- [ ] `/privacidade` e `/termos` com o conteúdo LGPD final.
- [ ] Gate verde (`typecheck` · `lint` · `format:check` · `test`).

**Evidências:** — a preencher na execução (PR + deploy + screenshot).
