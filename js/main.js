/**
 * GnialMídia Landing Page 2.0
 * Main JavaScript File
 * High Performance & Smooth Interactions
 */

'use strict';

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Debounce function for performance
const debounce = (func, wait = 20, immediate = true) => {
    let timeout;
    return function () {
        const context = this,
            args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Throttle function for scroll events
const throttle = (func, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

class MobileMenu {
    constructor() {
        this.menuToggle = $('#menuToggle');
        this.navMenu = $('#navMenu');
        this.navLinks = $$('.nav-link');
        this.body = document.body;

        this.init();
    }

    init() {
        if (!this.menuToggle || !this.navMenu) return;

        // Toggle menu on button click
        this.menuToggle.addEventListener('click', () => this.toggleMenu());

        // Close menu when clicking nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (
                this.navMenu.classList.contains('active') &&
                !this.navMenu.contains(e.target) &&
                !this.menuToggle.contains(e.target)
            ) {
                this.closeMenu();
            }
        });

        // Close menu on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const isActive = this.navMenu.classList.toggle('active');
        this.menuToggle.classList.toggle('active', isActive);
        this.body.style.overflow = isActive ? 'hidden' : '';

        // Update ARIA attributes for accessibility
        this.menuToggle.setAttribute('aria-expanded', isActive);
        this.menuToggle.setAttribute('aria-label', isActive ? 'Fechar menu' : 'Abrir menu');
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.menuToggle.classList.remove('active');
        this.body.style.overflow = '';
        this.menuToggle.setAttribute('aria-expanded', 'false');
        this.menuToggle.setAttribute('aria-label', 'Abrir menu');
    }
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

class NavbarScroll {
    constructor() {
        this.navbar = $('#navbar');
        this.scrollThreshold = 50;

        this.init();
    }

    init() {
        if (!this.navbar) return;

        window.addEventListener(
            'scroll',
            throttle(() => {
                const scrolled = window.scrollY > this.scrollThreshold;
                this.navbar.classList.toggle('scrolled', scrolled);
            }, 100)
        );
    }
}

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

class SmoothScroll {
    constructor() {
        this.links = $$('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;

                const target = $(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ==========================================
// FAQ ACCORDION
// ==========================================

class FAQAccordion {
    constructor() {
        this.faqItems = $$('.faq-item');
        this.init();
    }

    init() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (!question) return;

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                this.faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = null;
                        }
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) {
                    if (!isActive) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    } else {
                        answer.style.maxHeight = null;
                    }
                }

                // Update ARIA for accessibility
                question.setAttribute('aria-expanded', !isActive);
            });

            // Set initial ARIA attributes
            question.setAttribute('aria-expanded', 'false');
            question.setAttribute('role', 'button');
        });
    }
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

class ScrollReveal {
    constructor() {
        this.sections = $$('section');
        this.cards = $$('.pain-card, .feature-card, .pricing-card');
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.init();
    }

    init() {
        // Check if Intersection Observer is supported
        if (!('IntersectionObserver' in window)) {
            // Fallback: show all elements
            this.showAllElements();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal', 'active');
                        observer.unobserve(entry.target);
                    }
                });
            },
            this.observerOptions
        );

        // Observe all cards
        this.cards.forEach((card, index) => {
            card.classList.add('reveal');
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
    }

    showAllElements() {
        this.cards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }
}

// ==========================================
// ANIMATED COUNTER (for stats)
// ==========================================

class AnimatedCounter {
    constructor() {
        this.counters = $$('.stat-number');
        this.init();
    }

    init() {
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const hasMinus = text.includes('-');
        const hasPercent = text.includes('%');
        const hasSlash = text.includes('/');

        // Extract number
        let targetNumber = parseInt(text.replace(/[^\d]/g, ''));
        if (isNaN(targetNumber)) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = targetNumber / steps;
        const stepTime = duration / steps;
        let currentNumber = 0;

        const timer = setInterval(() => {
            currentNumber += stepValue;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(timer);
            }

            let displayText = Math.floor(currentNumber).toString();
            if (hasPlus) displayText = '+' + displayText;
            if (hasMinus) displayText = '-' + displayText;
            if (hasPercent) displayText = displayText + '%';
            if (hasSlash) displayText = displayText + '/7';

            element.textContent = displayText;
        }, stepTime);
    }
}

// ==========================================
// LAZY LOADING IMAGES
// ==========================================

class LazyLoadImages {
    constructor() {
        this.images = $$('img[loading="lazy"]');
        this.init();
    }

    init() {
        if ('loading' in HTMLImageElement.prototype) {
            // Native lazy loading is supported
            return;
        }

        // Fallback for browsers that don't support native lazy loading
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Load all images immediately if IntersectionObserver is not supported
            this.images.forEach(img => {
                img.src = img.dataset.src || img.src;
            });
        }
    }
}

// ==========================================
// FORM VALIDATION (for future contact forms)
// ==========================================

