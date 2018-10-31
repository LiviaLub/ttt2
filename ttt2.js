$( document ).ready(function() {

var player = 'x';
$(".cell").on('click', function(event){

   var cellSelected = $(this);
  if (cellSelected.hasClass('fa fa-times') || cellSelected.hasClass('fa fa-circle-o')){
    alert("Spot taken, choose another one. ");
  }
  else{
    if(player == 'x'){
      cellSelected.addClass('fa fa-times');
      if (checkWinner('fa fa-times')){
       alert("Winner is " + player);
       


      }
      else{
          player = 'o';
      }

    }
    else{
      cellSelected.addClass('fa fa-circle-o');
      if (checkWinner('fa fa-circle-o')){
       alert("Winner is " + player);

      }
      else{
      player = 'x';

    }
    }

}

});
function checkWinner(symbol){
  if ($('.cell1').hasClass(symbol) && $('.cell2').hasClass(symbol) && $('.cell3').hasClass(symbol)){
   return true;
  }
  else if ($('.cell4').hasClass(symbol) && $('.cell5').hasClass(symbol) && $('.cell6').hasClass(symbol)){
   return true;
  }
  else if ($('.cell7').hasClass(symbol) && $('.cell8').hasClass(symbol) && $('.cell9').hasClass(symbol)) {
   return true;
  }
  else if ($('.cell1').hasClass(symbol) && $('.cell4').hasClass(symbol) && $('.cell7').hasClass(symbol)) {
   return true;
  }
  else if ($('.cell2').hasClass(symbol) && $('.cell5').hasClass(symbol) && $('.cell8').hasClass(symbol)) {
   return true;
  }
  else if ($('.cell3').hasClass(symbol) && $('.cell6').hasClass(symbol) && $('.cell9').hasClass(symbol)) {
   return true;
  }
  else if ($('.cell1').hasClass(symbol) && $('.cell5').hasClass(symbol) && $('.cell9').hasClass(symbol)) {
   return true;
  }
  else if ($('.cell3').hasClass(symbol) && $('.cell5').hasClass(symbol) && $('.cell7').hasClass(symbol)) {
  return true;
  }
  else{
    return false;
  }

}

   $("#btn").click(function(){
        $(".cell").removeClass('fa fa-times');
        $(".cell").removeClass('fa fa-circle-o');

    });

});
