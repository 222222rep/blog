
// down-top

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal)

// left-right

function fader() {
  var faders = document.querySelectorAll(".fader");

  for (var i = 0; i < faders.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = faders[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      faders[i].classList.add("active");
    } else {
      faders[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fader)

// right-left

function fadel() {
  var fadels = document.querySelectorAll(".fadel");

  for (var i = 0; i < fadels.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = fadels[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      fadels[i].classList.add("active");
    } else {
      fadels[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadel)
// js-menu
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const hdr_nav = document.querySelector('.hdr_nav')
menu.addEventListener('click', () => {
  hdr_nav.classList.add('open_nav')
})
close.addEventListener('click', () => {
  hdr_nav.classList.remove('open_nav')
})
// behavior
function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}
var about = document.querySelector('.about');
var introduce = document.querySelector('.introduce');
button.addEventListener('click', () => {
  scrollTo(footer);
})
