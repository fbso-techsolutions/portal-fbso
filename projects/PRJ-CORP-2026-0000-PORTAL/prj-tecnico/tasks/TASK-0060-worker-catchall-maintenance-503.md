# ⚙️ TASK-0060 — Worker catch-all: flag `maintenance` → 503 página

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0005 — Modo manutenção (Worker + KV)](../enablers/ENABLER-0005-modo-manutencao-worker-kv.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Lourival Louro |
| Esforço | 3h |
| Depende de | [TASK-0059 — KV namespace + binding](TASK-0059-kv-namespace-binding-maintenance.md) |

## 1. Objetivo

Fazer o Worker devolver a **página de manutenção** quando o flag `maintenance = on`, e servir os
assets normalmente quando `off`.

## 2. O que implementar/entregar

- No Worker, ler `env.KV.get('maintenance')` a cada request.
- `on` → responder HTML de manutenção com **HTTP 503 + `Retry-After`**.
- `off` → pass-through dos assets (sem regressão).
- Página HTML de manutenção com branding + mensagem (uso técnico vs comercial).

## 3. Critério de saída (evidência)

- [ ] `maintenance = on` → todas as rotas públicas retornam 503 + página.
- [ ] `maintenance = off` → portal serve normalmente.

**Evidências:** — a preencher na execução (curl com flag on/off).
