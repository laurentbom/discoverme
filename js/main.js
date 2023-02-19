// Variables
var burgerMenu = document.querySelector(".burger-menu");
var nav = document.querySelector(".header__nav");

var home = document.querySelector("body");
var aboutme = document.querySelector(".aboutme");
var portfolio = document.querySelector(".portfolio");
var contact = document.querySelector(".contact");

var btnHeader = document.querySelector(".btn__head")
var btnHome = document.querySelector(".btn__home");
var btnPortfolio = document.querySelector(".btn__portfolio");
var btnContact = document.querySelector(".btn__contact");

// Nav disparait au scroll
var halfWindow = window.innerHeight / 3;
var lastScroll = 0;
var headerNav = document.querySelector(".nav-container");
var header = document.querySelector(".header");


window.addEventListener("scroll", function(){
  var scrolled = window.scrollY;
  var hauteurNav = header.offsetHeight - 50;
  if(scrolled > hauteurNav){
    headerNav.classList.add('white');
  } else{
    headerNav.classList.remove('white');
  }
  // if(scrolled >= halfWindow) {
  //   headerNav.classList.add('hide');
  // } else {
  //   headerNav.classList.remove('hide');
  // }
  // if(scrolled < lastScroll) {
  //   headerNav.classList.remove('hide');
  //   nav.classList.remove("open");
  //   burgerMenu.classList.remove("open");
  // }
  lastScroll = scrolled;
});

// Boutons menu
btnHeader.addEventListener("click", function(){
  nav.classList.remove("open");
  burgerMenu.classList.remove("open");
  portfolio.scrollIntoView({
    behavior: 'smooth'
  });
})
btnHome.addEventListener("click", function(){
  nav.classList.remove("open");
  burgerMenu.classList.remove("open");
  home.scrollIntoView({
    behavior: 'smooth'
  });
})
btnPortfolio.addEventListener("click", function(){
  nav.classList.remove("open");
  burgerMenu.classList.remove("open");
  portfolio.scrollIntoView({
    behavior: 'smooth'
  });
})
btnContact.addEventListener("click", function(){
  nav.classList.remove("open");
  burgerMenu.classList.remove("open");
  contact.scrollIntoView({
    behavior: 'smooth'
  });
})

burgerMenu.addEventListener("click", function(){
  burgerMenu.classList.toggle("open");
  nav.classList.toggle("open");
})

