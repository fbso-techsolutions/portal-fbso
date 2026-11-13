# ⚙️ TASK-0022 — Branch protection ligada aos status checks do CI

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0003-0004 — Pipeline CI/CD (lint/typecheck/build)](../../prj-produto/user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 1h |
| Depende de | [TASK-0021 — Setup Node + cache + steps](TASK-0021-setup-node-cache-steps.md) · [TASK-0003 — Branch protection](TASK-0003-branch-protection-codeowners.md) |

## 1. Objetivo

Vincular os checks do CI à proteção da `main`, tornando o "exit limpo" um requisito real de merge.

## 2. O que implementar/entregar

- Selecionar os checks do `ci.yml` (lint/typecheck/build) como **required status checks** na branch
  protection da `main` (config iniciada na TASK-0003).
- Validar que um PR sem check verde não permite merge.

## 3. Critério de saída (evidência)

- [x] Status checks obrigatórios aparecem na proteção da `main`.
- [x] PR com CI vermelho bloqueado (print/teste).

**Evidências** (2026-11-13)

```text
$ gh api repos/fbso-techsolutions/portal-fbso/branches/main/protection/required_status_checks
{"contexts":["lint → typecheck → build"],"strict":true}
```

- Nome do check = nome do **job** no `ci.yml` (sem prefixo de workflow), resolvido para o app
  `github-actions` (`app_id` 15368).
- PR descartável [#17](https://github.com/fbso-techsolutions/portal-fbso/pull/17) com erro de lint →
  CI **failure** + `mergeStateStatus: BLOCKED` (`mergeable: true`, `reviewDecision: REVIEW_REQUIRED`).
  Branch e PR removidos depois do teste.
- `strict: true` (branch atualizada antes do merge) e `allow_force_pushes: false` aplicados junto.
- `enforce_admins: false` — **decisão consciente**: as regras valem para todos, mas o admin mantém
  bypass enquanto não houver um segundo revisor ativo (ver §4).

## 4. Runbook — ligar/desligar o requisito

> Configuração de repositório (não versionada). Requer admin. `PUT /protection` **substitui o objeto
> inteiro** — campo omitido volta ao default, por isso o corpo repete todas as regras vigentes.

### 4.1 Ligar

```bash
cat > /tmp/protection.json <<'JSON'
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["lint → typecheck → build"]
  },
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": false,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 1,
    "require_last_push_approval": false
  },
  "restrictions": null,
  "required_linear_history": false,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_conversation_resolution": false
}
JSON

gh api -X PUT repos/fbso-techsolutions/portal-fbso/branches/main/protection \
  --input /tmp/protection.json
```

Conferir:

```bash
gh api repos/fbso-techsolutions/portal-fbso/branches/main/protection/required_status_checks
```

### 4.2 Desligar

Só o requisito de status check (mantém PR + aprovação):

```bash
gh api -X DELETE \
  repos/fbso-techsolutions/portal-fbso/branches/main/protection/required_status_checks
```

Desligar a proteção por completo (⚠️ volta a permitir push direto na `main`):

```bash
gh api -X DELETE repos/fbso-techsolutions/portal-fbso/branches/main/protection
```

### 4.3 Se o check ficar "Expected" para sempre

O `context` não casou com o nome real. Confira o nome publicado:

```bash
gh api repos/fbso-techsolutions/portal-fbso/commits/main/check-runs --jq '.check_runs[].name'
```

Se necessário, use a variante com prefixo do workflow (`"CI / lint → typecheck → build"`).
