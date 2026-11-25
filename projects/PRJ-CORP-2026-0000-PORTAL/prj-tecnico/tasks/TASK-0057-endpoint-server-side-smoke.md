# ⚙️ TASK-0057 — Endpoint server-side de exemplo (smoke)

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0003 — Cloudflare Workers + API](../enablers/ENABLER-0003-cloudflare-workers-api.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Lourival Louro |
| Esforço | 3h |
| Depende de | [TASK-0056 — Worker script + binding ASSETS](TASK-0056-worker-script-binding-assets.md) |

## 1. Objetivo

Provar que o Worker serve **endpoints server-side** junto dos assets estáticos (base para o formulário
de leads da S7).

## 2. O que implementar/entregar

- Endpoint de exemplo (ex.: `GET /api/health`) retornando `{ "status": "ok" }` (JSON, 200).
- Roteamento no Worker: rotas `/api/*` → handler; demais → assets (pass-through).

## 3. Critério de saída (evidência)

- [ ] `GET /api/health` responde `200` + JSON no deploy.
- [ ] Rotas estáticas continuam servindo normalmente.

**Evidências:** — a preencher na execução (curl + deploy URL).
