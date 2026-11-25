# 🔧 ENABLER-0003 — Cloudflare Workers + API

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Categoria | Infraestrutura |
| Job Size | 3 |
| Habilita | FEATURE-0006.0002 (formulários — endpoint server-side) |
| Dono | Infra (Lourival Louro) |
| Status | ✅ Revisado (2026-11-25) |

## 1. Objetivo

Adicionar o Worker script (binding `ASSETS`) ao `wrangler.jsonc` para servir endpoints server-side
(APIs) junto dos assets estáticos — hoje o portal é assets-only (`404` em rota sem asset).

> 📌 Analytics (FEATURE-0006.0001) é **client-side** (`gtag.js`) e **não** exige Workers.
> Proxy 1ª parte do gtag / server-side tagging fica fora do escopo (evolução futura).

## 2. Critério de saída

- [ ] Worker script declarado no `wrangler.jsonc` (binding `ASSETS`).
- [ ] Endpoint de exemplo server-side no ar e respondendo (smoke).
- [ ] Deploy do Worker automatizado no CI (develop/release/main) sem regressão do estático.
