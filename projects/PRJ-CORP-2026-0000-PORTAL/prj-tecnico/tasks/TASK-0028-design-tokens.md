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

- [x] Tokens declarados em `src/styles/` e consumíveis (ex.: `bg-primary`, `text-muted`, `rounded-…`).
- [x] `npm run build` verde e tema aplicável sem literal nos componentes.

**Evidências**

- `src/styles/index.css` ganhou `@theme` com a paleta (navy · navy-2 · blue · mint · ink · muted · paper · line · mist · sky), tipografia (`--font-sans` Inter) e raio/sombra (`--radius-soft: 20px`, `--shadow-soft`).
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅.

## 4. Runbook

### 4.1 Alterar um token (reflete em todo o portal)

Edite o valor em `src/styles/index.css` (bloco `@theme`) e rode `npm run build` — a mudança propaga
para todos os componentes que consomem o tema (fonte única).

### 4.2 Verificar que não há cor hardcoded

```bash
grep -rn '\[#' src/   # deve retornar vazio (nenhum valor arbitrário de cor)
```
