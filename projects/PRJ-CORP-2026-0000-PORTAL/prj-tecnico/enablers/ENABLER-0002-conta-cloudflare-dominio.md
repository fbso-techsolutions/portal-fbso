# 🔧 ENABLER-0002 — Conta Cloudflare + domínio

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Categoria | Infraestrutura |
| Job Size | 2 |
| Habilita | FEATURE-0001.0003 (deploy) · FEATURE-0005.0003 (go-live) |
| Dono | Lourival Louro |
| Status | ✅ Revisado (2026-11-11) |

## 1. Objetivo

Provisionar a conta Cloudflare, adicionar o site e deixar o domínio `fbso.com.br` pronto para
apontar NS (registro.br).

## 2. Critério de saída

- [x] Conta Cloudflare ativa com o site adicionado (2026-11-12).
- [x] Nameservers da Cloudflare obtidos — `ray.ns.cloudflare.com` · `tess.ns.cloudflare.com` (2026-11-12).
- [ ] Domínio `fbso.com.br` registrado/apontado — roteiro pronto em [DEPLOYMENT.md](../../../../docs/tecnico/arquitetura/DEPLOYMENT.md) (a executar no go-live, FEATURE-0005.0003).
