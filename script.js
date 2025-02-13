$(document).ready(function () {
    $('.valentines').mouseenter(function () {
        $('.card').stop().animate({
            top: '-100px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: '5px'
        }, 'slow');
    });
});