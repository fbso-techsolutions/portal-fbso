# ⚙️ TASK-0011 — `index.html` com `lang="pt-BR"` + build verde

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0001 — Inicializar projeto Vite + TS + Tailwind + Router v7](../../prj-produto/user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 2h |
| Depende de | [TASK-0009 — Tailwind CSS v4](TASK-0009-tailwind-css-v4.md) · [TASK-0010 — React Router v7](TASK-0010-react-router-v7-prerender.md) |

## 1. Objetivo

Garantir o idioma e os metadados de base no HTML raiz, e validar que o build estático completo
funciona de ponta a ponta.

## 2. O que implementar/entregar

- Ajustar `index.html` raiz: `lang="pt-BR"`, `<meta charset>`, viewport, `<title>` e `<meta name="description">` base.
- Garantir `lang="pt-BR"` presente no HTML **pré-renderizado** de saída.
- Rodar `npm run build` completo e confirmar `dist/` íntegro (sem erro de TS/build).

## 3. Critério de saída (evidência)

- [ ] `npm run build` sai com exit 0.
- [ ] `lang="pt-BR"` presente no `dist/index.html` (grep).
- [ ] Título e meta description visíveis no HTML de saída.
