# ⚙️ TASK-0030 — Componente `Button`

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0002-0007 — Componentes ui/](../../prj-produto/user-stories/US-FEAT-0001.0002-0007-componentes-ui.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 2 — Design System](../../prj-produto/sprints/sprint-0002-design-system.md) · 30/11–11/12 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0028](TASK-0028-design-tokens.md) |

## 1. Objetivo

Criar o componente base `Button` em `src/components/ui/`, com variantes `primary`/`outline`, estados
`hover`/`focus` e raio pill (referência do molde), consumindo os tokens.

## 2. O que implementar/entregar

- `Button` tipado (TypeScript), com props de variante e estado (foco visível).
- Variantes `primary` (acento + sombra) e `outline` (borda + hover).
- Sem lógica de negócio; sem valor hardcoded (usa tokens).

## 3. Critério de saída (evidência)

- [x] `Button` renderiza `primary`/`outline` com `hover`/`focus` corretos.
- [x] Acessível (foco visível) e responsivo.

**Evidências**

- `src/components/ui/Button.tsx` criado: variantes `primary`/`outline`, raio pill (`rounded-full`), estados `hover`/`focus-visible`, tipado (polimórfico `button`/`a`), consome tokens (`bg-blue` · `text-navy` · `border-line` · `shadow-soft`).
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅.

## 4. Runbook

### 4.1 Uso

```tsx
import Button from '@/components/ui/Button';

<Button variant="primary">Ação</Button>
<Button variant="outline" href="#contato">Saiba mais</Button>
```
