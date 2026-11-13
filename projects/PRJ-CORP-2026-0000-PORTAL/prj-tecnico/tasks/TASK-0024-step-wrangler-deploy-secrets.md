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

Automatizar a publicação do `dist/client/` na Cloudflare no mesmo pipeline, sem nenhuma credencial
versionada no repositório.

## 2. O que implementar/entregar

- Adicionar job/steps de **deploy** ao workflow (após o build), rodando `npx wrangler deploy`.
- Referenciar as credenciais via `${{ secrets.CLOUDFLARE_API_TOKEN }}` e `${{ secrets.CLOUDFLARE_ACCOUNT_ID }}`.
- Garantir que o deploy só roda em `push` na `main` (não em PRs de fora), para não publicar branches.
- Confirmar que não há token/account id hardcoded no código (grep limpo).

## 3. Critério de saída (evidência)

- [x] Deploy automático ao merge na `main`.
- [x] Nenhum secret no repo (grep `CLOUDFLARE`/token vazio).

**Evidências**

- `.github/workflows/deploy.yml` versionado: gatilho `push` na `main` (+ `workflow_dispatch`) →
  `npm ci` → `npm run build` → `npx wrangler deploy`, com `CLOUDFLARE_API_TOKEN` /
  `CLOUDFLARE_ACCOUNT_ID` lidos de `secrets.*` (nada versionado).
- **Grep de segredos limpo** — nenhum valor real (token `cfat_…`/account id) no repo; só referências
  a `secrets.CLOUDFLARE_*` no próprio workflow:
  ```text
  .github/workflows/deploy.yml:43  CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
  .github/workflows/deploy.yml:44  CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
  ```
- A execução **real** dispara no merge desta PR (push na `main`) — o smoke do deploy publicado é a
  TASK-0025.

## 4. Runbook

### 4.1 Redeploy manual (sem novo commit)

```bash
gh workflow run deploy.yml --ref main
```

### 4.2 Acompanhar o deploy

```bash
gh run list --workflow=deploy.yml
gh run watch <id>          # segue até concluir (exit 0 = publicado)
```

### 4.3 Não expor credenciais

- Tokens vivem **só** em GitHub Secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`).
- Nunca commitar valor de token/account id; usar `secrets.CLOUDFLARE_*` no workflow.

