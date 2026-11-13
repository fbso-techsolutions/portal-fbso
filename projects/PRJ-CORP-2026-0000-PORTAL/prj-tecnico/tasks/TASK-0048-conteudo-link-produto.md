# ⚙️ TASK-0048 — Conteúdo/link por produto

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0004.0002-0021 — Conteúdo/link por produto](../../prj-produto/user-stories/US-FEAT-0004.0002-0021-conteudo-link-produto.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 4 — TechServices e Portfólio SaaS](../../prj-produto/sprints/sprint-0004-techservices-portfolio-saas.md) · 11/01–22/01 |
| Dono | Alfredo Bento |
| Esforço | 2h |
| Depende de | [TASK-0047](TASK-0047-rota-detalhe-produto.md) |

## 1. Objetivo

Exibir conteúdo (descritivo) por produto + link externo condicional (quando o site do SaaS existir).

## 2. O que implementar/entregar

- Detalhe do produto com descritivo; `link` externo só quando presente no catálogo.

## 3. Critério de saída (evidência)

- [x] Página do produto mostra descritivo; link externo condicional.

**Evidências**

- `saas-catalog.ts`: campo `description` (longa) adicionado aos 4 produtos.
- `Produto.tsx`: mostra `description` + link externo **condicional** (`product.link` — omitido quando vazio).
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Habilitar o link externo de um produto

Preencha `link` no item correspondente em `src/content/saas-catalog.ts` — o botão "Acessar o produto" aparece automaticamente.
