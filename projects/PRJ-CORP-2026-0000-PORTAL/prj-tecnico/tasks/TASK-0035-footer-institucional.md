# ⚙️ TASK-0035 — Footer institucional

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0002.0001-0009 — Footer institucional](../../prj-produto/user-stories/US-FEAT-0002.0001-0009-footer-institucional.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 3 — Estrutura, navegação e institucional](../../prj-produto/sprints/sprint-0003-estrutura-navegacao-institucional.md) · 14/12–24/12 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | — |

## 1. Objetivo

Criar o footer institucional (nome completo, domínio, links institucionais/legais) no `AppLayout`.

## 2. O que implementar/entregar

- Footer com marca, links institucionais (Empresa/TechServices/Soluções) e legais (privacidade/termos) + copyright dinâmico.

## 3. Critério de saída (evidência)

- [x] Footer presente em todas as rotas; copyright com ano dinâmico; links corretos.

**Evidências**

- `AppLayout.tsx`: footer institucional (marca + links institucionais/legais + e-mail + copyright com ano dinâmico).
- `site.ts`: `contactEmail`, `footerInstitutional`, `footerLegal` adicionados (conteúdo como dados).
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Alterar links do footer

Edite `footerInstitutional`/`footerLegal` em `src/content/site.ts`.
