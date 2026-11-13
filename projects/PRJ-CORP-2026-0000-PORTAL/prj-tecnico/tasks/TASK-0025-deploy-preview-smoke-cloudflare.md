# ⚙️ TASK-0025 — Deploy em URL de preview + smoke test Cloudflare

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0003-0005 — Deploy Cloudflare (wrangler + static assets)](../../prj-produto/user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Lourival Louro |
| Esforço | 2h |
| Depende de | [TASK-0024 — Step wrangler deploy](TASK-0024-step-wrangler-deploy-secrets.md) · [TASK-0005 — Conta Cloudflare + zona](TASK-0005-conta-cloudflare-zona-dominio.md) |

## 1. Objetivo

Comprovar o deploy contínuo: o "hello world" acessível via URL da Cloudflare, sem passo manual.

## 2. O que implementar/entregar

- Realizar um deploy real (merge na `main`) e capturar a URL de preview/workers.dev.
- Smoke test: acessar a URL e confirmar o conteúdo "hello world" renderizado.
- Documentar a URL de preview no board como evidência.

## 3. Critério de saída (evidência)

- [x] URL Cloudflare acessível (publicamente ou via preview).
- [x] Conteúdo da Home renderizado (print).
- [x] Link da URL registrado no [board](../../prj-produto/sprints/board-sprint-0001.md).

**Evidências** — deploy real do merge da PR #21 (run `43372504660`) e re-deploy pós-#22
(run `43373328575`), ambos `success`:

```text
URL: https://portal-fbso.bolismar69.workers.dev

$ curl -sS -o /dev/null -w "status=%{http_code} · type=%{content_type}"
status=200 · type=text/html            (5133 bytes)

$ grep "hello world"                    → hello world  ✅
$ <title>…</title>                      → "FBSO TechSolutions | Tecnologia, Consultoria e Software"
$ <meta name="description" …>           → presente (Open Graph incluso)
$ header "FBSO" / footer "© 2026 FBSO Technology Solutions"  → presentes
$ /assets/root-*.css                    → 200 · text/css
$ /assets/entry.client-*.js             → 200 · text/javascript
```

> Aviso do wrangler no deploy: `preview_urls` ausente do `wrangler.jsonc` → preview URLs ligadas
> por default. Sem ação para a R1 (a URL `workers.dev` já é o preview); se quiser desligar, adicionar
> `"preview_urls": false` em `wrangler.jsonc`.

## 4. Runbook

### 4.1 Smoke test da URL publicada

```bash
URL=https://portal-fbso.bolismar69.workers.dev
curl -sS -o /dev/null -w "status=%{http_code} · type=%{content_type}\n" "$URL"
curl -sS "$URL" | grep -o "hello world"
```

### 4.2 Descobrir a URL após um deploy

```bash
gh run list --workflow=deploy.yml --limit 1
gh run view <id> --log | grep -oE 'https://[a-z0-9.-]*workers\.dev'
```

