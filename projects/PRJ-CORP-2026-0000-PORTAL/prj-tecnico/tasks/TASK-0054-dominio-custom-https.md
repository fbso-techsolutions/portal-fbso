# ⚙️ TASK-0054 — Domínio custom + HTTPS

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0005.0003-0026 — Domínio custom + HTTPS](../../prj-produto/user-stories/US-FEAT-0005.0003-0026-dominio-custom-https.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 5 — SEO, a11y e go-live](../../prj-produto/sprints/sprint-0005-seo-a11y-golive.md) · 25/01–05/02 |
| Dono | Lourival Louro |
| Esforço | 3h |
| Depende de | — |

## 1. Objetivo

Configurar o domínio custom `fbso.com.br` + HTTPS na Cloudflare (NS já apontados via ENABLER-0002).

## 2. O que implementar/entregar

- Apontar NS no registro.br; domínio custom no Worker; HTTPS forçado.

## 3. Critério de saída (evidência)

- [x] Worker responde em `fbso.com.br`; HTTPS forçado.

**Evidências**

- `https://fbso.com.br` e `https://www.fbso.com.br` respondem `200` (HTTPS ativo).
- NS delegados (`ray`/`tess.ns.cloudflare.com`) + Custom Domain no Worker + SSL Full (Strict) — configurados (2026-11-13).
- Smoke: 8 rotas retornam `200` em `https://fbso.com.br`.

## 4. Runbook

### 4.1 Reproduzir a configuração (referência)

Ver [DEPLOYMENT.md §5](../../../../docs/tecnico/arquitetura/DEPLOYMENT.md) — delegação NS (registro.br) + Custom Domain (Workers) + HTTPS (Full Strict).
