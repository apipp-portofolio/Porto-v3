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
    initFAQ();
    initComparisonSlider();
}

function completeLoad() {
    initPreloader();
}

// ===== 2. MULTI-LANGUAGE SYSTEM =====
const resources = {
    id: {
        translation: {
            "loader.text": "LOADING EXPERIENCE",
            "nav.about": "TENTANG", "nav.works": "KARYA", "nav.process": "PROSES",
            "nav.experience": "PERJALANAN", "nav.pricing": "HARGA", "nav.faq": "FAQ", "nav.cta": "HUBUNGI",
            "nav.tools": "KEAHLIAN", "nav.workflow": "ALUR KERJA", "nav.rates": "HARGA BARU",
            "hero.sub": "SENIMAN VISUAL BERBASIS AI",
            "hero.desc": "Bukan sekadar memotong klip. Saya merangkai cerita sinematik, fotografi profesional, dan visual berbasis AI.",
            "hero.btn_work": "LIHAT KARYA", "hero.btn_talk": "LET'S TALK",
            "trust.agencies": "Agensi top", "trust.wedding": "Perencana pernikahan", "trust.documentary": "Kru dokumenter",
            "trust.brands": "Brand lintas industri", "trust.creative": "Direktur kreatif",
            "about.subtitle": "Expertise & Philosophy",
            "about.title": "Merging Tech with <span class='gradient-text shine-anim'>Soul.</span>",
            "about.desc1": "Halo! Saya Afif, seorang <strong>Visual Storyteller</strong> yang percaya bahwa setiap <em>frame</em> memiliki jiwa. Saya menggabungkan teknis pewarnaan (<strong>Color Science</strong>) dengan narasi emosional untuk menciptakan konten yang tidak hanya indah secara visual, tetapi juga resonan secara mendalam dengan audiens.",
            "about.desc2": "Bagi saya, video editing bukan sekadar menyambung potongan klip, melainkan tentang membangun koneksi emosional dengan audiens melalui transisi yang mulus, <em>sound design</em> yang presisi, dan color grading yang menceritakan kisah sendiri. Setiap project adalah kesempatan untuk menciptakan pengalaman visual yang tak terlupakan.",
            "about.role1_title": "Post-Production Expert", "about.role1_desc": "Mahir menggunakan DaVinci Resolve untuk Color Grading sinematik dan Premiere/CapCut untuk editing cepat.",
            "about.role2_title": "Professional Retouching", "about.role2_desc": "Spesialis editing foto menggunakan Adobe Lightroom untuk hasil tone warna yang konsisten dan premium.",
            "about.role3_title": "Visual AI Integrator", "about.role3_desc": "Mengimplementasikan AI (Midjourney/Firefly) untuk menciptakan aset visual unik yang memukau.",
            "tools.subtitle": "How I Work",
            "tools.title": "Tools & <span class='gradient-text shine-anim'>Creative Logic</span>",
            "tools.cat1_title": "Video & Visual",
            "tools.cat1_desc": "Saya mengandalkan Premiere Pro & DaVinci Resolve untuk color grading sinematik, serta CapCut untuk konten tren yang cepat. Detail visual disempurnakan dengan Lightroom & Canva.",
            "tools.cat2_title": "Tech & Web Dev",
            "tools.cat2_desc": "Membangun web responsif dengan bantuan Blackbox AI & Copilot. Kode bersih, modern, dan mudah dikelola.",
            "tools.cat3_title": "AI-Powered Logic",
            "tools.cat3_desc": "Strategi & narasi setiap proyek diperkuat riset mendalam memakai Gemini, Claude, dan DeepSeek agar hasil tepat sasaran.",
            "work.subtitle": "Visual Impact", "work.title": "Color Grading & <span class='gradient-text shine-anim'>AI Art</span> Mastery",
            "work.desc1": "<strong>Masalah:</strong> Klien membutuhkan video perjalanan yang emosional tetapi efisien dalam pengerjaan.<br><br><strong>Solusi:</strong> Menggunakan CapCut, saya memadukan *storytelling* yang kuat dengan pewarnaan yang kohesif dalam resolusi 4K untuk hasil sinematik maksimal.",
            "work.desc2": "Strategi editing beresolusi tinggi dengan retensi tinggi untuk memaksimalkan performa *engagement* di *Short-Form Platforms*.",
            "work.before": "BEFORE (RAW)", "work.after": "AFTER (GRADED)",
            "process.subtitle": "Creative SOP", "process.title": "Our <span class='gradient-text shine-anim'>Collaborative</span> Process",
            "process.step1": "STEP 01", "process.step2": "STEP 02", "process.step3": "STEP 03", "process.step4": "STEP 04",
            "process.q1": "Discovery & Brief", "process.a1": "Sesi mendalam untuk memahami visi, identitas brand, dan tujuan emosional yang ingin Anda capai.",
            "process.q2": "AI Generation", "process.a2": "Menggunakan AI (Midjourney/Firefly) untuk menciptakan aset visual unik, *storyboard*, atau referensi visual.",
            "process.q3": "Post-Production", "process.a3": "Proses inti: editing cepat, *advanced color grading* (DaVinci/Resolve), dan *sound design* sinematik.",
            "process.q4": "Final Delivery", "process.a4": "Ekspor resolusi maksimal (4K) dan penyerahan aset via *cloud storage* premium dengan stabilitas tinggi.",
            "workflow.subtitle": "Transparent Process",
            "workflow.title": "Project <span class='gradient-text shine-anim'>Workflow</span>",
            "workflow.desc": "Setiap tahap saya jalani dengan komunikasi jelas agar kamu selalu update.",
            "workflow.step1": "01 Client & Inquiry",
            "workflow.desc1": "Komunikasi via WhatsApp untuk memahami kebutuhan & visi proyekmu.",
            "workflow.step2": "02 Deal & Strategy",
            "workflow.desc2": "Kesepakatan & rencana kerja disusun rapi via Google Docs & Adobe Acrobat.",
            "workflow.step3": "03 Asset Gathering",
            "workflow.desc3": "Kirim bahan mentah lewat Google Drive terorganisir, aman & mudah.",
            "workflow.step4": "04 Production",
            "workflow.desc4": "Proses editing video (Premiere/CapCut) & visual dimulai.",
            "workflow.step5": "05 Initial Review",
            "workflow.desc5": "Draf pertama dikirim, kamu beri masukan untuk revisi.",
            "workflow.step6": "06 Final Polish",
            "workflow.desc6": "Finishing: color grading akhir, audio, dan optimasi performa.",
            "workflow.step7": "07 Final Delivery",
            "workflow.desc7": "Hasil akhir kualitas tinggi dikirim via Google Drive, siap tayang.",
            "journey.title": "Professional <span class='gradient-text shine-anim'>Journey</span>",
            "journey.role1": "UI/UX Designer & Web Developer", "journey.desc1_1": "Merancang & membangun ekosistem digital premium berbasis kolaborasi AI (Gemini, Blackbox, Canva).", "journey.desc1_2": "Mengintegrasikan <em>live prototyping</em> dan desain UI interaktif untuk <em>user experience</em> kelas atas.", "journey.desc1_3": "Mengelola infrastruktur arsitektur web hingga <em>deployment</em> global via GitHub & Netlify.",
            "journey.role2": "Lead Content Specialist & Editor", "journey.desc2_1": "Mengelola <em>end-to-end</em> produksi konten harian perjalanan ibadah Umroh.", "journey.desc2_2": "Memadukan efisiensi <em>post-production</em> dengan gaya penceritaan sinematik (CapCut).", "journey.desc2_3": "Fokus menyajikan narasi emosional yang sukses meningkatkan <em>engagement</em> audiens.",
            "journey.role3": "Freelance Visual Creator", "journey.desc3_1": "Menerjemahkan visi klien lintas industri menjadi mahakarya visual dan video komersial.", "journey.desc3_2": "Dipercaya memimpin eksekusi dokumentasi premium (Wedding, Graduation, Corporate).", "journey.desc3_3": "Merumuskan identitas visual & tata warna brand menggunakan Adobe Lightroom dan Canva.",
            "journey.role4": "Videographer, Editor & Crew", "journey.desc4_1": "Titik awal pendalaman seni <em>visual storytelling</em> dan dinamika lapangan produksi dokumenter.", "journey.desc4_2": "Berperan krusial merakit <em>raw footage</em> menjadi narasi visual yang kohesif via DaVinci Resolve.", "journey.desc4_3": "Bertanggung jawab atas kelancaran operasional dan dokumentasi esensial <em>Behind the Scenes</em>.",
            "pricing.subtitle": "Investment", "pricing.title": "Our Rate <span class='gradient-text shine-anim'>Card</span>", "pricing.desc": "Setiap paket dirancang untuk memberikan nilai maksimal. Pilih sesuai kebutuhan Anda atau diskusikan custom solution.",
            "pricing.short.desc": "<strong>Cocok untuk:</strong> TikTok, Reels, YouTube Shorts<br><br><strong>Included:</strong> Editing profesional, color grading dasar, transisi smooth, background music, 1x revision",
            "pricing.cine.desc": "<strong>Cocok untuk:</strong> Wedding, Campaign Video, Documentary, Brand Story<br><br><strong>Included:</strong> Advanced color grading, motion graphics, premium transitions, full sound design, unlimited revisions, 4K export",
            "pricing.full.desc": "<strong>Cocok untuk:</strong> Brand Campaign, Multi-content Strategy, Agency Projects<br><br><strong>Included:</strong> Custom quote, strategi konten, extended collaboration, priority support, white-label option",
            "pricing.best": "Best Value",
            "rates.subtitle": "Latest Pricing",
            "rates.title": "Adjusted <span class='gradient-text shine-anim'>Rate Card</span>",
            "rates.video_title": "Video Production",
            "rates.short": "Short Content (TikTok/Reels)",
            "rates.cine": "Cinematic Video Editing",
            "rates.color": "Color Grading & Motion",
            "rates.web_title": "Web & UI/UX",
            "rates.landing": "Landing Page / Portfolio",
            "rates.uiux": "UI/UX Design (Figma/Canva)",
            "faq.subtitle": "CLIENT CONCERNS", "faq.title": "Frequently Asked <span class='gradient-text shine-anim'>Questions</span>",
            "faq.q1": "Berapa lama estimasi pengerjaan project?", "faq.a1": "Untuk video Short-Form biasanya memakan waktu 2-3 hari kerja. Sedangkan untuk Cinematic Story/Full Brand, proses memakan waktu 1-2 minggu tergantung kompleksitas, karena kami memastikan pewarnaan dan <em>sound design</em> yang sempurna.",
            "faq.q2": "Bagaimana sistem revisinya?", "faq.a2": "Kami sangat menghargai visi Anda. Paket dasar mencakup 1x revisi minor. Untuk paket Cinematic/Custom, kami menyediakan sesi <em>live-review</em> dan revisi tak terbatas hingga output benar-benar selaras dengan identitas brand Anda.",
            "faq.q3": "Apakah saya akan mendapatkan file mentah (Raw Files)?", "faq.a3": "Secara <em>default</em>, yang diserahkan adalah hasil akhir dengan <em>color grading</em> dan resolusi maksimal (4K). Namun, <em>Raw Files</em> dan <em>Project Files</em> (DaVinci/Premiere) dapat disertakan dengan biaya tambahan (buyout clause).",
            "contact.title": "READY TO <br><span class='gradient-text shine-anim'>SCALE?</span>", "contact.subtitle": "Direct Contact", "contact.btn": "Get In Touch"
        }
    },
    en: {
        translation: {
            "loader.text": "LOADING EXPERIENCE",
            "nav.about": "ABOUT", "nav.works": "WORKS", "nav.process": "PROCESS",
            "nav.experience": "JOURNEY", "nav.pricing": "RATES", "nav.faq": "FAQ", "nav.cta": "HIRE ME",
            "nav.tools": "SKILLS", "nav.workflow": "WORKFLOW", "nav.rates": "NEW RATES",
            "hero.sub": "AI-POWERED VISUAL ARTIST",
            "hero.desc": "I don't just cut clips. I craft cinematic stories, professional photography, and AI-integrated visuals.",
            "hero.btn_work": "VIEW PORTFOLIO", "hero.btn_talk": "LET'S TALK",
            "trust.agencies": "Top agencies", "trust.wedding": "Wedding planners", "trust.documentary": "Documentary crews",
            "trust.brands": "Brands cross industries", "trust.creative": "Creative directors",
            "about.subtitle": "Expertise & Philosophy",
            "about.title": "Merging Tech with <span class='gradient-text shine-anim'>Soul.</span>",
            "about.desc1": "Hello! I am Afif, a <strong>Visual Storyteller</strong> who believes that every <em>frame</em> has a soul. I combine technical color application (<strong>Color Science</strong>) with emotional narrative to create content that is not only visually beautiful but also resonates deeply with the audience.",
            "about.desc2": "For me, video editing is not just about connecting clips, but about building an emotional connection with the audience through seamless transitions, precise <em>sound design</em>, and color grading that tells its own story. Every project is an opportunity to create an unforgettable visual experience.",
            "about.role1_title": "Post-Production Expert", "about.role1_desc": "Proficient in using DaVinci Resolve for cinematic color grading and Premiere/CapCut for fast editing.",
            "about.role2_title": "Professional Retouching", "about.role2_desc": "Photo editing specialist using Adobe Lightroom for consistent and premium tone color results.",
            "about.role3_title": "Visual AI Integrator", "about.role3_desc": "Implementing AI (Midjourney/Firefly) to create unique and stunning visual assets.",
            "tools.subtitle": "How I Work",
            "tools.title": "Tools & <span class='gradient-text shine-anim'>Creative Logic</span>",
            "tools.cat1_title": "Video & Visual",
            "tools.cat1_desc": "I rely on Premiere Pro & DaVinci Resolve for cinematic color grading, and CapCut for fast-paced trendy content. Visual details are perfected with Lightroom & Canva.",
            "tools.cat2_title": "Tech & Web Dev",
            "tools.cat2_desc": "Building responsive websites with the help of Blackbox AI & Copilot. Clean, modern, and maintainable code.",
            "tools.cat3_title": "AI-Powered Logic",
            "tools.cat3_desc": "Every project's strategy & narrative is strengthened by deep research using Gemini, Claude, and DeepSeek to hit the right audience.",
            "work.subtitle": "Visual Impact", "work.title": "Color Grading & <span class='gradient-text shine-anim'>AI Art</span> Mastery",
            "work.desc1": "<strong>Problem:</strong> Client needs an emotional but efficient travel video.<br><br><strong>Solution:</strong> Using CapCut, I blend strong storytelling with cohesive color grading in 4K resolution for maximum cinematic results.",
            "work.desc2": "Resolution-high editing strategy with high retention to maximize engagement performance across Short-Form Platforms.",
            "work.before": "BEFORE (RAW)", "work.after": "AFTER (GRADED)",
            "process.subtitle": "Creative SOP", "process.title": "Our <span class='gradient-text shine-anim'>Collaborative</span> Process",
            "process.step1": "STEP 01", "process.step2": "STEP 02", "process.step3": "STEP 03", "process.step4": "STEP 04",
            "process.q1": "Discovery & Brief", "process.a1": "Deep session to understand the vision, brand identity, and emotional goals you wish to achieve.",
            "process.q2": "AI Generation", "process.a2": "Using AI (Midjourney/Firefly) to create unique visual assets, storyboards, or visual references.",
            "process.q3": "Post-Production", "process.a3": "Core process: fast editing, advanced color grading (DaVinci/Resolve), and cinematic sound design.",
            "process.q4": "Final Delivery", "process.a4": "Maximum resolution export (4K) and delivery of assets via premium cloud storage with high stability.",
            "workflow.subtitle": "Transparent Process",
            "workflow.title": "Project <span class='gradient-text shine-anim'>Workflow</span>",
            "workflow.desc": "I keep every step clear so you're always in the loop.",
            "workflow.step1": "01 Client & Inquiry",
            "workflow.desc1": "Initial chat via WhatsApp to understand your needs and vision.",
            "workflow.step2": "02 Deal & Strategy",
            "workflow.desc2": "Agreement & work plan neatly organized via Google Docs & Adobe Acrobat.",
            "workflow.step3": "03 Asset Gathering",
            "workflow.desc3": "Send raw materials through an organized Google Drive, safe & easy.",
            "workflow.step4": "04 Production",
            "workflow.desc4": "Video editing (Premiere/CapCut) & visual creation begins.",
            "workflow.step5": "05 Initial Review",
            "workflow.desc5": "First draft delivered; you give feedback for revision.",
            "workflow.step6": "06 Final Polish",
            "workflow.desc6": "Finishing: final color grading, audio sync, and performance optimization.",
            "workflow.step7": "07 Final Delivery",
            "workflow.desc7": "High-quality final files sent via Google Drive, ready to publish.",
            "journey.title": "Professional <span class='gradient-text shine-anim'>Journey</span>",
            "journey.role1": "UI/UX Designer & Web Developer", "journey.desc1_1": "Designing & building a premium digital ecosystem based on AI collaboration (Gemini, Blackbox, Canva).", "journey.desc1_2": "Integrating <em>live prototyping</em> and interactive UI design for a high-end <em>user experience</em>.", "journey.desc1_3": "Managing web architecture infrastructure for global <em>deployment</em> via GitHub & Netlify.",
            "journey.role2": "Lead Content Specialist & Editor", "journey.desc2_1": "Managing <em>end-to-end</em> daily content production for spiritual Umrah journeys.", "journey.desc2_2": "Combining *post-production* efficiency with a cinematic storytelling style (CapCut).", "journey.desc2_3": "Focusing on delivering emotional narratives that successfully increase audience <em>engagement</em>.",
            "journey.role3": "Freelance Visual Creator", "journey.desc3_1": "Translating vision of clients across industries into visual masterpieces and commercial videos.", "journey.desc3_2": "Trusted to lead the execution of premium documentation (Wedding, Graduation, Corporate).", "journey.desc3_3": "Formulating visual identity & brand color grade using Adobe Lightroom and Canva.",
            "journey.role4": "Videographer, Editor & Crew", "journey.desc4_1": "Starting point of deepening the art of <em>visual storytelling</em> and documentary production field dynamics.", "journey.desc4_2": "Played a crucial role in assembling <em>raw footage</em> into a cohesive visual narrative via DaVinci Resolve.", "journey.desc4_3": "Responsible for operational flow and essential <em>Behind the Scenes</em> documentation.",
            "pricing.subtitle": "Investment", "pricing.title": "Our Rate <span class='gradient-text shine-anim'>Card</span>", "pricing.desc": "Every package is designed to provide maximum value. Select according to your needs or discuss a custom solution.",
            "pricing.short.desc": "<strong>Suitable for:</strong> TikTok, Reels, YouTube Shorts<br><br><strong>Included:</strong> Professional editing, basic color grading, smooth transitions, background music, 1x revision",
            "pricing.cine.desc": "<strong>Suitable for:</strong> Wedding, Campaign Video, Documentary, Brand Story<br><br><strong>Included:</strong> Advanced color grading, motion graphics, premium transitions, full sound design, unlimited revisions, 4K export",
            "pricing.full.desc": "<strong>Suitable for:</strong> Brand Campaign, Multi-content Strategy, Agency Projects<br><br><strong>Included:</strong> Custom quote, content strategy, extended collaboration, priority support, white-label option",
            "pricing.best": "Best Value",
            "rates.subtitle": "Latest Pricing",
            "rates.title": "Adjusted <span class='gradient-text shine-anim'>Rate Card</span>",
            "rates.video_title": "Video Production",
            "rates.short": "Short Content (TikTok/Reels)",
            "rates.cine": "Cinematic Video Editing",
            "rates.color": "Color Grading & Motion",
            "rates.web_title": "Web & UI/UX",
            "rates.landing": "Landing Page / Portfolio",
            "rates.uiux": "UI/UX Design (Figma/Canva)",
            "faq.subtitle": "CLIENT CONCERNS", "faq.title": "Frequently Asked <span class='gradient-text shine-anim'>Questions</span>",
            "faq.q1": "What is the estimated turnaround time for a project?", "faq.a1": "Short-form videos typically take 2-3 business days. For Cinematic Stories or Full Brand projects, the process takes 1-2 weeks depending on complexity, as we ensure flawless color grading and <em>sound design</em>.",
            "faq.q2": "How does the revision process work?", "faq.a2": "We deeply value your vision. Basic packages include 1 minor revision. For Cinematic/Custom packages, we provide <em>live-review</em> sessions and unlimited revisions until the output perfectly aligns with your brand identity.",
            "faq.q3": "Will I receive the Raw Files?", "faq.a3": "By <em>default</em>, the final output is delivered with full <em>color grading</em> in maximum resolution (4K). However, *Raw Files* and *Project Files* (DaVinci/Premiere) can be included for an additional fee (buyout clause).",
            "contact.title": "READY TO <br><span class='gradient-text shine-anim'>SCALE?</span>", "contact.subtitle": "Direct Contact", "contact.btn": "Get In Touch"
        }
    }
};

