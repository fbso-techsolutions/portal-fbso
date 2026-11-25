# 💬 User Story: US-FEAT-0006.0006-0031 — Atualizar política de privacidade e termos (LGPD)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0006](../features/FEATURE-0006.0006-consentimento-privacidade-lgpd.md) ➔ `US-FEAT-0006.0006-0031` |
| Prioridade | Should |
| Estimativa | 2 SP |
| Rastreio | B-REQ-08 (habilita) |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** titular dos dados, **quero** uma política de privacidade/termos clara (base legal,
  finalidade, transferência internacional e canal de exercício de direitos), **para** entender e
  exercer meus direitos sobre os dados coletados.

## 2. Cenários (Gherkin)

- **Dado que** sou visitante, **quando** acesso `/privacidade` e `/termos`, **então** vejo a base
  legal (consentimento, art. 7º-I), a finalidade, a retenção e a transferência internacional (art. 33).
- **Dado que** quero exercer um direito (acesso/correção/eliminação/revogação), **quando** consulto
  a política, **então** encontro o canal de contato do encarregado (DPO).
- **Dado que** o portal coleta dados via GA4, **quando** as páginas carregam, **então** a política
  menciona a transferência internacional ao Google (art. 33).

## 3. Não funcionais

- Texto fornecido por **Jurídico + Segurança** (pendência "texto de privacidade").
- Conteúdo como **dados** (`src/content/`), **atualizando** as páginas legais da Release 1
  (FEATURE-0002.0005).
- Cobre: controlador · finalidade · base legal (art. 7º-I) · retenção · transferência internacional
  (art. 33) · direitos do titular (art. 18) · contato do encarregado (DPO).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
