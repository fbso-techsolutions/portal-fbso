# ADR-001 - Stack do portal (React + TS + Vite + React Router v8 + Cloudflare)

| Campo | Conteúdo |
|---|---|
| Data / Status | 2026-11-11 · 📝 **Proposta** (aguarda validação do Tech lead + Arquiteto) |
| Contexto | O portal nasce estático (Release 1), mas evolui para comercial (R2) e plataforma/SSO (R3). Precisamos de uma stack que não force reescrita na evolução e que atenda SEO. |
| Decisão | **React + TypeScript + Vite + Tailwind CSS v4 + React Router v8 (framework mode, `prerender: true`)**. Build estático → `dist/` → **Cloudflare Workers + Static Assets** (domínio `fbso.com.br`). Conteúdo como dados (`src/content/`). |
| Justificativa | (1) Router v8 em framework mode pré-renderiza HTML por página nativamente — sem headless Chrome, sem SPA pura; (2) o mesmo código vira SSR/Worker na R2 e adota auth na R3 sem trocar de framework; (3) Cloudflare evolui de estático → Workers sem trocar de provedor; (4) conteúdo-como-dados permite trocar a fonte por API/CMS na R2. |
| Alternativas rejeitadas | **HTML/CSS puro** — reescrita total na R2. **SPA + vite-plugin-prerender (puppeteer)** — prerender frágil e mais retrabalho. **Next.js (`output: export`)** — mais pesado para um MVP 100% estático. **Astro** — melhor fit técnico puro para site institucional, mas introduz framework novo fora da inércia React do time. **GitHub Pages/Hostinger** — GitHub Pages sem backend para R2; Hostinger desnecessária para estático. |
| Consequências | Repo `portal-fbso` usa React/TS; CI/CD via GitHub Actions + `wrangler`; SEO por prerender; R2 adiciona Workers; R3 usa OIDC (Keycloak) sem monolitizar o portal. |
| Assinatura | a definir (Tech lead + Arquiteto de Soluções) |
