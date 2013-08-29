/*
 * throttledresize: special jQuery event that happens at a reduced rate compared to "resize"
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function ($) {



    var urlend = window.location.href.substring(window.location.href.lastIndexOf('/') + 2);
    $('main').load(urlend+'.html');

    $("body").css("padding-top", $(".navbar-fixed-top > .navbar-header").height() + 15);
    $("body").css("padding-bottom", $(".navbar-fixed-bottom").height());

    $(window).on("throttledresize", function (event) {
        $("body").css("padding-top", $(".navbar-fixed-top > .navbar-header").height() + 15);
        $("body").css("padding-bottom", $(".navbar-fixed-bottom").height());
    });
})(jQuery);