# 🎨 BRAND-GUIDELINES — FBSO Technology Solutions

| Campo | Valor |
|---|---|
| Âmbito | Identidade de marca (nomes, hierarquia, produtos, domínios) |
| Status | ✅ v1 — identidade **visual** (logo, cores, tipografia) a definir na Sprint 2 |

## 1. Hierarquia de marca

| Camada | Nome | Uso |
|---|---|---|
| **Marca corporativa** | FBSO TechSolutions | Assinatura curta (marketing, social) |
| **Nome institucional completo** | FBSO Technology Solutions | Documentos, rodapé, legal |
| **Divisão de consultoria** | FBSO TechServices | Nome curto da divisão |
| **Nome descritivo da divisão** | FBSO Technology Services | Uso formal da divisão |

> ⚠️ **FBSO TechServices é a divisão de consultoria**, não a empresa. O portal representa a
> **FBSO Technology Solutions**; TechServices é uma seção interna.

## 2. Produtos SaaS

| Identificador | Descritivo |
|---|---|
| **Educatio** | Plataforma de Educação — gestão de processos e serviços educacionais — by FBSO |
| **Fiscalia** | Plataforma de Contabilidade — gestão de processos e operações contábeis — by FBSO |
| **Mercator** | Plataforma de Varejo — gestão de operações e processos comerciais — by FBSO |
| **Materiae** | Gestão integrada do ciclo de vida de ativos e economia circular — by FBSO |

> **Materiae** = nome do repo `saas-materiae` (antigo `saas-rmr` — renome **feito** em 2026-11-13).

## 3. Domínios (registro.br)

| Domínio | Papel | Status |
|---|---|---|
| `fbso.com.br` | **Default da empresa** | em contratação |
| `fbsotechservices.com.br` | Consultoria (TechServices) | em contratação |
| `fbsomercator.com.br` | SaaS Varejo | em contratação |
| `fbsofiscalia.com.br` | SaaS Fiscal/Contábil | em contratação |
| `fbsoeducatio.com.br` | SaaS Educação | em contratação |
| `fbsomateriae.com.br` | SaaS Ciclo de Vida | em contratação |
| `fbsotechsolutions.com.br` | Reserva (backup) | em contratação |
| `fbsotech.com.br` | Reserva (backup) | em contratação |

> **Decisão tomada (2026-11-13):** **domínio próprio por SaaS** (não subdomínio) — ver
> [ADR-002](../../tecnico/arquitetura/adrs/adr-002-dominios-saas.md).

## 4. Identidade visual (a definir na Sprint 2)

| Item | Status |
|---|---|
| Logo / símbolo | ⏳ a definir |
| Paleta de cores | ⏳ a definir (design tokens em `src/styles/`) |
| Tipografia | ⏳ a definir |
| Tom de voz | ⏳ a definir |

> Quando definido, os tokens viram `src/styles/` (design tokens) e este documento recebe a
> referência. Se os SaaS precisarem da mesma identidade, extrair para um `lib-` compartilhado.
