
var fech1="";
var fech2="";
var mensaje="";
var dAño="";

$('#btn').click(function(){
    fech1=new Date($('#fecha1').val())
    fech2=new Date($('#fecha2').val())
    var finAño = new Date(2020,12,31,00,00,00);
    
    if(fech1>fech2){
        mensaje="La primera fecha es mayor"
        dAño=finAño-fech1;
    }else if(fech1<fech2){
        mensaje="La Segunda fecha es mayor"
        dAño=finAño-fech2;
    }else if(fech1==fech2){
        mensaje="Las fechas son iguales"
        dAño=finAño-fech1;
    }
    
    var dif=fech2.getTime()-fech1.getTime();
    var dias = Math.trunc(dif/(1000 * 60 * 60 * 24));
    var diasFAño=Math.trunc(dAño/(1000 * 60 * 60 * 24));

    var total =mensaje+ "\n"+"La diferencia de dias entre las 2 fechas es: "+dias+"\n"+"La diferencia entre la mayor y findeaño es: "+diasFAño;

    $('#texto').val(total);
})


