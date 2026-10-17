// ============================================
// BARBEARIA CLÁSSICA - MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Form Submission ---
    const form = document.getElementById('agendamentoForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const servico = document.getElementById('servico').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;

        // Simple confirmation message
        alert(
            'Agendamento realizado com sucesso!\n\n' +
            'Nome: ' + nome + '\n' +
            'Serviço: ' + servico + '\n' +
            'Data: ' + data + '\n' +
            'Horário: ' + hora + '\n\n' +
            'Entraremos em contato para confirmar.'
        );

        form.reset();
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.servico-card, .depoimento-card, .galeria__item').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // --- Set minimum date to today ---
    const dateInput = document.getElementById('data');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

});
