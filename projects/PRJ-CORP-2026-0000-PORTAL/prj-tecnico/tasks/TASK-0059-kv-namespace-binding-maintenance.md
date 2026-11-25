# ⚙️ TASK-0059 — KV namespace + binding (flag `maintenance`)

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0005 — Modo manutenção (Worker + KV)](../enablers/ENABLER-0005-modo-manutencao-worker-kv.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Lourival Louro |
| Esforço | 2h |
| Depende de | [TASK-0056 — Worker script + binding ASSETS](TASK-0056-worker-script-binding-assets.md) |

## 1. Objetivo

Criar o **KV namespace** que guarda o flag `maintenance` (on/off), preferindo **KV Instant** (propagação
proativa) para ativação quase imediata.

## 2. O que implementar/entregar

- Criar KV namespace (preferir modo *instant*) + binding no `wrangler.jsonc`.
- Definir a chave `maintenance` com valores `on`/`off`.

## 3. Critério de saída (evidência)

- [x] KV namespace + binding versionados no `wrangler.jsonc`.
- [x] `wrangler kv key put maintenance off` cria/atualiza a chave com sucesso.

**Evidências:**
- KV namespace `MAINTENANCE` criado (id `6387a3e92abf446da2c070b6ee68568d`) — **KV clássico** (instant não habilitado na conta: code 10062).
- `wrangler.jsonc` → `kv_namespaces: [{ "binding": "KV", "id": "6387a3e92abf446da2c070b6ee68568d" }]`.
- `npx wrangler kv key put maintenance off --binding KV --remote` → OK; `key get --remote` retorna `off`.
- `npx wrangler deploy --dry-run` → OK: `env.KV (6387a3e…8668d)` + `env.ASSETS` listados.

## 4. Runbook

```bash
# Provisionamento (já executado em 2026-11-25 — não repetir):
npx wrangler kv namespace create MAINTENANCE --binding KV

# Toggle (recorrente — sem deploy). ⚠️ --remote grava no namespace de produção
# (sem --remote, o `wrangler kv` escreve só na instância local do `wrangler dev`):
wrangler kv key put maintenance on  --binding KV --remote   # entra em manutenção
wrangler kv key put maintenance off --binding KV --remote   # volta ao normal
```
