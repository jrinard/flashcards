$(document).ready(function() {//after doc is ready, function runs.


  $(".clickable1").click(function() {//click method runs a new function.
    console.log("clickable1");
    $("#card-showing").show();//manatee toggles
    $("#card-hidden").show();
  });


  $(".clickable2").click(function() {//click method runs a new function.
    console.log("clickable2");
    $("#card2-showing").show();//manatee toggles
    $("#card2-hidden").hide();
  });

  // $("button").click(function() {//p tags clickable
  //   $("p").show();// clickable shows image
  // });




});
