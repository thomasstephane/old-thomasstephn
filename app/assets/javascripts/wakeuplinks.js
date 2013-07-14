$(document).ready(function() {
  $('a.preload').on('mouseover', function(){
    $.ajax({
      type: 'get',
      url: $(this).attr('href')
    });
  });
});
