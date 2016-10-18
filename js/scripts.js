$(document).ready(function() {//after doc is ready, function runs.


  $(".clickable1").click(function() {//click method runs a new function.
    $("#card-showing").slideToggle();//manatee toggles
    $("#card-hidden").slideToggle();
  });

  $(".clickable2").click(function() {//click method runs a new function.
    $("#card2-showing").slideToggle();//manatee toggles
    $("#card2-hidden").slideToggle();
  });



});
