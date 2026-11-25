# 📝 Checklist — Definition of Ready (DoR) · Sprint 6 — Medir + habilitar

> **Gate de documentação** do corte da [Sprint 6 — Medir + habilitar](sprint-0006-medir-habilitar.md).
> Um item só entra em execução com **todos** os critérios marcados e `Status` → `✅ Revisado`.
> Fonte dos critérios: [template-user-story-v1](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/template-user-story-v1.md) ·
> [template-enabler-dor](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/template-enabler-dor.md) ·
> [guia INVEST/Enabler](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/guia-invest-enablers-spike.md).

## 1. User Stories — critérios de DoR (INVEST + gate)

| Story | Declaração (como/quero/para) | Gherkin (feliz+alternativo) | INVEST I/N/V/E/S/T | SP | Dependências | Não-funcionais | `✅ Revisado` |
|---|---|---|---|---|---|---|---|
| [US-FEAT-0006.0006-0030 — Banner de consentimento](../user-stories/US-FEAT-0006.0006-0030-banner-consentimento.md) | ✅ | ✅ | ✅ 6/6 | 5 | ✅ livre | ✅ | ✅ |
| [US-FEAT-0006.0001-0028 — Analytics consentido](../user-stories/US-FEAT-0006.0001-0028-analytics-consentido.md) | ✅ | ✅ | ✅ 6/6 | 3 | ✅ resolvida (G-LCBF75K8KW) | ✅ | ✅ |
| [US-FEAT-0006.0001-0029 — Origem + eventos-chave](../user-stories/US-FEAT-0006.0001-0029-origem-acessos-eventos.md) | ✅ | ✅ | ✅ 6/6 | 3 | ✅ resolvida (G-LCBF75K8KW) | ✅ | ✅ |
| [US-FEAT-0006.0006-0031 — Política/termos (LGPD)](../user-stories/US-FEAT-0006.0006-0031-atualizar-politica-privacidade.md) | ✅ | ✅ | ✅ 6/6 | 2 | ✅ resolvida | ✅ | ✅ |

> As 4 stories estão **prontas** (INVEST 6/6 · SP estimados). Gate humano: ver §3.

## 2. Enablers — critérios de DoR (template-enabler-dor)

| Enabler | Origem | Habilita | Fronteiras (fora) | Riscos | Critérios binários | Evidência | Responsável | Job Size |
|---|---|---|---|---|---|---|---|---|
| [ENABLER-0003 — Cloudflare Workers + API](../../prj-tecnico/enablers/ENABLER-0003-cloudflare-workers-api.md) | ⚠️ | ✅ | ⚠️ | ⚠️ | ✅ | — | Infra (Lourival Louro) | 3 |
| [ENABLER-0005 — Modo manutenção (Worker + KV)](../../prj-tecnico/enablers/ENABLER-0005-modo-manutencao-worker-kv.md) | ⚠️ | ✅ | ✅ | ⚠️ | ✅ | — | Infra (Lourival Louro) | 2 |

> ⚠️ = itens a completar no refinamento (Origem/Riscos/Responsável/Job Size) — mesmo padrão da Sprint 1.

## 3. Aprovação (gate humano)

| Papel | Nome | Aprova | Data |
|---|---|---|---|
| PM/PO | Alessandra Neves | ✅ | 2026-11-25 |
| Tech lead | Francisco Oliveira | ✅ | 2026-11-25 |

> **Ao aprovar:** resolver as pendências de gate (§1) + completar os ⚠️ dos enablers (§2), marcar os
> 6 cards com `Status` → `✅ Revisado` (mesma data) e, se algo mudar de escopo/status, refletir no
> [backlog](../../../../docs/produto/backlog/BACKLOG-LIST.md) no mesmo passo.
