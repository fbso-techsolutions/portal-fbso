# ⚙️ TASK-0006 — Nameservers da Cloudflare + roteiro de delegação no registro.br

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0002 — Conta Cloudflare + domínio](../enablers/ENABLER-0002-conta-cloudflare-dominio.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 2h |
| Depende de | [TASK-0005 — Conta Cloudflare + zona](TASK-0005-conta-cloudflare-zona-dominio.md) |

## 1. Objetivo

Preparar a delegação do domínio `fbso.com.br` para a Cloudflare, sem bloquear o deploy em URL de
preview (mitigação do `RISK-0001`).

## 2. O que implementar/entregar

- Obter os dois nameservers da Cloudflare para a zona `fbso.com.br`.
- Escrever o **roteiro de apontamento** no registro.br (onde trocar os NS), com os valores e os
  passos — mesmo que a troca efetiva ocorra no go-live (FEATURE-0005.0003).
- Registrar o roteiro num documento acessível (ex.: `docs/tecnico/arquitetura/DEPLOYMENT.md`).

## 3. Critério de saída (evidência)

- [ ] Nameservers anotados.
- [ ] Roteiro de delegação NS documentado e linkado no [DEPLOYMENT.md](../../../../docs/tecnico/arquitetura/DEPLOYMENT.md).
