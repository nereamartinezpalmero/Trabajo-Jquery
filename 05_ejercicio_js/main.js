$("div").ready(function(){
    $("#carrete").hide();
});

$(document).on("click", function(){
  $("h1").hide();
  $("#carrete").show(); 
});


$("img").on("mouseover", function(){
  $(this).css("width", "300") ;
});


$("img").on ("mouseout", function(){
  $(this).css("width", "250");
});
