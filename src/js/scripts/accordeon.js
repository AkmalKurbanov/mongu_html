$('.accordion').on('click', '.accordion__item', function () {
  $('.accordion__item').not(this).find('.accordion__desc-wrap').slideUp();
  $(this).find('.accordion__desc-wrap').slideToggle();
  $('.accordion__item').not(this).removeClass('open');
  $(this).toggleClass('open');
});