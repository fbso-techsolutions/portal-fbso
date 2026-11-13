# ⚙️ TASK-0037 — Hero institucional

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0002.0002-0011 — Hero institucional](../../prj-produto/user-stories/US-FEAT-0002.0002-0011-hero-institucional.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 3 — Estrutura, navegação e institucional](../../prj-produto/sprints/sprint-0003-estrutura-navegacao-institucional.md) · 14/12–24/12 |
| Dono | Alfredo Bento |
| Esforço | 5h |
| Depende de | [TASK-0034](TASK-0034-navegacao.md) · [TASK-0035](TASK-0035-footer-institucional.md) |

## 1. Objetivo

Criar o hero institucional da Home (eyebrow + título + posicionamento + CTAs), substituindo o "hello world".

## 2. O que implementar/entregar

- Hero com `Section`/`Button`, ilustração geométrica placeholder; textos de `src/content/`.

## 3. Critério de saída (evidência)

- [x] Hero renderiza no topo da Home com CTAs; textos vêm de `src/content/`.

**Evidências**

- `Home.tsx`: hero (eyebrow + título + copy + CTAs) substituindo o "hello world".
- `home.ts`: estrutura `hero` (eyebrow/title/highlight/copy/CTAs/note) — conteúdo como dados.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Alterar o hero

Edite `hero` em `src/content/home.ts`.
