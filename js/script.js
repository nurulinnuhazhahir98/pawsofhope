document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const previousButton = document.querySelector(".previous-btn");
    const nextButton = document.querySelector(".next-btn");

    let currentSlide = 0;

    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });

        slides[currentSlide].classList.add("active");

        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }
    }

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            showSlide(currentSlide + 1);
        });
    }

    if (previousButton) {
        previousButton.addEventListener("click", function () {
            showSlide(currentSlide - 1);
        });
    }

    dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            showSlide(index);
        });
    });

    showSlide(0);

});