# ✨ FEATURE-0001.0003 — Pipeline CI/CD + deploy Cloudflare

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0001 — Fundação e Engenharia](../epicos/EPIC-0001-fundacao-engenharia.md) |
| B-REQ dona | B-REQ-07 |
| Prioridade | Onda 1-Must (MVP) |
| 🔒 Travada por | — (livre) |
| Status | ✅ Revisado (2026-11-11) |

## 1. Objetivo de negócio

Entrega contínua: cada push na `main` valida e publica o portal.

## 2. Escopo

### Entra
- Workflow GitHub Actions (lint → typecheck → build → deploy).
- `wrangler.jsonc` com `assets.directory = "./dist"` e deploy via `wrangler`.
- Secrets `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID`.

### Fora
- Configuração do domínio final `fbso.com.br` (FEATURE-0005.0003).

## 5. User stories desta feature

| ID | História |
|---|---|
| [US-FEAT-0001.0003-0004](../user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) | Pipeline CI/CD (lint/typecheck/build) |
| [US-FEAT-0001.0003-0005](../user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) | Deploy Cloudflare (wrangler + static assets) no pipeline |

## 7. Critérios de aceite (DoD)

- [ ] Push na `main` publica o portal em preview/URL da Cloudflare sem passo manual.
