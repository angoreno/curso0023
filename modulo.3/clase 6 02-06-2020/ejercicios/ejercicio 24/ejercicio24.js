var sumaPuntos=0;
var contador=0;
var intentos=0;

function iniciarResultado(){
    if(verificaSeleccion()){
        intentosPrueba();
        if(sumaPuntos==5){
            puntajeTotal();
            desabilitaBoton();

        }else if(sumaPuntos<5){
            
            console.log(intentos);
            if (intentos<3){
                alert("Una o mas respuestas incorrectas, intente nuevamente.")
            }else if(intentos==3){
                desabilitaBoton();
                alert("no tieme mas intentos, reprovo examen.")
            }
        }
    }
    
    
}

function puntajeTotal(){

    alert("El puntaje total es " + sumaPuntos+", todas las respuestas correctas.");
}

//cuenta el puntaje
function sumaPuntaje(value){
    sumaPuntos=sumaPuntos+value;
}

//desabilita boton para enviar formulario
function desabilitaBoton(){
    var boton = document.getElementById('boton');
    boton.disabled =true;
}

//cuenta intentos de rendir cuestionario
function intentosPrueba(){
    intentos=intentos+1;
}

//valida seleccion de los radio boton
function verificaSeleccion(){
        var banderaRBTN1 = false;
        var banderaRBTN2 = false;
        var banderaRBTN3 = false;
        var banderaRBTN4 = false;
        var banderaRBTN5 = false;

    var rbtEstado = document.getElementsByName('pregunta1');
    for(var i = 0; i < rbtEstado.length; i++){
        if(rbtEstado[i].checked){
        banderaRBTN1 = true;
        break;
        }
    }
    if(!banderaRBTN1){
        alert('ERROR: Debe elegir a lo menos una respuesta por pregunta 1.');
    }
    //pregunta 2
    var rbtEstado = document.getElementsByName('pregunta2');
    for(var i = 0; i < rbtEstado.length; i++){
        if(rbtEstado[i].checked){
        banderaRBTN2 = true;
        break;
        }
    }
    if(!banderaRBTN2){
        alert('ERROR: Debe elegir a lo menos una respuesta por pregunta 2.');
    }
    //pregunta 3
    var rbtEstado = document.getElementsByName('pregunta3');
    for(var i = 0; i < rbtEstado.length; i++){
        if(rbtEstado[i].checked){
        banderaRBTN3 = true;
        break;
        }
    }
    if(!banderaRBTN3){
        alert('ERROR: Debe elegir a lo menos una respuesta por pregunta 3.');
    }
    //pregunta 4
    var rbtEstado = document.getElementsByName('pregunta4');
    for(var i = 0; i < rbtEstado.length; i++){
        if(rbtEstado[i].checked){
        banderaRBTN4 = true;
        break;
        }
    }
    if(!banderaRBTN4){
        alert('ERROR: Debe elegir a lo menos una respuesta por pregunta 4.');
    }
    //pregunta 5
    var rbtEstado = document.getElementsByName('pregunta5');
    for(var i = 0; i < rbtEstado.length; i++){
        if(rbtEstado[i].checked){
        banderaRBTN5 = true;
        break;
        }
    }
    if(!banderaRBTN5){
        alert('ERROR: Debe elegir a lo menos una respuesta por pregunta 5.');
    }

    if(banderaRBTN1&&banderaRBTN2&&banderaRBTN3&&banderaRBTN4&&banderaRBTN5){
        return true;
    }
}

