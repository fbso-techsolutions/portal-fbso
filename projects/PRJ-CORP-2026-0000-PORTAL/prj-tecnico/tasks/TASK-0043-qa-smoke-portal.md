# ⚙️ TASK-0043 — QA smoke do portal

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0002.0001-0010 — Menu responsivo](../../prj-produto/user-stories/US-FEAT-0002.0001-0010-menu-responsivo.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 3 — Estrutura, navegação e institucional](../../prj-produto/sprints/sprint-0003-estrutura-navegacao-institucional.md) · 14/12–24/12 |
| Dono | Patricia Varra |
| Esforço | 3h |
| Depende de | [TASK-0036](TASK-0036-menu-mobile.md) · [TASK-0042](TASK-0042-paginas-legais.md) |

## 1. Objetivo

Smoke test do portal: navegação e páginas institucionais acessíveis e legíveis em mobile/desktop.

## 2. O que implementar/entregar

- Verificar header/footer/menu em todas as rotas; conteúdo das páginas; responsividade básica.

## 3. Critério de saída (evidência)

- [x] Todas as rotas navegáveis; layout sem quebra em mobile/desktop; checklist registrado.

**Evidências**

- `npm run build` → 5 rotas prerender: `/`, `/sobre`, `/contato`, `/privacidade`, `/termos`.
- Smoke: marca (FBSO) + topbar presentes em **todas** as 5 páginas (grep no `dist/client/*.html`).
- Header/footer/menu via `AppLayout` em todas as rotas; menu mobile com `aria`.
- `npm run lint` ✅ · `npm run format:check` ✅ · `npx tsc -b` ✅.

## 4. Runbook

### 4.1 Reexecutar o smoke

```bash
npm run build && grep -rli 'FBSO' dist/client/*/index.html dist/client/index.html
```
