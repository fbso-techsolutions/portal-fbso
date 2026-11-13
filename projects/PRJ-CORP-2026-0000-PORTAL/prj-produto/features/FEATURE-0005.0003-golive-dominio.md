# ✨ FEATURE-0005.0003 — Homologação e go-live (domínio fbso.com.br)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0005 — SEO, Acessibilidade e Publicação](../epicos/EPIC-0005-seo-publicacao.md) |
| B-REQ dona | B-REQ-07 |
| Prioridade | Onda 1-Must (MVP) |
| 🔒 Travada por | FEATURE-0005.0001 (SEO) · FEATURE-0005.0002 (a11y) |
| Status | ✅ Revisado (2026-11-13) |

## 1. Objetivo de negócio

Publicar o portal no domínio `fbso.com.br` com homologação.

## 2. Escopo

### Entra
- Apontar NS do `fbso.com.br` (registro.br) para a Cloudflare.
- Domínio custom + HTTPS.
- Homologação (smoke test em produção).

### Fora
- Analytics (Release 2).

> ✅ **Nameservers já obtidos** (ENABLER-0002, 2026-11-12): `ray.ns.cloudflare.com` · `tess.ns.cloudflare.com`.
> Roteiro de delegação em [DEPLOYMENT.md](../../../../docs/tecnico/arquitetura/DEPLOYMENT.md).

## 5. User stories desta feature

| ID | História |
|---|---|
| (a detalhar) | Configurar domínio custom + HTTPS |
| (a detalhar) | Homologação e go-live |

## 7. Critérios de aceite (DoD)

- [ ] `https://fbso.com.br` no ar com HTTPS e smoke test aprovado.
