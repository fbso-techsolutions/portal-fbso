# 💬 User Story: US-FEAT-0004.0002-0021 — Conteúdo/link externo por produto

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0004](../epicos/EPIC-0004-portfolio-saas.md) ➔ [FEATURE-0004.0002](../features/FEATURE-0004.0002-pagina-produto.md) ➔ `US-FEAT-0004.0002-0021` |
| Prioridade | Must |
| Estimativa | 2 SP |
| Rastreio | B-REQ-05 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** conteúdo por produto + link externo (quando o site do SaaS existir),
  **para** acessar o produto diretamente.

## 2. Cenários (Gherkin)

- **Dado que** estou na página de um produto, **quando** ela renderiza, **então** o descritivo do
  produto aparece.
- **Dado que** o produto tem site próprio, **quando** o campo `link` existe no catálogo, **então** o
  botão/link externo aparece; senão, é omitido.

## 3. Não funcionais

- Link externo condicional (só quando existir no catálogo); dados de `src/content/saas-catalog.ts`.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
