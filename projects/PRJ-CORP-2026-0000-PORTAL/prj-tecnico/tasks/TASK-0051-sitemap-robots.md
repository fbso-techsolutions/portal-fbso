# ⚙️ TASK-0051 — `sitemap.xml` + `robots.txt`

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0005.0001-0023 — sitemap + robots](../../prj-produto/user-stories/US-FEAT-0005.0001-0023-sitemap-robots.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 5 — SEO, a11y e go-live](../../prj-produto/sprints/sprint-0005-seo-a11y-golive.md) · 25/01–05/02 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0050](TASK-0050-metadados-pagina.md) |

## 1. Objetivo

Gerar `sitemap.xml` e `robots.txt` no build, listando as rotas públicas.

## 2. O que implementar/entregar

- Geração no build (não hardcoded); `robots.txt` aponta para o sitemap.

## 3. Critério de saída (evidência)

- [x] `/sitemap.xml` e `/robots.txt` servidos; sitemap lista as rotas.

**Evidências**

- `public/robots.txt` (aponta para `/sitemap.xml`).
- `react-router.config.ts`: hook `buildEnd` gera `sitemap.xml` no build (11 URLs: 7 estáticas + 4 produtos, via `saasCatalog`).
- `npm run build` → `dist/client/sitemap.xml` (722 bytes) e `dist/client/robots.txt`.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅.

## 4. Runbook

### 4.1 Regenerar o sitemap

O `sitemap.xml` é gerado a cada `npm run build`; novas rotas entram automaticamente (o `buildEnd` lê o catálogo).
