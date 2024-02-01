$('.accordion').on('click', '.accordion__item .accordion__title', function () {
  $('.accordion__item .accordion__title').not(this).find('.accordion__desc-wrap').slideUp();
  $(this).parent().find('.accordion__desc-wrap').slideToggle();
  $('.accordion__item .accordion__title').not(this).removeClass('open');
  $(this).parent().toggleClass('open');
});