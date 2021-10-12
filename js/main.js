// scroll to top
var btn = $("#back-to-top");
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    btn.fadeIn("slow");
  } else {
    btn.fadeOut("slow");
  }
});

// change navbar on scroll
$(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let navbar = $("#primary-navbar");

    let hover_effect = $("#primary-navbar .navbar-nav a ");

    if (scroll > 100) {
      navbar.addClass("scrolled-navbar");

      if (parseInt($(window).width()) < 991.98) {
        hover_effect.addClass("nav-link");
      } else {
        hover_effect.addClass("hover-effect");
      }
    } else {
      navbar.removeClass("scrolled-navbar");

      // hover_effect.addClass("nav-link");
      hover_effect.removeClass("hover-effect");
    }
  });
});

// remove hashes from url
$(document).ready(function () {
  // get the anchor link buttons
  var nav_link = $("#primary-navbar .navbar-nav a");
  // when each button is clicked
  nav_link.click(() => {
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(() => {
      // call removeHash function after set timeout
      removeHash();
    }, 5); // 5 millisecond timeout in this case
  });

  function removeHash() {
    history.replaceState(
      "",
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );
  }
});

// navbar hamburger menu toggler
$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    $(".animated-icon").toggleClass("open");
  });
});

$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(100)
      .fadeOut("fast", function () {
        $("body").removeClass("loading");
      });
  }
});
