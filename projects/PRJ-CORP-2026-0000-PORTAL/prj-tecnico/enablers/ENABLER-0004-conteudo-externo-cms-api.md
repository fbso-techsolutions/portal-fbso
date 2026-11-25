# 🔧 ENABLER-0004 — Fonte de conteúdo externa (CMS/API)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Categoria | Arquitetura (runway) |
| Job Size | — (a estimar no refinamento) |
| Habilita | edição de conteúdo sem redeploy — relevante p/ **planos/preços (0006.0004)** e **textos legais (0006.0006)** |
| Dono | — (a preencher) |
| Status | 📝 Proposta (runway — Release 3) |

## 1. Objetivo

Trocar a fonte de conteúdo (hoje `src/content/`, dados locais) por **API/CMS externa**, **sem
reescrever os componentes** — o conteúdo já é modelado como dados desde a Release 1
([ADR-001](../../../../docs/tecnico/arquitetura/adrs/adr-001-stack-portal.md) ·
[ARCHITECTURE §3](../../../../docs/tecnico/arquitetura/ARCHITECTURE.md)).

## 2. O que habilita (por que existe)

- **Edição sem redeploy** — hoje qualquer texto/preço exige PR + build + deploy.
- Beneficia: **planos/preços (FEATURE-0006.0004)** — conteúdo comercial volátil · **textos legais
  (FEATURE-0006.0006)** · catálogo SaaS e páginas institucionais (Release 1).
- **Não** é requisito de analytics (0006.0001), formulários (0006.0002) nem CRM (0006.0003).

## 3. Opções de implementação

| Opção | Esforço | Observação |
|---|---|---|
| A. Headless CMS (Sanity/Contentful/Strapi/Directus/Payload) | Alto | Painel de edição pronto; exige decisão de ferramenta + custo/vendor |
| B. CMS próprio leve (Cloudflare D1/KV + admin mínimo) | Médio | Coerente com o "CRM próprio" e a stack Cloudflare |
| C. API + revalidação (fonte JSON/API, prerender com revalidação no Worker) | Baixo | Só a fonte muda; a edição continua manual (via API/JSON) |

## 4. Dependências / riscos

- **Decisão de ferramenta** (aberta) — escolher entre as opções A/B/C.
- **ENABLER-0003 (Workers/API)** — necessário para servir/revalidar (opções B/C).
- Esforço/risco adicionais numa release já cheia (GA4, formulários, CRM, planos, consultoria, LGPD).

## 5. Critério de saída

- [ ] Conteúdo servido de fonte externa (API/CMS) com os componentes inalterados.
- [ ] Estratégia de cache/fallback definida (prerender + revalidação).
- [ ] Um conteúdo editado sem redeploy (ex.: preço de plano) refletido em produção.

## 6. Decisão R2 × R3 (decidida)

- ✅ **Release 3 (runway)** — nenhuma feature da R2 depende do CMS; o conteúdo (catálogo + planos)
  é pequeno e pouco volátil, editável via PR por enquanto (2026-11-23).
- **Gatilho de reabertura:** se os planos/preços passarem a mudar com frequência e exigirem edição
  sem dev, reavaliar a opção B ou C (fonte de planos) antes da R3.
