# Escopo — Página E-commerce de Elite (`/ecommerce`)

**Versão:** 1.0 | **Data:** 11 de março de 2026
**Objetivo:** Página de venda do produto Keycommerce — plataforma e-commerce white-label + serviços de desenvolvimento web (sites, landing pages, SaaS).

---

## 1. Conceito Visual: "Crystal to Deep"

A página usa uma **transição narrativa de cor** que acompanha a jornada do visitante:

```
TOPO (Confiança + Modernidade)     MEIO (Produto em Ação)        BASE (Infraestrutura + Autoridade)
┌─────────────────────┐    ┌──────────────────────┐    ┌──────────────────────────┐
│  Crystal Tech       │    │  Transição Dinâmica   │    │  Deep Infrastructure     │
│  Fundo claro/gelo   │───▶│  Claro → Zinc-900     │───▶│  Zinc-950 / Preto        │
│  Glassmorphism leve │    │  Accordion interativo  │    │  Dados técnicos          │
│  Notebook + Aura    │    │  Cases reais em ação   │    │  Parceria VTS            │
└─────────────────────┘    └──────────────────────┘    └──────────────────────────┘
```

### DNA Compartilhado com a Vitrine
- **Tipografia:** Inter (UI) + JetBrains Mono (dados técnicos) — mesma da vitrine
- **Gradiente brand:** Orange (#f97316) → Pink (#ec4899) → Purple (#a855f7)
- **Micro-interações:** Mouse glow, hover gradient borders, scroll reveal
- **Componentes reusados:** Navbar (com menu Soluções), Footer, MouseGlow, CookieBanner, WhatsAppButton

### O que MUDA nesta página
- **Hero começa claro** (Crystal Tech) em vez do dark da vitrine — diferencia o produto
- **Transição light→dark** durante o scroll — narrativa visual
- **Accordion de imagens** como elemento central — showcase do produto
- **Seção técnica com estética "terminal/infra"** — credibilidade para decisores técnicos

---

## 2. Estrutura de Seções (10 seções)

### Seção 1 — HERO: "Crystal Tech" (Fundo Claro)
**Background:** Gradiente sutil de `#f8f9fa` (gelo) para `#ffffff` (branco perolado)
**Layout:** Grid 2 colunas — texto à esquerda, visual à direita

**Coluna Esquerda:**
- Badge: `PRODUTO PRONTO • DEPLOY EM 48H`
- Headline: **"Lojas virtuais que vendem enquanto você dorme"**
- Subtítulo: "Plataforma e-commerce completa com checkout inteligente, estoque blindado contra overselling e recomendações personalizadas por IA. Pronta para o seu próximo grande drop."
- CTA primário: `Quero minha loja` (botão sólido dark → WhatsApp)
- CTA secundário: `Ver demonstração` (outline → scroll para accordion)
- Trust badges inline: "PIX + Cartão + Boleto" | "Etiqueta automática" | "LGPD Compliant"

**Coluna Direita:**
- Notebook mockup inclinado (CSS 3D transform com perspective)
- Na tela do notebook: screenshot real da Guaradise ou mockup do dashboard
- Aura/glow laranja vibrante atrás do notebook (radial-gradient)
- Parallax leve no mouse move (mesma técnica do FloatingCube da vitrine)

**Referência:** Imagem Peach enviada — notebook com aura colorida, fundo claro, glassmorphism

---

### Seção 2 — NÚMEROS DE IMPACTO (Fundo Claro)
**Background:** Branco puro
**Layout:** 4 colunas com números animados (countUp on scroll)

| Métrica | Valor | Detalhe |
|---------|-------|---------|
| Tempo de carregamento | < 0.9s | Guaradise real |
| Uptime garantido | 99.9% | Infraestrutura Docker |
| Gateways de pagamento | 2+ | MercadoPago + AbacatePay |
| Score técnico | 85.8 | Auditoria independente |

**Estilo:** Números grandes em `gradient-brand-text`, labels em zinc-500. Mesma linguagem visual da TrustBar da vitrine mas em versão light.

---

### Seção 3 — ACCORDION SHOWCASE: "Seu E-commerce em Ação" (Transição Light → Mid)
**Background:** Gradiente de `#ffffff` para `#27272a` (zinc-800) — a transição começa aqui
**Layout:** Grid 2 colunas — texto à esquerda, accordion à direita

**Coluna Esquerda:**
- Título: **"Cada detalhe pensado para converter"**
- Descrição curta de cada item do accordion (muda com o item ativo)
- Badges de features relacionadas ao item ativo

**Coluna Direita — Interactive Image Accordion:**
5 painéis verticais com hover para expandir:

| # | Título | Imagem/Visual | Glow |
|---|--------|---------------|------|
| 1 | **Vitrine Inteligente** | Homepage com produtos, badges "Lançamento", countdown de drop | Laranja |
| 2 | **Checkout Blindado** | Tela de checkout com PIX QR code, timer de expiração | Verde |
| 3 | **Recomendações IA** | Seção "Você também vai gostar" com cards de produto | Roxo |
| 4 | **Painel Admin** | Dashboard com métricas, pedidos recentes, estoque | Azul |
| 5 | **Email Automático** | Preview de email de confirmação de pedido, white-label | Pink |

**Interação:**
- Hover expande o painel (400px) com transição `duration-700 ease-in-out`
- Painéis inativos colapsam (60px) com título rotacionado 90°
- Dark overlay no fundo de cada painel para legibilidade do texto
- Ao expandir, descrição na coluna esquerda faz crossfade para o conteúdo correspondente

**Nota técnica:** Como não temos screenshots reais para todos os painéis, usaremos ilustrações CSS/SVG estilizadas (mockups abstratos com as cores brand) — mesma abordagem das animações da seção Soluções da vitrine. Quando houver screenshots reais, substituímos.

---

### Seção 4 — SOLUÇÕES WEB: "Além do E-commerce" (Fundo Mid-Dark)
**Background:** `#18181b` (zinc-900) — transição completa para dark
**Layout:** Bento Grid 2x2

Esta seção expande o escopo: a Keymatic não faz só e-commerce, também faz sites, landing pages e SaaS.

| Card | Título | Descrição | Ícone |
|------|--------|-----------|-------|
| **Sites Institucionais** | Presença digital profissional | Sites rápidos, responsivos e otimizados para SEO. Do institucional ao portal completo. | Globe |
| **Landing Pages** | Páginas que convertem | Landing pages para lançamentos, campanhas e captação de leads. Foco em conversão e velocidade. | Rocket |
| **SaaS & Dashboards** | Produtos digitais sob medida | Painéis administrativos, sistemas internos e produtos SaaS com autenticação, billing e analytics. | LayoutDashboard |
| **E-commerce Personalizado** | Para quem precisa de mais | Quando a plataforma padrão não basta: integrações custom, marketplaces e funcionalidades sob demida. | ShoppingBag |

**Estilo:** `card-gradient-border` (Raycast-style) com glow no hover. Mesma linguagem dos cards da vitrine.

---

### Seção 5 — FEATURES GRID: "O que vem incluso" (Fundo Dark)
**Background:** `#09090b` (zinc-950)
**Layout:** Grid 3x3 com ícones minimalistas

Features do e-commerce organizadas em 3 categorias:

**Vendas & Conversão:**
- Checkout inteligente (PIX + Cartão + Boleto)
- Recuperação de carrinho abandonado (email + cupom automático)
- Motor de recomendação com 14 sinais de IA

**Gestão & Operação:**
- Estoque 3-pool blindado contra overselling
- Etiqueta de frete automática (Melhor Envio)
- Drops com countdown e lançamento automático

**Segurança & Confiança:**
- 2FA para administradores
- CSP com nonces criptográficos
- Rate limiting por IP
- Admin "stealth" (404 para não-staff)
- Backups automáticos diários
- LGPD compliance nativa

**Estilo:** Cards `card-dark` com ícone em `gradient-brand`, título em white, descrição em zinc-400. Hover com `card-gradient-border`.

---

### Seção 6 — CASE REAL: Guaradise (Fundo Dark)
**Background:** `#09090b` com glow roxo sutil
**Layout:** Grid 2 colunas — métricas à esquerda, visual à direita

**Coluna Esquerda:**
- Badge: `CASE DE SUCESSO`
- Título: **"Guaradise: de manual para automático"**
- Parágrafo: A história da migração — como a loja de moda ganhou checkout automático, etiquetas Melhor Envio e estoque blindado
- Métricas before/after:
  - Tempo de carregamento: `~3s → 0.9s`
  - Taxa de conversão: `~2% → 3.8%`
  - Vendas em Drops: `Manual → Automático`
- Testimonial: "Com a infraestrutura da Keymatic, nossa loja de roupas ganhou performance e estabilidade para aguentar lançamentos sem cair." — Equipe Guaradise

**Coluna Direita:**
- Screenshot/mockup da Guaradise em dispositivo mobile
- Badge "guaradise.com.br" com link externo

---

### Seção 7 — INFRAESTRUTURA TÉCNICA: "Deep Infrastructure" (Fundo Dark Profundo)
**Background:** `#09090b` com bg-grid-subtle (mesma grid da vitrine)
**Layout:** Inspirado no TechDifferentials da vitrine — health panel + cards

**Painel principal — Stack de Produção:**
Visualização estilo "terminal" ou "status board":

```
┌─ STACK ──────────────────────────────────┐
│  Django 6.0          ● RUNNING           │
│  PostgreSQL 15       ● HEALTHY           │
│  Redis 7             ● CONNECTED         │
│  Worker (django-q2)  ● 2 WORKERS ACTIVE  │
│  Docker Compose      ● 4 CONTAINERS      │
│  Gunicorn            ● 3 WORKERS         │
└──────────────────────────────────────────┘
```

**Cards técnicos (2x2):**

| Card | Título | Conteúdo |
|------|--------|----------|
| **Inventário 3-Pool** | `select_for_update()` + lock pessimista. Overselling é impossível. | Diagrama: Available → Reserved → Sold |
| **Webhook Dedup** | Duas fases de deduplicação. Pagamento nunca é processado 2x. | Badge: "Score 85.8/100" |
| **Task Queue** | Emails, etiquetas e rastreio processados em background. Se o worker cair, fallback síncrono. | Uptime: 99.9% |
| **Deploy Docker** | 4 containers orquestrados. Coolify + VPS. Zero downtime com advisory lock nas migrations. | Badge: "1 comando para subir" |

**Tipografia:** JetBrains Mono para dados técnicos, labels em zinc-500 uppercase.

---

### Seção 8 — COMO FUNCIONA: "Do zero à loja no ar" (Fundo Dark)
**Background:** Gradiente sutil de zinc-950 para zinc-900
**Layout:** Timeline horizontal com 4 etapas

| Etapa | Título | Descrição | Tempo |
|-------|--------|-----------|-------|
| 01 | **Briefing** | Entendemos seu negócio, público e objetivos. Definimos identidade visual e funcionalidades. | Dia 1 |
| 02 | **Setup & Identidade** | Configuramos a plataforma: logo, cores, SMTP, gateway de pagamento. Tudo pelo painel admin — zero código. | Dias 2-3 |
| 03 | **Produtos & Teste** | Você cadastra produtos, configura frete e cupons. Testamos todo o fluxo: compra, pagamento, etiqueta. | Dias 4-7 |
| 04 | **Lançamento** | Deploy na VPS, domínio configurado, SSL automático. Sua loja está no ar. | Dia 7-14 |

**Estilo:** Cards com número grande em `gradient-brand-text`, linha conectora entre etapas (gradient line), animação de scroll reveal sequencial.

---

### Seção 9 — INSTITUCIONAL VTS: "20 Anos de Tradição" (Fundo Dark)
**Background:** `#09090b`
**Layout:** Centrado, tipografia forte

- Selo: Logo VTS + Logo Keymatic lado a lado
- Headline: **"Da assistência técnica à automação com IA"**
- Texto: "A VTS Informática nasceu em 2006 em São Mateus, São Paulo. Por 20 anos construímos reputação atendendo empresas e residências da região. Agora, como Keymatic, levamos essa mesma solidez para o digital — e-commerce, automação e inteligência artificial para quem quer crescer de verdade."
- Dados:
  - `20+` anos de mercado
  - `São Mateus, SP` — presença local
  - `CNPJ 03.477.617/0001-90` — transparência total

**Estilo:** Fundo com glow brand muito sutil. Tipografia grande, espaçamento generoso. Feeling de "carta de fundador".

---

### Seção 10 — CTA FINAL + CONTATO (Fundo Dark Profundo)
**Background:** `#09090b` com aura gradient no CTA
**Layout:** CTA centrado + dados de contato

**CTA:**
- Headline: **"Pronto para lançar sua loja?"**
- Subtítulo: "Diagnóstico gratuito. Sem compromisso. Sem enrolação."
- Botão: `Falar com especialista` (WhatsApp) — botão grande, gradient-brand, com glow
- Texto auxiliar: "Ou se preferir: contato@keymatic.com.br"

**Contato (abaixo do CTA):**
- Endereço: Rua Dr. Aureliano da Silva Arruda, 625, São Mateus, São Paulo — SP, 03960-050
- WhatsApp: (11) 93429-4637
- Email: contato@keymatic.com.br
- Selo: "Uma marca VTS Informática · 20 anos de história"

---

## 3. Interações & Animações

| Elemento | Técnica | Performance |
|----------|---------|-------------|
| Notebook Hero | CSS `transform: perspective() rotateY() rotateX()` + mouse parallax (Framer Motion `useMotionValue`/`useSpring`) | GPU-accelerated |
| Aura Laranja | `radial-gradient` com `blur(120px)` em div posicionada | Apenas 1 blur element |
| Image Accordion | `width` transition com `duration-700 ease-in-out`, React state `onMouseEnter` | CSS transitions (não Framer) |
| Transição Light→Dark | CSS `background` gradiente longo (via seção wrapper ou gradiente entre seções) | Zero JS |
| Números animados | Framer Motion `useInView` + counter animation | Trigger once |
| Scroll Reveal | Framer Motion `whileInView` com `opacity` + `translateY` | `viewport={{ once: true }}` |
| Cards hover | `card-gradient-border::before` opacity transition | CSS only |
| Stack Panel | Animação de "typing" para status dots (pulse CSS) | Keyframe CSS |
| Mouse Glow | Componente global `MouseGlow` (já existe) | requestAnimationFrame |

---

## 4. Responsividade

| Breakpoint | Adaptação |
|------------|-----------|
| **Desktop (lg+)** | Grid 2 colunas no Hero, Accordion horizontal, Feature grid 3x3 |
| **Tablet (md)** | Hero empilhado (texto em cima, notebook embaixo), Accordion 3 painéis visíveis, Feature grid 2x2 |
| **Mobile (sm)** | Tudo empilhado, Accordion vira carrossel horizontal com swipe, Feature grid 1 coluna, Notebook mockup menor |

O Accordion no mobile se transforma em **carrossel com cards empilhados** — cada card ocupa ~85% da viewport width com snap scroll.

---

## 5. SEO & Metadata

```tsx
export const metadata: Metadata = {
  title: "E-commerce de Elite — Keymatic",
  description: "Plataforma e-commerce completa com checkout inteligente, estoque blindado e recomendações por IA. Da Keymatic, com 20 anos de tradição da VTS Informática.",
  openGraph: {
    title: "E-commerce de Elite — Keymatic",
    description: "Lojas virtuais que vendem enquanto você dorme.",
    url: "https://keymatic.com.br/ecommerce",
  },
};
```

JSON-LD `Product` schema para SEO:
```json
{
  "@type": "Product",
  "name": "Keycommerce — Plataforma E-commerce",
  "description": "...",
  "brand": { "@type": "Brand", "name": "Keymatic" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock"
  }
}
```

---

## 6. Arquivos a Criar

```
vitrine/src/app/ecommerce/
└── page.tsx                          ← Página principal

vitrine/src/components/ecommerce/
├── EcomHero.tsx                      ← Hero com notebook + aura
├── EcomStats.tsx                     ← Números de impacto
├── ImageAccordion.tsx                ← Accordion interativo (reusável)
├── WebSolutions.tsx                  ← Bento grid: sites, LP, SaaS
├── EcomFeatures.tsx                  ← Grid 3x3 de features
├── EcomCase.tsx                      ← Case Guaradise
├── TechInfra.tsx                     ← Stack panel + cards técnicos
├── EcomProcess.tsx                   ← Timeline "como funciona"
├── VtsInstitutional.tsx              ← Seção institucional VTS
└── EcomCTA.tsx                       ← CTA final + contato
```

**Componentes reusados da vitrine:** Navbar, Footer, MouseGlow, ScrollProgress, WhatsAppButton, CookieBanner

---

## 7. Atualização no Navbar

O dropdown "Soluções" no menu precisa apontar para as rotas reais:

| Item atual | Link atual | Link novo |
|------------|-----------|-----------|
| E-commerce de Elite | `#solucoes` | `/ecommerce` |
| Automação Inteligente | `#solucoes` | `/automacao` (futuro) |
| Consultoria em IA | `#solucoes` | `/consultoria-ia` (futuro) |

Para `/automacao` e `/consultoria-ia`, manter `#solucoes` até criar as páginas.

---

## 8. Assets Necessários

| Asset | Tipo | Status |
|-------|------|--------|
| Screenshots Guaradise (homepage, checkout, admin) | PNG/WebP | A capturar |
| Mockup notebook 3D (ou CSS puro) | CSS/SVG | Criar em CSS |
| Ícones Lucide (Globe, Rocket, LayoutDashboard, etc.) | Já instalado | Pronto |
| Ilustrações dos painéis do Accordion | CSS/SVG abstratos | Criar (substituir por reais depois) |

---

## 9. Prioridade de Implementação

| Fase | Seções | Estimativa |
|------|--------|-----------|
| **1 — Estrutura** | Hero + Stats + Accordion + CTA | Core da página |
| **2 — Produto** | Features Grid + Web Solutions | Detalhamento do produto |
| **3 — Credibilidade** | Case Guaradise + Tech Infra + VTS Institucional | Prova social e técnica |
| **4 — Processo** | Timeline "Como Funciona" | Redução de atrito |
| **5 — Polish** | Animações, responsividade mobile, SEO | Finalização |
