# 💬 User Story: US-FEAT-0006.0006-0030 — Banner de consentimento + aviso de privacidade

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0006](../epicos/EPIC-0006-comercial.md) ➔ [FEATURE-0006.0006](../features/FEATURE-0006.0006-consentimento-privacidade-lgpd.md) ➔ `US-FEAT-0006.0006-0030` |
| Prioridade | Should |
| Estimativa | 5 SP |
| Rastreio | B-REQ-08 (habilita) |
| Status | ✅ Revisado (2026-11-25) |

## 1. Declaração

- **Como** visitante, **quero** um aviso claro de consentimento, **para** aceitar/recusar a coleta
  de dados (cookies/analytics).

## 2. Cenários (Gherkin)

- **Dado que** chego ao portal, **quando** a página carrega, **então** vejo o banner de consentimento.
- **Dado que** aceito, **quando** confirmo, **então** a escolha é registrada e o GA4 é liberado
  (Consent Mode `update: granted`).
- **Dado que** recuso, **quando** confirmo, **então** a escolha é registrada e o GA4 permanece bloqueado
  (Consent Mode `denied`).

## 3. Não funcionais

- Consent Mode v2 integrado ao banner (default `denied` → `update` no aceite/recusa).
- Escolha persistida (1ª parte) e revogável.
- Base legal = consentimento (art. 7º-I LGPD); aviso aponta para a política atualizada (FEATURE-0006.0006).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
