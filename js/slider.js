/*=========================================
HERO SLIDER
=========================================*/

const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentSlide = 0;
let autoSlide;

/*=========================================
SHOW SLIDE
=========================================*/

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

/*=========================================
NEXT SLIDE
=========================================*/

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

/*=========================================
PREVIOUS SLIDE
=========================================*/

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

/*=========================================
BUTTON EVENTS
=========================================*/

nextBtn.addEventListener("click", () => {

    nextSlide();
    restartAutoSlide();

});

prevBtn.addEventListener("click", () => {

    prevSlide();
    restartAutoSlide();

});

/*=========================================
AUTO SLIDER
=========================================*/

function startAutoSlide() {

    autoSlide = setInterval(() => {

        nextSlide();

    }, 5000);

}

/*=========================================
STOP AUTO SLIDER
=========================================*/

function stopAutoSlide() {

    clearInterval(autoSlide);

}

/*=========================================
RESTART
=========================================*/

function restartAutoSlide() {

    stopAutoSlide();
    startAutoSlide();

}

/*=========================================
PAUSE ON HOVER
=========================================*/

const hero = document.querySelector(".hero");

hero.addEventListener("mouseenter", () => {

    stopAutoSlide();

});

hero.addEventListener("mouseleave", () => {

    startAutoSlide();

});

/*=========================================
KEYBOARD SUPPORT
=========================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        nextSlide();
        restartAutoSlide();

    }

    if (e.key === "ArrowLeft") {

        prevSlide();
        restartAutoSlide();

    }

});

/*=========================================
TOUCH SUPPORT
=========================================*/

let touchStartX = 0;
let touchEndX = 0;

hero.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

});

hero.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    handleGesture();

});

function handleGesture() {

    if (touchEndX < touchStartX - 50) {

        nextSlide();
        restartAutoSlide();

    }

    if (touchEndX > touchStartX + 50) {

        prevSlide();
        restartAutoSlide();

    }

}

/*=========================================
DOT INDICATORS
=========================================*/

const slider = document.querySelector(".slides");

const dotsContainer = document.createElement("div");
dotsContainer.className = "slider-dots";

slides.forEach((slide, index) => {

    const dot = document.createElement("span");

    dot.className = "dot";

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

        updateDots();

        restartAutoSlide();

    });

    dotsContainer.appendChild(dot);

});

slider.appendChild(dotsContainer);

/*=========================================
UPDATE DOTS
=========================================*/

function updateDots() {

    const dots = document.querySelectorAll(".dot");

    dots.forEach(dot => {

        dot.classList.remove("active");

    });

    dots[currentSlide].classList.add("active");

}

/*=========================================
UPDATE SHOW SLIDE
=========================================*/

function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

    updateDots();

}

/*=========================================
VISIBILITY CHANGE
=========================================*/

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        stopAutoSlide();

    } else {

        startAutoSlide();

    }

});

/*=========================================
INITIALIZE
=========================================*/

showSlide(currentSlide);

startAutoSlide();

/*=========================================
END
=========================================*/