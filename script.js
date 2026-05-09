document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  initI18n();
  initCursor();
  initSmoothScroll();
  registerGSAP();
  initMagneticElements();
  initFAQ();
  initComparisonSlider();
  initLazyVideos();
});

window.addEventListener('load', () => {
  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline();
    tl.to("#progress", { width: "100%", duration: 1.5, ease: "power4.inOut" })
      .to("#loader", { y: "-100%", duration: 1.2, ease: "power4.inOut" }, "-=0.3")
      .to(".fade-in-up", { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }, "-=0.8");
  } else {
    document.getElementById('loader').style.display = 'none';
    document.querySelectorAll('.fade-in-up').forEach(el => { el.style.opacity = 1; el.style.transform = 'translateY(0)'; });
  }
});

const resources = {
  id: { translation: {
    "loader.text":"LOADING EXPERIENCE",
    "nav.about":"TENTANG","nav.tools":"KEAHLIAN","nav.works":"KARYA","nav.process":"PROSES","nav.workflow":"ALUR KERJA","nav.experience":"PERJALANAN","nav.pricing":"HARGA","nav.faq":"FAQ","nav.cta":"HUBUNGI",
    "hero.sub":"SENIMAN VISUAL BERBASIS AI","hero.desc":"Bukan sekadar memotong klip. Saya merangkai cerita sinematik, fotografi profesional, dan visual berbasis AI.","hero.btn_work":"LIHAT KARYA","hero.btn_talk":"LET'S TALK",
    "trust.agencies":"Dipercaya oleh Agensi Top","trust.wedding":"Perencana Pernikahan","trust.documentary":"Kru Dokumenter","trust.brands":"Brand Lintas Industri","trust.creative":"Direktur Kreatif",
    "about.subtitle":"Expertise & Philosophy","about.title":"Merging Tech with <span class='gradient-text shine-anim'>Soul.</span>",
    "about.desc1":"Halo! Saya Afif, seorang <strong>Visual Storyteller</strong> yang percaya bahwa setiap <em>frame</em> memiliki jiwa.","about.desc2":"Bagi saya, video editing bukan sekadar menyambung potongan klip...",
    "about.role1_title":"Post-Production Expert","about.role1_desc":"Mahir menggunakan DaVinci Resolve...","about.role2_title":"Professional Retouching","about.role2_desc":"Spesialis editing foto...","about.role3_title":"Visual AI Integrator","about.role3_desc":"Mengimplementasikan AI...",
    "tools.subtitle":"How I Work","tools.title":"Tools & <span class='gradient-text shine-anim'>Creative Logic</span>","tools.cat1_title":"Video & Visual","tools.cat1_desc":"Saya mengandalkan Premiere Pro...","tools.cat2_title":"Tech & Web Dev","tools.cat2_desc":"Membangun web responsif...","tools.cat3_title":"AI-Powered Logic","tools.cat3_desc":"Strategi & narasi...",
    "work.subtitle":"Visual Impact","work.title":"Color Grading & <span class='gradient-text shine-anim'>AI Art</span> Mastery","work.desc2":"Strategi editing...","work.before":"BEFORE (RAW)","work.after":"AFTER (GRADED)",
    "process.subtitle":"Creative SOP","process.title":"Our <span class='gradient-text shine-anim'>Collaborative</span> Process","process.step1":"STEP 01","process.step2":"STEP 02","process.step3":"STEP 03","process.step4":"STEP 04",
    "process.q1":"Discovery & Brief","process.a1":"Sesi mendalam...","process.q2":"AI Generation","process.a2":"Menggunakan AI...","process.q3":"Post-Production","process.a3":"Proses inti... (DaVinci/CapCut)","process.q4":"Final Delivery","process.a4":"Ekspor resolusi maksimal...",
    "workflow.subtitle":"Transparent Process","workflow.title":"Project <span class='gradient-text shine-anim'>Workflow</span>","workflow.desc":"Setiap tahap...","workflow.step1":"01 Client & Inquiry","workflow.desc1":"Komunikasi via WhatsApp...","workflow.step2":"02 Deal & Strategy","workflow.desc2":"Kesepakatan...","workflow.step3":"03 Asset Gathering","workflow.desc3":"Kirim bahan mentah...","workflow.step4":"04 Production","workflow.desc4":"Proses editing...","workflow.step5":"05 Initial Review","workflow.desc5":"Draf pertama...","workflow.step6":"06 Final Polish","workflow.desc6":"Finishing...","workflow.step7":"07 Final Delivery","workflow.desc7":"Hasil akhir...",
    "journey.title":"Professional <span class='gradient-text shine-anim'>Journey</span>","journey.role1":"UI/UX Designer & Web Developer","journey.desc1_1":"Merancang...","journey.desc1_2":"Mengintegrasikan...","journey.desc1_3":"Mengelola...","journey.role2":"Lead Content Specialist & Editor","journey.desc2_1":"Mengelola end-to-end...","journey.desc2_2":"Memadukan...","journey.desc2_3":"Fokus...","journey.role3":"Freelance Visual Creator","journey.desc3_1":"Menerjemahkan...","journey.desc3_2":"Dipercaya memimpin (Wedding, Travel, Graduation, Corporate)","journey.desc3_3":"Merumuskan...","journey.role4":"Videographer, Editor & Crew","journey.desc4_1":"Titik awal...","journey.desc4_2":"Berperan...","journey.desc4_3":"Bertanggung jawab...",
    "pricing.subtitle":"Investment","pricing.title":"Our Rate <span class='gradient-text shine-anim'>Card</span>","pricing.desc":"Setiap paket...","pricing.short.desc":"<strong>Cocok untuk:</strong> TikTok...","pricing.cine.desc":"<strong>Cocok untuk:</strong> Wedding...","pricing.full.desc":"<strong>Cocok untuk:</strong> Brand...","pricing.best":"Best Value",
    "faq.subtitle":"CLIENT CONCERNS","faq.title":"Frequently Asked <span class='gradient-text shine-anim'>Questions</span>","faq.q1":"Berapa lama estimasi?","faq.a1":"Short-Form 2-3 hari...","faq.q2":"Bagaimana revisi?","faq.a2":"Kami sangat menghargai...","faq.q3":"Raw Files?","faq.a3":"Default hasil akhir...",
    "contact.title":"READY TO <br><span class='gradient-text shine-anim'>SCALE?</span>","contact.subtitle":"Direct Contact","contact.btn":"Get In Touch"
  }},
  en: { translation: {
    "loader.text":"LOADING EXPERIENCE",
    "nav.about":"ABOUT","nav.tools":"SKILLS","nav.works":"WORKS","nav.process":"PROCESS","nav.workflow":"WORKFLOW","nav.experience":"JOURNEY","nav.pricing":"RATES","nav.faq":"FAQ","nav.cta":"HIRE ME",
    "hero.sub":"AI-POWERED VISUAL ARTIST","hero.desc":"I don't just cut clips...","hero.btn_work":"VIEW PORTFOLIO","hero.btn_talk":"LET'S TALK",
    "trust.agencies":"Trusted by Top Agencies","trust.wedding":"Wedding Planners","trust.documentary":"Documentary Crews","trust.brands":"Brands Across Industries","trust.creative":"Creative Directors",
    "about.subtitle":"Expertise & Philosophy","about.title":"Merging Tech with <span class='gradient-text shine-anim'>Soul.</span>","about.desc1":"Hello! I am Afif...","about.desc2":"For me, video editing...","about.role1_title":"Post-Production Expert","about.role1_desc":"Proficient in DaVinci Resolve...","about.role2_title":"Professional Retouching","about.role2_desc":"Photo editing specialist...","about.role3_title":"Visual AI Integrator","about.role3_desc":"Implementing AI...",
    "tools.subtitle":"How I Work","tools.title":"Tools & <span class='gradient-text shine-anim'>Creative Logic</span>","tools.cat1_title":"Video & Visual","tools.cat1_desc":"I rely on Premiere Pro...","tools.cat2_title":"Tech & Web Dev","tools.cat2_desc":"Building responsive websites...","tools.cat3_title":"AI-Powered Logic","tools.cat3_desc":"Every project's strategy...",
    "work.subtitle":"Visual Impact","work.title":"Color Grading & <span class='gradient-text shine-anim'>AI Art</span> Mastery","work.desc2":"High-retention editing...","work.before":"BEFORE (RAW)","work.after":"AFTER (GRADED)",
    "process.subtitle":"Creative SOP","process.title":"Our <span class='gradient-text shine-anim'>Collaborative</span> Process","process.step1":"STEP 01","process.step2":"STEP 02","process.step3":"STEP 03","process.step4":"STEP 04",
    "process.q1":"Discovery & Brief","process.a1":"Deep session...","process.q2":"AI Generation","process.a2":"Using AI...","process.q3":"Post-Production","process.a3":"Core process... (DaVinci/CapCut)","process.q4":"Final Delivery","process.a4":"Maximum resolution...",
    "workflow.subtitle":"Transparent Process","workflow.title":"Project <span class='gradient-text shine-anim'>Workflow</span>","workflow.desc":"I keep every step clear...","workflow.step1":"01 Client & Inquiry","workflow.desc1":"Initial chat...","workflow.step2":"02 Deal & Strategy","workflow.desc2":"Agreement...","workflow.step3":"03 Asset Gathering","workflow.desc3":"Send raw materials...","workflow.step4":"04 Production","workflow.desc4":"Video editing...","workflow.step5":"05 Initial Review","workflow.desc5":"First draft...","workflow.step6":"06 Final Polish","workflow.desc6":"Finishing...","workflow.step7":"07 Final Delivery","workflow.desc7":"High-quality final files...",
    "journey.title":"Professional <span class='gradient-text shine-anim'>Journey</span>","journey.role1":"UI/UX Designer & Web Developer","journey.desc1_1":"Designing...","journey.desc1_2":"Integrating...","journey.desc1_3":"Managing...","journey.role2":"Lead Content Specialist & Editor","journey.desc2_1":"Managing end-to-end...","journey.desc2_2":"Combining...","journey.desc2_3":"Focusing...","journey.role3":"Freelance Visual Creator","journey.desc3_1":"Translating...","journey.desc3_2":"Trusted to lead (Wedding, Travel, Graduation, Corporate)","journey.desc3_3":"Formulating...","journey.role4":"Videographer, Editor & Crew","journey.desc4_1":"Starting point...","journey.desc4_2":"Played crucial role...","journey.desc4_3":"Responsible...",
    "pricing.subtitle":"Investment","pricing.title":"Our Rate <span class='gradient-text shine-anim'>Card</span>","pricing.desc":"Every package...","pricing.short.desc":"<strong>Suitable for:</strong> TikTok...","pricing.cine.desc":"<strong>Suitable for:</strong> Wedding...","pricing.full.desc":"<strong>Suitable for:</strong> Brand...","pricing.best":"Best Value",
    "faq.subtitle":"CLIENT CONCERNS","faq.title":"Frequently Asked <span class='gradient-text shine-anim'>Questions</span>","faq.q1":"Turnaround time?","faq.a1":"Short-form 2-3 days...","faq.q2":"Revision process?","faq.a2":"We deeply value...","faq.q3":"Raw Files?","faq.a3":"By default final export...",
    "contact.title":"READY TO <br><span class='gradient-text shine-anim'>SCALE?</span>","contact.subtitle":"Direct Contact","contact.btn":"Get In Touch"
  }}
};

