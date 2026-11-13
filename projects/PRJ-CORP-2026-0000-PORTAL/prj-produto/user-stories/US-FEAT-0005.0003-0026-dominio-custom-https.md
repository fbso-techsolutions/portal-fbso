# 💬 User Story: US-FEAT-0005.0003-0026 — Configurar domínio custom + HTTPS

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0005](../epicos/EPIC-0005-seo-publicacao.md) ➔ [FEATURE-0005.0003](../features/FEATURE-0005.0003-golive-dominio.md) ➔ `US-FEAT-0005.0003-0026` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-07 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** operador, **quero** configurar o domínio custom `fbso.com.br` + HTTPS na Cloudflare,
  **para** publicar no domínio próprio.

## 2. Cenários (Gherkin)

- **Dado que** os NS apontam para a Cloudflare, **quando** configuro o domínio, **então** o worker
  responde em `fbso.com.br`.
- **Dado que** o domínio está ativo, **quando** acesso via `https://`, **então** o HTTPS é forçado.

## 3. Não funcionais

- Nameservers já obtidos (`ray`/`tess.ns.cloudflare.com` — ENABLER-0002); roteiro em
  [DEPLOYMENT.md](../../../../docs/tecnico/arquitetura/DEPLOYMENT.md).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
