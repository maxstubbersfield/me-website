"use strict";
$(document).ready(function () {
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    AOS.init({
        once: true
    })

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Sticky Header
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    window.onscroll = function () {
        scrollFunction();
    };

    window.onload = function () {
        scrollFunction();
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
});