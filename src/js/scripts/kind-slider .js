var swiper = new Swiper(".kind-slider", {
  slidesPerView: 4,
  spaceBetween: 28,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  }
});