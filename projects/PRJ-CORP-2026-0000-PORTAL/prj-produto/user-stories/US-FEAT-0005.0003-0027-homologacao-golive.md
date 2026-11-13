# 💬 User Story: US-FEAT-0005.0003-0027 — Homologação e go-live

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0005](../epicos/EPIC-0005-seo-publicacao.md) ➔ [FEATURE-0005.0003](../features/FEATURE-0005.0003-golive-dominio.md) ➔ `US-FEAT-0005.0003-0027` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-07 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** time, **quero** homologar (smoke em produção) e fazer o go-live, **para** publicar
  oficialmente o portal.

## 2. Cenários (Gherkin)

- **Dado que** o deploy está em produção, **quando** executo o smoke test, **então** as rotas-chave
  respondem corretamente.
- **Dado que** o smoke passou, **quando** divulgo, **então** `https://fbso.com.br` está no ar.

## 3. Não funcionais

- Smoke test com evidência; go-live registrado no board/sprint.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
