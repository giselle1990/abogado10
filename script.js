document.addEventListener('DOMContentLoaded', () => {
    // Animación del título y subtítulo del hero
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');

    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(-50px)';
    heroSubtitle.style.opacity = '0';
    heroSubtitle.style.transform = 'translateY(50px)';

    setTimeout(() => {
        heroTitle.style.transition = 'opacity 0.5s, transform 0.5s';
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        heroSubtitle.style.transition = 'opacity 0.5s, transform 0.5s';
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 300);

    // Animación de los servicios al hacer scroll
    const servicios = document.querySelectorAll('.servicio');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    servicios.forEach((servicio) => {
        servicio.style.opacity = '0';
        servicio.style.transform = 'translateY(20px)';
        servicio.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(servicio);
    });

    // Animación de los botones al hacer hover
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        button.style.transition = 'transform 0.3s';
    });

    // Manejo del formulario de contacto
    const contactForm = document.querySelector('.contacto-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('Mensaje enviado con éxito!');
        contactForm.reset();
    });
});