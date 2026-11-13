# ⚙️ TASK-0004 — Secrets do Cloudflare no GitHub (Environment)

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0001 — Repositório e ambiente GitHub](../enablers/ENABLER-0001-repositorio-ambiente-github.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 1h |
| Depende de | [TASK-0007 — API token escopo mínimo](TASK-0007-api-token-escopo-minimo.md) |

## 1. Objetivo

Disponibilizar as credenciais de deploy do Cloudflare ao GitHub Actions **sem expô-las no código**.

## 2. O que implementar/entregar

- Criar os secrets de repositório/Environment:
  - `CLOUDFLARE_API_TOKEN` (valor do token da TASK-0007)
  - `CLOUDFLARE_ACCOUNT_ID`
- Usar **Environment** (ex.: `production`) em vez de variáveis soltas, para controle de proteção/approvals.
- **Não** versionar nenhum valor — apenas referenciar por `${{ secrets.CLOUDFLARE_API_TOKEN }}` no workflow (TASK-0024).

## 3. Critério de saída (evidência)

- [x] Secrets visíveis em Settings → Environments (print, valores mascarados).
- [x] Nenhum valor de secret presente em arquivo do repo (`grep` limpo).
