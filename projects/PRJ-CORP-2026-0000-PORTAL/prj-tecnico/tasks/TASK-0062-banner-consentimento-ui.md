# ⚙️ TASK-0062 — Componente de banner de consentimento

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0006.0006-0030 — Banner de consentimento + aviso de privacidade](../../prj-produto/user-stories/US-FEAT-0006.0006-0030-banner-consentimento.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Alfredo Bento |
| Esforço | 4h |
| Depende de | — |

## 1. Objetivo

Criar o **banner de consentimento** (aceitar/recusar) exibido em todas as páginas, com aviso apontando
para a política de privacidade.

## 2. O que implementar/entregar

- Componente de banner (ex.: `src/components/sections/CookieBanner.tsx`), renderizado no layout raiz.
- Botões "Aceitar" e "Recusar" + link para `/privacidade`.
- Acessível (foco, contraste, ARIA) e responsivo (Tailwind).

## 3. Critério de saída (evidência)

- [ ] Banner renderiza em todas as páginas (antes da escolha).
- [ ] Botões aceitar/recusar + link para `/privacidade` funcionando.

**Evidências:** — a preencher na execução (PR + screenshot).
