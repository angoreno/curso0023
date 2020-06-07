
var rojo=0;
var verde=0;
var azul=0;
$('#r1').click(function(){
    rojo=$("#r1").val();
    $("#rojo").val(rojo);   
    $('#color').css("background-color", "rgb("+rojo+","+ verde+"," +azul+")");  
})
$('#r2').click(function(){
    verde=$("#r2").val()
    $("#verde").val(verde); 
    $('#color').css("background-color", "rgb("+rojo+","+ verde+"," +azul+")");
})
$('#r3').click(function(){
    azul=$("#r3").val()
    $("#azul").val(azul); 
    $('#color').css("background-color", "rgb("+rojo+","+ verde+"," +azul+")");
})
    


