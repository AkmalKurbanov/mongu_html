var swiper = new Swiper(".block-tour-slider", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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