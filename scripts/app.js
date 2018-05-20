// =========================================
// Front Page ==============================
// =========================================


$(document).ready(function() {
    adjustBody();
    $(window).on('resize orientationchange', adjustBody);

    function adjustBody() {
        var headHeight = $('header').outerHeight();
        $('.banner').css('padding-top', headHeight);
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 20) {
        $('header').addClass('is-fixed');
    }
    else {
        $('header').removeClass('is-fixed');
    }
});

$(document).ready(function() {
   
    $('#contact-link').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    });

});

