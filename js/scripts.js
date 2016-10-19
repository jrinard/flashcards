$(document).ready(function() {//after doc is ready, function runs.


  $(".clickable1").click(function() {//click method runs a new function.
    console.log("clickable1");
    $("#card-showing").toggle();//manatee toggles

  });


  $(".clickable2").click(function() {//click method runs a new function.
    console.log("clickable2");
    $("#card2-showing").toggle();//manatee toggles

  });

  // $("button").click(function() {//p tags clickable
  //   $("p").show();// clickable shows image
  // });




});
