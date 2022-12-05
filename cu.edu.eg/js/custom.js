jQuery(function ($) {

     "use strict";

    /* ----------------------------------------------------------- */
    /*  Fixed Header
    /* ----------------------------------------------------------- */

    $(window).on('scroll', function(){

        if( $(window).scrollTop()>0 ){

        $('#sp-header-wrapper').addClass('header-fixed animated fadeInDown');
        } 
        else {

        $('#sp-header-wrapper').removeClass('header-fixed animated fadeInDown');

        }

    }); 

    /* ----------------------------------------------------------- */
    /*  Responsive Menu
    /* ----------------------------------------------------------- */

   $(window).load(function(){
        $('.sp-main-menu-toggler').appendTo('#sp-menu');
    $('.sp-mobile-menu').appendTo('#sp-header-wrapper');
    });



    /* ----------------------------------------------------------- */
    /*  Parallax
    /* ----------------------------------------------------------- */

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    $.fn.parallax = function (options) {

        var windowHeight = $(window).height();

        // Establish default settings
        var settings = $.extend({
            speed  : 0.15,
            type   : 'background',  // background, transform,
        }, options);

        // Iterate over each object in collection
        return this.each(function () {

            // Save a reference to the element
            var $this = $(this);

            // Set up Scroll Handler
            $(window).on('scroll',function (e) {

                //e.stopImmediatePropagation();

                var scrollTop = $(window).scrollTop();
                var offset = $this.offset().top;
                var height = $this.outerHeight();

                // Check if above or below viewport
                if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                    return;
                }

                var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

                //console.log( yBgPosition );

                var transform = Math.round((scrollTop) * settings.speed);


                // Apply the Y Background Position to Set the Parallax Effect
                if (settings.type == 'background') {
                    $this.css('background-position', 'center ' + -yBgPosition + 'px');
                }

                else if ((settings.type == 'transform')) {
                    $this.css('-webkit-transform', 'translateY(' + transform + 'px)')
                        .css('-moz-transform', 'translateY(' + transform + 'px)')
                        .css('transform', 'translateY(' + transform + 'px)');
                }
            });
        });
    }

    $('#sp-slideshow-wrapper').parallax({
        speed: 0.5,
        type : 'transform'
    });



    $('#sp-services-wrapper').parallax({
        speed: 1
    });


     $('#sp-clients-wrapper').parallax({
        speed: 1
    });


    /* ----------------------------------------------------------- */
    /*  Team Carousel
    /* ----------------------------------------------------------- */


      $("#team-carousel").owlCarousel({
 
        navigation : true, // Show next and prev buttons
        navigationText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
        slideSpeed : 800,
        pagination:false,
        items : 4,
        rewindNav: true,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        stopOnHover:true
 
      });



});