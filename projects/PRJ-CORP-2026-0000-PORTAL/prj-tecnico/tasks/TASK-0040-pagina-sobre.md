# ⚙️ TASK-0040 — Página Sobre

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0002.0003-0014 — Página Sobre](../../prj-produto/user-stories/US-FEAT-0002.0003-0014-pagina-sobre.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 3 — Estrutura, navegação e institucional](../../prj-produto/sprints/sprint-0003-estrutura-navegacao-institucional.md) · 14/12–24/12 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0034](TASK-0034-navegacao.md) · [TASK-0035](TASK-0035-footer-institucional.md) |

## 1. Objetivo

Criar a rota `/sobre` com posicionamento institucional (quem somos, missão, valores).

## 2. O que implementar/entregar

- Página `/sobre` com `Section`; textos de `src/content/`; registrada nas rotas.

## 3. Critério de saída (evidência)

- [x] `/sobre` acessível pela nav e com conteúdo institucional.

**Evidências**

- `src/pages/Sobre.tsx` + `src/content/sobre.ts` (quem somos, missão, valores) + rota `sobre` em `routes.ts`.
- `npm run build` → `Prerender (html): /sobre -> dist/client/sobre/index.html`.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅.

## 4. Runbook

### 4.1 Alterar o conteúdo da página

Edite `sobreContent` em `src/content/sobre.ts`.
