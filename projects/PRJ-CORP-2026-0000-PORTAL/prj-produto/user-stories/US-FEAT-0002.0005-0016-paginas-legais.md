# 💬 User Story: US-FEAT-0002.0005-0016 — Páginas legais (privacidade/termos)

| Campo | Valor |
|---|---|
| Projeto | FBSO Corporate Portal · PRJ-CORP-2026-0000-PORTAL |
| Mapeamento | [EPIC-0002](../epicos/EPIC-0002-experiencia-institucional.md) ➔ [FEATURE-0002.0005](../features/FEATURE-0002.0005-paginas-legais.md) ➔ `US-FEAT-0002.0005-0016` |
| Prioridade | Must |
| Estimativa | 2 SP |
| Rastreio | B-REQ-01 |
| Status | 📝 Rascunho (2026-11-13) |

## 1. Declaração

- **Como** visitante, **quero** páginas `/privacidade` e `/termos` com texto padrão, **para**
  transparência e conformidade.

## 2. Cenários (Gherkin)

- **Dado que** estou no footer, **quando** clico em "Privacidade"/"Termos", **então** navego para as
  respectivas rotas.
- **Dado que** carrego uma página legal, **quando** ela renderiza, **então** o texto padrão aparece.

## 3. Não funcionais

- Texto **fixo/padrão** (decisão `PENDENCY-0005` ✅); revisão jurídica é pós-MVP.
- Usa tokens e `Section`; links no footer vêm da FEATURE-0002.0001.

**Verificação INVEST:** I ✅ · N ✅ · V ✅ · E ✅ · S ✅ · T ✅
