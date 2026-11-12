# ⚙️ TASK-0017 — Rota `/` (Home "hello world") + layout mínimo

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0003 — Estruturar pastas + Home "hello world"](../../prj-produto/user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0016 — Estrutura de pastas src/](TASK-0016-estrutura-pastas-src.md) |

## 1. Objetivo

Renderizar a Home "hello world" na rota raiz `/` usando a estrutura de páginas e um layout mínimo,
provando o funcionamento do roteamento + prerender.

## 2. O que implementar/entregar

- Criar o root layout (`src/app/root.tsx` ou equivalente) com `<Outlet />`.
- Criar a página Home em `src/pages/` e registrá-la na rota `/` (`src/app/routes.ts`).
- Conteúdo mínimo "hello world" (título + texto) servido a partir de `src/content/` (ver TASK-0018).
- Nada de conteúdo institucional real (isso é FEATURE-0002.0002, S4).

## 3. Critério de saída (evidência)

- [ ] Acessar `/` renderiza a Home sem erro.
- [ ] Layout mínimo carrega (estrutura de página presente no HTML pré-renderizado).