function initI18n() {
    if (typeof i18next === 'undefined') return;
    i18next.init({ lng: localStorage.getItem('lang') || 'id', resources: resources, fallbackLng: 'en' }, () => {
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
        if (key) el.innerHTML = i18next.t(key);
    });
}

// ===== 3. PRELOADER & ENTRANCE ANIMATION =====
function initPreloader() {
    if (typeof gsap === 'undefined') return;
    const tl = gsap.timeline();
    tl.to("#progress", { width: "100%", duration: 1.5, ease: "power4.inOut" })
      .to("#loader", { y: "-100%", duration: 1.2, ease: "power4.inOut" }, "-=0.3")
      .to(".fade-in-up", { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }, "-=0.8");
}

// ===== 4. CUSTOM CURSOR =====
function initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor || typeof gsap === 'undefined') return;

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" });
    });

    const hoverElements = document.querySelectorAll('a, button, select, .glass, .magnetic-target');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(3)'; cursor.style.backgroundColor = 'rgba(0, 242, 254, 0.8)'; });
        el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)'; cursor.style.backgroundColor = '#fff'; });
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
            if (target) gsap.to(window, { duration: 1.2, scrollTo: { y: target, offsetY: 80 }, ease: "power3.inOut" });
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
            trigger: "#home", start: "top top", end: "bottom top",
            onUpdate: (self) => {
                if (self.progress > 0.1) nav.classList.add('bg-black/40', 'backdrop-blur-xl', 'border-b', 'border-white/10');
                else nav.classList.remove('bg-black/40', 'backdrop-blur-xl', 'border-b', 'border-white/10');
            }
        });
    }

    gsap.utils.toArray('section:not(#home) .fade-in-up').forEach(element => {
        gsap.to(element, {
            scrollTrigger: { trigger: element, start: "top 85%", toggleActions: "play none none none" },
            opacity: 1, y: 0, duration: 1, ease: "power3.out"
        });
    });
}

