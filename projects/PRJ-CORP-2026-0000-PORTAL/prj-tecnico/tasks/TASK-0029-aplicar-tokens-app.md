# ⚙️ TASK-0029 — Aplicar tokens no app (root/Home/layout)

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0002-0006 — Design tokens](../../prj-produto/user-stories/US-FEAT-0001.0002-0006-design-tokens.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 2 — Design System](../../prj-produto/sprints/sprint-0002-design-system.md) · 30/11–11/12 |
| Dono | Alfredo Bento |
| Esforço | 2h |
| Depende de | [TASK-0028](TASK-0028-design-tokens.md) |

## 1. Objetivo

Substituir os valores hardcoded atuais (cores/tipografia no `root.tsx`, `AppLayout`, `Home`) pelo
consumo dos tokens definidos na TASK-0028.

## 2. O que implementar/entregar

- Trocar cores/tamanhos literais por classes/variaveis do tema.
- Confirmar que o visual existente (header/main/footer, "hello world") permanece equivalente.

## 3. Critério de saída (evidência)

- [x] Nenhum valor de cor/tipografia hardcoded nos componentes (`grep` limpo).
- [x] Build + preview local sem regressão visual óbvia.

**Evidências**

- `AppLayout.tsx` e `Home.tsx` passaram a consumir tokens (`bg-navy` · `text-mint` · `text-mist` · `border-blue` · `text-sky`).
- `grep -rn '\[#' src/` → **vazio** (nenhum valor arbitrário de cor).
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Conferir que não há cor hardcoded

```bash
grep -rn '\[#' src/   # deve retornar vazio
```
