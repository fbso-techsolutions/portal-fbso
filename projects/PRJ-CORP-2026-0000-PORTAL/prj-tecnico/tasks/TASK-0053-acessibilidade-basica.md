# ⚙️ TASK-0053 — Acessibilidade básica

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0005.0002-0025 — Acessibilidade básica](../../prj-produto/user-stories/US-FEAT-0005.0002-0025-acessibilidade-basica.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 5 — SEO, a11y e go-live](../../prj-produto/sprints/sprint-0005-seo-a11y-golive.md) · 25/01–05/02 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | — |

## 1. Objetivo

Aplicar acessibilidade básica: semântica, contraste, foco visível e `alt` em imagens.

## 2. O que implementar/entregar

- Revisão de semântica/foco/contraste; `alt` nas imagens.

## 3. Critério de saída (evidência)

- [x] Navegação por teclado; contraste ≥ WCAG AA; `alt` presente.

**Evidências**

- `AppLayout`: **skip link** ("Pular para o conteúdo") + `id="conteudo"` no `<main>`.
- Semântica já presente (header/nav/main/footer/h1/h2) · foco visível (`Button` com `focus-visible`) · menu mobile com `aria-expanded`/`aria-controls` · `lang="pt-BR"`.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Verificar acessibilidade

Navegue por teclado (Tab) e confirme o skip link + foco visível; cheque contraste com o token `muted` sobre `white`/`navy`.
