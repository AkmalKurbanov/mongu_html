var swiper = new Swiper(".tours-js", {
  slidesPerView: 7,
  spaceBetween: 30,
  loop: true,
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
    440: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 7,
      spaceBetween: 30,
    },

  },
});