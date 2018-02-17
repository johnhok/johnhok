$(document).ready(function () {

        $('.ToggleIcon').click(function (e) {
            e.preventDefault();
            $('#overlay-nav, .overlay-background, .ToggleIcon, body').toggleClass('is-open');
            $('.Hero-wrapper .orange').toggleClass('shape-active')
        });

        $("#Contact-button").click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#Contact-section").offset().top
            }, 600);
        });

        $(".is-input, .is-textarea").focus(function () {
           $(this).toggleClass("focused");
        }).blur(function(){
            $(this).toggleClass("focused");
        });

    //scroll reveal init
        window.sr = ScrollReveal({
            duration: 1000,
            delay: 100,
            scale: 1,
            easing: 'ease-out',
            viewFactor: 0.1,
            reset: false,
            mobile: false
        });

        sr.reveal('.has-sr-slide', {
            duration: 600,
            delay: 0,
            origin: 'left',
            distance:'100%',
            opacity: 1
        });
        sr.reveal('.has-sr-slide-after', {
            origin: 'bottom',
            delay: 800
        });

        sr.reveal('.has-sr-text',{
            origin: 'bottom',
            distance: '80px'
        });

        sr.reveal('.has-sr-image',{
            duration: 1200,
            distance: '0px'
        });

        sr.reveal('.has-sr-multi',{
            origin: 'bottom',
            distance: '50px',
            duration: 800
        },100);

        sr.reveal('.has-sr-sequence',{
            origin: 'bottom',
            distance: '50px',
            delay: 500,
            duration: 800
        },50);

    uikitInit();
});



//uikit component init
function uikitInit() {

    isUIkit.grid('.is-grid');
    isUIkit.svg('.is-svg');
    isUIkit.cover('.is-cover');
    isUIkit.slideshow('.is-slideshow',{
        animation: 'is-animation-fade'
    });

    isUIkit.switcher('.IntegrationSwitch .is-switch',{
        animation: 'is-animation-slide-right-small, is-animation-slide-left-small'
    });

    isUIkit.tab('.is-tab',{
        animation: 'is-animation-slide-top-medium, is-animation-slide-bottom-medium'
    });

    isUIkit.accordion('.is-accordion');

    isUIkit.formCustom('.is-form');
    isUIkit.navbar('.is-navbar');
    isUIkit.sticky('.is-sticky');
}


