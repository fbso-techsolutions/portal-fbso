# ✨ FEATURE-0001.0001 — Scaffold do portal (Vite + TS + Tailwind + Router v8)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0001 — Fundação e Engenharia](../epicos/EPIC-0001-fundacao-engenharia.md) |
| B-REQ dona | B-REQ-07 |
| Prioridade | Onda 1-Must (MVP) |
| 🔒 Travada por | — (livre) |
| Status | 📝 Rascunho (2026-11-11) |

## 1. Objetivo de negócio

Subir o projeto com a stack aprovada (ADR-001) para dar início ao desenvolvimento.

## 2. Escopo

### Entra
- Projeto Vite + React + TypeScript + Tailwind CSS v4 + React Router v8 (framework mode, `prerender: true`).
- ESLint + Prettier + tsconfig alinhados ao padrão React da org.
- Estrutura de pastas (`src/app`, `components/{layout,ui,sections}`, `pages`, `content`, `lib`, `styles`) e Home "hello world".

### Fora
- Conteúdo real da Home (FEATURE-0002.0002) · design tokens finais (FEATURE-0001.0002).

## 5. User stories desta feature

| ID | História |
|---|---|
| [US-FEAT-0001.0001-0001](../user-stories/US-FEAT-0001.0001-0001-inicializar-projeto-vite.md) | Inicializar o projeto Vite + TS + Tailwind + Router v8 |
| [US-FEAT-0001.0001-0002](../user-stories/US-FEAT-0001.0001-0002-configurar-lint-tsconfig.md) | Configurar lint/format (ESLint/Prettier) e tsconfig |
| [US-FEAT-0001.0001-0003](../user-stories/US-FEAT-0001.0001-0003-estruturar-pastas-home.md) | Estruturar pastas + Home "hello world" |

## 7. Critérios de aceite (DoD)

- [ ] `npm run build` gera `dist/client/` com HTML pré-renderizado por rota.
- [ ] Lint/typecheck passam limpos no CI.
