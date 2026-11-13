# ⚙️ TASK-0028 — Definir design tokens (cor/tipografia/espaçamento)

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0002-0006 — Design tokens](../../prj-produto/user-stories/US-FEAT-0001.0002-0006-design-tokens.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 2 — Design System](../../prj-produto/sprints/sprint-0002-design-system.md) · 30/11–11/12 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | — |

## 1. Objetivo

Criar a fonte única dos design tokens (cores, tipografia, espaçamento, raios, sombras) no
`src/styles/` via Tailwind `@theme` + CSS variables, a partir da paleta de partida do molde.

## 2. O que implementar/entregar

- Definir tokens de cor (navy/blue/mint/ink/muted/paper/line + acentos de produto), tipografia
  (Inter + escala display/title/body/caption), espaçamento, raio e sombra.
- Registrar os tokens no Tailwind `@theme` (fonte única) — sem valores hardcoded.
- Documentar a paleta (token → valor → uso) como referência.

## 3. Critério de saída (evidência)

- [ ] Tokens declarados em `src/styles/` e consumíveis (ex.: `bg-primary`, `text-muted`, `rounded-…`).
- [ ] `npm run build` verde e tema aplicável sem literal nos componentes.

**Evidências**

*A preencher na execução.*

## 4. Runbook

*A preencher se aplicável (ex.: como alterar um token e refletir em todo o portal).*
