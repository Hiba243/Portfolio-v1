//hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  var sidebar = document.getElementsByClassName("hamburger");
  if (sidebar[0].classList.contains('active')) {
    var bodyelem = document.getElementsByTagName('body');
    bodyelem[0].style.overflow = 'hidden';
  }
  else {
    var bodyelem = document.getElementsByTagName('body');
    bodyelem[0].style.overflow = 'visible';
  }
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  var bodyelem = document.getElementsByTagName('body');
  bodyelem[0].style.position = 'relative';
}

//copy to clipboard
const links = document.querySelectorAll('.copy-click');
const cls = {
  copied: 'is-copied',
  hover: 'is-hovered'
}

const copyToClipboard = str => {
  const el = document.createElement('input');
  str.dataset.copyString ? el.value = str.dataset.copyString : el.value = str.text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.opacity = 0;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

const clickInteraction = (e) => {
  e.preventDefault();
  copyToClipboard(e.target);
  e.target.classList.add(cls.copied);
  setTimeout(() => e.target.classList.remove(cls.copied), 1000);
  setTimeout(() => e.target.classList.remove(cls.hover), 700);
}

Array.from(links).forEach(link => {
  link.addEventListener('click', e => clickInteraction(e));
  link.addEventListener('keypress', e => {
    if (e.keyCode === 13) clickInteraction(e);
  });
  link.addEventListener('mouseover', e => e.target.classList.add(cls.hover));
  link.addEventListener('mouseleave', e => {
    if (!e.target.classList.contains(cls.copied)) {
      e.target.classList.remove(cls.hover);
    }
  });
});

//carousel
let carousel = document.getElementById("carousel"),
  slides = carousel.getElementsByTagName("li"),
  counter = 0,
  liList = Array.prototype.slice.call(slides);

setInterval(function () {
  slides[counter].style.opacity = 0; // Hide the previous image
  counter = (counter + 1) % slides.length; // Increment counter
  slides[counter].style.opacity = 1; // Show the next image
}, 3000); // setInterval

//cursor

var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});