# ⚙️ TASK-0023 — `wrangler.jsonc` com `assets.directory = "./dist/client"`

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0003-0005 — Deploy Cloudflare (wrangler + static assets)](../../prj-produto/user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 3h |
| Depende de | [TASK-0019 — Build/prerender + smoke local](TASK-0019-build-prerender-smoke-local.md) |

## 1. Objetivo

Configurar o deploy como **Workers + Static Assets** servindo o `dist/client/` pré-renderizado
(HTML + assets; `dist/server/` é build-time e não é publicado).

## 2. O que implementar/entregar

- Instalar `wrangler` como dependência de dev.
- Criar `wrangler.jsonc` com `assets.directory = "./dist/client"` (e o mínimo necessário de config de
  Worker/compat_date, conforme o [DEPLOYMENT.md](../../../../docs/tecnico/arquitetura/DEPLOYMENT.md)).
- Confirmar que `wrangler deploy --dry-run` (ou `wrangler pages`/assets) valida a config localmente.

## 3. Critério de saída (evidência)

- [ ] `wrangler.jsonc` versionado com `assets.directory = "./dist/client"`.
- [ ] `wrangler deploy --dry-run` conclui sem erro.
