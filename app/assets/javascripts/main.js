$(document).ready(function() {
  $('.welcome').hover(function() {
    $('.last .bracket').stop().animate({
      height: '58px'
    }, 800);
    $('.last .bracket p').stop().slideDown("slow");
    $('.slide').stop().animate({
      top: '136px'
    }, 800);
  });
  $('.welcome').on('mouseleave', function() {
    $('.last .bracket').stop().animate({
      height: '18px'
    }, 800);
    $('.slide').stop().animate({
      top: '96px'
    }, 800);
    $('.last .bracket p').stop().slideUp("slow");
  });

  $('.menuImage').hover(function(){
    $(this).parent().stop().animate({
      'padding-bottom' : '0px'
    }, 500);
  });
  $('.menuImage').on('mouseleave',function(){
    $(this).parent().stop().animate({
      'padding-bottom' : '69px'
    }, 500);
  });
});
