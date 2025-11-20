/**
 * GnialMídia Landing Page 2.0 - REFATORADO
 * JavaScript Limpo e Otimizado
 */

'use strict';

// ==================================
// UTILITY FUNCTIONS
// ==================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ==================================
// MOBILE MENU
// ==================================

function initMobileMenu() {
    const menuToggle = $('#menuToggle');
    const navMenu = $('#navMenu');
    const navLinks = $$('.nav-link');

    if (!menuToggle || !navMenu) return;

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ==================================
// NAVBAR SCROLL
// ==================================

function initNavbarScroll() {
    const navbar = $('#navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ==================================
// SMOOTH SCROLL
// ==================================

function initSmoothScroll() {
    const links = $$('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#' || href.length <= 1) return;

            const target = $(href);
            if (target) {
                e.preventDefault();
                const offset = target.offsetTop - 70;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================================
// FAQ ACCORDION
// ==================================

function initFAQ() {
    const faqItems = $$('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current FAQ
            item.classList.toggle('active', !isActive);
        });
    });
}

// ==================================
// SCROLL ANIMATIONS
// ==================================

function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all cards
    const cards = $$('.pain-card, .feature-item, .pricing-card, .combo-card');
    cards.forEach(card => observer.observe(card));
}

// ==================================
// BACK TO TOP BUTTON
// ==================================

function initBackToTop() {
    // Create button
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Voltar ao topo');

    // Styles
    Object.assign(button.style, {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #A20285 0%, #230155 100%)',
        color: '#FEFDFE',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        opacity: '0',
        visibility: 'hidden',
        transition: 'all 0.3s ease',
        zIndex: '999',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    });

    document.body.appendChild(button);

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px) scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
}

// ==================================
// PERFORMANCE MONITOR
// ==================================

function logPerformance() {
    if (!('performance' in window)) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

            console.log('%c🚀 GnialMídia 2.0 - Performance', 'font-size: 16px; font-weight: bold; color: #A20285;');
            console.log(`Page Load Time: ${pageLoadTime}ms`);
        }, 0);
    });
}

// ==================================
// INITIALIZE ALL
// ==================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🚀 GnialMídia Landing Page 2.0', 'font-size: 18px; font-weight: bold; color: #A20285;');
    console.log('%cDesenvolvido com tecnologia premium para máxima conversão', 'font-size: 12px; color: #888;');

    // Initialize all components
    initMobileMenu();
    initNavbarScroll();
    initSmoothScroll();
    initFAQ();
    initScrollAnimations();
    initBackToTop();
    logPerformance();

    // Add loaded class to body
    document.body.classList.add('loaded');
});
