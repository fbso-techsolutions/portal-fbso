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

**Evidências:** — a preencher na execução (output do `wrangler kv`).

## 4. Runbook

```bash
wrangler kv key put maintenance on    # entra em manutenção
wrangler kv key put maintenance off   # volta ao normal
```
