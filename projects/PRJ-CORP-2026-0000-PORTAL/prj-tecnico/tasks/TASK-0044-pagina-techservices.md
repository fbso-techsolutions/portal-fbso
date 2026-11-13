# ⚙️ TASK-0044 — Página TechServices

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0003.0001-0017 — Página TechServices](../../prj-produto/user-stories/US-FEAT-0003.0001-0017-pagina-techservices.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 4 — TechServices e Portfólio SaaS](../../prj-produto/sprints/sprint-0004-techservices-portfolio-saas.md) · 11/01–22/01 |
| Dono | Alfredo Bento |
| Esforço | 4h |
| Depende de | — |

## 1. Objetivo

Criar a rota `/techservices` com as frentes da divisão (consultoria TI, engenharia, Cloud & DevOps, sustentação, IA em negócios).

## 2. O que implementar/entregar

- Página `/techservices` com `Section`/`Card`; textos de `src/content/`.

## 3. Critério de saída (evidência)

- [x] `/techservices` acessível pela nav e com as frentes da divisão.

**Evidências**

- `src/pages/TechServices.tsx` + `src/content/techservices.ts` (5 frentes) + rota `techservices`.
- `npm run build` → `Prerender (html): /techservices -> dist/client/techservices/index.html`.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅.

## 4. Runbook

### 4.1 Alterar as frentes

Edite `fronts` em `src/content/techservices.ts`.
