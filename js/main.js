// Variables
const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".header__nav");

const home = document.querySelector("body");
const aboutme = document.querySelector(".aboutme");
const portfolio = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");

const btnHeader = document.querySelector(".btn__head")
const btnHome = document.querySelector(".btn__home");
const btnPortfolio = document.querySelector(".btn__portfolio");
const btnContact = document.querySelector(".btn__contact");

// Nav disparait au scroll
let lastScroll = 0;
const headerNav = document.querySelector(".nav-container");
const header = document.querySelector(".header");


window.addEventListener("scroll", function(){
  let scrolled = window.scrollY;
  let hauteurNav = header.offsetHeight - 50;
  if(scrolled > hauteurNav){
    headerNav.classList.add('white');
  } else{
    headerNav.classList.remove('white');
  }
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

const cursor = document.querySelector('.cursor');
const cursorinner = document.querySelector('.cursor2');
let a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

// document.addEventListener('mousedown', function(){
//   cursor.classList.add('click');
//   cursorinner.classList.add('cursorinnerhover')
// });

// document.addEventListener('mouseup', function(){
//   cursor.classList.remove('click')
//   cursorinner.classList.remove('cursorinnerhover')
// });

// a.forEach(item => {
//   item.addEventListener('mouseover', () => {
//     cursor.classList.add('hover');
//   });
//   item.addEventListener('mouseleave', () => {
//     cursor.classList.remove('hover');
//   });
// })

