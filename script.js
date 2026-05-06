document.addEventListener('DOMContentLoaded', () => {
    // Render Ikon dari Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Logic Animasi Scroll menggunakan Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Mencegah lag, animasi diputar sekali saja
            }
        });
    }, observerOptions);

    // Memantau semua elemen yang punya class reveal & timeline-item
    document.querySelectorAll('.reveal, .timeline-item').forEach(el => {
        observer.observe(el);
    });

    // Navigasi Smooth Scroll Offset
    document.querySelectorAll('.nav-link, a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Hindari error jika href hanya "#"
            if (targetId === "#") return;

            const target = document.querySelector(targetId);
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Mengurangi tinggi navbar agar judul tidak tertutup
                    behavior: 'smooth'
                });
            }
        });
    });
});
