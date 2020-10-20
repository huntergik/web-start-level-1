$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    // блокируем прокрутку сайта при открытом меню
    $('body').toggleClass('lock');
  });
});