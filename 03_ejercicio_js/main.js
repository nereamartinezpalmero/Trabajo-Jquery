$("#elem1").hover(function(){
    $("#elem1").addClass("destacar");
    $("img").attr("src", "img/arbol.jpg"); 
},function(){
  $("#elem1").removeClass("destacar");
  $("img").attr("src", "img/blanco.jpg"); 
});

$("#elem2").hover(function(){
    $("#elem2").addClass("destacar");
    $("img").attr("src", "img/lago.jpg");
},function(){
  $("#elem2").removeClass("destacar");
  $("img").attr("src", "img/blanco.jpg");
});

$("#elem3").hover(function(){
    $("#elem3").addClass("destacar");
    $("img").attr("src", "img/rio.jpg");
},function(){
  $("#elem3").removeClass("destacar");
  $("img").attr("src", "img/blanco.jpg");
});

$("#elem4").hover(function(){
    $("#elem4").addClass("destacar");
    $("img").attr("src", "img/sol.jpg");
},function(){
  $("#elem4").removeClass("destacar");
  $("img").attr("src", "img/blanco.jpg");
});


