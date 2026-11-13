# ⚙️ TASK-0019 — Build/prerender + smoke test local

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0003 — Estruturar pastas + Home "hello world"](../../prj-produto/user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 1h |
| Depende de | [TASK-0017 — Rota / Home](TASK-0017-rota-home-hello-world.md) · [TASK-0018 — Conteúdo em src/content/](TASK-0018-conteudo-src-content.md) |

## 1. Objetivo

Confirmar que a Home "hello world" pré-renderiza corretamente e fecha a story de estrutura.

## 2. O que implementar/entregar

- Rodar `npm run build` e `npm run preview`.
- Verificar o HTML gerado em `dist/` (rota `/`) contém o conteúdo da Home **sem depender de JS**.
- Checar ausência de erros no console do preview.

## 3. Critério de saída (evidência)

- [ ] `dist/client/index.html` contém o "hello world" renderizado (grep/print).
- [ ] Preview sem erro de console.
