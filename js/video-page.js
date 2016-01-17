(function ($) {

    $(window).resize(function () {
        setHeight();
    });

    var setHeight = function() {
        $('#video').css('height', $(window).height());
    }

    setHeight();

    $(window).on('load', function () {
        var $preloader = $('#preloader');

        $preloader.delay(350).fadeOut('slow', function(){
            $('#footer').toggle();
        });
    });
    $('#video').YTPlayer({
        fitToBackground: false,
        videoId: 'vzyXKT9OFxk',
        pauseOnScroll: false,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: 'transparent',
            branding: 0,
            rel: 0,
            autohide: 0,
            origin: window.location.origin
        }
    });

    $.fn.YTPlayer = function(options) {

        return this.each(function() {
            var el = this;

            $(el).data("yt-init", true);
            var player = Object.create(YTPlayer);
            player.init(el, options);
            $.data(el, "ytPlayer", player);
        });
    };

})(jQuery);