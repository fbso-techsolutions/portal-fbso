# 🏁 Roteiro de Execução — Sprint 6 (Medir + habilitar) · kickoff 08/02

> **Status:** 📝 **Planejado** — as 12 tasks (TASK-0056…0067) do corte, ordenadas por dependência,
> aguardando o kickoff de 08/02/2027.

> **O que é:** a ordem de execução das 12 tasks do corte, por dependência — o "plano de voo" do
> kickoff. Complementa o [sprint doc](sprint-0006-medir-habilitar.md) (o **quê/porquê**) e o
> [board](board-sprint-0006.md) (o **status**). Aqui só a **sequência**.
>
> **Leitura:** cada **onda** = tasks que rodam **em paralelo** (sem dependência entre si). A onda
> seguinte só destrava quando a anterior entrega o que ela espera. Dono = nome completo
> (fonte: [equipe.md](../../equipe.md)). Capacidade: ver [sprint §3](sprint-0006-medir-habilitar.md).
>
> **Duas trilhas independentes:** **Infra** (Lourival Louro — Workers/manutenção) e **Front**
> (Alfredo Bento — consentimento/analytics/LGPD) correm **em paralelo do início ao fim**, sem
> dependência cruzada entre si.

## 0. Pré-requisitos do kickoff (já cumpridos)

- [x] DoR aprovado — 4 stories + 2 enablers `✅ Revisado` — [checklist](checklist-dor-sprint-0006.md).
- [x] PENDENCY-0012 (base legal art. 33) · PENDENCY-0013 (texto de privacidade) · PENDENCY-0014
  (GA4 + Measurement ID `G-LCBF75K8KW`) — todas **resolvidas**.
- [x] Capacidade calibrada — 34h de esforço · 13 SP (fonte: [sprint §3](sprint-0006-medir-habilitar.md)).
- [ ] PENDENCY-0011 (logo/identidade definitiva) — **aberta**; usar branding provisório na página de
  manutenção e no banner (ver §6).

## 1. Fase 1 — Kickoff (dia 1 · seg 08/02), destrava as duas trilhas

### Onda 1 — sem dependências
- [TASK-0056 — Worker script + binding ASSETS](../../prj-tecnico/tasks/TASK-0056-worker-script-binding-assets.md) · Lourival Louro · 3h
- [TASK-0062 — Banner de consentimento (UI)](../../prj-tecnico/tasks/TASK-0062-banner-consentimento-ui.md) · Alfredo Bento · 4h

## 2. Fase 2 — Execução paralela (dias 1–7)

### Onda 2 — destravada pela Onda 1
- [TASK-0057 — Endpoint server-side (smoke)](../../prj-tecnico/tasks/TASK-0057-endpoint-server-side-smoke.md) · Lourival Louro · 3h
- [TASK-0059 — KV namespace + binding](../../prj-tecnico/tasks/TASK-0059-kv-namespace-binding-maintenance.md) · Lourival Louro · 2h
- [TASK-0067 — Política/termos (LGPD)](../../prj-tecnico/tasks/TASK-0067-politica-termos-lgpd.md) · Alfredo Bento (+ Daniel Vini, revisão) · 2h

### Onda 3
- [TASK-0058 — Deploy Worker no CI](../../prj-tecnico/tasks/TASK-0058-deploy-worker-ci.md) · Lourival Louro · 3h
- [TASK-0060 — Worker catch-all (503)](../../prj-tecnico/tasks/TASK-0060-worker-catchall-maintenance-503.md) · Lourival Louro · 3h
- [TASK-0063 — Consent Mode v2](../../prj-tecnico/tasks/TASK-0063-consent-mode-v2.md) · Alfredo Bento · 3h

### Onda 4
- [TASK-0061 — Exceções + runbook toggle](../../prj-tecnico/tasks/TASK-0061-excecoes-rota-runbook-toggle.md) · Lourival Louro · 2h
- [TASK-0064 — Persistência + revogação + link](../../prj-tecnico/tasks/TASK-0064-persistencia-revogacao-link.md) · Alfredo Bento · 3h
- [TASK-0065 — Tag gtag consentida](../../prj-tecnico/tasks/TASK-0065-tag-gtag-consentida.md) · Alfredo Bento · 3h

### Onda 5 — fechamento da trilha analytics
- [TASK-0066 — Eventos-chave + origem](../../prj-tecnico/tasks/TASK-0066-eventos-chave-origem.md) · Alfredo Bento · 3h

> **Marco:** as 12 tasks entregues = 34h. Worker + endpoint + deploy (ENABLER-0003) e modo
> manutenção via KV (ENABLER-0005) no ar; banner + Consent Mode v2 + gtag consentida + eventos-chave
> + política LGPD publicados.

## 3. Fase 3 — Revisão e encerramento (dias 8–10)

- [ ] Revisão LGPD/segurança da TASK-0067 — Daniel Vini + Jurídico (sob demanda).
- [ ] QA sob demanda — Patricia Varra (sem task comprometida; aciona ao fim de cada trilha).
- [ ] Verificar [DoD §5](sprint-0006-medir-habilitar.md): analytics respeitando consentimento
  (Consent Mode v2) em produção + modo manutenção liga/desliga **sem redeploy**.
- [ ] Marcar os 6 cards como `✅ Entregue` no [backlog](../../../../docs/produto/backlog/BACKLOG-LIST.md)
  com evidência real (PR/deploy).

## 4. Caminho crítico (não pode atrasar)

```
TASK-0062 → 0063 → 0065 → 0066
```

(~13h de esforço direto; destravado pela 0062 e pivotado na 0063 — Consent Mode v2 libera toda a
trilha analytics. Em paralelo correm as duas cadeias da Infra: `0056 → 0057 → 0058` e
`0056 → 0059 → 0060 → 0061`, e o ramo `0062 → 0067`.)

## 5. Pontos de atenção

| # | Atenção | Impacto | Ação |
|---|---|---|---|
| 1 | PENDENCY-0011 — logo/identidade definitiva em aberto | 🟡 afeta página de manutenção + banner | usar branding provisório; não bloquear |
| 2 | ENABLER-0005 (modo manutenção) **depende de** ENABLER-0003 (Worker) | trava de item | TASK-0056 antes da 0059 na trilha Infra |
| 3 | TASK-0063 (Consent Mode v2) destrava 0065 **e** 0066 | caminho crítico | priorizar a 0063; não atrasar |
| 4 | TASK-0067 envolve revisão LGPD/segurança (Daniel + Jurídico sob demanda) | pode travar o fechamento | acionar os revisores **cedo** (na Onda 2) |
| 5 | Esforço Infra = 16h vs 40h disponíveis (Lourival); Front = 18h vs 80h (Alfredo) | folga alta | sem risco de sobrecarga; QA/revisão sob demanda |

---

> 🔁 **Regra viva:** a ordem reflete as dependências do [board](board-sprint-0006.md). Mudou uma
> dependência? Atualize este roteiro + o board + o índice de [tasks](../../prj-tecnico/tasks/README.md)
> no mesmo passo.
