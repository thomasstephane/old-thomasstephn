$(document).ready(function() {
  $("div.published-status p").append('<a class="radio-select" href="#"></a><a class="radio-deselect" href="#"></a>');

  $('.published-status .radio-select').click(function(event) {
    event.preventDefault();
    var $boxes = $(this).parent().parent().children();
    $boxes.removeClass('selected');
    $(this).parent().addClass('selected');
    $(this).parent().find(':radio').attr('checked','checked');
  });

  $('.published-status .radio-deselect').click(function(event){
    event.preventDefault();
    $(this).parent().removeClass('selected');
    $(this).parent().find(':radio').removeAttr('checked');
  });


// ZOOM


$('#user').find('input[name="password"]').change(function() {
 if ($(this).val() === "")
  $('.hidden-button').hide();
else
  $('.hidden-button').slideDown("slow");
});
      $('#user form').on('submit', function(event){
        event.preventDefault();
        $.ajax({
          type: 'POST',
          url: '/user',
          data: $(this).serialize()
        })
        .done(function(response){
          $('#errors-user span').text(response.errors);
          $('.hidden-button').slideUp("slow");
          $('#errors-user').slideDown("slow");
          if (!response.errors) location.href = '/posts';
        });
      });

      $('.button:first-child').on('click', function() {
        $('.post-magic').toggle('slow');

      });
      $('.new-post').find('input[value="Save"]').on("click", function(event) { 
        $('input[type="text"]').val(""); 
        $('.content').val("");
      });
    });