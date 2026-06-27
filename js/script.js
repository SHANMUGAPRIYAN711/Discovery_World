/*=========================================
SCRIPT.JS
Common Website Features
=========================================*/

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================================
BACK TO TOP BUTTON
=========================================*/

const backTop = document.createElement("button");

backTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

backTop.className = "back-to-top";

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
REVEAL ANIMATION
=========================================*/

const reveals = document.querySelectorAll(

    ".card, .event-card, .newsletter, footer"

);

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},

{

threshold:0.2

}

);

reveals.forEach(item=>{

observer.observe(item);

});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;
const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

/*=========================================
COUNTER
=========================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=========================================
PRELOADER
=========================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},600);

}

});

/*=========================================
HEADER SHADOW
=========================================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 12px 35px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="none";

}

});

/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

const buttons=document.querySelectorAll("button,a.hero-btn,.ticket-btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

const radius=diameter/2;

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.clientX-this.getBoundingClientRect().left-radius+"px";

circle.style.top=e.clientY-this.getBoundingClientRect().top-radius+"px";

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/*=========================================
LAZY IMAGE LOADING
=========================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries,observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.src=img.dataset.src || img.src;

img.classList.add("loaded");

observer.unobserve(img);

}

});

});

images.forEach(img=>{

imageObserver.observe(img);

});

/*=========================================
CONSOLE MESSAGE
=========================================*/

console.log("%cDiscovery World Clone",

"color:#EB4D8B;font-size:20px;font-weight:bold");

console.log("%cDesigned with HTML CSS JavaScript",

"color:#241E5A;font-size:14px");

/*=========================================
END
=========================================*/