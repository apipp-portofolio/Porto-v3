// ===== 1. DOM READY CHECK =====
document.addEventListener('DOMContentLoaded', initApp);
window.addEventListener('load', completeLoad);

function initApp() {
    initI18n();
    initCursor();
    initSmoothScroll();
    initScrollTrigger();
    registerGSAP();
}

function completeLoad() {
    initPreloader();
}

// ===== 2. MULTI-LANGUAGE SYSTEM =====
const resources = {
    id: {
        translation: {
            "nav.about": "TENTANG",
            "nav.works": "KARYA", 
            "nav.experience": "PERJALANAN",
            "nav.pricing": "HARGA",
            "nav.cta": "HUBUNGI",
            "hero.sub": "SENIMAN VISUAL BERBASIS AI",
            "hero.desc": "Bukan sekadar memotong klip. Saya merangkai cerita sinematik, fotografi profesional, dan visual berbasis AI.",
            "hero.btn_work": "LIHAT KARYA"
        }
    },
    en: {
        translation: {
            "nav.about": "ABOUT",
            "nav.works": "WORKS",
            "nav.experience": "JOURNEY", 
            "nav.pricing": "RATES",
            "nav.cta": "HIRE ME",
            "hero.sub": "AI-POWERED VISUAL ARTIST",
            "hero.desc": "I don't just cut clips. I craft cinematic stories, professional photography, and AI-integrated visuals.",
            "hero.btn_work": "VIEW PORTFOLIO"
        }
    }
};

function initI18n() {
    if (typeof i18next === 'undefined') return;
    
    i18next.init({
        lng: localStorage.getItem('lang') || 'id',
        resources,
        fallbackLng: 'en'
    }, () => {
        updateContent();
        document.getElementById('langSwitcher').value = i18next.language;
    });

    document.getElementById('langSwitcher').addEventListener('change', (e) => {
        const lang = e.target.value;
        i18next.changeLanguage(lang, () => {
            updateContent();
            localStorage.setItem('lang', lang);
        });
    });
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
            el.textContent = i18next.t(key);
        }
    });
}

// ===== 3. PRELOADER =====
function initPreloader() {
    const tl = gsap.timeline();
    
    tl.to("#progress", {
        width: "100%",
        duration: 1.8,
        ease: "power4.inOut"
    })
    .to("#loader", {
        scaleY: 0,
        duration: 0.8,
        ease: "expo.inOut",
        transformOrigin: "center top"
    }, "-=1")
    .to(".fade-in-up", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
    }, "-=0.6");
}

// ===== 4. CUSTOM CURSOR =====
function initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.12,
            ease: "power2.out"
        });
    });

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, [class*="btn"]');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('scale-150', 'shadow-lg');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('scale-150', 'shadow-lg');
        });
    });
}

// ===== 5. SMOOTH SCROLLING =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });
}

// ===== 6. SCROLL TRIGGER =====
function registerGSAP() {
    if (typeof ScrollTrigger === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    ScrollTrigger.create({
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
            if (self.progress > 0) {
                document.querySelector('nav').classList.add('border-b-white/20');
            }
        }
    });
}

// ===== 7. VIDEO OPTIMIZATION =====
function optimizeVideo() {
    const video = document.getElementById('bgVideo');
    if (video) {
        video.addEventListener('loadeddata', () => {
            video.play().catch(e => console.log('Video autoplay prevented'));
        });
    }
}

optimizeVideo();