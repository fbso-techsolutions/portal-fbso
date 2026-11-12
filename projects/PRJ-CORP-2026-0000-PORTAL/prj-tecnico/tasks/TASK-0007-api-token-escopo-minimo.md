# ⚙️ TASK-0007 — API token Cloudflare com escopo mínimo de deploy

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0002 — Conta Cloudflare + domínio](../enablers/ENABLER-0002-conta-cloudflare-dominio.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 1h |
| Depende de | [TASK-0005 — Conta Cloudflare + zona](TASK-0005-conta-cloudflare-zona-dominio.md) |

## 1. Objetivo

Emitir um token de API da Cloudflare com o menor privilégio necessário para publicar static assets
via `wrangler deploy` (princípio do menor privilégio).

## 2. O que implementar/entregar

- Criar API token restrito ao escopo de **Workers/Static Assets (edit)** da conta/zona `fbso.com.br`.
- Definir validade e rotação documentadas.
- Entregar o valor **somente** para configurar o secret `CLOUDFLARE_API_TOKEN` (TASK-0004).

## 3. Critério de saída (evidência)

- [ ] Token criado com escopo mínimo (print da tela de permissões, valor oculto).
- [ ] Valor disponível para o secret do GitHub (sem circular em chat/arquivo).
