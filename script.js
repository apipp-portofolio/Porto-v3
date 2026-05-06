// script.js

// 1. Custom Cursor Logic
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    // Memposisikan kursor di tengah mouse
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Efek kursor membesar saat hover link/button
const interactables = document.querySelectorAll('a, button, .work-card');
interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(4)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// 2. GSAP Entrance Animations
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.from(".hero-title", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: 0.5
    })
    .from(".hero-sub", {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power3.out"
    }, "-=0.8")
    .from(".hero-btns", {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power3.out"
    }, "-=0.6")
    .from("nav", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    }, "-=1");
});

// 3. Scroll Reveal Animation for Cards
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".work-card, .rate-card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });
});
