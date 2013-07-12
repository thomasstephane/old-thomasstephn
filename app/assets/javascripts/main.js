$(document).ready(function() {
  $('.welcome').hover(function() {
    $('.last .bracket').animate({
      height: '58px'
    }, 800);
    $('.last .bracket p').slideDown("slow");
    $('.slide').animate({
      top: '136px'
    }, 800);
  });
  $('.welcome').on('mouseleave', function() {
    $('.last .bracket').animate({
      height: '18px'
    }, 800);
    $('.slide').animate({
      top: '96px'
    }, 800);
    $('.last .bracket p').slideUp("slow");
  });
});
