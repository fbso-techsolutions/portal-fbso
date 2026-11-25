# ✨ FEATURE-0006.0001 — Analytics e origem de acessos

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0006 — Comercial](../epicos/EPIC-0006-comercial.md) |
| B-REQ dona | B-REQ-08 |
| Prioridade | Onda 2-Should (Release 2) |
| 🔒 Travada por | FEATURE-0006.0006 (consentimento/LGPD) |
| Status | ✅ Revisado (2026-11-25) |

## 1. Objetivo de negócio

Medir quem acessa o portal e de onde vem, para orientar decisões de conteúdo e aquisição.

## 2. Escopo

> 📌 **Ferramenta (decidida):** Google Analytics 4 (GA4), tag `gtag.js` client-side em todas as
> páginas, com **Consent Mode v2** (default `analytics_storage: denied` até o aceite). Sem sinais
> de anúncio (`ad_storage`/`ad_user_data`/`ad_personalization` permanecem `denied`).
>
> **Measurement ID:** `G-LCBF75K8KW` (conta `417444169` · propriedade `565782510`).
> **Sem GTM** — `gtag.js` direto (decisão 2026-11-25).

### Entra
- Tag GA4 (`gtag.js`) em todas as páginas, com Consent Mode v2 respeitando o consentimento
  (FEATURE-0006.0006).
- **Origem de acessos** via UTM/referrer — dimensões `source`/`medium`/`campaign` (automático no GA4).
- **Eventos-chave** (*key events* no GA4): clique em CTA · contato · visualização de produto.
  O evento `form_submit`/`generate_lead` entra junto com a FEATURE-0006.0002.
- Configuração de privacidade da propriedade: Google Signals desligado · retenção definida · sem PII.

### Fora
- Captura de leads/formulários (FEATURE-0006.0002) · CRM (FEATURE-0006.0003).
- Tracking sem consentimento; dados para anúncio/personalização.
- Server-side tagging / proxy 1ª parte do gtag (fora do escopo — evolução futura).

## 5. User stories desta feature

| ID | História |
|---|---|
| [US-FEAT-0006.0001-0028](../user-stories/US-FEAT-0006.0001-0028-analytics-consentido.md) | Instrumentar analytics consentido nas páginas |
| [US-FEAT-0006.0001-0029](../user-stories/US-FEAT-0006.0001-0029-origem-acessos-eventos.md) | Origem de acessos + eventos-chave |

## 7. Critérios de aceite (DoD)

- [ ] GA4 ativo em todas as páginas, carregado **somente** após consentimento (Consent Mode v2).
- [ ] Origem (UTM/referrer) e eventos-chave (CTA, contato, produto) registrados e visíveis no GA4.
