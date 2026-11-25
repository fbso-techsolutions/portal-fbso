# 🔧 ENABLER-0005 — Modo manutenção (Worker + KV)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Categoria | Infraestrutura |
| Job Size | 2 |
| Habilita | Operação do portal — indisponibilidade técnica/comercial sem derrubar a infra |
| Dono | Infra (Lourival Louro) |
| Status | ✅ Revisado (2026-11-25) |

## 1. Objetivo

Permitir colocar o portal em **modo manutenção** (substituir o site por uma página de "em
manutenção") para necessidades **técnicas** (incidente, deploy, manutenção programada) ou
**comerciais** (indisponibilidade estratégica), **sem derrubar a infraestrutura** e **sem novo
deploy** para ligar/desligar.

## 2. Como funciona

- O Worker (ENABLER-0003) com rota catch-all lê um flag em **Cloudflare KV** (`maintenance`):
  - `on` → retorna HTML de manutenção (HTTP **503** + `Retry-After`).
  - `off` → serve os assets estáticos normalmente.
- **Toggle sem deploy**: `wrangler kv key put maintenance on/off` (ou dashboard/API).

> 📌 Preferir **KV Instant** (namespace pequeno, propagação proativa) para ativação quase imediata
> global — evita o eventual-consistency de até ~60s do KV clássico.

> 🛠️ **Esforço — dois momentos distintos:**
> - **Implementar (uma vez):** codificar o Worker + criar o KV namespace/binding + página HTML +
>   **1 deploy inicial**. Trabalho de desenvolvimento **pequeno** (reusa o Worker do ENABLER-0003).
> - **Usar (recorrente):** ligar/desligar = mudar a chave KV (`wrangler kv key put maintenance on/off`).
>   **Zero desenvolvimento, zero deploy** — comando/dashboard/API em segundos.

## 3. Escopo

### Entra
- Flag `maintenance` em KV controlando o modo (on/off).
- Página HTML de manutenção com branding + mensagem (uso técnico vs comercial).
- Resposta **503 + `Retry-After`** (preserva SEO/robôs).
- Exceções de rota (ex.: `/health`, `robots.txt`, `/privacidade`).

### Fora
- Feature-flag no app (React) — inadequado (exigiria deploy; e o JS precisaria estar no ar).
- Fila/controle de tráfego (Cloudflare Waiting Room — Business/Enterprise, outro caso de uso).

## 4. Critério de saída

- [ ] Flag `maintenance` em KV liga/desliga o modo manutenção **sem redeploy**.
- [ ] Em `on`, todas as rotas públicas retornam a página de manutenção (503 + `Retry-After`).
- [ ] Em `off`, o portal serve normalmente (sem regressão dos assets).
- [ ] Toggle documentado (comando/API) + acesso restrito (API token Cloudflare com escopo mínimo).

## 5. Dependências

- 🔒 **Travado por** ENABLER-0003 (Worker script + binding `ASSETS`).
