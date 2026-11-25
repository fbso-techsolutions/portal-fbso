# ⚙️ TASK-0058 — Deploy do Worker automatizado no CI

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0003 — Cloudflare Workers + API](../enablers/ENABLER-0003-cloudflare-workers-api.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 6 — Medir + habilitar](../../prj-produto/sprints/sprint-0006-medir-habilitar.md) |
| Dono | Lourival Louro |
| Esforço | 3h |
| Depende de | [TASK-0057 — Endpoint server-side (smoke)](TASK-0057-endpoint-server-side-smoke.md) |

## 1. Objetivo

Automatizar o deploy do **Worker + assets** no CI (develop/release/main), sem regressão do estático.

## 2. O que implementar/entregar

- Ajustar `.github/workflows/deploy.yml` (ou criar passo) para o deploy do Worker junto dos assets.
- Garantir que o `build` (prerender) + `wrangler deploy` seguem no mesmo fluxo.
- Confirmar que um merge em `main` publica Worker + assets juntos.

## 3. Critério de saída (evidência)

- [ ] Merge em `main` publica Worker + assets (deploy contínuo comprovado).
- [ ] Sem regressão do estático (páginas continuam no ar).

**Evidências:** — a preencher na execução (run do GitHub Actions + URL).
