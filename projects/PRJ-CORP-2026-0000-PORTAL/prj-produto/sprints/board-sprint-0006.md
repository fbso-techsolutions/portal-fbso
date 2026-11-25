# 📋 Board — Sprint 6 (Medir + habilitar)

> Camada fina de **status de execução**. O corte e o porquê vivem no
> [sprint-0006-medir-habilitar.md](sprint-0006-medir-habilitar.md); a fila única, no
> [BACKLOG-LIST](../../../../docs/produto/backlog/BACKLOG-LIST.md). As **tasks** (documento técnico)
> vivem em [prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md) — aqui só **apontamento**.

**Etapas:** ⬜ A fazer · 🔄 Em execução · 🔎 Em review · 🧪 Em testes · 🚀 Pronto p/ deploy · ✅ Entregue

## Itens

| Item | Dono | Tasks | Etapa | Evidência |
|---|---|---|---|---|
| [ENABLER-0003 — Cloudflare Workers + API](../../prj-tecnico/enablers/ENABLER-0003-cloudflare-workers-api.md) | Infra (Lourival Louro) | [TASK-0056…0058](../../prj-tecnico/tasks/README.md) | ⬜ A fazer | — |
| [ENABLER-0005 — Modo manutenção (Worker + KV)](../../prj-tecnico/enablers/ENABLER-0005-modo-manutencao-worker-kv.md) | Infra (Lourival Louro) | [TASK-0059…0061](../../prj-tecnico/tasks/README.md) | ⬜ A fazer | — |
| [US-FEAT-0006.0006-0030 — Banner de consentimento](../user-stories/US-FEAT-0006.0006-0030-banner-consentimento.md) | Alfredo Bento | [TASK-0062…0064](../../prj-tecnico/tasks/README.md) | ⬜ A fazer | — |
| [US-FEAT-0006.0001-0028 — Analytics consentido](../user-stories/US-FEAT-0006.0001-0028-analytics-consentido.md) | Alfredo Bento | [TASK-0065](../../prj-tecnico/tasks/README.md) | ⬜ A fazer | — |
| [US-FEAT-0006.0001-0029 — Origem + eventos-chave](../user-stories/US-FEAT-0006.0001-0029-origem-acessos-eventos.md) | Alfredo Bento | [TASK-0066](../../prj-tecnico/tasks/README.md) | ⬜ A fazer | — |
| [US-FEAT-0006.0006-0031 — Política/termos (LGPD)](../user-stories/US-FEAT-0006.0006-0031-atualizar-politica-privacidade.md) | Alfredo Bento + Daniel Vini | [TASK-0067](../../prj-tecnico/tasks/README.md) | ⬜ A fazer | — |

> Evidência aponta para **PR/deploy** (artefato real), não planilha.

## Tasks (saída do Planning)

> Decomposto em `TASK-0056…0067`. A especificação mora em
> [prj-tecnico/tasks/](../../prj-tecnico/tasks/README.md); aqui só a **camada fina**.

| Check | Task | Origem | Status | Esforço (h) | Previsão | Dono | Evidência |
|---|---|---|---|---|---|---|---|
| 🔎 | [TASK-0056 — Worker script + binding ASSETS](../../prj-tecnico/tasks/TASK-0056-worker-script-binding-assets.md) | ENABLER-0003 | Em review | 3 | S6 | Lourival Louro | [PR #58](https://github.com/fbso-techsolutions/portal-fbso/pull/58) |
| 🔎 | [TASK-0057 — Endpoint server-side (smoke)](../../prj-tecnico/tasks/TASK-0057-endpoint-server-side-smoke.md) | ENABLER-0003 | Em review | 3 | S6 | Lourival Louro | [PR #58](https://github.com/fbso-techsolutions/portal-fbso/pull/58) |
| 🔎 | [TASK-0058 — Deploy Worker no CI](../../prj-tecnico/tasks/TASK-0058-deploy-worker-ci.md) | ENABLER-0003 | Em review | 3 | S6 | Lourival Louro | [PR #58](https://github.com/fbso-techsolutions/portal-fbso/pull/58) |
| 🔎 | [TASK-0059 — KV namespace + binding](../../prj-tecnico/tasks/TASK-0059-kv-namespace-binding-maintenance.md) | ENABLER-0005 | Em review | 2 | S6 | Lourival Louro | [PR #58](https://github.com/fbso-techsolutions/portal-fbso/pull/58) |
| 🔎 | [TASK-0060 — Worker catch-all (503)](../../prj-tecnico/tasks/TASK-0060-worker-catchall-maintenance-503.md) | ENABLER-0005 | Em review | 3 | S6 | Lourival Louro | [PR #58](https://github.com/fbso-techsolutions/portal-fbso/pull/58) |
| 🔎 | [TASK-0061 — Exceções + runbook toggle](../../prj-tecnico/tasks/TASK-0061-excecoes-rota-runbook-toggle.md) | ENABLER-0005 | Em review | 2 | S6 | Lourival Louro | [PR #58](https://github.com/fbso-techsolutions/portal-fbso/pull/58) |
| 🔎 | [TASK-0062 — Banner de consentimento (UI)](../../prj-tecnico/tasks/TASK-0062-banner-consentimento-ui.md) | US-0030 | Em review | 4 | S6 | Alfredo Bento | [PR #58](https://github.com/fbso-techsolutions/portal-fbso/pull/58) |
| 🔎 | [TASK-0063 — Consent Mode v2](../../prj-tecnico/tasks/TASK-0063-consent-mode-v2.md) | US-0030 | Em review | 3 | S6 | Alfredo Bento | [PR #58](https://github.com/fbso-techsolutions/portal-fbso/pull/58) |
| 🔎 | [TASK-0064 — Persistência + revogação + link](../../prj-tecnico/tasks/TASK-0064-persistencia-revogacao-link.md) | US-0030 | Em review | 3 | S6 | Alfredo Bento | [PR #58](https://github.com/fbso-techsolutions/portal-fbso/pull/58) |
| 🔎 | [TASK-0065 — Tag gtag consentida](../../prj-tecnico/tasks/TASK-0065-tag-gtag-consentida.md) | US-0028 | Em review | 3 | S6 | Alfredo Bento | [PR #58](https://github.com/fbso-techsolutions/portal-fbso/pull/58) |
| 🔎 | [TASK-0066 — Eventos-chave + origem](../../prj-tecnico/tasks/TASK-0066-eventos-chave-origem.md) | US-0029 | Em review | 3 | S6 | Alfredo Bento | [PR #58](https://github.com/fbso-techsolutions/portal-fbso/pull/58) |
| ⬜ | [TASK-0067 — Política/termos (LGPD)](../../prj-tecnico/tasks/TASK-0067-politica-termos-lgpd.md) | US-0031 | A fazer | 2 | S6 | Alfredo Bento | — |

**Total de esforço (estimado):** 34h.

## Capacidade — consumo (a calibrar)

> 📊 A **disponibilidade bruta** vive em [sprint-0006 §3](sprint-0006-medir-habilitar.md) (fonte única
> — "aponta, não copia"). Aqui só o **consumo** (horas comprometidas × saldo), a preencher após o Planning.

| Recurso | Papel | Horas comprometidas (tasks) | Disponibilidade restante | Saldo |
|---|---|---|---|---|
| Lourival Louro | Infra / DevOps | 16h | 40h | +24h |
| Alfredo Bento | Dev frontend | 18h | 80h | +62h |

> Outros papéis (Tech lead, Arquiteto, QA, Segurança, Jurídico) sem tasks comprometidas — disponíveis
> para revisão/QA sob demanda.
