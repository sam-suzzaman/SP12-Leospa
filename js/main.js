// =======================================
// JQUERY READY FUNCTION WITH STRICT MODE
// ========================================
(function ($) {
    "use strict";
    // all jquery codes are written from below=========

    // ================================
    //    FOR SERVICE SLIDER   
    // ================================
    $('.service-slider').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })




    // ===============================================
    //     FOR TESTIMONIALSLIDER
    // ===============================================

    $('.testimonial-slider').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        nav: false,
        items: 1
    })


})(jQuery);


// ==============================
//       CODES FOR NAVBAR        
// ==============================

// 
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelector('.site-navbar a');

//  load all event-listener
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}