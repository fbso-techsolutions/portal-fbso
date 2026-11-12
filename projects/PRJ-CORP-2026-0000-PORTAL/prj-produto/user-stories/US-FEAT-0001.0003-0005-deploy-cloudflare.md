# 💬 User Story: US-FEAT-0001.0003-0005 — Deploy Cloudflare (wrangler + static assets)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0001](../epicos/EPIC-0001-fundacao-engenharia.md) ➔ [FEATURE-0001.0003](../features/FEATURE-0001.0003-pipeline-cicd-deploy.md) ➔ `US-FEAT-0001.0003-0005` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-07 |
| Status | ✅ Revisado (2026-11-11) |

## 1. Declaração

- **Como** time de engenharia, **quero** publicar o `dist/` na Cloudflare (Workers + Static Assets)
  via `wrangler deploy` no pipeline, **para** ter deploy contínuo do MVP.

## 2. Cenários (Gherkin)

- **Dado que** o build gera `dist/`, **quando** o deploy roda, **então** os assets estáticos são
  publicados e acessíveis via URL da Cloudflare.
- **Dado que** os secrets (`CLOUDFLARE_API_TOKEN`) existem, **quando** o workflow roda, **então** o
  deploy acontece sem credencial no repo.

## 3. Não funcionais

- `wrangler.jsonc` com `assets.directory = "./dist"`.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
