/**
 * 
 * @param {lista seleccionada} opcion 
 * @param {texto ingresado en input} texto 
 * Funcion valida cual es la lista seleccionada y crea segun seleccion
 */
function enviar(opcion,texto){

    var listaJ = opcion.value;
    var textoJ = texto.value;

    if (textoJ==""){
        alert("No se ha ingresado texto intente nuevamente")
    }else{
        if(listaJ=='lista1'){
            crearListaD(textoJ);
        }else if (listaJ=='lista2'){
            crearListaO(textoJ);
        }else{
            alert("Seleccione la lista para añadir elemento");
        }
    }

    
}

/**
 * 
 * @param {texto ingresado en input} value 
 * funcioncrea una etiqueta li con el parametro value q corresponde a texto ingresado
 */
function crearListaD(value){

    var listaDesordenada = document.getElementById('desorden');

    var nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = value;

    listaDesordenada.appendChild(nuevoElemento);

}
/**
 * 
 * @param {texto ingresado en input} value 
 * funcioncrea una etiqueta li con el parametro value q corresponde a texto ingresado
 */
function crearListaO(value){

    var listaDesordenada = document.getElementById('orden');

    var nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = value;

    listaDesordenada.appendChild(nuevoElemento);

}
