var swiper = new Swiper(".events-slider", {
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
      slidesPerView: 1,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  }
});