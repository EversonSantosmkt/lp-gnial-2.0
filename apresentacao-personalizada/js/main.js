/**
 * GnialMídia - Apresentação Comercial
 * Sistema de Navegação de Slides
 */

// Estado da aplicação
const state = {
    currentSlide: 1,
    totalSlides: 10,
    isTransitioning: false
};

// Elementos DOM
const elements = {
    slidesContainer: null,
    slides: [],
    prevBtn: null,
    nextBtn: null,
    slideCounter: null,
    progressBar: null
};

/**
 * Inicialização da aplicação
 */
function init() {
    // Captura dos elementos
    elements.slidesContainer = document.getElementById('slidesContainer');
    elements.slides = Array.from(document.querySelectorAll('.slide'));
    elements.prevBtn = document.getElementById('prevBtn');
    elements.nextBtn = document.getElementById('nextBtn');
    elements.slideCounter = document.getElementById('slideCounter');
    elements.progressBar = document.getElementById('progressBar');

    // Configuração de event listeners
    setupEventListeners();

    // Atualização inicial
    updateUI();

    // Suporte a teclado
    setupKeyboardNavigation();

    // Suporte a gestos touch
    setupTouchNavigation();

    console.log('GnialMídia Apresentação inicializada com sucesso!');
}

/**
 * Configuração dos event listeners
 */
function setupEventListeners() {
    elements.prevBtn.addEventListener('click', () => navigateToSlide(state.currentSlide - 1));
    elements.nextBtn.addEventListener('click', () => navigateToSlide(state.currentSlide + 1));
}

/**
 * Navegação via teclado
 */
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (state.isTransitioning) return;

        switch(e.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                navigateToSlide(state.currentSlide - 1);
                break;
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ': // Espaço
                e.preventDefault();
                navigateToSlide(state.currentSlide + 1);
                break;
            case 'Home':
                navigateToSlide(1);
                break;
            case 'End':
                navigateToSlide(state.totalSlides);
                break;
        }
    });
}

/**
 * Navegação via gestos touch (swipe)
 */
function setupTouchNavigation() {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    elements.slidesContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    elements.slidesContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const minSwipeDistance = 50;

        // Verifica se o movimento horizontal é maior que o vertical
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (Math.abs(deltaX) > minSwipeDistance) {
                if (deltaX > 0) {
                    // Swipe para direita (voltar)
                    navigateToSlide(state.currentSlide - 1);
                } else {
                    // Swipe para esquerda (avançar)
                    navigateToSlide(state.currentSlide + 1);
                }
            }
        }
    }
}

/**
 * Navegar para um slide específico
 * @param {number} slideNumber - Número do slide (1-indexed)
 */
function navigateToSlide(slideNumber) {
    // Validações
    if (state.isTransitioning) return;
    if (slideNumber < 1 || slideNumber > state.totalSlides) return;
    if (slideNumber === state.currentSlide) return;

    state.isTransitioning = true;

    const currentSlideElement = elements.slides[state.currentSlide - 1];
    const nextSlideElement = elements.slides[slideNumber - 1];
    const direction = slideNumber > state.currentSlide ? 'forward' : 'backward';

    // Remove o slide atual
    if (direction === 'forward') {
        currentSlideElement.classList.add('exit-left');
    } else {
        currentSlideElement.classList.add('enter-right');
    }

    currentSlideElement.classList.remove('active');

    // Adiciona o próximo slide
    setTimeout(() => {
        if (direction === 'forward') {
            nextSlideElement.classList.remove('enter-right');
        } else {
            nextSlideElement.classList.remove('exit-left');
        }

        nextSlideElement.classList.add('active');

        // Limpa classes de transição do slide anterior
        setTimeout(() => {
            currentSlideElement.classList.remove('exit-left', 'enter-right');
            state.isTransitioning = false;
        }, 100);

    }, 50);

    // Atualiza o estado
    state.currentSlide = slideNumber;

    // Atualiza a UI
    updateUI();

    // Callback opcional para analytics
    onSlideChange(slideNumber);
}

/**
 * Atualiza a interface do usuário
 */
function updateUI() {
    // Atualiza contador
    elements.slideCounter.textContent = `${state.currentSlide} / ${state.totalSlides}`;

    // Atualiza barra de progresso
    const progressPercentage = (state.currentSlide / state.totalSlides) * 100;
    elements.progressBar.style.width = `${progressPercentage}%`;

    // Atualiza estado dos botões
    elements.prevBtn.disabled = state.currentSlide === 1;
    elements.nextBtn.disabled = state.currentSlide === state.totalSlides;

    // Adiciona classes de estado
    elements.prevBtn.style.opacity = state.currentSlide === 1 ? '0.3' : '1';
    elements.nextBtn.style.opacity = state.currentSlide === state.totalSlides ? '0.3' : '1';
}

