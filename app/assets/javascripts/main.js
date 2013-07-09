$(document).ready(function() {
  $('.welcome').on('mouseenter', function() {
    $('.last .bracket').animate({
      height: '58px'
    }, 800);
    $('.last .bracket p').slideDown("slow");
  });
  $('.welcome').on('mouseleave', function() {
    $('.last .bracket').animate({
      height: '18px'
    }, 800);
    $('.last .bracket p').slideUp("slow");
  });
});
