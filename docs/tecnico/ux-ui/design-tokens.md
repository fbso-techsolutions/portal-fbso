# 🎨 Design Tokens — referência do protótipo

> Tokens extraídos da maquete da Home (`estudo/ideias1/index.html`). Servem de **base para o tema
> Tailwind** (FEATURE-0001.0002, Sprint 2). Fonte visual oficial:
> [BRAND-GUIDELINES](../../negocio/branding/BRAND-GUIDELINES.md).

| Campo | Valor |
|---|---|
| Âmbito | Design tokens (cores, tipografia, raio, sombra) |
| Status | 🚧 Referência — a aplicar no tema Tailwind na Sprint 2 |

## 1. Cores base

| Token | Valor | Uso na maquete |
|---|---|---|
| `--navy` | `#0B192C` | fundo do hero, topbar, footer |
| `--navy-2` | `#10243d` | variação de fundo |
| `--blue` | `#1E88E5` | cor primária (botões, links) |
| `--mint` | `#00E676` | accent / destaque |
| `--ink` | `#142238` | texto principal |
| `--muted` | `#65748a` | texto secundário |
| `--paper` | `#f5f8fc` | fundo de seções claras |
| `--white` | `#ffffff` | fundo de cards |
| `--line` | `#e4eaf2` | bordas |

## 2. Cores dos produtos SaaS (catálogo)

| Produto | Cor | Uso |
|---|---|---|
| Educatio | `#5554ce` | símbolo do card |
| Fiscalia | `#07865a` | símbolo do card |
| Mercator | `#c76a13` | símbolo do card |
| Materiae | `#1475c9` | símbolo do card |

## 3. Tipografia

- **Família:** `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Escala:** `h1` `clamp(2.7rem, 5.2vw, 4.65rem)` · `h2` `clamp(2rem, 3.5vw, 3rem)` · corpo `~1rem` · legenda `~0.8rem`.

## 4. Outros

| Token | Valor |
|---|---|
| `--radius` | `20px` |
| `--shadow` | `0 18px 50px rgba(11,25,44,.10)` |

## 5. Como usar (Sprint 2)

Traduzir para o tema Tailwind v4 via `@theme` em `src/styles/index.css` (ex.: `--color-navy: #0B192C`),
conforme a FEATURE-0001.0002. Até lá, usar valores arbitrários (`bg-[#0b192c]`) como prova de conceito
— é o que a TASK-0009 valida.
