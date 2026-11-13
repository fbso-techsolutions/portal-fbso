# ⚙️ TASK-0026 — QA: smoke test do deploy + render sem JS + `lang="pt-BR"`

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0001.0003-0005 — Deploy Cloudflare (wrangler + static assets)](../../prj-produto/user-stories/US-FEAT-0001.0003-0005-deploy-cloudflare.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Patricia Varra |
| Esforço | 2h |
| Depende de | [TASK-0025 — Deploy preview + smoke](TASK-0025-deploy-preview-smoke-cloudflare.md) |

## 1. Objetivo

Validar de forma independente (QA) que o artefato publicado atende ao mínimo funcional da fundação.

## 2. O que implementar/entregar

- Acessar a URL de preview e verificar:
  - "hello world" visível (conteúdo renderizado);
  - HTML renderiza **sem JS** habilitado (prerender real);
  - `<html lang="pt-BR">` presente;
  - ausência de erros no console e de recursos 404 (console/network).
- Registrar o resultado como evidência no board (checklist curto).

## 3. Critério de saída (evidência)

- [x] Smoke test executado com resultado registrado (print/checklist).
- [x] `lang="pt-BR"` confirmado no HTML servido.

**Evidências** — URL `https://portal-fbso.bolismar69.workers.dev` (deploy do merge #21, run `43372504660`):

| Check QA | Resultado |
|---|---|
| `hello world` visível (conteúdo renderizado) | ✅ inline no HTML |
| Renderiza **sem JS** (prerender real) | ✅ corpo completo (`<header>`/`<main>`/`<footer>`) já no HTML servido |
| `<html lang="pt-BR">` | ✅ `<html lang="pt-BR"` |
| Recursos 404 (CSS/JS) | ✅ **0× 404** — 7 assets referenciados → todos `200` |
| Erros de console | n/a via curl (sem runtime de navegador); HTML válido + assets 200 |

**Limitação conhecida (não bloqueia a R1):** `/__manifest` (route discovery do React Router)
retorna `404` no deploy estático — é um endpoint de servidor que só existe com Worker script. Com a
rota única da R1 não há navegação cliente, então ele nunca é requisitado no load. **Ação para a R2**
(adicionar o Worker/binding `ASSETS` ou desligar `routeDiscovery` lazy).

## 4. Runbook

### 4.1 Reexecutar o QA smoke

```bash
URL=https://portal-fbso.bolismar69.workers.dev
curl -sS "$URL" -o /tmp/portal.html
grep -oE '<html[^>]*lang="[^"]*"' /tmp/portal.html          # lang="pt-BR"
grep -o "hello world" /tmp/portal.html                      # conteúdo inline (sem JS)
grep -oE '/assets/[A-Za-z0-9_.-]+' /tmp/portal.html | sort -u | while read -r a; do
  printf "%s  %s\n" "$(curl -sS -o /dev/null -w '%{http_code}' "$URL$a")" "$a"
done                                                         # 0× 404 esperado
```

