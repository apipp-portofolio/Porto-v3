// 1. MULTI-LANGUAGE SYSTEM
const resources = {
    id: { translation: {
        "nav.about": "TENTANG", "nav.works": "KARYA", "nav.experience": "PERJALANAN", "nav.cta": "HUBUNGI",
        "hero.sub": "SENIMAN VISUAL BERBASIS AI",
        "hero.desc": "Bukan sekadar memotong klip. Saya merangkai cerita sinematik dan visual berbasis AI.",
        "hero.btn_work": "LIHAT KARYA"
    }},
    en: { translation: {
        "nav.about": "ABOUT", "nav.works": "WORKS", "nav.experience": "JOURNEY", "nav.cta": "HIRE ME",
        "hero.sub": "AI-POWERED VISUAL ARTIST",
        "hero.desc": "I don't just cut clips. I craft cinematic stories and AI-integrated visuals.",
        "hero.btn_work": "VIEW PORTFOLIO"
    }}
};

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = i18next.t(el.getAttribute('data-i18n'));
    });
}

i18next.init({ lng: 'id', resources }, updateContent);

document.getElementById('langSwitcher').addEventListener('change', (e) => {
    i18next.changeLanguage(e.target.value, updateContent);
});

// 2. GSAP ANIMATIONS (Loader & Reveal)
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to("#progress", { width: "100%", duration: 1.5, ease: "power4.inOut" })
      .to("#loader", { y: "-100%", duration: 1, ease: "expo.inOut" })
      .to(".fade-in", { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.5");
});

// 3. CUSTOM MOUSE CURSOR
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
});

// 4. SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, { duration: 1, scrollTo: target.offsetTop - 80, ease: "power3.inOut" });
        }
    });
});
