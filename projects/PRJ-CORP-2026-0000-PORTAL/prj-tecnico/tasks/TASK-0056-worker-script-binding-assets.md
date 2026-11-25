# ⚙️ TASK-0056 — Worker script + binding `ASSETS` no `wrangler.jsonc`

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0003 — Cloudflare Workers + API](../enablers/ENABLER-0003-cloudflare-workers-api.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Lourival Louro |
| Esforço | 3h |
| Depende de | — |

## 1. Objetivo

Adicionar o **Worker script** (com binding `ASSETS`) ao `wrangler.jsonc`, deixando de ser assets-only —
hoje uma rota sem asset devolve `404` (limitação registrada na Sprint 1).

## 2. O que implementar/entregar

- Criar o script do Worker (ex.: `src/worker/index.ts`) com um `fetch` handler mínimo (pass-through).
- Declarar no `wrangler.jsonc`: `main` (Worker) + `assets` (binding `ASSETS` + `assets.directory = "./dist/client"`).
- Manter `compatibility_date` e o deploy de assets sem regressão.

## 3. Critério de saída (evidência)

- [x] `wrangler.jsonc` com `main` + binding `ASSETS` versionados.
- [x] `wrangler deploy --dry-run` conclui sem erro (assets + Worker).
- [x] Assets estáticos continuam servindo (sem `404` nas rotas existentes).

**Evidências:**
- `wrangler.jsonc` → `main: "src/worker/index.ts"` + `assets.binding: "ASSETS"` + `run_worker_first: true` (PR #58).
- `src/worker/index.ts` criado — handler mínimo pass-through para `env.ASSETS.fetch(request)`.
- `npx wrangler deploy --dry-run` → OK: 45 arquivos lidos do `dist/client/`; binding `env.ASSETS (Assets)` listado.
- Gate local OK: `build` + `lint` + `format:check` + `typecheck` + `test` (4/4).
- Serving em produção (sem 404 nas rotas): a confirmar no deploy do CI (TASK-0058).

## 4. Runbook

```bash
npm run build && npx wrangler deploy --dry-run   # valida assets + Worker
```
