# ⚙️ TASK-0061 — Exceções de rota + runbook do toggle

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0005 — Modo manutenção (Worker + KV)](../enablers/ENABLER-0005-modo-manutencao-worker-kv.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Lourival Louro |
| Esforço | 2h |
| Depende de | [TASK-0060 — Worker catch-all (503)](TASK-0060-worker-catchall-maintenance-503.md) |

## 1. Objetivo

Garantir que rotas críticas **não** caiam em manutenção e documentar o toggle com acesso restrito.

## 2. O que implementar/entregar

- Exceções de rota: `/health`, `robots.txt`, `/privacidade` servem normalmente mesmo em `on`.
- Documentar o toggle (comando `wrangler kv key put maintenance on/off` e/ou API).
- Acesso restrito: API token Cloudflare com **escopo mínimo** para o toggle.

## 3. Critério de saída (evidência)

- [x] `/health` e `robots.txt` respondem 200 mesmo com `maintenance = on`.
- [x] Runbook do toggle documentado (comando/API + quem pode).

**Evidências:**
- `src/worker/index.ts` → exceções: `/health` e `/api/health` (health check, 200 sempre) + `/robots.txt` e `/privacidade` (servem via assets mesmo em `on`).
- Testes unitários (13/13): `/health`, `/api/health`, `/robots.txt`, `/privacidade` → 200 com `maintenance = on`; rotas públicas → 503.
- Runbook do toggle documentado abaixo (comando `--remote` + escopo mínimo de token).
- Curl em produção: a confirmar após o deploy.

## 4. Runbook

```bash
# Ligar / desligar o modo manutenção (⚠️ --remote grava no namespace de produção):
wrangler kv key put maintenance on  --binding KV --remote
wrangler kv key put maintenance off --binding KV --remote
```

**Acesso restrito (escopo mínimo de token):** criar um API token Cloudflare específico para o
toggle (não reusar o token de deploy):
- Permissions: `Account` → `Workers KV Storage` → `Edit`.
- Resources: `Include` → a conta da org + (se possível) o namespace `MAINTENANCE` (`6387a3e…`).
- Uso: `CLOUDFLARE_API_TOKEN=<token> wrangler kv key put maintenance on --binding KV --remote`.

> 🔑 Quem pode: Infra/on-call (Lourival Louro) — ver [ENABLER-0005 §4](../enablers/ENABLER-0005-modo-manutencao-worker-kv.md).
