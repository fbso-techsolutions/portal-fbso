# ⚙️ TASK-0011 — Meta/SEO base no pré-render (title/description/Open Graph)

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0001 — Inicializar projeto Vite + TS + Tailwind + Router v8](../../prj-produto/user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 2h |
| Depende de | [TASK-0009 — Tailwind CSS v4](TASK-0009-tailwind-css-v4.md) · [TASK-0010 — React Router v8](TASK-0010-react-router-v8-prerender.md) |

## 1. Objetivo

Garantir os metadados de SEO (título, description, Open Graph) no HTML **pré-renderizado** e validar
o build estático de ponta a ponta. Com o framework mode do React Router, o `index.html` foi
substituído pelo `root.tsx` + `meta` export das rotas.

## 2. O que implementar/entregar

- `lang="pt-BR"`, `<meta charset>` e viewport já no `src/app/root.tsx` (mantidos).
- Adicionar `meta` export na rota Home (`src/pages/Home.tsx`): `title`, `description` e Open Graph
  básico (`og:title`, `og:description`, `og:type`).
- Rodar `npm run build` e confirmar o HTML pré-renderizado íntegro.

## 3. Critério de saída (evidência)

- [ ] `npm run build` sai com exit 0.
- [ ] `dist/client/index.html` contém `<title>` e `<meta name="description">` (grep).
- [ ] `lang="pt-BR"` presente no `dist/client/index.html`.
- [ ] Open Graph (`og:title` / `og:description`) presente no HTML de saída.
