# ✨ FEATURE-0006.0006 — Consentimento e privacidade (LGPD)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0006 — Comercial](../epicos/EPIC-0006-comercial.md) |
| B-REQ dona | B-REQ-08 (habilita) |
| Prioridade | Onda 2-Should (Release 2) |
| 🔒 Travada por | — (livre) |
| Status | ✅ Revisado (2026-11-25) |

## 1. Objetivo de negócio

Garantir conformidade LGPD antes de qualquer coleta de dados (analytics/formulários) em produção.

## 2. Escopo

> 📌 **Decisões:** base legal = **consentimento** (art. 7º-I LGPD) para cookies/analytics ·
> **banner próprio** (sem CMP pago nesta fase) integrado ao **Consent Mode v2** do GA4.

### Entra
- Banner/aviso de consentimento para cookies e analytics, integrado ao Consent Mode v2
  (`analytics_storage: denied` por padrão → `update` no aceite/recusa).
- Persistência da escolha (1ª parte) + opção de **revogar** o consentimento.
- Atualização da política de privacidade/termos com **base legal** (consentimento), **finalidade**,
  **retenção** e **canal de exercício de direitos** (contato do encarregado/DPO).
- Registro da **transferência internacional** ao Google (art. 33 LGPD) na política — ver pendência.

### Fora
- **Self-service/automação** dos direitos do titular (portabilidade, exportação, acesso e eliminação
  automatizados) — **Release 3** (depende de infra de dados: CRM próprio + backend do formulário).

> 📌 **Divisão R2 × R3 (decidida):** na Release 2 entra o **canal de exercício de direitos**
> (revogação no banner + contato do encarregado na política). A **automação/self-service** dos
> direitos (portabilidade/exportação/acesso/eliminação) fica para a Release 3.

## 5. User stories desta feature

| ID | História |
|---|---|
| [US-FEAT-0006.0006-0030](../user-stories/US-FEAT-0006.0006-0030-banner-consentimento.md) | Banner de consentimento + aviso de privacidade |
| [US-FEAT-0006.0006-0031](../user-stories/US-FEAT-0006.0006-0031-atualizar-politica-privacidade.md) | Atualizar política de privacidade e termos (LGPD) |

## 7. Critérios de aceite (DoD)

- [ ] Consentimento coletado **antes** de disparar analytics (Consent Mode v2 default `denied`).
- [ ] Escolha persistida (1ª parte) e revogável.
- [ ] Política de privacidade/termos atualizados com base legal, finalidade, transferência
  internacional e canal de exercício de direitos (contato do encarregado).
