"use strict";

//Logo Typing Effect Create By MSI:313
msiTyping("#logo_typing", 250, 0);

//Login Register Form
const x = document.getElementById('login')
const y = document.getElementById('register')
const z = document.getElementById('btn')
const m = document.getElementById('mobile')

function login() {
    x.style.left = "30px";
    y.style.left = "430px";
    z.style.left = "0px";
    m.style.height = "390px";
}

function register() {
    x.style.left = "-370px";
    y.style.left = "30px";
    z.style.left = "110px";
    m.style.height = "390px";
}


$(function () {

    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $(".toggle-password-r").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });


    //Student Counter
    $('.counter').counterUp({
        delay: 19,
        time: 1919
    });

    //Testimonial Slider
    $('.testimonial_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
