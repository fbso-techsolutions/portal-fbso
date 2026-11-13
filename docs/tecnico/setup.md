# 🔧 Setup — como a base foi criada (scaffold)

> Referência de **como a aplicação foi inicializada** (one-time). Para o uso diário, veja a seção
> **Desenvolvimento** no [README](../../README.md).

| Campo | Valor |
|---|---|
| Âmbito | Receita do scaffold Vite + React + TS (referência, não rotina) |
| Status | ✅ v1 (2026-11-12) |

## 1. Objetivo

Registrar os comandos usados para criar a base (Vite + React 19 + TypeScript, dependências
pinadas) — para que um dev novo entenda **de onde veio a estrutura** e para servir de receita ao
recriar um app semelhante em outro repo.

## 2. Comandos de criação

```bash
# 1. Scaffold Vite com template react-ts (na raiz do repo)
npm create vite@latest . -- --template react-ts

# 2. Dependências de runtime pinadas (sem ^ ou ~)
npm install --save-exact react@19 react-dom@19

# 3. Dependências de build/dev pinadas
npm install --save-dev --save-exact \
  typescript vite @vitejs/plugin-react @types/react @types/react-dom

# 4. Fixar também as dependências de lint/tsconfig (evita ^ solto)
npm install --save-dev --save-exact \
  @eslint/js @types/node eslint eslint-plugin-react-hooks \
  eslint-plugin-react-refresh globals typescript-eslint
```

> `--save-exact` grava as versões resolvidas sem o prefixo `^`/`~`.

## 3. Validação

```bash
npm install              # instala tudo
npm run dev              # dev server → http://localhost:5173
npm run build            # gera dist/ (tsc -b && vite build)
npm run preview          # serve o build localmente
npm audit                # vulnerabilidades (total)
npm audit --omit=dev     # vulnerabilidades só de produção
```

## 4. Estrutura gerada (base)

```
.
├── index.html
├── package.json · package-lock.json
├── vite.config.ts
├── tsconfig.json · tsconfig.app.json · tsconfig.node.json
├── eslint.config.js
└── src/
    ├── main.tsx
    ├── App.tsx
    └── index.css
```

## 5. Observações

- **Dependências pinadas** (`--save-exact`): sem `^`/`~` no `package.json`.
- **Tailwind e React Router NÃO entram no scaffold** — são etapas seguintes (TASK-0009 e TASK-0010).
- A estrutura de pastas definitiva (`src/app`, `components/{layout,ui,sections}`, `content`, `lib`,
  `styles`) é criada em etapa posterior (TASK-0016), conforme
  [ARCHITECTURE §3](arquitetura/ARCHITECTURE.md).
- As vulnerabilidades `moderate` do `npm audit` são transitivas do `eslint`/`minimatch`
  (**dev-only**, não afetam produção); a correção exige downgrade breaking do eslint 10, então **não**
  aplicamos (`npm audit fix --force`).
