// Only keep essential functionality
$(document).ready(function() {
    // Close offcanvas when clicking a link
    $("#offcanvasNavbar2 a").click(function(){
        $('.offcanvas').offcanvas('hide');
    });

    // Hero Slider (if needed)
    if ($(".hero_slider").length) {
        $(".hero_slider").slick({
            infinite: true,
            dots: true,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: true,
            pauseOnHover: true
        });
    }
});



