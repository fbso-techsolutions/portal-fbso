# 🧭 EPIC-0001 — Fundação e Engenharia do Portal

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | `EPIC-0001` — Fundação e Engenharia do Portal |
| B-REQs atendidas | B-REQ-07 (habilita todas) |
| Features | 3 — `FEATURE-0001.0001` … `FEATURE-0001.0003` |
| Prioridade | Onda 1-Must (MVP) |
| Status | 📝 Rascunho (2026-11-11) |

## 1. Objetivo

- **Problema:** sem scaffold, design system e esteira, nenhuma página do portal sai do papel.
- **Solução:** subir o projeto React+TS+Vite+Tailwind+Router v8, estabelecer os design tokens e
  montar o pipeline CI/CD com deploy na Cloudflare.
- **Impacto:** base sólida para as features de conteúdo, com SEO por prerender e entrega contínua.

## 2. Fora do escopo deste épico

- Conteúdo institucional e páginas (EPIC-0002/0003/0004).
- SEO/Open Graph/sitemap (EPIC-0005) — aqui entra só a **base** que os habilita.
- SSO, analytics, formulários (Release 2/3).

## 3. Features derivadas

| Feature | Título | Stories |
|---|---|---|
| [FEATURE-0001.0001](../features/FEATURE-0001.0001-scaffold-portal.md) | Scaffold do portal (Vite + TS + Tailwind + Router v8) | a detalhar (S1) |
| [FEATURE-0001.0002](../features/FEATURE-0001.0002-design-system.md) | Design System e identidade visual | a detalhar (S2) |
| [FEATURE-0001.0003](../features/FEATURE-0001.0003-pipeline-cicd-deploy.md) | Pipeline CI/CD + deploy Cloudflare | a detalhar (S1) |

> 💡 **Rastreabilidade:** [matriz](../rastreabilidade.md) · **Backlog:** [BACKLOG-LIST](../../../../docs/produto/backlog/BACKLOG-LIST.md).
