# Changelog - GnialMídia Landing Page 2.0

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Não Lançado]

### Planejado
- Integração com formulário de captura de leads
- Sistema de A/B testing para CTAs
- Chat ao vivo integrado
- Animações 3D avançadas
- Painel de analytics personalizado

---

## [2.1.2] - 2025-11-20

### 🐛 CORREÇÃO CRÍTICA - Mobile Overflow Eliminado

**FIX**: Resolvido completamente problema de quebra de layout no mobile

### Corrigido
- 🐛 **Hero Stats quebrando mobile**:
  - Grid: `repeat(3, 1fr)` ao invés de `minmax(180px)`
  - Gap reduzido: space-4 → space-2 no mobile
  - Padding: space-3 → space-2 no mobile
  - Font-sizes responsivos com clamp()
- 🐛 **Botões estourando tela**:
  - Padding: 0.875rem/1.75rem → 0.75rem/1.25rem mobile
  - White-space: nowrap → normal (permite quebra)
  - Font-size: 0.9375rem → 0.875rem mobile
  - Max-width: 100% adicionado
- 🐛 **Textos quebrando laterais**:
  - Hero-title: padding lateral (space-1)
  - Hero-description: max-width 100% + padding
  - Font-size responsivo: clamp(0.9375rem-1.0625rem)
- 🐛 **Overflow horizontal**:
  - HTML: max-width 100% + overflow-x hidden
  - Body: max-width 100vw
  - Container: padding space-3 → space-2 mobile

### Melhorado
- ✨ **Hero Section Mobile**:
  - Padding-top: calc(90px + space-8) → calc(70px + space-6)
  - Padding-bottom: space-8 → space-6
  - Melhor uso do espaço vertical
- ✨ **Stats Mobile**:
  - Números: clamp(1.25rem-2rem)
  - Labels: clamp(0.6875rem-0.875rem)
  - 3 colunas equilibradas
- ✨ **Responsividade Total**:
  - Todos elementos com @media queries
  - Desktop mantém valores originais
  - Mobile otimizado para 320px+

### Design Mobile
- Layout compacto sem overflow
- Textos legíveis e bem espaçados
- Botões acessíveis e clicáveis
- Stats bem distribuídos em 3 colunas
- Nenhum elemento estoura lateralmente

---

## [2.1.1] - 2025-11-20

### 🔧 CORREÇÃO CRÍTICA - Layout Elegante e Minimalista

**FIX**: Corrigido layout quebrado, fontes gigantes e design desconexo

### Corrigido
- 🐛 **Fontes Gigantes**: Redução de 36-43% em todos os tamanhos
  - h1: 4.5rem → 2.75rem
  - h2: 3.5rem → 2.25rem
  - h3: 2rem → 1.5rem
  - Parágrafos: 1.125rem → 1.0625rem
- 🐛 **Espaçamento Excessivo**: Layout mais coeso
  - Seções: 10rem → 5-6rem entre seções
  - Cards padding: reduzido de 4-5rem para 2rem
  - Grid gaps: reduzido em 25-33%
- 🐛 **Hover Effects Exagerados**: Movimentos sutis
  - Transform: -10px/-12px → -4px
  - Sombras normais em vez de glow excessivo
- 🐛 **Ícones Grandes Demais**: Reduzidos de 3.5rem para 2rem (43% menor)
- 🐛 **Layout Quebrado**: Grid gaps e padding harmonizados

### Melhorado
- ✨ **Typography**: Font-weight 800 → 700 (mais elegante)
- ✨ **Line-height**: 1.2 → 1.3 (mais legível)
- ✨ **Letter-spacing**: -0.02em → -0.01em (mais suave)
- ✨ **Buttons**: Padding e fontes menores, mais refinados
- ✨ **Badges**: Tamanhos reduzidos para 0.75-0.8125rem
- ✨ **Border-radius**: radius-xl → radius-lg (mais sutil)
- ✨ **Backdrop-filter**: blur(20px) → blur(15px) (melhor performance)

