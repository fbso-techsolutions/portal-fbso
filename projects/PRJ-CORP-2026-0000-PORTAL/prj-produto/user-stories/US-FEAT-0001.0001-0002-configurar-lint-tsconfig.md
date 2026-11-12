# 💬 User Story: US-FEAT-0001.0001-0002 — Configurar ESLint/Prettier e tsconfig

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0001](../epicos/EPIC-0001-fundacao-engenharia.md) ➔ [FEATURE-0001.0001](../features/FEATURE-0001.0001-scaffold-portal.md) ➔ `US-FEAT-0001.0001-0002` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-07 |
| Status | ✅ Revisado (2026-11-11) |

## 1. Declaração

- **Como** time de engenharia, **quero** configurar ESLint, Prettier e `tsconfig` alinhados ao
  padrão React da org, **para** manter qualidade e consistência desde o início.

## 2. Cenários (Gherkin)

- **Dado que** o lint/format está configurado, **quando** o dev roda `npm run lint`,
  **então** o código passa sem erros.
- **Dado que** o CI existe, **quando** um PR abre, **então** o lint/typecheck é executado e bloqueia
  regressões.

## 3. Não funcionais

- Alinhar ao futuro `coding-standards-react.md` da platform-standards (referência).

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
