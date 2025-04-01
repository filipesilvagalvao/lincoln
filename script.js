const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    slider.addEventListener('input', function (e) {
        const container = e.target.closest('.image-container'); 
        if (!container) return; // Evita erros se o container não for encontrado

        const beforeImage = container.querySelector('.before');
        const asterisk = container.querySelector('.fa-arrows-alt-h');
        const value = e.target.value;

        beforeImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        asterisk.style.left = value + '%';
    });

    // Garante que o slider esteja sempre interativo
    slider.style.pointerEvents = 'auto';
    slider.style.zIndex = '10'; // Garante que ele fique sobre os outros elementos
});

const accordions = document.querySelectorAll('.faq-accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function (e) {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    });
});
