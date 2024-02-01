$('.search-js').on('click', function () {
  $('.search-form ').toggleClass('open');
  $(".search-form input").focus();
});

	$(document).mouseup(function (e) { 
	  var div = $(".search-form__input, .search-js");
	  if (!div.is(e.target) 
	    &&
	    div.has(e.target).length === 0) {
	    $('.search-form').removeClass('open');
	  }
	});