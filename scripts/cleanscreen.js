
$(() => {
  // console.log("hello");

  $('#btn').click(btnClickHandler);

  // let curWidth = $('.circle').width();
  // let curHeight = $('.circle').height();

  // let timer = setInterval(() => {
  //   curWidth += 10;
  //   curHeight += 10;
  //   $('.circle').width(curWidth).height(curHeight);
  //   console.log("still going?");
  // }, 250);

  // $('.circle').click(function(e){
  //   clearInterval(timer);
  //   $(this).remove();
  // })
});

function btnClickHandler() {
  // console.log("click");
  // console.log($('#width')[0].value);
  // console.log($('#grow')[0].value);
  // console.log($('#interval')[0].value);
  // console.log($('#numCircle')[0].value);

  let numCircle = $('#numCircle')[0].value;
  let num = 0;
  while (num < numCircle) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let offset = 20 + Math.floor(Math.random() * 40);
    let oc = 0.9;

    let circle = $('<div>', {
      class: 'circle',
      width: $('#width')[0].value,
      height: $('#width')[0].value,
    }).css({
      backgroundColor: "#" + randomColor,
      border: "1px solid #" + randomColor,
      left: offset + "%"
    }).click(function(e){
      clearInterval(timer);
      $(this).remove();
    }).mousemove(function(e){
      $(this).css({
        opacity: oc -= 0.01
      });
    }).mouseleave(function(){
      $(this).css({
        opacity: 1
      });
      oc = 0.9;
    });
  
    let grow = parseInt($('#grow')[0].value);
    let curWidth = circle.width();
  
    let timer = setInterval(() => {
      curWidth += grow;
      circle.width(curWidth).height(curWidth);
    }, $('#interval')[0].value);
  
    $('#circle-container').append(circle);

    num++;
  }
}