### Design Premium Real
- Layout minimalista e elegante
- Espaçamento harmonioso e coeso
- Tipografia equilibrada e profissional
- Hover effects sutis e sofisticados
- Visual limpo e premium

---

## [2.1.0] - 2025-11-20

### 🌟 REDESIGN PREMIUM EDITION - Inspirado em ClickMax.io

**BREAKING CHANGE**: Transformação completa do design para estilo luxury premium com ar de soberania

### Adicionado
- ✨ **Background Patterns Premium**: Radial gradients sofisticados com efeitos de profundidade
- 🎨 **Glassmorphism**: backdrop-filter blur(20px) em todos os cards para efeito vidro fosco
- 💎 **Sistema de Sombras Premium**:
  - Glow effects (shadow-glow, shadow-glow-lg)
  - Gold shadows para badges premium
  - Sombras XL para elementos destaque
- 🌈 **Gradientes Sofisticados**:
  - Gradiente dourado (gold gradient) para badges e preços
  - Gradientes roxos aprimorados com 3 cores
  - Overlay gradients para hover effects
- ⚡ **Animações Premium**:
  - Pulse animation no hero background
  - Shine effect nos botões (::before sliding gradient)
  - Hover effects elaborados (translateY + glow + scale)
- 🎯 **Ícones Profissionais**: Substituídos emojis infantilizados (🚀📞📲) por símbolos premium (✦ ◆ ★)

