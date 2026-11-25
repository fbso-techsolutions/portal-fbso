# 🎯 Hub de Pendências — FBSO Corporate Portal

> Questões que exigem **resposta/decisão** (dono + prazo) antes de avançar. Fonte única — itens de
> trabalho ficam no [backlog](../../docs/produto/backlog/BACKLOG-LIST.md); decisão pendente fica aqui.

## Abertas

| ID | Pendência | Dono | Prazo | Status |
|---|---|---|---|---|
| PENDENCY-0011 | Logo / identidade visual definitiva (símbolo/brand mark) — o molde usa um SVG geométrico provisório; identidade visual em produção pelo time de design (Brand/UI/UX — [equipe.md](equipe.md) §2.3) | Design (Susy Hanamura · Paloma Zeni · Hugo Milo) + PM/PO | — | 🔄 em andamento |
| PENDENCY-0015 | Preço/planos por SaaS + proposta de consultoria (desbloqueia FEATURE-0006.0004/0006.0005) | PO/PM | — | ⬜ aberta |

## Respondidas

| ID | Pendência | Decisão | Data |
|---|---|---|---|
| PENDENCY-0001 | ID do projeto | ✅ `PRJ-CORP-2026-0000-PORTAL` (área `CORP`) confirmado | 2026-11-11 |
| PENDENCY-0002 | Time do projeto | ✅ nomes e alocação definidos (equipe.md) | 2026-11-11 |
| PENDENCY-0003 | Calendário de sprints | ✅ 2 semanas/sprint a partir de 16/11/2026 | 2026-11-11 |
| PENDENCY-0005 | Páginas legais | ✅ **entram no MVP** com texto fixo/padrão (FEATURE-0002.0005) | 2026-11-11 |
| PENDENCY-0007 | Confirmar dev(s) do projeto | ✅ Dev frontend confirmado: **Alfredo Bento** (100%) — [equipe.md](equipe.md) §2.2/§3.1 | 2026-11-11 |
| PENDENCY-0008 | Promover template de task + guia para a platform-standards | ✅ Promovido: `template-task-v1.md` + `guia-tasks-planning.md` criados na platform-standards (ADR-004) | 2026-11-11 |
| PENDENCY-0006 | Renome `saas-rmr` → `saas-materiae` | ✅ repo renomeado no GitHub (`gh repo rename`); redirect do antigo para o novo | 2026-11-13 |
| PENDENCY-0010 | `coding-standards-react.md` inexistente na platform-standards | ✅ criado `coding-standards-react.md` (ADR-007) alinhado ao ESLint/Prettier/tsconfig do portal; ressalva do `eslint.config.js` removida | 2026-11-13 |
| PENDENCY-0009 | Assinatura do ADR-001 (Tech lead + Arquiteto) | ✅ assinado no próprio documento (Tech lead + Arquiteto) — status `✅ Decidida` | 2026-11-13 |
| PENDENCY-0004 | Subdomínio × domínio próprio para os SaaS | ✅ **domínio próprio por SaaS** (não subdomínio) — `fbso.com.br`, `fbsotechservices.com.br`, `fbsomercator.com.br`, `fbsofiscalia.com.br`, `fbsoeducatio.com.br`, `fbsomateriae.com.br` (+ reserva `fbsotechsolutions.com.br`/`fbsotech.com.br`) — [ADR-002](../../docs/tecnico/arquitetura/adrs/adr-002-dominios-saas.md) | 2026-11-13 |
| PENDENCY-0016 | Ferramenta de analytics | ✅ **GA4** (gtag.js client-side) + **Consent Mode v2** + banner próprio | 2026-11-23 |
| PENDENCY-0017 | Banner próprio vs CMP | ✅ **banner próprio** nesta fase | 2026-11-23 |
| PENDENCY-0018 | CRM alvo | ✅ **CRM próprio (simples)**, novo produto da empresa — a criar em breve | 2026-11-23 |
| PENDENCY-0019 | LGPD — base legal para cookies/analytics | ✅ **consentimento** (art. 7º-I LGPD) | 2026-11-23 |
| PENDENCY-0014 | Conta/propriedade GA4 + Measurement ID | ✅ conta `417444169` (FBSO-TCH-SOLUTIONS) · propriedade `565782510` (FBSO Tech Solutions Portal) · Measurement ID **`G-LCBF75K8KW`** · stream `16412526748` | 2026-11-25 |
| PENDENCY-0012 | Transferência internacional (art. 33 LGPD) | ✅ DPT aceito no console · parecer jurídico: art. 33, II (SCCs) + DPF · registrado no ROPA · adendo LGPD do Google cobre o caso | 2026-11-25 |
| PENDENCY-0013 | Texto de privacidade | ✅ Política + Termos em `src/content/legais.ts` (art. 33, retenção 14 meses, art. 18, DPO Daniel Vini) · páginas `Privacidade`/`Termos` atualizadas · gate (typecheck/lint/test) verde | 2026-11-25 |

> **Ritual:** atualizar a cada decisão; dono deve existir no [equipe.md](equipe.md).
