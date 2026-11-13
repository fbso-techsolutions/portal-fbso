# 🔧 ENABLER-0001 — Repositório e ambiente GitHub

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Categoria | Infraestrutura |
| Job Size | 2 |
| Habilita | FEATURE-0001.0001 (scaffold) · FEATURE-0001.0003 (CI/CD) |
| Dono | Lourival Louro + Francisco Oliveira |
| Status | ✅ Revisado (2026-11-11) |

## 1. Objetivo

Criar o repo `fbso-techsolutions/portal-fbso`, espelhar localmente, e preparar o ambiente
(branch protection na `main`, secrets do Cloudflare no GitHub).

## 2. Critério de saída

- [x] Repo criado na org + espelho local sincronizado.
- [x] `main` protegida (PR obrigatório).
- [x] Secrets `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` configurados.
