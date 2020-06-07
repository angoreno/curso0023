
$('#btn1').click(function(){
    $('#btn2').show(500);
    $('#btn3').show(1000);
    $('#btn4').show(1500);
    $('#btn5').show(2000);
})

var arrNumero = new Array(20);

function numeroAleatorio(){

    for(var i=0;i<20;i++){
        arrNumero[i]=Math.floor(Math.random()*101);
    }
    var boton1="";
    for(var i=0;i<20;i++){
        boton1 = boton1+arrNumero[i]+" ";
    }
    $('#in1').val(boton1);
}

function numeroPar(){

    var pares="";
    for(var i=0;i<20;i++){
        if((arrNumero[i]%2)==0){
            pares=pares+arrNumero[i]+" ";
        }
    }
    $('#in2').val(pares);
}

function numeroImpar(){

    var impar="";
    for(var i=0;i<20;i++){
        if((arrNumero[i]%2)!=0){
            impar=impar+arrNumero[i]+" ";
        }
    }
    $('#in3').val(impar);
}

function numeroPrimo(){
    //var arrNumeroP=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var primo="";
    var i=0;
  
    for(i=0;i<20;i++){
        var nPrim=false;
        for(var j=2;j<arrNumero[i];j++){
            console.log("hola2");
            if((arrNumero[i]%j)==0){
                nPrim=true;
            }  
        }
        if(nPrim==false){
            if(arrNumero[i]!=0){
                primo=primo+arrNumero[i]+" ";
            }
        }   
    }
    $('#in4').val(primo);
}
function numeroCompuesto(){
    
    var noPrimo="";
  
    for(i=0;i<20;i++){
        var nPrim=false;
        for(var j=2;j<arrNumero[i];j++){
            console.log("hola2");
            if((arrNumero[i]%j)==0){
                nPrim=true;
            }  
        }
        if(nPrim==true){
            if(arrNumero[i]!=0||arrNumero[i]!=1){
                noPrimo=noPrimo+arrNumero[i]+" ";
            }
        }   
    }
    $('#in5').val(noPrimo);
}