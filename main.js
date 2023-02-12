let header = document.querySelector('header')
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
let search = document.querySelector('.left-header .bx-search')

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

search.onclick = () => {
  search.classList.toggle('click')
  document.getElementById('hide').className = ''
}

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navbar.classList.remove('active')
  search.classList.remove('click')
  document.getElementById('hide').classList='form'
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
