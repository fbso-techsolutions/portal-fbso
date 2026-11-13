# ⚙️ TASK-0001 — Criar repositório `portal-fbso` na org GitHub

| Campo | Valor |
|---|---|
| Origem | [ENABLER-0001 — Repositório e ambiente GitHub](../enablers/ENABLER-0001-repositorio-ambiente-github.md) |
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Sprint | [Sprint 1 — Fundação](../../prj-produto/sprints/sprint-0001-fundacao.md) · 16/11–27/11 |
| Dono | Francisco Oliveira |
| Esforço | 2h |
| Depende de | — |

## 1. Objetivo

Criar o repositório `fbso-techsolutions/portal-fbso` na organização, com as configurações de base,
para dar início ao scaffold e ao CI/CD.

## 2. O que implementar/entregar

- Criar o repo `portal-fbso` na org `fbso-techsolutions` (visibilidade: **privada**).
- Descrição e tópicos coerentes com o [README do projeto](../../../README.md).
- Aplicar os health files herdados do repo [`.github` da org](https://github.com/fbso-techsolutions/.github)
  (issue/PR templates, CODE_OF_CONDUCT, SECURITY) — **aponta, não copia**.
- Definir branch padrão como `main`.
- Não adicionar licença/`.gitignore` duplicados — o `.gitignore` já existe no espelho local (entra no TASK-0002).

## 3. Critério de saída (evidência)

- [x] Repo acessível em `https://github.com/fbso-techsolutions/portal-fbso` (URL/print).
- [x] Branch padrão `main` confirmada.
- [x] Health files da org visíveis na interface (issue/PR templates ativos).
