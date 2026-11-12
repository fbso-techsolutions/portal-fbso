# 📚 Backlog do produto — a fila única

> Regras e semântica do [BACKLOG-LIST.md](BACKLOG-LIST.md). Âmbito **produto** — vale para todos os
> projetos do portal.

## 1. O que entra

- **Entra como item:** User Story · Enabler · Architectural Runway · Task · Ocorrência.
- **Entra como linha de demanda:** Feature ainda **sem stories** (`Tipo=Feature`, `Check=💡`).
- **Não entra:** Épico (hierarquia) · decisão/pendência → hub do projeto.

## 2. Colunas

`Check` · `Projeto` · `Feature` · `Tipo` · `ID` · `Título` · `Contexto` · `Est.` · `Dono` ·
`Entregue por` · `Depende de` · `Travada por` · `Status` · `Task` · `Release`.

`Check` (ciclo de vida) é **derivado** de `Status` + `Entregue por` + `Tipo`:

| Check | Derivação |
|---|---|
| 🏁 Concluído | `Status` = ✅ |
| 🚫 Cancelado | `Status` = ❌ |
| 👷 Em implementação | tem sprint e `Status` ∈ {⬜, 🔄} |
| 💡 Em documentação | sem sprint **ou** `Tipo=Feature` |
| 🚩 Não-iniciado | requisito sem épico (na rastreabilidade) |

## 3. Status (execução)

⬜ A fazer · 🔄 Em execução · ✅ Entregue · 🕓 Adiada · ❌ Cancelada. `✅ Entregue` exige DoD +
smoke test em produção.

## 4. Manutenção

Item novo → linha no mesmo passo. Feature detalhada → a linha `Tipo=Feature` é substituída pelas
stories. **Aponta, não copia:** a especificação mora no documento do item.

> 📌 Fonte do processo: [platform-standards/standards/agile/](https://github.com/fbso-techsolutions/platform-standards/tree/main/standards/agile).
