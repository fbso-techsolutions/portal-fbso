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

- [ ] KV namespace + binding versionados no `wrangler.jsonc`.
- [ ] `wrangler kv key put maintenance off` cria/atualiza a chave com sucesso.

**Evidências:**
- `wrangler.jsonc` → `kv_namespaces: [{ "binding": "KV", "id": "<placeholder>" }]` versionado (id a substituir).
- `npx wrangler deploy --dry-run` → OK: binding `env.KV (KV Namespace)` + `env.ASSETS (Assets)` listados.
- ⚠️ **Bloqueado:** criar o namespace e gravar a chave exigem credenciais da org Cloudflare
  (`CLOUDFLARE_API_TOKEN`/`CLOUDFLARE_ACCOUNT_ID` — em GitHub Secrets, não disponíveis neste ambiente).
  O `wrangler` local está logado numa conta pessoal com token somente-leitura.

## 4. Runbook

```bash
# Provisionamento (uma vez — credenciais da org Cloudflare). Preferir KV Instant:
npx wrangler kv namespace create MAINTENANCE --experimental-mode instant --binding KV --update-config
# Se o modo instant não estiver habilitado na conta (private beta), usar KV clássico:
npx wrangler kv namespace create MAINTENANCE --binding KV --update-config

# Toggle (recorrente — sem deploy):
wrangler kv key put maintenance on    # entra em manutenção
wrangler kv key put maintenance off   # volta ao normal
```
