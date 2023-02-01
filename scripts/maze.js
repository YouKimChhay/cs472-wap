$(() => {
  // start the game
  $('#start').click(function(e) {

    // reset the maze
    $('.boundary').each((i, v) => {
      $(v).removeClass('youlose');
    });
    $('#status').text("Click the \"S\" to begin.");

    // mouse over the boundary
    $('.boundary').mouseover(function(e) {
      losing();
    });

    // end the maze without touching the boundary
    $('#end').mouseover(function(e) {  
      if($('.youlose').length == 0) {
        $('#status').text("You win! :]");
      }
    });

    // prevent cheating
    $('body').children().each((i, v) => {
      if(v.id != 'maze') {
        $(v).mouseover(function(e) {
          losing();
        });
      }
    });
  });

});

// show red boundary and lose message
function losing() {
  $('.boundary').each((i, v) => {
    $(v).addClass('youlose');
  });
  $('#status').text("Sorry, you lost :[");
}
