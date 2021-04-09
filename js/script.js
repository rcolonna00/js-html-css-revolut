$(document).ready(function() {
    $('.container li').mouseenter(function() {
        $(this).children('.dropdown').addClass('active');
    });
    $('.container li').mouseleave(function() {
        $(this).children('.dropdown').removeClass('active');
    });
});