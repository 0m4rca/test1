const slides = document.querySelectorAll('.carousel-slide');
const prevArrow = document.querySelector('.carousel-arrow.prev');
const nextArrow = document.querySelector('.carousel-arrow.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.transform = 'translateX(0)';
        } else {
            slide.style.transform = 'translateX(100%)';
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

nextArrow.addEventListener('click', nextSlide);
prevArrow.addEventListener('click', prevSlide);

// Show the initial slide
showSlide(currentSlide);

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}