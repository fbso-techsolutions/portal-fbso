# 📝 Checklist — Definition of Ready (DoR) · Sprint 1 — Fundação

> **Gate de documentação** do corte da [Sprint 1 — Fundação](sprint-0001-fundacao.md). Um item só
> entra em execução com **todos** os critérios marcados e `Status` → `✅ Revisado`.
> Fonte dos critérios: [template-user-story-v1](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/template-user-story-v1.md) ·
> [template-enabler-dor](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/template-enabler-dor.md) ·
> [guia INVEST/Enabler](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/guia-invest-enablers-spike.md).

## 1. User Stories — critérios de DoR (INVEST + gate)

| Story | Declaração (como/quero/para) | Gherkin (feliz+alternativo) | INVEST I/N/V/E/S/T | SP | Dependências | Não-funcionais | `✅ Revisado` |
|---|---|---|---|---|---|---|---|
| [US-FEAT-0001.0001-0001 — Inicializar projeto](../user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | ✅ | ✅ | ✅ 6/6 | 5 | ✅ ENABLER-0001 | ✅ | ✅ |
| [US-FEAT-0001.0001-0002 — Lint/tsconfig](../user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) | ✅ | ✅ | ✅ 6/6 | 3 | ✅ 0001 | ✅ | ✅ |
| [US-FEAT-0001.0001-0003 — Estrutura + Home](../user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) | ✅ | ✅ | ✅ 6/6 | 3 | ✅ 0001 | ✅ | ✅ |
| [US-FEAT-0001.0003-0004 — Pipeline CI/CD](../user-stories/US-FEAT-0001.0003-0004-pipeline-cicd.md) | ✅ | ✅ | ✅ 6/6 | 3 | ✅ 0003 · ENABLER-0001 | ✅ | ✅ |
| [US-FEAT-0001.0003-0005 — Deploy Cloudflare](../user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) | ✅ | ✅ | ✅ 6/6 | 3 | ✅ 0004 · ENABLER-0002 | ✅ | ✅ |

> As 5 stories estão **prontas de conteúdo** (INVEST 6/6). Falta apenas o `Status` → `✅ Revisado`
> (aprovação humana). Sem ajuste de redação.

## 2. Enablers — critérios de DoR (template-enabler-dor)

| Enabler | Origem | Habilita | Fronteiras (fora) | Riscos | Critérios binários | Evidência | Responsável | Job Size |
|---|---|---|---|---|---|---|---|---|
| [ENABLER-0001 — Repo e ambiente](../../prj-tecnico/enablers/ENABLER-0001-repositorio-ambiente-github.md) | ⚠️ | ✅ | ⚠️ | ⚠️ | ✅ | ✅ | ✅ | 2 |
| [ENABLER-0002 — Cloudflare + domínio](../../prj-tecnico/enablers/ENABLER-0002-conta-cloudflare-dominio.md) | ⚠️ | ✅ | ⚠️ | ⚠️ | ✅ | ✅ | ✅ | 2 |

> ⚠️ = itens **a completar** (ou aceitar como estão) no refinamento:
> - **Origem** — o card não cita o ADR/checklist de onde o enabler nasceu.
> - **Fronteiras** — não declara explicitamente o que **não** entra no escopo.
> - **Riscos** — não mapeados no card (parcialmente cobertos por `RISK-0001`/`RISK-0002` no sprint doc).
>
> Para a Sprint 1 (fundação), **aceitas como estão** no DoR de 2026-11-11 (decisão PM/PO + Tech lead).

## 3. Aprovação (gate humano)

| Papel | Nome | Aprova | Data |
|---|---|---|---|
| PM/PO | Alessandra Neves | ✅ | 2026-11-11 |
| Tech lead | Francisco Oliveira | ✅ | 2026-11-11 |

> **Ao aprovar:** marcar os 7 cards com `Status` → `✅ Revisado` (mesma data) e, se algo mudar de
> escopo/status, refletir no [backlog](../../../../docs/produto/backlog/BACKLOG-LIST.md) no mesmo passo.
