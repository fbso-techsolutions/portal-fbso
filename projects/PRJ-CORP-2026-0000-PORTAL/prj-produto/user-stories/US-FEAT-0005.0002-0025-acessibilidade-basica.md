# 💬 User Story: US-FEAT-0005.0002-0025 — Acessibilidade básica (semântica/contraste/foco)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0005](../epicos/EPIC-0005-seo-publicacao.md) ➔ [FEATURE-0005.0002](../features/FEATURE-0005.0002-acessibilidade-responsividade.md) ➔ `US-FEAT-0005.0002-0025` |
| Prioridade | Must |
| Estimativa | 3 SP |
| Rastreio | B-REQ-07 |
| Status | ✅ Revisado (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** acessibilidade básica (semântica, contraste, foco, alt text), **para**
  usar o portal por todos os públicos.

## 2. Cenários (Gherkin)

- **Dado que** navego por teclado, **quando** percorro a página, **então** o foco é visível e a
  ordem é lógica.
- **Dado que** há imagens, **quando** inspeciono, **então** têm `alt` descritivo; contraste ≥ WCAG AA.

## 3. Não funcionais

- Semântica HTML correta; auditoria formal WCAG completa é pós-MVP.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
