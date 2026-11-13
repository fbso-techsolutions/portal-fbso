# 💬 User Story: US-FEAT-0002.0004-0015 — Página Contato (canais)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0002](../epicos/EPIC-0002-experiencia-institucional.md) ➔ [FEATURE-0002.0004](../features/FEATURE-0002.0004-pagina-contato.md) ➔ `US-FEAT-0002.0004-0015` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-06 |
| Status | ✅ Revisado (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** uma página `/contato` com e-mail e canais comerciais, **para**
  iniciar contato com a FBSO.

## 2. Cenários (Gherkin)

- **Dado que** estou na navegação, **quando** clico em "Contato", **então** navego para `/contato`.
- **Dado que** carrego `/contato`, **quando** a página renderiza, **então** os canais (e-mail +
  links) aparecem.

## 3. Não funcionais

- Sem formulário/backend (Release 2) — só links/canais estáticos.
- Usa tokens e `Button`; canais vêm de `src/content/`.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
