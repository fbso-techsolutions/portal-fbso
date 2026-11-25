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

- [x] `/privacidade` e `/termos` com o conteúdo LGPD final.
- [x] Gate verde (`typecheck` · `lint` · `format:check` · `test`).

**Evidências:**
- `src/content/legais.ts` + `Privacidade.tsx`/`Termos.tsx` — conteúdo LGPD final: controlador (CNPJ), finalidade, base legal (art. 7º-I), transferência internacional (art. 33 — SCCs/DPF), retenção (14 meses), direitos (art. 18) e DPO (Daniel Vini).
- `/privacidade` (pré-render) contém art. 7º/33/18, "14 meses" e "Daniel Vini"; `/termos` contém os termos.
- Link "Preferências de Privacidade" (TASK-0064) confirmado no rodapé e referenciado na política (revogação).
- Gate verde: `typecheck` · `lint` · `format:check` · `test` (24/24).
- Revisão de Segurança (Daniel Vini): sob demanda, a confirmar no PR.
