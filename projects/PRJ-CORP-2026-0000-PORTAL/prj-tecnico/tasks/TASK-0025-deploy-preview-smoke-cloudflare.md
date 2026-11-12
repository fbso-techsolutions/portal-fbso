# ⚙️ TASK-0025 — Deploy em URL de preview + smoke test Cloudflare

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0003-0005 — Deploy Cloudflare (wrangler + static assets)](../../prj-produto/user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 2h |
| Depende de | [TASK-0024 — Step wrangler deploy](TASK-0024-step-wrangler-deploy-secrets.md) · [TASK-0005 — Conta Cloudflare + zona](TASK-0005-conta-cloudflare-zona-dominio.md) |

## 1. Objetivo

Comprovar o deploy contínuo: o "hello world" acessível via URL da Cloudflare, sem passo manual.

## 2. O que implementar/entregar

- Realizar um deploy real (merge na `main`) e capturar a URL de preview/workers.dev.
- Smoke test: acessar a URL e confirmar o conteúdo "hello world" renderizado.
- Documentar a URL de preview no board como evidência.

## 3. Critério de saída (evidência)

- [ ] URL Cloudflare acessível (publicamente ou via preview).
- [ ] Conteúdo da Home renderizado (print).
- [ ] Link da URL registrado no [board](../../prj-produto/sprints/board-sprint-0001.md).
