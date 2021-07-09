var btn = $("#back-to-top");
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    btn.fadeIn("slow");
  } else {
    btn.fadeOut("slow");
  }
});

$(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let navbar = $("#primary-navbar");
    let hover_effect = $("[id=hover-effect]");

    if (scroll > 100) {
      navbar.addClass("scrolled-navbar");

      if (parseInt($(window).width()) < 991.98) {
        hover_effect.addClass("nav-link");
      } else {
        hover_effect.removeClass("nav-link");

        hover_effect.addClass("hover-effect");
      }

      // log_in_button.addClass('scrolled-log-in-button');
    } else {
      navbar.removeClass("scrolled-navbar");

      hover_effect.addClass("nav-link");
      hover_effect.removeClass("hover-effect");

      // log_in_button.removeClass('scrolled-log-in-button');
    }
  });
});
