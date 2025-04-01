const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    slider.addEventListener('input', function (e) {
        e.stopPropagation(); // Para evitar que o evento clique seja disparado
        // Agora pegamos o contêiner correto onde o slider está
        const container = e.target.closest('.image-container'); 

        const beforeImage = container.querySelector('.before');
        const asterisk = container.querySelector('.fa-arrows-alt-h');
        const value = e.target.value;

        beforeImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        asterisk.style.left = value + '%';
    });
});

const accordions = document.querySelectorAll('.faq-accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function () {
        const body = accordion.querySelector('.accordion-body');

        body.classList.toggle('active');
    });
})