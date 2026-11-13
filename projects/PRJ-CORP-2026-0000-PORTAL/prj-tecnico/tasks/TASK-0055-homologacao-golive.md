# ⚙️ TASK-0055 — Homologação e go-live

| Campo | Valor |
|---|---|
| Origem | [US-FEAT-0005.0003-0027 — Homologação e go-live](../../prj-produto/user-stories/US-FEAT-0005.0003-0027-homologacao-golive.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 5 — SEO, a11y e go-live](../../prj-produto/sprints/sprint-0005-seo-a11y-golive.md) · 25/01–05/02 |
| Dono | Lourival Louro + Patricia Varra |
| Esforço | 3h |
| Depende de | [TASK-0051](TASK-0051-sitemap-robots.md) · [TASK-0053](TASK-0053-acessibilidade-basica.md) · [TASK-0054](TASK-0054-dominio-custom-https.md) |

## 1. Objetivo

Homologar (smoke em produção) e fazer o go-live no `fbso.com.br`.

## 2. O que implementar/entregar

- Smoke test em produção; go-live registrado; evidência de deploy.

## 3. Critério de saída (evidência)

- [ ] `https://fbso.com.br` no ar com smoke aprovado. *(bloqueado — depende da delegação NS)*

**Evidências (preparação)**

- Smoke no deploy atual (`workers.dev`): 8 rotas respondem `200` (`curl -sSL` — o `307` é o trailing-slash da Cloudflare Static Assets).
- Deploy automático (merge na `main`) funcionando.

## 4. Runbook

### 4.1 Smoke de homologação

```bash
URL=https://portal-fbso.bolismar69.workers.dev
for p in / /sobre /contato /techservices /solucoes /solucoes/educatio /privacidade /termos; do
  printf "%s  %s\n" "$(curl -sSL -o /dev/null -w '%{http_code}' "$URL$p")" "$p"
done
```

### 4.2 Go-live

Após a delegação NS (TASK-0054), repetir o smoke em `https://fbso.com.br` e registrar a evidência.
