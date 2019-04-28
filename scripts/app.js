const nameTag = document.getElementById('banner-inner');
function tagSlide() {
    nameTag.style.left = '15%';
}

adjustBody();
$(window).on('resize orientationchange', adjustBody);

function adjustBody() {
    var headHeight = $('header').outerHeight();
    $('.banner').css('padding-top', headHeight);
}

$(window).scroll(function() {
    if ($(window).scrollTop() > 20) {
        $('header').addClass('is-fixed');
    }
    else {
        $('header').removeClass('is-fixed');
    }
});
   
$('#contact-link').click(function(){
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
    return false;
});
