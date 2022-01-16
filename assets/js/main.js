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
  },
  loop: true,
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
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
});
// Favorite Btn
function favoriteBtn(){
  const x = document.querySelector(".btn2");
  if (x.innerHTML === "Add to Favarites") {
    x.innerHTML = "Remove from Favorites";
  } else {
    x.innerHTML = "Add to Favarites";
  }
  x.classList.toggle("color-primary");
};
// Shows Doc
function showsDoc() {
document.querySelector(".shows-btn").classList.toggle("btnBorder");
document.querySelector(".shows-nav").classList.toggle("showf");
};
function getCodeBoxElement(index) {
  return document.getElementById('codeBox' + index);
}
function onKeyUpEvent(index, event) {
  const eventCode = event.which || event.keyCode;
  if (getCodeBoxElement(index).value.length === 1) {
    if (index !== 6) {
      getCodeBoxElement(index+ 1).focus();
    } else {
      getCodeBoxElement(index).blur();
      // Submit code
      console.log('submit code ');
    }
  }
  if (eventCode === 8 && index !== 1) {
    getCodeBoxElement(index - 1).focus();
  }
}
function onFocusEvent(index) {
  for (item = 1; item < index; item++) {
    const currentElement = getCodeBoxElement(item);
    if (!currentElement.value) {
        currentElement.focus();
        break;
    }
  }
} 