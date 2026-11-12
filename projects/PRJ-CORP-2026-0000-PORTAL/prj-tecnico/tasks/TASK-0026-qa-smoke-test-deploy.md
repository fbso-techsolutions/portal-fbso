# ⚙️ TASK-0026 — QA: smoke test do deploy + render sem JS + `lang="pt-BR"`

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0003-0005 — Deploy Cloudflare (wrangler + static assets)](../../prj-produto/user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Patricia Varra |
| Esforço | 2h |
| Depende de | [TASK-0025 — Deploy preview + smoke](TASK-0025-deploy-preview-smoke-cloudflare.md) |

## 1. Objetivo

Validar de forma independente (QA) que o artefato publicado atende ao mínimo funcional da fundação.

## 2. O que implementar/entregar

- Acessar a URL de preview e verificar:
  - "hello world" visível (conteúdo renderizado);
  - HTML renderiza **sem JS** habilitado (prerender real);
  - `<html lang="pt-BR">` presente;
  - ausência de erros no console e de recursos 404 (console/network).
- Registrar o resultado como evidência no board (checklist curto).

## 3. Critério de saída (evidência)

- [ ] Smoke test executado com resultado registrado (print/checklist).
- [ ] `lang="pt-BR"` confirmado no HTML servido.
