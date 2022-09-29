"use strict";
$(document).ready(function () {
    $("select").niceSelect();
    $("body").removeClass("loading");
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    AOS.init({
        once: true
    })

    /*Mesonary active*/


    var $grid = $('.iso-grid-wrap');
    $grid.packery({
        // options
        itemSelector: '.isotope-item',
        // gutter: 15,
        resize: true
    });
    $grid.imagesLoaded().progress(function () {
        $grid.packery('layout');
    });


    var $gridMas = $('.iso-mas-grid-wrap');
    $gridMas.packery({
        // options
        itemSelector: '.isotope-mas-item',
        // gutter: 15,
        resize: true
    });
    $gridMas.imagesLoaded().progress(function () {
        $gridMas.packery('layout');
    });


    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#isotope-filters').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    // bind filter button click
    $('#isotope-mas-filters').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $gridMas.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $('.isotope-nav').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function () {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
        Feature slider
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    if (jQuery(".feature-slider").length > 0) {
        $('.feature-slider').slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            swipe: true,
            infinite: true,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            autoplaySpeed: 10000,
        });
    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Sticky Header
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    window.onscroll = function () {
        scrollFunction();
    };
    window.onload = function () {
        scrollFunction();
        setYouTubeVideoSrc();
    };
    window.onbeforeunload = function () {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        $(".site-header--sticky").removeClass("reveal-header");
    }
    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
        }
    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Smooth Scroll
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(".goto").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                2000,
                function () {
                    window.location.hash = hash;
                }
            );
        } // End if
    });


    /*FAQ TAB li active*/

    $(document).ready(function () {
        $('.faq-main-tab-area li').click(function () {
            $('.faq-main-tab-area li').removeClass("active");
            $(this).addClass("active");
        });
    });

    /*Pagination active*/

    $(document).ready(function () {
        $('.shop-pagination a').click(function () {
            $('.shop-pagination a').removeClass("active");
            $(this).addClass("active");
        });
    });


    $(document).ready(function () {
        $('.blog-pagination a').click(function () {
            $('.blog-pagination a').removeClass("active");
            $(this).addClass("active");
        });
    });
});


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
         YouTube iFrame
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
function setYouTubeVideoSrc() {
    var vidDefer = document.getElementsByClassName('video');
    for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
        }
    }
}