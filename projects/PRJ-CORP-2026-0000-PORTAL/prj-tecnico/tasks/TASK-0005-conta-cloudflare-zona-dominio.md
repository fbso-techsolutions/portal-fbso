# ⚙️ TASK-0005 — Conta Cloudflare + zona `fbso.com.br`

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0002 — Conta Cloudflare + domínio](../enablers/ENABLER-0002-conta-cloudflare-dominio.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 2h |
| Depende de | — |

## 1. Objetivo

Deixar a conta Cloudflare ativa com o site (zona) `fbso.com.br` adicionado, pronto para receber os
assets estáticos do portal.

## 2. O que implementar/entregar

- Confirmar/ativar a conta Cloudflare da org (plano Free é suficiente para static assets).
- Adicionar o site `fbso.com.br` (zona DNS) na dashboard.
- Registrar o `account_id` da conta para uso no workflow.

## 3. Critério de saída (evidência)

- [x] Site `fbso.com.br` listado na dashboard Cloudflare (print).
- [x] `account_id` anotado para o secret `CLOUDFLARE_ACCOUNT_ID` (TASK-0004).
