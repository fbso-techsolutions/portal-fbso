# Configuração de repositório — branch protection (`portal-fbso`)

> 📌 Valores **específicos** do `portal-fbso`. O padrão genérico vive em
> [`platform-standards/standards/engineering/github-repo-settings-branch-protection.md`](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/engineering/github-repo-settings-branch-protection.md).
> Este doc **aponta** para lá (princípio "aponta, não copia") e registra apenas os valores concretos.

## 1. Valores concretos

| Item | Valor |
|---|---|
| Repo | `fbso-techsolutions/portal-fbso` |
| Code owner | `@bolismar69` |
| Time de homologação | `@fbso-techsolutions/change-approvers` |
| Status check (`develop`) | `lint → typecheck → test` |
| Secrets | `CLOUDFLARE_API_TOKEN` · `CLOUDFLARE_ACCOUNT_ID` (deploy) · `GH_PAT` (PAT do back-merge) |

## 2. Estado atual (aplicado)

| Branch | Proteção |
|---|---|
| `develop` | classic: PR + status check `lint → typecheck → test` (strict) · `enforce_admins: false` |
| `release/*` | ruleset `release/* — PR obrigatório`: PR + sem force-push |
| `main` | classic: PR + 1 approval + code owner review · `enforce_admins: true` |

- **Merge settings**: só *merge commit* (squash/rebase desabilitados) · `delete_branch_on_merge: true`.
- **CODEOWNERS**: `* @bolismar69 @fbso-techsolutions/change-approvers`.
- **Environments** `dev`/`hml`/`prd`: **removidos** (não eram usados — o `deploy.yml` não referencia `environment:`).

## 3. Notas específicas do piloto

- **Back-merge** (`deploy.yml`) usa **PAT (`GH_PAT`)** para o `git push origin develop` — o `GITHUB_TOKEN`
  não bypassa a proteção (limitação do GitHub; ver o padrão genérico, §6).
- A derivação de versão do `deploy.yml` depende do **merge commit** (por isso squash/rebase foram
  desabilitados).

## 4. Como reproduzir

Os comandos `gh api` estão no padrão genérico (link acima). Resumo das ações:

1. Proteger `develop` (classic) e `main` (classic) e criar o ruleset de `release/*`.
2. Merge settings: `allow_merge_commit=true`, `allow_squash_merge=false`, `allow_rebase_merge=false`,
   `delete_branch_on_merge=true`.
3. `CODEOWNERS` + time `change-approvers`.
