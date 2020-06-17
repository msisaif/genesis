// ================ JavaScript ================

//Logo Typing Effect Create By MSI:313
msiTyping("#logo_typing", 200, 0);


//Mix Available Batch
var containerEl = document.querySelector('.schedule_table');
var mixer = mixitup(containerEl);



// ================ jQuery Start ================

// Shorthand for $( document ).ready()
$(function () {

    //Student Counter
    $('.counter').counterUp({
        delay: 19,
        time: 1919
    });

    //Testimonial Slider
    $('.testimonial_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
  ]
    });


});
