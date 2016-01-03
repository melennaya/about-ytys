(function ($) {


    $(window).resize(function () {
        setHeight();
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

    var setHeight = function() {
        $('#top-block').css('height', $(window).height()*0.68);
        $('.main-features-title').css('height', $(window).height()*0.32);
    }

    $(window).scroll(function(){
        if($(this).scrollTop() == 0){
            $('.navbar-fixed-top').css('top', '40px');
        } else{
            $('.navbar-fixed-top').css('top', '0');
        }
    });

    setHeight();
    // local scroll
   // jQuery('.navbar').localScroll({hash: true, offset: {top: 0}, duration: 800, easing: 'easeInOutExpo'});

    // YouTube
    //  if ($(window).width() >= 977) {
    //     $('#slider-wrap .video').YTPlayer({
    //         fitToBackground: false,
    //         videoId: 'vzyXKT9OFxk',
    //         pauseOnScroll: false,
    //         playerVars: {
    //             modestbranding: 0,
    //             autoplay: 1,
    //             controls: 0,
    //             showinfo: 0,
    //             wmode: 'transparent',
    //             branding: 0,
    //             rel: 0,
    //             autohide: 0,
    //             origin: window.location.origin
    //         }
    //     });
    // }

    $.fn.YTPlayer = function(options) {

        return this.each(function() {
            var el = this;

            $(el).data("yt-init", true);
            var player = Object.create(YTPlayer);
            player.init(el, options);
            $.data(el, "ytPlayer", player);
        });
    };

    // portfolio
    if ($('.isotopeWrapper').length) {

        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope

        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }
        });

        $('#filter a').click(function () {

            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });

        $(window).smartresize(function () {
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });
    }


    //height columns

    //$('#features .number-wrap').each(function () {
    //    var $this = $(this),
    //        height = $this.outerHeight(),
    //        $next = $this.next(),
    //        $prev = $this.prev();
    //
    //    console.log($this,height);
    //
    //    if ($this.hasClass('first')) {
    //        $next.css({
    //            'height': height
    //        });
    //        $next.find('.wrap').css({
    //            'margin-top': -$next.find('.wrap').outerHeight() / 2 + 'px'
    //        });
    //    } else {
    //        $prev.css('height', height);
    //        $prev.find('.wrap').css({
    //            'margin-top': -$prev.find('.wrap').outerHeight() / 2 + 'px'
    //        });
    //    }
    //});


    //
    //function setHeight() {
    //    var clientHeight = $(window).height();
    //    $('#main-slider-wrap').css('height', clientHeight);
    //}
    //
    //setHeight();

    //main-slider
    var slick = $('#main-slider-wrap').slick({
        infinite: true,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });
    $('#top-block .secrets').on('click', function(){
        $('#hidden-slider-wrap').toggle();
        slick.slick('unslick');
        $('#hidden-slider').slick({
            infinite: true,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false
        });
    })
    $('#hidden-slider-wrap #close-slider').on('click', function(){
        console.log('enter');
        $('#hidden-slider').slick('unslick');
        $('#hidden-slider-wrap').toggle();
        slick.slick({
            infinite: true,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true
        });
    })

    // fancybox
    jQuery(".fancybox").fancybox();

    // instafeed
    var feed = new Instafeed({
        //get: 'tagged',
        //tagName: 'vscocam',
        limit: '15',
        accessToken: '2175586501.1677ed0.1230d455d3cd4702aeba0149510bde7b',
        get: 'user',
        userId: '2175586501',
    });
    feed.run();


    if (Modernizr.mq("screen and (max-width:1024px)")) {
        jQuery("body").toggleClass("body");

    } else {
        var s = skrollr.init({
            mobileDeceleration: 1,
            edgeStrategy: 'set',
            forceHeight: true,
            smoothScrolling: true,
            smoothScrollingDuration: 300,
            easing: {
                WTF: Math.random,
                inverted: function (p) {
                    return 1 - p;
                }
            }
        });
    }


    //scroll menu
    jQuery('.appear').appear();
    jQuery(".appear").on("appear", function (data) {
        var id = $(this).attr("id");
        jQuery('.nav li').removeClass('active');
        jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
    });


    //parallax
    var isMobile = false;

    if (Modernizr.mq('only all and (max-width: 1024px)')) {
        isMobile = true;
    }


    if (isMobile == false && ($('#parallax1').length || isMobile == false && $('#parallax2').length || isMobile == false && $('#testimonials').length)) {


        $(window).stellar({
            responsive: true,
            scrollProperty: 'scroll',
            parallaxElements: false,
            horizontalScrolling: false,
            horizontalOffset: 0,
            verticalOffset: 0
        });

    }


})(jQuery);