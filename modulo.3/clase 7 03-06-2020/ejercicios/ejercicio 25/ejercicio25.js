
var seleccion = false;

function calculoDivisa(){

    var clpS = document.getElementById('clp').value;
    var cambio=0;
    
    if(clpS==""){
        document.getElementById('error').innerHTML = "Ingrese una cantidad en peso Chileno";
    }else{
        var clp = parseInt(clpS);
        seleccion=verificaSeleccion();
        if(Number.isNaN(clp)){
            document.getElementById('error').innerHTML = "debe ingresar numeros en peso Chileno";
        }else if(seleccion==false){
            document.getElementById('error').innerHTML = "debe ingresar una moneda para realizar el cambio";
        }else{

            var memo=document.getElementsByName('cambio');
            for(i=0; i<memo.length; i++){
                if(memo[i].checked){
                //var memory=memo[i].checked;
                var moneda=memo[i].value;
                console.log(moneda);
                }
            }
        }
    }
    
    switch(moneda){
        case "PA":
            cambio=pesoArgentino(clp);
            break;
        case "SL":
            cambio=solPeruano(clp);
            break;
        case "BL":
            cambio=boliviano(clp);
            break;
        case "BV":
           cambio=bolivarVenezolano(clp);
            break;
        case "GH":
            cambio=gourdeHaitiano(clp);
            break;
    }
    
    document.getElementById('respuesta').innerHTML =  cambio;
    var confirmacion="Conversion exitosa"
    document.getElementById('confirm').innerHTML =  confirmacion;
}

function pesoArgentino(peso){
    var converArgentino=peso/11.13; 
    return converArgentino; 
    //funcion de calculo
    //peso argentino CLP 11,13
}

function solPeruano(peso){
    var converPeru=peso/223.36; 
    return converPeru; 
    //funcion de calculo
    //peso peruano CLP 223,36 
}

function boliviano(peso){
    var converBolivia=peso/110.87; 
    return converBolivia; 
    //funcion de calculo
    //peso boliviano CLP 110,87
}

function bolivarVenezolano(peso){
    var converVenezu=peso/0.0039; 
    return converVenezu; 
    //funcion de calculo
    //peso venezolano CLP 0,0039
}

function gourdeHaitiano(peso){
    var converHaiti=peso/7.18; 
    return converHaiti; 
    //funcion de calculo
    //peso haitiano CLP 7,18
}
function verificaSeleccion(){
    var banderaRBTN = false;

    var rbtEstado = document.getElementsByName('cambio');
    for(var i = 0; i < rbtEstado.length; i++){
        if(rbtEstado[i].checked){
        banderaRBTN = true;
        break;
        }
    }
    return banderaRBTN;
}