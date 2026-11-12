# 🛡️ Segurança — FBSO Corporate Portal

| Campo | Valor |
|---|---|
| Âmbito | Premissas de segurança do portal |
| Status | ✅ v1 |

## 1. Premissas (Release 1 — MVP estático)

- **Sem dados sensíveis** no cliente: o MVP não coleta, não armazena e não processa PII.
- **HTTPS obrigatório** (Cloudflare Full/Strict) + HSTS.
- **Sem segredos no repo:** tokens Cloudflare vivem nos secrets do GitHub (`CLOUDFLARE_API_TOKEN`).
- **CSP/headers** mínimos via `public/_headers` (Cloudflare) quando aplicável.

## 2. Evolução

- **Release 2** (captura de leads): LGPD (base legal, consentimento, aviso de privacidade) antes de
  qualquer formulário em produção.
- **Release 3** (SSO): OIDC com tokens/sessões próprias — **sem** cookie-sharing entre subdomínios
  como estratégia de SSO. Baseline: [platform-standards/standards/security/](https://github.com/fbso-techsolutions/platform-standards/tree/main/standards/security).

## 3. Política de privacidade / Termos

Páginas legais (`/privacidade`, `/termos`) entram no escopo do MVP ou como pendência — decidir no
projeto ([hub de pendências](../../../projects/PRJ-CORP-2026-0000-PORTAL/pendencias.md)).
