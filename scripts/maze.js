let end = false;

$(() => {
  // start the game
  $('#start').click(function(e) {

    // reset the maze
    end = false;
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
        end = true;
      }
    });

    // prevent cheating
    $('#maze').mouseleave(function(e) {
      losing();
    });
  });

});

// show red boundary and lose message
function losing() {
  if (!end) {
    $('.boundary').each((i, v) => {
      $(v).addClass('youlose');
    });
    $('#status').text("Sorry, you lost :[");
  }
}
