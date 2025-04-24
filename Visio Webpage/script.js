// Toggle Button Functionality
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});


// Carousel Functionality

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const slides = carousel.querySelectorAll("ul li");
    const dots = document.querySelectorAll(".paging span");
    const nextBtn = document.querySelector(".next-carousel");
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000); // auto-slide every 5 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentSlide = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Dot navigation
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            clearInterval(slideInterval); // pause auto-slide on manual click
            showSlide(i);
            slideInterval = setInterval(nextSlide, 5000); // resume auto-slide
        });
    });

    // Next button
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    showSlide(currentSlide); // init
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        clearInterval(slideInterval);
        showSlide(i);
        slideInterval = setInterval(nextSlide, 5000);
    });
});

nextBtn.addEventListener("click", () => {
    clearInterval(slideInterval);
    nextSlide();
    slideInterval = setInterval(nextSlide, 5000);
});


