# ADR-002 - Modelo de domínios dos SaaS (domínio próprio por produto)

| Campo | Conteúdo |
|---|---|
| Data / Status | 2026-11-13 · ✅ **Decidida** |
| Contexto | O portal e os produtos SaaS precisavam de um modelo de URL: **subdomínio** (`educatio.fbso.com.br`) × **domínio próprio** (`fbsoeducatio.com.br`). A escolha afeta quais domínios registrar no registro.br, o desenho do SSO da Release 3 e o roteamento da página de produto (FEATURE-0004.0002). Pendência de origem: `PENDENCY-0004`. |
| Decisão | Cada produto SaaS usa **domínio próprio (apex)**, não subdomínio. Domínios definitivos: `fbso.com.br` (portal corporativo) · `fbsotechservices.com.br` (divisão TechServices/consultoria) · `fbsomercator.com.br` (Varejo) · `fbsofiscalia.com.br` (Contábil) · `fbsoeducatio.com.br` (Educação) · `fbsomateriae.com.br` (Ciclo de vida de ativos). **Reserva/backup:** `fbsotechsolutions.com.br` · `fbsotech.com.br`. |
| Justificativa | (1) Domínio próprio dá identidade/SEO independentes por produto e isola o risco de marca; (2) evita depender de um único domínio-raiz para todos os produtos; (3) permite evoluir cada SaaS para seu próprio Workers/tenant sem reescrever o roteamento; (4) os dois domínios de reserva protegem contra perda/compra de terceiros e cobrem variações da marca ("FBSO Technology Solutions" / "FBSO Tech"). |
| Alternativas rejeitadas | **Subdomínio único** (`*.fbso.com.br`) — acopla todos os produtos à raiz (um problema no raiz derruba todos), SEO por produto mais fraco e troca futura de provedor mais custosa; **domínio próprio + subdomínio híbrido** — adiciona complexidade de roteamento sem ganho para o estágio atual. |
| Consequências | Registrar/comprar os 8 domínios no registro.br; o SSO da R3 passa a tratar **origem por domínio** (cada domínio = um tenant/produto); a página de produto (FEATURE-0004.0002) aponta para o domínio do respectivo SaaS; `DEPLOYMENT.md` e o guia de domínios refletem a lista definitiva. |
| Assinatura | Arquiteto (Bolismar da Silva) + PM/PO (Alessandra Neves) — decisão registrada em 2026-11-13 |
