# 🚀 DEPLOYMENT — caminho das pedras

| Campo | Valor |
|---|---|
| Âmbito | Como publicar o portal na Cloudflare e apontar o domínio |
| Status | ✅ v1 |

## 1. Fluxo ponta a ponta

```
registro.br (compra fbso.com.br)
   → apontar NS do domínio para a Cloudflare
        → adicionar o site na Cloudflare (free tier)
             → deploy do dist/client/ (wrangler deploy) via GitHub Actions
                  → domínio custom + HTTPS
```

## 2. Pré-requisitos

- Domínio `fbso.com.br` registrado no [registro.br](https://registro.br).
- Conta Cloudflare com o site adicionado.
- `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID` como secrets no GitHub.
- Repo `fbso-techsolutions/portal-fbso` com o workflow em `.github/workflows/deploy.yml`.

## 3. Build local

```bash
npm ci
npm run build        # gera dist/client/ (prerender + assets estáticos)
npm run preview      # valida localmente
```

## 4. Deploy (Cloudflare Workers + Static Assets)

`wrangler.jsonc` declara os assets estáticos (`assets.directory = "./dist/client"`); o deploy é
`wrangler deploy`. O CI (push na `main`) roda lint → typecheck → build → deploy.

```bash
npx wrangler deploy
```

## 5. DNS no registro.br

**Nameservers da Cloudflare** (zona `fbso.com.br` — obtidos via ENABLER-0002, 2026-11-12):

| Servidor | Endereço |
|---|---|
| Servidor 1 | `ray.ns.cloudflare.com` |
| Servidor 2 | `tess.ns.cloudflare.com` |

**Roteiro de delegação:**
1. No [registro.br](https://registro.br), alterar os **servidores DNS** do `fbso.com.br` para os dois
   nameservers acima.
2. Na Cloudflare, criar os registros de **DNS** (CNAME `@`/`www` → worker/assets).
3. Validar propagação e forçar HTTPS (SSL/TLS → Full/Strict).

> `.com.br` no free tier da Cloudflare é suportado (basta delegar o NS no registro.br).
> ⚠️ A troca efetiva de NS é feita no **go-live** (FEATURE-0005.0003); até lá, o deploy usa a URL
> preview da Cloudflare.

## 6. Evolução (Release 2/3)

- R2: adicionar **Workers** (APIs/analytics) no mesmo `wrangler.jsonc` — sem trocar de provedor.
- R3: apontar os fluxos de login para o **provedor de identidade central** (OIDC).
