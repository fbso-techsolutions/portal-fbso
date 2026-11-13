# ⚙️ TASK-0016 — Estrutura de pastas `src/`

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0003 — Estruturar pastas + Home "hello world"](../../prj-produto/user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 2h |
| Depende de | [TASK-0008 — Scaffold Vite + React + TS](TASK-0008-scaffold-vite-react-ts.md) |

## 1. Objetivo

Criar o esqueleto de pastas do portal para que cada artefato (rota, componente, conteúdo, estilo)
tenha um lugar claro nas próximas features.

## 2. O que implementar/entregar

- Criar a estrutura definida na story:
  - `src/app/` (rotas/root do Router v8)
  - `src/components/layout/`, `src/components/ui/`, `src/components/sections/`
  - `src/pages/` (páginas de rota)
  - `src/content/` (conteúdo como dados)
  - `src/lib/` (utilidades)
  - `src/styles/` (CSS de entrada)
- Garantir que cada pasta tenha um propósito documentado (ex.: `README.md` curto ou comentário de topo), para humanos e IAs saberem onde colocar cada coisa.

## 3. Critério de saída (evidência)

- [x] Pastas criadas e versionadas.
- [x] Nenhuma pasta vazia sem propósito (cada uma com `README.md` ou artefato inicial — usamos `.gitkeep`).