/**
 * Callback executado quando o slide muda
 * @param {number} slideNumber - Número do slide atual
 */
function onSlideChange(slideNumber) {
    // Aqui você pode adicionar tracking de analytics
    console.log(`Slide ${slideNumber} visualizado`);

    // Exemplo: Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'slide_view', {
            'slide_number': slideNumber,
            'slide_name': `Slide ${slideNumber}`
        });
    }

    // Exemplo: Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', 'ViewContent', {
            content_name: `Slide ${slideNumber}`,
            content_category: 'Apresentação'
        });
    }
}

/**
 * Navegar para o próximo slide
 */
function nextSlide() {
    navigateToSlide(state.currentSlide + 1);
}

/**
 * Navegar para o slide anterior
 */
function prevSlide() {
    navigateToSlide(state.currentSlide - 1);
}

/**
 * Ir para o primeiro slide
 */
function goToFirstSlide() {
    navigateToSlide(1);
}

/**
 * Ir para o último slide
 */
function goToLastSlide() {
    navigateToSlide(state.totalSlides);
}

/**
 * Ativar modo apresentação (fullscreen)
 */
function enableFullscreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Safari
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE11
        elem.msRequestFullscreen();
    }
}

/**
 * Desativar modo apresentação
 */
function disableFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE11
        document.msExitFullscreen();
    }
}

/**
 * Toggle fullscreen
 */
function toggleFullscreen() {
    if (!document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement) {
        enableFullscreen();
    } else {
        disableFullscreen();
    }
}

// Atalho para fullscreen (F11 ou F)
document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
    }
});

/**
 * Exporta API pública
 */
window.GnialPresentation = {
    navigateToSlide,
    nextSlide,
    prevSlide,
    goToFirstSlide,
    goToLastSlide,
    toggleFullscreen,
    getCurrentSlide: () => state.currentSlide,
    getTotalSlides: () => state.totalSlides
};

/**
 * Auto-inicialização quando o DOM estiver pronto
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

/**
 * Previne comportamentos indesejados
 */
document.addEventListener('contextmenu', (e) => {
    // Opcional: desabilitar menu de contexto em apresentação
    // e.preventDefault();
});

// Previne zoom indesejado em dispositivos móveis
document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
});

document.addEventListener('gesturechange', (e) => {
    e.preventDefault();
});

document.addEventListener('gestureend', (e) => {
    e.preventDefault();
});

/**
 * Performance: Pré-carrega imagens e recursos
 */
function preloadResources() {
    // Adicione aqui URLs de imagens ou recursos que precisam ser pré-carregados
    const resources = [
        // 'path/to/image1.jpg',
        // 'path/to/image2.jpg'
    ];

    resources.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Executa preload após inicialização
setTimeout(preloadResources, 1000);

/**
 * Utilitário: Detecta se está em dispositivo móvel
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Ajustes específicos para mobile
 */
if (isMobileDevice()) {
    document.body.classList.add('is-mobile');

    // Previne pull-to-refresh em alguns navegadores
    document.body.style.overscrollBehavior = 'none';
}

/**
 * Tratamento de visibilidade da página
 */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Apresentação pausada (aba inativa)');
    } else {
        console.log('Apresentação retomada');
    }
});

/**
 * Service Worker para cache (opcional)
 */
if ('serviceWorker' in navigator) {
    // Descomente para habilitar cache offline
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registrado', reg))
    //     .catch(err => console.log('Erro ao registrar Service Worker', err));
}

console.log('%c GnialMídia - Apresentação Comercial ', 'background: linear-gradient(135deg, #A20285 0%, #230155 100%); color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Desenvolvido com ❤️ para transformar tráfego em clientes ', 'color: #A20285; font-size: 12px;');
console.log('%c Comandos disponíveis: ', 'font-weight: bold; color: #A20285;');
console.log('%c - Setas: Navegar entre slides', 'color: #666;');
console.log('%c - F: Toggle fullscreen', 'color: #666;');
console.log('%c - Home/End: Primeiro/Último slide', 'color: #666;');
console.log('%c - GnialPresentation API disponível no console', 'color: #666;');
