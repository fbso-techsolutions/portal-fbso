# ⚙️ TASK-0024 — Step `wrangler deploy` no workflow usando secrets

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0003-0005 — Deploy Cloudflare (wrangler + static assets)](../../prj-produto/user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 3h |
| Depende de | [TASK-0023 — wrangler.jsonc](TASK-0023-wrangler-jsonc-static-assets.md) · [TASK-0021 — Setup Node + cache](TASK-0021-setup-node-cache-steps.md) · [TASK-0004 — Secrets Cloudflare](TASK-0004-secrets-cloudflare-github.md) |

## 1. Objetivo

Automatizar a publicação do `dist/` na Cloudflare no mesmo pipeline, sem nenhuma credencial
versionada no repositório.

## 2. O que implementar/entregar

- Adicionar job/steps de **deploy** ao workflow (após o build), rodando `npx wrangler deploy`.
- Referenciar as credenciais via `${{ secrets.CLOUDFLARE_API_TOKEN }}` e `${{ secrets.CLOUDFLARE_ACCOUNT_ID }}`.
- Garantir que o deploy só roda em `push` na `main` (não em PRs de fora), para não publicar branches.
- Confirmar que não há token/account id hardcoded no código (grep limpo).

## 3. Critério de saída (evidência)

- [ ] Deploy automático ao merge na `main`.
- [ ] Nenhum secret no repo (grep `CLOUDFLARE`/token vazio).
