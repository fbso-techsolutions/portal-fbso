# ✨ FEATURE-0001.0002 — Design System e identidade visual

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Épico | [EPIC-0001 — Fundação e Engenharia](../epicos/EPIC-0001-fundacao-engenharia.md) |
| B-REQ dona | B-REQ-02 |
| Prioridade | Onda 1-Must (MVP) |
| 🔒 Travada por | — (livre) |
| Status | 📝 Rascunho (2026-11-11) |

## 1. Objetivo de negócio

Estabelecer a identidade visual (tokens) e os componentes base que darão consistência ao portal.

## 2. Escopo

### Entra
- Design tokens (cores, tipografia, espaçamento) em `src/styles/` (Tailwind theme / CSS variables).
- Componentes base `ui/` (Button, Card, Section, Badge).
- Referência de marca em [BRAND-GUIDELINES](../../../../docs/negocio/branding/BRAND-GUIDELINES.md).

### Fora
- Identidade visual definitiva (logo) — a confirmar com o PO.

## 5. User stories desta feature

| ID | História |
|---|---|
| [US-FEAT-0001.0002-0006](../user-stories/US-FEAT-0001.0002-0006-design-tokens.md) | Definir design tokens (cores/tipografia/espaçamento) |
| [US-FEAT-0001.0002-0007](../user-stories/US-FEAT-0001.0002-0007-componentes-ui.md) | Criar componentes base `ui/` (Button, Card, Section, Badge) |

## 7. Critérios de aceite (DoD)

- [ ] Tokens consumíveis via Tailwind theme, sem valores hardcoded nos componentes.
- [ ] Componentes base `ui/` (Button, Card, Section, Badge) tipados, acessíveis e responsivos.
