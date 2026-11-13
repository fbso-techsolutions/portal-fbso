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

- [ ] Worker responde em `fbso.com.br`; HTTPS forçado. *(bloqueado — ação externa)*

**Evidências (preparação)**

- `DEPLOYMENT.md` §5: runbook de delegação NS (registro.br) + **Custom Domain** no Worker (Workers & Pages → `portal-fbso` → Settings → Domains & Routes → Custom Domains) + HTTPS (Full Strict).
- Deploy automático já publicado em `https://portal-fbso.bolismar69.workers.dev`.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅.

## 4. Runbook

### 4.1 Configurar o domínio custom (ação manual — Lourival)

1. **registro.br**: apontar os NS de `fbso.com.br` para `ray.ns.cloudflare.com` / `tess.ns.cloudflare.com`.
2. **Cloudflare** (Workers & Pages → `portal-fbso` → Settings → Domains & Routes → **Custom Domains**): adicionar `fbso.com.br` e `www.fbso.com.br`.
3. **Cloudflare** (zona `fbso.com.br` → SSL/TLS): **Full (Strict)**.

> ⚠️ A delegação NS é **ação externa** (registro.br + dashboard Cloudflare) — não é executável via código. Detalhes completos em [DEPLOYMENT.md](../../../../docs/tecnico/arquitetura/DEPLOYMENT.md).