function initI18n() {
  if (typeof i18next === 'undefined') return;
  i18next.init({ lng: localStorage.getItem('lang') || 'id', resources, fallbackLng: 'en' }, () => {
    updateContent();
    document.getElementById('langSwitcher').value = i18next.language;
    if (document.getElementById('langSwitcherMobile')) document.getElementById('langSwitcherMobile').value = i18next.language;
  });
  document.getElementById('langSwitcher')?.addEventListener('change', (e) => {
    i18next.changeLanguage(e.target.value, () => { updateContent(); localStorage.setItem('lang', e.target.value); if (document.getElementById('langSwitcherMobile')) document.getElementById('langSwitcherMobile').value = e.target.value; });
  });
}

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); if (key) el.innerHTML = i18next.t(key); });
  if (typeof lucide !== 'undefined') setTimeout(() => lucide.createIcons(), 10);
}

function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor || typeof gsap === 'undefined') return;
  document.addEventListener('mousemove', (e) => gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.15 }));
  document.querySelectorAll('a, button, select, .glass, .magnetic-target').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform='scale(3)'; cursor.style.backgroundColor='rgba(0,242,254,0.8)'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform='scale(1)'; cursor.style.backgroundColor='#fff'; });
  });
}

function initSmoothScroll() { if (typeof gsap === 'undefined') return; document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', function(e) { e.preventDefault(); const id = this.getAttribute('href').substring(1); if (!id) return; const target = document.getElementById(id); if (target) gsap.to(window, { duration: 1.2, scrollTo: { y: target, offsetY: 80 }, ease: "power3.inOut" }); }); }); }

function registerGSAP() {
  if (typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  const nav = document.querySelector('nav');
  if (nav) { ScrollTrigger.create({ trigger: "#home", start: "top top", end: "bottom top", onUpdate: (self) => { if (self.progress > 0.1) nav.classList.add('bg-black/40','backdrop-blur-xl','border-b','border-white/10'); else nav.classList.remove('bg-black/40','backdrop-blur-xl','border-b','border-white/10'); }}); }
  gsap.utils.toArray('section:not(#home) .fade-in-up').forEach(el => { gsap.to(el, { scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }, opacity: 1, y: 0, duration: 1, ease: "power3.out" }); });
}

function initMagneticElements() { if (typeof gsap === 'undefined') return; document.querySelectorAll('.magnetic-target, .glass-target').forEach(m => { m.addEventListener('mousemove', (e) => { const r = m.getBoundingClientRect(); gsap.to(m, { x: (e.clientX - r.left - r.width/2)*0.1, y: (e.clientY - r.top - r.height/2)*0.1, duration: 0.5 }); }); m.addEventListener('mouseleave', () => gsap.to(m, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1,0.3)" })); }); }

function initFAQ() { document.querySelectorAll('.faq-btn').forEach(btn => { btn.addEventListener('click', () => { const content = btn.nextElementSibling; document.querySelectorAll('.faq-btn').forEach(b => { if(b!==btn){ b.classList.remove('active'); b.nextElementSibling.classList.remove('open'); } }); btn.classList.toggle('active'); content.classList.toggle('open'); setTimeout(() => { if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh(); }, 500); }); }); }

function initComparisonSlider() { document.querySelectorAll('.comparison-slider-container').forEach(c => { const h = c.querySelector('.slider-handle'), b = c.querySelector('.before-image'), a = c.querySelector('.after-image'); if (!h||!b||!a) return; let ready = 0; const check = () => { ready++; if(ready===2){ b.currentTime=0; a.currentTime=0; b.play().catch(()=>{}); a.play().catch(()=>{}); } }; b.addEventListener('loadeddata', check); a.addEventListener('loadeddata', check); if(b.readyState>=2) check.call(b); if(a.readyState>=2) check.call(a); let active = false; c.addEventListener('mousedown', ()=>active=true); c.addEventListener('mouseup', ()=>active=false); c.addEventListener('mouseleave', ()=>active=false); c.addEventListener('touchstart', ()=>active=true); c.addEventListener('touchend', ()=>active=false); const move = (e) => { if(!active) return; const r = c.getBoundingClientRect(); let x = (e.touches?e.touches[0].clientX:e.clientX) - r.left; x = Math.max(0, Math.min(x, r.width)); const p = (x/r.width)*100; gsap.to(h, { left: p+'%', duration: 0.1 }); gsap.to(b, { clipPath: `polygon(0 0, ${p}% 0, ${p}% 100%, 0 100%)`, duration: 0.1 }); }; c.addEventListener('mousemove', move); c.addEventListener('touchmove', move); }); }

function initLazyVideos() { document.querySelectorAll('.lazy-video').forEach(video => { if (video.getBoundingClientRect().top < window.innerHeight) { video.play().catch(()=>{}); } else { const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.play().catch(()=>{}); observer.unobserve(entry.target); } }); }, { threshold: 0.1 }); observer.observe(video); } }); }

function toggleMobileMenu() { const menu = document.getElementById('mobileMenu'); const btn = document.getElementById('hamburgerBtn'); if (!menu || !btn) return; menu.classList.toggle('open'); btn.classList.toggle('open'); const icon = btn.querySelector('i'); if (icon) { icon.setAttribute('data-lucide', menu.classList.contains('open') ? 'x' : 'menu'); if (typeof lucide !== 'undefined') lucide.createIcons(); } }
function closeMobileMenu() { const menu = document.getElementById('mobileMenu'); const btn = document.getElementById('hamburgerBtn'); if (menu) menu.classList.remove('open'); if (btn) { btn.classList.remove('open'); const icon = btn.querySelector('i'); if (icon) icon.setAttribute('data-lucide', 'menu'); if (typeof lucide !== 'undefined') lucide.createIcons(); } }
function switchLangMobile(lang) { i18next.changeLanguage(lang, () => { updateContent(); localStorage.setItem('lang', lang); document.getElementById('langSwitcher').value = lang; }); }
