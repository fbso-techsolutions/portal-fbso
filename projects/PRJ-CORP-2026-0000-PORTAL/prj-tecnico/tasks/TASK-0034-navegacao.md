# ⚙️ TASK-0034 — Navegação

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0002.0001-0008 — Header + navegação](../../prj-produto/user-stories/US-FEAT-0002.0001-0008-header-navegacao.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 3 — Estrutura, navegação e institucional](../../prj-produto/sprints/sprint-0003-estrutura-navegacao-institucional.md) · 14/12–24/12 |
| Dono | Alfredo Bento |
| Esforço | 2h |
| Depende de | [TASK-0033](TASK-0033-header-topbar.md) |

## 1. Objetivo

Adicionar os links da navegação principal (Home, Sobre, TechServices, Soluções, Contato) ao header.

## 2. O que implementar/entregar

- Itens da nav; links para rotas/âncoras (placeholder para rotas que só nascem depois).

## 3. Critério de saída (evidência)

- [x] Nav renderiza os 5 itens; links apontam para as rotas/âncoras corretas.

**Evidências**

- `AppLayout.tsx`: nav desktop com os 5 itens (Home/Sobre/TechServices/Soluções/Contato).
- `site.ts`: `navItems` adicionado (conteúdo como dados).
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Alterar itens da navegação

Edite `navItems` em `src/content/site.ts`.
