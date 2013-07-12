$(document).ready(function() {
  $('a.preload').on('mouseover', function(){
    console.log($(this).attr('href'));
    $.ajax({
      type: 'get',
      url: $(this).attr('href')
    });
  });
});
