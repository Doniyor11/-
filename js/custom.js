
$(document).on('ready', function () {

    $(".single-item").slick({
        // lazyLoad: 'ondemand', // ondemand progressive anticipated
        // infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        pauseOnHover: true,
        dotsClass: 'header-dots',
        // slidesToShow: 1,
        // slidesToScroll: 3
    });

    $(".services").slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $(".portfolio").slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $(".kinds").slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 376,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $(".footer_slider").slick({
        // lazyLoad: 'ondemand', // ondemand progressive anticipated
        // infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        arrows: false,
        dotsClass: 'header-dots',
        pauseOnHover: false,
        // slidesToShow: 1,
        // slidesToScroll: 3
    });

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // animation

    window.sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration: 2000,
        origin: 'bottom',
    });
    sr.reveal('#header_slider', {
        duration: 2000,
        origin: 'top',
        distance: '150px',
    });
    sr.reveal('#header_forma', {
        duration: 4000,
        origin: 'right',
        distance: '150px',
    });

    sr.reveal('.services_phragarf', {
        duration: 1500,
        origin: 'top',
        distance: '150px',
    });
    sr.reveal('.price', {
        duration: 2000,
        origin: 'top',
        distance: '300px',
    });
    sr.reveal('#price', {
        duration: 2500,
        origin: 'bottom',
        distance: '300px',

        viewFactor: 0.5,
    });
    sr.reveal('.services', {
        duration: 2000,
        origin: 'bottom',
        distance: '300px',
        viewFactor: 0.5,
    });
    sr.reveal('.portfolio', {
        duration: 2200,
        origin: 'bottom',
        distance: '300px',
        viewFactor: 0.5,
    });
    sr.reveal('.kinds', {
        duration: 2500,
        origin: 'bottom',
        distance: '300px',
        viewFactor: 0.5,
    });
    sr.reveal('#video1', {
        duration: 1500,
        // origin: 'right',
        // distance: '300px',
        viewFactor: 1,
    });
    sr.reveal('#video2', {
        duration: 2000,
        // origin: 'right',
        // distance: '300px',
        viewFactor: 1.5,
    });
    sr.reveal('#video3', {
        duration: 2500,
        // origin: 'right',
        // distance: '300px',
        viewFactor: 0.9,
    });
    sr.reveal('#footer_forma', {
        duration: 3000,
        origin: 'right',
        viewFactor: 0.5,
    });
    sr.reveal('#footer_number', {
        duration: 4000,
        viewFactor: 0.5,
    });


    // scroll

    $(function () {
        // Smooth Scrolling
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 2000);
                    return false;
                }
            }
        });
    });

});







