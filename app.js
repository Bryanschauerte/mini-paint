$(document).ready(function(){

  var color = 'white';
  var colors = 'red, yellow, blue, green, white';

  $('.box').on('click', function(){
    $(this).addClass(color);

  })

  $('.box').on('dragenter', function(){
    $(this).addClass(color);

  })


  $('.box').on('dblclick', function(){
    $(this).removeClass(color);
  })

  $('#reset').on('click', function() {
    $('.box').removeClass(colors);
  })

  $('#red').on('click', function(){
    color = 'red';
  })

  $('#blue').on('click', function(){
    color = 'blue';
  })

  $('#green').on('click', function(){
    color = 'green';
  })

  $('#yellow').on('click', function(){
    color = 'yellow';
  })

  $('#white').on('click', function(){
    color = 'white';
  })


});
