# ⚙️ TASK-0049 — QA smoke do portal

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0004.0002-0021 — Conteúdo/link por produto](../../prj-produto/user-stories/US-FEAT-0004.0002-0021-conteudo-link-produto.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 4 — TechServices e Portfólio SaaS](../../prj-produto/sprints/sprint-0004-techservices-portfolio-saas.md) · 11/01–22/01 |
| Dono | Patricia Varra |
| Esforço | 2h |
| Depende de | [TASK-0044](TASK-0044-pagina-techservices.md) · [TASK-0048](TASK-0048-conteudo-link-produto.md) |

## 1. Objetivo

Smoke test do portal: TechServices e páginas SaaS acessíveis, catálogo vindo dos dados, detalhe por produto funcional.

## 2. O que implementar/entregar

- Verificar `/techservices`, `/solucoes`, `/solucoes/:slug`; catálogo dos dados; links.

## 3. Critério de saída (evidência)

- [x] Rotas acessíveis; catálogo/detalhe corretos; checklist registrado.

**Evidências**

- `npm run build` → **11 rotas prerender** (incl. `/techservices`, `/solucoes`, `/solucoes/:slug` × 4).
- Smoke: header/footer + conteúdo presente em todas as páginas (grep no `dist/client/*.html`).
- Catálogo vem de `saas-catalog.ts` (fonte única); detalhe por produto com link condicional.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅.

## 4. Runbook

### 4.1 Reexecutar o smoke

```bash
npm run build && grep -rli 'TechServices\|Materiae' dist/client/*/index.html
```
