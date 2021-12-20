/*
 Theme Name: Bisylms
 Theme URI: 
 Author: Mosharof
 Author URI: 
 Description: Bisylms - Education HTML5 Responsive Template
 Version: 1.0
 License:
 License URI:
 */

/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Course Filter
 2. Vido Popup
 3. Funfact Count
 4. Teacher Silder
 5. Hero Silder
 6. Popular Course Slider
 7. Count Down
 8. Course Related Slider 
 9. Back To Top
 10. Preloader
 11. Mobile Menu
 12. Package Slider
 13. Fixed Header
 14. Testimonial Slider 
 */

(function ($) {
    'use strict';

    /*--------------------------------------------------------
    / 1. Course Filter
    /----------------------------------------------------------*/
    $(window).on('load', function () {
        if ($(".shafull-container").length > 0) {
            var $grid = $('.shafull-container');
            $grid.shuffle({
                itemSelector: '.shaf-item',
                sizer: '.shaf-sizer'
            });
            /* reshuffle when user clicks a filter item */
            $('.shaf-filter li').on('click', function () {
                // set active class
                $('.shaf-filter li').removeClass('active');
                $(this).addClass('active');
                // get group name from clicked item
                var groupName = $(this).attr('data-group');
                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }
    });
    /*--------------------------------------------------------
    / 2. Vido Popup
    /----------------------------------------------------------*/
    $('.popup-video').lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        controls: true
    });
    /*--------------------------------------------------------
    / 3. Funfact Count
    /----------------------------------------------------------*/
    var skl = true;
    $('.timer').appear();
    $('.timer').on('appear', function () {
        if (skl) {
            $('.timer').each(function () {
                var $this = $(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.attr('data-counter')
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '$1' + '<span>,</span>' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });
    /*--------------------------------------------------------
    / 4. Teacher Silder
    /----------------------------------------------------------*/
    if ($(".teachers-slider").length > 0) {
        $('.teachers-slider').owlCarousel({
            loop: false,
            margin: 30,
            responsiveClass: true,
            dots: true,
            autoplay: false,
            smartSpeed: 600,
            center: false,
            nav: false,
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                750: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        });
    }
    /*--------------------------------------------------------
    / 5. Hero Silder
    /----------------------------------------------------------*/
    if ($(".hero-slider").length > 0) {
        $('.hero-slider').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: false,
            animateOut: 'fadeOut',
            autoplayTimeout: 4500,
            autoplay: true,
            smartSpeed: 800,
            center: false,
            nav: true,
            navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
            items: 1
        });
    }
    $('[data-bg-image]').each(function () {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });
    /*--------------------------------------------------------
    / 6. Popular Course Slider
    /----------------------------------------------------------*/
    if ($(".popular-course-slider").length > 0) {
        $('.popular-course-slider').owlCarousel({
            loop: false,
            margin: 0,
            responsiveClass: true,
            dots: true,
            animateOut: 'fadeOut',
            autoplay: false,
            smartSpeed: 800,
            center: false,
            nav: false,
            items: 1
        });
    }
    /*--------------------------------------------------------
    / 7. Count Down
    /----------------------------------------------------------*/
    if ($('.countdown').length > 0) {
        var d = $('.countdown').attr('data-day');
        var m = $('.countdown').attr('data-month');
        var y = $('.countdown').attr('data-year');
        $('.countdown').countdown({
            until: new Date(y, m - 1, d),
            format: 'DHMS'
        });
    }
    /*--------------------------------------------------------
    / 8. Course Related Slider 
    /----------------------------------------------------------*/
    if ($(".related-course-slider").length > 0) {
        $('.related-course-slider').owlCarousel({
            loop: false,
            margin: 25,
            responsiveClass: true,
            dots: true,
            autoplay: false,
            smartSpeed: 700,
            center: false,
            nav: false,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    /*--------------------------------------------------------
    / 9. Back To Top
    /----------------------------------------------------------*/
    var back = $("#back-to-top"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            back.css({
                bottom: '20px',
                opacity: '1',
                visibility: 'visible'
            });
        } else {
            back.css({
                bottom: '-20px',
                opacity: '0',
                visibility: 'hidden'
            });
        }

    });
    body.on("click", "#back-to-top", function (e) {
        e.preventDefault();
        body.animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    /*--------------------------------------------------------
    / 10. Preloader
    /----------------------------------------------------------*/
    $(window).load(function () {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(900).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
    / 11. Mobile Menu
    /---------------------------------------------------------*/



        if ($(window).width() < 991 ) {
            
            $('.navbar-toggler').on('click', function (e) {
                e.stopPropagation();
                $('.navbar-collapse').stop(true, true).slideToggle();
                e.preventDefault();
            });

            $('.navbar-nav li.menu-item-has-children').each(function () {
                var $this = $(this);
                $this.append('<span class="submenu-toggler"><i class="fal fa-plus"></i></span>');
            });
            
            $('.navbar-nav li.menu-item-has-children span.submenu-toggler').on('click', function () {
                var $this = $(this);

                if ($(this).hasClass('active-span')) {
                    $('i', $this).removeClass('fa-minus').addClass('fa-plus');
                } else {
                    $('i', $this).addClass('fa-minus').removeClass('fa-plus');
                }

                $(this).prev('ul.sub-menu, .mega-menu').stop(true, true).slideToggle();
                $(this).toggleClass('active-span');
            });
        };
 
        // learnpress js conflict fix
        $( '.navbar-nav li a' ).on('click',function(){
           let url = $(this).attr('href');
           if(url.length>3){
            window.location.href = url;
           }
        });




    /*--------------------------------------------------------
    / 12. Package Slider
    /----------------------------------------------------------*/

        var cards = $('#card-slider .package-item').toArray();

        startAnim(cards);

        function startAnim(array) {
            if (array.length >= 4) {
                TweenMax.fromTo(array[0], 0.5, {
                    x: 0,
                    y: 0,
                    opacity: 0.75
                }, {
                    x: 0,
                    y: -120,
                    opacity: 0,
                    zIndex: 0,
                    scale: 0.9,
                    delay: 0.03,
                    ease: Cubic.easeInOut,
                    onComplete: sortArray(array)
                });

                TweenMax.fromTo(array[1], 0.5, {
                    x: 0,
                    y: 125,
                    opacity: 1,
                    zIndex: 1,
                    scale: 1,
                }, {
                    x: 0,
                    y: 0,
                    opacity: 0.75,
                    zIndex: 0,
                    scale: 0.9,
                    boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
                    ease: Cubic.easeInOut
                });

                TweenMax.to(array[2], 0.5, {
                    bezier: [{
                        x: 0,
                        y: 250
                    }, {
                        x: 65,
                        y: 200
                    }, {
                        x: 0,
                        y: 125
                    }],
                    boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
                    zIndex: 1,
                    opacity: 1,
                    scale: 1,
                    ease: Cubic.easeInOut
                });

                TweenMax.fromTo(array[3], 0.5, {
                    x: 0,
                    y: 400,
                    opacity: 0,
                    zIndex: 0,
                    scale: 0.9,
                }, {
                    x: 0,
                    y: 250,
                    opacity: 0.75,
                    zIndex: 0,
                    scale: 0.9,
                    ease: Cubic.easeInOut
                });
            } else {
                $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>');
            }
        }

        function sortArray(array) {
            clearTimeout(delay);
            var delay = setTimeout(function() {
                var firstElem = array.shift();
                array.push(firstElem);
                return startAnim(array);
            }, 4000);
        }

    /*--------------------------------------------------------
    / 13. Fixed Header
    /----------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40) {
            $(".sticky").addClass('fix-header animated fadeInDown');
        } else {
            $(".sticky").removeClass('fix-header animated fadeInDown');
        }
    });
    /*--------------------------------------------------------
    / 14. Testimonial Slider 
    /----------------------------------------------------------*/
    if ($(".testimonial-slider").length > 0) {
        $('.testimonial-slider').owlCarousel({
            loop: false,
            margin: 30,
            responsiveClass: true,
            dots: false,
            autoplay: true,
            smartSpeed: 700,
            center: false,
            nav: false,
            items: 2,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    }
    /*--------------------------------------------------------
    / 15. niceSelect js
    /----------------------------------------------------------*/
    $('.select-item select').niceSelect();



})(jQuery);