### Melhorado
- 🎨 **CSS Premium Edition**: Expandido para 1510 linhas com design system completo
- 📐 **Design System**: Variáveis CSS organizadas para:
  - 7 cores premium (dark: #0A0A0F, primary-light, etc)
  - 5 tipos de sombras (sm, md, lg, xl, glow, gold)
  - 8 níveis de espaçamento (space-1 até space-16)
  - 5 border radius (sm, md, lg, xl, full)
  - Z-index scale organizado
- 🎭 **Typography**:
  - Tamanhos fluidos com clamp() expandidos
  - Letter-spacing aprimorado (-0.02em nos headings)
  - Line-height aumentado para 1.8
- 🖱️ **Hover Effects**:
  - Transform translateY(-12px) em cards
  - Glow shadows intensificados
  - ::before overlays com opacity transition
- 📱 **Container**: Expandido de 1200px para 1400px
- ⚙️ **Transições**: Cubic-bezier(0.4, 0, 0.2, 1) para movimentos suaves
- 🎯 **Backdrop-filter**:
  - Navbar com saturate(180%)
  - Cards com blur(20px)
  - Tags e badges com blur(10px)

### Estilo Premium Implementado
- **Hero Section**: Background radial gradient pulsante com animação 8s
- **Pain Cards**: Overlay gradients + ::before effects + hover glow
- **Feature Cards**: Radial gradient background animado no hover
- **Pricing Cards**:
  - Badges dourados com shadow-gold
  - Border 3px nos featured
  - Transform scale no hover
- **Buttons**:
  - Shine effect (sliding gradient)
  - Shadow glow em primary
  - Backdrop-filter em secondary/outline
- **Navbar**:
  - Background rgba com blur(20px)
  - Border com primary color
  - Logo com drop-shadow e rotate no hover

### Design Premium
- Background fixo com padrões radiais e lineares
- Cards uniformes com glassmorphism
- Espaçamento generoso (space-16 = 10rem)
- Tipografia expandida e elegante
- Cores mais escuras (#0A0A0F vs #0E0C20)
- Gradientes mais suaves e sofisticados
- Animações mais lentas (transition-slow: 0.6s)

### Performance
- CSS otimizado com custom properties bem organizadas
- Animações performáticas (opacity, transform)
- Z-index scale para melhor compositing
- Transições com cubic-bezier otimizado

---

## [2.0.0] - 2025-11-20

### 🎨 Refatoração Completa - Design Premium e Limpo

**BREAKING CHANGE**: Landing page completamente reconstruída do zero

### Melhorado
- ✨ **HTML**: Estrutura completamente reorganizada e semântica
- 🎨 **CSS**: Refatorado de 1500+ para 1100 linhas (mais limpo e eficiente)
- ⚡ **JavaScript**: Otimizado de 800+ para 265 linhas (modular e performático)
- 📐 **Layout**: Todos os elementos agora perfeitamente alinhados
- 🎯 **Design System**: Mais consistente e profissional
- 📱 **Responsividade**: Mobile-first real implementado
- 🎭 **Animações**: Mais suaves e elegantes

### Corrigido
- 🐛 Elementos fora de contexto removidos
- 🐛 Alinhamento de blocos corrigido
- 🐛 Espaçamento inconsistente padronizado
- 🐛 Hierarquia visual melhorada
- 🐛 Cards desalinhados uniformizados
- 🐛 Navegação mobile otimizada

### Design Melhorado
- Cards uniformes com padding consistente
- Espaçamento harmônico em todas as seções
- Tipografia mais clara e legível (tamanhos fluidos com clamp)
- Gradientes mais suaves e elegantes
- Hover effects mais sutis e profissionais
- Cores mais harmoniosas e bem aplicadas

### Performance
- CSS otimizado com CSS Custom Properties organizadas
- JavaScript modular com funções bem definidas
- Menos código = carregamento mais rápido
- Animações com Intersection Observer performático
- Grid layout responsivo eficiente

### Arquitetura
- Código CSS organizado por seções claras
- JavaScript com funções modulares e reutilizáveis
- HTML semântico e bem estruturado
- Comentários úteis e organizados
- Manutenibilidade melhorada drasticamente

---

## [1.0.0] - 2025-11-20

### Adicionado
- ✨ Landing page inicial com design premium e moderno
- 🎨 Hero Section com vídeo em loop e CTA agressivo
- 💼 Seção "O Cenário Real" focada na dor do cliente
- 🚀 Seção de funcionalidades do ecossistema completo
- 💰 Tabela de pacotes e preços (Essencial, Profissional, Performance, Premium)
- ❓ FAQ interativo com acordeão animado
- 📱 Design 100% responsivo com abordagem mobile-first
- ⚡ Otimizações de performance (lazy loading, compressão de imagens)
- 🎭 Animações suaves com Intersection Observer API
- 🎯 Copy agressiva focada em conversão e urgência
- 🔥 Gradientes e efeitos visuais premium
- 📊 Micro-interações e feedbacks visuais
- 🌐 SEO otimizado com meta tags completas
- ♿ Acessibilidade (ARIA labels, navegação por teclado)

### Tecnologias Utilizadas
- HTML5 semântico
- CSS3 moderno (Grid, Flexbox, Custom Properties, Animations)
- JavaScript Vanilla (ES6+)
- Intersection Observer API
- Lazy Loading nativo
- Google Fonts (Inter)

### Design
- Paleta de cores: #A20285 (roxo primário), #230155 (roxo escuro), #0E0C20 (quase preto), #FEFDFE (branco)
- Tipografia: Inter (moderna e legível)
- Layout: Cards com bordas arredondadas, gradientes, glassmorphism
- Animações: Fade in, slide up, scale, pulse

### Performance
- ✅ Lazy loading de imagens
- ✅ CSS minificado e otimizado
- ✅ JavaScript assíncrono
- ✅ Preload de recursos críticos
- ✅ Compressão de assets

---

## Convenções de Versionamento

- **MAJOR** (X.0.0): Mudanças incompatíveis na API ou reestruturação completa
- **MINOR** (0.X.0): Novas funcionalidades mantendo compatibilidade
- **PATCH** (0.0.X): Correções de bugs e pequenas melhorias

## Tipos de Mudanças

- `Adicionado` para novas funcionalidades
- `Modificado` para mudanças em funcionalidades existentes
- `Depreciado` para funcionalidades que serão removidas
- `Removido` para funcionalidades removidas
- `Corrigido` para correção de bugs
- `Segurança` para vulnerabilidades corrigidas
