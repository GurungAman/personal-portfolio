var btn = $('#back-to-top');
$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.fadeIn('slow');
  } else {
    btn.fadeOut('slow');
  }
});
