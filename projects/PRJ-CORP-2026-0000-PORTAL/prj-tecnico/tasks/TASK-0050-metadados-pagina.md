# ⚙️ TASK-0050 — Metadados por página

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0005.0001-0022 — Metadados por página](../../prj-produto/user-stories/US-FEAT-0005.0001-0022-metadados-pagina.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 5 — SEO, a11y e go-live](../../prj-produto/sprints/sprint-0005-seo-a11y-golive.md) · 25/01–05/02 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | — |

## 1. Objetivo

Garantir `<title>`, meta description e Open Graph próprios em cada página pré-renderizada.

## 2. O que implementar/entregar

- Helper centralizado (`src/lib/seo.ts`) + metadados por rota; `lang="pt-BR"`.

## 3. Critério de saída (evidência)

- [x] Cada rota pré-renderizada tem title/description/og próprios.

**Evidências**

- `src/lib/seo.ts`: helper `seo()` (title + description + Open Graph) — fonte única.
- Refatoração: as 8 páginas (`Home`, `Sobre`, `Contato`, `Privacidade`, `Termos`, `TechServices`, `Solucoes`, `Produto`) passaram a usar `seo()`.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Adicionar metadados a uma página

Use `seo({ title, description })` em `src/lib/seo.ts`.