class FormValidator {
    constructor(formSelector) {
        this.form = $(formSelector);
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                this.submitForm();
            }
        });
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showError(input, 'Este campo é obrigatório');
                isValid = false;
            } else {
                this.clearError(input);
            }

            // Email validation
            if (input.type === 'email' && !this.isValidEmail(input.value)) {
                this.showError(input, 'Por favor, insira um e-mail válido');
                isValid = false;
            }
        });

        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showError(input, message) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = message;
        } else {
            const error = document.createElement('span');
            error.className = 'error-message';
            error.textContent = message;
            error.style.color = 'var(--error)';
            error.style.fontSize = 'var(--text-sm)';
            error.style.marginTop = 'var(--space-1)';
            input.parentNode.insertBefore(error, input.nextSibling);
        }
        input.classList.add('error');
    }

    clearError(input) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
        input.classList.remove('error');
    }

    submitForm() {
        // Implement form submission logic here
        console.log('Form submitted successfully');
        // You can add AJAX submission, analytics tracking, etc.
    }
}

// ==========================================
// PERFORMANCE MONITORING
// ==========================================

class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = window.performance.timing;
                    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                    const connectTime = perfData.responseEnd - perfData.requestStart;
                    const renderTime = perfData.domComplete - perfData.domLoading;

                    console.log('🚀 Performance Metrics:');
                    console.log(`   Page Load Time: ${pageLoadTime}ms`);
                    console.log(`   Connect Time: ${connectTime}ms`);
                    console.log(`   Render Time: ${renderTime}ms`);
                }, 0);
            });
        }
    }
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

class BackToTop {
    constructor() {
        this.createButton();
        this.init();
    }

    createButton() {
        this.button = document.createElement('button');
        this.button.className = 'back-to-top';
        this.button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        this.button.setAttribute('aria-label', 'Voltar ao topo');

        // Add styles
        Object.assign(this.button.style, {
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'var(--gradient-primary)',
            color: 'var(--white)',
            border: 'none',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-xl)',
            opacity: '0',
            visibility: 'hidden',
            transition: 'all 0.3s ease',
            zIndex: '999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        });

        document.body.appendChild(this.button);
    }

    init() {
        // Show/hide button on scroll
        window.addEventListener(
            'scroll',
            throttle(() => {
                if (window.scrollY > 500) {
                    this.button.style.opacity = '1';
                    this.button.style.visibility = 'visible';
                } else {
                    this.button.style.opacity = '0';
                    this.button.style.visibility = 'hidden';
                }
            }, 100)
        );

        // Scroll to top on click
        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Hover effect
        this.button.addEventListener('mouseenter', () => {
            this.button.style.transform = 'translateY(-5px) scale(1.1)';
        });

        this.button.addEventListener('mouseleave', () => {
            this.button.style.transform = 'translateY(0) scale(1)';
        });
    }
}

// ==========================================
// PRELOADER (Optional)
// ==========================================

class Preloader {
    constructor() {
        this.preloader = $('#preloader');
        if (this.preloader) {
            this.init();
        }
    }

    init() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.preloader.style.opacity = '0';
                setTimeout(() => {
                    this.preloader.style.display = 'none';
                }, 300);
            }, 500);
        });
    }
}

// ==========================================
// INITIALIZE ALL COMPONENTS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 GnialMídia Landing Page 2.0 Initialized');

    // Initialize all components
    new MobileMenu();
    new NavbarScroll();
    new SmoothScroll();
    new FAQAccordion();
    new ScrollReveal();
    new AnimatedCounter();
    new LazyLoadImages();
    new BackToTop();
    new PerformanceMonitor();

    // Optional: Form validation (uncomment when you add a form)
    // new FormValidator('#contact-form');

    // Add loading class removal
    document.body.classList.add('loaded');
});

// ==========================================
// SERVICE WORKER REGISTRATION (PWA - Optional)
// ==========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable PWA features
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}

// ==========================================
// ANALYTICS TRACKING (Optional)
// ==========================================

class Analytics {
    static trackEvent(category, action, label = null, value = null) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        }

        // Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('trackCustom', action, {
                category: category,
                label: label
            });
        }

        console.log(`📊 Event Tracked: ${category} - ${action}`);
    }
}

// Track CTA clicks
$$('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
        const buttonText = btn.textContent.trim();
        Analytics.trackEvent('CTA', 'Click', buttonText);
    });
});

// Track section views
if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id || entry.target.className;
                    Analytics.trackEvent('Section View', 'View', sectionId);
                }
            });
        },
        { threshold: 0.5 }
    );

    $$('section').forEach(section => sectionObserver.observe(section));
}

// ==========================================
// CONSOLE EASTER EGG
// ==========================================

console.log(
    '%c🚀 GnialMídia 2.0',
    'font-size: 20px; font-weight: bold; color: #A20285;'
);
console.log(
    '%cDesenvolvido com tecnologia de ponta para máxima performance e conversão.',
    'font-size: 12px; color: #888;'
);
console.log(
    '%c🔥 Quer trabalhar conosco? Entre em contato!',
    'font-size: 14px; color: #10b981;'
);
