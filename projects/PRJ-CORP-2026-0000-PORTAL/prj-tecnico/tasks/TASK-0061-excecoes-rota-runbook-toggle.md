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

- [ ] `/health` e `robots.txt` respondem 200 mesmo com `maintenance = on`.
- [ ] Runbook do toggle documentado (comando/API + quem pode).

**Evidências:** — a preencher na execução (curl das exceções + doc).

## 4. Runbook

```bash
# ligar / desligar (escopo mínimo de token)
wrangler kv key put maintenance on
wrangler kv key put maintenance off
```
