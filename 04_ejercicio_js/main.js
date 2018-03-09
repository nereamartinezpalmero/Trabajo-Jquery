$("document").ready(function(){
    $("#anuncio").text("¡CLICK! para cambiar de color")
    .width (400)
    .height (400)
    .hide()
    .fadeIn(3000)
});




$("#anuncio").on("click", function(){
    let colores= ["blue", "yellow", "red", "grey", "green", "orange", "purple"];
    let color= colores[Math.floor(Math.random() * colores.length)];
    $(this).css("background-color", color);
    })

