/*=========================================
MENU.JS
Responsive Navigation
=========================================*/

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const dropdowns = document.querySelectorAll(".dropdown");

/*=========================================
OPEN/CLOSE MOBILE MENU
=========================================*/

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

});

/*=========================================
MOBILE DROPDOWN
=========================================*/

dropdowns.forEach(dropdown => {

    dropdown.addEventListener("click", function (e) {

        if (window.innerWidth <= 992) {

            e.stopPropagation();

            dropdowns.forEach(item => {

                if (item !== this) {

                    item.classList.remove("active");

                }

            });

            this.classList.toggle("active");

        }

    });

});

/*=========================================
CLOSE MENU WHEN CLICKING OUTSIDE
=========================================*/

document.addEventListener("click", function (e) {

    if (

        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)

    ) {

        navLinks.classList.remove("active");

        hamburger.classList.remove("active");

        dropdowns.forEach(drop => {

            drop.classList.remove("active");

        });

    }

});

/*=========================================
CLOSE MENU WHEN LINK IS CLICKED
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 992) {

            navLinks.classList.remove("active");
            hamburger.classList.remove("active");

        }

    });

});

/*=========================================
STICKY HEADER
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*=========================================
SMOOTH ACTIVE LINK
=========================================*/

const navItems = document.querySelectorAll(".nav-links li");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(nav => nav.classList.remove("active"));

        item.classList.add("active");

    });

});

/*=========================================
ESC KEY CLOSE MENU
=========================================*/

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        navLinks.classList.remove("active");

        hamburger.classList.remove("active");

    }

});

/*=========================================
RESET ON RESIZE
=========================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        navLinks.classList.remove("active");

        hamburger.classList.remove("active");

        dropdowns.forEach(drop => {

            drop.classList.remove("active");

        });

    }

});

/*=========================================
TOP BAR CLOSE
=========================================*/

const closeBtn = document.querySelector(".close-btn");
const topBar = document.querySelector(".top-bar");

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        topBar.style.display = "none";

    });

}

/*=========================================
SEARCH ICON
=========================================*/

const searchIcon = document.querySelector(".header-icons i");

if (searchIcon) {

    searchIcon.addEventListener("click", () => {

        alert("Search feature coming soon!");

    });

}

/*=========================================
END
=========================================*/