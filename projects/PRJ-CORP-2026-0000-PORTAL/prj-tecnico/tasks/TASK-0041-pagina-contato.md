# ⚙️ TASK-0041 — Página Contato

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0002.0004-0015 — Página Contato](../../prj-produto/user-stories/US-FEAT-0002.0004-0015-pagina-contato.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 3 — Estrutura, navegação e institucional](../../prj-produto/sprints/sprint-0003-estrutura-navegacao-institucional.md) · 14/12–24/12 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0034](TASK-0034-navegacao.md) · [TASK-0035](TASK-0035-footer-institucional.md) |

## 1. Objetivo

Criar a rota `/contato` com e-mail e canais comerciais (links), sem formulário (Release 2).

## 2. O que implementar/entregar

- Página `/contato` com `Section` + `Button` (mailto); canais de `src/content/`.

## 3. Critério de saída (evidência)

- [x] `/contato` acessível pela nav; lista canais sem backend.

**Evidências**

- `src/pages/Contato.tsx` + `src/content/contato.ts` (canais: e-mail) + rota `contato`.
- `npm run build` → `Prerender (html): /contato -> dist/client/contato/index.html`.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅.

## 4. Runbook

### 4.1 Alterar canais

Edite `channels` em `src/content/contato.ts`.
