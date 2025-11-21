# 🎯 GnialMídia - Apresentação Comercial

Apresentação comercial profissional e interativa da GnialMídia, desenvolvida com HTML5, CSS3 e JavaScript vanilla.

## ✨ Características

- **10 slides profissionais** com conteúdo completo da proposta comercial
- **Design responsivo** que funciona perfeitamente em desktop, tablet e mobile
- **Animações suaves** e transições elegantes
- **Navegação intuitiva** via mouse, teclado, touch e gestos de swipe
- **Identidade visual** fiel ao site oficial da GnialMídia
- **Performance otimizada** com CSS moderno e JavaScript eficiente

## 🎨 Paleta de Cores

- **Roxo Primário**: `#A20285`
- **Roxo Escuro**: `#230155`
- **Roxo Claro**: `#C933A3`
- **Fundo Escuro**: `#0A0A0F`
- **Ouro**: `#FFD700`
- **Branco**: `#FEFDFE`

## 🚀 Como Usar

### Visualização Local

1. Clone o repositório:
```bash
git clone https://github.com/EversonSantosmkt/apresentacao-gnial-midia.git
cd apresentacao-gnial-midia
```

2. Abra o arquivo `index.html` no seu navegador preferido:
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

### Hospedagem

O projeto é totalmente estático e pode ser hospedado em:
- **GitHub Pages**
- **Vercel**
- **Netlify**
- Qualquer servidor web

## ⌨️ Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `→` ou `↓` | Próximo slide |
| `←` ou `↑` | Slide anterior |
| `Espaço` | Próximo slide |
| `Home` | Primeiro slide |
| `End` | Último slide |
| `F` | Toggle fullscreen |

## 📱 Navegação Mobile

- **Swipe left**: Próximo slide
- **Swipe right**: Slide anterior
- **Touch nos botões**: Navegação direta

## 🛠️ Estrutura do Projeto

```
apresentacao-gnial-midia/
│
├── index.html          # Estrutura HTML dos slides
├── css/
│   └── style.css       # Estilos e animações
├── js/
│   └── main.js         # Lógica de navegação
└── README.md           # Documentação
```

## 📋 Slides da Apresentação

1. **Capa** - Introdução GnialMídia
2. **Problema** - Onde o Marketing Digital Tradicional Falha
3. **Solução** - Atração + Automação = Crescimento Previsível
4. **Tráfego Pago** - Gerando um Fluxo Constante de Oportunidades
5. **Automação** - Transformando Leads em Clientes com Eficiência
6. **Pacotes** - Visão geral dos 4 planos
7. **Performance** - Detalhamento do Pacote Performance
8. **Premium** - Detalhamento do Pacote Premium
9. **Como Começar** - 3 passos para transformar resultados
10. **Contato** - Informações de contato

## 🎯 Recursos Técnicos

### CSS
- CSS Variables para fácil customização
- Flexbox e Grid para layouts responsivos
- Animações com `@keyframes`
- Gradientes e efeitos glassmorphism
- Media queries para responsividade

### JavaScript
- ES6+ com código modular
- Sistema de navegação robusto
- Suporte a gestos touch
- API pública para controle programático
- Prevenção de comportamentos indesejados

## 🌐 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móveis (iOS e Android)

## 📊 API JavaScript

A apresentação expõe uma API global `GnialPresentation`:

```javascript
// Navegar para slide específico
GnialPresentation.navigateToSlide(5);

// Próximo/anterior
GnialPresentation.nextSlide();
GnialPresentation.prevSlide();

// Primeiro/último
GnialPresentation.goToFirstSlide();
GnialPresentation.goToLastSlide();

// Fullscreen
GnialPresentation.toggleFullscreen();

// Obter informações
GnialPresentation.getCurrentSlide(); // Retorna número do slide atual
GnialPresentation.getTotalSlides();  // Retorna total de slides
```

## 🎨 Customização

### Alterar Cores

Edite as variáveis CSS no início do arquivo `css/style.css`:

```css
:root {
    --primary: #A20285;
    --primary-dark: #230155;
    /* ... outras variáveis */
}
```

### Adicionar Slides

1. Adicione um novo `<section class="slide" data-slide="X">` no `index.html`
2. Incremente `state.totalSlides` no `js/main.js`
3. Adicione conteúdo e estilos personalizados

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para a GnialMídia.

## 👥 Autor

**Everson Santos**
- GitHub: [@EversonSantosmkt](https://github.com/EversonSantosmkt)
- Site: [gnialmidia.com.br](https://gnialmidia.com.br)

## 🤝 Suporte

Para suporte, entre em contato:
- 📧 E-mail: contato@gnialmidia.com.br
- 🌐 Site: gnialmidia.com.br
- 💬 WhatsApp: (Adicionar número)

---

**GnialMídia** - Transformamos Tráfego em Clientes e Otimizamos Seus Processos de Vendas
