// ===== 1. DOM READY CHECK =====
document.addEventListener('DOMContentLoaded', initApp);
window.addEventListener('load', completeLoad);

function initApp() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    initI18n();
    initCursor();
    initSmoothScroll();
    registerGSAP(); 
    optimizeVideo(); 
    initMagneticElements();
    initFAQ(); // <--- Panggil di sini
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
            "faq.subtitle": "KEKHAWATIRAN KLIEN",
            "faq.title": "Pertanyaan yang Sering <span class='gradient-text'>Diajukan</span>",
            "faq.q1": "Berapa lama estimasi pengerjaan project?",
            "faq.a1": "Untuk video Short-Form biasanya memakan waktu 2-3 hari kerja. Sedangkan untuk Cinematic Story/Full Brand, proses memakan waktu 1-2 minggu tergantung kompleksitas, karena kami memastikan pewarnaan dan <em>sound design</em> yang sempurna.",
            "faq.q2": "Bagaimana sistem revisinya?",
            "faq.a2": "Kami sangat menghargai visi Anda. Paket dasar mencakup 1x revisi minor. Untuk paket Cinematic/Custom, kami menyediakan sesi <em>live-review</em> dan revisi tak terbatas hingga output benar-benar selaras dengan identitas brand Anda.",
            "faq.q3": "Apakah saya akan mendapatkan file mentah (Raw Files)?",
            "faq.a3": "Secara <em>default</em>, yang diserahkan adalah hasil akhir dengan <em>color grading</em> dan resolusi maksimal (4K). Namun, <em>Raw Files</em> dan <em>Project Files</em> (DaVinci/Premiere) dapat disertakan dengan biaya tambahan (buyout clause)."
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
            "faq.subtitle": "CLIENT CONCERNS",
            "faq.title": "Frequently Asked <span class='gradient-text'>Questions</span>",
            "faq.q1": "What is the estimated turnaround time for a project?",
            "faq.a1": "Short-form videos typically take 2-3 business days. For Cinematic Stories or Full Brand projects, the process takes 1-2 weeks depending on complexity, as we ensure flawless color grading and <em>sound design</em>.",
            "faq.q2": "How does the revision process work?",
            "faq.a2": "We deeply value your vision. Basic packages include 1 minor revision. For Cinematic/Custom packages, we provide <em>live-review</em> sessions and unlimited revisions until the output perfectly aligns with your brand identity.",
            "faq.q3": "Will I receive the Raw Files?",
            "faq.a3": "By <em>default</em>, we deliver the final output with full <em>color grading</em> in maximum resolution (4K). However, <em>Raw Files</em> and <em>Project Files</em> (DaVinci/Premiere) can be provided for an additional fee (buyout clause)."
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
        const switcher = document.getElementById('langSwitcher');
        if (switcher) switcher.value = i18next.language;
    });

    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('change', (e) => {
            const lang = e.target.value;
            i18next.changeLanguage(lang, () => {
                updateContent();
                localStorage.setItem('lang', lang);
            });
        });
    }
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
            el.textContent = i18next.t(key);
        }
    });
}

// ===== 3. PRELOADER & ENTRANCE ANIMATION =====
function initPreloader() {
    if (typeof gsap === 'undefined') return;

    const tl = gsap.timeline();
    
    tl.to("#progress", {
        width: "100%",
        duration: 1.5, 
        ease: "power4.inOut"
    })
    .to("#loader", {
        scaleY: 0,
        duration: 0.8,
        ease: "expo.inOut",
        transformOrigin: "center top"
    }, "-=0.5")
    .to(".fade-in-up", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
    }, "-=0.4");
}

// ===== 4. CUSTOM CURSOR =====
function initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor || typeof gsap === 'undefined') return;

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.15, 
            ease: "power2.out"
        });
    });

    const hoverElements = document.querySelectorAll('a, button, select, [class*="btn"], .glass');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('scale-[3]', 'bg-cyan-400'); 
            cursor.classList.remove('bg-white');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('scale-[3]', 'bg-cyan-400');
            cursor.classList.add('bg-white');
        });
    });
}

// ===== 5. SMOOTH SCROLLING =====
function initSmoothScroll() {
    if (typeof gsap === 'undefined') return;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return; 

            const target = document.getElementById(targetId);
            
            if (target) {
                gsap.to(window, {
                    duration: 1.2,
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
    if (typeof ScrollTrigger === 'undefined' || typeof gsap === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const nav = document.querySelector('nav');
    if (nav) {
        ScrollTrigger.create({
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            onUpdate: (self) => {
                if (self.progress > 0.1) {
                    nav.classList.add('bg-black/40', 'backdrop-blur-xl', 'border-b', 'border-white/10');
                } else {
                    nav.classList.remove('bg-black/40', 'backdrop-blur-xl', 'border-b', 'border-white/10');
                }
            }
        });
    }

    gsap.utils.toArray('section:not(#home) .fade-in-up').forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        });
    });
}

// ===== 7. VIDEO OPTIMIZATION =====
function optimizeVideo() {
    const video = document.getElementById('bgVideo');
    if (video) {
        video.play().catch(e => {
            console.log('Video autoplay prevented by browser. Retrying muted...');
            video.muted = true;
            video.play();
        });
    }
}

// ===== 8. MAGNETIC ELEMENTS (Awwwards Style Motion) =====
function initMagneticElements() {
    if (typeof gsap === 'undefined') return;

    const magnets = document.querySelectorAll('a[href="#contact"], .glass');
    
    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', (e) => {
            const position = magnet.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            
            gsap.to(magnet, {
                x: x * 0.1, 
                y: y * 0.1,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        magnet.addEventListener('mouseleave', () => {
            gsap.to(magnet, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}
// ===== 9. FAQ ACCORDION LOGIC =====
function initFAQ() {
    const faqBtns = document.querySelectorAll('.faq-btn');
    
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            
            // Tutup FAQ lain yang sedang terbuka (opsional, untuk tampilan lebih rapi)
            faqBtns.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.classList.remove('active');
                    otherBtn.nextElementSibling.classList.remove('open');
                }
            });

            // Toggle FAQ yang diklik
            btn.classList.toggle('active');
            content.classList.toggle('open');
            
            // Update posisi ScrollTrigger GSAP karena tinggi halaman berubah
            setTimeout(() => {
                if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
            }, 500); // Tunggu sampai animasi CSS selesai
        });
    });
}
