var contador=0;
function valida(key){
    var estado=document.getElementById(key).innerHTML;
    if(estado=='on'){
        cambiarColor(key);
        desactivar();
        activaCuadro(key);
        CambiaFin();
        cuentaPasos(1);
    }else{
        alert("la celda no esta disponible");
        alert("Debe eligir una selda que no este ya seleccionada, o una arriba o una abajo o una a la derecha")
    }
    
}
function cuentaPasos(paso){  
    contador = contador+paso;
}
function muestraPasos(){
    return contador;
}
function CambiaFin(){
    document.getElementById(25).innerHTML='Fin';
}
/**
 * 
 * @param {*} key 
 * funcion activa las celdas correspondientes segun selecciond e usuario
 */
function activaCuadro(key){
    var llave=parseInt(key,10);

    if(llave==2||llave==3||llave==4||llave==6||llave==11||llave==16){
        document.getElementById(llave+1).innerHTML='on';
        document.getElementById(llave+5).innerHTML='on';
    }
    if(llave==5||llave==10||llave==15||llave==20){
        document.getElementById(llave+5).innerHTML='on';
    }
    if(llave==21){
        document.getElementById(llave+1).innerHTML='on';
    }
    if(llave==7||llave==8||llave==9||llave==12||llave==13||llave==14||llave==17||llave==18||llave==19){
        document.getElementById(llave+1).innerHTML='on';
        document.getElementById(llave+5).innerHTML='on';
        document.getElementById(llave-5).innerHTML='on';
    }
    if(llave==22||llave==23||llave==24){
        document.getElementById(llave+1).innerHTML='on';
        document.getElementById(llave-5).innerHTML='on';
    }
    desactOrange();   
}
/**
 * 
 * @param {*} key 
 * funcion cambia el color de fondo de cuadro y el color de la letra
 */
function cambiarColor(key){
    document.getElementById(key).style.backgroundColor='darkorange';
    document.getElementById(key).style.color='darkorange';
}
function fin(){
    alert("Ha terminado el juego, gracias");
    alert("Los pasos realizados son: "+ (muestraPasos()+1));
    //alert("Los pasos realizados fueron: "+cont)
    //llamar funcion para dejar todo como estaba o recargar pagina 
}

/**
 * Funcion desactiva todos los cuadros
 */
function desactivar(){

    for(var i=2;i<25;i++){
        document.getElementById(i).innerHTML='off';
    }
}

/**
 * funcion deja todos los cuadros en naranja desactivados
 */
function desactOrange(){

    for(var i=2;i<25;i++){
        var color='darkorange';
        if(document.getElementById(i).style.backgroundColor==color){
            document.getElementById(i).innerHTML='off';
        }  
    }
}
