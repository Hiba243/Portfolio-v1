const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    var sidebar=document.getElementsByClassName("hamburger");
    if(sidebar[0].classList.contains('active')){
        var bodyelem=document.getElementsByTagName('body');
        bodyelem[0].style.position='fixed';
    }
    else{
        var bodyelem=document.getElementsByTagName('body');
        bodyelem[0].style.position='relative';
    }
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    var bodyelem=document.getElementsByTagName('body');
    bodyelem[0].style.position='relative';
}

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
