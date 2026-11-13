# 💬 User Story: US-FEAT-0001.0001-0001 — Inicializar projeto Vite + TS + Tailwind + Router v8

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0001](../epicos/EPIC-0001-fundacao-engenharia.md) ➔ [FEATURE-0001.0001](../features/FEATURE-0001.0001-scaffold-portal.md) ➔ `US-FEAT-0001.0001-0001` |
| Prioridade | Must |
| Estimativa | 5 SP |
| Rastreio | B-REQ-07 |
| Status | ✅ Revisado (2026-11-11) |

## 1. Declaração

- **Como** time de engenharia, **quero** inicializar o projeto com Vite + React + TypeScript +
  Tailwind CSS v4 + React Router v8 (framework mode, `prerender: true`), **para** ter a base da
  stack aprovada no ADR-001.

## 2. Cenários (Gherkin)

- **Dado que** o repo `portal-fbso` existe, **quando** o time executa `npm run dev`/`npm run build`,
  **então** o app sobe e o build gera `dist/` com HTML pré-renderizado.
- **Dado que** o build rodou, **quando** abrimos a Home, **então** o conteúdo é renderizado sem
  depender de JS no servidor.

## 3. Não funcionais

- `lang="pt-BR"` no HTML pré-renderizado · build estático sem servidor Node em produção.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
