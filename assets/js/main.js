








var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 8,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
        slidesPerView:5,
      },
      1400: {
        slidesPerView: 6,
      },
  },
});

const showsBnt = document.querySelector(".shows-btn");
const showsNav =document.querySelector(".shows-nav");

showsBnt.addEventListener('click', () =>{
  showsNav.classList.toggle("active");
  showsBnt.classList.toggle("btnBorder");

})

