$(document).on("click", '#uploadForm_forms_flash .close, #genericForm_forms_flash .close', function () {
  $(this).parent().remove();
});


$('.lang__item').on('click', function () {
  $('.lang__item').addClass('active');
  $('.lang__item').not(this).removeClass('active');
});