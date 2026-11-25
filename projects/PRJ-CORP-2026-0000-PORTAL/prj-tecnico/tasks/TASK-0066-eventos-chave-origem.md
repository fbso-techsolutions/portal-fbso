# ⚙️ TASK-0066 — Eventos-chave (CTA, contato, produto) + origem UTM/referrer

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0006.0001-0029 — Origem de acessos + eventos-chave](../../prj-produto/user-stories/US-FEAT-0006.0001-0029-origem-acessos-eventos.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0065 — Tag gtag consentida](TASK-0065-tag-gtag-consentida.md) |

## 1. Objetivo

Registrar os **eventos-chave** (clique em CTA · contato · visualização de produto) e confirmar a
**origem de acessos** (UTM/referrer) no GA4.

## 2. O que implementar/entregar

- Emitir eventos custom via `gtag('event', ...)`: `cta_click`, `contato`, `produto_view`.
- Marcar esses eventos como **key events** no console do GA4.
- Validar que `source`/`medium`/`campaign` (UTM/referrer) aparecem nos relatórios.

## 3. Critério de saída (evidência)

- [ ] Eventos-chave disparando e visíveis no GA4 (Real-time/Relatórios).
- [ ] Origem (UTM/referrer) registrada nas dimensões de tráfego.

**Evidências:** — a preencher na execução (print do GA4 + link com UTM).
