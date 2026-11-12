# ⚙️ TASK-0009 — Tailwind CSS v4 + estilos base

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0001 — Inicializar projeto Vite + TS + Tailwind + Router v7](../../prj-produto/user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0008 — Scaffold Vite + React + TS](TASK-0008-scaffold-vite-react-ts.md) |

## 1. Objetivo

Habilitar o **Tailwind CSS v4** via plugin Vite, com a entrada de estilos base, para que as classes
utilitárias funcionem no build estático.

## 2. O que implementar/entregar

- Instalar `tailwindcss` + `@tailwindcss/vite` (v4 — sem `tailwind.config.js` obrigatório; usar o
  plugin no `vite.config.ts`).
- Criar o CSS de entrada (`src/styles/index.css` ou `app.css`) com `@import "tailwindcss";`.
- Importar o CSS na raiz do app.
- Validar uma classe utilitária simples num componente (ex.: fundo/centralização) para provar o pipeline de estilo.

## 3. Critério de saída (evidência)

- [ ] Classes Tailwind aplicam no `dev` e no `build`.
- [ ] Nenhum `tailwind.config.js`/`postcss.config.js` desnecessário (v4 usa plugin Vite) — a menos
  que haja decisão contrária registrada.
