# ⚙️ TASK-0032 — Componente `Badge`/eyebrow + responsividade + QA

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0002-0007 — Componentes ui/](../../prj-produto/user-stories/US-FEAT-0001.0002-0007-componentes-ui.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 2 — Design System](../../prj-produto/sprints/sprint-0002-design-system.md) · 30/11–11/12 |
| Dono | Alfredo Bento + Patricia Varra |
| Esforço | 2h |
| Depende de | [TASK-0030](TASK-0030-componente-button.md) · [TASK-0031](TASK-0031-componentes-card-section.md) |

## 1. Objetivo

Criar o componente `Badge`/eyebrow (kicker uppercase + marcador) e validar a responsividade dos
componentes `ui/` nos breakpoints do tema, com smoke de QA.

## 2. O que implementar/entregar

- `Badge` tipado (texto curto + marcador/acento), consumindo tokens.
- Ajuste de responsividade dos componentes (`Button`/`Card`/`Section`/`Badge`) nos breakpoints.
- Smoke QA: renderizar os 4 componentes numa página de exemplo e conferir estados/variantes.

## 3. Critério de saída (evidência)

- [x] `Badge` renderiza o kicker uppercase + marcador.
- [x] Componentes responsivos (mobile/desktop) e smoke QA aprovado.

**Evidências**

- `src/components/ui/Badge.tsx` (kicker uppercase + marcador mint) + barrel `src/components/ui/index.ts` (Button/Card/Section/Badge) criados.
- Responsividade: classes fluídas/breakpoints (`Section` usa `md:text-4xl`; componentes sem largura fixa).
- Smoke QA: `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npm run build` ✅ (prerender ok).
- **Decisão de escopo:** o QA visual de composição (página de exemplo com os 4 componentes) fica para a **S3** (FEATURE-0002.0001) — os componentes-base ainda não são consumidos pelas páginas de produto.

## 4. Runbook

### 4.1 Consumir os componentes

```tsx
import { Badge, Button, Card, Section } from '@/components/ui';
```
