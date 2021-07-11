var btn = $("#back-to-top");
$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        btn.fadeIn("slow");
    } else {
        btn.fadeOut("slow");
    }
});

$(function() {
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        let navbar = $("#primary-navbar");

        let hover_effect = $("#primary-navbar .navbar-nav a ");

        if (scroll > 100) {
            navbar.addClass("scrolled-navbar");

            if (parseInt($(window).width()) < 991.98) {
                hover_effect.addClass("nav-link");
            } else {
                hover_effect.removeClass("nav-link");

                hover_effect.addClass("hover-effect");
            }
        } else {
            navbar.removeClass("scrolled-navbar");

            hover_effect.addClass("nav-link");
            hover_effect.removeClass("hover-effect");
        }
    });
});
/// When you click everywhere in the document
$(document).click(function(event) {
    /// If *navbar-collapse* is not among targets of event
    if (!$(event.target).is(".navbar-collapse *")) {
        /// Collapse every *navbar-collapse*
        $(".navbar-collapse").collapse("hide");
    }
});