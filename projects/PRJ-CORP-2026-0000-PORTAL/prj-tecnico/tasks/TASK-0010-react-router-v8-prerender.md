# ⚙️ TASK-0010 — React Router v8 (framework mode, `prerender: true`)

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0001 — Inicializar projeto Vite + TS + Tailwind + Router v8](../../prj-produto/user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 4h |
| Depende de | [TASK-0008 — Scaffold Vite + React + TS](TASK-0008-scaffold-vite-react-ts.md) |

## 1. Objetivo

Configurar o **React Router v8 em framework mode** com `prerender: true`, para que o build gere
HTML estático por rota (pré-requisito do MVP estático e do SEO — B-REQ-07).

## 2. O que implementar/entregar

- Instalar `react-router` (v8) + `@react-router/dev` + `@react-router/node`.
- Configurar `react-router.config.ts` com `prerender: true`, `ssr: true` e `buildDirectory: "dist"`.
- Definir a estrutura de rotas em `src/app/` (`root.tsx` + `routes.ts`), com a Home em `src/pages/Home.tsx`.
- Confirmar que `npm run build` emite o HTML pré-renderizado em `dist/client/index.html`.

## 3. Critério de saída (evidência)

- [x] `dist/client/index.html` (rota `/`) pré-renderizado — conteúdo visível sem JS.
- [x] Sem dependência de servidor Node em produção (build estático; `dist/server/` usado só no build-time).
