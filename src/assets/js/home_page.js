"use strict";
$(document).ready(function () {
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
});