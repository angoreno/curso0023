$( function() {
    $( "#tabla" ).tabs();
    
    
  } );

$( function(){
    $("#nota").selectmenu();
});
$( function(){
    $("#mover").draggable();
});
$("#btn").on('click', function(){
    var nota=$("#nota").val();
    alert("La nota seleccionada es: "+nota);
});