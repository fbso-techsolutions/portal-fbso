# ⚙️ TASK-0031 — Componentes `Card` + `Section`

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0002-0007 — Componentes ui/](../../prj-produto/user-stories/US-FEAT-0001.0002-0007-componentes-ui.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 2 — Design System](../../prj-produto/sprints/sprint-0002-design-system.md) · 30/11–11/12 |
| Dono | Alfredo Bento |
| Esforço | 3h |
| Depende de | [TASK-0028](TASK-0028-design-tokens.md) |

## 1. Objetivo

Criar os componentes base `Card` e `Section` em `src/components/ui/`, seguindo o padrão visual do
molde (borda `line`, raio `20px`, hover lift; `Section` = kicker + título + copy).

## 2. O que implementar/entregar

- `Card` tipado (conteúdo composto, hover lift opcional).
- `Section` tipado (kicker + título + parágrafo/copy).
- Consumir tokens; sem valor hardcoded; responsivos.

## 3. Critério de saída (evidência)

- [x] `Card` e `Section` renderizam estilizados e responsivos.
- [x] Compõem sem reimplementar estilos (usa tokens).

**Evidências**

- `src/components/ui/Card.tsx` (borda `line`, raio `soft`, fundo branco, hover opcional) e `src/components/ui/Section.tsx` (kicker + título + copy + conteúdo) criados, consumindo tokens.
- `npx tsc -b` ✅ · `npm run lint` ✅ · `npm run format:check` ✅.

## 4. Runbook

### 4.1 Uso

```tsx
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';

<Section kicker="Quem somos" title="Tecnologia com visão de negócio." description="...">
  <Card hoverable>Conteúdo</Card>
</Section>
```
