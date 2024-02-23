$(document).ready(function () {
    $('.has-child > a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.sub-menu').slideToggle();
        $(this).parent().toggleClass('active');
    });
});