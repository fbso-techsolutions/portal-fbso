# ⚙️ TASK-0018 — Conteúdo isolado em `src/content/` (nada hardcoded no JSX)

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0001-0003 — Estruturar pastas + Home "hello world"](../../prj-produto/user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Alfredo Bento |
| Esforço | 2h |
| Depende de | [TASK-0016 — Estrutura de pastas src/](TASK-0016-estrutura-pastas-src.md) |

## 1. Objetivo

Estabelecer o padrão **"conteúdo como dados"** (INTENT §4): textos/placeholders vivem em
`src/content/`, e os componentes apenas consomem — preservando a evolução para fonte externa
(API/CMS) na Release 2 sem reescrever componentes.

## 2. O que implementar/entregar

- Criar um arquivo de dados em `src/content/` (ex.: `home.ts`) com título/CTA placeholder tipados.
- A Home (TASK-0017) consome esse dado — **nenhum texto institucional hardcoded no JSX**.
- Definir um tipo/interface simples para o conteúdo da Home.

## 3. Critério de saída (evidência)

- [x] Texto da Home vindo de `src/content/` (não literal no componente).
- [x] Estrutura tipada (sem `any`).
