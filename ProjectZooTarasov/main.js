$(document).ready(function () {
        $('.header-menu__link').on('click', function () {
        $('header').toggleClass('active');
        $(this).toggleClass('header-menu__link_active');
    });
});