// ===== 7. VIDEO OPTIMIZATION =====
function optimizeVideo() {
    const video = document.getElementById('bgVideo');
    if (video) video.play().catch(e => { video.muted = true; video.play(); });
}

// ===== 8. MAGNETIC ELEMENTS =====
function initMagneticElements() {
    if (typeof gsap === 'undefined') return;
    const magnets = document.querySelectorAll('.magnetic-target, .glass-target');

    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', (e) => {
            const position = magnet.getBoundingClientRect();
            const x = (e.clientX - position.left - position.width / 2) * 0.1;
            const y = (e.clientY - position.top - position.height / 2) * 0.1;
            gsap.to(magnet, { x: x, y: y, duration: 0.5, ease: "power2.out" });
        });
        magnet.addEventListener('mouseleave', () => {
            gsap.to(magnet, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
        });
    });
}

// ===== 9. FAQ ACCORDION =====
function initFAQ() {
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            faqBtns.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.classList.remove('active');
                    otherBtn.nextElementSibling.classList.remove('open');
                }
            });
            btn.classList.toggle('active');
            content.classList.toggle('open');
            setTimeout(() => { if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh(); }, 500);
        });
    });
}

// ===== 10. COMPARISON SLIDER =====
function initComparisonSlider() {
    const containers = document.querySelectorAll('.comparison-slider-container');

    containers.forEach(container => {
        const handle = container.querySelector('.slider-handle');
        const beforeImg = container.querySelector('.before-image');
        let active = false;

        container.addEventListener('mousedown', () => active = true);
        container.addEventListener('mouseup', () => active = false);
        container.addEventListener('mouseleave', () => active = false);
        container.addEventListener('touchstart', () => active = true);
        container.addEventListener('touchend', () => active = false);
        container.addEventListener('touchcancel', () => active = false);

        const moveSlider = (e) => {
            if (!active) return;
            const position = container.getBoundingClientRect();
            let x = (e.touches ? e.touches[0].clientX : e.clientX) - position.left;
            x = Math.max(0, Math.min(x, position.width));
            const percentage = (x / position.width) * 100;

            gsap.to(handle, { left: percentage + '%', duration: 0.1, ease: 'power2.out' });
            gsap.to(beforeImg, { clipPath: `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`, duration: 0.1, ease: 'power2.out' });
        };

        container.addEventListener('mousemove', moveSlider);
        container.addEventListener('touchmove', moveSlider);
    });
}
