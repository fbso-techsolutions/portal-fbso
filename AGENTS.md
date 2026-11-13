# 🤖 AGENTS — Regras de operação (para agentes/IA)

> Regras de trabalho **neste repositório**. A constituição da org e os templates de processo
> vivem na [`platform-standards`](https://github.com/fbso-techsolutions/platform-standards) —
> **linke, não copie**. Leia o [INTENT.md](INTENT.md) antes de qualquer coisa.

## 1. Convenções da org (obrigatórias)

- **"Promover o genérico, manter o específico."** O que é transversal a mais de um repo sobe para
  `platform-standards`; aqui vive só o delta do portal.
- **"Aponta, não copia."** Um documento vive em um só lugar; referências são links.
- **IDs e templates de processo** (épico, feature, story, enabler, sprint, task, release, backlog):
  [`standards/agile/`](https://github.com/fbso-techsolutions/platform-standards/tree/main/standards/agile).
  IDs seguem `{ENTIDADE}-{NNNN}` ([padrão](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/padrao-identificacao-entidades.md)).

## 2. Onde cada coisa vive — leia conforme a tarefa

| Quando a tarefa é… | Leia | O que responde |
|---|---|---|
| Iniciar a sessão | [INTENT.md](INTENT.md) | O que é, para onde vai, decisões abertas |
| Visão / marca / posicionamento | [docs/negocio/](docs/negocio) | Por quê, hierarquia de marca, domínios |
| Priorizar / planejar | [docs/produto/backlog/BACKLOG-LIST.md](docs/produto/backlog/BACKLOG-LIST.md) | Fila única, ondas, status |
| Criar módulo / rota / tabela | [docs/tecnico/arquitetura/ARCHITECTURE.md](docs/tecnico/arquitetura/ARCHITECTURE.md) | Topologia, fluxo de dados, padrões |
| Dúvida de "por que X e não Y" | [docs/tecnico/arquitetura/adrs/](docs/tecnico/arquitetura/adrs/) | ADRs — decisões e alternativas descartadas |
| Auth / dados sensíveis / secrets | [SECURITY (baseline)](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/security/SECURITY.md) | Baseline de segurança (fonte única) |
| Escrever / alterar código | [standards/engineering/](https://github.com/fbso-techsolutions/platform-standards/tree/main/standards/engineering) · [agile/](https://github.com/fbso-techsolutions/platform-standards/tree/main/standards/agile) | Padrões de código, commits, IDs de entidade |
| Especificar entregas | [projects/PRJ-CORP-2026-0000-PORTAL/](projects/PRJ-CORP-2026-0000-PORTAL) | PRD, B-REQ, épicos, features, stories, sprints |
| Implementar | [src/](src) · [public/](public) | Código e assets |

## 3. Fluxo de trabalho (este projeto)

`B-REQ → épico → feature → user story → sprint → task → release`. Features nascem como linha
`Tipo=Feature, Check=💡` no backlog e são detalhadas em stories pelo PM/PO. Uma story só entra em
sprint quando `Status = ✅ Revisado/Aprovado` (gate de documentação). Fonte: [`guia-invest-enablers-spike`](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/agile/guia-invest-enablers-spike.md).

## 4. Limites

- **Não** alterar `platform-standards/` (nem outros repos) sem decisão explícita — e quando o fizer,
  registrar ADR/pendência no lugar certo.
- **Não** inventar IDs, donos, datas ou escopo: usar os existentes ou deixar `— (a preencher)`.
- **Não** duplicar a matriz de rastreabilidade dentro de cards (card **aponta** para
  `rastreabilidade.md`).
- Mudou escopo/trava de um item? Atualize o card **+** `rastreabilidade.md` **+** `BACKLOG-LIST.md`
  no mesmo passo (regra viva).

## 5. Stack do código (ao implementar)

React + TS + Vite + Tailwind CSS v4 + React Router v8 (framework mode, `prerender: true`).
Conteúdo institucional e catálogo SaaS são **dados** em `src/content/` (nunca JSX hardcoded).
Pré-renderização por página (título, meta, Open Graph, `sitemap.xml`, `robots.txt`).
Build estático → `dist/client/`; deploy via `wrangler` (Cloudflare Workers + Static Assets), domínio `fbso.com.br`.

**Convenções de código** — segue o padrão da org
[`coding-standards-react.md`](https://github.com/fbso-techsolutions/platform-standards/blob/main/standards/engineering/coding-standards-react.md)
(ESLint flat · Prettier · `tsconfig` `strict` · alias `@/` → `src/`).

**Operação (detalhes):**
- Node **24.22.1** — `.nvmrc` + `engines` (use `nvm use`).
- Gate local antes do PR: `npm run lint && npm run format:check && npm run typecheck`.
- CI (PR): check obrigatório `lint → typecheck → build`; merge → **deploy automático** na Cloudflare.
