$(document).ready(function () {
  $('.booking-js').on('click', function () {
    $('.booking-popup').addClass('open');
    $('body').addClass('no-scroll');

    let dateFrom = $('.booking__item--date #start-date').val();
    let dateTo = $('.booking__item--date #end-date').val();
    let personCount = $('.person-count input').val();


    $('.person-count-js').html(personCount);
    $('.date-from-js').html(dateFrom);
    $('.date-to-js').html(dateTo);

    $('.booking-popup__person-value').val(personCount);
    $('.booking-popup__date-from-value').val(dateFrom);
    $('.booking-popup__date-to-value').val(dateTo);


  });

  $('.booking-popup__cancel').on('click', function () {

    $('.booking-popup').removeClass('open');

  });

  $('.booking-popup__window-close').on('click', function () {
    $('.booking-popup').removeClass('open');
    $('body').removeClass('no-scroll');
  });

});